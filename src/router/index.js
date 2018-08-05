import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import bookrack from '../page/bookrack.vue'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookrack',
      component: bookrack
    },
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld
    }
  ]
})