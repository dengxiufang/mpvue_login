<template>
    <div class="o-forget-password">
        <div class="o-forget-password__logo">
            <img  src="../../../static/images/elock.jpg" alt="lock" class="o-forget-password__lock">
        </div>
        <div class="o-forget-password__input-area">
            <img class="o-forget-password__input-Icon" src="../../../static/images/logIcon.png" alt="">
            <input class="o-forget-password__input-text"  maxlength="40" v-model="phoneNumber" placeholder="手机号" type="text"/>
        </div>
        <div class="o-forget-password__input-area">
            <img class="o-forget-password__input-Icon" src="../../../static/images/verifiIcon.png" alt="">
            <input class="o-forget-password__input-text"  maxlength="6" v-model="validateCode" placeholder="验证码" type="text"/>
            <config-button @clickButton="_getValidateCode" :btnMsg="btn.validate" :disaoed="btn.valdisaoed"></config-button>
        </div>
        <div class="o-forget-password__input-area">
            <img class="o-forget-password__input-Icon" src="../../../static/images/pwdIcon.png" alt="">
            <input class="o-forget-password__input-text"  maxlength="20" v-model="password" placeholder="新密码" type="password"/>
        </div>
        <div class="o-forget-password__btn-area">
            <config-button @clickButton="_forgetPassword" :btnMsg="btn.submit"></config-button>
        </div>
        <div class="o-forget-password__txt-area">
            <navigator redirect url="/pages/register/main">
                <text class="o-forget-password__txt-pwd">注册账号</text>
            </navigator>
            <navigator redirect url="/pages/login/main">
                <text class="o-forget-password__txt-forget-password"> 登录账号 </text>
            </navigator>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/button'
  import {checkPhoneNumber, checkPassword, checkValidateNumber} from '@/utils/index'
  import {mapActions} from 'vuex'
  export default {
    components: {
      'config-button': Button
    },
    data () {
      return {
        'btn': {
          'disaoed': false,
          'valdisaoed': false,
          'submit': '提交',
          'validate': '获取验证码'
        },
        phoneNumber: '',
        validateCode: '',
        password: '',
        count: 60
      }
    },
    methods: {
      ...mapActions('user', [
        'getValidateCode', 'forgetPassword'
      ]),
      _getValidateCode () {
        if (!checkPhoneNumber(this.phoneNumber)) {
          return ''
        }
        let si = setInterval(() => {
          this.btn.validate = `请等待...${this.count}s`
          if (this.count > 0) {
            this.btn.valdisaoed = true
            this.count -= 1
          } else {
            this.btn.valdisaoed = false
            this.btn.validate = '获取验证码'
            this.count = 60
            clearInterval(si)
          }
        }, 1000)
        this.getValidateCode({phoneNumber: this.phoneNumber})
      },
      _forgetPassword () {
        if (!checkPhoneNumber(this.phoneNumber)) {
          return ''
        }
        if (!checkValidateNumber(this.validateCode)) {
          return ''
        }
        if (!checkPassword(this.password)) {
          return ''
        }
        this.forgetPassword({
          phoneNumber: this.phoneNumber,
          password: this.password,
          verfCode: this.validateCode
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "node_modules/sass-bem/bem";
    $bem-component-namespace: 'o';
    @include c('forget-password') {
        @include e('logo') {
            margin-top: 100rpx;
            margin-bottom: 100rpx;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @include e('lock') {
            width: 150rpx;
            height: 150rpx;
            margin: 20rpx;
            border-radius: 50%;
        }
        @include e('input-area'){
            display: flex;
            border-bottom: 1px solid #ddd;
            background-color: #fff;
            flex-direction: row;
        }
        @include e('input-text'){
            height: 110rpx;
            line-height: 110rpx;
        }
        @include e('input-Icon') {
            width: 60rpx;
            height: 60rpx;
            margin: 25rpx;
            border-radius: 50%;
        }
        @include e('btn-area'){
            width: 90%;
            margin: 40rpx auto;
        }
        @include e('txt-area'){
            width: 80%;
            margin: 0 auto;
            margin-top: 40rpx;
            display: flex;
            justify-content: space-between;
            font-size: 30rpx;
        }
        @include e('txt-pwd'){
            color: #888;
            @include parse('&',':active'){
                opacity: 0.9;
            }
        }
        @include e('txt-forget-password'){
            color: #f90;
            @include parse('&',':active'){
                opacity: 0.8;
            }
        }
        @include e('input-smsCode'){
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding-right: 10%;
        }
        @include e('SmsBtn'){
            font-size: 30rpx;
            color: #fff;
            width: 216rpx;
            box-sizing: border-box;
            height: 80rpx;
            line-height: 80rpx;
            margin-top: 10rpx;
            margin-right: 0;
        }
        @include e('input-Smstext'){
            width: 336rpx;
        }
    }
</style>