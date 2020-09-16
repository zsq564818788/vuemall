import  axios  from "axios";

export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    // timeout: 5000
  })

   // 2.axios的拦截器
    // axios.interceptors这个是全局的拦截器
    // request----请求
   
    // use中有2个参数（函数）：一个是成功，一个是错误
    // instance1.interceptors.request.use( 
    //   (config) => {
    //     console.log(config)
    //     // 比如config中的信息有一些不符合服务器的要求
    //     // 比如每次发送网络请求，都希望在界面出现一个发送请求的图标
    //     // 某些网络请求（比如登陆的token），必须携带一些特殊的信息
    //     return config
    //   },(err) => {

    //   })

     // response---响应
    //  instance1.interceptors.response.use( 
    //   (res) => {
    //     console.log(res)
    //     return res.data
    //   },(err) => {
    //     console.log(err)
    //   })


    // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {

  })

  // 相应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })


    // 3.发送网络请求
    // instance这个返回的就是promise
    return instance(config)
    


}


export function homerequest(config){
   // 1.创建home   axios实例
   const instancehome = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8/",
    // timeout: 5000
    
  })
  console.log(config)
     // 请求拦截器
     instancehome.interceptors.request.use(config => {
      //拦截后需要将拦截下来的请求数据返回发送
      return config;
    }, err => {
  
    })
  
    // 相应拦截器
    instancehome.interceptors.response.use(res => {
      // 拦截后需要将拦截下来处理成的结果返回
      return res.data
    }, err => {
      console.log(err)
    })

  return instancehome(config)
}