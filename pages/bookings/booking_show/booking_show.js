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
  onLoad: function (o) {
    // console.log(o);
    let page = this;
    let id = o.id
    // console.log(o);


    // Get api data
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/bookings/${o.id}`,
      method: 'GET',
      success(res) {
        console.log(res.data)
        // const booking = res.data.booking;
        const teacher = res.data.user.name;
        const time = res.data.time;
        const title = res.data.course_title;
        const teacher_url = res.data.image_url;


        // Update local data
        page.setData({
          teacher: teacher,
          time: time,
          title: title,
          teacher_url: teacher_url

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