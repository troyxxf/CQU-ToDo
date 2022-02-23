import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Register from '../components/Register'
import Error404 from '../components/Error404'

Vue.use(Router)

export default new Router({
  routes: [
    // 下面都是固定的写法
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Error404',
      name: 'Error404',
      component: Error404
    }
  ]
})
