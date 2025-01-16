document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.icon'); // Updated to match the button class
    const navMenu = document.querySelector('.onMobile');

    navToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.add('active'); // Hide the mobile menu

        } else {
            navMenu.classList.remove('active'); // Show the mobile menu
        }
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
