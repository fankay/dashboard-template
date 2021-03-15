<template>
  <div id="login">
    <div class="login_panel shadow">
      <h1 class="title">系统登录</h1>
      <el-form ref="loginForm" :model="form" :rules="rules" label-width="60px">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" name="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    });

    const loginForm = ref(null)

    const onSubmit = () => {
      loginForm.value.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return {
      ...toRefs(state),
      onSubmit,
      loginForm
    };
  },
};
</script>

<style lang="less">
#login {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/dy.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_panel {
    width: 500px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    .title {
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>