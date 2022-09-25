<template>
    <div class="box">

        <div class="ProfileCommentMineItem">
            <div class="ProfileCommentMineItem-one">
                <img v-if="this.IsImageUrl" :src="this.getImageUrl">
                <img v-else src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d"/>
            </div>
            <div class="ProfileCommentMineItem-two">
                <div v-if="this.isUser" class="ProfileCommentMineItem-user">
                    <div class="ProfileCommentMineItem-user-userName">{{this.userName}}</div>
                    <div class="ProfileCommentMineItem-user-comment">&emsp;评论了你</div>
                </div>
                <div v-else class="ProfileCommentMineItem-user"></div>
                <div class="ProfileCommentMineItem-comment">{{this.commentItem.commenttext}}</div>
                <div class="ProfileCommentMineItem-title">{{this.videoTitle}}</div>
            </div>
            <div class="ProfileCommentMineItem-three">
                <img v-if="!this.isUser" @click="deleteClick()" src="../../../assets/lajitong.png"/>
            </div>
        </div>
        <div class="ProfileCommentMineItem-three-time">{{timestampToTime(this.commentItem.commentUptime/1000) }}</div>
    </div>
</template>

<script>
    import {selectVideoesgatherById,SelectUserById} from "@/network/details"
    import {deleteCommentByID} from "@/network/comment"
    export default {
        name: "ProfileCommentMineItem",
        data(){
            return{
                videoTitle:"",
                userName:"sss",
                userImageUrl:"",
                IsImageUrl:false
            }
        },
        props:{
            //判断要不要加删除图片
            isUser:{
                type:Boolean
            },
            commentItem: {
                type:Object
            }
        },
        computed:{
          getImageUrl(){
              return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.userImageUrl
          }
        },
        methods:{
            //删除评论
            deleteClick(){
                deleteCommentByID(this.commentItem.commentId,this.commentItem.videoesGatherId).then(res=>{
                    if(res){
                        this.$message.success('删除成功！')
                        this.$router.push("/ProfileMain")
                    }
                })
            },
            getUserMassage(){
                SelectUserById(this.commentItem.userId).then(res=>{
                    this.userName=res.userName
                    this.userImageUrl=res.userImageUrl
                    if(this.userImageUrl!=null){
                        this.IsImageUrl=true
                    }
                })
            },
            getVideo(){
                selectVideoesgatherById(this.commentItem.videoesGatherId).then(res=>{
                    this.videoTitle=res.videoesGatherName
                })
            },
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
        },
        //监听传值
        watch:{
            commentItem(){
                this.getUserMassage()
                this.getVideo()
            }
        },
        mounted() {
            this.getUserMassage()
            this.getVideo()
        }
    }
</script>

<style scoped>
    .ProfileCommentMineItem-user-comment{
        font-size: 8px;
        padding-bottom: 5px;
    }
    .ProfileCommentMineItem-three-time{
        font-size: 8px;
        color: #9195A3;
        position: relative;
        left: 320px;
        top: -18px;
    }

    .ProfileCommentMineItem-user-userName{
        color: #222226;
        font-size: 9px;
        font-family: "PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Verdana,Roboto,Noto,Helvetica Neue,sans-serif!important";
        font-weight: 600;
    }
    .ProfileCommentMineItem {
        margin: 0 auto;
        width: 90%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        padding-top: 10px;
        padding-bottom: 25px;
        border-bottom: 1px solid #f0f0f2;
    }

    .ProfileCommentMineItem-one img {
        width: 27px;
        height: 27px;
        border-radius: 50%;
    }

    .ProfileCommentMineItem-two {
        width: 300px;
        color: #9195A3;
        font-size: 9px;
        font-family: "PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Verdana,Roboto,Noto,Helvetica Neue,sans-serif!important";

    }
    .ProfileCommentMineItem-comment{
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
        font-family: "微软雅黑 Light";
        font-weight: 600;
        color: black;
        margin-bottom: 5px;
    }
    .ProfileCommentMineItem-title{
        width: 100%;
        font-size: 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
    }

    .ProfileCommentMineItem-three {
        font-size: 8px;
        position: relative;
        top: 16px;
    }

    .ProfileCommentMineItem-three img {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ProfileCommentMineItem-user {
        display: flex;
        flex-wrap: nowrap;
        height: 10px;
        margin-bottom: 5px;
    }
    .ProfileCommentMineItem-one{
        position: relative;
        right: 10px;
        top: 10px;
    }
</style>