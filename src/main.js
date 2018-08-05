import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import MuseUI from 'muse-ui';
import router from './router'
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})