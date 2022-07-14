// components/test1/test1.js
const testBehavior = require('../../behaviors/test-behavior')
Component({
  behaviors:[testBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 4
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addhandler(e) {
      this.setData({
        count:this.properties.count + 1
      })
      this.triggerEvent('async',{value:this.properties.count})
    }
  }
})