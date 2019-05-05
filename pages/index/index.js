//index.js 获取应用实例
var app = getApp();
Page({
  data: {
    animationlist: [],
    isAnimation: false,
    zindex: [
      1, 2, 3
    ],
    animationlistyet: [],
    cardInfoList: [
      {
        id: 1,
        cardUrl: '/images/card/card3.jpg',
        cardInfo: {
          cardTitle: '你不知道的爱恋',
          cardInfoMes: ['一月纯洁的友谊和美好的祝福。', '二月高贵、天真和纯纯的爱。', '三月你的幸福比我的重要。']
        }
      }, {
        id: 2,
        cardUrl: '/images/card/card1.jpg',
        cardInfo: {
          cardTitle: '你不知道的心事',
          cardInfoMes: ['一月一送，浪漫节日送浪漫花', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
        }
      }, {
        id: 3,
        cardUrl: '/images/card/card2.jpg',
        cardInfo: {
          cardTitle: '你不知道的世界',
          cardInfoMes: ['一月一送，浪漫节日送浪漫花', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
        }
      }
    ]
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var self = this;
    if (this.data.isAnimation) {
      return false;
    }
    this.setData({isAnimation: true});
    var animation1 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
    this.animation1 = animation1;
    // this.animation1.translateY(-320).rotate(-5).translateX(0).scale(0.52).step();
    this
      .animation1
      .translateY(28)
      .translateX(51)
      .rotate(0)
      .scale(1)
      .step();
    var animation2 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
    this.animation2 = animation2;
    this
      .animation2
      .translateY(62)
      .translateX(25)
      .rotate(0)
      .step();
    var animation3 = wx.createAnimation({duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)'});
    this.animation3 = animation3;
    this
      .animation3
      .translateY(44)
      .translateX(41)
      .rotate(0)
      .step();
    if (this.data.animationlistyet.length <= 0) {
      this.data.animationlistyet = [
        this
          .animation1
          .export(),
        this
          .animation2
          .export(),
        this
          .animation3
          .export()
      ];
    }
    this.setData({animationlist: this.data.animationlistyet});
    var animationlistyet = self.data.animationlistyet;
    var animation = self
      .data
      .animationlistyet
      .pop();
    self
      .data
      .animationlistyet
      .unshift(animation);
    self.setData({
      animationlist: [], animationlistyet: self.data.animationlistyet // 用来寄存下一次动画的排序
    });
    setTimeout(function () {
      var zindex = self.data.zindex;
      var slidethis = self
        .data
        .zindex
        .shift();
      self
        .data
        .zindex
        .push(slidethis);
      self.setData({isAnimation: false, zindex: self.data.zindex});
    }, 100);
  },
  buythis: function (e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    wx.navigateTo({url: '../detail/detail'});
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //更新数据
    // that.setData({ userInfo: that.globalData.userInfo });
  }
});
