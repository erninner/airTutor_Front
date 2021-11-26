// pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  tap_home: function(){
    wx.navigateTo({
      url: '/pages/tutors/tutor_home/tutor_home',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/teachers/${options.id}`,
      success(res){
        // console.log(res.data);
        page.setData({
          name: res.data.user.name,
          email: res.data.user.email,
          course_title: res.data.course_title,
          course_info: res.data.course_info,
          credentials: res.data.teaching_credentials,
          id: options.id
        }) 
      }
    })
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

  },

  tap(e){
    // const id =  id;
    // console.log(e.currentTarget.dataset)
    // console.log(id)
    console.log(this.data.id)
    wx.navigateTo({ 
      url: `../../bookings/booking_new_request/booking_new_request?id=${this.data.id}`,
    })

  }
})