import vue from 'vue';
import vuex from 'vuex';
//import Logger from 'vuex/dist/logger';

import index from './modules/index'
import detail from './modules/detail'
import price from './modules/price'
import carImg from './modules/carImg'
import color from './modules/color'
import carType from './modules/carType'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    index,
    detail,
    price,
    carImg,
    color,
    carType
  },
  // plugins: [Logger()]
})
