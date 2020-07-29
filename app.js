//app.js
var request = require('utils/api')
App({
  request: {
    post: request.post,
    get: request.get
  },
  onLaunch: function () {
  },
  globalData: {
    userInfo: null
  }
})
