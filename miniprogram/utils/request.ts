const Fly = require('./../lib/wx.js')

const flyio = new Fly()

// token请求白名单
// const requestWhitelist = ['/api/wx/login']
// const token = '1234'

// 设置超时
flyio.config.timeout = 15000

// 设置请求基地址
flyio.config.baseURL = 'https://blo.gjz.com'

// 添加请求拦截器
flyio.interceptors.request.use( async (request: any): Promise<any> => {
  // console.log(request)
  // Authorization
  // 添加token
  // if (!requestWhitelist.includes(request.url) && token) {
  //   request.headers.Authorization = token
  // }

  return request
})

// 添加响应拦截器
flyio.interceptors.response.use( (response: any): any => {
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
