<template>
  <div class="detail_list">
    <div class="list_type">
      <span :class="[tab===index?'active':'']" v-for="(item,index) in year" :key="index" @click="tabs(index)">
        {{item}}
      </span>
    </div>
    <div>
      <section v-for="(value,key,index) in detail_sort_all" :key="index">
        <p>{{key}}</p>
        <ul v-for="(item,indexs) in value" :key="indexs">
          <li @click="price({first:key,second:indexs})">
            <p>{{item.car_name}}</p>
            <p>{{item.horse_power}}马力{{item.gear_num}}档</p>
            <p>
              <span>指导价{{item.market_attribute.official_refer_price}}</span>
              <span>{{item.market_attribute.dealer_price_min}}起</span>
            </p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex"
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState({
        year: state => state.detail.year,
        detail_sort_all: state => state.detail.detail_sort_all,
        tab: state => state.detail.tabs,
      })
    },
    methods: {
      ...mapMutations(['tabs']),
      price(id) {
        this.$router.push({
            path: '/price',
            query: {
              carID: this.detail_sort_all[id.first][id.second].car_id
            }
          }),
          window.history.go(-2)
      }
    }
  }

</script>

<style scoped>
  .list_type {
    border-top: .15rem solid #f4f4f4;
    padding: 0 .3rem;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
  }

  .list_type span {
    padding-right: .46rem;
  }

  .active {
    color: #3aacff
  }

  .detail_list>div>section:nth-last-child(1) {
    padding-bottom: 1rem;
  }

  .detail_list>div>section>p {
    padding: 0 .2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #999;
    background: #f4f4f4;
  }

  .detail_list ul {
    background: #fff;
    font-size: 0rem
  }

  .detail_list ul li {
    padding: 0 .2rem;
    border-bottom: .18rem solid #f4f4f4;
    overflow: hidden;
  }

  .detail_list ul li p:first-child {
    padding: .26rem 0 .18rem;
    font-size: .3rem;
    line-height: 1;
    color: #3d3d3d;
  }

  .detail_list ul li p:nth-child(2) {
    color: #bdbdbd;
    font-size: .26rem;
  }

  .detail_list ul li p:nth-child(3) {
    text-align: right;
    padding-bottom: .1rem;
    font-size: .24rem;
    color: #818181;
  }

  .detail_list ul li p:nth-child(3) span:nth-child(2) {
    font-size: .3rem;
    color: #ff2336;
    margin-left: .1rem;
  }

  .detail_list ul li button {
    border: none;
    border-top: 1px solid #eee;
    width: 110%;
    height: .8rem;
    font-size: .32rem;
    color: #00afff;
    background: #fff;
    font-weight: 500;
    margin-left: -.3rem;
  }

</style>
