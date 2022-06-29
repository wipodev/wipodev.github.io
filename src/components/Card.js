AJWipo.component("aj-card", {
  template:
    /*HTML*/
    `
  <section class="link-card">
    <a href="{{href}}">
      <img src="{{img}}" alt="{{title}}">
      <h2>
        {{title}}
        <span>&rarr;</span>
      </h2>
      <p>
       {{description}}
      </p>
    </a>
  </section>
    `,
  script: {
    props: ["href", "img", "title", "description"],
  },
  style:
    /*CSS*/
    `
:root {
   --color-border: hsl(17, 24%, 90%);
   --link-gradient: linear-gradient(45deg, #002a8d, #ff7800 30%, var(--color-border) 60%);
  }

  .link-card {
    display: flex;
    padding: 0.15rem;
    background-image: var(--link-gradient);
    background-size: 400%;
    border-radius: 0.5rem;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  img {
    width: 100%;
    height: auto;
  }

  .link-card>a {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: 1em 1.3em;
    border-radius: 0.35rem;
    color: var(--text-color);
    background-color: white;
    opacity: 0.8;
  }

  h2 {
    margin: 0;
    transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  p {
    margin-top: 0.75rem;
    margin-bottom: 0;
  }

  h2 span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .link-card:is(:hover, :focus-within) {
    background-position: 0;
  }

  .link-card:is(:hover, :focus-within) h2 {
    color: #4F39FA;
  }

  .link-card:is(:hover, :focus-within) h2 span {
    transform: translateX(2px);
  }
    `,
});
