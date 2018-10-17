<template>
  <div class="detail_list">
    <p class="all" @click="all()">全部车款</p>
    <div class="list_type">
      <span :class="[tab===index?'active':'']" v-for="(item,index) in year" :key="index" @click="tabs(index)">
        {{item}}
      </span>
    </div>
    <div>
      <section v-for="(value,key,index) in detail_sort_all" :key="index">
        <p class="tit">{{key}}</p>
        <ul v-for="(item,indexs) in value" :key="indexs">
          <li @click="car({CarID:item.car_id,name:item.car_name})">
            <p>
              <span>{{item.car_name}}</span>
              <span>{{item.market_attribute.dealer_price_min}}起</span>
            </p>
            <p>
              <span>{{item.horse_power}}马力{{item.gear_num}}档</span>
              <span>指导价{{item.market_attribute.official_refer_price}}</span>
            </p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapMutations,
    mapState
  } from 'vuex'
  export default {
    methods: {
      ...mapActions({
        carType: 'carType/carType'
      }),
      ...mapMutations({
        tabs: 'carType/tabs',
      }),
      car(item) {
        this.$router.push({
          path: '/carImg',
          query: {
            serialID: this.$route.query.SerialID,
          }
        })
        window.sessionStorage.setItem('query', JSON.stringify({
          carid: item.CarID,
          carname: item.name
        }))
        window.history.go(-2)
      },
      all() {
        this.$router.push({
          path: '/carImg',
          query: {
            serialID: this.$route.query.SerialID,
          }
        })
        window.sessionStorage.setItem('query', JSON.stringify({
          carid: '',
          carname: '全部车款'
        }))
        window.history.go(-2)
      }
    },
    mounted() {
      this.carType({
        SerialID: this.$route.query.SerialID
      })

    },
    computed: {
      ...mapState({
        year: state => state.carType.year,
        detail_sort_all: state => state.carType.detail_sort_all,
        tab: state => state.carType.tabs,
      })
    }
  }

</script>

<style scoped>
  .detail_list {
    width: 100%;
    height: 100%;
    background: #f4f4f4
  }

  .all {
    margin: .15rem 0;
    font-size: .34rem;
    color: #00afff;
    background: #fff;
    text-align: center;
    line-height: .8rem;
    height: .8rem;
  }

  .list_type {
    margin-top: .15rem;
    padding-left: .2rem;
    font-size: .3rem;
    line-height: .76rem;
    height: .76rem;
    background: #fff;
    overflow-x: scroll;
  }

  .list_type span {
    padding-right: .42rem;
  }

  .active {
    color: #00afff;
  }

  .tit {
    height: .5rem;
    line-height: .5rem;
    padding: 0 .2rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
  }

  ul {
    background: #fff;
  }

  ul li {
    margin: 0 .2rem;
    padding: .28rem .06rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    height: 1.25rem;
    line-height: 1;
  }

  ul li:last-child {
    border: none;
  }

  ul li p:first-child {
    font-size: .3rem;
  }

  ul li p:first-child span:nth-child(1) {
    width: 5rem;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  ul li p:first-child span:nth-child(2) {
    float: right;
    color: red;
    font-size: .26rem;
  }

  ul li p:nth-child(2) {
    padding-top: .16rem;
    font-size: .24rem;
  }

  ul li p:nth-child(2) span:first-child {
    color: #b3b3b3;
  }

  ul li p:nth-child(2) span:nth-child(2) {
    color: #818181;
    float: right;
  }

</style>
