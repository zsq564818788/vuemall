<template>
  <tab-bar>
      <tab-bar-item path='/home' activeColor="blue">
        <img slot="item-icon" src="assets/image/tabbar/shouye.svg" alt="首页">
        <img slot="item-icon-active" src="assets/image/tabbar/shouye01.svg" alt="首页">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="blue">
        <img slot="item-icon" src="assets/image/tabbar/fenlei.svg" alt="分类">
        <img slot="item-icon-active" src="assets/image/tabbar/fenlei01.svg" alt="分类">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor="blue">
        <img slot="item-icon" src="assets/image/tabbar/gouwuche.svg" alt="购物车">
        <img slot="item-icon-active" src="assets/image/tabbar/gouwuche01.svg" alt="购物车">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="blue">
        <img slot="item-icon" src="assets/image/tabbar/my.svg" alt="我的">
        <img slot="item-icon-active" src="assets/image/tabbar/my01.svg" alt="我的">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
// import TabBar from '@/components/commom/tabbar/TabBar'
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:"MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
  
}
</script>
<style>

</style>


