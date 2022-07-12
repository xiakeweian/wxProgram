Page({
  data:{
    info:' hellow orld',
    imgUrl:'/images/kt.jpg',
    randomNum1:Math.random() * 10,
    randomNum2:Math.random().toFixed(2),
    count:0,
    type:0,
    condition:false.valueOf,
    dataList:[{name:'苹果',id:1},{name:'香蕉',id:2},{name:'粒子',id:3},]

  },
  tabIncrmentHandler(){
    this.setData({
      count:this.data.count+1
    })
  },

  tabDecrmentHandler(){
    this.setData({
      count:this.data.count-1
    })
  },
  tabIncrment2Handler(e){
    this.setData({
      count:this.data.count+e.target.dataset.info
    })
  },
  bindInputHandler(e) {
    console.log(e.detail.value,e.target)
  }
})