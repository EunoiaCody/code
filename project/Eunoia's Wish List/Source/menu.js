document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  menuBtn.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });
});