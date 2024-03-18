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
      fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            createToast('warning', 'Review gagal terkirim');
          }

          return response.json();
        })
        .then((newReview) => {
          const reviewsContainer = document.querySelector('.restaurant-reviews-list');
          reviewsContainer.innerHTML = '';

          newReview.customerReviews.forEach((review) => {
            const customerReviewWrapper = document.createElement('div');
            customerReviewWrapper.classList.add('customer-review');
            customerReviewWrapper.setAttribute('tabindex', '0');
            customerReviewWrapper.setAttribute(
              'aria-label',
              `${review.name}, ${review.review}, pada tanggal ${review.date}`,
            );

            const reviewerReview = document.createElement('p');
            reviewerReview.classList.add('review-item');
            reviewerReview.textContent = `${review.review}`;

            const reviewerName = document.createElement('h4');
            reviewerName.classList.add('review-item');
            reviewerName.textContent = `${review.name}`;

            const reviewDate = document.createElement('p');
            reviewDate.classList.add('review-item');
            reviewDate.textContent = `${review.date}`;

            customerReviewWrapper.appendChild(reviewerReview);
            customerReviewWrapper.appendChild(reviewerName);
            customerReviewWrapper.appendChild(reviewDate);

            reviewsContainer.appendChild(customerReviewWrapper);
          });

          formContent.reset();
          createToast('success', 'Review terkirim');
        })
        .catch((error) => {
          createToast('danger', `Error: ${error.message}`);
        });
    } catch (error) {
      createToast('danger', `Error: ${error.message}`);
    }
  });
};

export default reviewFormHandler;
