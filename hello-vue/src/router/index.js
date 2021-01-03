import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '@/views/About.vue';
import Service from '@/views/Service.vue';
import ServiceOne from '@/views/ServiceOne.vue';
import ServiceTwo from '@/views/ServiceTwo.vue';
import ServiceThree from '@/views/ServiceThree.vue';
import Contact from '@/views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
    // component: Home
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import('@/views/About.vue')
    // component: About
  },
  {
    path: '/service',
    name: 'Service',
    // component: () => import('@/views/Service.vue')
    component: Service,
    children:[
      {path:'',component:ServiceOne},
      {path:'one',component:ServiceOne},
      {path:'two',component:ServiceTwo},
      {path:'service-three',name:'Three',component:ServiceThree}
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    // component: () => import('@/views/Contact.vue')
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)',

  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
