<template>

  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style="activeStlye"><slot name='item-text'></slot></div>

  </div>
  
  
</template>
<script>

export default {
  name:'TabBarItem',
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods: {
    itemclick(){
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive(){
       // return true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStlye(){
      return this.isActive ? {color: this.activeColor} : {} 
    }
  }

  
}
</script>
<style>
  #tab-bar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  box-shadow: 0 -5px 1px rgba(100,100,100,.1)
}
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 16px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>


