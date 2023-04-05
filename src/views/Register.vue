<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">注册</div>
      <div class="form-wrapper">
        <input type="text" v-model="email" placeholder="邮箱" class="input-item">
        <input type="text" v-model="name" placeholder="用户名" class="input-item">
        <input type="password" v-model="password" placeholder="密码" class="input-item">
        <input type="text" v-model="verifyCode" placeholder="验证码" class="verifyCode">
        <button :disabled="isDisabled" style="display: inline"
                :class="{ 'button': true, 'disabled': isDisabled }"
                @click="sendVerifyCode">发送验证码
        </button>
        <div id="login" @click="register" class="btn">注册</div>
      </div>
    </div>
  </div>
</template>


<script>
import {getVerifyCodeRequest, registerRequest} from "@/api/user";

export default {
  data() {
    return {
      email: 'chenmaolai156@gmail.com',
      password: '123456',
      name: 'cml',
      verifyCode: '',
      isDisabled: false,
    };
  },
  methods: {
    sendVerifyCode() {
      getVerifyCodeRequest(this.email).then(res => {
        if (res.status === 200) {
          this.$message.success("发送成功，请在邮箱查看")
        }
      })
      this.isDisabled = true;
      setTimeout(() => {
        this.isDisabled = false;
      }, 60000)
    },
    register() {
      registerRequest({
        "email": this.email, //电子邮箱，比如 example@qq.com
        "name": this.name, //用户名
        "password": this.password, //密码
        "verificationCode": this.verifyCode //验证码
      }).then(res => {
        if (res.status === 200) {
          this.$message.success("注册成功，为您跳转到登录页面")
          this.$router.push({path: '/login', query: {email: this.email,password:this.password}})
        }
      })
    }
  },
};
</script>

<style scoped>
.disabled {
  background-color: #ddd !important;
  color: #999 !important;
  cursor: not-allowed !important;
}

.button {
  background-color: #f06292;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

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
  line-height: 150px;
}

.login-wrapper .form-wrapper .verifyCode {
  display: inline;
  width: 50%;
  margin-bottom: 20px;
  border: none;
  padding: 10px;
  border-bottom: 2px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
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
}
</style>