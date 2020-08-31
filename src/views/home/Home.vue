<template>
  <div id="home">
     
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommends-view :recommends="recommends"></recommends-view>
  

  </div>
</template>
<script>
// 组件
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from "./childComps/HomeSwiper"
import RecommendsView from "./childComps/RecommendsView"
// import Swiper from "@/components/common/swiper/Swiper";
// import SwiperItem from "@/components/common/swiper/SwiperItem";


import {getHomeMultidata} from "@/network/home"



export default {
  name:'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
  },
  data () {
    return {
      banners: [],
      recommends: [],
    }
  },
  created () {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res)
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list

    })
  }
}
</script>
<style>
.home-nav{
  background: var(--color-tint);
  color: white;
}

</style>


