<template>

<div>
  <x-header :left-options="{showBack: true, backText: '主页'}">我的信息</x-header>
  <group title="">
    <cell title="邮箱">{{user.email}}</cell>
    <cell title="名字">{{user.name}}</cell>
    <cell title="修改密码" link="/forget"></cell>
    <cell title="退出" is-link @click="logout"></cell>
  </group>
</div>

</template>

<script>
import { XHeader, Group, Cell } from 'vux'

import { clearCookie } from '../utils/cookies'
import { logout as APIlogout, getUserInfo as APIgetUserInfo } from '../api/user'

export default {
  components: {
    XHeader,
    Cell,
    Group
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      var self = this
      APIlogout()
      .then((response) => {
        clearCookie('sid')
        clearCookie('iden')
        self.$router.go({name: 'index'})
      })
    }
  },
  route: {
    data({next}) {
      var self = this
      APIgetUserInfo()
      .then((response, xhr) => {
        if (response.error == 0) {
          self.user = response.msg
        } else {
          console.log('获取失败')
        }
      })
    }
  }
}
</script>

<style>
  
</style>