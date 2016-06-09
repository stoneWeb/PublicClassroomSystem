<template>
<div class="white-background">
  <x-header :left-options="{showBack: true, backText: '主页'}">关于</x-header>
  <article class="weui_article">
    <h1>关于</h1>
    <section>
      <h2 class="title">PCM</h2>
      <p>公共教室管理系统 PCM 是一个基于 MVC 架构开发的，使用网页作为客户端的软件，学生使用 PCM 可以查询教室申请状态、申请空闲的公共教室，管理员可以审批学生的申请。</p>
    </section>
    <section>
      <h2 class="title">关于我们</h2>
      <p>小组成员</p>
      <ul class="my-ul">
        <li>李宇捷（组长）</li>
        <li>林育新</li>
        <li>林勇洁</li>
        <li>陈梓浩</li>
        <li>梁喻源</li>
      </ul>
    </section>
  </article>
</div>
  
</template>

<script>

import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  }
}
</script>

<style>

.white-background {
  height: 100%;
  background: white;
}

.my-ul {
  margin-left: 20px;
}
</style>