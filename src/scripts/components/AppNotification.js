class AppNotification extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<div class="notification-wrapper"></div>';
  }
}

customElements.define('app-notification', AppNotification);
