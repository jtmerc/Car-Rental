// Swiper
var swiper = new Swiper(".car-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        600: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        758: {
        slidesPerView: 3,
        spaceBetween: 15,
        },
        900: {
        slidesPerView: 4,
        spaceBetween: 20,
        },
    },
});