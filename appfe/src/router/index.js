import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 布局
import layout from "@/layout/index.vue"
Vue.use(VueRouter)


//异步的路由，需要控制权限饿的
export const asyncRoutes = [
  {
    path:'/project',
    component:layout,
    children:[
      {
        path:'/',
        component:()=>import("@/views/project/index.vue")
      },
      {
        path:'index',
        component:()=>import("@/views/project/index.vue")
      }
    ]
  }
]

//不需要权限控制的界面
const routes = [
  {
    path: '/',
    name: 'Home',
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: Home
      }
    ],
    
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
 
  {
    path: '*',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
