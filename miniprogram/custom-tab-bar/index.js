// custom-tab-bar/index.js
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../store/store'
Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: 'sum',
      active:'activeTabBarIndex'
    },
    actions: {
      updateTabBarIndex:'updateTabBarIndex'
    }
  },
  observers: {
    "sum": function(val){
      console.log(val,this, 'sss')
      this.setData({
        "list[1].info":val
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{
        "pagePath": "/pages/home/index",
        "text": "主页",
        icon: 'wap-home-o',
      },
      {
        "pagePath": "/pages/index/index",
        "text": "消息",
        icon: 'chat-o',
        info: 2
      },
      {
        "pagePath": "/pages/list/index",
        "text": "列表",
        icon: 'shopping-cart-o'
      },
      {
        "pagePath": "/pages/test/index",
        "text": "测试",
        icon: 'manager-o'
      }
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      console.log(e, 'ssse')
     this.updateTabBarIndex(e.detail)
      const url = this.data.list[e.detail].pagePath
      console.log(url)
      wx.switchTab({url})
      // wx.navigateTo({
      //   url: url
      // })

    },
    bindClick(e) {
      console.log(e, 'ssses')
      const url = e.target.dataset.path
      console.log(url, 'sssurl')
      wx.switchTab({
        url
      })
      // wx.navigateTo({
      //   url: e.target.dataset.path
      // })
    }
  }
})