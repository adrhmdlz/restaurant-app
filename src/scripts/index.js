import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

// Components
import './components/AppBar';
import './components/AppHero';

// Utils
import { navbarActive, navbarInactive } from './utils/navbarFunc';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  main.style.minHeight = `calc(100vh - ${
    header.clientHeight + footer.clientHeight
  }px)`;

  const hamburgerButton = document.querySelector('#hamburgerButton');
  const navbarItems = document.querySelector('#navItems');

  hamburgerButton.addEventListener('click', () => {
    if (navbarItems.classList.contains('active')) {
      navbarInactive();
    } else {
      navbarActive();
    }
  });

  main.addEventListener('click', () => {
    navbarInactive();
  });
});
