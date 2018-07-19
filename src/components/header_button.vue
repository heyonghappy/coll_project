<template>
  <div class="title_button">
    <span class="name">{{name}}</span>
    <span class='num'>{{num}}</span>
  </div>
</template>

<script>
export default {
  name: "headerButton",
  data() {
    return {
    }
  },
  props: ["name", "num", "index"],
  methods: {
  },
  computed: {
 
  }
};
</script>

<style scoped>

</style>
