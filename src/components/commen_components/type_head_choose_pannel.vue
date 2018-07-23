<template>
    <div v-show="is_show" class="wrap">
        <div class="title_wrap">
            <div style='flex:1'>
                {{title}}
            </div>
            <div style='width:30px'>
                 <Icon type="close" ></Icon>
            </div>
           

        </div>
        <div>
            <Row>
                <Col span="12" style="padding-right:10px">
                <Select v-model="model1" filterable>
                    <Option v-for="item in datas" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
                </Col>

            </Row>

        </div>
        <div style='position:fixed;botton:10px'>
            <Button @click="cancel">取消</Button>
            <Button type='info' @click="ok">确定</Button>
        </div>

    </div>
</template>
<script>
import { Icon, Row, Button } from "iview"
export default {
    name: 'type_head_choose_pannel',
    props: ['title', 'position', 'datas'],
    data() {
        return {
            model1: '',
            is_show: true
        }
    },
    methods: {
        cancel() {
            this.is_show = false;

        },
        ok() {
            this.is_show = false;
            console.log(model1)
        }
    },
    components: {
        Icon: Icon,
        Row: Row,
        Button, Button


    }


}
</script>
<style    scoped>
.wrap {
    width: 200px;
    height: 180px;
    background-color: white;
    box-shadow: 2px 2px 8px 2px #999999;
    color:#666;
}

.title_wrap {
    background-color: #f8f8f8;
    height: 30px;
    line-height: 30px;
    display: flex;
    font-size: 15px;
}
</style>
 


