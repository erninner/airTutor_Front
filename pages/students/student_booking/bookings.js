// pages/students/bookings.js
Page({

  /**
   * Page initial data
   */
  data: {

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
    let page = this;

    // Get api data
    wx.request({
      url: "https://airtutor777.herokuapp.com/api/v1/bookings",
      method: 'GET',
      success(res) {
        const bookings = res.data.bookings;

        // Update local data
        page.setData({
          bookings: bookings
        });

        wx.hideToast();
      }
    });


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

  },
  showbooking(e){

    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo ({
      // url: `pages/tutors/tutor_profile/profile?id=${id}`,
      url: `../../bookings/booking_show/booking_show?id=${id}`,
    })
  },

})