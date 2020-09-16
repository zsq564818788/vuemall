<template>
<div class="tab-contorl" >
  <div v-for="(item, index) in titles" :key="item" class="tab-contorl-item" 
  :class="{active: index === currentIndex}" @click="tabcontrolitem(index)">
    <span :class="{active:index === currentIndex}">{{item}}</span>
  </div>

</div>
  
</template>
<script>
export default {
  name:"TabControl",
  props: {
    titles:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    tabcontrolitem(index) {
      console.log(index)
      this.currentIndex = index;
      this.$emit('tabClick', index)// tabClick是自定义的
    }
  }
}
</script>
<style scoped>
.tab-contorl{
  display: flex;
  text-align: center;
  font-size: 16px;
  background: #fff;
  z-index: 9;
}
.tab-contorl-item{
  flex:1;
  height: 40px;
  line-height: 40px;

}
.tab-contorl-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
  

}
.active span{
border-bottom: 3px solid var(--color-tint)
}
</style>


