<template>
    <div class="ProfileAttention" >
        <div class="title"><h6>已关注</h6></div>
        <div v-if="this.IsShow">
            <div class="ProfileAttention-main">
                <ProfileAttentionChild v-for="item in AttentionList" :attention="item"></ProfileAttentionChild>
            </div>
            <div class="ProfileCollect-end">
                <div class="ProfileCollect-end-last" @click="lastClick">上一页</div>
                <div>当前为{{this.pageNum}}页</div>
                <div class="ProfileCollect-end-next" @click="nextClick">下一页</div>
            </div>
        </div>

        <div v-else>
            <promptNull></promptNull>
        </div>
    </div>
</template>

<script>
    import {getPageAttentionById} from "@/network/attention"
    import ProfileAttentionChild from "./ProfileAttentionChild"
    import promptNull from "@/components/promptNull"
    import {ElNotification} from 'element-plus'
    import {h} from 'vue'
    export default {
        name: "ProfileAttention",
        data(){
            return{
                AttentionList:[],
                pageNum:1,
                totalPages:0,
                IsShow:false
            }
        },
        components:{
            ProfileAttentionChild,
            promptNull
        },
        computed:{
            getUserId(){
                return this.$store.state.userId
            },
        },
        watch:{
            AttentionList(newName,oldName){
                console.log(newName)

            }
        },
        methods:{
            //获取关注信息
            getAttention(){
                getPageAttentionById(this.pageNum,10,this.getUserId).then(res=>{
                    this.AttentionList=res.content
                    this.totalPages=res.totalPages
                    if(this.AttentionList.length==0){
                        this.IsShow=false
                    }else {
                        this.IsShow=true
                    }
                })
            },
            //点击上一页
            lastClick(){
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    this.getAttention()
                }
            },
            //点击下一页
            nextClick(){
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    this.getAttention()
                }
            },

            open1() {
                ElNotification({
                    title: "提示！",
                    message: h('i', {
                        style: 'color: teal'
                    }, '这已经是首页了')
                })
            },
            open2() {
                ElNotification({
                    title: "提示！",
                    message: h('i', {
                        style: 'color: teal'
                    }, '这已经是尾巴了!')
                })
            }
        },
        mounted() {
            this.getAttention()
        }
    }
</script>

<style scoped>

    .ProfileAttention-main{
        width: 80%;
        margin: 20px auto;
        border-top: 1px solid #f0f0f2;
    }
    .ProfileAttention{
        width: 60%;
        border-radius: 1%;
        height: 500px;
        background-color: white;
    }
    .title{
        padding-left: 10px;
        width: 50%;

    }
    .title h6 {
        line-height: 0px;
    }
    .ProfileCollect-end-last {
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ProfileCollect-end-next {
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ProfileCollect-end {
        margin-top: 20px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        font-size: 8px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: #9195A3;
    }
</style>