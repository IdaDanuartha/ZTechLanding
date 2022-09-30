// Swiper js

const swiper = new Swiper('.swiper', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    // mousewheel: true,

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

// Modal image
let modal = document.getElementById("modalGallery");

let img = document.querySelectorAll(".gallery-img");
let modalImg = document.getElementById("modal-img");

img.forEach((item) => {
    item.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
      }
})

// Get the <span> element that closes the modal
let closeBtn = document.querySelector("#modalGallery .close-btn");

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}