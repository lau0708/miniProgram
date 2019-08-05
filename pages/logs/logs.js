//logs.js
const util = require('../../utils/util.js')
//http.js
import { GoodsModel} from "../../models/goods.js";
let good = new GoodsModel();

Page({
  data: {
   arr:[]
  },
  onLoad: function () {
    good.getList().then(res=>{
      var list=res.goods;
      console.log(list)
      this.setData({
        arr:list
      })
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.switchTab({
      url: '../shop/shop'
    })
  },
  
})
