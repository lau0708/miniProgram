// pages/logs/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 父组件传值
    defaultValue: {
      type: Boolean,
      value: "default value"
    },
    // phone: Array
  },
  ready: function() {
    var shopdetail = wx.getStorageSync("shopdetail");
    this.setData({
      shopdetail: shopdetail
    })
    console.log(this.data.shopdetail)
  },
  /**
   * 组件的初始数据
   */
  data: {
    num: 1,
    shopdetail: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // onshow() {
    //   console.log(this.data.defaultValue)
    // },
    // 传递给父组件
    yin: function(e) {
      var that = this;
      var myEventDetail = {
        shopdialog: false,
        type: "cancel"
      }; // detail对象，提供给事件监听函数
      this.triggerEvent("myevent", myEventDetail); //myevent自定义名称事件，父组件中使用
    },
    //数量加加
    jia: function(e) {
      for (var i in this.data.shopdetail) {
        if (this.data.shopdetail[i].id == e.currentTarget.id) {
          this.data.shopdetail[i].num++;
        }
      }
      wx.setStorageSync("shopdetail", this.data.shopdetail);
      var shopdetail = wx.getStorageSync("shopdetail");
      console.log(shopdetail)
      this.setData({
        shopdetail: shopdetail
      })
    },
    //数量减减
    jian: function(e) {
      for (var i in this.data.shopdetail) {
        if (this.data.shopdetail[i].id == e.currentTarget.id) {
          if (this.data.shopdetail[i].num > 1) {
            this.data.shopdetail[i].num--;
          }
          console.log(this.data.shopdetail[i].num)
        }
      }
      wx.setStorageSync("shopdetail", this.data.shopdetail);
      var shopdetail = wx.getStorageSync("shopdetail");
      this.setData({
        shopdetail: shopdetail
      })
    }
  }
});