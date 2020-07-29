//index.js
//获取应用实例
const app = getApp()
const apiServer = require('../../utils/api')

Component({
  properties: {
    selectedStr: {
      type: String,
      observer (selected) {
        console.log('selected', selected)
        this.setData({
          selected
        })
      }
    }
  },
  data: {
    height: 0,
    selected: 'home-/pages/wanted/index/wanted',
    color: '#666666',
    selectedColor: '#1C9DFF',
    list: [
      {
        pagePath: '/pages/wanted/index/wanted',
        iconPath: '../../images/tab/tab01.png',
        selectedIconPath: '../../images/tab/tab01-on.png',
        text: '求购',
        name: 'home-/pages/wanted/index/wanted'
      }, {
        pagePath: '/pages/my/index/my',
        iconPath: 'http://119.29.140.215:9999/group1/M00/00/D9/CmhM8l8gQ1-AIDRvAAAKb2_ggGY137.png',
        selectedIconPath: 'http://119.29.140.215:9999/group1/M00/00/D9/CmhM8l8gQ2yAd2-zAAAKs0zFwEU163.png',
        text: '我的',
        name: 'my-/pages/my/index/my'
      }
    ]
  },
  attached () {
    // TODO 还没有解决获取tabbar高度
    var query = wx.createSelectorQuery();
    query.select('.van-tabbar').boundingClientRect(function (rect) {
      console.log('rect', rect)
    }).exec();
  },
  methods: {
    onTabbarChange (e) {
      console.log('e', e)
      const [name, url] = e.detail.split('-')
      console.log('name', name)
      wx.switchTab({
        url
      })
    }
  }
})
