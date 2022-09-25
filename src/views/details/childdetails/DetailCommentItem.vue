<template>
    <div class="DetailCommentItem">
        <div class="commentList-image">
            <img v-if="this.IsUrl" :src="this.getUserImageUrl" />
            <img v-else src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d"/>
        </div>
        <div class="commentList-main">
            <div class="commentList-main-content">&emsp;&emsp;{{this.commentItem.commenttext}}</div>
            <div class="commentList-main-end">
                <div class="commentList-image-name">发布者:{{this.userName}}</div>
                <div class="commentList-main-time">{{timestampToTime(this.commentItem.commentUptime/1000) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {SelectUserById} from "@/network/details"
    export default {
        name: "DetailCommentItem",
        props:{
            commentItem:{
                type:Object,
                default(){
                    return{

                    }
                }
            }
        },
        watch:{
            //监听props的值
          commentItem(){
            this.getUser()
          }
        },
        data(){
          return{
              userImageUrl:"",
              IsUrl:false,
              userName:"用户"
          }
        },
        computed:{
          getUserImageUrl(){
              return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.userImageUrl
          }
        },
        mounted() {
            this.getUser()
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
            //获取评论用户的头像
            getUser(){

                SelectUserById(this.commentItem.userId).then(res=>{
                    this.userImageUrl=res.userImageUrl
                    this.userName=res.userName
                    if(this.userImageUrl!=""){
                        this.IsUrl=true
                    }else {
                        this.IsUrl=false
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .commentList-image img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    .DetailCommentItem{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        border-bottom: 1px solid #f6f6f6;
        padding-bottom: 5px;
        margin-bottom: 10px;
        padding-right: 20px;
    }
    .commentList-main-content{
        font-size: 9px;
        font-weight: 400;
        line-height: 13px;
    }
    .commentList-main{
        margin-left: 20px;
        width: 80%;
    }
    .commentList-main-time{
        font-size: 8px;
        color: #999;
        position: relative;
        left: 50px;

    }
    .commentList-image-name{
        font-size: 8px;
        color: #999;
        position: relative;
        right: 40px;
    }
    .commentList-main-end{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin-top: 10px;
        margin-left: 40px;
    }
</style>