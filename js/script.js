document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  // Toggle Class Active saat Hamburger Menu diklik
  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

  // Menghilangkan kelas Active saat klik di luar area Navbar
  document.addEventListener("click", function (e) {
    if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
