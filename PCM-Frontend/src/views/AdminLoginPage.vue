<template>
  <div>
    <x-header :left-options="{showBack: true, backText: '主页'}">管理员登录<a @click="jumpToAdminForgetPwd" slot="right">忘记密码</a></x-header>
    <group title="">
      <x-input title="邮箱" :value.sync="email" is-type="email" placeholder="admin@pcm.com"></x-input>
      <x-input title="密码" :value.sync="password" type="password" placeholder="password"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click="adminLogin">登录</x-button>
    </box>
    <toast :show.sync="tst" type="text" :time="1000">{{ msg }}</toast>
  </div>
  </div>
</template>
<script>

import { Toast, XHeader, Box, XButton, XInput, Group, Cell } from 'vux'
import { adminLogin as APIadminLogin } from '../api/admin'

export default {
  components: {
    XInput,
    Group,
    Cell,
    XButton,
    Box,
    XHeader,
    Toast
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
    adminLogin() {
      var self = this;
      APIadminLogin(this.email, this.password)
      .then((response, xhr) => {
        if (response.error == 0) {
          console.log('登录成功')
          document.cookie = "iden=admin"
          self.$router.go({name: 'adminMain'})
        } else {
          console.log('登录错误')
          self.msg = response.msg
          self.tst = true
          clearCookie('sid')
        }
      })
    },
    jumpToAdminForgetPwd() {
      this.$router.go({name: 'adminForget'})
    }
  }
}

</script>