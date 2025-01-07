import Animations from "./modules/animations.js";
// import { initLenis } from "./modules/lenis.js";
import { animateNav, contactModal, requestQuoteModal, mobileHamburger, industryHover } from "./modules/navbarWithModal";
import { textHighlight } from "./modules/textAnimations.js";
import { initFAQAccordion } from "./modules/faqs.js";
import { filterCollection } from "./modules/filterCms.js";
import { productHover } from "./modules/cmsText.js";
import { initPageFadeIn } from "./modules/load.js";
import { initDocSideNav } from "./modules/docSidenav.js";

// Initialize global features
document.addEventListener("DOMContentLoaded", () => {
    // Always run these global features
    Animations.initPageAnimations();
    contactModal();
    initPageFadeIn();
    requestQuoteModal();
    textHighlight();
    animateNav();
    mobileHamburger();
    initDocSideNav();
    industryHover();
    playImageSequence();

    // Conditionally initialize features based on presence of specific elements
    if (document.querySelector(".ep-product-card")) {
        productHover();
    }


    if (document.getElementById("reset-filters")) {
        filterCollection();
    }

    if (document.querySelector(".faq-item")) {
        initFAQAccordion();
    }
});