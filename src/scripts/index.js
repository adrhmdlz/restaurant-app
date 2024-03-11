import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

// Components
import './components/AppBar';
import './components/AppHero';
import './components/AppMain';
import './components/AppFooter';
import './components/AppNotification';

// Apps
import App from './views/app';
import swRegister from './utils/sw-register';
import NavigationBar from './utils/navbar-initiator';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navItems'),
  navIcon: document.querySelector('#hamburgerButton .fas'),
  content: document.querySelector('#mainWrapper'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  NavigationBar.init();
});
