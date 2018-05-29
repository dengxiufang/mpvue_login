function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function checkPhoneNumber (number) {
  if (/^1(3|4|5|7|8)\d{9}$/.test(number.trim())) {
    return true
  } else {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '请输入正确的号码'
    })
    return false
  }
}
export function checkValidateNumber (number) {
  if (/^\d{6}$/.test(number.trim())) {
    return true
  } else {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '请输入六位验证码'
    })
    return false
  }
}
export function checkPassword (password) {
  if (password.length <= 0) {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '请输入密码'
    })
    return false
  } else {
    return true
  }
}
export default {
  formatNumber,
  formatTime,
  checkPhoneNumber,
  checkValidateNumber,
  checkPassword
}
