<template>
  <el-container>
    <div height="100px" width="100%"></div>
    <el-form ref="form" :model="form" class="demo-form-inline">
      <el-form-item>
        <el-input
          prefix-icon="el-icon-user-solid"
          placeholder="User name"
          v-model="form.account"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          prefix-icon="el-icon-lock"
          placeholder="Password"
          v-model="form.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="12">
          <el-input
            prefix-icon="el-icon-warning-outline"
            placeholder="Code"
            v-model="form.validate"
          ></el-input>
        </el-col>
        <el-col :span="12">
          <img
            :src="'data:image/png;base64,' + postbody"
            alt=""
            @click="handleClick()"
          />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col>
          <el-button type="primary" style="width:100%" @click="Submit()"
            >Sign In</el-button
          >
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="5">
          <router-link to="/register">register</router-link>
        </el-col>
        <el-col :span="2">
          <el-link type="info">Forget</el-link>
        </el-col>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
        validate: "",
      },
      postbody: "",
      errors: [],
    };
  },
  created() {
    axios
      .get(`/user/verify/image`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.postbody = response.data.data.img;
        //console.log(response);
        //console.log(response.data.data.img);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    /*handlClick 方法 在template 里面点击的时候就会调用*/
    handleClick() {
      axios
        .get(`/user/verify/image`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.postbody = response.data.data.img;
          //console.log(response);
          //console.log(response.data.data.img);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    Submit() {
      axios
        .post(`user/login`, this.form)
        .then((response) => {
          this.$message(response.data.msg);
          console.log(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style scoped>
.el-form {
  position: absolute;
  top: 20%;
  left: 60%;
  height: 370px;
  width: 350px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: whitesmoke;
}
.el-form .el-form-item {
  margin: 5%;
  padding-top: 15px;
  top: 10px;
}
.el-container {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 700px;
  background-image: url(./overview.jpg);
  background-repeat: no-repeat;
}
</style>
