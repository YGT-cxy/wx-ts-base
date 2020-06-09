import request from './../utils/request'

/**
 * 用户登录
 */
export function apiLogin() {
  return request.post<any>('/api/wx/login', {
    code: 'asdfasdjfl1234ajklf222'
  })
}
