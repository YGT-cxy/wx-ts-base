// index.ts
// 获取应用实例
const app = getApp<IAppOption>()


Page({
  data: {
    tabbarIndex: 0,
    tabbar: [
      {
        iconPath: '',
        selectedIconPath: '',
        text: '首页'
      },
      {
        iconPath: '',
        selectedIconPath: '',
        text: '分类'
      },
      {
        iconPath: '',
        selectedIconPath: '',
        text: '排名'
      },
      {
        iconPath: '',
        selectedIconPath: '',
        text: '购物车'
      },
      {
        iconPath: '',
        selectedIconPath: '',
        text: '我的'
      }
    ]
  },
  onLoad() {
    console.log('index - 页面加载')
  },
  /**
   * 底部选项卡点击触发事件
   * @param e 事件对象
   */
  switchTabbar(e: any): void {
    const { id } = e.currentTarget.dataset
    if (this.data.tabbarIndex === id) {
      return
    }
    console.log('显示')
    this.setData({
      tabbarIndex: Math.floor(id)
    })
  }
})
