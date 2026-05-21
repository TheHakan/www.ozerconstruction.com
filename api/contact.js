const nodemailer = require("nodemailer");

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://ozerconstruction.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};

  // Support both simple and ASP.NET-style field names
  const name = String(body.txtFullName || body.name || "").trim();
  const email = String(body.txtWorkMail || body.email || "").trim();
  const phone = String(body.txtPhone || body.phone || "").trim();
  const company = String(body.txtCompanyName || body.company || "").trim();
  const message = String(body.txtMessage || body.message || "").trim();

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.ozerconstruction.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const rows = [
    ["Ad / İsim", name],
    ["E-posta", email],
    phone ? ["Telefon", phone] : null,
    company ? ["Şirkət / Şirket", company] : null,
    message ? ["Mesaj", message] : null,
  ]
    .filter(Boolean)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">${label}:</td><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const mailOptions = {
    from: `"Özer Construction" <${process.env.SMTP_USER}>`,
    to: "info@ozerconstruction.com",
    replyTo: email,
    subject: `Web Saytı - Əlaqə Forması: ${name}`,
    html: `
      <h2 style="font-family:sans-serif;">Web Saytı - Əlaqə Forması</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
        ${rows}
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
};
