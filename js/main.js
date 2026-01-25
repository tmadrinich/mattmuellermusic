document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("/partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("site-header").innerHTML = data;
      initNav();
      highlightActiveLink();
    })
    .catch(err => console.error("Error loading header:", err));

  // Load Footer
  fetch("/partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("site-footer").innerHTML = data;
    })
    .catch(err => console.error("Error loading footer:", err));
});

function initNav() {
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

function highlightActiveLink() {
  const navLinks = document.querySelectorAll(".main-nav a");
  const current = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}
