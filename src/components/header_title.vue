<template>
  <div class="button_wrap">
    <div v-for="(button, index) in buttons">
      <headerbotton v-bind:name="button.name" v-bind:num="button.num" v-bind:index="index" @click.native="changeIndex(index)" v-bind:class="[{active:index==current_index},button.id]"/>
    </div>
  </div>
</template>

<script>
import headerbotton from "./header_button";
import { createStore } from '../store'

export default {
  name: "header_title",
  data() {
    return {
      current_index: 0,
      buttons: [
        {
          name: "全部任务",
          num: 40,
          id:'with_all'
        },
        {
          name: "按优先级",
          num: 40,
          id:'with_priority'
        },
        {
          name: "自定义看板",
          num: 40,
          id:'with_custom'
        },
        {
          name: "按截止日期",
          num: 40,
          id:'with_end'
        },
        {
          name: "最近完成任务",
          num: 40,
          id:'with_finished'
        },
        {
          name: "按更新日期",
          num: 40,
          id:'with_update'
        }
      ]
    };
  },
  components: {
    headerbotton: headerbotton
  },
  methods: {
    changeIndex(index) {
       this.current_index = index;
       let classNames=event.currentTarget.className;
       let classNames_index=classNames.indexOf('with')
       console.log(classNames.substring(classNames_index))
    }
  },
};
</script>

<style>
.button_wrap {
  padding-left: 20px;
  display: flex;
  height: 59px;
  background-color: white;
  line-height: 59px;
  margin:0 20px;
}
.title_button {
  font-size: 16px;
  margin-right: 40px;
  cursor: pointer;
  height: 75%;
}

.title_button .num {
  color: #54c7fc;
  visibility: hidden;
}

.title_button.active {
  color: #54c7fc;
  border-bottom: 2px solid #54C7FC;
}

.title_button.active .num {
  visibility: visible;
}
</style>

