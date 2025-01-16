function showNav() {
    document.getElementById('onMobile').style.display = 'flex';
}

function closeNav() {
    document.getElementById('onMobile').style.display = 'none';
}


// Function to move the hovered element based on cursor position
document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mousemove', (event) => {
        const rect = item.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        item.style.transform = `translate(${offsetX / 10}px, ${offsetY / 10}px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translate(0, 0)'; // Reset position on mouse leave
    });
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
    });document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('a'); // Select all nav links
        const navMenu = document.getElementById('onMobile'); // Mobile navigation menu
    
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default anchor behavior
    
                // Get the target section's ID from the href attribute
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
    
                if (targetElement) {
                    // Scroll to the target element smoothly
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    document.addEventListener('DOMContentLoaded', () => {
                        const links = document.querySelectorAll('nav a'); // Select all nav links
                        const navMenu = document.getElementById('onMobile'); // Mobile navigation menu
                    
                        links.forEach(link => {
                            link.addEventListener('click', (event) => {
                                event.preventDefault(); // Prevent default anchor behavior
                    
                                // Get the target section's ID from the href attribute
                                const targetId = link.getAttribute('href');
                                const targetElement = document.querySelector(targetId);
                    
                                if (targetElement) {
                                    // Scroll to the target element smoothly
                                    targetElement.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                    
                                
                                
                            });
                        });
                    });
                    
                }
    
                // Hide the mobile navigation menu
                if (navMenu) {
                    navMenu.style.display = 'none';
                }
            });
        });
    });
    