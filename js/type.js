const text = "Frontend Developer | Android App Creator | Tech Enthusiast";
const typewriterElement = document.getElementById("typewriter-text");

let i = 0;
let isDeleting = false;
let delay = 100;  // Typing speed
let deleteDelay = 50;  // Deleting speed

function typeWriter() {
    if (isDeleting) {
        typewriterElement.textContent = text.substring(0, i);
        i--;
        if (i === 0) {
            isDeleting = false;
            setTimeout(typeWriter, 500); // Pause before typing again
        } else {
            setTimeout(typeWriter, deleteDelay);
        }
    } else {
        typewriterElement.textContent = text.substring(0, i);
        i++;
        if (i === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000); // Pause before deleting
        } else {
            setTimeout(typeWriter, delay);
        }
    }
}

window.onload = typeWriter;
