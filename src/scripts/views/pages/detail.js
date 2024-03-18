import RestaurantApiDicodingSource from '../../data/restaurantapidicoding-source';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';

const Detail = {
  async render() {
    return `
      <section class="restaurant-detail" id="restaurantDetail"></section>
      <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = (await import('../../routes/url-parser')).default.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiDicodingSource.detailRestaurant(url.id);
    const restaurantDetail = restaurant.restaurant;

    const heroContainer = document.querySelector('#heroWrapper');
    heroContainer.innerHTML = (await import('../../templates/template-creator')).createDetailHeroTemplate();

    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML = (await import('../../templates/template-creator')).createRestaurantDetailTemplate(
      restaurantDetail,
    );

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurant: (await import('../../data/favorite-restaurant-idb')).default,
      restaurant: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
        description: restaurantDetail.description,
        pictureId: restaurantDetail.pictureId,
        city: restaurantDetail.city,
        rating: restaurantDetail.rating,
      },
    });

    (await import('../../utils/review-form-handler')).default();
  },
};

export default Detail;
