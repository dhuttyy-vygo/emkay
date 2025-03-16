// Import Swiper from node_modules
import Swiper from 'swiper/bundle';

// Import Swiper styles
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", () => {
    // Dynamically append Swiper controls
    $("[swiper-data-scrollbar]").append(`<div class="swiper-scrollbar"></div>`);
    $("[swiper-data-pagination]").append(`<div class="swiper-pagination"></div>`);
    $("[swiper-data-buttons]").append(`<div class="swiper-arrow button-prev"></div>`);
    $("[swiper-data-buttons]").append(`<div class="swiper-arrow button-next"></div>`);

    // Initialize the first Swiper
    const swiper1 = new Swiper(".swiper-reviews", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        centeredSlides: false,
        mousewheel: {
            forceToAxis: true
        },
        speed: 300,
        
       
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev"
        },
        
    });

    const logoElements = document.querySelectorAll(".swiper-logos");
    if (logoElements.length) {
        console.log('logoElements found');
        logoElements.forEach((logoSwiper) => {
            // Initialize Swiper without navigation buttons
            const swiperInstance = new Swiper(logoSwiper, {
                direction: "horizontal",
                loop: false,
                slidesPerView: "auto",
                spaceBetween: 20,
                mousewheel: {
                    forceToAxis: true
                },
                speed: 300
            });

            console.log('Swiper instance:', swiperInstance);
        });
    }

    
    // Define updateActiveYear first so it's accessible to Swiper events
    function updateActiveYear(milestoneSwiper) {
        // Ensure the swiper is initialized and has slides
        if (!milestoneSwiper || !milestoneSwiper.slides) return;
    
        // Get the active slide (left-centered in freemode)
        const activeSlide = milestoneSwiper.slides[milestoneSwiper.activeIndex];
        if (!activeSlide) return;
    
        // Extract the data-year attribute
        const activeYear = activeSlide.getAttribute('data-year');
        if (!activeYear) return;
    
        // Update the DOM element with the active year
        const yearDisplay = document.getElementById('year-display'); // Replace with your actual element's ID
        if (yearDisplay) {
          yearDisplay.innerHTML = `${activeYear}`; // Update the text
        }
      }
    
      // Initialize the Milestone Swiper
      const milestoneSwiper = new Swiper('.swiper-timeline', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        on: {
          init: function () {
            // Call updateActiveYear after initialization
            updateActiveYear(this); // Pass the Swiper instance
          },
          slideChange: function () {
            updateActiveYear(this); // Pass the Swiper instance
          },
          setTranslate: function () {
            updateActiveYear(this); // Pass the Swiper instance
          },
        },
      });
    
    
});