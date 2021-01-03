<template>
<a href="#" class="btn btn-primary">kubj</a>
  <nav>
    <!-- <router-link to="/">首頁</router-link>
    <router-link to="/about">關於</router-link>
    <router-link to="/service">服務項目</router-link>
    <router-link to="/contact">聯絡我們</router-link> -->
    <router-link :to="{name:'Home'}">首頁</router-link>
    <router-link :to="{name:'About'}">關於</router-link>
    <router-link :to="{name:'Service'}">服務項目</router-link>
    <router-link :to="{name:'Contact'}">聯絡我們</router-link>
  </nav>
  <router-view></router-view>
  <img src="./assets/logo.png" alt="">
  <footer>
    footer
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
@import '~@/assets/style.scss';
/* @import './node_modules/bootstrap/scss/bootstrap.scss'; */
body {
  background-color: rgb(184, 255, 247);
}
nav {
  width: 100%;
}
</style>