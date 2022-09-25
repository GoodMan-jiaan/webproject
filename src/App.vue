<template>
<!--  <router-view v-slot="{ Component }" class="app1">-->
<!--    <keep-alive include="login,home,profile,ProfileUpVideo">-->
<!--      <component :is="Component" />-->
<!--    </keep-alive>-->
<!--  </router-view>-->
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  width: 100%;
  min-width: 875px;
  /*margin-top: 60px;*/
}
body{
  margin: 0 0 0 0;
}
/*  .app1{*/
/*    width: 100%;*/
/*  }*/
</style>
