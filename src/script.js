const swiper = new Swiper('.swiper', {

  speed: 400,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  autoplay:{
    delay: 3000,
  },

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
  breakpoints: {
    0: {
        slidesPerView: 1
    },

    620: {
        slidesPerView: 2
    },

    1024: {
        slidesPerView: 3
    },
  }
});

const swiperLogo = new Swiper('.slider', {
  speed: 500,
  loop: true,
  grabCursor: true,
  slidesPerView: 6,

  autoplay:{
    delay: 2000,
  },

  // Scroll Bar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    0: {
        slidesPerView: 2,
    },

    620: {
        slidesPerView: 4,
    },

    1024: {
        slidesPerView: 6,
    },
  }
});

// Whatsapp Button
const whtsBtn = document.querySelector(".top");

window.onscroll = function() {

  if( scrollY >= 500 && scrollY <= 4200  ) {
    whtsBtn.classList.add("active");
  } else {
    whtsBtn.classList.remove("active");
  }
}

// Scroller Progres
let element = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollPosition = (window.scrollY / height) * 100;
  element.style.width = `${scrollPosition}%`;
})