<template>
  <div>
    <x-header>课室状态</x-header>
    <group title="Default">
      <popup-picker title="课室号" :data="rooms" :value.sync="roomNo"></popup-picker>
      <datetime :value.sync="day" @on-change="change" title="日期" format="YYYY-MM-DD"></datetime>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click="queryRoom">查询</x-button>
      </box>
  </div>
</template>
<script>

import { Box, XButton, PopupPicker, Datetime, XNumber, XHeader, Group, Cell, XInput } from 'vux'
import {getRecord as APIQueryRoom} from '../api/record'

export default {
  components: {
    Box,
    XButton,
    XNumber,
    XHeader,
    Group,
    Cell,
    XInput,
    Datetime,
    PopupPicker
  },
  data() {
    return {
      rooms: [['A', 'B', 'C', 'D', 'E'], ['1', '2', '3', '4', '5', '6'], ['01', '02', '03', '04', '05', '06', '07']],
      roomNo: [],
      day: '2016-06-08'
    }
  },
  methods: {
    queryRoom() {
      var self = this;
      var roomNo = self.roomNo.join("");
      var day = self.day;
      APIQueryRoom(roomNo, day)
      .then((response, xhr) => {
        console.log(response);
        if (response.error == 0) {
        }
      })
    }
  }
}

</script>

<style scoped>
</style>