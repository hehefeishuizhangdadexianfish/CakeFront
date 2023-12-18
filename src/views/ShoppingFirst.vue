<template>
    <div id="app">
      <el-container>
        <el-header style="padding: 2px 0px">
          <nav-menu></nav-menu>
        </el-header>
        <el-main>
          <search-i></search-i>
          <carousal-c></carousal-c>
          <!-- 分类 -->
          <el-popover placement="right" trigger="hover" :visible-arrow="false">
            <el-card class="box-card" slot="reference">
              <div class="text item">
                {{ 1216516 }}
                {{ 1216516 }}
                {{ 1216516 }}
                {{ 1216516 }}
                {{ 1216516 }}
                {{ 1216516 }}
              </div>
            </el-card>
  
            <div class="text item custom-popover">
              {{ 45 }}
              {{ 1216516 }}<br />
              {{ 1216516 }}
              {{ 1216516 }}
              {{ 1216516 }}
              {{ 1216516 }}
              {{ 1216516 }}
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
              {{ 1216516 }}<br />
            </div>
          </el-popover>
          <!-- 视频 -->
          <div class="video">
            <video>
              <source />
              <source />
            </video>
          </div>
          <!-- 右侧 -->
          <div class="div5">
            <!-- 用户头像 -->
            <div class="box" v-bind:aria-disabled="disabled">
                <router-link to="/login" class="router-link-exact-active" :class="{ 'disabled': disabled }">
                <img src="../../public/user.png" alt="头像" /><br />
                <el-span >{{ username }}</el-span>
              </router-link>
            </div>
            <!-- 便捷服务 -->
            <el-row :gutter="6">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img src="../../public/01.png" width="40%" /><br />机票
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <img src="../../public/02.png" width="40%" /><br />移动
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <img src="../../public/03.png" width="40%" /><br />联通
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <img src="../../public/04.png" width="40%" /><br />信用卡
                </div></el-col
              >
            </el-row>
            <el-row :gutter="6">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <img src="../../public/05.png" width="40%" /><br />酒店
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <img src="../../public/06.png" width="40%" /><br />云建站
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <img src="../../public/07.png" width="40%" /><br />礼品卡
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <img src="../../public/08.png" width="40%" /><br />电影票
                </div></el-col
              >
            </el-row>
          </div>
  
          <!-- 活动-长条 -->
          <image-v></image-v>
          
          <span style="position: relative; top:-200px; font-size:x-large; color: #f26405;">
            <i class="el-icon-guide"></i>
            为你推荐
          </span>
          <center-commdity></center-commdity>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  import NavMenu from "./NavMenu.vue";
  import CarousalC from "./CarousalC.vue";
  import SearchI from "./SearchI.vue";
  import ImageV from "./ImageV.vue";
  import CenterCommdity from "./CenterCommdity.vue";
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
    // 使用 mapGetters 将 getUserId 映射为组件的计算属性
    ...mapGetters(['getUserId'])
  },
    components: {
      NavMenu,
      CarousalC,
      SearchI,
      ImageV,
      CenterCommdity,
    },
    data() {
      return {
        activeIndex2: "1",
        disabled:false,
        visible: false,
        username:"请登录"
      };
    },
    mounted(){
      console.log(1);
      if(sessionStorage.getItem("userInfo")){
        this.username=JSON.parse(sessionStorage.getItem("userInfo")).username;
        this.disabled=true;

      }else if(this.getUserId){
          this.username=this.getUserId
        } 
      
      
      
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
  </script>
  
  <style>
  .custom-popover {
    width: 200px;
    height: auto;
  }
  .el-header {
    color: #f26405;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
  .text {
    font-size: 12px;
  }
  
  .item {
    padding: 8px 0;
  }
  
  .box-card {
    width: 220px;
    height: 370px;
    position: relative;
    left: 130px;
    top: 10px;
  }
  .video {
    width: 500px;
    background-color: #2f2e2e;
    height: 270px;
    position: relative;
    left: 450px;
    top: -310px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.3);
  }
  
  .div5 {
    width: 285px;
    height: 375px;
    background-color: #ffffff;
    position: absolute;
    top: 430px;
    right: 150px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  .div5 .box {
    width: max-content;
    height: auto;
    border-radius: 50%; /*设置为圆形*/
    position: relative;
    left: 33%;
    top: 0;
  }
  .box img {
    width: 90px;
  }
  
  .el-row {
    margin-bottom: 10px;
    margin-top: 33px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #f7f8fa;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .router-link-exact-active {
  text-decoration: none;  /* 去除下划线 */
  color: #333;
}
.disabled {
  color: gray;
  pointer-events: none; /* 禁止鼠标事件 */
  cursor: not-allowed; /* 设置鼠标样式为禁用 */
}
  </style>