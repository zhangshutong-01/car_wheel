import vue from 'vue';
import vueRouter from 'vue-router'

const Index = () =>
  import('@/views/index/Index')
const Detail = () =>
  import('@/views/detail/Detail')
const price = () =>
  import('@/views/price/price')
const type_more = () =>
  import('@/views/type_more/type_more')
const car_img = () =>
  import('@/views/car_img/carImg')
const color = () =>
  import('@/views/car_img/color')
const carType = () =>
  import('@/views/car_img/carType')
const login = () =>
  import('@/views/login/login')

vue.use(vueRouter)
const router = new vueRouter({
  routes: [{
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/detail',
    component: Detail
  }, {
    path: '/price',
    component: price
  }, {
    path: '/type_more',
    component: type_more
  }, {
    path: '/carImg',
    component: car_img,
  }, {
    path: '/color',
    component: color,
  }, {
    path: '/carType',
    component: carType,
  }, {
    path: '/login',
    component: login,
  }, {
    path: '*',
    redirect: '/index'
  }]
})
router.beforeEach((to, from, next) => {
  var userInfo = window.sessionStorage.getItem('username'); //获取浏览器缓存的用户信息
  var userpassword = window.sessionStorage.getItem('password');
  if (userInfo && userpassword) { //如果有就直接到首页咯
    next();
  } else {
    if (to.path == '/login') { //如果是登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录；
      next('/login');
    }

  }
  next();
})
export default router
