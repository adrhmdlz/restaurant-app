class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer-wrapper">
        <p class="footer-content">Copyright &copy; 2024, made by <a href="https://github.com/adrhmdlz">Adrhmdlz</a>.</p>
      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);
