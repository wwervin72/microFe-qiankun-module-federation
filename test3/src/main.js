import './public-path';
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

let instance = null
const isQiankunSubApp = !!window.__POWERED_BY_QIANKUN__;

function render(props = {}) {
  const { container } = props
  Vue.prototype.$propsFromQiankun = props
  instance = new Vue({
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!isQiankunSubApp) {
  render()
}

// eslint-disable-next-line require-await
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

// eslint-disable-next-line require-await
export async function mount(props) {
  console.log('[vue] vue app mount')
  render(props)
}

// eslint-disable-next-line require-await
export async function unmount() {
  instance.$destroy()
  instance = null
}
