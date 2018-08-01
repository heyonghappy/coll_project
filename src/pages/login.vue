<template>
<div class="login-wrap">
        <Tabs value="name1">
        <TabPane label="登录" name="name1">
            <div style="margin-top: 6px">
                <Input v-model="login_name" placeholder="用户名" size="large" style="width: auto" prefix="ios-contact"> 
                </Input>
                <div style='margin-top:10px;'>
                </div>
                <Input v-model="password"  placeholder="密码" size="large" style="width: auto" prefix="ios-search" type='password'>
                </Input>
            </div>
    <div style='margin-top:10px;text-align:right;margin-right:40px'>
        <Button type="info" @click='login'>登录</Button>
    </div>
        </TabPane>
        <TabPane label="注册" name="name2">
                        <div style="margin-top: 6px">
                <Input v-model="login_name" placeholder="用户名" size="large" style="width: auto" prefix="ios-contact"> 
                </Input>
                <div style='margin-top:5px;'>
                </div>
                <Input v-model="password"  placeholder="密码" size="large" style="width: auto" prefix="ios-search" type='password'>
                </Input>
               <div style='margin-top:5px;'>
                </div>
                <Input v-model="confirm_password"  placeholder="确认密码" size="large" style="width: auto" prefix="ios-search" type='password'>
                </Input>
            </div>
    <div style='margin-top:10px;text-align:right;margin-right:40px'>
        <Button type="info" @click='register'>注册</Button>
    </div>
                  
        </TabPane>
 
    </Tabs>
    <Alert type="error" v-show="isError" style="position:fixed; top:10px;left:45%">{{error_info}}</Alert>

</div>


 

 
</template>
<script>
import { Input, Icon, Button, Tabs, TabPane, Alert } from "iview";
import bcrypt from "bcryptjs";
import { axiosInstance } from "../api";

export default {
  name: "login",
  components: {
    Icon: Icon,
    Input: Input,
    Button: Button,
    Tabs: Tabs,
    TabPane: TabPane,
    Alert: Alert
  },
  data() {
    return {
      login_name: "",
      password: "",
      confirm_password: "",
      error_info: "",
      isError: false
    };
  },
  methods: {
    login() {
      if (!this.login_name || !this.password) {
        this.error_info = "用户名密码不能为空";
        this.isError = true;
        setTimeout(() => {
          this.error_info = "";
          this.isError = false;
        }, 2000);
        return;
      }
      let salt = bcrypt.genSaltSync(12);
      let password = bcrypt.hashSync(this.password, salt);
      axiosInstance({
        url: "/person/login",
        method: "post",
        login_name: this.login_name,
        password: password
      })
        .then(result => {
          if (result.status == 200) {
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    register() {
      if (!this.login_name) {
        this.error_info = "用户名不能为空";
        this.isError = true;
        this.login_name = "";
        setTimeout(() => {
          this.error_info = "";
          this.isError = false;
        }, 2000);
        return;
      }
      if (this.password.length < 6 || this.confirm_password < 6) {
        this.error_info = "密码长度要大于6位";
        this.isError = true;
        this.password = "";
        this.confirm_password = "";
        setTimeout(() => {
          this.error_info = "";
          this.isError = false;
        }, 2000);
        return;
      }
      if (this.password !== this.confirm_password) {
        this.error_info = "密码和确认密码不匹配";
        this.isError = true;
        this.password = "";
        this.confirm_password = "";
        setTimeout(() => {
          this.error_info = "";
          this.isError = false;
        }, 2000);
        return;
      }
      let salt = bcrypt.genSaltSync(12);
      let password = bcrypt.hashSync(this.password, salt);
      axiosInstance({
        url: "/person/register",
        method: "post",
        login_name: this.login_name,
        password: password
      })
        .then(result => {
          if (result.status == 200) {
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.login-wrap {
  width: 290px;
  height: 250px;
  border-radius: 5px;
  background-color: rgba(84, 199, 252, 0.4);
  margin: 15% auto;
  padding: 20px;
}
</style>

