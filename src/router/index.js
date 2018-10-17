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

vue.use(vueRouter)
export default new vueRouter({
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
    path: '*',
    redirect: '/index'
  }]
})
