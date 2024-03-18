/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('Showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restoran yang difavoritkan', '.empty-restaurant-message');
});

Scenario('Favoriting one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran yang difavoritkan', '.empty-restaurant-message');

  I.amOnPage('/');

  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.card');
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-title a');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('Unfavoriting a restaurant', ({ I }) => {
  I.see('Tidak ada restoran yang difavoritkan', '.empty-restaurant-message');

  I.amOnPage('/');

  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').first();
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');

  I.seeElement('.restaurant-title a');
  I.click('.restaurant-title a');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');

  I.see('Tidak ada restoran yang difavoritkan', '.empty-restaurant-message');
});
