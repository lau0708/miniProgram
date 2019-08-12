import { GoodsModel } from "../../../models/goods.js";
let comment = new GoodsModel();
//Component Object
Component({
  properties: {
    myProperty: {
      type: String,
      value: "",
      observer: function() {}
    }
  },
  data: {
    list:[]
  },
  methods: {},
  created: function() {
    comment.commentList().then(res => {
      this.setData({
        list:res.ratings
      })
      // console.log(this.data.list)
    });
  },
  attached: function() {},
  ready: function() {},
  moved: function() {},
  detached: function() {}
});
