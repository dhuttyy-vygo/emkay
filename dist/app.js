var $11OlJ$gsap = require("gsap");
var $11OlJ$gsapScrollTrigger = require("gsap/ScrollTrigger");
var $11OlJ$splittype = require("split-type");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("g7UNV", function(module, exports) {

$parcel$export(module.exports, "initFAQAccordion", function () { return $bbd95cf34d355eb9$export$987dacfbec7b2766; });

function $bbd95cf34d355eb9$export$987dacfbec7b2766() {
    let groups = (0, ($parcel$interopDefault($11OlJ$gsap))).utils.toArray(".faq-menu");
    let menus = (0, ($parcel$interopDefault($11OlJ$gsap))).utils.toArray(".faq-item");
    let menuToggles = [];
    let activeMenu = null; // Keep track of the active menu
    menus.forEach((menu, index)=>{
        let animation = createAnimation(menu);
        menuToggles.push(animation);
        menu.addEventListener("click", ()=>toggleMenu(animation));
        // Open the first menu by default
        if (index === 0) {
            animation.play();
            activeMenu = animation;
        }
    });
    function toggleMenu(animation) {
        if (activeMenu !== animation) {
            if (activeMenu) activeMenu.reverse(); // Close the previously open menu
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
        (0, ($parcel$interopDefault($11OlJ$gsap))).set(box, {
            height: "auto"
        });
        (0, ($parcel$interopDefault($11OlJ$gsap))).set(questionText, {
            marginLeft: "0vw"
        });
        let timeline = (0, ($parcel$interopDefault($11OlJ$gsap))).timeline({
            paused: true
        }).from(box, {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut"
        }).from(questionText, {
            marginLeft: 0,
            duration: 0.5,
            ease: "power4.inOut"
        }, "<").to(plusSign, {
            rotate: "45deg",
            duration: 0.1,
            ease: "power1.inOut"
        }, "<").reverse();
        return timeline;
    }
}

});

parcelRegister("7zdnB", function(module, exports) {

$parcel$export(module.exports, "filterCollection", function () { return $58262e35d8f85a16$export$c774df04233387fd; });

function $58262e35d8f85a16$export$c774df04233387fd() {
    const cmsItems = document.querySelectorAll(".ep-cms-items"); // Select all CMS items
    const filterOptions = document.querySelectorAll(".filter-option"); // Select all filter options
    const resetButton = document.getElementById("reset-filters"); // Reset button
    const savedFilters = JSON.parse(localStorage.getItem("activeFilters")) || {
        industry: [],
        temperature: [],
        pressure: []
    };
    // Function to save filters
    function saveFilters(filters) {
        localStorage.setItem("activeFilters", JSON.stringify(filters));
    }
    // Apply saved filters on load
    function applySavedFilters() {
        filterOptions.forEach((option)=>{
            const group = option.closest(".filter-group").getAttribute("data-group");
            const value = option.getAttribute("data-value").toLowerCase();
            if (savedFilters[group]?.includes(value)) option.classList.add("selected");
        });
        filterItems();
    }
    // Get active filters
    function getActiveFilters() {
        const filters = {
            industry: [],
            temperature: [],
            pressure: []
        };
        filterOptions.forEach((option)=>{
            if (option.classList.contains("selected")) {
                const group = option.closest(".filter-group").getAttribute("data-group");
                filters[group].push(option.getAttribute("data-value").toLowerCase());
            }
        });
        return filters;
    }
    // Filter items based on selected filters
    function filterItems() {
        const filters = getActiveFilters();
        cmsItems.forEach((item)=>{
            // Aggregate all nested `data-industry` values
            const industries = Array.from(item.querySelectorAll("[data-industry]")).map((child)=>child.getAttribute("data-industry").toLowerCase());
            const itemTemperature = item.getAttribute("data-temperature")?.toLowerCase() || "";
            const itemPressure = item.getAttribute("data-pressure")?.toLowerCase() || "";
            // Logic for matching filters
            const matchesIndustry = !filters.industry.length || filters.industry.some((filter)=>industries.includes(filter));
            const matchesTemperature = !filters.temperature.length || filters.temperature.includes(itemTemperature);
            const matchesPressure = !filters.pressure.length || filters.pressure.includes(itemPressure);
            // Show/hide items based on filter match
            if (matchesIndustry && matchesTemperature && matchesPressure) (0, ($parcel$interopDefault($11OlJ$gsap))).to(item, {
                opacity: 1,
                display: "block",
                duration: 0.3
            });
            else (0, ($parcel$interopDefault($11OlJ$gsap))).to(item, {
                opacity: 0,
                display: "none",
                duration: 0.3
            });
        });
        saveFilters(filters); // Save current filters to localStorage
    }
    // Toggle "selected" state on click
    filterOptions.forEach((option)=>{
        option.addEventListener("click", ()=>{
            option.classList.toggle("selected");
            filterItems();
        });
    });
    // Reset filters
    resetButton.addEventListener("click", ()=>{
        filterOptions.forEach((option)=>option.classList.remove("selected"));
        localStorage.removeItem("activeFilters");
        filterItems();
    });
    // Apply saved filters on page load
    applySavedFilters();
}

});

parcelRegister("ddaRl", function(module, exports) {

$parcel$export(module.exports, "productHover", function () { return $99e4e9b3c16e2a91$export$7c2df45011e58c23; });

function $99e4e9b3c16e2a91$export$7c2df45011e58c23() {
    const product = document.querySelectorAll(".ep-product-card");
    product.forEach((e)=>{
        const brandName = e.getAttribute('data-brand-name');
        if (brandName.includes("ROHACELL\xae")) {
            const newBrandName = brandName.replace("ROHACELL\xae", '').trim();
            e.setAttribute('data-brand-name', newBrandName);
            const textHoverElement = e.querySelector('.text-hover-ep');
            if (textHoverElement) textHoverElement.textContent = newBrandName;
        }
    });
}

});

parcelRegister("8M8BF", function(module, exports) {
module.exports = Promise.resolve(require("./docSidenav.81e60dde.js")).then(()=>parcelRequire('2w4T2'));

});



(0, ($parcel$interopDefault($11OlJ$gsap))).registerPlugin((0, ($parcel$interopDefault($11OlJ$gsapScrollTrigger))));
const $a76c423302461c0e$var$Qe = (0, ($parcel$interopDefault($11OlJ$gsap)));
const $a76c423302461c0e$var$Sc = (0, ($parcel$interopDefault($11OlJ$gsapScrollTrigger)));
// Encapsulate all animation logic inside an object
const $a76c423302461c0e$var$Animations = {
    // Main function to initialize animations
    initPageAnimations () {
        this.animateWithIncrementalDelay(".ep-line-animation-seperator");
    },
    // Private function for incremental animation delay
    animateWithIncrementalDelay (selector) {
        // Select all elements matching the provided selector
        const elements = document.querySelectorAll(selector);
        // Loop through each element and apply an incremental animation delay
        elements.forEach((element, index)=>{
            const delay = index * 0.05; // Incremental delay: 100ms per element
            element.style.animationDelay = `${delay}s`; // Set the CSS animation delay
        });
    },
    // Function to animate a specific box
    animateBox (selector) {
        const box = document.querySelector(selector);
        if (!box) {
            console.warn(`No element found with selector: ${selector}`);
            return;
        }
        $a76c423302461c0e$var$Qe.to(box, {
            x: 200,
            duration: 1,
            ease: "power2.out"
        });
    }
};
var $a76c423302461c0e$export$2e2bcd8739ae039 = $a76c423302461c0e$var$Animations;



const $dd7df931e752b4e1$var$Qe = (0, ($parcel$interopDefault($11OlJ$gsap)));
function $dd7df931e752b4e1$export$e03f402b60d0ae88() {
    const openBtn = document.querySelectorAll("[contact-menu-open]"), backdrop = document.getElementById("contact-backdrop"), backdropBackground = document.querySelector(".ep-contact-backdrop"), closeBtn = document.getElementById("close-contact"), menuContent = document.getElementById("contact-menu-box"), menu = document.querySelector(".ep-contact-modal");
    let opened = false;
    // Qe.set(menu, { autoAlpha: 0 });
    const tlShow = $dd7df931e752b4e1$var$Qe.timeline({
        paused: true
    });
    tlShow.set(menu, {
        display: "block"
    }, 0);
    // tlShow.to(menu, { autoAlpha: 1, duration: 1}, 0);
    tlShow.fromTo(backdropBackground, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "expo.out"
    }, 0);
    tlShow.fromTo(menuContent, {
        yPercent: 50,
        autoAlpha: 0
    }, {
        yPercent: 0,
        autoAlpha: 1,
        ease: "expo.out",
        duration: 1
    }, 0.1).reverse();
    const toggle = ()=>opened ? hide() : show();
    const show = ()=>{
        menu.classList.add("-open");
        tlShow.timeScale(1).play();
        opened = true;
    };
    const hide = ()=>{
        menu.classList.remove("-open");
        tlShow.timeScale(1.13).reverse();
        opened = false;
    };
    // Attach event listeners to all open buttons
    openBtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            toggle();
        });
    });
    closeBtn.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
}
function $dd7df931e752b4e1$export$fd5dfb0225c6441e() {
    const openBtn = document.querySelectorAll("[sample-menu-open]"), backdrop = document.getElementById("sample-backdrop"), backdropBackground = document.querySelector(".ep-sample-backdrop"), closeBtn = document.getElementById("close-contact"), menuContent = document.getElementById("sample-menu-box"), menu = document.querySelector(".ep-sample-modal");
    let opened = false;
    // Qe.set(menu, { autoAlpha: 0 });
    const tlShow = $dd7df931e752b4e1$var$Qe.timeline({
        paused: true
    });
    tlShow.set(menu, {
        display: "block"
    }, 0);
    // tlShow.to(menu, { autoAlpha: 1, duration: 1}, 0);
    tlShow.fromTo(backdropBackground, {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: .5,
        ease: "expo.out"
    }, 0);
    tlShow.fromTo(menuContent, {
        yPercent: 50,
        autoAlpha: 0
    }, {
        yPercent: 0,
        autoAlpha: 1,
        ease: "expo.out",
        duration: 1
    }, 0.1).reverse();
    const toggle = ()=>opened ? hide() : show();
    const show = ()=>{
        menu.classList.add("-open");
        tlShow.timeScale(1).play();
        opened = true;
    };
    const hide = ()=>{
        menu.classList.remove("-open");
        tlShow.timeScale(1.13).reverse();
        opened = false;
    };
    // Attach event listeners to all open buttons
    openBtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            toggle();
        });
    });
    closeBtn.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
}
function $dd7df931e752b4e1$export$81995edf86e60043() {
    const body = document.body;
    const nav = document.getElementById("ep-nav");
    const backdrop = document.querySelector(".ep-header-background");
    // Get initial state from body attribute
    const initState = body.getAttribute("data-transparent");
    // If the body is not set to start as transparent, exit the function
    if (initState !== "true") return;
    let isTransparent = true; // Track the current state
    // Scroll event listener
    window.addEventListener("scroll", ()=>{
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





(0, ($parcel$interopDefault($11OlJ$gsap))).registerPlugin((0, ($parcel$interopDefault($11OlJ$gsapScrollTrigger))));
const $01dba0bd997b4720$var$Qe = (0, ($parcel$interopDefault($11OlJ$gsap)));
const $01dba0bd997b4720$var$Sc = (0, ($parcel$interopDefault($11OlJ$gsapScrollTrigger)));
function $01dba0bd997b4720$export$31da4993bf9af7da() {
    const textHighlight = new (0, ($parcel$interopDefault($11OlJ$splittype)))("[data-split='highlight']", {
        types: 'words',
        wordClass: "highlight-text"
    });
    const lineSplit = new (0, ($parcel$interopDefault($11OlJ$splittype)))("[data-split='lines']", {
        types: 'lines',
        lineClass: "line-in"
    });
    const t = document.querySelectorAll(".highlight-text");
    if (!t.length) return;
    const tl = new $01dba0bd997b4720$var$Qe.timeline();
    tl.to(t, {
        color: "var(--swatch--brand-invert)",
        opacity: 1,
        duration: 1,
        stagger: {
            amount: .5
        },
        ease: "power2.out"
    }), tl.fromTo(t, {
        color: "var(--swatch--brand-invert)"
    }, {
        color: "#333",
        duration: 1,
        stagger: {
            amount: .5
        },
        ease: "power2.out"
    }, "<+=1"), $01dba0bd997b4720$var$Sc.create({
        trigger: t,
        start: "top bottom",
        animation: tl
    });
}


parcelRequire("g7UNV");
parcelRequire("7zdnB");
parcelRequire("ddaRl");
const $4a1e246edb3d6990$export$9c06e237e044ccc0 = ()=>{
    const heroElement = document.querySelectorAll("[data-hero]");
    if (heroElement.length === 0) return; // Exit if no hero element exists
    const activateHero = (element)=>{
        element.setAttribute("data-state", "activated");
    };
    heroElement.forEach((element)=>{
        // Check if IntersectionObserver is supported
        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(([entry])=>{
                if (entry.isIntersecting) {
                    activateHero(element);
                    observer.disconnect(); // Stop observing once activated
                }
            }, {
                threshold: 0.1
            } // Trigger when 10% of the hero is visible
            );
            observer.observe(element);
        } else // Fallback if IntersectionObserver is not supported
        activateHero(element);
    });
};


// Initialize global features
document.addEventListener("DOMContentLoaded", ()=>{
    (0, $a76c423302461c0e$export$2e2bcd8739ae039).initPageAnimations();
    (0, $dd7df931e752b4e1$export$e03f402b60d0ae88)();
    (0, $4a1e246edb3d6990$export$9c06e237e044ccc0)();
    (0, $dd7df931e752b4e1$export$fd5dfb0225c6441e)();
    (0, $01dba0bd997b4720$export$31da4993bf9af7da)();
    (0, $dd7df931e752b4e1$export$81995edf86e60043)();
});

// Lazy load and initialize features based on presence of specific elements
if (document.querySelector(".ep-product-card")) Promise.resolve((parcelRequire("ddaRl"))).then(({ productHover: productHover })=>productHover());

if (document.querySelector(".ep-doc-dropdown")) (parcelRequire("8M8BF")).then(({ initDocSideNav: initDocSideNav })=>initDocSideNav());

if (document.getElementById("reset-filters")) Promise.resolve((parcelRequire("7zdnB"))).then(({ filterCollection: filterCollection })=>filterCollection());

if (document.querySelector(".faq-item")) Promise.resolve((parcelRequire("g7UNV"))).then(({ initFAQAccordion: initFAQAccordion })=>initFAQAccordion());


//# sourceMappingURL=app.js.map
