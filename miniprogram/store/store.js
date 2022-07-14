import {
  observable,
  action
} from 'mobx-miniprogram'
export const store = observable({
  numA: 1,
  numB: 2,
  activeTabBarIndex:0,
  get sum() {
    return this.numA + this.numB
  },
  updateNumA: action(function (step) {
    console.log(step)
    this.numA += step
  }),
  updateNumB: action(function (step) {
    this.numB += step
  }),
  updateTabBarIndex:action(function(index) {
    this.activeTabBarIndex = index
  })

})