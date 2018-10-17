<template>
  <div class="dealer_info">
    <p class="dealer_tit" ref="dealer">选择报价经销商</p>
    <ul>
      <li v-for="(item,index) in price_list" :key="index" :class="[arr[index].isSelect?'active':'']" @click="selet(index)">
        <p>
          <span>{{item.dealerShortName}}</span>
          <span>{{item.promotePrice}}</span>
        </p>
        <p>
          <span>{{item.address}}</span>
          <span>售{{item.saleRange}}</span>
        </p>
      </li>
    </ul>
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
        arr: [],
        isSelect: null
      }
    },
    computed: {
      ...mapState({
        price_list: state => state.price.price_list
      })

    },
    methods: {
      selet(indexs) {
        this.price_list.map((item, index) => {
          if (indexs === index) {
            this.arr[index].isSelect = !this.arr[index].isSelect
          }
        })
      }
    },
    mounted() {
      let list = this.price_list
      if (this.arr.length === 0) {
        this.arr = list.map((item, index) => {
          if (index < 3) {
            return {
              isSelect: true
            }
          } else {
            return {
              isSelect: false
            }
          }
        })
      }
    }
  }

</script>

<style scoped>
  .dealer_tit {
    height: .5rem;
    line-height: .5rem;
    padding: 0 .2rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
  }

  .dealer_info ul {
    background: #fff;
    padding: 0 .18rem;
  }

  .dealer_info li {
    position: relative;
    padding: .26rem 0 .26rem .54rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    height: 1.65rem;
  }

  .dealer_info li:before {
    content: "";
    display: inline-block;
    width: .32rem;
    height: .32rem;
    border-radius: 50%;
    border: 2px solid #ccc;
    box-sizing: border-box;
    position: absolute;
    left: .05rem;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }

  .dealer_info li.active:after {
    content: "";
    display: inline-block;
    padding-top: .17rem;
    padding-right: .1rem;
    border: 2px solid #fff;
    -webkit-transform: rotate(40deg) translate3d(0, -50%, 0);
    transform: rotate(40deg) translate3d(0, -50%, 0);
    position: absolute;
    left: .07rem;
    border-left: none;
    border-top: none;
    top: 47%;
  }

  .dealer_info li.active:before {
    background: #3aacff;
    border: none;
  }

  .dealer_info li p:first-child {
    font-size: .3rem;
  }

  .dealer_info li p:first-child span:last-child {
    font-size: .24rem;
    float: right;
    color: red;
  }

  .dealer_info li p:nth-child(2) {
    margin-top: .1rem;
    font-size: .24rem;
    color: #a2a2a2;
  }

  .dealer_info li p:nth-child(2) span:first-child {
    display: inline-block;
    max-width: 4.6rem;
  }

  .dealer_info li p:nth-child(2) span:nth-child(2) {
    float: right;
  }

</style>
