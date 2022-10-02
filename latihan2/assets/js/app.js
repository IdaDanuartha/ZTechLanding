const navbar = document.querySelector('nav.navbar')

window.addEventListener('scroll', function() {
    if(window.scrollY > 30) {
        navbar.classList.add('scroll')
    } else {
        navbar.classList.remove('scroll')
    }
})

// Swiper js
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
})