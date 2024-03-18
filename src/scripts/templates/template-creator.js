import API_ENDPOINT from '../global/api-endpoint';

const createMainHeroTemplate = () => `
  <div class="hero-content">
    <h1 tabindex="0">Mau makan dimana hari ini?</h1>
    <a href="#mainContent" id="searchRestaurantButton">Cari Restaurant</a>
  </div>
  <picture>
    <source media="(max-width: 600px)" data-srcset="/images/heros/hero-image_2-small.jpg">
    <source media="(max-width: 600px)" data-srcset="/images/heros/hero-image_2-small.webp">
    <source data-srcset="/images/heros/hero-image_2-large.jpg">
    <source data-srcset="/images/heros/hero-image_2-large.webp">
    <img class="lazyload" data-src="/images/heros/hero-image_2.jpg" alt="Hero Image">
  </picture>
`;

const createFavoriteHeroTemplate = () => `
  <div class="hero-content">
    <h1 tabindex="0">Restoran Favorit</h1>
  </div>
  <picture>
    <source media="(max-width: 600px)" data-srcset="/images/heros/hero-image_2-small.jpg">
    <source media="(max-width: 600px)" data-srcset="/images/heros/hero-image_2-small.webp">
    <source data-srcset="/images/heros/hero-image_2-large.jpg">
    <source data-srcset="/images/heros/hero-image_2-large.webp">
    <img class="lazyload" data-src="/images/heros/hero-image_2.jpg" alt="Hero Image">
  </picture>
`;

const createDetailHeroTemplate = () => `
  <div class="hero-content">
    <h1 tabindex="0">Detail Restoran</h1>
  </div>
  <picture>
    <source media="(max-width: 600px)" data-srcset="/images/heros/hero-image_2-small.jpg">
    <source media="(max-width: 600px)" data-srcset="/images/heros/hero-image_2-small.webp">
    <source data-srcset="/images/heros/hero-image_2-large.jpg">
    <source data-srcset="/images/heros/hero-image_2-large.webp">
    <img class="lazyload" data-src="/images/heros/hero-image_2.jpg" alt="Hero Image">
  </picture>
`;

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

  let restaurantDetailRatingHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Math.floor(restaurant.rating); i++) {
    restaurantDetailRatingHTML += '<span class="fa fa-star"></span>';
  }

  return `
    <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>

    <figure>
      <picture>
        <source 
          media="(max-width: 600px)" data-srcset="${`${API_ENDPOINT.RESTAURANT_IMAGE_SMALL_URL}/${restaurant.pictureId}`}" 
          alt="${restaurant.name}"
        >
        <img 
          data-src="${`${API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM_URL}/${restaurant.pictureId}`}" 
          alt="${restaurant.name}"
          class="lazyload"
        >
      </picture>
      <figcaption>${restaurant.name}, ${restaurant.city}</figcaption>
    </figure>

    <hr />

    <article 
      class="restaurant-overview" 
      tabindex="0" 
      aria-label="rating restoran ${restaurant.rating}, jumlah review ${restaurant.customerReviews.length}"
    >
      <div class="item restaurant-ratings">
        <div class="restaurant-star">
          ${restaurantDetailRatingHTML}
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
      <p 
        tabindex="0" 
        aria-label="deskripsi, ${restaurant.description}">
          ${restaurant.description}
      </p>
    </article>

    <article class="restaurant-info">
      <h3>Additional information</h3>

      <div 
        class="restaurant-detail" 
        tabindex="0" 
        aria-label="alamat, ${restaurant.address}, ${restaurant.city}"
      >
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

    <article class="restaurant-reviews-list">
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

const createRestaurantItemTemplate = (restaurant) => {
  let restaurantItemRating = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Math.floor(restaurant.rating); i++) {
    restaurantItemRating += '<i class="fa fa-star skeleton"></i>';
  }

  return `
    <div 
      class="card" 
      tabindex="0" 
      aria-label="nama restoran, ${restaurant.name}. lokasi restoran, ${restaurant.city}."
    >
      <span class="card-info skeleton">${restaurant.city}</span>
      <picture>
        <source 
          media="(max-width: 600px)" data-srcset="${`${API_ENDPOINT.RESTAURANT_IMAGE_SMALL_URL}/${restaurant.pictureId}`}" 
          alt="${restaurant.name}" 
          class="lazyload card-image skeleton"
        >
        <img 
          data-src="${`${API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM_URL}/${restaurant.pictureId}`}" 
          alt="${restaurant.name}" 
          class="lazyload card-image skeleton"
        >
      </picture>
      <div class="card-body">
        <div class="card-header">
          <h3 class="restaurant-title skeleton">
            <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
          </h3>
          <div class="restaurant-ratings">
            ${restaurantItemRating}
          </div>
        </div>
        <p class="card-desc skeleton">${restaurant.description}</p>
      </div>
    </div>
  `;
};

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="add to favorite" id="favoriteButton" class="favorite">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="remove from favorite" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMainHeroTemplate,
  createFavoriteHeroTemplate,
  createDetailHeroTemplate,
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
