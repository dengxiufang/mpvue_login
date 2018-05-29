<template>
    <div class="container">

    </div>
</template>

<script>
  import card from '@/components/card'
  import button from '@/components/button'

  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {},
        btn: {
          'disabled': true,
          'btnMsg': '确认',
          'type': 'warn'
        }
      }
    },

    components: {
      card,
      button
    },

    methods: {
      bindViewTap () {
        const url = '../logs/main'
        wx.navigateTo({url})
      },
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>

</style>
