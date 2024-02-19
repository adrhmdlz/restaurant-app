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
        <h1>Mau makan dimana hari ini?</h2>
        <a href="#">Cari Restaurant</a>
      </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
