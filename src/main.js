import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // the user navigated back with the back button, it's probably not the desired behavior to scroll him all
    if (savedPosition) {
      return savedPosition;
    }
    // navigates to the hash passed in the url
    if (to.hash) {
      return { selector: to.hash };
    }
    // default page location
    return {x: 0, y: 0};
  }
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
