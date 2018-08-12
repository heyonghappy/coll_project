<template>
   <transition name='fade'>
       <p v-show="pageAnimated" style="padding: 20px;"> 退出登录 </p>
   </transition>
    
</template>
<script>
import Cookies from "universal-cookie";
import config from "config";

export default {
  beforeMount() {
    this.logOut();
  },
  methods: {
    logOut() {
      const cookies = new Cookies();
      this.$ls.remove("user");
      cookies.remove(config.cookie_namespace);
      this.$router.push("/login");
    }
  }
};
</script>



