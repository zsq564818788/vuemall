// module.exports = {
//   configureWebpack: {
//     resolve:{
//       extensions:[],
//       alias:{// 别名为了好找文件
//         'assets':'@/assets',// css和图片
//         'common':'@/common', // 公共的js
//         'components':'@/components',
//         'network':'@/network',// axios
//         'router':'@/router',// vue-router
//         'store':'@/store',// vuex
//         'views':'@/views',// 视图
//       }
//     }
//   }
// }

const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
    // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))// css和图片
            .set('common', resolve('src/common'))// 公共的js
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))// axios
            .set('router', resolve('src/router'))// vue-router
            .set('store', resolve('src/store'))// vuex
            .set('views', resolve('src/views'))// 视图
    }
  }