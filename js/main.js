// Load header
fetch('partials/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;
    initNav();
    setActiveNav();
  });

// Load footer
fetch('partials/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('site-footer').innerHTML = html;
  });

function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const pageName = page.replace('.html', '');

  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.dataset.page === pageName) {
      link.classList.add('active');
    }
  });
}

