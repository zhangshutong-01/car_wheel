import {
  getDetailList
} from '../../api/index.js';
import {
  sortCar,
  mergeCar,
  filter
} from '@/utils/detail_sort'
const state = {
  year: [],
  detail_sort_all: [],
  tabs: 0,
}

const mutations = {
  upcarTypedata(state, payload) {
    let year = [],
      oldyear = []
    payload.list.forEach(item => {
      oldyear.push(item.market_attribute.year)
    })
    oldyear = new Set(oldyear)
    year.push(...oldyear)
    state.year = year
    state.detail_sort_all = mergeCar(sortCar(filter(Number(state.year[0]), payload.list)))
    console.log(mergeCar(sortCar(filter(Number(state.year[0]), payload.list))))
  },
  tabs(state,payload){
      
  }
}

const actions = {
  carType({
    commit
  }, payload) {
    console.log(payload)
    getDetailList(payload.SerialID).then(res => {
      commit('upcarTypedata', res.data);
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
