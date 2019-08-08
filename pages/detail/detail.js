// pages/detail/detail.js
import { GoodsModel } from '../../models/goods.js'
let goodsModel = new GoodsModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    menuTapCurrent: 0,
    pingjia:[],
    all:[],
    tui: [],
    tu: [],
  },
  // 点击按钮选项卡切换
  menuTap: function (e) {
    
    var current = e.currentTarget.dataset.current;//获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    this.setData({
      menuTapCurrent: current,
    });


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    goodsModel.goodsList().then(res => {
      console.log(res.goods[0].foods[0])
      let arr = res.goods[0].foods[0]
      let ping = res.goods[0].foods[0].ratings
      this.setData({detail:arr});
      this.setData({pingjia:ping})
   
  
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})