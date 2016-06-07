<template>
  <div>
    <x-header>申请课室</x-header>
    <group title="Default">
      <popup-picker title="课室号" :data="rooms" :value.sync="value2"></popup-picker>
      <datetime :value.sync="startTime" :min-year=2016 :max-year=2020 format="YYYY-MM-DD HH:mm" title="开始时间" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
      <datetime :value.sync="endTime" :min-year=2016 :max-year=2020 format="YYYY-MM-DD HH:mm" title="结束时间" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
      <x-number title="人数规模" :value="0" :min="0"></x-number>
      <cell title="申请文件" primary="content" is-link :inline-desc="inlineDesc">
        <div class="cell-slot" slot="value">
          <div class="text">{{filename}}</div>
          <input type="file" class="hidden">
        </div>
      </cell>
    </group>
    <group>
      <x-input placeholder="填写所属单位"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary">提交</x-button>
    </box>
  </div>
</template>

<script>

import { Box, XButton, PopupPicker, Datetime, XNumber, XHeader, Group, Cell, XInput } from 'vux'


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
      roomNo: 'A101',
      startTime: '选择开始时间',
      endTime: '选择结束时间',
      filename: '轻触选择文件'
    }
  },
  methods: {

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