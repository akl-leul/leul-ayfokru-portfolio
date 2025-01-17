function showNav() {
    document.getElementById('onMobile').style.display = 'flex';
}

function closeNav(){
    document.getElementById('onMobile').style.display = 'none';
}// Smooth Scrolling for Navigation Links
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
        document.getElementById('onMobile').style.display = 'none';
    });
});})