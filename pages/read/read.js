// pages/read/read.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    artInfos:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求外部数据文件，实际需要请求服务器获取数据
    var artData = require("../../data/listData.js");
    this.setData({
      artInfos: artData
    });
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

  },

  getDetail: function (ev) {
      var index = ev.currentTarget.dataset.num;
      wx.navigateTo({url: '../read-detail/read-detail?index=' + index});
  },
  

})