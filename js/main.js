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
      if (window.innerWidth <= 768) {
        document.body.style.overflow = "hidden";
      }
      menu.classList.add("active");
    }
  }
  function closeMenu(e) {
    const menu = document.querySelector(".menu");
    if (menu) {
      document.body.style.overflow = null;

      menu.classList.remove("active");
    }
  }

  const menuBtns = document.querySelectorAll(".menu-js");

  if (menuBtns) {
    for (const btn of menuBtns) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const menu = document.querySelector(".menu");

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

        // document.addEventListener("click", (e) => {
        //   const menu = document.querySelector(".menu__container");

        //   if (e.target != menu) {
        //     closeMenu();
        //     btn.classList.remove("active");
        //     svg.innerHTML = `<svg>
        // 			<use xlink:href='images/svg/icons.svg#catalog-ico'></use>
        // 		</svg>`;
        //   }
        // });

        // document.addEventListener("click", (e) => {
        //   const withinBoundaries = e.composedPath().includes(menu);
        //   if (!withinBoundaries) {
        //     closeMenu();
        //     btn.classList.remove("active");
        //     svg.innerHTML = `<svg>
        // 			<use xlink:href='images/svg/icons.svg#catalog-ico'></use>
        // 		</svg>`;
        //   }
        // });

        document.addEventListener("keydown", (e) => {
          if (e.key == "Escape") {
            closeMenu();
            btn.classList.remove("active");
            svg.innerHTML = `<svg>
							<use xlink:href='images/svg/icons.svg#catalog-ico'></use>
						</svg>`;
          }
        });

        const closeMenuBtn = document.querySelector(".menu-close-js");
        if (closeMenuBtn) {
          closeMenuBtn.addEventListener("click", (e) => {
            closeMenu();
            btn.classList.remove("active");
            svg.innerHTML = `<svg>
							<use xlink:href='images/svg/icons.svg#catalog-ico'></use>
						</svg>`;
          });
        }
      });
    }
  }

  function openMobDropdowns() {
    const dropdowns = document.querySelectorAll("[data-spoiler]");
    if (dropdowns) {
      if (window.innerWidth <= 768) {
        dropdowns.forEach((el) => {
          const btn = el.querySelector("[data-btn]");
          const content = el.querySelector("[data-body]");

          btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (content) {
              e.currentTarget.classList.toggle("open");
              if (btn.classList.contains("open")) {
                content.classList.add("open");
              } else {
                content.classList.remove("open");
              }

              document.addEventListener("click", (e) => {
                const withinBoundaries = e.composedPath().includes(el);
                if (!withinBoundaries) {
                  if (
                    btn.classList.contains("open") ||
                    content.classList.contains("open")
                  ) {
                    btn.classList.remove("open");
                    content.classList.remove("open");
                  }
                }
              });
            }
          });
        });
      }
    }
  }

  openMobDropdowns();

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

const catalogCardContainer = document.querySelector(".catalog-card__container");
if (catalogCardContainer) {
  const title = document.querySelector(".catalog-card__title");
  if (window.innerWidth <= 768) {
    catalogCardContainer.prepend(title);
  }
}

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

function getMaxLengh() {
  const textareaBlocks = document.querySelectorAll(".textarea-js");
  if (textareaBlocks) {
    textareaBlocks.forEach((el) => {
      const textarea = el.querySelector("textarea");
      if (textarea) {
        const lengthBlock = el.querySelector(".length-curent");
        if (lengthBlock) {
          textarea.addEventListener("input", (e) => {
            lengthBlock.innerText = e.currentTarget.value.length;
          });
        }
      }
    });
  }
}
getMaxLengh();

function mooveProductRating() {
  const mobRating = document.querySelector(".product__mob-rating");
  if (mobRating) {
    const deskRating = document.querySelector(".card-product__info");
    const fax = document.querySelector(".card-product__contacts-link");
    if (window.innerWidth <= 768) {
      mobRating.append(deskRating);
      mobRating.append(fax);
    }
  }
}

mooveProductRating();

function openTabs() {
  const tabsBlock = document.querySelectorAll("[data-tabs]");
  if (tabsBlock) {
    tabsBlock.forEach((block) => {
      const btns = block.querySelectorAll("[data-tab]");
      btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const tabId = btn.dataset.tab;
          const tabContent = block.querySelector(`[data-id="${tabId}"]`);
          if (tabContent) {
            const tabContents = block.querySelectorAll("[data-id]");
            const tabBtns = block.querySelectorAll("[data-tab]");
            tabBtns.forEach((element) => {
              element.classList.remove("active");
            });
            tabContents.forEach((element) => {
              element.classList.remove("active");
            });
            e.currentTarget.classList.add("active");
            tabContent.classList.add("active");
          } else {
          }
        });
      });
      const btns1 = block.querySelector("[data-tab]").click();
    });
  }
}

openTabs();

function cartCounter() {
  const counters = document.querySelectorAll(".counter-js");
  if (counters) {
    counters.forEach((counter) => {
      const decrementBtn = counter.querySelector(".decrement-js");
      const incrementBtn = counter.querySelector(".increment-js");
      const count = counter.querySelector(".value-js");
      let counterValue = +count.value;

      function increment(e) {
        e.preventDefault();
        counterValue++;
        count.value = counterValue;
      }
      function decrement(e) {
        e.preventDefault();
        if (counterValue > 0) {
          counterValue--;
          count.value = counterValue;
        }
      }
      incrementBtn.addEventListener("click", increment);
      decrementBtn.addEventListener("click", decrement);
    });
  }
}
cartCounter();

function replaceCartBtn() {
  const btnPlace = document.querySelector(".header-slider__container");
  if (btnPlace) {
    const btn = document.querySelector(".js-cart");
    const destination = document.querySelector(".header-bottom-mob__container");

    if (window.innerWidth <= 768) {
      destination.append(btn);
    } else {
      btnPlace.append(btn);
    }

    window.addEventListener("resize", (e) => {
      if (window.innerWidth <= 768) {
        destination.append(btn);
      } else {
        btnPlace.append(btn);
      }
    });
  }
}
replaceCartBtn();

// имя файла в input file

const fileInputs = document.querySelectorAll("input[type='file']");
if (fileInputs) {
  fileInputs.forEach((input) => {
    const text = input.nextElementSibling;
    const fileName = text.querySelector(".file-name-js");
    input.addEventListener("input", (e) => {
      fileName.innerText = e.currentTarget.files[0].name;
    });
  });
}

// имя файла в input file

function openDropdowns() {
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  if (dropdowns) {
    dropdowns.forEach((el) => {
      const btn = el.querySelector(".questions-accordeon__btn");
      const body = el.querySelector(".questions-accordeon__body");

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle("open");
        if (btn.classList.contains("open")) {
          body.classList.add("open");
        } else {
          body.classList.remove("open");
        }

        document.addEventListener("click", (e) => {
          const withinBoundaries = e.composedPath().includes(el);
          if (!withinBoundaries) {
            body.classList.remove("open");
            btn.classList.remove("open");
          }
        });
      });
    });
  }
}

openDropdowns();

function copyText() {
  const btns = document.querySelectorAll("[data-copy-btn]");
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        navigator.clipboard
          .writeText(btn.querySelector("[data-copy]").innerText)
          .then(function () {
            console.log("copied");
            btn.querySelector(".tooltip").classList.add("active");
            setTimeout(() => {
              btn.querySelector(".tooltip").classList.remove("active");
            }, 1000);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    });
  }
}

copyText();
