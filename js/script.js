// Toggle Navigation Menu for Mobile View
const navToggle = document.querySelector('.toggle-button'); // Updated to match the button class
const navMenu = document.querySelector('.icon');

navToggle.addEventListener('click', () => {
  if (navMenu.style.display === 'none' || navMenu.style.display === '') {
    navMenu.style.display = 'flex'; // Show the mobile menu
  } else {
    navMenu.style.display = 'none'; // Hide the mobile menu
  }
});
