export const initPageFadeIn = () => {
    const heroElement = document.querySelectorAll("[data-hero]");

    if (heroElement.length === 0) return; // Exit if no hero element exists

    
    const activateHero = (element) => {
        element.setAttribute("data-state", "activated");
    };

    heroElement.forEach((element) => {
        // Check if IntersectionObserver is supported
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        activateHero(element);
                        observer.disconnect(); // Stop observing once activated
                    }
                },
                { threshold: 0.1 } // Trigger when 10% of the hero is visible
            );

            observer.observe(element);
        } else {
            // Fallback if IntersectionObserver is not supported
            activateHero(element);
        }
    });

   
};