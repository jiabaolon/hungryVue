import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import seller from '@/components/seller/seller'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratingss'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/hello/goods'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      children:[
         {path:'/hello/seller',component:seller},
         {path:'/hello/goods',component:goods},
         {path:'/hello/ratings',component:ratings}
      ]
    }
  ]


})
