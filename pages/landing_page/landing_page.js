// pages/landing_page/landing_page.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  student: function() {
   
    wx.switchTab({
      url: `/pages/students/show_all_tutor/index`,
    })
  },

  tutor: function() {
    let id = 7;
    wx.navigateTo({
      url: `/pages/tutors/tutor_home/tutor_home?id=${id}`,
    })
  },



  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})