import RestaurantApiDicodingSource from '../../data/restaurantapidicoding-source';
import { createRestaurantItemTemplate } from '../../templates/template-creator';
import { createToast } from '../../utils/notification-handler';

const RestaurantList = {
  async render() {
    return `
      <h2 class="main-header" tabindex="0">Rekomendasi Restoran</h2>
      <div class="card-wrapper" id="mainCard"></div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantApiDicodingSource.listRestaurant();
      const restaurantsCard = document.querySelector('#mainCard');

      const heroContainer = document.querySelector('#heroWrapper');
      heroContainer.innerHTML = `
        <h1 tabindex="0">Mau makan dimana hari ini?</h1>
        <a href="#mainContent" id="searchRestaurantButton">Cari Restaurant</a>
      `;

      if (restaurants) {
        restaurants.forEach((restaurant) => {
          restaurantsCard.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
    } catch (error) {
      createToast('danger', `Error: ${error.message}`);
    }
  },
};

export default RestaurantList;
