// Swiper js

const swiper = new Swiper('.swiper', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 60,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

      // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

  });