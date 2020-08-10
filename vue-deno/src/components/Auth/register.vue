<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="NT account" prop="NT">
      <el-input v-model="ruleForm.NT" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="comfirm" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    var checkNT = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("empty is not allowed"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("input again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("make sure same!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        NT: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        NT: [{ validator: checkNT, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-form {
  position: absolute;
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
