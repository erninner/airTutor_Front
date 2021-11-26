// pages/students/index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    // tutors:
    // [
    // 	{ name: "Terence", credential: "Le Wagon Student", url:"/assets/images/terence.png"},
    // 	{ name: "Xun", credential: "Full-stack", url:"https://kitt.lewagon.com/placeholder/users/Eschults" },
    // 	{ name: "Pavel", credential: "Data Pro", url:"https://kitt.lewagon.com/placeholder/users/krokrob"},
    // 	{ name: "Alex", credential: "Bossy boss", url:"https://kitt.lewagon.com/placeholder/users/arthur-littm" },
    // 	{ name: "Michael", credential: "Gin Pro", url:"https://unsplash.com/photos/WNoLnJo7tS8" },
    // ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;

      // Get api data
      wx.request({
        url: "https://airtutor777.herokuapp.com/api/v1/teachers",
        method: 'GET',
        success(res) {
          const tutors = res.data.teachers;
  
          // Update local data
          page.setData({
            tutors: tutors
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

  },

  showTutor(e){

    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      // url: `/pages/students/showtutor?id=${id}`,
      url: `../tutor_profile/tutor_profile?id=${id}`,

    })
  },
  tap(e){
    const id =  e.currentTarget.dataset.id;
    // console.log(e.currentTarget.dataset)
    // console.log(id)
    wx.navigateTo({ 
      url: `../../bookings/booking_new_request/booking_new_request?id=${id}`,
    })

  }

})