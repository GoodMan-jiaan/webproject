<template>
    <div class="VideoManageCourse">
        <div class="title">
            <div class="title-one">视频信息</div>
            <div class="title-pa"></div>
        </div>
        <div v-if="IsShow" class="VideoManageCourse-main">
            <div class="VideoManageMainVideo">
                <VideoManageAside class="VideoManageAside" :videoes-gather-id="videoesGatherId"></VideoManageAside>
                <VideoManageVideo></VideoManageVideo>
            </div>

        </div>

        <div v-else class="VideoManageCourse-main1">
            <div class="VideoManageCourse-main-title">暂无视频信息<span @click="ToProfileUpVideo" class="VideoManageCourse-main-title-p">点击新建</span></div>
        </div>
    </div>
</template>

<script>
    import VideoManageAside from "./VideoManageAside"
    import VideoManageVideo from "./VideoManageVideo"
    import {getCourseByVideoesGatherId2} from "@/network/details"
    export default {
        name: "VideoManageCourse",
        data(){
            return{
                IsShow:false
            }
        },
        components: {
            VideoManageAside,
            VideoManageVideo
        },
        props: {
            videoesGatherId: {
                type: Number
            }
        },
        mounted() {
            this.getCourse()
        },
        methods:{
            //点击跳转按钮
            ToProfileUpVideo(){
                this.$router.push("/ProfileUpVideo")
            },
            getCourse(){
                getCourseByVideoesGatherId2(this.videoesGatherId).then(res=>{
                    console.log(res)
                    if(res.length==0){
                        this.IsShow=false
                    }else {
                        this.IsShow=true
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .VideoManageCourse-main-title{
        font-size: 10px;
        width: 100%;
        text-align: center;
        color: #9195A3;
        margin-top: 20px;
    }
    .VideoManageCourse-main-title-p{
        color: #409EFF ;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .VideoManageCourse {
        width: 100%;
        margin-top: 40px;
    }

    .VideoManageCourse-main {
        width: 85%;
        /*height: 500px;*/
        background-color: #f6f6f6;
        margin: 20px auto ;
    }
    .VideoManageCourse-main1{
        width: 85%;
        /*height: 500px;*/
        background-color: #f6f6f6;
        margin: 20px auto ;
        padding-top: 20px;
        padding-bottom: 40px;
    }
    .title-pa{
        width: 50px;
        height: 4px;
        margin-top: 5px;
        background-color: #ff329b;
    }

    .title {
        margin-left: 43px;
        font-size: 12px;
        font-weight: 600;
    }

    .VideoManageAside{
       padding-top: 40px;
        padding-left: 60px;
    }
    .VideoManageMainVideo{
        display: flex;
        flex-wrap: nowrap;
    }
</style>