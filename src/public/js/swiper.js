const swiper = new Swiper(".multiple-slide-carousel", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1028: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    330: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

function openLightbox(imgElement) {
  const fullImage = document.getElementById("fullImage");
  fullImage.src = imgElement.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
