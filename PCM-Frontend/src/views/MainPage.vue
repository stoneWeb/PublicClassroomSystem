<template>
  <div>
    <x-header>主页</x-header>
    <div class="white-bg">
      <flexbox class="vux-1px-tb" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <div class="icon" @click="jumpToApplyPage">
            <img src="../assets/add.png" alt="">
            <div class="icon-title">申请课室</div>
          </div>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <div class="icon" @click="jumpToCheckPage">
            <img src="../assets/look.png" alt="">
            <div class="icon-title">查看审批</div>
          </div>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <div class="icon" @click="jumpToQueryPage">
            <img src="../assets/room.png" alt="">
            <div class="icon-title">课室状态</div>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="vux-1px-b" :gutter="0">
        <flexbox-item class="vux-1px-r">
            <div class="icon" @click="jumpToMyPage">
              <img src="../assets/me.png" alt="">
              <div class="icon-title">我的信息</div>
            </div>
          </flexbox-item>
          <flexbox-item class="vux-1px-r">
            <div class="icon">
              <img src="../assets/look.png" alt="">
              <div class="icon-title">查看审批</div>
            </div>
          </flexbox-item>
          <flexbox-item class="vux-1px-r">
            <div class="icon">
              <img src="../assets/room.png" alt="">
              <div class="icon-title">课室状态</div>
            </div>
          </flexbox-item>
        </flexbox>
    </div>
    
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XHeader } from 'vux'

export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem
  },
  methods: {
    jumpToApplyPage() {
      this.$router.go({name: 'apply'})
    },
    jumpToCheckPage() {
      this.$router.go({name: 'check'})
    },
    jumpToMyPage() {
      this.$router.go({name: 'me'})
    },
    jumpToQueryPage() {
      this.$router.go({name: 'query'})
    }
  }
}
</script>

<style>
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