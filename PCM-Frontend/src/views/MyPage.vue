<template>

<div>
  <x-header>我的信息</x-header>
  <group title="">
    <cell title="修改密码"></cell>
    <cell title="退出" is-link @click="logout"></cell>
  </group>
</div>

</template>

<script>
import { XHeader, Group, Cell } from 'vux'

import { clearCookie } from '../utils/cookies'
import { logout as APIlogout } from '../api/user'

export default {
  components: {
    XHeader,
    Cell,
    Group
  },
  methods: {
    logout() {
      var self = this
      APIlogout()
      .then((response) => {
        clearCookie('sid')
        self.$router.go({name: 'index'})
        // if (response.error == 0) {
        //   self.$router.go({name: 'index'})
        // }
      })
    }
  }
}
</script>

<style>
  
</style>