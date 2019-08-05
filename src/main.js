import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { store } from './store/store';
import { router } from './router';
import { resolve } from 'q';

Vue.use(VueResource);

Vue.http.options.root = 'https://stockprojectvuejs.firebaseio.com/userFunds.json'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
