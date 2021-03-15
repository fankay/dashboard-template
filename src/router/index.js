import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BasicLayout from '../layout/BasicLayout.vue'
import Login from '../views/Login.vue'
import Form from '../views/Form.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/form',
        name: 'Form',
        component: Form
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
