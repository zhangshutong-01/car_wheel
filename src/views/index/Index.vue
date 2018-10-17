<template>
  <div class="wrap" ref="carwrap">
    <loading v-show="isLoading"></loading>
    <div class="carList" ref="carlist">
      <div v-for="(value,key,index) in carList" :key="index" class="carList_item" :ref="key">
        <h2 class="english_title" :ref="key">{{key}}</h2>
        <ul>
          <li v-for="(item,indexs) in value" :key="indexs" class="car_item" @click="id(item.MasterID)">
            <img class="car_img" v-lazy="item.CoverPhoto" :data-src="item.CoverPhoto">
            <span class="car_name">{{item.Name}}</span>
          </li>
        </ul>
      </div>
      <carType v-show="isShow"></carType>
    </div>
    <div class="letter" ref="letter" @touchmove="move">
      <span @click="tab(item)" v-for="(item,index) in letters" :key="index">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from "vuex";
  import loading from '@/components/loading'
  import carType from '@/views/index/components/carType'
  import {
    lazyLoad
  } from '@/utils/lazyLoad'
  export default {
    name: "index",
    data() {
      return {
        isLoading: true,
      }
    },
    methods: {
      ...mapActions(["getIndex", 'id']),
      ...mapMutations(['showing']),
      move(e) {
        let index = Math.floor((e.touches[0].pageY - this.offsetTop) / this.letterHeight)
        if (index < 0) {
          index = 0
        } else if (index > this.letters.length - 1) {
          index = this.letters.length - 1
        }
        let letter = this.letters[index];
        let offsetTop = this.$refs[letter][0].offsetTop;
        this.$refs.carwrap.scrollTo(0, offsetTop)
      },
      tab(item) {
        this.$refs.carwrap.scrollTo(0, this.$refs[item][0].offsetTop)
      }
    },
    updated() {
      this.isLoading = false
      this.offsetTop = this.$refs.letter.getBoundingClientRect().top;
      this.letterHeight = this.$refs.letter.children[0].getBoundingClientRect().height;
    },
    components: {
      loading,
      carType
    },
    computed: {
      ...mapState({
        carList: state => state.index.list,
        car_data: state => state.index.car_lists,
        isShow: state => state.index.isShow,
        letters: state => state.index.letter,
      })
    },
    mounted() {
      this.getIndex();
      this.showing()
      lazyLoad('.carList');
    }

  };

</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow: scroll;
  }

  .carList {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .carList_item {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .english_title {
    width: 100%;
    font-size: 0.28rem;
    line-height: 0.4rem;
    background: #f4f4f4;
    padding-left: 0.3rem;
    color: #aaa;
    font-weight: normal;
  }

  .carList_item>ul {
    margin: 0 0.3rem;
  }

  .car_item {
    height: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    align-items: center;
    display: flex;
  }

  .car_item:nth-last-child(1) {
    border-bottom: none;
  }

  .car_img {
    height: 0.8rem;
  }

  .car_name {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }

  .letter {
    z-index: 99;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: .2rem;
    display: flex;
    flex-direction: column;
  }

  .letter>span {
    font-size: .24rem;
    color: #666;
    font-weight: 500;
    padding: .02rem .1rem;
  }

</style>
