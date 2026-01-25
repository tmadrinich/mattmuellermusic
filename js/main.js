// =====================
// main.js – Load header & footer, mobile nav, active link
// =====================

document.addEventListener("DOMContentLoaded", function () {
  // ---------------------
  // Load Header
  // ---------------------
  fetch("partials/header.html")
    .then((res) => {
      if (!res.ok) throw new Error("Header not found");
      return res.text();
    })
    .then((data) => {
      document.getElementById("site-header").innerHTML = data;
      initNav();          // Initialize mobile nav toggle
      highlightActiveLink(); // Highlight current page
    })
    .catch((err) => console.error("Error loading header:", err));

  // ---------------------
  // Load Footer
  // ---------------------
  fetch("partials/footer.html")
    .then((res) => {
      if (!res.ok) throw new Error("Footer not found");
      return res.text();
    })
    .then((data) => {
      document.getElementById("site-footer").innerHTML = data;
    })
    .catch((err) => console.error("Error loading footer:", err));
});

// =====================
// Mobile Nav Toggle
// =====================
function initNav() {
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// =====================
// Highlight Active Page
// =====================
function highlightActiveLink() {
  const navLinks = document.querySelectorAll(".main-nav a");
  const current = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (href === "index.html" && current === "")) {
      link.classList.add("active");
    }
  });
}
