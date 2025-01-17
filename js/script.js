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
const navLinks = document.querySelectorAll('a[href^="#"]'); // Select only links with "#"

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1); // Remove "#"
    const targetSection = document.getElementById(targetId); 

    if (targetSection) { 
      window.scrollTo({
        top: targetSection.offsetTop, 
        behavior: 'smooth' 
      });
    } else {
      console.error(`Target section with ID "${targetId}" not found.`); 
    }
  });
});