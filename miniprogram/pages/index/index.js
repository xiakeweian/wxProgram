// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {

    swiperList:[],
    gridList:[]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchList()
    this.fetchGridList()
  },
  fetchList() {
    wx.request({
      url:'https://www.escook.cn/slides',
      method:'get',
      success:(res) => {
        console.log(res,'ggssres')
        this.setData({
          swiperList:res.data
        })
      }
    })
  },
  fetchGridList() {
    wx.request({
      url:'https://www.escook.cn/categories',
      method:'get',
      success:(res) => {
        console.log(res,'grid')
        this.setData({
          gridList:res.data
        })
      }
    })
  },
  

});
