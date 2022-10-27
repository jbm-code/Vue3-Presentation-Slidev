import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Composition from '@/components/Composition'
import Option from '@/components/Option'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Option',
      name: 'Option',
      component: Option
    },
    {
      path: '/Composition',
      name: 'Composition',
      component: Composition
    }
  ],
})
