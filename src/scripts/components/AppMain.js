const { restaurants } = require('../../public/data/DATA.json');

class AppMain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let html = `
      <div class="main-wrapper">
        <h2 class="main-header" tabindex="0">Rekomendasi Restoran</h2>
        <div class="card-wrapper" id="mainCard">
    `;

    restaurants.forEach((item) => {
      html += `
          <div class="card" tabindex="0" aria-label="nama restoran, ${item.name}. lokasi restoran, ${item.city}. rating restoran, ${item.rating}">
            <span class="card-info">${item.city}</span>
            <img src="${item.pictureId}" alt="${item.name}" class="card-image"></img>
            <div class="card-body">
              <div class="card-header">
                <h3>${item.name}</h3>
                <i class="fas fa-star star">
                  <p>${item.rating}</p>
                </i>
              </div>
              <p class="card-desc">${item.description}</p>
            </div>
          </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.innerHTML = html;
  }
}

customElements.define('app-main', AppMain);
