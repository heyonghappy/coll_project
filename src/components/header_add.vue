<template>
  <div>
    <div class="header_add">
      <div class="header_title">协作项目</div>
      <div class="add">
        <Icon type="plus-circled" @click="modal1 = true"></Icon>
      </div>
      <div>|</div>
      <div class="filter" @click="showfilter">
        <Icon type="funnel"></Icon>&nbsp;&nbsp;筛选
      </div>
      <Modal v-model="modal1" title="新建项目" :styles="{top: '20px'}" @on-ok="ok" @on-cancel="cancel">
        <div style='overflow-y:auto' v-bind:style="{ 'height': create_show_more ?'230px':'300px' }">
          <Form :model="formItem" :label-width="100">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入项目名称"></Input>
            </FormItem>
          </Form>
          <div style='margin-top:20px;display:flex'>
            <Card style="flex:1;height:100px">
              <div style='cursor: pointer;' @click='show_people_choose_typehead' >
                <p style='margin-bottom:10px'>我负责的</p>
                <img :src="pm.Avatar?pm.Avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3198678185,878755003&fm=27&gp=0.jpg'" alt="" style='width=30px;height:30px;border-radius:50%;vertical-align: middle;'>
                <span>{{pm.chinese_name}}</span>
              </div>

            </Card>
            <Card style="flex:1;height:100px">
              <div>
                <p>截止时间</p>
                <div style='margin-top:10px;'>
                  <DatePicker type="date" placeholder="Select date" style="width: 200px;position:relative;z-index:1050"></DatePicker>
                </div>
              </div>
            </Card>
          </div>
          <div style='color: #54c7fc; margin:10px 0;cursor:pointer' @click="show_more_info" v-show="create_show_more">
            更多信息
          </div>
          <div v-show="!create_show_more"  style='margin-top:10px'>
            <div>
              <span style=' float: left;  margin-right: 10px; margin-top: 5px;'>项目类型</span>
              <Row style='position:relative;z-index:1002'>
                <Col span="12" style="padding-right:10px">
                <Select v-model="model11" filterable>
                  <Option v-for="item in project_types" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
                </Col>
              </Row>
              </Form>
            </div>
            <div style="margin-top:10px;display:flex;">
              <span>标签</span>
              <ul class="content_frame">
                <li v-for="(label, index) in system_labels" style=''>
                  <labeltodelete v-bind:name="label.name" v-bind:id="label.id"></labeltodelete>
                </li>

                <li style='line-height: 28px; color: #54c7fc;margin-left:10px; cursor: pointer;'>
                  <Icon type="plus-circled"></Icon> 添加
                </li>
              </ul>

            </div>
            <div style="display:flex;margin-top:10px">
              <span>成员</span>
              <ul class="content_frame">
                <li v-for="(member, index) in project_members" style=''>
                  <labeltodelete v-bind:name="member.pm_name" v-bind:id="member.pm_id"></labeltodelete>
                </li>
                <li style='line-height: 28px; color: #54c7fc; margin-left:10px; cursor: pointer;'>
                  <Icon type="plus-circled" @click="show_people_pannel"></Icon> 添加
                </li>
              </ul>
            </div>
            <div style='text-align:right'>
              <Button type='info' style='margin-top:10px;' @click="show_less_info">收起</Button>
            </div>

          </div>
        </div>
        <div slot="footer">
          <Button @click="cancel">取消</Button>
          <Button type='info' @click="ok">确定</Button>
        </div>
      </Modal>

    </div>
    <div>
      <headerfilter v-show="filter_show"></headerfilter>

    </div>
    <thchoosepannel v-bind:title="123" v-bind:position="type_head_choose_pannel_position" v-bind:datas="type_head_choose_pannel_data" v-bind:isShow="type_head_choose_pannel_show" v-on:show-typehead="type_head_choose_pannel_change" v-on:get-id="get_datas_id" ></thchoosepannel>

  </div>
</template>

<script>
import { Modal, Icon, Form, FormItem, Card, DatePicker, Row } from "iview";
import label_to_delete from "./label_components/label_be_delete";
import header_filter from "./header_filter";
import type_head_choose_pannel from "./commen_components/type_head_choose_pannel";

export default {
  name: "headerAdd",
  data() {
    return {
      modal1: false,
      model11: "",
      filter_show: false,
      create_show_more: true,
      formItem: { textarea: "" },
      system_labels: [
        // { label_id: "1", name: "标签标签1" }
      ],
      project_members: [
        // { pm_id: "1", pm_name: "张连" },
      ],
      type_head_choose_pannel_position: { x: "", y: "" },
      type_head_choose_pannel_show: false,
      pm: this.$ls.get("user")
    };
  },
  mounted() {},
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
      this.modal1 = false;
    },
    cancel() {
      this.$Message.info("Clicked cancel");
      this.modal1 = false;
    },
    showfilter() {
      this.filter_show = !this.filter_show;
    },
    show_more_info() {
      this.create_show_more = !this.create_show_more;
    },
    show_less_info(e) {
      this.create_show_more = true;
    },
    show_people_pannel() {},
    show_people_choose_typehead(e) {
      this.type_head_choose_pannel_position.x = e.pageX;
      this.type_head_choose_pannel_position.x = e.pageY;
      this.type_head_choose_pannel_show = true;
      if (this.$store.state.persons.all_person_list.length == 0) {
        return this.$store.dispatch("persons/GET_ALL_PERSON_LIST");
      }
    },
    type_head_choose_pannel_change(val) {
      this.type_head_choose_pannel_show = val;
    },
    get_datas_id(val) {
      let projectMgr = this.$store.state.persons.all_person_list.filter(
        function(item) {
          return item.id == val;
        }
      );
      this.pm = projectMgr[0];
    }
  },
  computed: {
    type_head_choose_pannel_data: function() {
      return this.$store.state.persons.all_person_list;
    },
    project_types: function() {
      return this.$store.state.project_accessory.project_types;
    }
  },
  watch: {
    modal1: function(curVal, oldVal) {
      if (curVal) {
        return this.$store.dispatch("project_accessory/GET_PROJECT_TYPES");
      }
    }
  },
  components: {
    Modal: Modal,
    Icon: Icon,
    Form: Form,
    FormItem: FormItem,
    Card: Card,
    DatePicker: DatePicker,
    labeltodelete: label_to_delete,
    Row: Row,
    headerfilter: header_filter,
    thchoosepannel: type_head_choose_pannel
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
  font-size: 18px;
}

.header_add .add {
  width: 50px;
  font-size: 29px;
  color: #54c7fc;
  cursor: pointer;
}

.header_add .filter {
  width: 75px;
  cursor: pointer;
  font-size: 14px;
}

.content_frame {
  border: 1px solid #ccc;
  flex: 1;
  margin-left: 10px;
  min-height: 30px;
  margin-right: 10px;
  list-style: none;
  /*display: flex;*/
}

.content_frame > li {
  float: left;
}
</style>
