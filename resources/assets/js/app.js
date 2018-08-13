import Vue from 'vue'
import App from'./App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Header from './components/Header.vue';
import Portfolio from './components/Portfolio.vue';
import Exeperience from './components/Experience.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
