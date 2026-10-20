// UI/UX: mobile menu toggle. Without JavaScript the full menu simply stays open.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.nav-toggle');
    var list = document.getElementById('nav-list');
    if (!btn || !list) return;
    var narrow = window.matchMedia('(max-width: 47.99rem)');
    function set(open) {
      btn.setAttribute('aria-expanded', String(open));
      list.hidden = !open;
    }
    function sync() { set(!narrow.matches); }
    btn.addEventListener('click', function () {
      set(btn.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && narrow.matches && btn.getAttribute('aria-expanded') === 'true') {
        set(false);
        btn.focus();
      }
    });
    if (narrow.addEventListener) narrow.addEventListener('change', sync);
    sync();
  });
})();
