<template>
    <div class="ResourceTotalItem"
         @mouseover="addActiveItem($event)"
         @mouseout="removeActiveItem($event)"
         @click="ResourceClick">
        <div class="ResourceTotalItem-img"><img :src="bindImage(resourceItem.videoesGatherImage)"/></div>
        <div class="ResourceTotalItem-title">{{resourceItem.videoesGatherName}}</div>
        <div class="ResourceTotalItem-main">
            <div class="ResourceTotalItem-main-one">机构:{{resourceItem.videoesGatherOrgan}}</div>
            <div class="ResourceTotalItem-main-two">类型:{{resourceItem.videoesGatherKind}}</div>
        </div>
        <div class="ResourceTotalItem-Introduce">&emsp;简介：{{resourceItem.videoesGatherIntroduce}}</div>
    </div>
</template>

<script>
    export default {
        name: "ResourceTotalItem",
        props:{
            resourceItem:{
                type:Object,
                default(){
                    return{}
                }
            },
        },

        methods:{
            bindImage(Image){
                return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+Image
            },
            ResourceClick(){
                console.log(this.resourceItem.videoesGatherId)
                this.$router.push('/details/'+this.resourceItem.videoesGatherId)
            },
            addActiveItem($event) {
                $event.currentTarget.className = 'ResourceTotalItem active'
            },
            removeActiveItem($event) {
                $event.currentTarget.className = 'ResourceTotalItem'
            },
        }
    }
</script>

<style scoped>
    .ResourceTotalItem-Introduce{
        font-size: 9px;
        color: #999;
        height: 48px;
        line-height: 12px;
        margin-top: 5px;
        margin-bottom: 10px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    .ResourceTotalItem-main{
        display: flex;
        flex-wrap: nowrap;
        font-size: 9px;
        color: #999;
        font-weight: 300;
        margin-left: 10px;
        margin-top: 5px;
    }
    .ResourceTotalItem-main-two{
        position: relative;
        right: -80px;

    }
    .active{
        box-shadow: 0 8px 8px 0 rgba(0,0,0,0.3);
    }
    .ResourceTotalItem-title{
        font-size: 12px;
        margin-left: 10px;
        white-space: nowrap;      /*强调在同一行内显示所有文字，知道文本结束或者遭到br换行*/
        overflow: hidden;         /*超出部分隐藏*/
        text-overflow: ellipsis;  /*溢出部分用省略号代替*/
    }
    .ResourceTotalItem{
        width: 30%;
        background-color: white;
        margin-bottom: 20px;
        /*鼠标变小手*/
        cursor: pointer;
        border-radius: 6px;
        height: 210px;
        padding-bottom: 20px;
        overflow: hidden;         /*超出部分隐藏*/
        text-overflow: ellipsis;
    }
    .ResourceTotalItem-img{
        width: 100%;
        height: 130px;
    }
    .ResourceTotalItem-img img{
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
</style>