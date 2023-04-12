<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">登录</div>
      <div class="form-wrapper">
        <input type="text" v-model="email" placeholder="请输入账号" class="input-item">
        <input type="password" v-model="password" class="input-item">
        <div id="login" class="btn" @click="login">Login</div>
      </div>
      <div class="msg">
        还没有账号?
        <div v-on:click="gotoRegister()" class="register">注册</div>
      </div>
    </div>
  </div>
</template>


<script>

import {loginRequest} from "@/api/user";

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  mounted() {
    this.email = this.$route.query.email;
    this.password = this.$route.query.password;
  },
  methods: {
    gotoRegister() {
      console.log("hello");
      this.$router.push('/register');
    },
    login() {
      loginRequest({
        "email": this.email,
        "password": this.password
      }).then(res => {
        if (res.status === 200) {
          if (res.data.code === 200) {
            sessionStorage.setItem("token", JSON.stringify(res.data.data.token));
            this.$message({
              type: "success",
              message: "登录成功！",
            });
            setTimeout(() => {
              this.$router.push("/");
            }, 500);
          } else {
            this.$message.error("账号或密码错误");
          }
        }
      })
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans Light';
  letter-spacing: .05em;
}

.container {
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 250px;
  height: 500px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  border-radius: 15px;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-wrapper .header {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.login-wrapper .form-wrapper .input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: none;
  padding: 10px;
  border-bottom: 2px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}

.login-wrapper .form-wrapper .input-item::placeholder {
  text-transform: uppercase;
}

.login-wrapper .form-wrapper .btn {
  text-align: center;
  padding: 5px;
  margin-top: 40px;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);;
  color: #fff;
  cursor: pointer;
}

.login-wrapper .msg {
  text-align: center;
  line-height: 80px;
}

.login-wrapper .msg .register {
  text-decoration-line: none;
  color: #a6c1ee;
  display: inline;
  cursor: pointer;
}
</style>