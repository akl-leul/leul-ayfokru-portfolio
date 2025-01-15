// Toggle Navigation Menu for Mobile View
const navToggle = document.querySelector('.onMobile');
const navMenu = document.querySelector('.icon');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});