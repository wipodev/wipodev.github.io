AJWipo.component("aj-header", {
  template:
    /*HTML*/
    `
    <div class="wrapper">
                    <section class="header-title">
                        <h1>Wladimir Perez</h1>
                        <h3>Desarrollador Web</h3>
                    </section>
                    <section class="header-img">
                        <img src="https://assets.codepen.io/5993985/internal/avatars/users/default.png?format=auto&version=1642194704&width=300&height=300"
                            alt="wladimir">
                    </section>
                </div>
    `,
  style:
    /*CSS*/
    `
    .header {
  width: 100%;
  height: 9rem;
  position: absolute;
  top: calc(50vh - 4.5rem);
  z-index: 1;  
  transition: height 0.5s ease;
}

.header .wrapper {
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  transition: all 0.5s ease;
  color: var(--text-color-w)
}

.header .header-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.header h1 {
  font-size: 8vw;
  font-weight: bold;  
}

.header h3 {
  font-size: 3vw;  
}

.header img {
  width: auto;
  height: 100%;
  border-radius: 50%;
}

.header.is-fixed {
  height: 5rem;
  position: fixed;
  top: 0px;
  right: 0px;
}

.header.is-fixed .wrapper {
  justify-content: flex-end;
}

.header.is-fixed h1 {
  font-size: 3vw;
  color: var(--first-color);
}

.header.is-fixed h3 {
  font-size: 1vw;
  color: var(--second-color);
}
    `,
});
