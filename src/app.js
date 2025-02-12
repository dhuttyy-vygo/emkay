import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { animateNav, contactModal, requestQuoteModal, mobileHamburger, industryHover } from "./modules/navbarWithModal";
import { textHighlight } from "./modules/textAnimations.js";
import { initFAQAccordion } from "./modules/faqs.js";
import { filterCollection } from "./modules/filterCms.js";
import { productHover } from "./modules/cmsText.js";
import { initPageFadeIn } from "./modules/load.js";
import { initDocSideNav } from "./modules/docSidenav.js";

gsap.registerPlugin(ScrollTrigger);

let z = SplitType;

document.addEventListener("DOMContentLoaded", () => {
    
    contactModal();
    initPageFadeIn();
    requestQuoteModal();
    textHighlight();
    animateNav();
    mobileHamburger();
    initDocSideNav();
    industryHover();
    productHover();
    filterCollection();
    initFAQAccordion();
});