import gsap from "gsap";

// Initialize the side navigation
export function initDocSideNav() {
    const menus = gsap.utils.toArray(".ep-doc-dropdown");
    let menuToggles = [];
    let menuStates = []; // Global array to track open/close states

    // Retrieve session data
    const openMenus = JSON.parse(sessionStorage.getItem("openMenus")) || [];

    // Create animations for each menu and restore open state
    menus.forEach((menu, index) => {
        let animation = createAnimation(menu);
        menuToggles.push(animation);
        menuStates[index] = openMenus.includes(index); // Set initial state

        // Add click listener to the .ep-doc-nav-title inside each menu
        let triggerFaq = menu.querySelector(".ep-doc-nav-title");
        if (triggerFaq) {
            triggerFaq.addEventListener("click", () => toggleMenu(animation, index));
        }

        // Restore the open state
        if (menuStates[index]) {
            animation.play(0);
        }
    });

    function toggleMenu(animation, index) {
        if (menuStates[index]) {
            animation.reverse(); // Close the menu
            menuStates[index] = false;
            updateSessionData(index, false);
        } else {
            animation.play(); // Open the menu
            menuStates[index] = true;
            updateSessionData(index, true);
        }
    }

    function updateSessionData(index, isOpen) {
        let openMenus = JSON.parse(sessionStorage.getItem("openMenus")) || [];

        if (isOpen) {
            if (!openMenus.includes(index)) {
                openMenus.push(index);
            }
        } else {
            openMenus = openMenus.filter((i) => i !== index);
        }

        sessionStorage.setItem("openMenus", JSON.stringify(openMenus));
    }

    function createAnimation(menu) {
        let box = menu.querySelector(".ep-doc-list");
        let plusSign = menu.querySelector(".ep-side-box-icon");

        gsap.set(box, { height: "auto" });

        let timeline = gsap
            .timeline({ paused: true })
            .from(box, { height: 0, duration: 0.5, ease: "power1.inOut" })
            .to(
                plusSign,
                { rotate: "0deg", duration: 0.2, ease: "power4.inOut" },
                "<"
            )
            .reverse();

        return timeline;
    }
}