<template>
  <div>
    <div class="div1">
        <div class="div2">
            <img src="../../public/user.png" alt="头像" />
        </div>

        <el-form  ref="" :model="signup" label-width="90px" size="mini" >
            <el-form-item label="用户名" prop="username" 
                :rules="{required:true ,message:'用户名不能为空',trigger:'blur'}"
            >
                <el-input v-model="signup.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="id" 
                :rules="{required:true ,message:'手机号不能为空',trigger:'blur'}"
            >
                <el-input v-model="signup.id" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password"
                :rules="{required:true,message:'密码不能为空',trigger:'blur'}"
            > 
                <el-input v-model="signup.password" type="password"></el-input>
            </el-form-item>

            <el-form-item label="邮箱地址" prop="email"
                :rules="{required:true,message:'邮箱地址不能为空',trigger:'blur'}"
            >
                <el-input v-model="signup.email" placeholder="邮箱地址"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captchacode"
                :rules="{required:true,message:'验证码不能为空',trigger:'blur'}"
            > 
                <el-input v-model="signup.captchacode" placeholder="验证码" style="width: 115px;"></el-input>
                <span style="font-size: smaller; float: right;" @click="getCaptchacode()">获取邮箱验证码
                    <el-statistic
                    ref="statistic"
                    :value="deadline"
                    format="ss"
                    time-indices
                    
                    >
                    </el-statistic>
                </span>
                    
            </el-form-item>
            
            <router-link to="/login" style="font-size:smaller; float:left;">去登录</router-link><br>
            <el-form-item size="large">
                <el-button type="primary">注册</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            signup:{
                username:"",
                email:"",
                password:"",
                captchacode:"",
                id:""
            },
            deadline:Date.now()+1000*60
        }
    },
    methods:{
        getCaptchacode:function(){
            if(this.signup.email!=null){
                axios.post("http://localhost:8080/signup/getCaptcha")
            }else{
                this.open2("请填写邮箱地址！");
            }
        },
        Signup:function(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    axios.post("http://localhost:8080/signup/VerifyAndInsert").then((result)=>{
                        if(result.data.code==200){
                            this.open1("恭喜您，注册成功！");
                            this.$route.push("/login");
                        }else{
                            this.open3("验证码错误请重新填写！");
                        }
                    })
                }
            });
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
    }
}
</script>

<style>
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

</style>