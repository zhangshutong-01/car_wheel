import {
  getPriceList,
  getAddressList,
  getCityList
} from '../../api/index.js';

const state = {
  priceList: [],
  price_list: [],
  select: false,
  indexs: null,
  addressList: [],
  provice_show: false,
  city_list: [],
  city_show: false,
  city_name: '北京',
  provice_id: 201
}
const mutations = {
  updataPrice(state, payload) {
    state.priceList = payload
    state.price_list = payload.list
  },
  updataAddress(state, payload) {
    state.addressList = payload.data
  },
  address(state) {
    if (state.provice_show === false) {
      state.provice_show = true
    }
  },
  updataCity(state, payload) {
    state.city_list = payload.data
    if (state.city_show === false) {
      state.city_show = true
    } else {
      state.city_show = false
    }
  },
  city(state, payload) {
    state.provice_show = false
    state.city_show = false
    state.city_name = payload.cityname
    getPriceList(payload).then(res => {
      state.price_list = res.data.list
    })
  }
}
const actions = {
  price({
    commit
  }, payload) {
    getPriceList(payload).then(res => {
      commit('updataPrice', res.data)
    })
  },
  address({
    commit
  }) {
    getAddressList().then(res => {
      commit('updataAddress', res)
    })
  },
  provice({
    commit
  }, payload) {
    getCityList(payload).then(res => {
      commit('updataCity', res)
    })
  }
}
export default {
  state,
  mutations,
  actions
}
