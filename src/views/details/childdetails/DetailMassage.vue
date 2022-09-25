<template>
    <div class="DetailMassage">
        <div class="DetailMassage-Click">
            <div class="DetailMassage-Click-Attention">
                <img @click="attentionClick" v-if="IsAttention" src="../../../assets/attention.png"/>
                <img @click="attentionClick1" v-else src="../../../assets/attention1.png"/>
                <div class="text">{{videoesGatherMassage.videoesGatherTotalAttention}}</div>
            </div>
            <div class="DetailMassage-Click-collect">
                <img @click="collectClick" v-if="IsCollect" src="../../../assets/collect.png"/>
                <img @click="collectClick1" v-else src="../../../assets/collect1.png"/>
                <div class="text1">{{videoesGatherMassage.videoesGatherTotalCollect}}</div>
            </div>
            <div class="DetailMassage-Click-addAttention">
                <div>上传用户:{{user.userName}}&ensp;</div>
                <div @click="addAttentionClick" v-if="IsAddAttention" class="DetailMassage-Click-addAttention-text">+ 关注</div>
                <div @click="addAttentionClick1" v-else class="DetailMassage-Click-addAttention-text">取消关注</div>
            </div>
        </div>
        <div class="DetailMassage-video">
            <div class="DetailMassage-video-img"><img :src="this.getvideoesGatherImageUrl"/></div>
            <div class="DetailMassage-video-text">
                <div class="DetailMassage-video-text-title">{{this.videoesGatherMassage.videoesGatherName}}</div>
                <div class="DetailMassage-video-text-small">
                    <div class="DetailMassage-video-text-small-one">{{this.videoesGatherMassage.videoesGatherKind}}</div>
                    <div class="DetailMassage-video-text-small-two">{{this.videoesGatherMassage.videoesGatherOrgan}}</div>
                    <div class="DetailMassage-video-text-small-three">{{this.videoesGatherMassage.videoesGatherAuthorName}}</div>
                </div>
                <div class="DetailMassage-video-text-Introduce">&emsp;&emsp;{{this.videoesGatherMassage.videoesGatherIntroduce}}</div>
