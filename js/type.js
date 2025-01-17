const text = "Frontend Developer | Android App Creator";
const typewriterElement = document.getElementById("typewriter-text");

if (!typewriterElement) {
    console.error("Typewriter element not found!");
    // return; // Exit if the element is not found
}

let i = 0;
let isDeleting = false;
let delay = 1;  // Typing speed
let deleteDelay = 5;  // Deleting speed

function typeWriter() {
    if (isDeleting) {
        typewriterElement.textContent = text.substring(0, i);
        i--;
        if (i === 0) {
            isDeleting = false;
            setTimeout(typeWriter, 0); // No pause before typing again
        } else {
            setTimeout(typeWriter, deleteDelay);
        }
    } else {
        typewriterElement.textContent = text.substring(0, i);
        i++;
        if (i === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, 0); // No pause before deleting
        } else {
            setTimeout(typeWriter, delay);
        }
    }
}

window.onload = typeWriter;
