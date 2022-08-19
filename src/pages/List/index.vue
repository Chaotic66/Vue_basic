<template>
    <fieldset>
        <legend>列表</legend>
        <h1>列表</h1>
        <ul>
            <li v-for='item in goods' :key='item._id' @click='TZ(item.productId)'>
                
                    {{item.productName}}
               
            </li>
        </ul>
    </fieldset>
</template>


<script>
//列表页接口
    // http://chst.vip:1234/api/getmoneyctrl
    export default{
        data(){
            return{
                goods:[]
            }
        },
        mounted(){
            fetch('http://chst.vip:1234/api/getmoneyctrl')
            .then(body=>body.json())
            .then(res=>{
                console.log(res);
                let {result} = res
                this.goods = result
                
            })
        },
        methods:{
            TZ(itemId){
                console.log(itemId);
                this.$router.push({name:'deta',query:{id:itemId}})
            }
        }
    }


</script>