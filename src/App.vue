<!--
 * @Author: your name
 * @Date: 2020-05-06 15:48:38
 * @LastEditTime: 2020-05-09 19:53:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
  @import "assets/css/base.css"
  
</style>
