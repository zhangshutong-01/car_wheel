<template>
  <div class="color">
    <p @click="all()">全部颜色</p>
    <div>
      <p class="c-type">
        <span :class="[ind===index?'active':'']" v-for="(item,index) in year" :key="index" @click="tab({con:item,ind:index})">{{item}}</span>
      </p>
      <ul>
        <li v-for="(item,index) in color_list" :key="index" @click="backImg({ColorID:item.ColorId,name:item.Name})">
          <span :style="{background:item.Value}"></span>{{item.Name}}</li>
      </ul>
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
        color: 'color/getcolor'
      }),
      ...mapMutations({
        tab: 'color/getcolorList',
        color_id: 'color/color_id'
      }),
      backImg(item) {
        this.$router.push({
            path: '/carImg',
            query: {
              ColorID: item.ColorID,
              name: item.name,
              serialID: this.$route.query.SerialID
            }
          }),
          this.color_id(item.ColorID),
          window.history.go(-2)
      },
      all() {
        this.$router.push({
          path: '/carImg',
          query: {
            name: '全部颜色',
            serialID: this.$route.query.SerialID
          }
        })
        window.history.go(-2)
      }
    },
    computed: {
      ...mapState({
        year: state => state.color.year,
        color_list: state => state.color.color_list,
        ind: state => state.color.ind
      })
    },
    mounted() {
      this.color(this.$route.query.SerialID)
    }
  }

</script>

<style scoped>
  .color {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 101;
    background: #f4f4f4;
    animation: c .2s ease forwards;
  }

  .color>p,
  .type>p {
    margin: .15rem 0;
    font-size: .34rem;
    color: #00afff;
    background: #fff;
    text-align: center;
    line-height: .8rem;
    height: .8rem;
  }

  .color .c-type {
    margin-top: .15rem;
    padding-left: .2rem;
    font-size: .3rem;
    line-height: .76rem;
    height: .76rem;
    background: #fff;
    overflow-x: scroll;
  }

  .color .c-type span {
    padding-right: .42rem;
  }

  .active {
    color: #00afff;
  }

  .color ul {
    margin-top: .15rem;
    padding: 0 .2rem;
    overflow: hidden;
    background: #fff;
  }

  .color ul li {
    float: left;
    width: 3.45rem;
    font-size: .32rem;
    line-height: .68rem;
    border: 1px solid #3aacff;
    box-sizing: border-box;
    margin: .2rem 0;
    border-radius: .05rem;
  }

  .color ul li:nth-child(odd) {
    margin-right: .2rem;
  }

  .color ul li span {
    display: inline-block;
    width: .4rem;
    height: .4rem;
    margin-left: .2rem;
    vertical-align: -12%;
    background: "#F8F7F3";
    box-sizing: border-box;
    border: 1px solid #818181;
    margin-right: .1rem;
  }

</style>
