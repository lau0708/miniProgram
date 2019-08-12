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
    contentActive: "", // 内容栏选中id
    navActive: "", // 导航栏选中id
    display: "", //控制遮罩层
    //遮罩层数据
    zhelist: [],
    navActive: 0,
    shopdialog: false,
    shopdetail: []
  },
  //购物车遮罩层显示隐藏
  shopDialogShow: function(e) {
    this.setData({
      shopdialog: true
    })
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    var arr = this.data.arr;
    var shopdetail = this.data.shopdetail;
    for (var i in arr) {
      for (var j in arr[i].foods) {
        arr[i].foods[j].num=1;
        if (id == arr[i].foods[j].id) {
          console.log("相同")
          shopdetail.push(arr[i].foods[j]);
          this.setData({
            shopdetail: shopdetail
          })
        }
      }

    }

    console.log(this.data.shopdetail)
    wx.setStorageSync("shopdetail",this.data.shopdetail);
    // 调用子组件中methods的onshow方法
    // this.selectComponent('#shopshow').onshow()
  },
  // 获取子组件信息
  toggleToast(e) {
    console.log(e.detail)
    this.setData({
      shopdialog: e.detail.shopdialog
    })
  },
  switch (e) {
    this.setData({
      num: e.target.dataset.num
    });
    if (this.data.num == 0) {
      this.setData({
        flag1: true,
        flag2: false,
        flag3: false
      });
    }
    if (this.data.num == 1) {
      this.setData({
        flag1: false,
        flag2: true,
        flag3: false
      });
    }
    if (this.data.num == 2) {
      this.setData({
        flag1: false,
        flag2: false,
        flag3: true
      });
    }
  },
  // 遮罩显示
  show: function() {
    this.setData({
      display: "block"
    });
  },
  // 遮罩消失
  hide: function() {
    this.setData({
      display: "none"
    });
  },
  onLoad: function() {
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        let windowHeight = res.windowHeight * (750 / res.windowWidth); //将高度乘以换算后的该设备的rpx与px的比例
        // //console.log(windowHeight) //最后获得转化后得rpx单位的窗口高度
        _this.setData({
          conHeight: windowHeight - 350 - 100
        });
      }
    });
    var that = this;
    good.getList().then(res => {
      var list = res.goods;
      console.log(list);
      for (var i in list) {
        list[i].id = i;
        for (var j in list[i].foods) {
          list[i].foods[j].id = i + j;
        }
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
      //选择id
      query.selectAll(".con-list").boundingClientRect();
      console.log(query);
      query.exec(function(res) {
        console.log(res);
        //res就是 所有标签为con-list的元素的信息 的数组
        res[0].forEach(item => {
          h += item.height;
          heightArr.push(h);
        });
        _this.setData({
          heightArr: heightArr
        });
        console.log(heightArr);
      });
    });
  },
  //点击导航栏时就可以通过小程序的方法拿到id和该项目的索引，并赋值
  chooseType: function(e) {
    //分类选择
    // console.log(e)
    let dataSet = e.currentTarget.dataset;
    this.setData({
      navActive: dataSet.index,
      contentActive: dataSet.id
    });
    // console.log(this.data.navActive)
    //遮罩层数据
    good.zheList().then(res => {
      var list = res.seller;
      console.log(list);
      this.setData({
        zhelist: list
      });
    });
  },
  onScroll: function(e) {
    const scrollTop = e.detail.scrollTop;
    const scorllArr = this.data.heightArr;
    // console.log("gundong", scrollTop);
    // console.log("Arr", scorllArr);

    const _this = this;
    if (
      scrollTop >=
      scorllArr[scorllArr.length - 1] - _this.data.conHeight / 2
    ) {
      return;
    } else {
      for (let i = 0; i < scorllArr.length; i++) {
        if (scrollTop >= 0 && scrollTop < scorllArr[0]) {
          if (0 != _this.data.lastActive) {
            _this.setData({
              navActive: 0,
              lastActive: 0
            });
          }
        } else if (scrollTop >= scorllArr[i - 1] && scrollTop < scorllArr[i]) {
          if (i != _this.data.lastActive) {
            _this.setData({
              navActive: i,
              lastActive: i
            });
          }
        }
      }
    }
  },
  //事件处理函数
  detailtap: function(e) {
    console.log(e)
    var id = e.currentTarget.dataset
    wx.navigateTo({
      url: "../detail/detail",
      success: function() {
        console.log("132");
      }
    });
  }
});