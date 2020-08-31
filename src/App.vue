<template>
  <div id="app">
    <h2></h2>
          <main-tab-bar/>
    <router-view/>
  </div>
</template>


<script>
import MainTabBar from 'components/comtent/mainTabBar/MainTabBar'
export default {
  name: "App",
  components: {
    MainTabBar
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
