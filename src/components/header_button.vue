<template>
  <div class="title_button" >
    <span class="name">{{name}}</span>
    <span class='num'>{{num}}</span>
  </div>
</template>

<script>
import { store } from '../vuex'
export default {
  name: "headerButton",
  data() {
    return {
      isActive: false,
      current_index: 0
    }
  },
  props: ["name", "num", "index", "current"],
  methods: {
    // changeActive(index) {
    //    this.isActive =!this.isActive;
    //    store.state.current_index=index;
    //    this.$emit('changeIndex')

    // }
  },
  computed: {}
};
</script>

<style scoped>

</style>
