<template>
    <div class="ProfileCollectAttentionItem"
         @mouseover="addActiveProfileCollectItem($event)"
         @mouseout="removeActiveProfileCollectItem($event)">
        <div class="ProfileCollectItem-p" @click="toDetails">{{this.videoGather.videoesGatherName}}</div>
        <img v-if="this.IsImage" @click="deleteAttention" src="../../../assets/attention1.png"/>
        <img v-else @click="addAttention" src="../../../assets/attention.png"/>
    </div>
</template>

<script>
    import {selectVideoesgatherById,AddOrDelectGivelike} from "@/network/details"
    export default {
        name: "ProfileCollectAttentionItem",
        data(){
            return{
                videoGather:{},
                IsImage:true
            }
        },
        props:{
            attentionItem:{
                type:Object
            }
        },
        methods:{
            //点击取消点赞
            deleteAttention(){
                AddOrDelectGivelike(this.$store.state.userId,this.attentionItem.videoesGatherId,0).then(res=>{
                    if(res){
                        this.IsImage=false
                    }
                })
            },
            //点击点赞
            addAttention(){
                AddOrDelectGivelike(this.$store.state.userId,this.attentionItem.videoesGatherId,1).then(res=>{
                    if(res){
                        this.IsImage=true
                    }
                })
            },
            //点击进入详情页
            toDetails(){
                this.$router.push('/details/'+this.attentionItem.videoesGatherId)
            },
            //请求访问视频集信息
            getvideoGather() {
                selectVideoesgatherById(this.attentionItem.videoesGatherId).then(res=>{
                    this.videoGather=res
                })
            },
            addActiveProfileCollectItem($event) {
                $event.currentTarget.className = 'ProfileCollectAttentionItem active'

            },
            removeActiveProfileCollectItem($event) {
                $event.currentTarget.className = 'ProfileCollectAttentionItem'
            },
        },
        mounted() {
            this.getvideoGather()
        }

    }
</script>

<style scoped>
    .active{
        box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);
    }
    .ProfileCollectAttentionItem{
        padding-top: 10px;
        margin: 10px auto;

        display: flex;
        flex-wrap: nowrap;
        width: 90%;
        height: 20px;
        border: 1px solid #f0f0f2;
        border-radius: 4px;
    }
    .ProfileCollectItem-p{
        font-size: 8px;
        color: #999;
        width: 200px;
        overflow : hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 10px;
        font-weight: 400;
        margin-left: 10px;
        /*鼠标变小手*/
        cursor: pointer;
        font-family: PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Verdana,Roboto,Noto,Helvetica Neue,sans-serif!important;
    }
    .ProfileCollectAttentionItem img{
        width: 12px;
        height: 12px;
        position: relative;
        left: 120px;
        /*鼠标变小手*/
        cursor: pointer;
    }
</style>