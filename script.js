document.addEventListener("DOMContentLoaded", () => {
    // Get the elements
    const overlay = document.getElementById('overlay');
    const learnMoreLink = document.getElementById('learn-more');
    const closeOverlay = document.getElementById('close-overlay');

    // Only add event listeners if the elements exist
    if (learnMoreLink) {
        // Show the overlay when "Learn more?" is clicked
        learnMoreLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of the link
            if (overlay) {
                overlay.style.display = 'block'; // Show overlay
            }
        });
    }

    if (closeOverlay) {
        // Close the overlay when "x" is clicked
        closeOverlay.addEventListener('click', function() {
            if (overlay) {
                overlay.style.display = 'none'; // Hide overlay
            }
        });
    }

    // Close the overlay when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none'; // Hide overlay
        }
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Get the current page URL
    const currentPage = window.location.pathname;

    // Special case for the homepage
    const homepage = currentPage === '/' || currentPage.includes('index.html');

    // Set active link based on URL
    navLinks.forEach(link => {
        if (homepage && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        } else if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    // testing
    const joinButton = document.getElementById('join-button');
    const joinProgramsSection = document.getElementById('join-programs-section');

    if (joinButton) {
        joinButton.addEventListener('click', function() {
            // Hide the hero section or any other sections if needed
            document.querySelector('.hero-section').style.display = 'none';
            // Show the join programs form
            joinProgramsSection.style.display = 'block';
        });
    } else {
        console.error("Join button not found.");
    }

    const joinForm = document.getElementById('join-form');
    if (joinForm) {
        joinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const name = joinForm.querySelector('input[type="text"]').value;
            const email = joinForm.querySelector('input[type="email"]').value;
            const phone = joinForm.querySelector('input[type="tel"]').value;
            const program = joinForm.querySelector('select').value;

            // Example action: Display a confirmation message
            alert(`Thank you for joining our programs, ${name}! You selected: ${program}.`);

            // You can add further logic here to handle form data, like sending it to a server
        });
    } else {
        console.error("Join form not found.");
    }
});