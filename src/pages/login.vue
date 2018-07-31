<template>
    <div class="login-wrap">
        <div style='font-size:20px;color:rgba(84, 199, 252, 1)'>登录</div>

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
        
    </div>
</template>
<script>
import { Input, Icon, Button } from "iview";

export default {
  name: "login",
  components: {
    Icon: Icon,
    Input: Input,
    Button: Button
  },
  data: {
    login_name: "",
    password: ""
  }
};
</script>

<style>
.login-wrap {
  width: 290px;
  height: 200px;
  border-radius: 5px;
  background-color: rgba(84, 199, 252, 0.4);
  margin: 20px auto;
  padding: 20px;
}
</style>

