import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Qe = gsap;
const Sc = ScrollTrigger;

// Encapsulate all animation logic inside an object
const Animations = {
    // Main function to initialize animations
    initPageAnimations() {
        this.animateWithIncrementalDelay(".ep-line-animation-seperator");
    },

    // Private function for incremental animation delay
    animateWithIncrementalDelay(selector) {
        // Select all elements matching the provided selector
        const elements = document.querySelectorAll(selector);
    
        // Loop through each element and apply an incremental animation delay
        elements.forEach((element, index) => {
            const delay = index * 0.05; // Incremental delay: 100ms per element
            element.style.animationDelay = `${delay}s`; // Set the CSS animation delay
        });
    },

    // Function to animate a specific box
    animateBox(selector) {
        const box = document.querySelector(selector);

        if (!box) {
            console.warn(`No element found with selector: ${selector}`);
            return;
        }

        Qe.to(box, {
            x: 200, // Move 200px to the right
            duration: 1,
            ease: "power2.out",
        });
    },
};

export default Animations;