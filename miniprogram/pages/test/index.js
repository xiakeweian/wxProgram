// pages/test/index.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 5
  },
  addCount(e) {
    console.log(e,e.detail.value,'lll')
    this.setData({
      count: e.detail.value
    })
  },
  getChild(e) {
    const child = this.selectComponent('.test1Dom');
    child.setData({
      count:child.data.count + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:['numA','numB','sum'],
      actions:['updateNumA','updateNumB']
    })
  },
  btnHandler1(e) {
    this.updateNumA(e.target.dataset.step)
  },
  btnHandler2(e) {
    this.updateNumB(e.target.dataset.step)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destoryStoreBindings()

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})