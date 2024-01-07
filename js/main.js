document.addEventListener("DOMContentLoaded", (e) => {
  const introBlock = document.querySelector(".intro");

  if (introBlock) {
    const container = introBlock.querySelector(".intro__container");
    // const wrapper = introBlock.querySelector(".intro__wrapper");
    // const wrapperPadding =
    // 	+window.getComputedStyle(wrapper).paddingRight.replaceAll("px", "") / 2;

    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 768) {
        container.style.backgroundPositionX = `-${
          1440 - window.innerWidth + 31
        }px`;
      } else {
        container.style.backgroundPositionX = null;
      }
    });

    if (window.innerWidth > 768) {
      container.style.backgroundPositionX = `-${
        1440 - window.innerWidth + 46
      }px`;
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

  function addHeaderPadding() {
    const header = document.querySelector(".header");
    const headerBottom = document.querySelector(".header-bottom");
    const menu = header.querySelector(".menu");
    if (headerBottom && menu) {
      if (window.innerWidth > 768) {
        menu.style.top = `${
          headerBottom.offsetTop + headerBottom.scrollHeight
        }px`;
      }
    }
    const nextBlock = header.nextElementSibling;

    nextBlock.style.paddingTop = `${header.clientHeight}px`;

    // if (window.innerWidth <= 768) {
    //   menu.style.top = `${header.clientHeight}px`;
    // }
  }

  // addHeaderPadding();

  function openMenu(e) {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.add("active");
    }
  }
  function closeMenu(e) {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.remove("active");
    }
  }

  const menuBtns = document.querySelectorAll(".menu-js");

  if (menuBtns) {
    for (const btn of menuBtns) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const svg = btn.querySelector(".svg");

        btn.classList.toggle("active");

        if (btn.classList.contains("active")) {
          svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
					<path d="M1 1L9.5 9.5M18 18L9.5 9.5M9.5 9.5L18 1M9.5 9.5L1 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>`;
          openMenu();
        } else {
          closeMenu();
          svg.innerHTML = `<svg>
					<use xlink:href='images/svg/icons.svg#catalog-ico'></use>
				</svg>`;
        }

        document.addEventListener("click", (e) => {
          const menu = document.querySelector(".menu__container");

          if (e.target != menu) {
            closeMenu();
            btn.classList.remove("active");
            svg.innerHTML = `<svg>
							<use xlink:href='images/svg/icons.svg#catalog-ico'></use>
						</svg>`;
          }
        });

        document.addEventListener("keydown", (e) => {
          const menu = document.querySelector(".menu__container");

          if (e.key == "Escape") {
            closeMenu();
            btn.classList.remove("active");
            svg.innerHTML = `<svg>
							<use xlink:href='images/svg/icons.svg#catalog-ico'></use>
						</svg>`;
          }
        });
      });
    }
  }

  function chooseCity() {
    const block = document.querySelector(".choose-city");
    if (block) {
      setTimeout(() => {
        block.classList.remove("show");
      }, 5000);

      document.addEventListener("click", (e) => {
        if (e.target !== block) {
          block.classList.remove("show");
        }
      });
    }
  }

  chooseCity();

  function openCityChange() {
    const block = document.querySelector(".cities");
    if (block) {
      block.classList.add("show");
    }
  }

  function closeCityChange() {
    const block = document.querySelector(".cities");
    if (block) {
      block.classList.remove("show");
    }
  }

  const anotherCity = document.querySelector(".choose-city__more-btn");

  if (anotherCity) {
    anotherCity.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openCityChange();
    });
  }

  const cityList = document.querySelector(".list-city");

  if (cityList) {
    const cities = cityList.querySelectorAll(".list-city__item");

    for (const city of cities) {
      city.addEventListener("click", (e) => {
        e.preventDefault();
        const place = document.querySelector(".header-top__city-btn span");
        cities.forEach((el) => el.classList.remove("active"));
        place.innerText = city.innerText;
        city.classList.add("active");
        closeCityChange();
      });
    }
  }

  function openCitiesList() {
    const btn = document.querySelector(".header-top__city-btn");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openCityChange();
      });
    }
  }

  openCitiesList();

  const citiesForm = document.querySelector(".cities-form");
  if (citiesForm) {
    citiesForm.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  document.addEventListener("click", (e) => {
    const block = document.querySelector(".cities");

    if (e.target !== block) {
      closeCityChange();
    }
  });
});

function openFilter(e) {
  const filterDropdown = document.querySelectorAll(".filter-dropdown");

  filterDropdown.forEach((el) => {
    const btn = el.querySelector(".filter-dropdown__btn");
    const body = el.querySelector(".filter-dropdown__body");

    // body.addEventListener("click", (e) => {
    //   e.stopPropagation();
    // });

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.add("open");
      body.classList.toggle("open");

      if (!body.classList.contains("open")) {
        this.classList.remove("open");
      }
    });

    document.addEventListener("click", (e) => {
      const withinBoundaries = e.composedPath().includes(el);
      if (!withinBoundaries) {
        body.classList.remove("open");
        btn.classList.remove("open");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        el.classList.remove("open");
        body.style.maxHeight = null;
      }
    });
  });
}

openFilter();

document.querySelectorAll(".catalog-dropdown").forEach(function (el) {
  const btn = el.querySelector(".catalog-dropdown__header");
  const body = el.querySelector(".catalog-dropdown__list");
  const dropdownItems = el.querySelectorAll(".catalog-dropdown__item");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.add("open");

    body.classList.toggle("open");

    if (!body.classList.contains("open")) {
      this.classList.remove("open");
    }
  });

  dropdownItems.forEach((element) => {
    element.addEventListener("click", function (e) {
      // e.stopPropagation();

      e.preventDefault();

      element.classList.toggle("active");
    });
  });

  document.addEventListener("click", (e) => {
    const withinBoundaries = e.composedPath().includes(el);
    if (!withinBoundaries) {
      body.classList.remove("open");
      btn.classList.remove("open");
    }
  });
});
