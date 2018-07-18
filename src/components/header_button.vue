<template>
<div class="title_button" v-bind:class="{ active:isActive}">
  <span class="name">{{name}}</span>
   <span class='num'>{{num}}</span>
</div>
    
</template>

<script>
export default {
  name: "headerButton",
  data(){
      return{
          isActive:false
      }
  },
  props: ["name", "num","index","current"],
  methods: {
    changeActive() {
        console.log(this.index)
         console.log(this.current)
        this.isActive=!this.isActive
    }
  },
  computed: {}
};
</script>

<style scoped>
.title_button {
  font-size: 16px;
  margin-right: 40px;
  cursor: pointer;
  height: 75%;
}
.title_button .name {
}
.title_button .num {
  color: #54c7fc;
}
.title_button.active {
    color: #54c7fc;
    border-bottom: 2px solid #54C7FC;
}
</style>
