const DrawerInitiator = {
  init({ button, drawer, navIcon, content }) {
    button.addEventListener('click', (event) => {
      if (drawer.classList.contains('active')) {
        this._closeDrawer(event, drawer);
        navIcon.classList.replace('fa-times', 'fa-bars');
      } else {
        this._toggleDrawer(event, drawer);
        navIcon.classList.replace('fa-bars', 'fa-times');
      }
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      navIcon.classList.replace('fa-times', 'fa-bars');
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('active');
  },
};

export default DrawerInitiator;
