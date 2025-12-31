/* k9mail.app site JS (small, deferred) */
(function () {
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function initSidebarNav() {
    var sidebar = qs('#headers-4-sidebar');
    var toggles = qsa('[data-id="headers-4-sidebar-toggle"]');
    var closes = qsa('[data-id="headers-4-sidebar-close"]');
    if (!sidebar || (!toggles.length && !closes.length)) return;

    function setExpanded(expanded) {
      toggles.forEach(function (el) { el.setAttribute('aria-expanded', expanded ? 'true' : 'false'); });
      sidebar.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    }
    function open() { sidebar.classList.add('show'); setExpanded(true); }
    function close() { sidebar.classList.remove('show'); setExpanded(false); }
    function isOpen() { return sidebar.classList.contains('show'); }

    if (!sidebar.hasAttribute('aria-hidden')) sidebar.setAttribute('aria-hidden', 'true');
    toggles.forEach(function (el) { if (!el.hasAttribute('aria-expanded')) el.setAttribute('aria-expanded', 'false'); });
    toggles.forEach(function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); isOpen() ? close() : open(); });
    });
    closes.forEach(function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); close(); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen()) close(); });
  }

  function initDropdownDoubleTap() {
    qsa('.navbar-nav .dropdown > a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (!a.classList.contains('parent-clicked')) {
          e.preventDefault();
          a.classList.add('parent-clicked');
          window.setTimeout(function () { a.classList.remove('parent-clicked'); }, 1200);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initSidebarNav();
    initDropdownDoubleTap();
  });
})();


