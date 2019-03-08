import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//pc框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


//移动框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(ElementUI);		
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store, //注册store  this.$store
  render: h => h(App)
}).$mount('#app')

