<template>
  <div class="price_wrap">
    <loading v-show="isLoading"></loading>
    <header>
      <p>可向多个商家咨询最低价，商家及时回复 </p>
      <img class="question_img" src="../../assets/qusetion.png">
    </header>
    <div class="price_con" ref="price_con" @scroll="price_scr">
      <div class="price_info" @click="more">
        <img class="price_img" :src="priceList.details.serial.Picture">
        <div class="price_info_right">
          <p>{{priceList.details.serial.AliasName}}</p>
          <p>{{priceList.details.market_attribute.year}}款 {{priceList.details.car_name}}</p>
        </div>
      </div>
      <selfInfo></selfInfo>
      <dealerInfo></dealerInfo>
      <city></city>
    </div>
    <footer v-if="bth_show">
      <button class="bott_btn">询最低价</button>
    </footer>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from "vuex"
  import loading from '@/components/loading'
  import selfInfo from './components/self_info'
  import dealerInfo from './components/dealer_info'
  import city from './components/city'
  export default {
    data() {
      return {
        isLoading: true,
        bth_show: false
      }
    },
    methods: {
      ...mapActions(['price', 'address']),
      price_scr(e) {
        if (e.target.scrollTop > 373) {
          this.bth_show = true
        } else {
          this.bth_show = false
        }
      },
      more() {
        this.$router.push('/type_more')
      }
    },
    mounted() {
      this.price({
        carID: this.$route.query.carID,
        cityID: this.provice_id
      })
      localStorage.setItem('carid', this.$route.query.carID)
      this.address()
    },
    computed: {
      ...mapState({
        priceList: state => state.price.priceList,
        provice_id: state => state.price.provice_id
      })
    },
    updated() {
      this.isLoading = false
    },
    components: {
      loading,
      selfInfo,
      dealerInfo,
      city
    }
  }

</script>

<style scoped>
  .price_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  header {
    height: .6rem;
    line-height: .6rem;
    width: 100%;
    background: #79cd92;
    text-align: center;
    z-index: 99;
    display: flex;
    justify-content: center;
  }

  header>p {
    color: #fff;
    font-size: .3rem;
  }

  .question_img {
    width: 1rem;
  }

  .price_con {
    flex: 1;
    width: 100%;
    height: auto;
    background: #f4f4f4;
    overflow-y: scroll;
  }

  .price_info {
    background: #fff;
    padding: .32rem .18rem .24rem;
    position: relative;
    height: 2rem;
    box-sizing: border-box;
    display: flex;
  }

  .price_info:before {
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: .26rem;
    top: .9rem;
  }

  .price_img {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .price_info_right {
    margin-left: .2rem;
    width: 4.3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .price_info_right p:nth-child(1) {
    font-size: .36rem;
    line-height: 1;
  }

  .price_info_right p:nth-child(2) {
    margin-top: .26rem;
    font-size: .32rem;
    line-height: 1.2;
    color: #333;
  }

  footer {
    width: 100%;
    z-index: 99;
    font-size: 0;
  }

  .bott_btn {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #3aacff;
    text-align: center;
    font-size: .34rem;
    color: #fff;
  }

</style>
