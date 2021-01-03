<template>
  <div class="about">
    <h1>Hello About</h1>
    <a href="#" class="btn btn-primary">more</a>
    <a href="#" class="btn btn-danger">more</a>
    <Logo />
  </div>
</template>
<script>
import Logo from '@/components/Logo.vue';
// import 
export default {
  components:{
    Logo
  }
}
</script>
<style lang="scss" scoped>
// @import './node_modules/bootstrap/scss/bootstrap.scss';

 h1 {
   color: #f00;
 }
</style>
