<template>
<div>
<div>
  <headeradd/>
<headertitle/>
</div>
</div>

    
</template>

<script>
import headertitle from "../components/header_title";
import headeradd from "../components/header_add";
export default {
  name: "index",
  components: {
    headertitle: headertitle,
    headeradd:headeradd
  }
};
</script>

<style>
</style>

