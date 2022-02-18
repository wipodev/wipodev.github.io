AJWipo.component("aj-menu", {
  template:
    /*HTML*/
    `
    <span class="btn-icon"></span>
    `,
  style:
    /*CSS*/
    `
    .btn-menu {
  display: none;
}

    @media (min-width: 768px){
    .btn-menu {
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.4rem
}

.btn-icon {
  display: block;
  background-color: var(--first-color);
  transition-duration: 0.2s;
}

.btn-icon,
.btn-icon::before,
.btn-icon::after {
  width: 100%;
  height: 0.25rem;
  /*border-radius: 4px;*/
}

.btn-icon::before,
.btn-icon::after {
  content: "";
  display: block;
  background-color: inherit;
}

.btn-icon::before {
  margin-top: -0.65rem;
}

.btn-icon::after {
  margin-top: 1rem;
}

.btn-menu.is-active .btn-icon {
  transform: rotate(45deg);
}

.btn-menu.is-active .btn-icon::before {
  opacity: 0;
}

.btn-menu.is-active .btn-icon::after {
  transform: rotate(90deg);
  margin-top: 0.4rem;
}
    }
    `,
});
