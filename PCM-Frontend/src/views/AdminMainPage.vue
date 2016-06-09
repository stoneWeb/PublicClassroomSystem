<template>
  <div>
    <x-header :left-options="{showBack: false}">主页</x-header>
    <div class="white-bg">
      <flexbox class="vux-1px-tb" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <div class="icon" @click="jumpToAdminAprrovePage">
            <img src="../assets/look.png" alt="查看申请">
            <div class="icon-title">查看申请</div>
          </div>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <div class="icon" @click="jumpToQueryRoomPage">
            <img src="../assets/room.png" alt="课室状态">
            <div class="icon-title">课室状态</div>
          </div>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <div class="icon" @click="jumpToAboutPage">
            <img src="../assets/about.png" alt="关于">
            <div class="icon-title">关于</div>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox  class="vux-1px-b" :gutter="0">
        <flexbox-item class="vux-1px-r">
            <div class="icon" @click="logout">
              <img src="../assets/logout.png" alt="退出登录">
              <div class="icon-title">退出登录</div>
            </div>
          </flexbox-item>
          <flexbox-item class="vux-1px-r"></flexbox-item>
          <flexbox-item class="vux-1px-r"></flexbox-item>
      </flexbox>
    </div>
    
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XHeader } from 'vux'
import { adminLogout as APIadminLogout } from '../api/admin'

export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem
  },
  methods: {
    jumpToAdminAprrovePage() {
      this.$router.go({name: 'adminApprove'})
    },
    logout() {
      APIadminLogout()
      .then((response) => {
        if (response.error == 0) {
          clearCookie('sid')
          clearCookie('iden')
          this.$router.go({name: 'admin'})
        } else {
          console.log(response.msg)
        }
      })
    },
    jumpToAboutPage() {
      this.$router.go({name: 'about'})
    },
    jumpToQueryRoomPage() {
      this.$router.go({name: 'query'})
    },
  }
}
</script>

<style scoped>
.white-bg {
  background-color: #fff;
}
.icon {
  padding-top: 30px;
  text-align: center;
}
.icon img {
  width: 26%;
}
.icon-title {
  text-align: center;
  padding-bottom: 30px;
  font-size: 14px;
}
</style>