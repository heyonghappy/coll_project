<template>
  <div class="header_add">
    <div class="header_title">协作项目</div>
    <div class="add">
      <div @click="modal1 = true">+</div>
    </div>
    <div>|</div>
    <div class="filter">筛选</div>
    <Modal v-model="modal1" title="新建项目" @on-ok="ok" @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
 
  </div>
</template>

<script>
import { Modal } from "iview";
export default {
  name: "headerAdd",
  data() {
    return {
      modal1: false
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  },
  computed: {},
  components:{
    Modal:Modal
  }
};
</script>

<style scoped>
.header_add {
  padding-left: 20px;
  display: flex;
  height: 59px;
  background-color: white;
  line-height: 59px;
  margin: 0 20px 1px;
}

.header_add .header_title {
  flex: 1;
  text-align: left;
  font-size:18px
}

.header_add .add {
  width: 100px;
}
.header_add .add div {
  height: 30px;
  width: 30px;
  background-color: #54c7fc;
  margin: 13px auto;
  border-radius: 50%;
  color: white;
  font-weight: bolder;
  line-height: 170%;
  font-size: 18px;
  cursor: pointer;
}
.header_add .filter {
  width: 100px;
  cursor: pointer;
}
</style>
