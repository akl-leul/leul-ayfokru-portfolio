// Toggle Navigation Menu for Mobile View
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.icon'); // Updated to match the button class
const navMenu = document.querySelector('.onMobile');

    navToggle.addEventListener('click', () => {
  if (navMenu.style.display === 'none' || navMenu.style.display === '') {
    navMenu.style.display = 'flex'; // Show the mobile menu
  } else {
    navMenu.style.display = 'none'; // Hide the mobile menu
  }
    });
});
