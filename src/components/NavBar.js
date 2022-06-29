import Icons from "/assets/iconpack.js";
import "./BtnMenu.js";

AJWipo.component("aj-nav", {
  template:
    /*html*/
    `
  <aj-menu class="btn-menu"></aj-menu>
  <a data-order=1 href="#inicio" class="nav-item is-active" title="inicio">
      <div id="home" class="nav-icon"></div>
      <span class="nav-title">Inicio</span>
  </a>
  <a data-order=2 href="#habilidades" class="nav-item" title="Habilidades">
      <div id="hability" class="nav-icon"></div>
      <span class="nav-title">Habilidades</span>
  </a>
  <a data-order=3 href="#servicios" class="nav-item" title="Servicios">
      <div id="service" class="nav-icon"></div>
      <span class="nav-title">Servicios</span>
  </a>
  <a data-order=4 href="#proyectos" class="nav-item" title="Proyectos">
      <div id="project" class="nav-icon"></div>
      <span class="nav-title">Proyectos</span>
  </a>
  <a data-order=5 href="#contactar" class="nav-item" title="Contactar">
      <div id="contact" class="nav-icon"></div>
      <span class="nav-title">Contactar</span>
  </a>
  `,
  script: {
    data() {
      this.navbar = AJWipo.getElement(".nav-bar");
      this.menu = AJWipo.getElement(".btn-menu");
      this.navbarStyle = window
        .getComputedStyle(this.navbar)
        .getPropertyValue("position");
      this.positionItems = [];
      this.moveItem = undefined;
    },
    methods() {
      this.iconLoad = function () {
        let svgNS = "http://www.w3.org/2000/svg";
        let navIcons = AJWipo.getElementAll(".nav-icon");
        for (const navIcon of navIcons) {
          let svg = document.createElementNS(svgNS, "svg");
          let path = document.createElementNS(svgNS, "path");
          svg.setAttributeNS(null, "viewBox", "0 0 48 48");
          path.setAttributeNS(null, "d", Icons[navIcon.id]);
          path.setAttribute("id", "nav-" + navIcon.id);
          svg.appendChild(path);
          navIcon.appendChild(svg);
        }
      };
      this.itemsClick = function () {
        document.addEventListener("click", (e) => {
          let btn = e.target;

          if (btn.matches(".btn-menu") || btn.matches(`.btn-menu *`)) {
            this.navbar.classList.toggle("close");
            this.menu.classList.toggle("is-active");
          }

          if (btn.matches(".nav-item") || btn.matches(`.nav-item *`)) {
            for (const b of e.composedPath()) {
              if (b.matches(".nav-item")) {
                this.moveItem = b.getAttribute("href");
                if (this.navbarStyle === "fixed") {
                  this.navMove(b, false);
                  break;
                } else {
                  this.navMove(b, true);
                  break;
                }
              }
            }
          }
        });
      };
      this.navMove = function (btnclick, desktop) {
        let items = AJWipo.getElementAll(".nav-item");
        let current = btnclick.getAttribute("data-order");
        let h = btnclick.offsetHeight;
        let i = 1;
        let n = 2;
        if (current != 1) {
          this.positionItems = [];
          for (const item of items) {
            let order = item.getAttribute("data-order");
            let reorder = 0;
            let y = 0;
            if (order === current) {
              btnclick.setAttribute("data-order", 1);
              btnclick.classList.add("is-active");
              reorder = 1;
            } else {
              item.setAttribute("data-order", n);
              item.classList.remove("is-active");
              reorder = n;
              n++;
            }

            if (desktop) {
              if (i != reorder) {
                y = (reorder - i) * h;
              }
              this.positionItems.push(y);
              item.style.transform = "translateY(" + y + "px)";
            } else {
              if (i != reorder) {
                y = (reorder - i) * (h - 8);
              }
              this.positionItems.push(y);
              item.style.transform = "translateY(0px)";
            }
            i++;
          }
        }
      };
      this.resizeNav = function (desktop) {
        let items = AJWipo.getElementAll(".nav-item");
        for (let i = 0; i < items.length; i++) {
          if (desktop && this.positionItems.length > 0) {
            items[i].style.transform =
              "translateY(" + this.positionItems[i] + "px)";
          } else {
            items[i].style.transform = "translateY(0px)";
          }
        }
      };
      this.observer = function ({ el, perc, toggleClass = false }) {
        new IntersectionObserver(
          ([e]) => {
            if (toggleClass) {
              el[1].classList.toggle(toggleClass, e.intersectionRatio < perc);
            } else {
              if (e.intersectionRatio > perc && this.moveItem === undefined) {
                if (this.navbarStyle === "fixed") {
                  this.navMove(el[1], false);
                } else {
                  this.navMove(el[1], true);
                }
              } else if (this.moveItem === "#" + el[0].id) {
                this.moveItem = undefined;
              }
            }
          },
          { threshold: [perc] }
        ).observe(el[0]);
      };
    },
    created() {
      this.iconLoad();
      this.itemsClick();
      window.addEventListener("resize", (e) => {
        if (e.target.innerWidth < 768) {
          this.resizeNav(false);
        } else {
          this.resizeNav(true);
        }
      });
      this.observer({
        el: [AJWipo.getElement("#inicio"), AJWipo.getElement(".header")],
        perc: 0.6,
        toggleClass: "is-fixed",
      });
      this.observer({
        el: [
          AJWipo.getElement("#inicio"),
          AJWipo.getElement("#home").parentNode,
        ],
        perc: 0.6,
      });

      this.observer({
        el: [
          AJWipo.getElement("#habilidades"),
          AJWipo.getElement("#hability").parentNode,
        ],
        perc: 0.6,
      });
      this.observer({
        el: [
          AJWipo.getElement("#servicios"),
          AJWipo.getElement("#service").parentNode,
        ],
        perc: 0.6,
      });
      this.observer({
        el: [
          AJWipo.getElement("#proyectos"),
          AJWipo.getElement("#project").parentNode,
        ],
        perc: 0.6,
      });
      this.observer({
        el: [
          AJWipo.getElement("#contactar"),
          AJWipo.getElement("#contact").parentNode,
        ],
        perc: 0.6,
      });
    },
  },
  style:
    /*css*/
    `
    .nav-bar {
  display: flex;
  width: 100%;
  height: 3.5rem;
  background-color: var(--second-color);
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  z-index: 999;
}

.nav-bar .nav-item {
  text-decoration: none;
  padding: 0.25rem;
  text-align: center;
}

.nav-bar .nav-icon {
  height: 2rem;
}

.nav-bar svg {
  width: 2rem;
  height: 2rem;
  fill: var(--first-color);
  cursor: pointer;
}

.nav-bar .nav-title {
  color: var(--first-color);
  font-size: 0.6rem;
}

.nav-bar .nav-item.is-active {
  background-color: var(--first-color);
}

.nav-bar .nav-item.is-active svg {
  fill: var(--second-color);
}

.nav-bar .nav-item.is-active .nav-title {
  color: var(--second-color);
}

.nav-bar .nav-item:hover {
  background-color: var(--first-color);
}

.nav-bar .nav-item:hover svg {
  fill: var(--second-color);
}

.nav-bar .nav-item:hover .nav-title {
  color: var(--second-color);
}

@media (min-width: 768px) {
  /*** Nav Bar desktop ***/
  .nav-bar {
    flex-direction: column;
    justify-content: flex-start;
    width: 12rem;
    height: 100vh;
    transition: all 0.5s ease;
    position: sticky;
    top: 0px;
    left: 0px;
  }

  .nav-bar .nav-item {
    overflow: hidden;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 1rem;
    transition: transform 1s ease;
  }

  .nav-bar .nav-icon {
    height: 2.5rem;
  }

  .nav-bar svg {
    width: 2.5rem;
    height: 2.5rem;
    transition: fill 0.5s ease;
  }

  .nav-bar .nav-title {
    width: calc(12rem - 3rem);
    font-size: 1rem;
    transition: all 0.5s ease;
  }

  .nav-bar.close {
    width: 3rem;
    background-color: transparent;
  }

  .nav-bar.close svg {
    fill: var(--first-color);
  }

  .nav-bar.close .nav-title {
    opacity: 0;
  }

  .nav-bar.close .nav-item.is-active {
    border-radius: 0 10% 10% 0;
  }

  .nav-bar.close .nav-item.is-active svg {
    fill: var(--second-color);
  }

  .nav-bar.close .nav-item:hover {
    border-left: 1px solid transparent;
    border-radius: 0 10% 10% 0;
  }  
}
  `,
});
