const host = /localhost/.test(window.location.host) ? 'https://baojia.chelun.com' : 'http://baojia-test.chelun.com'

function sendRequest(url, method = 'GET', data = {}) {
  let parmas = {
    method
  }
  if (method === 'POST') {
    parmas.body = JSON.stringify(data)
  }
  if (url.indexOf('?') == -1) {
    url += `?_=${+new Date()}`
  } else {
    url += `&_=${+new Date()}`
  }
  return fetch(host + url, parmas).then(res => res.json()).then(body => body)
}

export let getBrandList = () => {
  return sendRequest('/v2-car-getMasterBrandList.html')
}

export let getMakeList = (id) => {
  return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}

export let getDetailList = (id) => {
  return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
}
export let getPriceList = (id) => {
  return sendRequest(`/v2-dealer-alllist.html?carId=${id.carID}&cityId=${id.cityID}`)
}
export let getAddressList = () => {
  return sendRequest(`/v1-city-alllist.html`)
}
export let getCityList = (id) => {
  return sendRequest(`/v1-city-alllist.html?provinceid=${id}`)
}
export let getImgList = (param) => {
  let search = ``
  for (let i in param) {
    search += `&${i}=${param[i]}`
  }
  if (!param['ColorID']) {

  }
  return sendRequest(`/v2-car-getImageList.html?${search.slice(1,search.length)}`)
}
export let getMoreImgList = (param) => {
  let search = ``
  for (let i in param) {
    search += `&${i}=${param[i]}`
  }
  if (!param['pageSize']) {
    search += `&PageSize=30`
  }
  // console.log(search.slice(1, search.length))
  return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1,search.length)}`)
}
export let getColorList = (id) => {
  return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}
