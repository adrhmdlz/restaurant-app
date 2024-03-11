const NavigationBar = {
  init() {
    this.setActiveLink();
    window.addEventListener('hashchange', this.setActiveLink);
  },

  setActiveLink() {
    const links = document.querySelectorAll('.nav-item');

    links.forEach((link) => {
      if (`/${window.location.hash}` === link.getAttribute('href')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (window.location.hash === '') {
      links[0].classList.add('active');
    }
  },
};

export default NavigationBar;
