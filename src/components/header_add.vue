<template>
  <div class="header_add">
    <div class="header_title">协作项目</div>
    <div class="add">
      <Icon type="plus-circled" @click="modal1 = true"></Icon>
    </div>
    <div>|</div>
    <div class="filter">
      <Icon type="funnel"></Icon>&nbsp;&nbsp;筛选
    </div>
    <Modal v-model="modal1" title="新建项目" :styles="{top: '20px'}" @on-ok="ok" @on-cancel="cancel">
      <div style='height:300px;overflow-y:auto'>
        <Form :model="formItem" :label-width="100">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入项目名称"></Input>
          </FormItem>
        </Form>
        <div style='margin-top:20px;display:flex'>
          <Card style="flex:1;height:100px">
            <div style='cursor: pointer;'>
              <p style='margin-bottom:10px'>我负责的</p>
              <img src="http://www.soideas.cn/uploads/allimg/141214/3-www.soideas.cn141214154540.jpg" alt="" style='width=30px;height:30px;border-radius:50%;vertical-align: middle;'>
              <span>郑翔</span>
            </div>

          </Card>
          <Card style="flex:1;height:100px">
            <div>
              <p>截止时间</p>
              <div style='margin-top:10px;'>
                <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
              </div>
            </div>
          </Card>
        </div>
        <div>
          更多信息
        </div>
        <div>
          <div>
            <p>项目类型</p>
            <Row>
              <Col span="12" style="padding-right:10px">
              <Select v-model="model11" filterable>
                <Option v-for="item in project_types" :value="item.type_id" :key="item.type_id">{{ item.name }}</Option>
              </Select>
              </Col>

            </Row>
            </Form>
          </div>
          <div style="display:flex;margin-top:10px">
            <span>标签</span>
            <div class="content_frame">
              <div v-for="(label, index) in system_labels">
                <labeltodelete v-bind:name="label.name" v-bind:id="label.id"></labeltodelete>
              </div>
              <div style='line-height: 28px; color: #54c7fc;'>
                <Icon type="plus-circled"></Icon> 添加
              </div>
            </div>

          </div>
          <div style="display:flex;margin-top:10px">
            <span>成员</span>
            <div class="content_frame">
              <div v-for="(member, index) in project_members">
                <labeltodelete v-bind:name="member.pm_name" v-bind:id="member.pm_id"></labeltodelete>
              </div>
              <div style='line-height: 28px; color: #54c7fc;'>
                <Icon type="plus-circled"></Icon> 添加
              </div>
            </div>
          </div>

        </div>
      </div>
      <div slot="footer">
        <Button @click="cancel">取消</Button>
        <Button type='info' @click="ok">确定</Button>
      </div>
    </Modal>

  </div>
</template>

<script>
import { Modal, Icon, Form, FormItem, Card, DatePicker, Row } from "iview";
import label_to_delete from "./label_components/label_be_delete";
export default {
  name: "headerAdd",
  data() {
    return {
      modal1: false,
      model11: '',
      formItem: {textarea: ''},
      project_types: [{ type_id: '1', name: '实施项目' }, { type_id: '2', name: '销售项目' }, { type_id: '3', name: '其他项目' }],
      system_labels: [{ label_id: '1', name: '标签1' }, { label_id: '2', name: '标签2' }, { label_id: '3', name: '标签3' }],
      project_members: [{ pm_id: '1', pm_name: '张连' }, { pm_id: '2', pm_name: '小梅' }, { pm_id: '3', pm_name: '李雷' }]
    }
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
      this.modal1 = false;
    },
    cancel() {
      this.$Message.info("Clicked cancel");
      this.modal1 = false;
    }
  },
  computed: {},
  components: {
    Modal: Modal,
    Icon: Icon,
    Form: Form,
    FormItem: FormItem,
    Card: Card,
    DatePicker: DatePicker,
    labeltodelete: label_to_delete,
    Row: Row
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
  font-size: 18px
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
  display: flex;
}
</style>
