import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const galleryImages = document.querySelectorAll(".imgContainer");
const fullscreenSwiper = document.getElementById("fullscreenSwiper");
let swiperInstance = null;
console.log(galleryImages);

function initSwiper(initialSlide) {
  if (!swiperInstance) {
    swiperInstance = new Swiper('.fullscreenSwiper', {
      initialSlide: initialSlide,
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  } else {
    swiperInstance.slideTo(initialSlide, 0);
  }
  fullscreenSwiper.style.display = 'block';

  document.querySelector('.swiper-button-next').addEventListener('click', () => {
    swiperInstance.slideNext();
  });
  
  document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    swiperInstance.slidePrev();
  });
}



fullscreenSwiper.addEventListener('click', function(e) {
  if(e.target == fullscreenSwiper) {
    fullscreenSwiper.style.display = 'none';
  }
});

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    initSwiper(index);
  });
});


document.querySelector('.close-swiper').addEventListener('click', () => {
  fullscreenSwiper.style.display = 'none';
  swiperInstance.destroy();
  swiperInstance = null;
});

function myFunction() {
    var navLinks = document.getElementById("myLink");
    navLinks.classList.toggle("show");
  }

