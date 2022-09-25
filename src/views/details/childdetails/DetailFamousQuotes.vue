<template>
    <div class="DetailFamousQuotes">
        <div class="DetailFamousQuotes-img"><img :src="this.imageUrl" /></div>
        <div class="DetailFamousQuotes-english">&emsp;&emsp;{{this.english}}</div>
        <div class="DetailFamousQuotes-china">&emsp;&emsp;{{this.china}}</div>
    </div>
</template>

<script>
    export default {
        name: "DetailFamousQuotes",
        props:{
            imageUrl:{
                type:String
            },
            english:{
                type: String
            },
            china:{
                type:String
            }
        }
    }
</script>

<style scoped>
    .DetailFamousQuotes{
        background-color: #f6f6f6;
        /*width: 170px;*/
        width: 100%;
        height: 220px;
        padding: 10px 10px 40px 10px;
    }
    .DetailFamousQuotes-img{
        width: 100%;
    }
    .DetailFamousQuotes-img img{
        width: 100%;
    }
    .DetailFamousQuotes-english{
        font-size: 10px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-weight: 400;
        margin-top: 8px;
    }
    .DetailFamousQuotes-china{
        font-size: 9px;
        font-family: 微软雅黑;
        font-weight: 400;
        color: #999999;
        margin-top: 5px;
    }
</style>