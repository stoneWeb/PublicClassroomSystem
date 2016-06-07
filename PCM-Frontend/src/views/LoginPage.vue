<template>
  <div>
    <x-header>登录<a @click="jumpToForgetPwd" slot="right">忘记密码</a></x-header>
    <group title="Default">
      <x-input title="邮箱" is-type="email" placeholder="example@pcm.com"></x-input>
      <x-input title="密码" type="password" placeholder="password"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary">登录</x-button>
    </box>
    <box gap="10px 10px">
      <x-button plain type="primary" @click="jumpToSignupPage">注册</x-button>
    </box>
    
  </div>
</template>
<script>

import { XHeader, Box, XButton, XInput, Group, Cell } from 'vux'

export default {
  components: {
    XInput,
    Group,
    Cell,
    XButton,
    Box,
    XHeader
  },
  methods: {
    jumpToSignupPage() {
      this.$router.go({name: 'signup'})
    },
    jumpToForgetPwd() {
      this.$router.go({name: 'forget'})
    }
  }
}

</script>