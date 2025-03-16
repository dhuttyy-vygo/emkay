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

    // Initialize Swiper sliders
    const timelineContents = new Swiper (".timeline-contents", {
        grabCursor: true,
        spaceBetween: 30,
        freeMode: true, // Enables freemode for the milestones
        centeredSlides: false,
        slidesPerView: 'auto',
        
        on: {
            slideChange: function () {
                updateYearTracker();
            },
            progress: function () {
                updateYearTracker();
            },
        },
    });

    const timelineDates = new Swiper('.timeline-dates', {
        spaceBetween: 70,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2, // Makes it less sensitive to touch
        slideToClickedSlide: true, // Sync with clicks
    });

    // Sync the two sliders
    timelineContents.controller.control = timelineDates;
    timelineDates.controller.control = timelineContents;

    // Update the active year in the year tracker
    function updateYearTracker() {
        const slides = document.querySelectorAll('.timeline-contents .swiper-slide');
        const activeSlides = Array.from(slides).filter(slide => {
            const slideBounds = slide.getBoundingClientRect();
            return slideBounds.left >= 0 && slideBounds.right <= window.innerWidth;
        });

        if (activeSlides.length > 0) {
            const activeYear = activeSlides[0].dataset.year;

            // Update the timeline-dates Swiper
            document.querySelectorAll('.timeline-dates .swiper-slide').forEach(slide => {
                slide.classList.toggle('active', slide.dataset.year === activeYear);
            });
        }
    }
});