import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

import "@/style/app.scss"
//权限判断
import "./permission.js"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
