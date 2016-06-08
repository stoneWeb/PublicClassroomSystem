<template>
  <div>
    <x-header>{{ date }}</x-header>
    <group title="该日申请">
      <cell v-for="record in records" :title="record.unit" link="/component/radio" :inline-desc="getDescString(record)"></cell>
    </group>
    <toast :show.sync="tst" type="text" :time="1000">{{ msg }}</toast>
  </div>
</template>

<script>

import { Toast, XHeader, Group, Cell } from 'vux'
import {getRecord as APIQueryRoom} from '../api/record'
import { getDescString } from '../utils/filter'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Toast
  },
  data() {
    return {
      roomNo: '',
      date: '',
      records: null,
      tst: false,
      msg: ''
    }
  },
  methods: {
    getDescString
  },
  route: {
    data(transition) {
      var param = this.$route.params
      this.roomNo = param.roomNo
      this.date = param.date

      var self = this

      APIQueryRoom(this.roomNo, this.day)
      .then((response, xhr) => {
        console.log(response);
        if (response.error == 0) {
          self.records = response.msg
        } else {
          self.msg = "Oops, 出错了"
          self.tst = true
        }
        transition.next()
      })
    }
  }
} 
</script>

<style>
  
</style>