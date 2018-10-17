<template>
  <div class="self_info">
    <p class="self_tit">个人信息</p>
    <ul>
      <li>
        <span>姓名</span>
        <input type="text" placeholder="输入你的真实中文姓名" maxLength="4">
      </li>
      <li>
        <span>手机</span>
        <input type="numberF" placeholder="输入你的真实手机号码" oninput="if(value.length>11)value=value.slice(0,11)">
      </li>
      <li @click="address()">
        <span>城市</span>
        <span>{{city_name}}</span>
      </li>
    </ul>
    <div class="quotation">
      <button>询最低价</button>
    </div>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from "vuex"
  export default {
    computed: {
      ...mapState({
        city_name: state => state.price.city_name
      })
    },
    methods: {
      ...mapMutations(['address'])
    }
  }

</script>

<style scoped>
  .self_info ul {
    background: #fff;
    padding: 0 .2rem;
  }

  .self_info ul li {
    font-size: .32rem;
    height: .88rem;
    line-height: .88rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    color: #000;
  }

  .self_info ul li input {
    font-size: .32rem;
    padding-right: .2rem;
    width: 88%;
    text-align: right;
    box-sizing: border-box;
    color: #555;
  }

  .self_info ul li span:nth-child(2) {
    display: inline-block;
    width: 88%;
    color: #555;
    text-align: right;
    box-sizing: border-box;

  }

  .self_info ul li span:nth-child(2):after {
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 1px solid silver;
    border-right: 1px solid silver;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);

  }

  .self_tit {
    height: .5rem;
    line-height: .5rem;
    padding: 0 .2rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
  }

  .quotation {
    background: #fff;
    text-align: center;
    padding-bottom: .28rem;
  }

  .quotation button {
    font-size: .32rem;
    color: #fff;
    width: 80%;
    background: #3aacff;
    height: .7rem;
    border-radius: .1rem;
  }

</style>
