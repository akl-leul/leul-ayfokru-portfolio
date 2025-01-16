document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.icon');
    const navMenu = document.querySelector('.onMobile');

    if (navToggle && navMenu) { // Check if elements exist
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    } else {
        console.error('Elements not found: Check your HTML structure or class names.');
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
