import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MyList from '../views/MyList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'my-list',
    component: MyList
  },
  {
    path: '/add',
    name: 'list-item',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListItem.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
