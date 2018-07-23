<template>
    <div class="filter_wrap">
        <div v-for="(filteritem,index) in filter_items" class="filter-button_wrap">
            <span class="filter-name">{{filteritem.name}}:</span>
            <div v-for="item in filteritem.items">
                <filterbutton v-bind:name="item.name" v-bind:id="item.data_id" v-bind:type="item.type">
                </filterbutton>

            </div>
        </div>

    </div>
</template>
<script>

import filter_button from './label_components/filter_button'
export default {
    name: 'header_filter',
    data() {
        return {
            filter_items: [
                { name: '项目状态', items: [{ name: '全部项目', data_id: 'all', type: 'primary' }, { name: '正常项目', data_id: 'normal', type: 'ghost' }, { name: '超时项目', data_id: 'overtime', type: 'ghost' }, { name: '完成项目', data_id: 'finished', type: 'ghost' }] },
                { name: '项目级别', items: [{ name: '全部项目', data_id: 'all', type: 'primary' }, { name: '高优先级', data_id: 'high', type: 'ghost' }, { name: '中优先级', data_id: 'mid', type: 'ghost' }, { name: '低优先级', data_id: 'low', type: 'ghost' }] },
                { name: '项目级别', items: [{ name: '全部项目', data_id: 'all', type: 'primary' }, { name: '高优先级', data_id: 'high', type: 'ghost' }, { name: '中优先级', data_id: 'mid', type: 'ghost' }, { name: '低优先级', data_id: 'low', type: 'ghost' }] },
                { name: '项目级别', items: [{ name: '全部项目', data_id: 'all', type: 'primary' }, { name: '高优先级', data_id: 'high', type: 'ghost' }, { name: '中优先级', data_id: 'mid', type: 'ghost' }, { name: '低优先级', data_id: 'low', type: 'ghost' }] }

            ]
        }
    },
    components: {
        filterbutton: filter_button
    }

}
</script>
<style>
.filter_wrap {
    margin: 0 20px 1px;
    background-color: white;
    padding: 10px;
}

.filter-button_wrap {
    display: flex;
    margin-bottom: 10px;
}

.filter-button_wrap .filter-name {
    padding-right: 10px;
    line-height: 3;
}
</style>
