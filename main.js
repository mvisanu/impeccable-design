/* Progressive enhancement only. With JS off the page reads in full:
   the lens controls stay hidden, nothing is dimmed, and the email
   address renders through the <noscript> fallback. */

(function () {
  'use strict';

  /* ---- Email: assembled at runtime so scrapers get nothing to lift ---- */
  var mail = document.getElementById('email-link');
  if (mail) {
    var user = mail.getAttribute('data-u');
    var domain = mail.getAttribute('data-d');
    if (user && domain) {
      var address = user + '@' + domain;
      mail.textContent = address;
      mail.href = 'mailto:' + address;
    }
  }

  /* ---- Role lens: foregrounds matching work, never removes anything ---- */
  var controls = document.getElementById('lens-controls');
  var status = document.getElementById('lens-status');
  if (!controls) return;

  /* Scoped to content only. A bare [data-lens] sweep also matches the lens
     buttons, which would dim the reader's way back to "Show all". */
  var targets = Array.prototype.slice.call(
    document.querySelectorAll('.rec[data-lens], .role[data-lens], .caps__cluster[data-lens]')
  );
  if (!targets.length) return;

  var buttons = Array.prototype.slice.call(controls.querySelectorAll('.lens__btn'));
  var names = {
    ai: 'AI/ML Engineer',
    cloud: 'Cloud Solution Architect',
    swe: 'Senior Software Engineer'
  };

  controls.hidden = false;

  function apply(lens) {
    targets.forEach(function (el) {
      var tags = (el.getAttribute('data-lens') || '').split(/\s+/);
      var match = !lens || tags.indexOf(lens) !== -1;
      el.classList.toggle('is-dimmed', !match);
    });

    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lens') === lens));
    });

    if (status) {
      status.textContent = lens
        ? 'Foregrounding work relevant to ' + names[lens] + '. Everything remains on the page.'
        : '';
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.getAttribute('data-lens') || '');
    });
  });
})();
