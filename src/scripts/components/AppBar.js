class AppBar extends HTMLElement {
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

          <button class="hamburgerButton" id="hamburgerButton" title="Off canvas button">
            <i class="fas fa-bars"></i>
          </button>

          <ul class="nav-items" id="navItems">
            <li class="nav-item active"><a href="/">Home</a></li>
            <li class="nav-item"><a href="#">Favorites</a></li>
            <li class="nav-item"><a href="https://github.com/adrhmdlz">About Us</a></li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
