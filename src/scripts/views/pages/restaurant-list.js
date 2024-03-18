import RestaurantApiDicodingSource from '../../data/restaurantapidicoding-source';

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
      const restaurantTemplate = await import('../../templates/template-creator');
      const restaurantsCard = document.querySelector('#mainCard');

      const heroContainer = document.querySelector('#heroWrapper');
      heroContainer.innerHTML = restaurantTemplate.createMainHeroTemplate();

      if (restaurants) {
        restaurants.forEach(async (restaurant) => {
          restaurantsCard.innerHTML += restaurantTemplate.createRestaurantItemTemplate(restaurant);
        });
      }
    } catch (error) {
      (await import('../../utils/notification-handler')).createToast('danger', 'Error:', error);
    }
  },
};

export default RestaurantList;
