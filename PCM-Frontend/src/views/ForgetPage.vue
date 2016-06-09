<template>
  <div>
    <x-header :left-options="{showBack: true, backText: '返回'}">重设密码</x-header>
    <group title="重设密码">
      <x-input title="邮箱" is-type="email" placeholder="example@pcm.com"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary">发送验证邮件</x-button>
    </box>
    
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