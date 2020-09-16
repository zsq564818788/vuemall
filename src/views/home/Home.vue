<template>
  <div id="home" >
     
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <scroll  ref="scroll" :probe-type="3" @scroll="contentscroll">
    <home-swiper :banners="banners" @pullingUp="loadmore"></home-swiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view></feature-view>
    <tab-control :titles="titles" class="tab-contorl" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>

  </scroll>
      <back-top @click.native="backtopbtn" v-show="isshowback"></back-top>









  </div>
</template>
<script>
// 子组件
import HomeSwiper from "./childComps/HomeSwiper"
import RecommendsView from "./childComps/RecommendsView"
import FeatureView from "./childComps/FeatureView"
// import SwiperItem from "@/components/common/swiper/SwiperItem";

// 公共组件
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import TabControl from '@/components/comtent/tabControl/TabControl'
import GoodsList from '@/components/comtent/goods/GoodsList'
import BackTop from '@/components/comtent/backTop/BackTop'


//请求数据
import {getHomeMultidata, getHomeGoods} from "@/network/home"



export default {
  name:'Home',
  components: {
    HomeSwiper,
    RecommendsView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      titles: ["流行","新款","精选"],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isshowback: true
    }
  },
  created () {
    this.getHomeMultidatas(),// 请求多个数据
    this.getHomeGoodss("pop"),// 请求流行商品数据
    this.getHomeGoodss("new"),// 请求新款商品数据
    this.getHomeGoodss("sell")// 请求精选商品数据
    
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list

    }
  },
  methods: {
    // 事件监听
    tabClick(index){ // 新款的切换
      switch(index){
        case 0:
        this.currentType = 'pop'
        break
        case 1:
        this.currentType = 'new'
        break
        case 2:
        this.currentType = 'sell'
        break
      }
    },
    backtopbtn(){// 返回顶部按钮
      // console.log("backtopbtn")
      // console.log(this.$refs.scroll.msg)
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentscroll(position){//返回顶部按钮隐藏出现
      this.isshowback = (-position.y) > 1000

    },
    loadmore(){// 下拉加载更多  
    this.getHomeGoodss(this.currentType)
    // console.log("下拉加载更多")
    },
    // 网络请求
    getHomeMultidatas(){
      // 请求多个数据
      getHomeMultidata().then((res) => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoodss(type){
      // 请求商品数据
      const page = this.goods[type].page
      getHomeGoods(type, page+1).then((res) => {
        
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp() 
      } )
    }
  }
}
</script>
<style>
#home{
  height: 100vh;
  position: relative;

}
.home-nav{
  background: var(--color-tint);
  color: white;


}
.tab-contorl{
  position: sticky;
  top: 44px;
  z-index: 9;
}
/* .content{
  height: calc(100% - 44px);
  overflow: hidden;
} */
/* .content{
  position: absolute;

  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
} */
.wrapper{
  height: calc(100% - 115px);
  overflow: hidden;
  margin-top: 75px
}

</style>






