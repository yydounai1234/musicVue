// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('./assets/images/timg.gif'),
  error: require("./assets/images/timg.gif")
});
/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    show:false,
    url:"",
    lodding:false,
    a:"",
    b:"",
    c:"",
    arr:[],
    curretSong:""
  }
});
router.push("/?id=0");
router.beforeEach(function (to,from,next) {
  document.documentElement.scrollTop=0;
  next()
});
Vue.filter('fn', function (value) {
    value=(value/10000).toFixed(1)+"万";
    return value
})
