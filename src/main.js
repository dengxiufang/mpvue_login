import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'
import './css/app.css'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
// 需要用此将 store 注入每个子组件中
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/user/main',
      'pages/device/main',
      '^pages/login/main',
      'pages/home/main',
      'pages/register/main',
      'pages/forgetpassword/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '主页',
          pagePath: 'pages/home/main',
          iconPath: 'static/images/home.png',
          selectedIconPath: 'static/images/home-actived.png'
        },
        {
          text: '设备',
          pagePath: 'pages/device/main',
          iconPath: 'static/images/search.png',
          selectedIconPath: 'static/images/search-actived.png'
        },
        {
          text: '我的',
          pagePath: 'pages/user/main',
          iconPath: 'static/images/profile.png',
          selectedIconPath: 'static/images/profile-actived.png'
        }
      ]
    }
  }
}
