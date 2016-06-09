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

import { Group, Cell, XHeader, Toast } from 'vux'
import { getUserRecord as APIgetUserRecord } from '../api/record'
import { getDescString } from '../utils/filter'

export default {
  components: {
    Group,
    Cell,
    XHeader,
    Toast
  },
  data() {
    return {
      tst: false,
      msg: '',
      records: []
    }
  },
  methods: {
    getDescString,
    jumpToDetail(index, id) {
      DATA = this.records[index]
      this.$router.go(`/detail/${id}`)
    },
    hasnApproved(record) {
      return record.status == 0
    },
    hasApproved(record) {
      return record.status != 0
    }
  },
  route: {
    data({next}) {
      var self = this
      APIgetUserRecord()
      .then((response, xhr) => {
        console.log(response)
        if (response.error == 0) {
          this.records = response.msg
        } else {
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