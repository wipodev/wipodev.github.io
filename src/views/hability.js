AJWipo.component("aj-hability", {
  template:
    /*HTML*/
    `
    <div class="grid-container">
      <div class="content">
        <h2 class="title">AJ-Wipo</h2>
        <p class="description">
          Soy de Venezuela y desarrollador web autodidacta. La programación es algo que me ha fascinado desde hace años, sigo aprendiendo y quiero enseñar lo que se.
        </p>
      </div>
      <div class="graphic">
        <img class="graphic-man" src="../assets/img/tech-man.png" alt="foto de wladimir">
        <div class="graphic-circles">
          <img class="graphic-energy" src="../assets/img/aro.png" alt="aro de energía">
          <img class="graphic-logo" src="../assets/img/logo.png" alt="logo">
          <div class="graphic-circle-e circle">
            <img id="html5" src="../assets/img/html5.png" alt="logo html5">
            <img id="css3" src="../assets/img/css3.png" alt="logo css3">
            <img id="js" src="../assets/img/js.png" alt="logo js">
            <img id="vue" src="../assets/img/vue.png" alt="logo vue">
          </div>
          <div class="graphic-circle-i circle">
            <img id="node" src="../assets/img/node.png" alt="logo node">
            <img id="inkscape" src="../assets/img/inkscape.png" alt="logo inkscape">
            <img id="git" src="../assets/img/git.png" alt="logo git">
            <img id="php" src="../assets/img/php.png" alt="logo php">
          </div>
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
      text-align: center;
    }

    .description{
      font-size: .8rem;
      margin-bottom: 2rem;
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
      grid-template-columns: 1fr 90%;
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

    /*********************** mi animacion prueba ***********************/

    .circle{
      position: absolute;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    .graphic-circle-e{      
      animation: turn1 26s linear infinite;
    }

    .graphic-circle-i{
      animation: turn2 16s linear infinite;
    }

    .circle img{
      position: relative;
      height: auto;
      opacity: 0.5;
    }

    .circle img:hover{
      opacity: 1;
    }

    .graphic-circle-e img{
      width: 40%;
      animation: turn2 26s linear infinite;
    }

    .graphic-circle-i img{
      width: 30%;
      animation: turn1 16s linear infinite;
    }

    #html5{
      grid-column-start: 2;
      justify-self: center;
    }

    #css3{
      grid-column-start: 3;
      grid-row-start: 2;
      justify-self: right;
      align-self: center;
    }

    #js{
      grid-column-start: 2;
      grid-row-start: 3;
      justify-self: center;
      align-self: end;
    }

    #vue{
      grid-row-start: 2;
      align-self: center;
    }

    #node{
      grid-column-start: 2;
      justify-self: center;
      align-self: end;
    }

    #inkscape{
      grid-column-start: 3;
      grid-row-start: 2;
      align-self: center;
    }

    #git{
      grid-column-start: 2;
      grid-row-start: 3;
      justify-self: center;
    }

    #php{
      grid-row-start: 2;
      align-self: center;
      justify-self: end;
    }

    /*********************************** */    

    .graphic-energy{
      animation: turn1 10s linear infinite;
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
