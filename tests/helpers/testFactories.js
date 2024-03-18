import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenterWithRestaurant };
