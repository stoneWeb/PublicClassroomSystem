<template>
  <div>
    <x-header>登录<a @click="jumpToForgetPwd" slot="right">忘记密码</a></x-header>
    <group title="Default">
      <x-input title="邮箱" :value.sync="email" is-type="email" placeholder="example@pcm.com"></x-input>
      <x-input title="密码" :value.sync="password" type="password" placeholder="password"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click="login">登录</x-button>
    </box>
    <box gap="10px 10px">
      <x-button plain type="primary" @click="jumpToSignupPage">注册</x-button>
    </box>
    
  </div>
</template>
<script>

import { XHeader, Box, XButton, XInput, Group, Cell } from 'vux'
import { login as APIlogin } from '../api/user'

export default {
  components: {
    XInput,
    Group,
    Cell,
    XButton,
    Box,
    XHeader
  },
  data() {
    return { 
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      var self = this;
      APIlogin(this.email, this.password)
      .then((response, xhr) => {
        if (response.error == 0) {
          console.log(response)
          console.log(xhr)
          console.log(xhr.getResponseHeader('set-cookie'))
          console.log(xhr.getAllResponseHeaders())
          self.$router.go({name: 'main'})
        }
      })
    },
    jumpToSignupPage() {
      this.$router.go({name: 'signup'})
    },
    jumpToForgetPwd() {
      this.$router.go({name: 'forget'})
    }
  }
}

</script>