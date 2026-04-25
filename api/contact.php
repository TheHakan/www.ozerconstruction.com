<?php
/**
 * MyzIron — Contact Form Handler (PHP / Hostinger)
 * Replacement for the Vercel serverless api/contact.js
 *
 * Requires cURL and OpenSSL (enabled on all Hostinger shared plans).
 * Uses PHPMailer via SMTP (same credentials as the Node version).
 *
 * Environment variables → set in Hostinger hPanel → PHP Config → or .env.php
 */

// ── Config ──────────────────────────────────────────────────────────────────
// Load .env.php if it exists (see .env.php.example below)
if (file_exists(__DIR__ . '/../.env.php')) {
    require __DIR__ . '/../.env.php';
}

define('SMTP_HOST',   getenv('SMTP_HOST')   ?: 'mail.myziron.com');
define('SMTP_PORT',   (int)(getenv('SMTP_PORT')   ?: 587));
define('SMTP_SECURE', getenv('SMTP_SECURE') === 'true'); // false = STARTTLS
define('SMTP_USER',   getenv('SMTP_USER')   ?: '');
define('SMTP_PASS',   getenv('SMTP_PASS')   ?: '');
define('MAIL_TO',     'info@myziron.com');
define('ALLOWED_ORIGIN', 'https://myziron.com');

// ── CORS ─────────────────────────────────────────────────────────────────────
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ── Parse request body ───────────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) {
    $body = $_POST; // fallback for regular form submit
}

function field(array $body, array $keys): string {
    foreach ($keys as $k) {
        if (!empty($body[$k])) return trim((string)$body[$k]);
    }
    return '';
}

$name    = field($body, ['txtFullName',    'name']);
$email   = field($body, ['txtWorkMail',    'email']);
$phone   = field($body, ['txtPhone',       'phone']);
$company = field($body, ['txtCompanyName', 'company']);
$message = field($body, ['txtMessage',     'message']);

// ── Validate ──────────────────────────────────────────────────────────────────
if (!$name || !$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and email are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit;
}

// ── Build HTML email ──────────────────────────────────────────────────────────
function row(string $label, string $value): string {
    return '<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">'
         . htmlspecialchars($label, ENT_QUOTES, 'UTF-8') . ':</td>'
         . '<td>' . htmlspecialchars($value, ENT_QUOTES, 'UTF-8') . '</td></tr>';
}

$rows  = row('Ad / İsim', $name);
$rows .= row('E-posta', $email);
if ($phone)   $rows .= row('Telefon', $phone);
if ($company) $rows .= row('Şirkət / Şirket', $company);
if ($message) $rows .= row('Mesaj', $message);

$htmlBody = <<<HTML
<h2 style="font-family:sans-serif;">Web Saytı - Əlaqə Forması</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
  {$rows}
</table>
HTML;

// ── Send via SMTP using native sockets ───────────────────────────────────────
// (PHPMailer is not installed; using PHP's built-in mail() as primary,
//  with SMTP via socket as fallback when available.)
//
// For full SMTP auth on Hostinger, upload PHPMailer and uncomment the
// block below, OR configure the domain email in hPanel → "Default email"
// and use PHP mail() which routes via the server's sendmail.

$subject = '=?UTF-8?B?' . base64_encode('Web Saytı - Əlaqə Forması: ' . $name) . '?=';
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: "MyZiron Web" <' . SMTP_USER . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
]);

// Try SMTP socket first (for when Hostinger SMTP is available)
$sent = send_smtp($htmlBody, $subject);

if (!$sent) {
    // Fallback: PHP mail() — works if Hostinger's sendmail is configured
    $sent = mail(MAIL_TO, $subject, $htmlBody, $headers);
}

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again later.']);
}

// ── SMTP socket implementation ───────────────────────────────────────────────
function send_smtp(string $body, string $subject): bool {
    $host   = SMTP_HOST;
    $port   = SMTP_PORT;
    $user   = SMTP_USER;
    $pass   = SMTP_PASS;
    $from   = $user;
    $to     = MAIL_TO;

    if (!$user || !$pass) return false;

    $errno  = 0;
    $errstr = '';
    $prefix = SMTP_SECURE ? 'ssl://' : '';
    $socket = @fsockopen($prefix . $host, $port, $errno, $errstr, 15);
    if (!$socket) return false;

    $read = function() use ($socket): string {
        return fgets($socket, 512);
    };
    $send = function(string $cmd) use ($socket): void {
        fputs($socket, $cmd . "\r\n");
    };

    $read(); // 220 greeting
    $send('EHLO ' . gethostname());
    while (($line = $read()) && substr($line, 3, 1) === '-') {}

    // STARTTLS on port 587
    if ($port === 587 && !SMTP_SECURE) {
        $send('STARTTLS');
        $read();
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        $send('EHLO ' . gethostname());
        while (($line = $read()) && substr($line, 3, 1) === '-') {}
    }

    $send('AUTH LOGIN');
    $read();
    $send(base64_encode($user));
    $read();
    $send(base64_encode($pass));
    $resp = $read();
    if (strpos($resp, '235') === false) {
        fclose($socket); return false;
    }

    $send('MAIL FROM: <' . $from . '>');  $read();
    $send('RCPT TO: <'   . $to   . '>');  $read();
    $send('DATA');                         $read();

    $msg = "MIME-Version: 1.0\r\n"
         . "Content-Type: text/html; charset=UTF-8\r\n"
         . "From: \"MyZiron Web\" <{$from}>\r\n"
         . "To: {$to}\r\n"
         . "Reply-To: " . addslashes(MAIL_TO) . "\r\n"
         . "Subject: {$subject}\r\n"
         . "\r\n"
         . $body
         . "\r\n.";
    $send($msg);
    $read();

    $send('QUIT');
    fclose($socket);
    return true;
}
