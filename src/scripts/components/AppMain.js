class AppMain extends HTMLElement {
  constructor() {
    super();
    this.classList.add('container');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="main-wrapper" id="mainWrapper">
      </div>
    `;
  }
}

customElements.define('app-main', AppMain);
