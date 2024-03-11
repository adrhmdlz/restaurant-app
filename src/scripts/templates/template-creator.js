import API_ENDPOINT from '../global/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => {
  let foodsHTML = '';
  restaurant.menus.foods.forEach((food) => {
    foodsHTML += `
      <li class="menu-item" tabindex="0" aria-label="${food.name}">
        <i class="fas fa-utensils"></i>  
        <p>${food.name}</p>
      </li>
    `;
  });

  let drinksHTML = '';
  restaurant.menus.drinks.forEach((drink) => {
    drinksHTML += `
      <li class="menu-item" tabindex="0" aria-label="${drink.name}">
        <i class="fas fa-coffee"></i>
        <p>${drink.name}</p>
      </li>
    `;
  });

  let customerReviewsHTML = '';
  restaurant.customerReviews.forEach((review) => {
    customerReviewsHTML += `
      <div class="customer-review" tabindex="0" aria-label="${review.name}, ${review.review}, pada tanggal ${review.date}">
        <p class="review-item">"${review.review}"</p>
        <h4 class="review-item">${review.name}</h4>
        <p class="review-item">${review.date}</p>
      </div>
    `;
  });

  let restaurantCategoriesHTML = '';
  restaurant.categories.forEach((categories) => {
    restaurantCategoriesHTML += `<span class="restaurant-tag">${categories.name}</span>`;
  });

  let restaurantRatingHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Math.floor(restaurant.rating); i++) {
    restaurantRatingHTML += '<span class="fa fa-star"></span>';
  }

  return `
    <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>

    <figure>
      <img 
        src="${`${API_ENDPOINT.RESTAURANT_IMAGE_URL}/${restaurant.pictureId}`}" 
        alt="${restaurant.name}"
      >
      <figcaption>${restaurant.name}, ${restaurant.city}</figcaption>
    </figure>

    <hr />

    <article class="restaurant-overview" tabindex="0" aria-label="rating restoran ${restaurant.rating}, jumlah review ${restaurant.customerReviews.length}">
      <div class="item restaurant-ratings">
        <div class="restaurant-star">
          ${restaurantRatingHTML}
        </div>
        <span>&#x2022;</span>
        <span>${restaurant.rating}</span>
      </div>
      
      <div class="item restaurant-reviews">
        <span class="far fa-comment-alt"></span>
        <span>${restaurant.customerReviews.length} Reviews</span>
      </div>

      <div class="item restaurant-tags">
        <p>Top Tags :</p>
        <div class="restaurant-tags-item">
          ${restaurantCategoriesHTML}
        </div>
      </div>
    </article>

    <article class="restaurant-description">
      <p tabindex="0" aria-label="deskripsi, ${restaurant.description}">${restaurant.description}</p>
    </article>

    <article class="restaurant-info">
      <h3>Additional information</h3>

      <div class="restaurant-detail" tabindex="0" aria-label="alamat, ${restaurant.address}, ${restaurant.city}">
        <ul class="restaurant-detail-list">
          <li class="restaurant-detail-item">
            <div class="restaurant-info-wrapper">
              <span class="fas fa-map-marker-alt"></span>
              <div class="restaurant-info-detail">
                <h4 class="restaurant-info-detail-item">Location</h4>
                <p>${restaurant.address}, ${restaurant.city}</p>
              </div>
            </div>
          </li>
          <li class="restaurant-detail-item">
            <div class="restaurant-info-wrapper">
              <span class="fas fa-building"></span>
              <div class="restaurant-info-detail">
                <h4 class="restaurant-info-detail-item">City</h4>
                <p>${restaurant.city}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </article>

    <article class="restaurant-menu">
      <h3>Menu</h3>

      <div class="restaurant-menu-item menu-food">
        <h4>Foods</h4>

        <ul class="restaurant-menu-food">
          ${foodsHTML}
        </ul>
      </div>

      <div class="restaurant-menu-item menu-drink">
        <h4>Drinks</h4>

        <ul class="restaurant-menu-drink">
          ${drinksHTML}
        </ul>
      </div>
    </article>

    <hr />

    <span>${restaurant.customerReviews.length} Reviews</span>

    <article class="restaurant-reviews">
      ${customerReviewsHTML}
    </article>

    <hr />

    <article class="restaurant-review-form">
      <h3>Tambah Review</h3>
      
      <form id="addRestaurantReview">
        <div class="customer-form-wrapper">
          <label for="customerName">Nama</label>
          <input type="text" id="customerName" name="name" required>
        </div>

        <div class="customer-form-wrapper">
          <label for="customerReview">Review</label>
          <textarea id="customerReview" name="review" rows="4" required></textarea>
        </div>

        <input class="form-button" type="submit" value="Tambahkan Review">
      </form>
    </article>
  `;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div 
    class="card" 
    tabindex="0" 
    aria-label="nama restoran, ${restaurant.name}. lokasi restoran, ${restaurant.city}."
  >
    <span class="card-info">${restaurant.city}</span>
    <img 
      src="${`${API_ENDPOINT.RESTAURANT_IMAGE_URL}/${restaurant.pictureId}`}" 
      alt="${restaurant.name}" 
      class="card-image"
    ></img>
    <div class="card-body">
      <div class="card-header">
        <h3>
          <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
        </h3>
        <i class="fas fa-star star">
          <p>${restaurant.rating}</p>
        </i>
      </div>
      <p class="card-desc">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
