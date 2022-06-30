import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { dealApps } from '@/qiankun';
import { registerMicroApps, start } from 'qiankun';
import '@/qiankun/globalState';

Vue.config.productionTip = false

let app = null;

function render() {
  if (!app) {
    app = new Vue({
      router,
      // store,
      render: h => h(App),
    }).$mount('#app');
  }
  return dealApps(app);
}

function register(apps) {
  registerMicroApps(apps, {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  });
  start({
    sandbox: { strictStyleIsolation: false },
  });
}

const apps = render();
register(apps);