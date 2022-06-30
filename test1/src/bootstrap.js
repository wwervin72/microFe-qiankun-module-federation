import './public-path';
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

const isQiankunSubApp = !!window.__POWERED_BY_QIANKUN__;
let instance

function render(props = {}) {
  const { container } = props
  Vue.prototype.$propsFromQiankun = props
  return new Vue({
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!isQiankunSubApp) {
  render()
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped')
}
  
export async function mount(props) {
    console.log('[vue] vue app mount')
    instance = render(props)
}

export async function unmount() {
    instance.$destroy()
    instance = null
}
