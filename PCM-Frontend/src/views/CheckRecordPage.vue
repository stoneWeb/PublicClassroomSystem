<template>
  <div>
    <x-header>查看审批</x-header>
    <group title="待审批记录">
      <cell title="中山大学羽墨轩俱乐部" link="/component/radio" inline-desc="A101/12月2日10:00-12:00"></cell>
    </group>
    <group title="审批历史">
      <cell title="中山大学羽墨轩俱乐部" link="/component/radio" inline-desc="A101/12月2日10:00-12:00"></cell>
    </group>
  </div>
</template>

<script>

import { Group, Cell, XHeader } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  data() {
    return {

    }
  }
}

</script>

<style>
  
</style>