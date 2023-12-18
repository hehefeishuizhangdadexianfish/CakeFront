<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f26405"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
        <img src="../../public/logo.png" width="45px">
      </el-menu-item>
      <el-menu-item><i class="el-icon-s-home" style="color: azure;"></i>首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-location-information" style="color: rgb(254, 255, 254);"></i>定位</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="1" ><router-link to="/login" class="router-link"><i class="el-icon-tickets" style="color: rgb(250, 249, 247);"></i>我的订单</router-link></el-menu-item>
      <el-menu-item index="3"><i class="el-icon-chat-line-round" style="color: azure;"></i>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank" class="router-link"><i class="el-icon-s-cooperation" style="color: azure;"></i>商务合作</a></el-menu-item>
      <el-submenu>
        <template slot="title"><i class="el-icon-user-solid" style="color: azure;"></i>个人中心</template>
        <el-menu-item><i class="el-icon-setting" style="color: azure;"></i>主页管理</el-menu-item>
        <el-menu-item><i class="el-icon-refresh" style="color: azure;"></i>重新登录</el-menu-item>
        <el-menu-item><i class="el-icon-switch-button" style="color: azure;"></i>退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
};
</script>

<style>
  .router-link {
  text-decoration: none;  /* 去除下划线 */
  color: #333;
}

</style>