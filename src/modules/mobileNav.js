
// do we even need gsap here? - could we just use vanilla JS, for data-attributes & addClass/removeClass. add eventListener for clicks.///
// can have a promise resolve when the animation is done, with a toggle button to check if open or closed.///
// we also need a simple fade over for the mobile nav dropdown - sub pages for industry and products // 

export function mobileNav() {

    const navigation = document.getElementById("ep-nav");
    const nav = document.querySelector(".mobile-nav");
    const navButton = document.querySelector(".mobile-nav-button");
    const navLinks = document.querySelectorAll(".mobile-nav-link");
    const navClose = document.querySelector(".mobile-nav-close");
    const opened = false;

    var toggle = function () {
        if (opened) {
            hide();
        } else {
            open();
        }Ÿ
    }
    var open = function () {
        nav.classList.add("open");
        opened = false;
        navigation.ariaHidden = true;
        navigation.getAttribute("aria-hidden");
    }

    var hide = function () {
        nav.classList.remove("hide");   

    }

    var bindToggle = function () {
        navButton.addEventListener("click", toggle);
        navClose.addEventListener("click", toggle);
    }

    bindToggle();
}
