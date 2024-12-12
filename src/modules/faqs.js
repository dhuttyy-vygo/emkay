import gsap from "gsap";

// this is a test

export function initFAQAccordion() {
    let groups = gsap.utils.toArray(".faq-menu");
    let menus = gsap.utils.toArray(".faq-item");
    let menuToggles = [];
    let activeMenu = null; // Keep track of the active menu

    menus.forEach((menu, index) => {
        let animation = createAnimation(menu);
        menuToggles.push(animation);

        menu.addEventListener("click", () => toggleMenu(animation));

        // Open the first menu by default
        if (index === 0) {
            animation.play();
            activeMenu = animation;
        }
    });

    function toggleMenu(animation) {
        if (activeMenu !== animation) {
            if (activeMenu) {
                activeMenu.reverse(); // Close the previously open menu
            }
            animation.play(); // Open the clicked menu
            activeMenu = animation;
        } else {
            animation.reverse(); // Close the clicked menu
            activeMenu = null;
        }
    }

    function createAnimation(menu) {
        let element = menu.parentElement;
        let box = element.querySelector(".answer");
        let plusSign = element.querySelector(".plus");
        let questionText = element.querySelector(".question");

        gsap.set(box, { height: "auto" });
        gsap.set(questionText, { marginLeft: "0vw" });

        let timeline = gsap
            .timeline({ paused: true })
            .from(box, { height: 0, duration: 0.5, ease: "power1.inOut" })
            .from(
                questionText,
                { marginLeft: 0, duration: 0.5, ease: "power4.inOut" },
                "<"
            )
            .to(
                plusSign,
                { rotate: "45deg", duration: 0.1, ease: "power1.inOut" },
                "<"
            )
            .reverse();

        return timeline;
    }
}