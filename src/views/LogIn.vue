<template>
  <div>
    <div class="div1">
      <div class="div2">
        <img src="../../public/user.png" alt="头像" />
      </div>


      <el-form ref="sizeForm" :model="sizeForm" label-width="60px" size="mini">
        <el-form-item label="账号"
          prop="id"
          :rules="{ required: true, message: '请输入账号', trigger: 'blur' }"
        >
          <el-input
            v-model="sizeForm.id"
            placeholder="请您输入账号或手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" 
          prop="password"
          :rules="{ required: true, message: '请输入密码', trigger: 'blur' }"
        >
          <el-input type="password" v-model="sizeForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="code" :model="CaptchaL" 
        >
            <div style="display: flex">
              <el-input prefix-icon="el-icon-circle-check" size="medium" style="flex:1" v-model="CaptchaL.code"></el-input>
              <div style="flex:1;height: 36px;width: 50px;">
                <captcha-l @update:value="getCode"/>
              </div>
            </div>
        </el-form-item>
        <router-link to="/Signup" style="font-size: smaller; float: right;">没有账号?立即注册</router-link><br><br>
        
        <el-form-item size="large" style="margin-left: 30px">
          <el-button type="primary" @click="Submit('sizeForm')">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex';
import CaptchaL from "@/components/CaptchaL.vue";
export default {

  components:{CaptchaL},
  data() {
    return {
      code:"",//组件中传递的
      //验证码
      CaptchaL:{
        code:""//用户输入的
      },
      sizeForm: {
        id:"",
        password:"",

      },
      userinfo:[]
      
    };
  },
  methods: {
    ...mapActions(['loginSuccess']),

    Submit: function (formName) {
      this.$refs[formName].validate((valid) => {
      if(valid){
        if(this.code==this.CaptchaL.code){
          axios
          .post("http://localhost:8080/Login", this.sizeForm).then((result) => {
            if (result.data.code == 200) {
              this.userinfo=result.data.data;
              this.loginSuccess(this.userinfo.username);
              //将jwt令牌存储在本地，一种是永久存储，一种是会话存储
             
              sessionStorage.setItem("jwtToken",this.userinfo.jwt);

              //将用户信息存储在本地会话中
              // 这里要根据具体情况来，取决于用户有没有勾选长时间存储
              localStorage.setItem("jwtToken",this.userinfo.jwt);
              sessionStorage.setItem("userInfo",JSON.stringify(this.userinfo))
              this.$router.push("/shop");
              this.open1("恭喜您，登录成功！")
            } else {
              this.open3("账号或密码错误");
            }
          });
        
        }else{
          this.open3("验证码错误");
          return;
        }
      }
    })
  },
    open1(mess) {
      this.$message({
        showClose: true,
        message: mess,
        type: "success",
      });
    },
    open2(mess) {
      this.$message({
        showClose: true,
        message: mess,
        type: "warning",
      });
    },
    open3(mess) {
      this.$message({
        showClose: true,
        message: mess,
        type: "error",
      });
    },
    getCode(code){
      this.code=code.toLowerCase();
    }
  },
  mounted() {},
};
</script>


<style>
/* CSS Document */
.div1 {
  border: 2px dotted red;
  padding: 3px 10px;
  margin: 200px auto;
  width: 300px; /*设置容器的最小宽度正好是元素的最小宽度*/
  box-shadow: 2px 3px 4px 8px #7d7d7d;
  /*设置盒子的背景颜色*/
  background-color: antiquewhite;
  /*设置盒子的不透明度*/
  opacity: 0.9;
  /*设置盒子为圆角*/
  border-radius: 8%;
}
.div1 .div2 {
  margin: 0 auto;
  width: 85px;
  height: 85px;
  transform: translateY(-48px);
  border: 2px solid blue;
  border-radius: 50%; /*设置为圆形*/
  box-shadow: 2px 3px 4px 8px #676566;
}
.div1 .div2 img {
  width: 143%;
  transform: translate(-18.5px, -5px);
}
body {
  background-image: url("../../public/黄昏1.png");
}

/*警示框样式*/

</style>