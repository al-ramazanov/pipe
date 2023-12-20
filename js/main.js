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

const introBlock = document.querySelector(".intro");

if (intro) {
  const container = introBlock.querySelector(".intro__container");
  const wrapper = introBlock.querySelector(".intro__wrapper");
  const wrapperPadding =
    +window.getComputedStyle(wrapper).paddingRight.replaceAll("px", "") / 2;
  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 768) {
      container.style.backgroundPositionX = `-${
        1440 - window.innerWidth + 46
      }px`;
    } else {
      container.style.backgroundPositionX = null;
    }
  });

  if (window.innerWidth > 768) {
    container.style.backgroundPositionX = `-${1440 - window.innerWidth + 46}px`;
  } else {
    container.style.backgroundPositionX = null;
  }
}

function adaptivFooter() {
  const container = document.querySelector(".footer__container");
  if (container) {
    const socMob = document.createElement("div");
    container.append(socMob);
    const socBlock = document.querySelector(".footer__soc");
    socMob.append(socBlock);
    socMob.style.order = 1;
  }
}

if (window.innerWidth <= 520) {
  adaptivFooter();
}
