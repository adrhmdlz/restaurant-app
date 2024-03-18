import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  RESTAURANT_IMAGE_MEDIUM_URL: `${CONFIG.BASE_URL}/images/medium`,
  RESTAURANT_IMAGE_SMALL_URL: `${CONFIG.BASE_URL}/images/small`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
};

export default API_ENDPOINT;
