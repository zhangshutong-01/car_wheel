<template>
  <div :class="isShow?'car-type active':'car-type'" ref="section" @touchstart="touchstart" @touchmove="touchmove"
    @touchend="touchend">
    <div class="cartype_list" v-for="(item,index) in car_data" :key="index">
      <p class="cartype_title">{{item.GroupName}}</p>
      <ul>
        <li v-for="(items,indexs) in item.GroupList" :key="indexs" class="cartype_item" @click="detail" :data-id="items.SerialID">
          <img class="cartype_img" v-lazy="items.Picture" :key="items.Picture" alt="">
          <div>
            <p>{{items.AliasName}}</p>
            <p>{{items.DealerPrice}}</p>
          </div>
        </li>
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
    computed: {
      ...mapState({
        car_data: state => state.index.car_list,
        isShow: state => state.index.isShow
      })
    },
    methods: {
      ...mapMutations(['hideMakeList', ]),
      touchstart(e) {
        this.offsetX = 0;
        this.touch = e.touches[0];
      },
      touchmove(e) {
        let touch = e.touches[0];
        this.offsetX = touch.pageX - this.touch.pageX;
        if (this.offsetX > 0) {
          this.$refs.section.style = `transform:translate3d(${this.offsetX}px, 0, 0)`;
        }
      },
      touchend(e) {
        this.$refs.section.style = ``;
        if (this.offsetX > 100) {
          this.hideMakeList();
        }
      },
      detail(e) {
        let target = null;
        if (e.target.tagName === 'IMG' || e.target.tagName === 'DIV') {
          target = e.target.parentNode
        } else if (e.target.tagName === 'P') {
          target = e.target.parentNode.parentNode
        } else if (e.target.tagName === 'LI') {
          target = e.target
        }
        if (target) {
          this.$router.push({
            path: '/detail',
            query: {
              serialID: target.dataset.id
            }
          })
        }
      }
    }
  }

</script>

<style scoped>
  .car-type {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100%;
    overflow: scroll;
    background: #fff;
    z-index: 100;
    height: 100%;
    animation: mymove .5s;
    box-shadow: 0 0 0.5rem #eee;
  }

  .cartype_title {
    margin-left: 1px;
    font-size: .28rem;
    line-height: .48rem;
    background: #f2f2f2;
    padding-left: .3rem;
    color: #717171;
  }

  .cartype_list>ul {
    margin-left: .1rem;
  }

  .cartype_item {
    height: 1.4rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    display: flex;
  }

  .cartype_img {
    margin: 0 .1rem 0 .2rem;
    width: 1.8rem;
    height: 1.2rem;
  }

  .car-type li div p:first-child {
    font-size: .34rem;
    color: #5f687a;
  }

  .car-type li div p:nth-child(2) {
    margin-top: .1rem;
    font-size: .28rem;
    color: red;
  }

  @keyframes mymove {
    from {
      right: -75%;
    }

    to {
      right: 0
    }
  }

</style>
