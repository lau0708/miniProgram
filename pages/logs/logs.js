//logs.js
const util = require("../../utils/util.js");
//http.js
import {
  GoodsModel
} from "../../models/goods.js";
let good = new GoodsModel();

Page({
  data: {
    arr: [],
    num: 0,
    flag1: true,
    flag2: false,
    flag3: false,
  },
  switch (e) {
    this.setData({
      num: e.target.dataset.num
    })
    if(this.data.num==0){
      this.setData({
        flag1:true,
        flag2:false,
        flag3:false
      })
    }
    if (this.data.num == 1) {
      this.setData({
        flag1: false,
        flag2: true,
        flag3: false
      })
    }
    if (this.data.num == 2) {
      this.setData({
        flag1: false,
        flag2: false,
        flag3: true
      })
    }
  },
  onLoad: function() {
    good.getList().then(res => {
      var list = res.goods;
      // console.log(list);
      this.setData({
        arr: list
      });
    });
  },

  //事件处理函数
  bindViewTap: function() {
    console.log("as");
    wx.navigateTo({
      url: "shop/shop",
      success: function() {
        console.log("132");
      }
    });
  }
});