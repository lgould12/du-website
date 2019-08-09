import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Rush from '@/components/Rush'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/rush',
      name: 'Rush',
      component: Rush
    }
  ]
})
