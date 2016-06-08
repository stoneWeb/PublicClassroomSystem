<template>
  <div>
    <x-header>联系管理员</x-header>
    <div class="adminForgetTips">
      <a href="mailto:*******">Please concat with example@pcm.com</a>
    </div>
  </div>
</template>
<script>

import { XHeader, Box, XButton, XInput, Group, Cell } from 'vux'

export default {
  components: {
    XInput,
    Group,
    Cell,
    XButton,
    Box,
    XHeader
  }
}

</script>

<style scoped>
.adminForgetTips {
  width: 80%;
  margin: 0 auto;
  height: 50px;
  margin-top: 100px;
  text-align: center;
}

.adminForgetTips a {
  color: rgba(0,0,0, .5);
  text-decoration: none;
  line-height: 0;
}
</style>