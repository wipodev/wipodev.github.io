AJWipo.component("aj-card", {
  template:
    /*HTML*/
    `
    <section class="card-image">
  </section>
  <div class="card-container">
    <h3 class="card-title">
      <slot name="title">Web</slot>
    </h3>
    <div class="card-content">
      <p>
        <slot name="description">Sitio web</slot>
      </p>
      <a href="#" class="btn btn-card">
        <slot name="btn">view now</slot>
      </a>
    </div>
  </div>
    `,
  script: {
    props: ["title", "description", "btn"],
  },
  style:
    /*CSS*/
    `
    aj-card {
        display: block;
  width: 40%;
  height: 40vh;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 10px 2px #00000044;
  color: #00000070;
}

.card-image {
  height: 60%;
  border-radius: 10px 10px 0 0;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KlKLa7hfGEgUjvAIXPiCmJcCixI9Y95-2g&usqp=CAU");
  background-repeat: no-repeat;
  background-size: cover;
}

.card-container {
  padding: 10px;
  background-color: #ffffff;
  height: 40%;
  border-radius: 0 0 10px 10px;
}

.card-title {
    font-size: 2.5vw;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 100%;
}

.card-content p {
    font-size: 1.3vw;
}

.btn-card {
  border: 2px solid #00000044;
  font-size: 1.3vw;
  min-width: 75px;
}
    `,
});
