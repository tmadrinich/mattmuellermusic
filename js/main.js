// ============================
// LOAD HEADER
// ============================
fetch('partials/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-header').innerHTML = data;
    initNav();
    setActiveNav();
  });

// ============================
// LOAD FOOTER
// ============================
fetch('partials/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-footer').innerHTML = data;
  });

// ============================
// SET ACTIVE NAV LINK
// ============================
function setActiveNav() {
  const currentPage =
    location.pathname.split('/').pop() || 'index.html';
  const pageName = currentPage.replace('.html', '');

  document.querySelectorAll('.main-nav a[data-page]')
    .forEach(link => {
      if (link.dataset.page === pageName) {
        link.classList.add('active');
      }
    });
}

// ============================
// MOBILE NAV TOGGLE
// ============================
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
