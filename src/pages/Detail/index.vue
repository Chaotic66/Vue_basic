<template>
    <fieldset>
        <legend>详情</legend>
        <!-- <div v-if='flag'>
            <img src="../../../public/01.gif" alt="">
        </div> -->
         <h1>产品:{{detail.productName}}</h1>
        <h2>产品描述:{{detail.productInfo2}}</h2>
        <h3>价格:{{detail.productPinkage}}</h3>
        <h3>时间:{{detail.productTime}}</h3>
    </fieldset>
</template>


<script>
    //http://chst.vip:1234/api/getmoneyctrlproduct?productid=
    
    export default{
        data(){
            return{
                detail:{}
            }
        },
        // props:['id'],
        mounted(){
            // let {id = 0} = this.$route.params 
            let {id = 0} = this.$route.query
            fetch(`http://chst.vip:1234/api/getmoneyctrlproduct?productid=${id}`)
            .then(body=>body.json())
            .then(res=>{
                console.log(res);
                this.detail = res.result[0]
            })
        }
    }


</script>

<style  scoped>
    img{
        width: 500px;
    
    
    }
</style>


