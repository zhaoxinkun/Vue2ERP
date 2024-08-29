/**
* Create by TomOne
* E-mail: [email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-yjshash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-yjsemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */
* Description：index
* Date: 2024-08-22 14:08
* Update: 2024-08-22 14:08
*/
<template>
  <!--  头部-->
  <div class="login-head">
    <!--    背景图-->
    <div class="login-img"></div>
    <!--    中心-->
    <div class="about">

      <h2 style="margin-bottom: 20px">Vue2流程管理系统</h2>

      <!--      表单--这里的v-from其实就是一级父组件了,所以才能给el-from-item传递prop-->
      <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm">
        <el-form-item label="用户名" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>

        <!--        按钮-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
//  导入我们封装的aixos
// import axios from "@/utils/request"

// 导入md5加密
import md5 from "md5"

// 导入login请求
import {login} from "@/api/api"

// 存储token
import {setToken} from "@/utils/token";

// 导入element-ui的消息提示框
import {Message} from "element-ui";

export default {
  name: "login",
  data() {
    // 函数校验
    // const validaPhone = (rule, value, callback) => {
    //   let regx = /^1[345678]\d{9}$/
    //   if (!value) {
    //     return callback(new Error("请输入手机号"))
    //   }
    //   if (!regx.test(value)) {
    //     return callback(new Error("请输入正确的手机号"))
    //   }
    // });
    return {
      // 自定义数据
      ruleForm: {
        account: "admin",
        password: "admin@123"
      },
      // 自定义校验规则---基本校验
      rules: {
        account: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入用户密码', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
      },
      // // 函数校验
      // rules:{
      //   account: [
      //     { validator:validaPhone,required: true, message: '请输入用户名称', trigger: 'blur'},
      //
      //   ],
      // }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        // 一种验证,通过验证
        if (valid) {
          // md5加密密码
          this.ruleForm.password = md5(this.ruleForm.password)

          // 配置请求
          // axios({
          //   method: "post",
          //   url: `user/login`,
          //   data: this.ruleForm
          // }).then(res => res)

          // 或
          // login(this.ruleForm).then(res => res)
          // 发送请求
          const res = await login(this.ruleForm)
          console.log("login request in login/index.vue res is ", res);

          // 解构结果
          let {code, data, msg} = res.data;
          if (code === 20000) {
            Message({
              // 弹出的信息
              message: msg || "请求成功",
              // 类型
              type: "success",
              // 持续时间
              duration: 2000
            })
            // 路由跳转
            await this.$router.push("/home")
            // 存储token
            setToken(data.token);
            console.log("now this path is ", this.$route.path, "this route name is  ", this.$route.name)
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {

  }
}

</script>


<style scoped lang="scss">

</style>
