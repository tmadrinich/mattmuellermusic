// =====================
// Load Header & Footer
// =====================
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("/partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;
      initNav(); // initialize nav after header loads
    })
    .catch(err => console.error("Header load error:", err));

  // Load footer
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-footer").innerHTML = html;
    })
    .catch(err => console.error("Footer load error:", err));
});

// =====================
// Initialize Navigation
// =====================
function initNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // =====================
  // Highlight Active Page
  // =====================
  const navLinks = document.querySelectorAll(".main-nav a");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
      link.classList.add("active");
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
fetch('partials/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('site-header').innerHTML = data;
    initNav();
    setActiveNav();
  });

fetch('partials/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('site-footer').innerHTML = data;
  });

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

function setActiveNav() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const pageName = currentPage.replace('.html','');

  document.querySelectorAll('.main-nav a[data-page]').forEach(link => {
    if(link.dataset.page === pageName) link.classList.add('active');
  });
}

