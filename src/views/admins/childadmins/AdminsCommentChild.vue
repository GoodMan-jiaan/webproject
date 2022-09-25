<template>
    <div class="AdminsCommentChild">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">
        <div class="AdminsCommentChild-main">
            <div class="commentText">评论 Id: {{this.commentMassage.commentId}}</div>
            <div class="commentText">用户 Id: {{this.commentMassage.userId}}</div>
            <div class="commentText">视频集Id: {{this.commentMassage.videoesGatherId}}</div>
            <div class="commentText">上传时间: {{timestampToTime(this.commentMassage.commentUptime/1000)}}</div>
            <div class="commentText">评论信息:</div>
            <el-input :rows="2" type="textarea" class="commentInput" v-model="this.inputText" :placeholder="this.commentMassage.commenttext"/>
        </div>
        <el-button class="submit" type="primary" size="small" @click="submit">保存</el-button>
    </div>
</template>

<script>
    import {updateCommentText} from "@/network/comment"
    export default {
        name: "AdminsCommentChild",
        props:{
            commentMassage:{
                type:Object
            }
        },
        data(){
            return{
                inputText:""
            }
        },
        methods:{
            //点击保存
            submit(){
                if(this.inputText!=""){
                    updateCommentText(this.inputText,this.commentMassage.commentId).then(res=>{
                        if(res){
                            this.$store.commit('updateIsShowComment',false)
                            this.$message.success("修改成功！")
                        }else {
                            this.$message.error("修改失败！")
                        }
                    })
                }else {
                    this.$message.error("输入框不能为空！")
                }
            },

            shadiaoClick(){
                this.$store.commit('updateIsShowComment',false)
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
        }
    }
</script>

<style scoped>
    .submit{
        margin-left: 90px;
        margin-top: 20px;
    }
    .commentInput{
        width: 90%;
        font-size: 10px;
    }
    .AdminsCommentChild-main{
        margin-left: 20px;
    }
    .AdminsCommentChild{
        width: 230px;
        height: 280px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 205px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .commentText{
        font-size: 10px;
        color: white;
        margin-bottom: 10px;
    }

</style>