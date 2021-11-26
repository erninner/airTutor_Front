// pages/tutors/tutor_home/tutor_home.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  tap_profile: function(){
    wx.navigateTo({
      url: '/pages/tutors/tutor_profile/profile',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(options.id)
  

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
    // console.log(options);
    // console.log(options.id);
    let id = 7
    // conslole.log(id);
    let page = this;
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/teachers/${id}/bookings`,
      success(res) {
        // console.log(res.data);
        let bookings =  res.data.bookings;
        page.setData({
          bookings: bookings
        })
        
      }
  
    })
  
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

  showbooking(e) {
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../tutor_booking/tutor_booking?id=${id}`,

    })
  }
})