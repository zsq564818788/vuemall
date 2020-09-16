import { request, homerequest} from "./request";

export function getHomeMultidata(){
  return request({
    url:"./home/multidata"
  })

}

export function getHomeGoods(type, page){
  return homerequest({
    url:"./home/data",
    params: {
      type,
      page,

    }
  })

}

