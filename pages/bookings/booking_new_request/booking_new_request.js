// pages/bookings/booking_new_request/booking_new_request.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  return_to_booking: function() {
    wx.switchTab({
      url: '/pages/students/student_booking/bookings',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(options.id)
    const page = this
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/teachers/${options.id}`,
      success(res){
        page.setData({
          name: res.data.user.name,
          course_title: res.data.course_title,
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

  submitForm(e){
    let time = e.detail.value.time;
    let comment = e.detail.value.text;
    let student_id = 7;
    let teacher_id = this.data.id;
    let status = 'pending'
    let booking = {
      time: time,
      comment: comment,
      status: status,
      student_id: student_id,
      teacher_id: teacher_id
    }
    wx.request({
      url: 'https://airtutor777.herokuapp.com/api/v1/bookings',
      method: 'POST',
      data: booking,
      success(){
        wx.switchTab({
          url: '/pages/students/student_booking/bookings',
        })
      }
    })
    console.log(time);
    console.log(comment);

    


    // wx.switchTab({
    //   url: '/pages/students/student_booking/bookings',
    // })
  }

})