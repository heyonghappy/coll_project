<template>
<div class="button_wrap">
    <div v-for="(button , index) in buttons" >
      <headerbotton v-bind:name="button.name" v-bind:num="button.num" v-bind:index="index"  @click="changeActive(index)"/>
    </div>    
</div>
    
</template>

<script>
import headerbotton from "./header_button";

export default {
  name: "header_title",
  data() {
    return {
    current_index:0,
      buttons: [
        {
          name: "全部任务",
          num: 40
        },
        {
          name: "按优先级",
          num: 40
        },
        {
          name: "自定义看板",
          num: 40
        },
        {
          name: "按截止日期",
          num: 40
        },
        {
          name: "最近完成任务",
          num: 40
        },
        {
          name: "按更新日期",
          num: 40
        }
      ]
    };
  },
  components: {
    headerbotton: headerbotton
  },
   methods: {
    changeActive(index) {
        console.log(index)
         console.log(this.current)

    }
  },
};
</script>

<style>
.button_wrap{
    padding-left: 20px;
    display: flex;
    height: 59px;
    background-color: white;
    line-height: 59px
}
</style>

