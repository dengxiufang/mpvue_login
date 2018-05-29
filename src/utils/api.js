import request from './request'

/**
 * 登录
 * login:
 *  接口地址: login
 *  要求权限:
 *  必传参数: phoneNumber password
 */
export function login ({phoneNumber, password}) {
  let params = {}
  params.phone = phoneNumber
  params.password = password
  // todo::只是为测试用的参数
  params.msgId = 'qwertyui'
  return request.post('/v1/login', params)
}

export function register ({phoneNumber, password, verfCode}) {
  let params = {}
  Object.assign(params, {
    phone: phoneNumber,
    password: password,
    verfCode: verfCode,
    msgId: 'qwertyui',
    userName: 'asdfred',
    openId: 'qweqwewqqweqweqwe'
  })
  return request.post('/v1/register', params)
}

export function forgetPassword ({phoneNumber, password, verfCode}) {
  let params = {}
  Object.assign(params, {
    phone: phoneNumber,
    password: password,
    verfCode: verfCode,
    msgId: 'qwertyui'
  })
  return request.post('/v1/resetpwd', params)
}

export function getValidateCode ({phoneNumber}) {
  let params = {}
  params.phone = phoneNumber
  // todo::只是为测试用的参数
  params.msgId = 'qwertyui'
  return request.post('/v1/verfcode', params)
}
