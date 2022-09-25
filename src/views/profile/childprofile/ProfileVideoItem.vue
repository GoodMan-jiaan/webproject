<template>
    <div class="ProfileHistoryItem">
        <div class="ProfileHistoryItem-one"><img :src="this.getImageUrl"/></div>
        <div class="ProfileHistoryItem-two">
            <div class="ProfileHistoryItem-two-title"  @click="toVideoManage">{{this.videoGatherItem.videoesGatherName}}</div>
            <div class="ProfileHistoryItem-two-introduce">&emsp;&emsp;{{this.videoGatherItem.videoesGatherIntroduce}}</div>
        </div>
        <div class="ProfileHistoryItem-three">
            <img  @click="deleteVideoGather" src="../../../assets/chahao.png"/>
            <div class="ProfileHistoryItem-three-time">{{timestampToTime(this.videoGatherItem.videoesGatherUptime/1000) }}</div>
        </div>
    </div>
</template>

<script>
    import {deleteVideoGatherById} from "@/network/resource"
    export default {
        name: "ProfileVideoItem",
        computed:{
            getImageUrl(){
                return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.videoGatherItem.videoesGatherImage
            }
        },
        props: {
            videoGatherItem: {
                type: Object
            }
        },
        mounted() {

        },
        methods:{
            //时间戳转化格式
            timestampToTime (time) {
                // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var date = new Date(time * 1000)
                let y = date.getFullYear()
                let MM = date.getMonth() + 1
                MM = MM < 10 ? ('0' + MM) : MM
                let d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                let h = date.getHours()
                h = h < 10 ? ('0' + h) : h
                let m = date.getMinutes()
                m = m < 10 ? ('0' + m) : m
                let s = date.getSeconds()
                s = s < 10 ? ('0' + s) : s
                return y + '年' + MM + '月' + d + '日'
            },

            //删除视频集
            deleteVideoGather(){
                this.confirmDialog()
            },
            //点击对话框
            confirmDialog(){
                if(confirm("是否删除该视频集，及相关的收藏、点赞、评论、视频以及历史记录？")){
                    deleteVideoGatherById(this.videoGatherItem.videoesGatherId).then(res=>{
                        if(res){
                            this.$message.success("删除成功")
                            this.$router.push("/ProfileMain")
                        }
                    })
                }else {
                    console.log("点击了取消")
                }
            },
            toVideoManage(){
                this.$router.push('/videoManage/'+this.videoGatherItem.videoesGatherId)
            }

        }
    }
</script>

<style scoped>
    .ProfileHistoryItem-two {
        margin-left: 10px;
    }

    .ProfileHistoryItem-two-introduce {
        width: 220px;
        color: #9195A3;
        font-size: 8px;
        font-family: "PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Verdana,Roboto,Noto,Helvetica Neue,sans-serif!important";

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .ProfileHistoryItem {
        margin: 10px auto;
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f2;
        width: 90%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    .ProfileHistoryItem-three img {
        width: 12px;
        height: 12px;
        /*鼠标变小手*/
        cursor: pointer;
        border-radius: 50%;
        position: relative;
        left: 15px;
        top: 5px;
    }

    .ProfileHistoryItem-three-time {
        font-size: 8px;
        color: #9195A3;
        position: relative;
        top: 35px;
        left: -20px;
        width: 60px;
    }

    .ProfileHistoryItem-two-title {
        width: 220px;
        font-size: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
        font-family: "微软雅黑 Light";
        font-weight: 600;
        color: black;
        margin-bottom: 10px;
        position: relative;
        top: 5px;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ProfileHistoryItem-three {
        width: 50px;
    }

    .ProfileHistoryItem-one img {
        width: 80px;
        height: 50px;
        border-radius: 5px;
    }
</style>