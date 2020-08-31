module.exports = {
  configureWebpack: {
    resolve:{
      extensions:[],
      alias:{// 别名为了好找文件
        'assets':'@/assets',// css和图片
        'common':'@/common', // 公共的js
        'components':'@/components',
        'network':'@/network',// axios
        'router':'@/router',// vue-router
        'store':'@/store',// vuex
        'views':'@/views',// 视图
      }
    }
  }
}