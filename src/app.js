import "./components/NavBar.js";
import "./components/Header.js";
import "./views/home.js";
import "./views/hability.js";
import "./views/project.js";
import "./views/demo.js";

AJWipo.component("aj-wipo", {
  template:
    /*html*/
    `
    <aj-nav class="nav-bar close"></aj-nav>
    <main>
      <aj-header class="header"></aj-header>
      <aj-home id="inicio" class="home"></aj-home>
      <aj-hability id="habilidades"></aj-hability>
      <aj-demo id="servicios" class="resto"></aj-demo>
      <aj-project id="proyectos"></aj-project>
      <aj-demo id="contactar" class="resto"></aj-demo>
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
  --gemunu: 'Gemunu Libre', sans-serif;
  --odibee: 'Odibee Sans', cursive;
  --oxanium: 'Oxanium', cursive;
  --rationale: 'Rationale', sans-serif;
  --russo: 'Russo One', sans-serif;
  --teko: 'Teko', sans-serif;
}

aj-wipo {
  display: flex;
}

main {
  margin-left: 0;
  width: 100%;
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
