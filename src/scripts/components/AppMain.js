class AppMain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>Hello, World</h2>
    `;
  }
}

customElements.define('app-main', AppMain);
