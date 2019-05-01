document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll('.navigation ul li a');
    navLinks.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('event', event);
            
            document.querySelector(event.target.hash).scrollIntoView({
                behavior: 'smooth'
            });
    
        });
        // add click listener for the element in this iteration of the loop
        // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
        // get the section by its id using the string from the last step
        // scroll to that section with .scrollIntoView()
      });
    
})
    const form = document.querySelector('.newsletter form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thanks for Subscribing!');

        

    })