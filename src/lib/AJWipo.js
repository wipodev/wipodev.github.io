export default class AJWipo {
  constructor(mount = "#app") {
    this.mount = mount;
  }

  render(view) {
    let { mount } = this;
    let page = document.querySelector(mount);
    page.innerHTML = `<${view}/>`;
    return this;
  }

  use(lib) {
    lib();
    return this;
  }

  preventSubmit() {
    this.element.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
      },
      false
    );
  }

  static getElement(selector, context = document) {
    return context.querySelector(selector);
  }

  static getElementAll(selector, context = document) {
    return context.querySelectorAll(selector);
  }

  static createStore(store) {
    if (typeof window.Store === "undefined") {
      window.Store = store;
    } else {
      console.log("the store is being called again");
    }
  }

  static component(name, { template, script, style }) {
    if (customElements.get(name) === undefined) {
      customElements.define(
        name,
        class extends HTMLElement {
          constructor() {
            super();
            this.slots = {};
          }

          static get observedAttributes() {
            if (script !== undefined) {
              if (script.props !== undefined) return script.props;
            }
          }

          attributeChangedCallback(name, oldValue, newValue) {
            this.slots[name] = newValue;
          }

          isObjEmpty(obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) return false;
            }
            return true;
          }

          connectedCallback() {
            if (name !== "aj-router") {
              if (style !== undefined) {
                this.innerHTML = `<style>${style}</style>`;
              }
              if (!this.isObjEmpty(this.slots)) {
                let tmp = template;
                for (const slot in this.slots) {
                  let regexp = new RegExp(
                    //`<slot name="${slot}">([A-Z0-9 \-_\.,])+<\/slot>`,
                    `{{${slot}}}`,
                    "gi"
                  );
                  tmp = tmp.replace(regexp, this.slots[slot]);
                }
                this.innerHTML += tmp;
              } else {
                this.innerHTML += template;
              }
              if (script !== undefined) {
                if (script.data !== undefined) script.data();
                if (script.methods !== undefined) script.methods();
                if (script.created !== undefined) script.created();
              }
            }
          }
        }
      );
    }
  }
}

((w) => {
  "use strict";

  if (typeof w.AJWipo === "undefined") {
    w.AJWipo = w.AJ = AJWipo;
  } else {
    console.log("the bookstore is calling again");
  }
})(window);
