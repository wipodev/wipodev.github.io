import "./components/NavBar.js";
import "./components/Header.js";
import "./views/home.js";
import "./views/hability.js";
import "./views/project.js";

AJWipo.component("aj-wipo", {
  template:
    /*html*/
    `
    <aj-nav class="nav-bar close"></aj-nav>
    <main>
      <aj-header class="header"></aj-header>
      <aj-home id="inicio" class="home"></aj-home>
      <aj-hability id="habilidades" class="resto"></aj-hability>
      <aj-hability id="servicios" class="resto"></aj-hability>
      <aj-project id="proyectos" class="resto"></aj-project>
      <aj-hability id="contactar" class="resto"></aj-hability>
    </main>
    `,
  style:
    /*CSS*/
    `
    /* ********** Custom Properties ********** */
:root {
  --first-color: #ff7800;
  --first-alpha-color: rgba(255, 120, 0, 0.75);
  --second-color: #002a8d;
  --second-alpha-color: rgba(0, 42, 141, 0.75);
  --third-color: #501464;
  --third-alpha-color: rgba(80, 20, 100, 0.75);
  --bg-color: #00000010;
  --font: "Raleway", sans-serif;
  --max-width: 1200px;
  --header-height: 4rem;
}

aj-wipo {
  display: flex;
}

main {
  margin-left: 0;
}

@media (min-width: 768px) {
  main {
    margin-left: -3rem;
  }
}

.resto {
  display: block;
  height: 100vh;
  width: 100%;
  padding: 6rem 4rem 0 4rem;
}
    `,
});
