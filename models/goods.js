import { HTTP } from '../utils/http.js'

class GoodsModel extends HTTP {
<<<<<<< HEAD
  //商品
  goodsList() {
    return this.request({
      url: 'goods'
=======
  getList() {
    return this.request({
      url: 'goods',
    })
  }
  commentList(){
    return this.request({
      url:"ratings"
>>>>>>> ab1cdcd264c55e771768ca4a3e538cad4d9160ab
    })
  }
}
export { GoodsModel }