class AppBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="navbar-wrapper container">
        <nav id="navbar" class="navbar">
          <a href="/" class="navbar-brand" title="Brand title">MakanKuy</a>

          <button class="hamburgerButton" id="hamburgerButton">
            <i class="fas fa-bars"></i>
          </button>

          <ul class="nav-items" id="navItems">
            <li><a class="nav-item" href="/#/restaurant">Home</a></li>
            <li><a class="nav-item" href="/#/favorites">Favorites</a></li>
            <li><a class="nav-item" href="https://github.com/adrhmdlz" target="_blank">About Us</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
