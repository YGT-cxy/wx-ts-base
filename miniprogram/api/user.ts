import request from './../utils/request'

/**
 * 用户登录
 */
export function apiLogin(): Promise<any> {
  return request.post('/api/wx/login', {
    code: 'asdfasdjfl1234ajklf222'
  })
}
