// Swiper js

const swiper = new Swiper('.swiper', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    mousewheel: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },

});


// Navbar on scroll
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {
  if(window.scrollY > 30) {
      navbar.classList.add('scroll')
  } else {
      navbar.classList.remove('scroll')
  }
})