import Vue from 'vue';
import fontawesome from '@fortawesome/fontawesome';
import 'bulma/css/bulma.css';
import App from './App.vue';
import router from './router';
import store from './store';

require('./assets/css/main.scss');

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', fontawesome);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
