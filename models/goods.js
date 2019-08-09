import { HTTP } from '../utils/http.js'

class GoodsModel extends HTTP {
  //商品
  goodsList() {
    return this.request({
      url: 'goods'
    })
  }
  getList() {
    return this.request({
      url: 'goods',
    })
  }
  //评论
  commentList(){
    return this.request({
      url:"ratings"
    })
  }
  //商家
  merchant(){
    return this.request({
      url:"seller"
    })
  }
}
export { GoodsModel }