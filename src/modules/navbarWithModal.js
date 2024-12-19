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
        closeBtn = document.getElementById("close-sample"),
        menuContent = document.getElementById("sample-menu-box"),
        menu = document.querySelector(".ep-sample-modal");

    let opened = false;

    // Select all input elements inside .check .link
document.querySelectorAll(".check .link input").forEach((input) => {
    input.addEventListener("change", function () {
      // Find the closest parent with class 'link' and toggle 'selected-toggle'
      this.closest(".link").classList.toggle("selected-toggle");
    });
  });

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

export function mobileHamburger() {
  const toggleBtn = document.querySelector(".ep-menu-toggle"),
    backdrop = document.querySelector(".ep-menu-backdrop"),
    menuFill = document.querySelector(".ep-menu-textdrop"),
    menuContent = document.querySelector(".ep-menu-content"),
    menuBox = document.querySelector(".ep-menu-box"),
    menu = document.querySelector(".ep-nav"),
    flyoutLinks = document.querySelectorAll(".with-flyout"),
    flyoutClose = document.querySelector(".ep-flyout-close");

  let opened = false;

  const tlShow = Qe.timeline({ paused: true });
  tlShow.set(menuBox, { display: "block" }, 0);
  tlShow.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0);
  tlShow.fromTo(menuFill, { scaleX: 0 }, { scaleX: 1, ease: "expo.out", duration: 1 }, 0);
  tlShow.fromTo(menuContent, { xPercent: 50 }, { xPercent: 0, ease: "expo.out", duration: 1 }, 0);
  tlShow.fromTo(menuContent, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.2).reverse();

  const bindToggle = () => {
    toggleBtn.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", hideMenu);

    // Add click listeners to all flyout links
    flyoutLinks.forEach((flyoutLink) => {
      flyoutLink.addEventListener("click", () => toggleFlyout(flyoutLink));
    });

    flyoutClose.addEventListener("click", hideAllFlyouts);
  };

  const toggleMenu = () => {
    console.log("Menu toggle:", opened ? "Hiding menu" : "Showing menu");
    opened ? hideMenu() : showMenu();
  };

  const showMenu = () => {
    console.log("Menu is opening...");
    menu.classList.add("-open");
    tlShow.timeScale(1).play();
    document.body.classList.add("overflow-y-hidden");
    opened = true;
  };

  const hideMenu = () => {
    console.log("Menu is closing...");
    hideAllFlyouts(); // Ensure all flyouts are closed before closing the menu
    menu.classList.remove("-open");
    tlShow.timeScale(1.1).reverse();
    document.body.classList.remove("overflow-y-hidden");
    opened = false;
  };

  const toggleFlyout = (flyoutLink) => {
    const isOpened = flyoutLink.getAttribute("data-state-flyout-opened") === "true";
    console.log("Flyout toggle:", isOpened ? "Closing flyout" : "Opening flyout", flyoutLink);

    if (isOpened) {
      closeFlyout(flyoutLink);
    } else {
      openFlyout(flyoutLink);
    }
  };

  const openFlyout = (flyoutLink) => {
    console.log("Opening flyout:", flyoutLink);
    flyoutLink.setAttribute("data-state-flyout-opened", "true");
    const flyoutContent = flyoutLink.querySelector(".ep-sub-flyover");
    if (flyoutContent) {
      flyoutContent.classList.add("flyover-visible");
    }
    menu.classList.add("-flyover-open");
    // tlFlyoutShow.timeScale(1).play();
  };

  const closeFlyout = (flyoutLink) => {
    console.log("Closing flyout:", flyoutLink);
    flyoutLink.setAttribute("data-state-flyout-opened", "false");
    const flyoutContent = flyoutLink.querySelector(".ep-sub-flyover");
    // tlFlyoutShow.timeScale(1).reverse();
    if (flyoutContent) {
      flyoutContent.classList.remove("flyover-visible");
    }

    // Check if any flyouts are still open before removing the class
    const anyFlyoutOpen = [...flyoutLinks].some(
      (link) => link.getAttribute("data-state-flyout-opened") === "true"
    );
    if (!anyFlyoutOpen) {
      menu.classList.remove("-flyover-open");
    }
    
  };

  const hideAllFlyouts = () => {
    console.log("Hiding all flyouts...");
    flyoutLinks.forEach((flyoutLink) => {
      closeFlyout(flyoutLink);
    });
  };

  bindToggle();
}