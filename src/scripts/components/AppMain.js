class AppMain extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
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

const appMain = document.createElement('app-main');
appMain.classList.add('container');
document.querySelector('main').appendChild(appMain);
