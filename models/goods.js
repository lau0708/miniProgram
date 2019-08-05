import { HTTP } from '../utils/http.js'

class GoodsModel extends HTTP {
  getList() {
    return this.request({
      url: 'goods',
    })
  }
}
export { GoodsModel }