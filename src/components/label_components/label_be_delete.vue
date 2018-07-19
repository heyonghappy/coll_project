<template>
    <div class='label_be_delete'>
        <span class='label_name' v-bind:dataid="id">
            {{name}}
        </span>
        <span class='close_icon'>
            <Icon type="close-circled" style="color: #999"></Icon>
        </span>

    </div>
</template>
<script>
import { Icon } from "iview";
export default {
    name: "label_be_delete",
    data(){
        return{
            
        }
 
    },
    props:['name','id'],
    components: {
        Icon: Icon,
    }
}
</script>

<style>
.label_be_delete .label_name {
    cursor: pointer;
}

.label_be_delete .close_icon {
    visibility: hidden;
        vertical-align: super;
 
}

.label_be_delete:hover .close_icon {
    cursor: pointer;
    visibility: visible;
}
</style>


