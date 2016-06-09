<template>
  <div>
    <x-header :left-options="{showBack: true, backText: '主页'}">申请课室</x-header>
    <group title="Default">
      <popup-picker title="课室号" :data="rooms" :value.sync="roomNo"></popup-picker>
      <datetime :value.sync="day" title="日期" format="YYYY-MM-DD"></datetime>
      <popup-picker title="开始时间" :data="time" :value.sync="startTime"></popup-picker>
      <popup-picker title="结束时间" :data="time" :value.sync="endTime"></popup-picker>
      <x-number title="人数规模" :value.sync="number" :min="0"></x-number>
      <cell title="申请文件" primary="content" is-link :inline-desc="inlineDesc">
        <div class="cell-slot" slot="value">
          <div class="text">{{filename}}</div>
          <input type="file" class="hidden" v-on:change="uploadChange">
        </div>
      </cell>
    </group>
    <group>
      <x-input placeholder="填写所属单位" :value.sync="unit"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click="applyRoom">提交</x-button>
    </box>
  </div>
</template>

<script>

import { Box, XButton, PopupPicker, Datetime, XNumber, XHeader, Group, Cell, XInput } from 'vux'
import { applyRoom as APIapplyRoom } from '../api/record'

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
      time: [['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'], ['00', '15', '30', '45']],
      roomNo: [],
      day: '2016-06-08',
      startTime: [],
      endTime: [],
      unit: '',
      filename: '轻触选择文件',
      number: 0,
      file: null
    }
  },
  methods: {
    applyRoom() {
      var self = this
      var roomNo = self.roomNo.join("")
      var day = self.day
      var startTime = self.startTime.join(":")
      var endTime = self.endTime.join(":")
      var number = self.number
      var unit = self.unit
      var data = new FormData()
      data.append('roomNo', roomNo)
      data.append('date', day)
      data.append('startTime', startTime)
      data.append('endTime', endTime)
      data.append('scale', number)
      data.append('unit', unit)
      data.append('file', self.file)

      APIapplyRoom(data)
      .then((response, xhr) => {
        console.log(response)
      })
    },
    uploadChange(event) {
      console.log('change!!')
      this.file = event.target.files[0]
      this.filename = this.file.name
    }
  }
}

</script>

<style>

.cell-slot {
  position: relative;
  width: 100%;
  height: 100%;
}
.cell-slot .text {
  position: absolute;
  top: 0;
  right: 12px;
}
.hidden {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

</style>