<template>
    <div  class="ProfileHistory">
        <div class="ProfileHistory-head">
            <div class="title"><h6>历史记录</h6></div>
        </div>
        <div v-if="IsShow">
            <ProfileHistoryItem v-for="item in HistoryList" :history-item="item"></ProfileHistoryItem>
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
    import ProfileHistoryItem from "./ProfileHistoryItem"
    import {h} from 'vue'
    import promptNull from "@/components/promptNull"
    import {ElNotification} from 'element-plus'
    import {SelectHistoricByUserId} from "@/network/historic"
    export default {
        name: "ProfileHistory",
        components:{
            ProfileHistoryItem,
            promptNull
        },
        data(){
            return{
                IsShow:false,
                HistoryList:[],
                pageNum: 1,
                totalPages: 0
            }
        },
        methods:{
            getHistoryList(){
                SelectHistoricByUserId(this.pageNum, 4, this.$store.state.userId).then(res=>{
                    this.totalPages = res.totalPages
                    this.HistoryList = res.content
                    if(this.HistoryList.length==0){
                        this.IsShow=false
                    }else {
                        this.IsShow=true
                    }
                })
            },
            //点击上一页
            lastClick() {
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    this.getHistoryList()
                }
            },
            //点击下一页
            nextClick() {
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    this.getHistoryList()
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
            this.getHistoryList()
        }
    }
</script>

<style scoped>
    .ProfileHistory{
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
    .ProfileHistory-head{
        width: 100%;
        border-bottom: 1px solid #f0f0f2;
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