import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
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

const skeletonRemove = () => {
  const skeletons = document.querySelectorAll('.skeleton');
  if (skeletons) {
    skeletons.forEach((item) => {
      item.classList.remove('skeleton');
    });
  }
};

window.addEventListener('hashchange', () => {
  setTimeout(skeletonRemove, 2000);
  app.renderPage();
});

window.addEventListener('load', () => {
  setTimeout(skeletonRemove, 2000);
  app.renderPage();
  swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(skeletonRemove, 2000);
  NavigationBar.init();
});
