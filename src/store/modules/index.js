import {
  getBrandList,
  getMakeList,
} from '../../api/index.js'

const state = {
  list: [],
  car_list: [],
  letter: [],
  isShow: false,
}

const mutations = {
  updata(state, payload) {
    let obj = {}
    let letters = []
    payload.forEach(item => {
      let letter = item.Spelling[0]
      if (letters.indexOf(letter) == -1) {
        letters.push(letter)
        obj[letter] = [item]
      } else {
        obj[letter].push(item)
      }
    })
    state.list = obj
    state.letter = letters
  },
  upcardata(state, payload) {
    console.log(payload.data)
    state.car_list = payload.data
    state.isShow = true
  },
  hideMakeList: (state) => {
    state.isShow = false;
  },
  showing(state) {
    state.isShow = false;
  }
}

const actions = {
  getIndex({
    commit
  }) {
    getBrandList().then(res => {
      commit('updata', res.data);
    });
  },
  id({
    commit
  }, payload) {
    console.log(payload)
    getMakeList(payload).then(res => {
      commit('upcardata', res);
    })
  }

}

export default {
  state,
  mutations,
  actions
}
