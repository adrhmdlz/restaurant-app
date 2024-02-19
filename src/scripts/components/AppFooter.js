class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>Hello, Indonesia!</h2>
    `;
  }
}

customElements.define('app-footer', AppFooter);
