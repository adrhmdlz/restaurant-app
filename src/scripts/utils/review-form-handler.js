import RestaurantApiDicodingSource from '../data/restaurantapidicoding-source';
import API_ENDPOINT from '../global/api-endpoint';
import UrlParser from '../routes/url-parser';
import { createToast } from './notification-handler';

const reviewFormHandler = () => {
  const formContent = document.getElementById('addRestaurantReview');
  formContent.addEventListener('submit', async (event) => {
    event.preventDefault();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiDicodingSource.detailRestaurant(url.id);

    const restaurantId = restaurant.restaurant.id;
    const customerName = document.getElementById('customerName').value;
    const customerReview = document.getElementById('customerReview').value;

    const data = {
      id: restaurantId,
      name: customerName,
      review: customerReview,
    };

    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        createToast('warning', 'Review gagal terkirim');
      }

      formContent.reset();
      createToast('success', 'Review terkirim');
    } catch (error) {
      createToast('danger', `Error: ${error.message}`);
    }
  });
};

export default reviewFormHandler;
