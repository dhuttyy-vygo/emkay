
// import "swiper/swiper-bundle.css";// Import Swiper and its CSS
// import Swiper from "swiper";



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

    document.querySelectorAll(".swiper-logos").forEach((logoSwiper) => {
      new Swiper(logoSwiper, {
          direction: "horizontal",
          loop: false,
          slidesPerView: "auto",
          // slidesPerGroup: 1,
          spaceBetween: 20,
          // freeMode: true,
          // centeredSlides: "left",
          
          mousewheel: {
              forceToAxis: true
          },
          speed: 300,
          
          navigation: {
              nextEl: ".button-next",
              prevEl: ".button-prev"
          }
      });
    });

    const swiper3 = new Swiper(".swiper-milestones", {
      direction: "horizontal",
      loop: false,
      slidesPerView: "auto",
      // slidesPerGroup: 1,
      // spaceBetween: 20,
      freemode: true,
      centeredSlides: false,
      mousewheel: {
          forceToAxis: true
      },
      speed: 300,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      }
      
  });

});