<template>
  <div class="background">  
  </div>
  <div class="front">
    <div class="main-title">
      <h2>欢迎 Welcome</h2>
      <p>这里是公共课室管理系统</p>
    </div>
    <div class="bottom">
      <box gap="10px 10px">
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click="jumpToLoginPage">登录</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button plain type="primary" @click="jumpToSignupPage">注册</x-button>
          </flexbox-item>
        </flexbox>
      </box>
    </div>
  </div>
</template>

<script>
import { Box, Flexbox, FlexboxItem, XButton } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    Box
  },
  methods: {
    jumpToSignupPage() {
      this.$router.go({name: 'signup'})
    },
    jumpToLoginPage() {
      this.$router.go({name: 'login'})
    }
  }
}
</script>

<style>
.main-title {
  padding-top: 100px;
  color: #fff;
  text-align: center;
}
.front {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/bg.jpg');
  -webkit-background-size: cover;
  background-size: cover;
}
.bottom {
  position: fixed;
  width: 100%;
  bottom: 15px;
}
</style>