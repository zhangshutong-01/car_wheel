import {
  getMoreImgList,
  getImgList
} from '../../api/index.js';
const state = {
  img_list: [],
  imgmore_list: [],
  ImageID: null,
  current: 0,
  showSwiper: false,
  pages: 2,
}

const mutations = {
  changeSwiper(state, payload) {
    state.showSwiper = payload.show;
    state.current = payload.id
  },
  upImgdata(state, payload) {
    state.img_list = payload
  },
  moreImg(state, payload) {
    if (!payload.ColorID) {
      for (var key in payload) {
        delete payload['ColorID'];
      }
      state.ImageID = payload.ImageID
      getMoreImgList(payload).then(res => {
        state.imgmore_list = res.data
      })
    } else {
      state.ImageID = payload.ImageID
      getMoreImgList(payload).then(res => {
        state.imgmore_list = res.data
      })
    }

  },
  srco_img(state, payload) {
    let page = state.pages++;
    let obj = payload
    obj.ImageID = state.ImageID
    obj.Page = page
    getMoreImgList(obj).then(res => {
      state.imgmore_list.List.push(...res.data.List)
    })
  }
}

const actions = {
  img({
    commit
  }, payload) {
    if (!payload.ColorID) {
      for (var key in payload) {
        delete payload['ColorID'];
      }
      getImgList(payload).then(res => {
        commit('upImgdata', res.data)
      })
    } else {
      getImgList(payload).then(res => {
        commit('upImgdata', res.data)
      })
    }
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
