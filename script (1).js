            // --- Dark Mode Toggle Logic (Keep as before) ---
            // ... (dark mode code remains here) ...


            // --- Header Scroll Logic ---
            const header = document.querySelector('header');
            if (header) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) { // Add class after scrolling 50px
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
            } else {
                console.warn("Header element not found for scroll effect.");
            }
            // --- End Header Scroll Logic ---


            // --- Scroll Animation Logic ---
            const observerOptions = {
                root: null, // relative to document viewport
                rootMargin: '0px',
                threshold: 0.1 // trigger when 10% of the element is visible
            };

            function observerCallback(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                    // Optional: Add else condition to fade out when leaving viewport
                    // else {
                    //     entry.target.classList.remove('is-visible');
                    // }
                });
            }

            const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

            // Select elements to observe
            const elementsToObserve = document.querySelectorAll(
                '.section-title, #about .about-image, #about .about-text, #experience .timeline, #skills .skills-container, #publications .publications-container, #contact .contact-info, #contact .contact-form, .map-section .map-container'
            );

            if (elementsToObserve.length > 0) {
                elementsToObserve.forEach(el => {
                    // Add the initial state class via JS for elements that need it
                    // Card containers handle children via CSS parent .is-visible class
                    if (!el.classList.contains('skills-container') && !el.classList.contains('publications-container') && !el.classList.contains('timeline')) {
                       el.classList.add('fade-in-element'); // Add initial state class
                    }
                    scrollObserver.observe(el); // Start observing
                });
            } else {
                 console.warn("No elements found for scroll animations.");
            }
            // --- End Scroll Animation Logic ---


            // --- Contact Form Submission to Make (Keep as before) ---
            // ... (form submission code remains here) ...


            // --- Footer Year (Keep as before) ---
            // ... (footer year code remains here) ...

        }); // End DOMContentLoaded
