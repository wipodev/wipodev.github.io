import "../components/Card.js";

AJWipo.component("aj-project", {
  template:
    /*HTML*/
    `
    <aj-card 
      title="Web el Jabillo" 
      description="Sitio web creado para una asociacion de vecinos" 
      btn="visitar"
    >
    </aj-card>
    <aj-card 
      title="Loteria el Jabillo" 
      description="App web creado para una Agencia de Loteria" 
      btn="visitar"
    >
    </aj-card>
    <aj-card 
      title="Recipe Medico" 
      description="App web creado para una Clinica" 
      btn="visitar"
    >
    </aj-card>
    <aj-card 
      title="Tema Blog AJ-theme" 
      description="Tema creado para Vuepress" 
      btn="visitar"
    >
    </aj-card>
    `,
  style:
    /*CSS*/
    `
    #proyectos {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      align-items: center;
      justify-content: center;
    }
    `,
});
