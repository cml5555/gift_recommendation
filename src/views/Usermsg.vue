<template>
  <div style="text-align: center">
    <el-form ref="form"
             style="width: 400px;margin: 0 auto"
             :rules="rules" :model="form"
             label-width="80px">
      <el-form-item label="学号" style="margin-top:20px">
        <el-input disabled v-model="user.account"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name" style="margin-top:-550px">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" style="margin-top:-480px">
        <el-input v-model="user.password" show-password></el-input>
      </el-form-item>
      <el-form-item style="margin-top:-400px">
        <el-button type="primary" @click="onSubmit">修改</el-button>
        <el-button @click="$router.push('/')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import {updateUserRequest} from "@/api/user";

export default {
  name: "Usermsg",
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem('admin')),
    }
  },
  computed: {},
  methods: {

    //点击修改信息
    onSubmit() {
      if (this.user.username.length === 0) {
        this.$message.warning("用户名不能为空")
        return
      }
      if (this.user.password.length === 0) {
        this.$message.warning("用户密码不能为空")
        return;
      }
      updateUserRequest({
        "account": this.user.account,
        "password": this.user.password,
        "username": this.user.username,
      }).then(res => {
        if (res.status === 200) {
          this.$message.success("修改成功,请重新登录");
          sessionStorage.setItem("admin", null);
          this.$router.push("/login");
        }
      })

    }
  },
  mounted() {
    this.getaxioxData()
  }
}
</script>

<style scoped>

</style>