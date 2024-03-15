import UrlParser from '../../routes/url-parser';
import RestaurantApiDicodingSource from '../../data/restaurantapidicoding-source';
import { createRestaurantDetailTemplate } from '../../templates/template-creator';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import reviewFormHandler from '../../utils/review-form-handler';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section class="restaurant-detail" id="restaurantDetail"></section>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiDicodingSource.detailRestaurant(url.id);
    const restaurantDetail = restaurant.restaurant;

    const heroContainer = document.querySelector('#heroWrapper');
    heroContainer.innerHTML = '<h1 tabindex="0">Detail Restoran</h1>';

    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
        description: restaurantDetail.description,
        pictureId: restaurantDetail.pictureId,
        city: restaurantDetail.city,
        rating: restaurantDetail.rating,
      },
    });

    reviewFormHandler();
  },
};

export default Detail;
