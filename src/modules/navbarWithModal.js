import gsap from "gsap";

const Qe = gsap;

export function contactModal() {
    const openBtn = document.querySelectorAll("[contact-menu-open]"), // NodeList
        backdrop = document.getElementById("contact-backdrop"),
        backdropBackground = document.querySelector(".ep-contact-backdrop"),
        closeBtn = document.getElementById("close-contact"),
        menuContent = document.getElementById("contact-menu-box"),
        menu = document.querySelector(".ep-contact-modal");

    let opened = false;

    // Qe.set(menu, { autoAlpha: 0 });

    const tlShow = Qe.timeline({ paused: true });
    tlShow.set(menu, { display: "block" }, 0);
    // tlShow.to(menu, { autoAlpha: 1, duration: 1}, 0);
    tlShow.fromTo(backdropBackground, { autoAlpha: 0 }, { autoAlpha: 1, duration: .5, ease: "expo.out" }, 0);
    tlShow.fromTo(
        menuContent,
        { yPercent: 50, autoAlpha: 0},
        { yPercent: 0, autoAlpha: 1, ease: "expo.out", duration: 1 },
        0.1
    ).reverse();

    const toggle = () => (opened ? hide() : show());
    const show = () => {
        menu.classList.add("-open");
        tlShow.timeScale(1).play();
        opened = true;
    };
    const hide = () => {
        menu.classList.remove("-open");
        tlShow.timeScale(1.13).reverse();
        opened = false;
    };

    // Attach event listeners to all open buttons
    openBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            toggle();
        });
    });

    closeBtn.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
}

export function requestQuoteModal() {
    const openBtn = document.querySelectorAll("[sample-menu-open]"), // NodeList
        backdrop = document.getElementById("sample-backdrop"),
        backdropBackground = document.querySelector(".ep-sample-backdrop"),
        closeBtn = document.getElementById("close-contact"),
        menuContent = document.getElementById("sample-menu-box"),
        menu = document.querySelector(".ep-sample-modal");

    let opened = false;

    // Qe.set(menu, { autoAlpha: 0 });

    const tlShow = Qe.timeline({ paused: true });
    tlShow.set(menu, { display: "block" }, 0);
    // tlShow.to(menu, { autoAlpha: 1, duration: 1}, 0);
    tlShow.fromTo(backdropBackground, { autoAlpha: 0 }, { autoAlpha: 1, duration: .5, ease: "expo.out" }, 0);
    tlShow.fromTo(
        menuContent,
        { yPercent: 50, autoAlpha: 0},
        { yPercent: 0, autoAlpha: 1, ease: "expo.out", duration: 1 },
        0.1
    ).reverse();

    const toggle = () => (opened ? hide() : show());
    const show = () => {
        menu.classList.add("-open");
        tlShow.timeScale(1).play();
        opened = true;
    };
    const hide = () => {
        menu.classList.remove("-open");
        tlShow.timeScale(1.13).reverse();
        opened = false;
    };

    // Attach event listeners to all open buttons
    openBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            toggle();
        });
    });

    closeBtn.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
}

export function animateNav() {
    const body = document.body;
    const nav = document.getElementById("ep-nav");
    const backdrop = document.querySelector(".ep-header-background");

    // Get initial state from body attribute
    const initState = body.getAttribute("data-transparent");

    // If the body is not set to start as transparent, exit the function
    if (initState !== "true") {
        return;
    }

    let isTransparent = true; // Track the current state

    // Scroll event listener
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Check scroll position and toggle data attribute on body
        if (scrollY > 100 && isTransparent) {
            body.setAttribute("data-transparent", "false");
            isTransparent = false;
        } else if (scrollY <= 100 && !isTransparent) {
            body.setAttribute("data-transparent", "true");
            isTransparent = true;
        }
    });

    
}