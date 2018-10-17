<template>
  <div class="wrap">
    <header>
      <span><img src="@/assets/left.png" class="back_img" alt=""></span>
      <span>登录</span>
    </header>
    <div class="main">
      <div class="header_img">
        <img src="@/assets/header_img.jpg">
      </div>
      <div class="self_info">
        <input type="text" placeholder="请输入您的用户名" ref="username">
        <input type="password" placeholder="请输入您的密码" ref="userpass">
      </div>
      <button class="login_bth" @click="login()">登录</button>
    </div>
    <footer>
      <div>注册</div>
      <div>忘记密码?</div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      login() {
        var change = "",
          tit = ''
        var username = new RegExp(/^[\u4E00-\u9FA5A-Za-z]+$/);
        var password = new RegExp(/^[a-zA-Z\d_]{8,}$/);
        if (this.$refs.username.value === '') {
          change = "用户名不能为空"
          tit = ''
          this.$alert(change, tit)
        } else if (this.$refs.userpass.value === '') {
          change = "密码不能为空"
          tit = ''
          this.$alert(change, tit)
        } else if (!username.test(this.$refs.username.value)) {
          change = "请输入正确的姓名格式"
          tit = ''
          this.$alert(change, tit)
        } else if (!password.test(this.$refs.userpass.value)) {
          change = "请输入正确的密码格式"
          tit = ''
          this.$alert(change, tit)
        } else if (this.$refs.username.value !== '张舒童') {
          change = "请输入正确的用户名"
          tit = ''
          this.$alert(change, tit)
        } else if (this.$refs.userpass.value !== '13231133') {
          change = "请输入正确的密码"
          tit = ''
          this.$alert(change, tit)
        } else {
          window.sessionStorage.setItem('username', this.$refs.username.value);
          window.sessionStorage.setItem('password', this.$refs.userpass.value);
          this.$router.push({
            path: '/index'
          })
        }
      }
    }
  };

</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    background: #2993F9;
    display: flex;
    flex-direction: column;
  }

  header {
    width: 100%;
    display: flex;
    height: 1rem;
    font-size: .4rem;
    color: #fff;
    align-items: center;
  }

  header>span:nth-child(1) {
    margin: 0 .5rem;
    display: flex;
    height: 1rem;
    align-items: center;
  }

  header>span:nth-child(2) {
    display: flex;
    height: 1rem;
    align-items: center;
    margin-left: .3rem;
  }

  .back_img {
    width: .5rem;
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .header_img {
    width: 100%;
    text-align: center;
    margin-top: 1rem;
  }

  .header_img img {
    width: 2rem;
  }

  .self_info {
    margin: 0 auto;
    width: 90%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .self_info>input {
    width: 100%;
    height: 1.2rem;
    margin: 0 auto;
    font-size: .32rem;
    padding-left: .3rem;
    box-sizing: border-box;
    display: block
  }

  .self_info>input:nth-child(1) {
    border: 1px solid #000;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
  }

  .self_info>input:nth-child(2) {
    border: 1px solid #000;
    border-bottom-left-radius: .1rem;
    border-bottom-right-radius: .1rem;
  }

  .login_bth {
    width: 90%;
    margin: .4rem auto;
    font-size: .4rem;
    padding: .2rem 0;
    background: #5CBFFA;
    border-radius: .1rem;
    border: 1px solid #1D89F6;
  }

  footer {
    width: 100%;
    height: 1rem;
    display: flex;
    font-size: .35rem;
    align-items: center;
    background: #1177CB;
    color: #fff;
  }

  footer>div {
    flex: 1;
    text-align: center;
    font-weight: normal;
  }

  footer>div:nth-child(1) {
    border-right: 2px solid #fff;
  }

</style>
