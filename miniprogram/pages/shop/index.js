// pages/shop/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isLoading: false
  },

  fetchShopList(id) {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '正在加载中...'
    })
    wx.request({
      url: `https://www.escook.cn/categories/${id}/shops`,
      method: 'get',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: (res) => {
        console.log(res, 'hhhres')
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        this.setData({
          isLoading: false
        })
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    })
    this.data.query && this.fetchShopList(this.data.query.id)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.name
    })

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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
      this.setData({
        page:1,
        total:0,
        shopList:[]
      })
      this.fetchShopList(this.data.query.id)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
   
    if(this.data.page >= Math.ceil(this.data.total / this.data.pageSize)) {
      wx.showToast({
        title: '加载完成',
      })
      return
    }
    this.setData({
      page: this.data.page + 1 > Math.ceil(this.data.total / this.data.pageSize) ? this.data.page : this.data.page + 1
    })
    !this.data.isLoading && this.fetchShopList(this.data.query.id)
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})