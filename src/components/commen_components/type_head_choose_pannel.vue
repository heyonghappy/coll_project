<template>
    <div v-show="is_show" class="wrap" style='position:fixed;z-index:2000' v-bind:style="{'left':left,'top':top}" ref='myWrap'>
        <div class="title_wrap">
            <div style='flex:1'>
                {{title}}
            </div>
            <div style='width:30px' class="close">
                <Icon type="close" @click="cancel"></Icon>
            </div>

        </div>
        <div>
            <Row>
                <Select v-model="model1" filterable style="width:180px;padding-right:10px;margin-top:10px;margin-left:10px">
                    <Option v-for="item in datas" :value="item.id" :key="item.id">{{ item.chinese_name }}</Option>
                </Select>
            </Row>
        </div>
        <div style='position:absolute;bottom:10px;margin-left:30px'>
            <Button @click="cancel" style='margin-right:20px'>取消</Button>
            <Button type='info' @click="ok">确定</Button>
        </div>

    </div>
</template>
<script>
import { Icon, Row, Button, Col } from "iview";
export default {
  name: "type_head_choose_pannel",
  props: ["title", "position", "datas", "isShow"],
  data() {
    return {
      model1: "",
      wrap_top: 0,
      wrap_left: 0,
      is_show: this.isShow
    };
  },
  created() {},
  mounted() {
    this.wrap_top = +window
      .getComputedStyle(this.$refs.myWrap)
      .height.split("p")[0];
    this.wrap_left = +window
      .getComputedStyle(this.$refs.myWrap)
      .width.split("p")[0];
  },
  methods: {
    cancel() {
      this.is_show = false;
    },
    ok() {
      this.is_show = false;
      this.$emit("get-id", this.model1);
    }
  },
  computed: {
    top: function() {
      return this.position.y + this.wrap_top + "px";
    },
    left: function() {
      return this.position.x + this.wrap_left + "px";
    }
  },
  watch: {
    isShow(val) {
      this.is_show = val;
    },
    is_show(val) {
      //主要是将是否隐藏传递出去
      this.$emit("show-typehead", val);
    }
  },
  components: {
    Icon: Icon,
    Row: Row,
    Button,
    Button,
    Col: Col
  }
};
</script>
<style    scoped>
.wrap {
  width: 200px;
  height: 180px;
  background-color: white;
  box-shadow: 2px 2px 8px 2px #999999;
  color: #666;
}

.title_wrap {
  background-color: #f8f8f8;
  height: 30px;
  line-height: 30px;
  display: flex;
  font-size: 15px;
}

.close {
  cursor: pointer;
}

.close:hover {
  color: #54c7fc;
}
</style>
 


