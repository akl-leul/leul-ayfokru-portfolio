function showNav() {
    document.getElementById('onMobile').style.display = 'flex';
    document.getElementById('icon').style.display = 'none';
}

function closeNav(){
    document.getElementById('onMobile').style.display = 'none';
    document.getElementById('icon').style.display = 'flex';
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('http') || href.startsWith('https')) {
            // Allow default behavior for external links
            return;
        }
        e.preventDefault(); // Prevent default anchor click behavior for internal links
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById('onMobile').style.display = 'none';
    });
});

// Hide the loader after 5 seconds
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
}, 5000);
