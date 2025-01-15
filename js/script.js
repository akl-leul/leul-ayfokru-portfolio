document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.icon'); // Updated to match the button class
    const navMenu = document.querySelector('.onMobile');

    navToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'flex'; // Show the mobile menu
            
        } else {
            navMenu.style.display = 'none'; // Hide the mobile menu
            navMenu.style.animation = 'closeMenu 0.75s'; // Add animation
        }
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
