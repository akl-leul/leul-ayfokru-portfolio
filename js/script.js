function showNav() {
    document.getElementById('onMobile').style.display = 'flex';
}

function closeNav(){
    document.getElementById('onMobile').style.display = 'none';
}

// Get all links with 'a'
const links = document.querySelectorAll('a');

// Add event listener to each link
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent default behavior
        e.preventDefault();

        // Get href attribute
        const href = link.getAttribute('href');

        // Get the target element
        const target = document.querySelector(href);

        // If the target element exists, scroll to the target element
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
            });

            // Hide the 'onMobile' element after scroll
            document.getElementById('onMobile').style.display = 'none';
        }
    });
});
