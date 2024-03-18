/* eslint-disable no-undef */
const assert = require('assert');

Feature('Create A Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add a review to restaurant', async ({ I }) => {
  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').first();
  I.click(firstRestaurant);

  I.seeElement('#addRestaurantReview');
  I.fillField('Nama', 'Abi');
  I.fillField('Review', 'test');
  I.click('.form-button');

  I.waitForElement('.customer-review');

  // Memverifikasi bahwa review telah ditambahkan dengan benar
  const addedReviewName = await I.grabTextFrom('.customer-review:last-child h4');
  const addedReviewContent = await I.grabTextFrom('.customer-review:last-child p:first-child');

  // Memastikan nama dan review yang ditambahkan sesuai
  assert.equal(addedReviewName.trim(), 'Abi');
  assert.equal(addedReviewContent.trim().split('"').join(''), 'test');
});
