const navbarItems = document.querySelector('#navItems');

export const navbarActive = () => {
  navbarItems.classList.toggle('active');
  const icons = document.querySelector('#hamburgerButton .fas');
  icons.classList.replace('fa-bars', 'fa-times');
};

export const navbarInactive = () => {
  navbarItems.classList.remove('active');
  const icons = document.querySelector('#hamburgerButton .fas');
  icons.classList.replace('fa-times', 'fa-bars');
};
