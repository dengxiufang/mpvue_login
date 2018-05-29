import { login, register, forgetPassword, getValidateCode } from '@/utils/api'
import { LOGIN } from '@/store/mutations-type'
import { apiRespCode } from '../../utils/apiRespCode'

const state = wx.getStorageSync('user') || {
  userInfo: {}
}
const mutations = {
  [LOGIN] (state, userInfo) {
    state.userInfo = userInfo
  }
}
const actions = {
  async login ({commit, state}, data) {
    let userInfo = await login(data)
    if (userInfo.data.respCode !== apiRespCode.ERR_OK) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: userInfo.data.errMsg
      })
    } else {
      wx.switchTab({
        url: '/pages/home/main'
      })
      commit(LOGIN, userInfo)
    }
  },
  async register ({commit, state}, data) {
    let registerInfo = await register(data)
    if (registerInfo.data.respCode !== apiRespCode.ERR_OK) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: registerInfo.data.errMsg
      })
    } else {
      wx.showToast({
        title: '注册成功',
        icon: 'success'
      })
      setTimeout(function () {
        wx.redirectTo({
          url: '/pages/login/main'
        })
      }, 1200)
    }
  },
  async forgetPassword ({commit, state}, data) {
    let forgetInfo = await forgetPassword(data)
    if (forgetInfo.data.respCode !== apiRespCode.ERR_OK) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: forgetInfo.data.errMsg
      })
    } else {
      wx.showToast({
        title: '修改成功',
        icon: 'success'
      })
      setTimeout(function () {
        wx.redirectTo({
          url: '/pages/login/main'
        })
      }, 1200)
    }
  },
  async getValidateCode ({commit, state}, data) {
    let validateInfo = await getValidateCode(data)
    if (validateInfo.data.respCode !== apiRespCode.ERR_OK) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: validateInfo.data.errMsg
      })
    } else {
      wx.showToast({
        title: '已发送',
        icon: 'success'
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
