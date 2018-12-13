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

Vue.directive('highlight', {
  bind(el, binding, vnode) {
      // el.style.backgroundColor = 'green';
      // el.style.backgroundColor = binding.value;
      var delay = 0;
      if (binding.modifiers['delayed']) {
          delay = 3000;
      }
      setTimeout(() => {
          if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
          } else {
              el.style.color = binding.value;
          }
      }, delay);
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
  // next(false); abort
  // next('/path'); that path including params and so on to redirect,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
