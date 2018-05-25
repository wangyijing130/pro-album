import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../pages/welcome'
import Login from '../pages/login'
import Home from '../pages/home'
import Signout from '../pages/signout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/signout',
      name: 'Signout',
      component: Signout
    }
  ]
})
