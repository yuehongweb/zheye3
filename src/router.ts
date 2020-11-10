import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ColumnDetail from './components/ColumnDetail.vue'
import CreatePosts from './views/CreatePosts.vue'
import store from './store'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { redirectToHome: true }
  },
  { path: '/detail/:id', name: 'columnDetail', component: ColumnDetail },
  {
    path: '/create',
    name: 'createPosts',
    component: CreatePosts,
    meta: {
      requiredLogin: true
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    // 需要登录信息的页面
    next({ name: 'login' })
  } else if (to.meta.redirectToHome && store.state.user.isLogin) {
    // 如果已经登录了直接重定向到首页
    console.log(111)
    next('/')
  } else {
    next()
  }
})
export default router
