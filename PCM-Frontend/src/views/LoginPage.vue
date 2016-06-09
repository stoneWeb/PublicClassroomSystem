<template>
  <div>
    <x-header :left-options="{showBack: true, backText: 'PCM'}">登录<a @click="jumpToForgetPwd" slot="right">忘记密码</a></x-header>
    <group title="登录进入 PCM">
      <x-input title="邮箱" :value.sync="email" is-type="email" placeholder="example@pcm.com"></x-input>
      <x-input title="密码" :value.sync="password" type="password" placeholder="password"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click="login">登录</x-button>
    </box>
    <box gap="10px 10px">
      <x-button plain type="primary" @click="jumpToSignupPage">注册</x-button>
    </box>
    <toast :show.sync="tst" type="text" :time="1000">{{ msg }}</toast>
  </div>
</template>
<script>

import { Toast, XHeader, Box, XButton, XInput, Group, Cell } from 'vux'
import { login as APIlogin } from '../api/user'
import { clearCookie, setCookie, getCookie } from '../utils/cookies'
export default {
  components: {
    Toast,
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
      password: '',
      msg: '',
      tst: false
    }
  },
  methods: {
    login() {
      console.log(getCookie('connect.sid'))
      var self = this;
      APIlogin(this.email, this.password)
      .then((response, xhr) => {
        if (response.error == 0) {
          console.log('登录成功')
          document.cookie = "iden=student"
          self.$router.go({name: 'main'})
        } else {
          console.log('登录错误')
          self.msg = response.msg
          self.tst = true
          clearCookie('sid')
          clearCookie('iden')
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