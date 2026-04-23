/* SCZ Metal — universal contact form AJAX handler */
(function () {
  var API = '/api/contact.php';

  /* Find a field value inside a container by trying multiple name/id substrings */
  function pick(root, keys) {
    for (var k = 0; k < keys.length; k++) {
      var el = root.querySelector('[name*="' + keys[k] + '"],[id*="' + keys[k] + '"]');
      if (el) return (el.value || '').trim();
    }
    return '';
  }

  /* Show a success message inside a container element */
  function showSuccess(container, lang) {
    var msgs = {
      tr: '<div style="text-align:center;padding:40px 0;"><h4>Mesajınız gönderildi!</h4><p>En kısa sürede sizinle iletişime geçeceğiz.</p></div>',
      en: '<div style="text-align:center;padding:40px 0;"><h4>Message sent!</h4><p>We\'ll be in touch shortly.</p></div>',
      ru: '<div style="text-align:center;padding:40px 0;"><h4>Сообщение отправлено!</h4><p>Мы свяжемся с вами в ближайшее время.</p></div>',
      az: '<div style="text-align:center;padding:40px 0;"><h4>Mesajınız göndərildi!</h4><p>Ən qısa müddətdə sizinlə əlaqə saxlayacağıq.</p></div>'
    };
    container.innerHTML = msgs[lang] || msgs['tr'];
  }

  /* Detect page language from <html lang="..."> */
  function pageLang() {
    var l = (document.documentElement.lang || 'tr').toLowerCase().slice(0, 2);
    return ['tr', 'en', 'ru', 'az'].indexOf(l) !== -1 ? l : 'tr';
  }

  /* Find the nearest sensible success-message container */
  function findMessageTarget(el) {
    /* Prefer .py-7 wrapper (modal), otherwise the form itself */
    var t = el.closest('.py-7') || el.closest('form') || el.parentElement;
    return t;
  }

  /* Core AJAX send */
  function sendContact(btn, fieldsRoot, msgTarget) {
    btn.disabled = true;

    var data = {
      txtFullName:    pick(fieldsRoot, ['txtFullName',    'FullName']),
      txtWorkMail:    pick(fieldsRoot, ['txtWorkMail',    'WorkMail']),
      txtPhone:       pick(fieldsRoot, ['txtPhone',       'Phone']),
      txtCompanyName: pick(fieldsRoot, ['txtCompanyName', 'CompanyName']),
      txtMessage:     pick(fieldsRoot, ['txtMessage',     'Message'])
    };

    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function (r) { return r.json(); })
    .then(function (result) {
      if (result.success) {
        showSuccess(msgTarget, pageLang());
      } else {
        alert(result.error || 'Hata oluştu. Lütfen tekrar deneyin.');
        btn.disabled = false;
      }
    })
    .catch(function () {
      alert('Hata oluştu. Lütfen tekrar deneyin.');
      btn.disabled = false;
    });
  }

  /* ── Attach handlers once DOM is ready ─────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var lang = pageLang();

    /* 1) Standalone forms with action="/api/contact" (e.g. RU, AZ pages) */
    var forms = document.querySelectorAll('form[action="/api/contact"]');
    for (var f = 0; f < forms.length; f++) {
      (function (form) {
        /* Skip az-contact-form which has its own inline handler */
        if (form.id === 'az-contact-form') return;

        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var btn = form.querySelector('[type="submit"]');
          sendContact(btn, form, findMessageTarget(form));
        });
      })(forms[f]);
    }

    /* 2) Contact buttons inside outer form1 (ASP.NET WebForms pages).
          These buttons have type="button" (set by the Python processor)
          so they do not trigger form1 submission. */
    var panelBtns = document.querySelectorAll(
      '#CtrWeCallYou_btnSend, #ContentPlaceHolder1_btnSend'
    );
    for (var b = 0; b < panelBtns.length; b++) {
      (function (btn) {
        /* Walk up to find the panel/container that has the fields */
        var panel = btn.closest('#CtrWeCallYou_UpdatePanel1') ||
                    btn.closest('.py-7') ||
                    btn.closest('.contact-block') ||
                    btn.closest('form') ||
                    btn.parentElement;

        /* Walk further up for a good message target */
        var msgTarget = btn.closest('.py-7') ||
                        btn.closest('.contact-block__form') ||
                        btn.parentElement;

        btn.addEventListener('click', function (e) {
          e.preventDefault();
          sendContact(btn, panel, msgTarget);
        });
      })(panelBtns[b]);
    }
  });
})();