<!--                <div class="DetailMassage-video-text-Introduce">&emsp;&emsp;阿波连玲奈是一个身材娇小，安静的女孩子，有点不太擅长把握与他人之间的距离。-->
<!--                    这让坐在隔壁座位的来堂同学，总觉得到有种距离感。-->
<!--                    有一天，来堂同学捡起了阿波连同学掉在地上的橡皮，以此为契机两人之间的距离开始急速接近！？-->
<!--                    “时而太远”“时而太近”，阿波连同学难以预测。-->
<!--                    各种意义上“测不准”的紧贴系？青春恋爱喜剧开幕了！阿波连玲奈是一个身材娇小，安静的女孩子，有点不太擅长把握与他人之间的距离。-->
<!--                    这让坐在隔壁座位的来堂同学，总觉得到有种距离感。-->
<!--                    有一天，来堂同学捡起了阿波连同学掉在地上的橡皮，以此为契机两人之间的距离开始急速接近！？-->
<!--                    “时而太远”“时而太近”，阿波连同学难以预测。-->
<!--                    各种意义上“测不准”的紧贴系？青春恋爱喜剧开幕了！</div>-->
                <div class="DetailMassage-video-text-time">发布时间:{{timestampToTime(this.videoesGatherMassage.videoesGatherUptime/1000)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {selectVideoesgatherById,AddOrDelectAttention,AddOrDelectCollect,AddOrDelectGivelike,SelectUserById,SelectGivelikeByUserId,SelectCollectByUserId,SelectAttentionByUserId} from "@/network/details"

    export default {
        name: "DetailMassage",
        data() {
            return {
                IsAttention: true,//判断用户是否已经点赞
                IsCollect: true,//判断用户是否已经收藏
                IsAddAttention:true,//判断用户是否有关注
                videoesGatherMassage:{},//视频集信息
                user:{},//
            }
        },
        props: {
            videoesGatherId: {
                type: Number,
                default() {
                    return {}
                }
            }
        },
        computed:{
          getUserId(){
              return this.$store.state.userId
          },
          getvideoesGatherImageUrl(){
              return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.videoesGatherMassage.videoesGatherImage
          }
        },
        mounted() {
            this.getVideoGatersMassage()
            this.getAttention()
            this.getCollect()
        },
        methods: {
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
            //点击点赞图标
            attentionClick(){
                if(this.getUserId!=""){
                    AddOrDelectGivelike(this.getUserId,this.videoesGatherId,1).then(res=>{
                        if(res){
                            this.IsAttention=false
                            this.getVideoGatersMassage()
                        }
                    })
                }else {
                    alert("点赞前需要进行登录！")
                }
            },
            attentionClick1(){
                if(this.getUserId!=""){
                    AddOrDelectGivelike(this.getUserId,this.videoesGatherId,0).then(res=>{
                        if(res){
                            this.IsAttention=true
                            this.getVideoGatersMassage()
                        }
                    })
                }else {
                    alert("点赞前需要进行登录！")
                }
            },
            //点击收藏图片
            collectClick(){
                if(this.getUserId!=""){
                    AddOrDelectCollect(this.getUserId,this.videoesGatherId,1).then(res=>{
                        if(res){
                            this.IsCollect=false
                            this.getVideoGatersMassage()
                        }
                    })
                }else {
                    alert("收藏前前需要进行登录！")
                }
            },
            collectClick1(){
                if(this.getUserId!=""){
                    AddOrDelectCollect(this.getUserId,this.videoesGatherId,0).then(res=>{
                        if(res){
                            this.IsCollect=true
                            this.getVideoGatersMassage()
                        }
                    })
                }else {
                    alert("收藏前前需要进行登录！")
                }
            },
            //点击关注
            addAttentionClick(){
                if(this.getUserId!=""){
                    if(this.getUserId!=this.videoesGatherMassage.userId){
                        AddOrDelectAttention(this.getUserId,this.videoesGatherMassage.userId,1).then(res=>{
                            if(res){
                                this.IsAddAttention=false
                            }
                        })
                    }else {
                        alert("您不能关注您自己哦！")
                    }
                }else {
                    alert("关注前需要进行登录！")
                }
            },
            addAttentionClick1(){
                if(this.getUserId!=""){
                    if(this.getUserId!=this.videoesGatherMassage.userId){
                        AddOrDelectAttention(this.getUserId,this.videoesGatherMassage.userId,0).then(res=>{
                            if(res){
                                this.IsAddAttention=true
                            }
                        })
                    }else {
                        alert("您不能关注您自己哦！")
                    }
                }else {
                    alert("关注前需要进行登录！")
                }
            },

            //获取视频集信息
            getVideoGatersMassage() {
                selectVideoesgatherById(this.videoesGatherId).then(res=>{
                    this.videoesGatherMassage=res
                    SelectUserById(res.userId).then(ress=>{
                        this.user=ress
                        this.getAddAttention()
                    })
                })
            },
            //获取点赞信息
            getAttention() {
                if(this.getUserId!=""){
                    SelectGivelikeByUserId(this.getUserId,this.videoesGatherId).then(res=>{
                        if(res){
                            this.IsAttention=false
                        }else {
                            this.IsAttention=true
                        }
                    })
                }
            },
            //获取收藏信息
            getCollect() {
                if(this.getUserId!=""){
                    SelectCollectByUserId(this.getUserId,this.videoesGatherId).then(res=>{
                        if(res){
                            this.IsCollect=false
                        }else {
                            this.IsCollect=true
                        }
                    })
                }
            },
            //获取关注信息
            getAddAttention(){
                if(this.getUserId!=""){
                    SelectAttentionByUserId(this.getUserId,this.videoesGatherMassage.userId).then(res=>{
                        if(res){
                            this.IsAddAttention=false
                        }else {
                            this.IsAddAttention=true
                        }
                    })
                }
            }
        }

    }
</script>

<style scoped>
    .DetailMassage-video-text-time{
        font-size: 8px;
        color: #999;
        margin-top: 10px;
        position: relative;
        left: 170px;
    }
    .DetailMassage-video-text-Introduce{
        font-size: 8px;
        padding-right: 20px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
    .DetailMassage-video-text-small-one{
        position: relative;
        left: 10px;
    }
    .DetailMassage-video-text-small-two{
        position: relative;
        left: 80px;
    }
    .DetailMassage-video-text-small-three{
        position: relative;
        left: 150px;
    }
    .DetailMassage-video-text-title{
        font-size: 11px;
        margin-bottom: 10px;
    }
    .DetailMassage-video-text-small{
        display: flex;
        flex-wrap: wrap;
        font-size: 8px;
        color: #999;
        margin-bottom: 5px;
    }
    .DetailMassage-video{
        display: flex;
        width: 60%;
        flex-wrap: nowrap;
        margin-left: 100px;
        margin-top: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
    }
    .DetailMassage-video-text{
        width: 70%;
        margin-left: 20px;
        color: #212121;
    }
    .DetailMassage-video-img{
        width: 100px;
    }
    .DetailMassage-video-img img{
        width: 100%;
    }
    .DetailMassage-Click {
        display: flex;
        flex-wrap: wrap;
        color: #505050;
        font-size: 10px;
        font-weight: 400;
        width: 60%;
        margin-top: 13px;
        margin-left: 100px;
        padding-bottom: 8px;
        border-bottom: 1px solid #f6f6f6;
    }
    .DetailMassage-Click-Attention{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .DetailMassage-Click-Attention img{
        width: 20px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .DetailMassage-Click-collect{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        left: 50px;
    }
    .DetailMassage-Click-collect img{
        width: 20px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .DetailMassage-Click-addAttention{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        left: 150px;
        top: 5px;
    }
    .DetailMassage-Click-addAttention-text{
        color: #00b5e5;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .text {
        position: relative;
        top: 5px;
        left: 3px;
    }
    .text1{
        position: relative;
        top: 5px;
        left: 3px;
    }

</style>