<template>
    <button class="weui-btn-area" :loading="loading" @click="clickButton" :type="type" :disabled="disabled" :plain="plain">{{btnMsg}}
    </button>
</template>

<script>
  export default {
    name: 'mpvue-button',
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      btnMsg: {
        type: String,
        default: '页面主操作 Normal'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickButton (event) {
        this.$emit('clickButton')
      }
    }
  }
</script>

<style>
    .weui-btn-area {
        margin: 0.27647059em 30rpx 0.3em
    }
</style>