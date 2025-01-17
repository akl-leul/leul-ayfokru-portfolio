function showNav() {
    document.getElementById('onMobile').style.display = 'flex';
}

function closeNav(){
    document.getElementById('onMobile').style.display = 'none';
}
//get all links with a
const link = document.querySelectorAll('a');


//add event listner to each link 
link.forEach((link) => {
    link.addEventListener('click', (e) => {
        //prevent default
        e.preventDefault();

        //get href attribute
        const href = link.getAttribute('href');

        //get the target element
        const target = document.querySelector(href);

        //if the target element exist, scroll to the target element
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
            });
            }
            document.getElementById('onMobile').style.display = 'none';
            });
        
});
