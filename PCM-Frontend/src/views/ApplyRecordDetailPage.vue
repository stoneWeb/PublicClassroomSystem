<template>
  <div>
    <x-header :left-options="{showBack: true, backText: '返回'}">查看审批</x-header>
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
          <span class="detail-color">{{ date }}</span>
        </div>
      </cell>
      <cell class="color" title="时间">
        <div slot="value">
          <span class="detail-color">{{ startTime }}-{{ endTime }}</span>
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
    <box gap="10px 10px" v-if="hasApproved">
      <x-button type="warn" @click="approve(0)">取消审批</x-button>
    </box>
    <box gap="10px 10px" v-if="hasnApproved">
      <flexbox>
        <flexbox-item>
          <x-button type="primary" @click="approve(1)">同意</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn" @click="approve(2)">拒绝</x-button>
        </flexbox-item>
      </flexbox>
    </box>
    <toast :show.sync="tst" type="text" :time="1000">{{ msg }}</toast>
  </div>
</template>

<script>

import { Group, Toast, Cell, XHeader, XButton, Box, GroupTitle,Flexbox, FlexboxItem } from 'vux'
import { approveRecord as APIapproveRecord } from '../api/record'

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
    FlexboxItem,
    Toast
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
      isAdmin: isAdmin,
      msg: '',
      tst: false,
      date: '',
      startTime: '',
      endTime: ''
    }
  },
  computed: {
    hasApproved() {
      return this.isAdmin && this.record.status != 0
    },
    hasnApproved() {
      return this.isAdmin && this.record.status == 0
    },
    date() {
      // console.log(this.record.date,'computing date')
      return this.record.date.slice(0, 10)
    },
    startTime() {
      let t = this.record.startTime.split(':')
      return `${t[0]}:${t[1]}`
    },
    endTime() {
      let t = this.record.endTime.split(':')
      return `${t[0]}:${t[1]}`
    }
  },
  methods: {
    approve(status) {
      var self = this
      APIapproveRecord(this.record.id, status)
      .then((response) => {
        if (response.error == 0) {
          self.record.status = status
        } else {
          console.log('有误')
        }
        self.msg = response.msg
        self.tst = true
      })
    }
  },
  route: {
    data: function (transition) {
      this.record = DATA
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
  margin: 10px 10px;
}
</style>