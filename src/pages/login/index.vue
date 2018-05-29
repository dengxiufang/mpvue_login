<template>
    <div class="o-login">
        <div class="o-login__logo">
            <img  src="../../../static/images/elock.jpg" alt="lock" class="o-login__lock">
        </div>
        <div class="o-login__input-area">
            <img class="o-login__input-Icon" src="../../../static/images/logIcon.png" alt="">
            <input class="o-login__input-text"  maxlength="40"  v-model="phoneNumber" placeholder="手机号" type="text"/>
        </div>
        <div class="o-login__input-area">
            <img class="o-login__input-Icon" src="../../../static/images/pwdIcon.png" alt="">
            <input class="o-login__input-text"  maxlength="20"  v-model="password" placeholder="密码" type="password"/>
        </div>
        <div class="o-login__btn-area">
            <config-button @clickButton="_login" :loading="btn.loginLoading" :btnMsg="btn.login"></config-button>
            <div style="margin: 50rpx;"></div>
            <config-button @clickButton="_visitorLogin" :loading="btn.visitLoading" :btnMsg="btn.visitLogin"></config-button>
        </div>
        <div class="o-login__txt-area">
            <navigator redirect url="/pages/forgetpassword/main">
                <text class="o-login__txt-pwd">忘记密码?</text>
            </navigator>
            <navigator redirect url="/pages/register/main">
                <text class="o-login__txt-register"> 注册新账号 </text>
            </navigator>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/button'
  import {checkPhoneNumber, checkPassword} from '@/utils/index'
  import {mapActions} from 'vuex'
  export default {
    components: {
      'config-button': Button
    },
    data () {
      return {
        btn: {
          disaoed: false,
          loginLoading: false,
          visitLoading: false,
          login: '登录',
          visitLogin: '访客登录'
        },
        phoneNumber: '',
        password: ''

      }
    },
    methods: {
      ...mapActions('user', [
        'login'
      ]),
      _login () {
        if (!checkPhoneNumber(this.phoneNumber)) {
          return ''
        }
        if (!checkPassword(this.password)) {
          return ''
        }
        this.login({phoneNumber: this.phoneNumber, password: this.password})
      },
      _visitorLogin () {
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "node_modules/sass-bem/bem";
    $bem-component-namespace: 'o';
    @include c('login') {
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
            height: 100rpx;
            line-height: 100rpx;
        }
        @include e('input-Icon') {
            width: 60rpx;
            height: 60rpx;
            margin: 20rpx;
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
        @include e('txt-register'){
            color: #f90;
            @include parse('&',':active'){
                opacity: 0.8;
            }
        }
    }
</style>