// =====================
// main.js – Load header & footer, mobile nav, active link, fade
// =====================
document.addEventListener("DOMContentLoaded", function () {
  // Fade in page
  document.body.classList.add("fade-in");

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
      initNav();           // Initialize mobile nav toggle
      highlightActiveLink(); // Highlight current page
      initLinkFade();      // Initialize fade on links
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
  const navLinks = document.querySelectorAll(".nav-links a, .main-nav a");
  const current = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (href === "index.html" && current === "")) {
      link.classList.add("active");
    }
  });
}

// =====================
// Fade on link click
// =====================
function initLinkFade() {
  const internalLinks = document.querySelectorAll("a[href$='.html'], a[href^='./']");
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore external links
      if (!href || href.startsWith("http")) return;

      e.preventDefault();

      // Fade out
      document.body.classList.remove("fade-in");
      document.body.style.opacity = 0;

      setTimeout(() => {
        window.location.href = href;
      }, 500); // Match transition duration
    });
  });
}
