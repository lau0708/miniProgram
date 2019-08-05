import { HTTP } from '../utils/http.js'

class GoodsModel extends HTTP {
  //商品
  goodsList() {
    return this.request({
      url: 'goods'
    })
  }
}
export { GoodsModel }