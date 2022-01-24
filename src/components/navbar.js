import Icons from "/assets/iconpack.js";
import { d, $, $$ } from "../utils/dom.js";

let navbar = $(".nav-bar");
let navbarStyle = window.getComputedStyle(navbar).getPropertyValue("position");
let positionItems = [];

export const iconLoad = () => {
  let svgNS = "http://www.w3.org/2000/svg";
  let navIcons = $$(".nav-icon");
  for (const navIcon of navIcons) {
    let svg = d.createElementNS(svgNS, "svg");
    let path = d.createElementNS(svgNS, "path");
    svg.setAttributeNS(null, "viewBox", "0 0 48 48");
    path.setAttributeNS(null, "d", Icons[navIcon.id]);
    path.setAttribute("id", "nav-" + navIcon.id);
    svg.appendChild(path);
    navIcon.appendChild(svg);
  }
};

(() => {
  d.addEventListener("click", (e) => {
    let btn = e.target;

    if (btn.matches(".nav-btn") || btn.matches(`.nav-btn *`)) {
      let navmenu = $("#nav-menu");
      navbar.classList.toggle("close");
      if (!navbar.matches(".close")) {
        navmenu.setAttribute("d", Icons.close);
      } else {
        navmenu.setAttribute("d", Icons.menu);
      }
    }

    if (btn.matches(".nav-item") || btn.matches(`.nav-item *`)) {
      for (const b of e.path) {
        if (b.matches(".nav-item")) {
          if (navbarStyle === "fixed") {
            navMove(b, false);
            break;
          } else {
            navMove(b, true);
            break;
          }
        }
      }
    }
  });
})();

const navMove = (btnclick, desktop) => {
  let items = $$(".nav-item");
  let current = btnclick.getAttribute("data-order");
  let h = btnclick.offsetHeight;
  let i = 1;
  let n = 2;
  if (current != 1) {
    positionItems = [];
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
        positionItems.push(y);
        item.style.transform = "translateY(" + y + "px)";
      } else {
        if (i != reorder) {
          y = (reorder - i) * (h - 8);
        }
        positionItems.push(y);
        item.style.transform = "translateY(0px)";
      }
      i++;
    }
  }
};

const resizeNav = (desktop) => {
  let items = $$(".nav-item");
  for (let i = 0; i < items.length; i++) {
    if (desktop && positionItems.length > 0) {
      items[i].style.transform = "translateY(" + positionItems[i] + "px)";
    } else {
      items[i].style.transform = "translateY(0px)";
    }
  }
};

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth < 768) {
    resizeNav(false);
  } else {
    resizeNav(true);
  }
});

/*##############################################*/

function observer({ el, perc, toggleClass = false }) {
  new IntersectionObserver(
    ([e]) => {
      if (toggleClass) {
        el[1].classList.toggle(toggleClass, e.intersectionRatio < perc);
      } else {
        if (e.intersectionRatio > perc) {
          if (navbarStyle === "fixed") {
            navMove(el[1], false);
          } else {
            navMove(el[1], true);
          }
        }
      }
    },
    { threshold: [perc] }
  ).observe(el[0]);
}

observer({
  el: [$("#inicio"), $("header")],
  perc: 0.8,
  toggleClass: "is-fixed",
});

observer({
  el: [$("#inicio"), $("#home").parentNode],
  perc: 0.6,
});

observer({
  el: [$("#habilidades"), $("#hability").parentNode],
  perc: 0.6,
});
observer({
  el: [$("#servicios"), $("#service").parentNode],
  perc: 0.6,
});
observer({
  el: [$("#proyectos"), $("#project").parentNode],
  perc: 0.6,
});
observer({
  el: [$("#contactar"), $("#contact").parentNode],
  perc: 0.6,
});
