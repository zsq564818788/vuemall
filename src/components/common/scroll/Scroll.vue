<template>
  <div class="wrapper"  ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import  BScroll from '@better-scroll/core'
export default {
  name: "Scroll",
  props: {
    probeType:{
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      scroll:{
        type:Object,
        default() {
          return {}
        }
      },
      msg:'scroll'

    }
  },

  mounted () {
    //创建BScroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, // 实时监听
      // pullUpLoad: true,// 上啦加载
      click: true
    }),
    //监听滚动
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      this.$emit('scroll', position)

    })
    this.scroll.on('pullingUp', () => {
      this.$emit("pullingUp")

    })
    // this.scroll.scrollTo(0,0)
    

  },
  methods: {
    scrollTo(x, y, time=1000){
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>
<style  scoped>


</style>


