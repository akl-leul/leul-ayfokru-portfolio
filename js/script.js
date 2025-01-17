function showNav() {
    document.getElementById('onMobile').style.display = 'flex';
}

function closeNav(){
    document.getElementById('onMobile').style.display = 'none';
}
// Get all links with 'a'
const links = document.querySelectorAll('a');

// Add event listener to each link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent default behavior
        e.preventDefault();

        // Get the href attribute
        const href = link.getAttribute('href');

        // Get the target element
        const target = document.querySelector(href);

        // If the target element exists, scroll to it smoothly
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start', // Align to the start of the element
            });
        } else {
            console.error(`Target not found for href: ${href}`);
        }

        // Hide the #onMobile element if it exists
        const onMobile = document.getElementById('onMobile');
        if (onMobile) {
            onMobile.style.display = 'none';
        } else {
            console.warn('#onMobile element not found');
        }
    });
});
