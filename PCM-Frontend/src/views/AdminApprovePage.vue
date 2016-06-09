<template>
  <div>
    <x-header :left-options="{showBack: true, backText: '主页'}">查看审批</x-header>
    <group title="待审批记录">

      <div v-for="record in records" @click="jumpToDetail($index, record.id)">
        <cell v-if="hasnApproved(record)" :title="record.unit" :inline-desc="getDescString(record)"></cell>
      </div>

    </group>
    <group title="审批历史">
      <div v-for="record in records"  @click="jumpToDetail($index, record.id)">
        <cell v-if="hasApproved(record)" :title="record.unit" :inline-desc="getDescString(record)"></cell>
      </div>
    </group>
    <toast :show.sync="tst" type="text" :time="1000">{{ msg }}</toast>
  </div>
</template>

<script>

import { Toast, Group, Cell, XHeader } from 'vux'
import { getAllRecord as APIgetAllRecord } from '../api/record'
import { getDescString } from '../utils/filter'

export default {
  components: {
    Toast,
    Group,
    Cell,
    XHeader
  },
  data() {
    return {
      records: [],
      tst: false,
      msg: ''
    }
  },
  methods: {
    getDescString,
    jumpToDetail(index, id) {
      DATA = this.records[index]
      this.$router.go(`/admin/detail/${id}`)
    },
    hasnApproved(record) {
      return record.status == 0
    },
    hasApproved(record) {
      return record.status != 0
    }
  },
  route: {
    data({to, next}) {
      var self = this
      APIgetAllRecord()
      .then((response) => {
        console.log(response)
        if (response.error == 0) {
          self.records = response.msg
        } else {
          console.log('出错了')
          self.msg = 'Ocps, 请求数据错误'
          self.tst = true
        }
      })
      next()
    }

  }
}

</script>

<style>
  
</style>