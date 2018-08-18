<template>
   <transition name='fade'>
       <p v-show="pageAnimated" style="padding: 20px;"> 退出登录 </p>
   </transition>
    
</template>
<script>
import Cookies from "universal-cookie";
import setting from '../../setting.js'

export default {
  beforeMount() {
       console.log('logout1')
    this.logOut();
  },
  methods: {
    logOut() {
        console.log('logout2')
      const cookies = new Cookies();
      this.$ls.remove("user");
      cookies.remove(setting.cookie_namespace);
      this.$router.push("/login");
    }
  }
};
</script>



