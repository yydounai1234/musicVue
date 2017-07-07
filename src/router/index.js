import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Singer from '../pages/singer'
import Hot from '../pages/hot'
import Songlist from '../pages/songlist'
import Item from '../components/item'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/songlist',
      name: 'Songlist',
      component:Songlist
    },
    {
      path: '/item',
      name: 'Item',
      component:Item
    }
  ]
})
