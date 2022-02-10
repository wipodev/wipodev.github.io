export function observer({ el, perc, toggleClass = false }) {
  new IntersectionObserver(
    ([e]) => {
      if (toggleClass) {
        el[1].classList.toggle(toggleClass, e.intersectionRatio < perc);
      } else {
        if (e.intersectionRatio > perc && moveItem === undefined) {
          if (navbarStyle === "fixed") {
            navMove(el[1], false);
          } else {
            navMove(el[1], true);
          }
        } else if (moveItem === "#" + el[0].id) {
          moveItem = undefined;
        }
      }
    },
    { threshold: [perc] }
  ).observe(el[0]);
}

function observerHeader({ el, perc, toggleClass }) {
  new IntersectionObserver(
    ([e]) => {
      el[1].classList.toggle(toggleClass, e.intersectionRatio < perc);
    },
    { threshold: [perc] }
  ).observe(el[0]);
}
