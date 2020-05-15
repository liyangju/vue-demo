import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routesP = [{
  path: '/',
  name: 'Pc',
  redirect: '/',
  component: () => import('@/components/pc'),
  children: [{
    path: '/',
    name: 'index',
    component: () => import('@/views/pc/index')
  }]
}]

const routesM = [{
  path: '/',
  name: 'Mobile',
  redirect: '/',
  component: () => import('@/components/mobile'),
  children: [{
    path: '/',
    name: 'index',
    component: () => import('@/views/mobile/index')
  }]
}]

var routes = [];
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  routes = routesM
} else {
  routes = routesP
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router