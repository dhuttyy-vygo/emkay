document.addEventListener("DOMContentLoaded", function () {
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