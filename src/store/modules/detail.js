import {
  getDetailList
} from '../../api/index.js';
import {
  sortCar,
  mergeCar,
  filter
} from '@/utils/detail_sort'
const state = {
  DetailList: [],
  detail_sort: [],
  year: [],
  detail_sort_all: [],
  tabs: 0,
  detail_year_list: [],
  carID: null
}
const mutations = {
  upDetaildata(state, payload) {
    state.DetailList = payload
    state.detail_sort_all = mergeCar(sortCar(payload.list))
    let year = ['全部'],
      oldyear = []
    payload.list.forEach(item => {
      oldyear.push(item.market_attribute.year)
    })
    oldyear = new Set(oldyear)
    year.push(...oldyear)
    state.year = year
  },
  tabs(state, payload) {
    state.tabs = payload
    if (!isNaN(Number(state.year[payload]))) {
      state.detail_sort_all = mergeCar(sortCar(filter(Number(state.year[payload]), state.DetailList.list)))
    } else {
      state.detail_sort_all = mergeCar(sortCar(state.DetailList.list))
    }
  },
  price(state, payload) {
    state.carID = state.detail_sort_all[payload.first][payload.second].car_id
  }
}
const actions = {
  detail({
    commit
  }, payload) {
    getDetailList(payload).then(res => {
      commit('upDetaildata', res.data);
    })
  }
}
export default {
  state,
  mutations,
  actions
}
