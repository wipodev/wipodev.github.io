import "../components/Card.js";

AJWipo.component("aj-project", {
  template:
    /*HTML*/
    `
    <aj-card 
      href="https://github.com/AJ-Wi/pepe"
      img="../../assets/img/perfil.png"
      title="Lotería el Jabillo" 
      description="App web creado para una Agencia de Lotería" 
    >
    </aj-card>
    <aj-card 
      href="https://github.com/AJ-Wi/pepe"
      img="../../assets/img/perfil.png"
      title="Lotería el Jabillo" 
      description="App web creado para una Agencia de Lotería" 
    >
    </aj-card>
    <aj-card 
      href="https://github.com/AJ-Wi/pepe"
      img="../../assets/img/perfil.png"
      title="Lotería el Jabillo" 
      description="App web creado para una Agencia de Lotería" 
    >
    </aj-card>
    <aj-card 
      href="https://github.com/AJ-Wi/pepe"
      img="../../assets/img/perfil.png"
      title="Lotería el Jabillo" 
      description="App web creado para una Agencia de Lotería" 
    >
    </aj-card>
    `,
  style:
    /*CSS*/
    `
    aj-project {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
    gap: 1rem;
    padding: 6rem 40px 20px 40px;
    min-height: 100vh;
    width: 90%;
    margin: auto;
    }
    `,
});
