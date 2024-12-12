import Animations from "./modules/animations.js";
// import { initLenis } from "./modules/lenis.js";
import { animateNav, contactModal, requestQuoteModal } from "./modules/navbarWithModal";
import { textHighlight } from "./modules/textAnimations.js";
import { initFAQAccordion } from "./modules/faqs.js";
import { filterCollection } from "./modules/filterCms.js";
import { productHover } from "./modules/cmsText.js";
import { initPageFadeIn } from "./modules/load.js";

// Initialize global features
document.addEventListener("DOMContentLoaded", () => {
    Animations.initPageAnimations();
    contactModal();
    initPageFadeIn();
    requestQuoteModal();
    textHighlight();
    animateNav();
});

// Lazy load and initialize features based on presence of specific elements
if (document.querySelector(".ep-product-card")) {
    import("./modules/cmsText.js").then(({ productHover }) => productHover());
}

if (document.querySelector(".ep-doc-dropdown")) {
    import("./modules/docSidenav.js").then(({ initDocSideNav }) => initDocSideNav());
}

if (document.getElementById("reset-filters")) {
    import("./modules/filterCms.js").then(({ filterCollection }) => filterCollection());
}

if (document.querySelector(".faq-item")) {
    import("./modules/faqs.js").then(({ initFAQAccordion }) => initFAQAccordion());
}
