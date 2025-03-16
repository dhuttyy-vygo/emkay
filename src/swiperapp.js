import Swiper from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css'; 

console.log('swiperapp.js loaded');

document.addEventListener("DOMContentLoaded", () => {
    

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

    

    // Initialize Swiper instances
    const reviewsElement = document.querySelector(".swiper-reviews");
    if (reviewsElement) {
        console.log('reviewsElement found');
        const swiper1 = new Swiper(reviewsElement, {
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
            
        });
    }

    // Initialize logo sliders if present
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

            // Debugging: Inspect Swiper instance
            console.log('Swiper instance:', swiperInstance);
            console.log('Swiper slides:', swiperInstance.slides);

            // Check if Swiper has slides
            if (swiperInstance.slides.length === 0) {
                console.warn('No slides found in Swiper instance');
            }
        });
    }

    // Initialize timeline sliders if present
    const timelineContentsElement = document.querySelector(".timeline-contents");
    const timelineDatesElement = document.querySelector(".timeline-dates");

    if (timelineContentsElement && timelineDatesElement) {
        console.log('timelineContentsElement and timelineDatesElement found');
        const timelineContents = new Swiper(timelineContentsElement, {
            grabCursor: true,
            spaceBetween: 30,
            freeMode: true,
            centeredSlides: false,
            slidesPerView: "auto",
            on: {
                slideChange: function () {
                    updateYearTracker();
                },
                progress: function () {
                    updateYearTracker();
                },
            },
        });

        const timelineDates = new Swiper(timelineDatesElement, {
            spaceBetween: 70,
            centeredSlides: true,
            slidesPerView: "auto",
            touchRatio: 0.2,
            slideToClickedSlide: true,
        });

        // Sync the two sliders
        timelineContents.controller.control = timelineDates;
        timelineDates.controller.control = timelineContents;

        // Update the active year in the year tracker
        function updateYearTracker() {
            const slides = document.querySelectorAll(".timeline-contents .swiper-slide");
            const activeSlides = Array.from(slides).filter(slide => {
                const slideBounds = slide.getBoundingClientRect();
                return slideBounds.left >= 0 && slideBounds.right <= window.innerWidth;
            });

            if (activeSlides.length > 0) {
                const activeYear = activeSlides[0].dataset.year;

                // Update the timeline-dates Swiper
                document.querySelectorAll(".timeline-dates .swiper-slide").forEach(slide => {
                    slide.classList.toggle("active", slide.dataset.year === activeYear);
                });
            }
        }
    }

});