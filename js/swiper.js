const intro = new Swiper(".intro-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".intro-swiper__btn.next",
    prevEl: ".intro-swiper__btn.prev",
  },
});

const benefits = new Swiper(".benefits-swiper", {
  slidesPerView: "1.5",
  spaceBetween: 16,

  breakpoints: {
    370: {
      slidesPerView: 2,
    },

    769: {
      slidesPerView: "auto",
      spaceBetween: 18,
    },
  },

  pagination: {
    el: ".benefits-pagination",
    clickable: true,
  },
});

const services = new Swiper(".services-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const servicesMob = new Swiper(".services-swiper-mob", {
  slidesPerView: "auto",
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const news = new Swiper(".news-swiper", {
  slidesPerView: "1.3",
  spaceBetween: 16,

  breakpoints: {
    640: {
      slidesPerView: "auto",
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },

  pagination: {
    el: ".news-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
});

const catalogCardThumbs = new Swiper(".catalog-card__thumb-swiper", {
  slidesPerView: 4,
  spaceBetween: 13,

  navigation: {
    nextEl: ".catalog-card__thumb-btn.next",
    prevEl: ".catalog-card__thumb-btn.prev",
  },
});

const catalogCard = new Swiper(".catalog-card__swiper", {
  slidesPerView: 1.5,
  spaceBetween: 5,

  breakpoints: {
    360: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  thumbs: {
    swiper: catalogCardThumbs,
  },
});

const catalogInfo = new Swiper(".catalog-card__info-swiper", {
  slidesPerView: 1,

  spaceBetween: 16,

  breakpoints: {
    600: {
      slidesPerView: "auto",
      spaceBetween: 25,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const cardProductThumbs = new Swiper(".card-product__thumb-swiper", {
  slidesPerView: 3,
  spaceBetween: 18,

  // navigation: {
  //   nextEl: ".catalog-card__thumb-btn.next",
  //   prevEl: ".catalog-card__thumb-btn.prev",
  // },
});

const cardProduct = new Swiper(".card-product__swiper", {
  slidesPerView: 1.5,
  spaceBetween: 5,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
  },

  thumbs: {
    swiper: cardProductThumbs,
  },
});

const servicesIntro = new Swiper(".services-intro__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 2000,
  // },
});
const interestedSwiper = new Swiper(".interested__swiper", {
  slidesPerView: 1.4,

  spaceBetween: 16,

  breakpoints: {
    380: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const producedSwiper = new Swiper(".produced__swiper", {
  slidesPerView: "auto",

  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
