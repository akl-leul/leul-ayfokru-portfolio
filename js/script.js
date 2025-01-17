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

const navLinks = document.querySelectorAll('a[href^="#"]'); 

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1); // Remove the "#" 
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    const navMenu = document.getElementById('onMobile');
    if (navMenu) {
      navMenu.style.display = 'none'; 
    }
  });
});
