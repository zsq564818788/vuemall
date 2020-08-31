<template>
  <nav class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </nav>
</template>
 <script>
 export default {
   name:"NavBar"
 }
 </script>

<style>
.nav-bar{
  
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 1);
  position:fixed;
  z-index: 100;
  width: 100%;
  top: 0;
}
.nav-bar .left, .nav-bar .right{
  width: 60px;
}
.nav-bar .center{
  flex:1;
}
</style>

 
 
