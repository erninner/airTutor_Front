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
    const id = o.id;
    // console.log(o);


    // Get api data
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/bookings/${o.id}`,
      method: 'GET',
      success(res) {
        // console.log(res.data.id)
        // const booking = res.data.booking;
        const teacher = res.data.user.name;
        const time = res.data.time;
        const title = res.data.course_title;
        const teacher_url = res.data.image_url;
        const id = res.data.id


        // Update local data
        page.setData({
          teacher: teacher,
          time: time,
          title: title,
          teacher_url: teacher_url,
          id: id

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
  onShow: function (options) {
        // console.log(options.id);
        // let page = this;
        // const id = o.id;
        // // console.log(o);
    
    
        // // Get api data
        // wx.request({
        //   url: `https://airtutor777.herokuapp.com/api/v1/bookings/${o.id}`,
        //   method: 'GET',
        //   success(res) {
        //     // console.log(res.data.id)
        //     // const booking = res.data.booking;
        //     const teacher = res.data.user.name;
        //     const time = res.data.time;
        //     const title = res.data.course_title;
        //     const teacher_url = res.data.image_url;
        //     const id = res.data.id
    
    
        //     // Update local data
        //     page.setData({
        //       teacher: teacher,
        //       time: time,
        //       title: title,
        //       teacher_url: teacher_url,
        //       id: id
    
        //     });
    
        //     wx.hideToast();
        //   }
        // });

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

  accept(e) {
    // console.log(e.currentTarget);
    let id = e.currentTarget.dataset.id;
    let booking = {status: "accepted"};
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/bookings/${id}`,
      // url: `http://localhost:3000/api/v1/bookings/10`,

      method: 'PUT',
      data: booking,
      success(){
        wx.redirectTo({
          url: '../tutor_home/tutor_home',
        })
      }
      

    })
    wx.showToast({
      title: 'Accepted',
    })
    setTimeout(() => {
      
    }, 1000); 

  },

  decline(e) {
    let id = e.currentTarget.dataset.id;
    let booking = {status: "rejected"};
    wx.request({
      url: `https://airtutor777.herokuapp.com/api/v1/bookings/${id}`,
      // url: `http://localhost:3000/api/v1/bookings/10`,

      method: 'PUT',
      data: booking,
      success(){
        wx.redirectTo({
          url: '../tutor_home/tutor_home',
        })
      }
      
    })
    wx.showToast({
      title: 'Declined',
    })
    setTimeout(() => {
      
    }, 1000); 

  }
})