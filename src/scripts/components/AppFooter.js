class AppFooter extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer-wrapper">
        <p class="footer-content">Copyright &copy; 2024, made by <a href="https://instagram.com/adrhmdlz" class="footer-link" target="_blank" aria-label="Author Social Media">Adrhmdlz</a>.</p>
      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);
