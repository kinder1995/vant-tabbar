/*定义api地址*/

const host = 'https://kuaice.info/mini/'

//封装接口post    json类型
function POST(url, data, cb) {
    wx.showLoading({
        title: '加载中'
    })
    wx.request({
        url: host + url,
        data: data,
        header: {
            "Content-Type": "application/json;charset=UTF-8",
            "cache-control": "no-cache"
        },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
            wx.hideLoading();
            return typeof cb == "function" && cb(res.data)
        },
        fail: function (res) {
            wx.hideLoading();
            wx.showModal({
                title: '网络错误',
                content: '网络出错，请刷新重试',
                showCancel: false
            })
            return typeof cb == "function" && cb(false)
        }
    })
}

// 封装接口get 基本都是json类型的
function GET(url, data, cb) {
    wx.showLoading({
        title: '加载中'
    })
    wx.request({
        url: host + url,
        data: data,
        header: {
            "Content-Type": "application/json;charset=UTF-8",
            "cache-control": "no-cache"
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
            wx.hideLoading();
            return typeof cb == "function" && cb(res.data)
        },
        fail: function (res) {
            wx.hideLoading();
            wx.showModal({
                title: '网络错误',
                content: '网络出错，请刷新重试',
                showCancel: false
            })
            return typeof cb == "function" && cb(false)
        }
    })
}

//将方法暴露
module.exports = {
    post: POST,
    get: GET,
    host: host
}
