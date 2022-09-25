<template>
    <div class="DetailComment">
        <div class="DetailComment-title">1772  评论</div>
        <div class="DetailComment-input">
            <div class="DetailComment-input-img">
                <img v-if="IsUrl" :src="this.getImageUrl"/>
                <img v-else src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d">
            </div>
            <el-input class="DetailComment-input-textarea" size="small" v-model="this.commentText" placeholder="发一条友善的评论"/>
            <el-button class="DetailComment-input-btn" @click="submit" type="primary" size="small">发表评论</el-button>
        </div>
        <div v-if="IsShow">
            <div class="commentList">
                <DetailCommentItem v-for="item in this.commentList" :comment-item="item"></DetailCommentItem>
            </div>
            <div class="routerComment">
                <div class="routerComment-last" @click="lastClick">上一页</div>
                <div class="routerComment-mid">当前第{{this.page}}页</div>
                <div class="routerComment-next" @click="nextClick">下一页</div>
            </div>
        </div>
        <div v-else class="commentNull">
            当前评论为空
        </div>
    </div>
</template>

<script>
    import DetailCommentItem from "./DetailCommentItem"
    import {SelectCommentByVideoID,insertComment} from "@/network/comment"
    import {SelectUserById} from "@/network/details"
    import { h } from 'vue'
    import { ElNotification } from 'element-plus'
    export default {
        name: "DetailComment",
        props: {
            videoesGatherId: {
                type: Number,
                default() {
                    return {}
                }
            }
        },
        data(){
          return{
              commentList:[],
              page:1,//当前评论页数
              IsUrl:false,//判断是否显示图片路径
              imageUrl:"",//图片路径
              commentText:"",
              totalPages:0,
              IsShow:false
          }
        },
        computed:{
            //拼接图片路径
          getImageUrl(){
              return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.imageUrl
          }
        },
        components:{
            DetailCommentItem
        },
        mounted() {
            this.getComment()
            this.getUserImage()
        },
        methods:{
            //点击上一页
            lastClick(){
              if(this.page<=1){
                  this.open1()
              }else {
                  this.page=this.page-1
                  this.getComment()
              }
            },
            //点击下一页
            nextClick() {
                if(this.page==this.totalPages){
                    this.open2()
                }else {
                    this.page=this.page+1
                    this.getComment()
                }
            },
            //提示
            open1(){
                ElNotification({
                    title:"提示！",
                    message:h('i',{
                        style: 'color: teal'
                    },'这已经是首页了')
                })
            },
            open2(){
                ElNotification({
                    title:"提示！",
                    message:h('i',{
                        style: 'color: teal'
                    },'这已经是尾巴了!')
                })
            },
            //点击发表评论
            submit(){
                if(this.$store.state.userId!=""&&this.commentText!=""){
                    insertComment(this.videoesGatherId,this.$store.state.userId,this.commentText).then(res=>{
                        if(res){
                            this.page=1
                            this.getComment()
                            this.$message.success("评论成功！")
                            this.commentText=""
                        }else {
                            this.$message.error('评论失败！')
                        }
                    })
                }else {
                    alert("发表评论前需要进行登录！并输入框不能为空！")
                }

            },
            //获取评论列表
            getComment(){
                SelectCommentByVideoID(this.page,8,this.videoesGatherId).then(res=>{
                    this.commentList=res.content
                    this.totalPages=res.totalPages
                    if (this.commentList.length==0){
                        this.IsShow=false
                    }else {
                        this.IsShow=true
                    }
                })
            },
            //获取登录用户的头像
            getUserImage(){
                if(this.$store.state.userId!=""){
                    SelectUserById(this.$store.state.userId).then(res=>{
                      this.imageUrl=res.userImageUrl
                        this.IsUrl=true
                    })
                }else {
                    this.IsUrl=false
                }

            }
        }
    }
</script>

<style scoped>
    .commentNull{
        text-align: center;
        font-size: 10px;
        color: #9195A3;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        padding-top: 20px;
    }
    .commentList{
        margin-top: 15px;
    }
    .DetailComment{
        width: 50%;
        margin-left: 100px;
        position: relative;
        top: -20px;
    }
    .DetailComment-title{
        font-size: 12px;
        margin-bottom: 20px;
        font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
    }
    .DetailComment-input-img{
        width: 25px;
        height: 25px;
    }
    .DetailComment-input-img img{
        width: 25px;
        height: 25px;
        border-radius: 100%;
    }
    .DetailComment-input{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 35px;
        border-bottom: 1px solid #f6f6f6;
    }
    .DetailComment-input-textarea{
        width: 60%;
        position: relative;
        left: 10px;
        top: 3px;
    }
    .DetailComment-input-btn{
        position: relative;
        left: 15px;
        top: 3px;
    }
    .routerComment{
        margin-top: 20px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        font-size: 9px;

    }

    .routerComment-last{
        /*鼠标变小手*/
        cursor: pointer;
        color: #409EFF;
    }
    .routerComment-next{
        /*鼠标变小手*/
        cursor: pointer;
        color: #409EFF;
    }
</style>