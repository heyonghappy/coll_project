<template>
    <div style='margin-right:10px'>
        <Button v-bind:type="type" shape="circle" v-bind:data-id="id">
            {{name}}
        </Button>
    </div>
</template>
<script>
import { Button } from "iview";
export default {
    name: "filter_button",
    props:['name','id',"type"],
    components:{
Button:Button
    }

}
</script>
 <style>



</style>
 