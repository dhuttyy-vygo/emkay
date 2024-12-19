// export const initPageFadeIn = () => {
//     const heroElement = document.querySelectorAll("[data-hero]");

//     if (heroElement.length === 0) return; // Exit if no hero element exists

    
//     const activateHero = (element) => {
//         element.setAttribute("data-state", "activated");
//     };

//     heroElement.forEach((element) => {
//         // Check if IntersectionObserver is supported
//         if ("IntersectionObserver" in window) {
//             const observer = new IntersectionObserver(
//                 ([entry]) => {
//                     if (entry.isIntersecting) {
//                         activateHero(element);
//                         observer.disconnect(); // Stop observing once activated
//                     }
//                 },
//                 { threshold: 0 } // Trigger when 10% of the hero is visible
//             );

//             observer.observe(element);
//         } else {
//             // Fallback if IntersectionObserver is not supported
//             activateHero(element);
//         }
//     });

   
// };

import gsap from "gsap";

export const initPageFadeIn = () => {
    const heroElements = document.querySelectorAll("[data-hero]");
    const body = document.body;

    if (heroElements.length === 0) return; // Exit if no hero elements exist

    

    gsap.timeline()
        // .fromTo(
        //     heroElements,
        //     { opacity: 0, y: 50 }, // Initial state
        //     { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" } // Animation
        // )
        .add(() => {
            // Set the `data-state` to "activated" after the animation
            heroElements.forEach((element) => {
                element.setAttribute("data-state", "activated");
            });
        });
};