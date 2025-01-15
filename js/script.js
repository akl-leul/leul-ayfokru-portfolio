document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.icon'); // Updated to match the button class
    const navMenu = document.querySelector('.onMobile');

    navToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active'); // Hide the mobile menu
        } else {
            navMenu.classList.add('active'); // Show the mobile menu
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

    // Typewriter Effect for .skilltext
    const skillText = document.querySelector('.skill');
    const text = skillText.textContent;
    skillText.textContent = '';

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            skillText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust typing speed here
        }
    }

    typeWriter();
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
