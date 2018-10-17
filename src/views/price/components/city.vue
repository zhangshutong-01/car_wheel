<template>
  <div :class="['select-city',provice_show?'active':'']">
    <div class='province'>
      <div class="location">
        <p>自动定位</p>
        <p>北京</p>
      </div>
      <div class="list">
        <p>省市</p>
        <ul>
          <li v-for="(item,index) in addressList" :key="index" :data-id="item.CityID" @click="provice(item.CityID)">{{item.CityName}}</li>
        </ul>
      </div>
    </div>
    <div :class="['city',city_show?'city_active':'']">
      <ul>
        <li v-for="(item,index) in city_list" :key="index" :data-id="item.CityID" @click="city({cityID:item.CityID,cityname:item.CityName,carID:car_id})">{{item.CityName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from "vuex";
  export default {
    data() {
      return {
        car_id: this.$route.query.carID
      }
    },
    computed: {
      ...mapState({
        provice_show: state => state.price.provice_show,
        city_show: state => state.price.city_show,
        addressList: state => state.price.addressList,
        city_list: state => state.price.city_list,
        provice_id: state => state.price.provice_id
      })
    },
    methods: {
      ...mapActions(["provice", 'price']),
      ...mapMutations(["city"])
    }
  };

</script>

<style scoped>
  .select-city {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #fff;
    transition: transform 0.2s ease;
    transform: translate3d(0, 100%, 0);
  }

  .active {
    transform: translateZ(0);
  }

  .select-city .province {
    height: 100%;
    overflow-y: scroll;
  }

  .select-city .location p:first-child {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    padding-left: 0.2rem;
    background: #f4f4f4;
  }

  .select-city .location p:nth-child(2) {
    padding-left: 0.4rem;
    font-size: 0.28rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #fff;
  }

  .select-city .province p {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    padding-left: 0.2rem;
    background: #f4f4f4;
  }

  .select-city .province li {
    padding-left: 0.3rem;
    font-size: 0.28rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    margin-left: 0.1rem;
    position: relative;
  }

  .select-city .province li:after {
    content: "";
    display: inline-block;
    padding-top: 0.16rem;
    padding-right: 0.16rem;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: 0.35rem;
    top: 0.3rem;
  }

  .select-city .city {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    background: rgba(0, 0, 0, 0.6);
    visibility: hidden;
  }

  .select-city .city ul {
    height: 100%;
    overflow-y: scroll;
    background: #fff;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.2s ease;
  }

  .select-city .city ul li {
    padding-left: 0.3rem;
    font-size: 0.28rem;
    height: 0.8rem;
    line-height: 0.8rem;
    box-sizing: border-box;
    margin-left: 0.1rem;
    border-bottom: 1px solid #eee;
  }

  .select-city .city ul li:last-child {
    border: none;
  }

  .select-city .city_active {
    visibility: visible;
  }

  .select-city .city_active ul {
    transform: translate3d(30%, 0, 0);
  }

</style>
