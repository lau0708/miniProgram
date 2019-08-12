// pages/logs/merchant/merchant.js
import {GoodsModel} from "../../../models/goods.js"
let merchant=new GoodsModel();
Component({
  created:function(){
merchant.merchant().then(res=>{

  this.setData({
    list:res.seller
  })
  // console.log(this.data.list)
})
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
list:[],
arr:[
1,1

]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
