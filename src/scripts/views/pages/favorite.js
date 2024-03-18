import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createFavoriteHeroTemplate, createRestaurantItemTemplate } from '../../templates/template-creator';
import { createToast } from '../../utils/notification-handler';

const Favorite = {
  async render() {
    return '<div class="card-wrapper" id="mainCard"></div>';
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      const restaurantsCard = document.querySelector('#mainCard');

      const heroContainer = document.querySelector('#heroWrapper');
      heroContainer.innerHTML = createFavoriteHeroTemplate();

      if (restaurants.length !== 0) {
        restaurants.forEach((restaurant) => {
          restaurantsCard.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        restaurantsCard.innerHTML += '<p class="empty-restaurant-message">Tidak ada restoran yang difavoritkan</p>';
        restaurantsCard.style.display = 'block';
      }
    } catch (error) {
      createToast('danger', `Error: ${error.message}`);
    }
  },
};

export default Favorite;
