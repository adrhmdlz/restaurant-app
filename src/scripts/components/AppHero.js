class AppHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-wrapper">
        <h1>Mau makan dimana kita hari ini?</h2>
      </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
