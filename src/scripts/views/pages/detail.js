import UrlParser from '../../routes/url-parser';
import RestaurantApiDicodingSource from '../../data/restaurantapidicoding-source';
import { createRestaurantDetailTemplate } from '../../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import reviewFormHandler from '../../utils/review-form-handler';

const Detail = {
  async render() {
    return `
      <section class="restaurant-detail" id="restaurantDetail"></section>
      <div id="likeButtonContainer"></div>
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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
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
