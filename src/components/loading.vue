<template>

  <div class='mock'>
    <div class='main'>
      <img class="loading_img" src="@/assets/loading.gif" alt="">
    </div>
  </div>

</template>

<style>
  .mock {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 999;
  }

  .loading_img {
    widows: 1rem;
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -.5rem;
    margin-left: -.5rem;
  }

</style>
