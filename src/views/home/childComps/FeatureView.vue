<template>
<div class="featureview">
  <a href="#">
    <img src="@/assets/image/home/recommend_bg.jpg" alt="">
  </a>
</div>
  
</template>
<script>
export default {
  name: "FeatureView",
  props: {
    banners:{
      type: Array,
      default() {
        return []
      }
    }
  },
  
}
</script>
<style>
.featureview a img{
  width: 100%
}
</style>


