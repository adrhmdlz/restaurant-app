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
        <h1 tabindex="0">Mau makan dimana hari ini?</h2>
        <a href="#mainContent">Cari Restaurant</a>
      </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
