import { Fly } from "../../typings/types/flyio"

const Flyio = require('./../lib/flyio/wx.js')

const flyio: Fly = new Flyio()

// token请求白名单
// const requestWhitelist = ['/api/wx/login']
// const token = 'token'

// 设置超时
flyio.config.timeout = 15000

// 设置请求基地址
flyio.config.baseURL = ''

// 添加请求拦截器
flyio.interceptors.request.use( async (request) => {
  // console.log(request)
  // Authorization
  // 添加token
  // if (!requestWhitelist.includes(request.url) && token) {
  //   request.headers.Authorization = token
  // }

  return request
})

// 添加响应拦截器
flyio.interceptors.response.use( (response) => {
    const { data } = response
    const { code, message } = data
    if (code === 200) {
      return data
    } else {
      return Promise.reject(message)
    }

  }, (err: any) => {
    // const { data: { message } } = err.response
    // wx.showToast({
    //   title: message,
    //   icon: 'none',
    //   mask: true
    // })
    return err
  }
)

export default flyio
