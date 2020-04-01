import Vue from 'vue';
import VueRouter from 'vue-router';
import AddGroceries from '../views/AddGroceriesList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Add GroceriesList',
    component: AddGroceries,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
