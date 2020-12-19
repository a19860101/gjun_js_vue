<template>
  <nav>
    <router-link to="/">首頁</router-link>
    <router-link to="/about">關於</router-link>
    <router-link to="/service">服務項目</router-link>
    <router-link to="/contact">聯絡我們</router-link>
  </nav>
  <router-view></router-view>
  <footer>
    footer
  </footer>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
nav {
  width: 100%;
}
</style>