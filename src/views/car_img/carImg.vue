<template>
  <div class="carImg">
    <div class="img_top">
      <p @click="color()">
        <span>{{colorName}}</span>
      </p>
      <p @click="type()">
        <span>车款</span>
      </p>
    </div>
    <div class="img_main">
      <ul v-for="(item,index) in img_list" :key="index">
        <li v-for="(value,key) in item.List" :key="key" :index="key">
          <img :src="value.Url.replace('{0}',value.LowSize)" alt="">
          <div v-if="key===0" @click="more_img({ImageID:item.Id,SerialID: serialID,ColorID:ColorID})">
            <p>{{item.Name}}</p>
            <p>{{item.Count}}张></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="img_type" ref="type" v-if="more_show" @scroll="more_scr">
      <ul ref="img_list" class="img_list">
        <li v-for="(item,index) in imgmore_list.List" :key="index" @click="imgClick(index)">
          <img :datat-src="item.Url.replace('{0}',item.LowSize)" v-lazy="item.Url.replace('{0}',item.LowSize)" alt="">
        </li>
      </ul>
    </div>
    <div class="img_swiper" v-show="showSwiper" @click="swiperClick">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in imgmore_list.List" :key="index">
          <img :datat-src="item.Url.replace('{0}',item.HighSize)" v-lazy="item.Url.replace('{0}',item.HighSize)">
        </swiper-slide>
      </swiper>
      <p class="cunt" v-if="imgmore_list.List">{{`${1+current*1}/${imgmore_list.List.length}`}}</p>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapMutations,
    mapState
  } from 'vuex'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        serialID: null,
        more_show: false,
        colorName: '颜色'
      }
    },
    methods: {
      ...mapActions({
        img: 'carImg/img'
      }),
      ...mapMutations({
        moreImg: 'carImg/moreImg',
        srco_img: 'carImg/srco_img',
        changeSwiper: 'carImg/changeSwiper'
      }),
      more_img(item) {
        this.more_show = true
        this.moreImg(item)
      },
      more_scr(e) {
        let height = this.$refs.img_list.getBoundingClientRect().height - this.$refs.type.getBoundingClientRect().height -
          20
        if (e.target.scrollTop > height) {
          this.srco_img({
            SerialID: this.serialID,
          })
        }
      },
      imgClick(ind) {
        this.changeSwiper({
          ind,
          show: true
        });
        this.swiper.slideTo(ind, 1000, false)
      },
      swiperClick(e) {
        if (e.target == e.currentTarget) {
          this.changeSwiper({
            show: false
          })
        }
      },
      color() {
        this.$router.push({
          path: '/color',
          query: {
            SerialID: this.serialID
          }
        })
      },
      type() {
        this.$router.push({
          path: '/carType',
          query: {
            SerialID: this.serialID
          }
        })
      }
    },
    computed: {
      ...mapState({
        img_list: state => state.carImg.img_list,
        imgmore_list: state => state.carImg.imgmore_list,
        current: state => state.carImg.current,
        showSwiper: state => state.carImg.showSwiper,
        showSwiper: state => state.carImg.showSwiper,
        pages: state => state.carImg.pages,
        ColorID: state => state.color.color_id
      }),
      swiperOption() {
        let that = this
        return {
          on: {
            slideChangeTransitionStart: function () {
              // console.log(this)
              console.log(that.pages)
              if (this.activeIndex > (that.Page - 1) * 30 - 5) {
                that.srco_img({
                  SerialID: this.serialID,
                });
              }
              that.changeSwiper({
                id: this.activeIndex,
                show: true
              })
            },
          },
        }
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.more_show = false
      this.serialID = this.$route.query.serialID
      this.colorName = this.$route.query.name || '颜色'
      this.img({
        SerialID: this.$route.query.serialID,
        ColorID: this.$route.query.ColorID
      })
    }
  }

</script>

<style scoped>
  .carImg {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
  }

  .carImg .img_top {
    background: #fff;
    flex-direction: row;
    width: 100%;
    height: .8rem;
    align-items: center;
    box-sizing: border-box;
    z-index: 99;
    display: flex;

  }

  .carImg .img_top p {
    flex: 1;
    font-size: 0;
    text-align: center;
    box-sizing: border-box;
    color: #454545;
    display: inline-block;
  }

  .carImg .img_top p:nth-child(2) {
    border-left: 1px solid #ececec;
  }

  .carImg .img_top p span {
    max-width: 2.6rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.25;
    font-size: .28rem;
  }

  .carImg .img_top p:after {
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    transform: rotate(135deg);
    margin-left: .2rem;
    vertical-align: 5%;
  }

  .img_main {
    flex: 1;
    overflow: scroll;
    background: #fff;
    margin-top: .2rem;
  }

  .img_main ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: .2rem;
  }

  .img_main ul li {
    width: 32.8%;
    margin-bottom: .5%;
    position: relative;
  }

  .img_main ul li div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0;
    background: rgba(56, 90, 130, .5);
  }

  .img_main ul li div p {
    color: #fff;
    display: block;
  }

  .img_main ul li div p:nth-child(1) {
    font-size: .28rem;
    margin-top: 20%;
  }

  .img_main ul li div p:nth-child(2) {
    font-size: .26rem;
  }

  .img_main ul li img {
    width: 100%;
    display: block;
  }

  .img_type {
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #f4f4f4;
    top: 0;
    text-align: center;
    position: fixed;
    overflow-y: scroll;
  }

  .img_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .img_list li {
    float: left;
    margin-right: .06rem;
    margin-bottom: .06rem;
    width: 32.5%;
    padding: 0;
  }

  .img_list li img {
    width: 100%;
    display: block
  }

  .img_swiper {
    background: #000;
    top: 0;
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 101;
    display: flex;
    align-items: center;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform, -webkit-transform;
    box-sizing: content-box;
  }

  .swiper-slide {
    flex-shrink: 0;
    height: 100%;
    position: relative;
  }

  .img_swiper img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .cunt {

    position: absolute;
    bottom: .5rem;
    left: 0;
    color: #fff;
    font-size: .34rem;
    text-align: center;
    width: 100%;

  }

</style>
