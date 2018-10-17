import {
  getColorList
} from '../../api/index.js';
const state = {
  color: [],
  color_list: [],
  year: [],
  ind: 0,
  color_id: null
}

const mutations = {
  updataColor(state, payload) {
    var arr = [];
    state.color = payload
    for (var i in payload) {
      arr.push(i);
    };
    arr.reverse();
    state.year = arr
    for (var i in state.color) {
      if (i === arr[0]) {
        state.color_list = state.color[i]
      }
    };
  },
  getcolorList(state, payload) {
    for (var i in state.color) {
      if (i === payload.con) {
        state.color_list = state.color[i]
      }
    };

    state.ind = payload.ind
  },
  color_id(state, payload) {
    state.color_id = payload
  }
}

const actions = {
  getcolor({
    commit
  }, payload) {
    getColorList(payload).then(res => {
      commit('updataColor', res.data)
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
