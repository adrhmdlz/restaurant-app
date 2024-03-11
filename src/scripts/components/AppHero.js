class AppHero extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-wrapper" id="heroWrapper"></div>
    `;
  }
}

customElements.define('app-hero', AppHero);
