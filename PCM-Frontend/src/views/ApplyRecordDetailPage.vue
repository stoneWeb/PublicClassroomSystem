<template>
  <div>
    <x-header>查看审批</x-header>
    <group title="申请详情" class="title-font">
      <cell class="color" title="所属单位">
        <div slot="value">
          <span class="detail-color">{{record.unit}}</span>
        </div>
      </cell>
      <cell class="color" title="课室号">
        <div slot="value">
          <span class="detail-color">{{record.room.roomNo}}</span>
        </div>
      </cell>
      <cell class="color" title="日期">
        <div slot="value">
          <span class="detail-color">{{record.date}}</span>
        </div>
      </cell>
      <cell class="color" title="时间">
        <div slot="value">
          <span class="detail-color">{{record.startTime}}-{{record.endTime}}</span>
        </div>
      </cell>
      <cell class="color" title="人数">
        <div slot="value">
          <span class="detail-color">{{record.scale}}</span>
        </div>
      </cell>
      <cell class="color" title="申请文件">
        <div slot="value">
          <span class="detail-color">{{record.attachment}}</span>
        </div>
      </cell>
      <cell class="color" title="审批结果">
        <div slot="value">
          <span class="detail-color">{{dd[record.status]}}</span>
        </div>
      </cell>
    </group>
    <div class="set-margin" v-if="isAdmin">
      <flexbox>
        <flexbox-item>
          <x-button type="primary">同意</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn">拒绝</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>

import { Group, Cell, XHeader, XButton, Box, GroupTitle,Flexbox, FlexboxItem } from 'vux'

var mapArr = ['待审批', '通过', '拒绝'];

export default {
  components: {
    Group,
    Cell,
    XHeader,
    XButton,
    Box,
    GroupTitle,
    Flexbox,
    FlexboxItem
  },
  data() {
    var url = this.$route.path;
    var bool = url.match(/admin/gi);
    var isAdmin = true;
    if (!bool) {
      isAdmin = false;
    }
    return {
      id: '',
      dd: mapArr,
      record: {
        date: '2016-06-15',
        id: '1',
        unit: '中山大学羽墨轩俱乐部',
        startTime: '15:00',
        endTime: '16:00',
        scale: '15',
        status: '1',
        room: {
          roomNo: 'A101'
        },
        attachment: 'http://download/file/?id=1234'
      },
      isAdmin: isAdmin
    }
  },
  route: {
    data: function (transition) {
      this.id = this.$route.params.id
      transition.next();
    }
  }
}

</script>

<style scoped>
.color {
  font-size: 14px;
  color: rgba(0,0,0,.5);
}
.detail-color {
  font-size: 16px;
  color: rgba(0,0,0,.8);
}
.set-margin {
  margin: 20px 30px;
}
</style>