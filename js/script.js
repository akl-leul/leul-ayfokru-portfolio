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
                e.preventDefault();
                console.log('Link clicked:', link); // Logs the clicked link to the console
        
                const href = link.getAttribute('href');
                const target = document.querySelector(href);
        
                if (target) {
                    console.log('Scrolling to:', target); // Logs the target section
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.getElementById('onMobile').style.display = 'none';
                    console.log('#onMobile is now hidden');
                } else {
                    console.log('Target not found:', href); // Logs if the target doesn't exist
                }
            });
        });
        