<template>
  <div>
    <x-header>主页</x-header>
    <div class="white-bg">
      <flexbox class="vux-1px-tb" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <div class="icon" @click="jumpToAdminAprrovePage">
            <img src="../assets/look.png" alt="查看申请">
            <div class="icon-title">查看申请</div>
          </div>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <div class="icon">
            <img src="../assets/room.png" alt="课室状态">
            <div class="icon-title">课室状态</div>
          </div>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
            <div class="icon" @click="jumpToAdminLogout">
              <img src="../assets/me.png" alt="退出登录">
              <div class="icon-title">退出登录</div>
            </div>
          </flexbox-item>
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
    jumpToAdminLogout() {
      this.$router.go({name: 'admin'})
    }
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