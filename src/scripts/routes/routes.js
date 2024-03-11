import RestaurantList from '../views/pages/restaurant-list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': RestaurantList, // Default page
  '/restaurant': RestaurantList,
  '/favorites': Favorite,
  '/detail/:id': Detail,
};

export default routes;
