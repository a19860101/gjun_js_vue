<template>
  <div class="about">
      <!-- <img src="./../assets/logo.png" alt=""> -->
      <img src="@/assets/logo.png" alt="">

    <h1>Hello Service</h1>
    <Logo />
    <router-link to="/service/one">one</router-link>
    <router-link to="/service/two">two</router-link>
    <!-- <router-link to="/service/three">three</router-link> -->
    <router-link :to="{name:'Three'}">three</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import Logo from '@/components/Logo.vue';
export default {
  components:{
    Logo
  }
}
</script>