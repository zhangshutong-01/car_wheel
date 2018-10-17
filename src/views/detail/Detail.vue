<template>
  <div class="detail_wrap">
    <div class="detail_con">
      <div class="detail_top" @click="carImg()">
        <img class="detail_img" :src="detailList.CoverPhoto">
        <span class="detail_img_num">{{detailList.pic_group_count}}张照片</span>
      </div>
      <div class="detail_info">
        <p>{{detailList.market_attribute&&detailList.market_attribute.dealer_price?detailList.market_attribute.dealer_price:''}}</p>
        <p>{{detailList.market_attribute&&detailList.market_attribute.official_refer_price?detailList.market_attribute.official_refer_price:''}}</p>
        <div class="action_btn">
          <button @click="price">{{detailList.BottomEntranceTitle}}</button>
        </div>
      </div>
      <detail></detail>
    </div>
    <div class="bottom" @click="price">
      <p>{{detailList.BottomEntranceTitle}}</p>
      <p>本地经销商为你报价</p>
    </div>
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from "vuex"
  import loading from '@/components/loading'
  import detail from './components/detail_list'
  export default {
    name: "Detail",
    data() {
      return {
        isLoading: true,
        tab: 0
      }
    },
    methods: {
      ...mapActions(
        ['detail']
      ),
      price(e) {
        let target = null;
        if (e.target.tagName === 'IMG' || e.target.tagName === 'DIV') {
          target = e.target.parentNode
        } else if (e.target.tagName === 'P') {
          target = e.target.parentNode.parentNode
        } else if (e.target.tagName === 'BUTTON') {
          target = e.target
        }
        if (target) {
          this.$router.push({
            path: '/price',
            query: {
              carID: this.detailList.list[0].car_id
            }
          })
        }
      },
      carImg() {
        this.$router.push({
          path: '/carImg',
          query: {
            serialID: this.$route.query.serialID
          }
        })
      }
    },
    computed: {
      ...mapState({
        detailList: state => state.detail.DetailList
      })
    },
    components: {
      loading,
      detail
    },
    mounted() {
      this.detail(this.$route.query.serialID)
      window.sessionStorage.setItem('query', JSON.stringify({
        carid: '',
        carname: ''
      }))
    },
    updated() {
      this.isLoading = false
    },
  }

</script>

<style scoped>
  .detail_wrap {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow: hidden;
    overflow-y: scroll
  }

  .detail_con {
    height: 100%;
    width: 100%;
  }

  .detail_top {
    position: relative;
    overflow: hidden;
  }

  .detail_img {
    width: 100%;
  }

  .detail_img_num {
    position: absolute;
    bottom: .3rem;
    right: .3rem;
    color: #fff;
    padding: 1px .1rem;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .6);
    font-size: .24rem;
  }

  .detail_info {
    padding: .36rem .2rem .3rem;
    background: #fff;
    position: relative;
  }

  .detail_info p {
    max-width: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail_info p:first-child {
    font-size: .36rem;
    color: red;
    font-weight: 500;
  }

  .detail_info p:nth-child(2) {
    font-size: .26rem;
    color: silver;
  }

  .detail_info .action_btn {
    padding-top: .2rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    right: .1rem;
    top: .22rem;
    display: flex;
  }

  .action_btn button {
    color: #313131;
    width: 100%;
    background: #00afff;
    border-radius: .1rem;
    font-size: .32rem;
    height: .7rem;
    width: 3.45rem;
    border: none;
    box-sizing: border-box;
    color: #fff;
  }

  .bottom {
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #3aacff;
    height: 1rem;
    color: #fff;
    align-items: center;
    flex-direction: column;
  }

  .bottom p:first-child {
    font-size: .32rem;
    margin-top: .12rem;
    font-weight: 500;
  }

  .bottom p:nth-child(2) {
    font-size: .24rem;
  }

</style>
