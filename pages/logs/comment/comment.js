import { GoodsModel } from "../../../models/goods.js";
let comment = new GoodsModel();

//Page Object
Page({
  data: {
    list: []
  },
  //options(Object)
  onLoad: function(options) {
    console.log("dasssssiujk");
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onPageScroll: function() {},
  //item(index,pagePath,text)
  onTabItemTap: function(item) {}
});
