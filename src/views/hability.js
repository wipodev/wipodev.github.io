AJWipo.component("aj-hability", {
  template:
    /*HTML*/
    `
    <div class="grid-container">
      <div class="content">
        <h2 class="title s-center">AJ-Wipo</h2>
        <p class="description s-center">
          Soy de Venezuela y desarrollador web autodidacta. La programación es algo que me ha fascinado desde hace años, sigo aprendiendo y quiero enseñar lo que se.
        </p>
      </div>
      <div class="graphic">
        <img class="graphic-man" src="../assets/img/perfil.png" alt="foto de wladimir">
        <div class="graphic-circles">
          <img class="graphic-energy" src="../assets/img/aro.png" alt="aro de energia">
          <img class="graphic-logo" src="../assets/img/logo.png" alt="logo">
          <img class="graphic-circle-1" src="../assets/img/circle-internal.png" alt="circulo interno">
          <img class="graphic-circle-2" src="../assets/img/circle-external.png" alt="circulo externo">
        </div>
      </div>
    </div>
    `,
  style:
    /*CSS*/
    `
    aj-hability{
      display: block;
      background: radial-gradient(79.43% 251.58% at 23.18% 73.07%, #0142a0 0,#0f133a 44.42%, #101034 56.43%, #141034 69.58%, #301436 100%, #411958 0);
      color: #fff;
      padding: 6rem 4rem 0;
      min-height: 100vh;    
    }

    @media (min-width: 768px){
      .grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 1200px;
        margin: auto;
      }
    }

    /* banner */
    .title{
      font-size: 1.5rem;
      color: var(--first-color);
    }

    .description{
      font-size: .8rem;
      margin-bottom: 2rem;
    }

    .s-center{
      text-align: center;
    }

    @media (min-width: 768px) {
      .title{
        font-size: 2.5rem;
      }

      .description{
        font-size: 1rem;
      }

      .s-center{
        text-align: left;
      }
    }

    /* graphic */

    .graphic{
      position: relative;
      display: grid;
      padding-top: 3rem;
      grid-template-columns: 1fr 75%;
    }

    .graphic-man{
      width: 100%;
      grid-column-start: 2;
    }

    .graphic-circles{
      position: absolute;
      height: 100%;
      aspect-ratio: 1 / 1;
    }

    .graphic-circles img{
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .graphic-energy{
      animation: turn1 10s linear infinite;
    }

    .graphic-circle-2{
      animation: turn1 26s linear infinite;
    }

    .graphic-circle-1{
      animation: turn2 16s linear infinite;
    }

    @keyframes turn1{
      to{
        transform: rotate(1turn);
      }
    }

    @keyframes turn2{
      to{
        transform: rotate(-1turn);
      }
    }
    `,
});
