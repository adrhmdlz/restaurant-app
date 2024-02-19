const { restaurants } = require('../../public/data/DATA.json');

class AppMain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Membuat string kosong untuk menyimpan HTML yang akan dirender
    let html = `
      <div class="main-wrapper">
        <h2 class="main-header" tabindex="0">Rekomendasi Restaurant</h2>
        <div class="card-wrapper">
    `;

    // Iterasi pada setiap objek dalam array dan menambahkan HTML untuk setiap objek
    restaurants.forEach((item) => {
      html += `
          <div class="card">
            <img src="${item.pictureId}" alt="${item.name}" title="${item.name}" class="card-image"></img>
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

    // Menutup tag div
    html += `
        </div>
      </div>
    `;

    // Mengatur innerHTML dari custom element dengan HTML yang telah dibuat
    this.innerHTML = html;
  }
}

customElements.define('app-main', AppMain);
