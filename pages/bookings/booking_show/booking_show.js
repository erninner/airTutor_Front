// pages/bookings/booking_show/booking_show.js
Page({

  modify: function(){
    wx.navigateTo({
      url: '/pages/bookings/booking_modify/booking_modify',
    })
  },
  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // let page = this;
    // let id = this.dataset.id;
    // console.log(id);

    // Get api data
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/bookings/${options.id}`,
      method: 'GET',
      success(res) {
        const booking = res.data.booking;

        // Update local data
        page.setData({
          booking: booking
        });

        wx.hideToast();
      }
    });
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