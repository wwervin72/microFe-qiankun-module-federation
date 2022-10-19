import Vue from 'vue';
import Router from 'vue-router';

const routers = [];

const routerConfig = {
  base: '/test1',
  mode: 'history',
  routes: routers,
};

Vue.use(Router);
export const router = new Router(routerConfig);
