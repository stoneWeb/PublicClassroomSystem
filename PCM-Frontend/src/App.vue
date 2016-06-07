<template>
  <div id="app">
    <router-view class="view" keep-alive></router-view>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  }
}
</script>

<style>
@import '~vux/dist/vux.css';

html, body, #app {
  height: 100%;
  width: 100%;
}
body {
  background-color: #fbf9fe;
}
</style>
