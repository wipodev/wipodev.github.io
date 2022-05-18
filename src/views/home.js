AJWipo.component("aj-home", {
  template:
    /*HTML*/
    `
    <article class="hero-image">
        <aside class="hero-image-opacity">
            <div class="hero-image-content">
                <h2 class="hero-image-title">
                    Bienvenid@s <br>a mi sitio
                </h2>
            </div>
        </aside>
    </article>
    `,
  style:
    /*CSS*/
    `
    .home{
      display: block;
    }

    .hero-image {
  background-image: url("../assets/img/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.hero-image-opacity {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 9rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-image-title {
  color: var(--second-color);
  font-size: 9vw;
}
    `,
});
