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
    contentActive: '', // 内容栏选中id
    navActive: '', // 导航栏选中id
  },
  switch (e) {
    this.setData({
      num: e.target.dataset.num
    });
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
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        // //console.log(windowHeight) //最后获得转化后得rpx单位的窗口高度
        _this.setData({
          conHeight: windowHeight - 350 - 100,
        })
      }
    });
    good.getList().then(res => {
      var list = res.goods;
      console.log(list);
      for(var i in list){
        list[i].id=i;
      }
      this.setData({
        arr: list
      });
    // 获得每个元素据顶部的高度，组成一个数组，通过高度与scrollTop的对比来知道目前滑动到那个区域
      let heightArr = [];
      let h = 0;
      var _this = this;
      //创建节点选择器
      const query = wx.createSelectorQuery();
      // console.log(query.selectAll('.mingzi').boundingClientRect())
      //选择id
      query.selectAll('.mingzi').boundingClientRect()
      console.log(query)
      query.exec(function (res) {
        console.log(res)
        //res就是 所有标签为con-list的元素的信息 的数组
        res[0].forEach((item) => {
          h += item.height;
          heightArr.push(h);
        })
        _this.setData({
          heightArr: heightArr
        })
        console.log(heightArr)
      })

    });

 

  },
  //点击导航栏时就可以通过小程序的方法拿到id和该项目的索引，并赋值
  chooseType: function (e) { //分类选择
    // console.log(e)
    let dataSet = e.currentTarget.dataset;
    this.setData({
      navActive: dataSet.index,
      contentActive: dataSet.id,
    })
    // console.log(this.data.navActive)
  },
  onScroll: function (e) { 
    const scrollTop = e.detail.scrollTop;
    const scorllArr = this.data.heightArr;
    console.log("gundong", scrollTop)
    console.log("Arr", scorllArr)

    const _this = this;
    if (scrollTop >= scorllArr[scorllArr.length - 1] - (_this.data.conHeight / 2)) {
      console.log("返回")
      return;
    } else {
      for (let i = 0; i < scorllArr.length; i++) {
        if (scrollTop >= 0 && scrollTop < scorllArr[0]) {
          if (0 != _this.data.lastActive) {
            _this.setData({
              navActive: 0,
              lastActive: 0,
            })
          }
        } else if (scrollTop >= scorllArr[i - 1] && scrollTop < scorllArr[i]) {
          if (i != _this.data.lastActive) {
            _this.setData({
              navActive: i,
              lastActive: i,
            })
          }
          console.log(this.data.navActive)
        }
      }
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "shop/shop",
      success: function() {
        console.log("132");
      }
    });
  }

});
