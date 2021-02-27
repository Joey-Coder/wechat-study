// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 路由跳转
   */
  toLogs() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 授权后获取用户信息
   * @param {Object} res 
   */
  handleUserInfo(res) {
    if (res.detail.errMsg === "getUserInfo:ok") {
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setTimeout(() => {
    //   // this.setData({},callback)修改data数据
    //   this.setData({
    //     username: 'zzf'
    //   })
    // }, 2000)
    console.log('onLoad 监听页面加载')
    wx.getUserInfo({
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady 监听页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow 监听页面显示 执行多次')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide 监听页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload 监听页面卸载')
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