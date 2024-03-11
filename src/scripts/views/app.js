import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, navIcon, content }) {
    this._button = button;
    this._drawer = drawer;
    this._navIcon = navIcon;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      navIcon: this._navIcon,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._attachSkipContentListener();
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  // eslint-disable-next-line class-methods-use-this
  _attachSkipContentListener() {
    const skipContentElement = document.querySelector('.skip-link');
    skipContentElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
