<template>
    <div class="ProfileVideo">
        <div class="ProfileVideo-head">
            <div class="title"><h6>视频集信息</h6></div>
        </div>
        <div v-if="IsShow">
            <div class="ProfileVideo-input">
                <el-input class="ProfileVideo-input-one" v-model="this.inputText" placeholder="输入视频集名称" size="small"/>
                <el-button type="primary" size="small" @click="SelectInput">搜索</el-button>
            </div>
            <ProfileVideoItem v-for="item in videoGatherList" :video-gather-item="item"></ProfileVideoItem>

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
    import ProfileVideoItem from "./ProfileVideoItem"
    import {getVideoGatherByUserId,getVideoGatherByUserIdAndTitle} from "@/network/resource"
    import promptNull from "@/components/promptNull"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "ProfileVideo",
        data(){
            return{
                IsShow:false,
                inputText:"",
                videoGatherList:[],
                pageNum:1,
                totalPages:0,
                IsSelect:1
            }
        },
        components:{
            ProfileVideoItem,
            promptNull
        },
        methods:{
            //获取视频集
            getVideoGatherList(){
                getVideoGatherByUserId(this.pageNum,5,this.$store.state.userId).then(res=>{
                    this.videoGatherList=res.content
                    this.totalPages = res.totalPages
                    if (this.videoGatherList.length==0){
                        this.IsShow=false
                    }else {
                        this.IsShow=true
                    }
                })
            },
            //点击搜索
            SelectInput(){
                if(this.inputText!=""){
                    this.pageNum=1
                    getVideoGatherByUserIdAndTitle(this.pageNum,5,this.$store.state.userId,this.inputText).then(res=>{
                        this.videoGatherList=res.content
                        this.totalPages = res.totalPages
                    })
                }else {
                    this.pageNum=1
                    this.getVideoGatherList()
                }
            },
            //当输入框有值的时候，点击上下页
            SelectInput1(){
                if(this.inputText!=""){
                    getVideoGatherByUserIdAndTitle(this.pageNum,5,this.$store.state.userId,this.inputText).then(res=>{
                        this.videoGatherList=res.content
                        this.totalPages = res.totalPages
                    })
                }
            },


            //点击上一页
            lastClick() {
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    if(this.inputText!=""){
                        this.SelectInput1()
                    }else {
                        this.getVideoGatherList()
                    }

                }
            },
            //点击下一页
            nextClick() {
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    //判断输入框信息
                    if(this.inputText!=""){
                        this.SelectInput1()
                    }else {
                        this.getVideoGatherList()
                    }
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
            this.getVideoGatherList()
        }
    }
</script>

<style scoped>
    .ProfileVideo{
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
    .ProfileVideo-head{
        width: 100%;
        border-bottom: 1px solid #f0f0f2;
    }
    .ProfileVideo-input{
        display: flex;
        flex-wrap: nowrap;
        margin-top: 10px;
        margin-left: 100px;
    }
    .ProfileVideo-input-one{
        width: 200px;
        margin-right: 10px;
        font-size: 9px;
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