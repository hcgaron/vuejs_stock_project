import Vue from 'vue';
import VueRouter from 'vue-router'; // must import from vue-router
import App from './App.vue';
import { routes } from './routes'
import { resolve } from 'q';

// set up for using VueRouter
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // provides better urls than 'hash' mode
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ selector: to.hash })
        }, 500)
      })
    }
  }
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
