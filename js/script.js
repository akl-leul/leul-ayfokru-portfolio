function showNav(): void {
    const navMenu = document.getElementById('onMobile') as HTMLElement;
    if (navMenu) {
        navMenu.style.display = 'flex';
    }
}

function closeNav(): void {
    const navMenu = document.getElementById('onMobile') as HTMLElement;
    if (navMenu) {
        navMenu.style.display = 'none';
    }
}

// Function to move the hovered element based on cursor position
document.querySelectorAll('a').forEach((item: HTMLElement) => {
    item.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        item.style.transform = `translate(${offsetX / 10}px, ${offsetY / 10}px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translate(0, 0)'; // Reset position on mouse leave
    });
});

const navLinks = document.querySelectorAll('a');

navLinks.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Hide the mobile navigation menu
        const navMenu = document.getElementById('onMobile') as HTMLElement;
        if (navMenu) {
            navMenu.style.display = 'none';
        }
    });
});
