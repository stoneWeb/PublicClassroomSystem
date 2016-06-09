<template>
  <div>
    <x-header :left-options="{showBack: true, backText: '返回'}">注册</x-header>
    <group title="注册用户才能申请课室">
      <x-input title="邮箱" :value.sync="email" is-type="email" placeholder="example@pcm.com"></x-input>
      <x-input title="姓名" :value.sync="name" placeholder="张三疯"></x-input>
      <x-input title="密码" :value.sync="password" type="password" placeholder="password"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click="signup">注册</x-button>
    </box>
    <box gap="10px 10px">
      <x-button plain type="primary" @click="clearInput">重填</x-button>
    </box>
  </div>
</template>
<script>

import { XHeader, Box, XButton, XInput, Group, Cell } from 'vux'
import { signup as APIsignup } from '../api/user'
import { setCookie } from '../utils/cookies'

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
      name: '',
      password: '',
      email: ''
    }
    
  },
  methods: {
    signup() {
      var self = this;
      APIsignup(this.email, this.name, this.password)
      .then((response, xhr) => {
        if (response.error == 0) {
          console.log('登录成功')
          document.cookie = "iden=student"
          self.$router.go({name: 'main'})
        }
      })
      
    },
    clearInput() {
      // do something   
    }
  }
}

</script>