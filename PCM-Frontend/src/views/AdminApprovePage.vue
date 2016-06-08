<template>
  <div>
    <x-header>查看审批</x-header>
    <group title="待审批记录">
      <cell v-for="record in records" :title="record.title" link="/component/radio" :inline-desc="record.date"></cell>
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
      records: [
        {title: '中山大学羽墨轩俱乐部',
         date: 'A101/12月2日10:00-12:00'},
        {title: '中山大学MIAC俱乐部',
         date: 'A203/12月3日11:00-13:00'},
        {title: '中山大学UED俱乐部',
         date: 'A404/12月5日18:00-19:00'}
      ]
    }
  }
}

</script>

<style>
  
</style>