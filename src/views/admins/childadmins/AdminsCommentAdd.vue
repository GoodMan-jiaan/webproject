<template>
    <div class="AdminsCommentAdd">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">
        <div class="AdminsUserManageAdd-main">
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">用户Id: </div>
                <input placeholder="用户Id" v-model="this.userId" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">视频集Id: </div>
                <input placeholder="视频集Id" v-model="this.videoGatherId" />
            </div>
            <div class="AdminsUserManageChild-inputtext">
                <div class="AdminsUserManageChild-inputtext-title">评论信息: </div>
                <el-input class="inputtext" v-model="this.inputText" :rows="3" type="textarea" placeholder="请输入评论信息！" />
            </div>
            <el-button class="successClass" @click="sumbitClick" type="success" size="small">提&emsp;交</el-button>
        </div>
    </div>
</template>

<script>
    import {adminsSelectUserById} from "@/network/user"
    import {adminsSelectVideogatherById} from "@/network/details"
    import {insertComment} from "@/network/comment"
    export default {
        name: "AdminsCommentAdd",
        data(){
            return{
                userId:"",
                videoGatherId:"",
                inputText:""
            }
        },
        methods:{
            //点击提交
            sumbitClick(){
              if(this.userId!=""&&this.videoGatherId!=""&&this.inputText!=""){
                  adminsSelectUserById(this.userId).then(res=>{
                      if(res){
                          adminsSelectVideogatherById(this.videoGatherId).then(ress=>{
                              if(ress){
                                  insertComment(this.videoGatherId,this.userId,this.inputText).then(rex=>{
                                      if(rex){
                                          this.$store.commit('updateIsShowCommentAdd',false)
                                          this.$message.success("添加成功！")
                                      }else {
                                          this.$message.success("添加失败！")
                                      }
                                  })
                              }else {
                                  this.$message.error("不存在该视频集！")
                              }
                          })
                      }else {
                          this.$message.error("不存在该用户！")
                      }
                  })
              }else {
                  this.$message.error("输入框不能为空！")
              }
            },
            //点击叉号
            shadiaoClick(){
                this.$store.commit('updateIsShowCommentAdd',false)
            }
        }
    }
</script>

<style scoped>
    .inputtext{
        font-size: 9px;
        width: 80%;
    }
    .AdminsCommentAdd{
        width: 300px;
        height: 250px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 270px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .successClass{
        margin-left: 70px;
        margin-top: 15px;
    }
    .AdminsUserManageAdd-main{
        margin-left: 60px;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 270px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .AdminsUserManageChild-if-text-massage{
        color: white;
        font-size: 9px;
        display: flex;
        flex-wrap: nowrap;
        margin-top: 15px;
    }
    .AdminsUserManageChild-if-text-massage input{
        height: 12px;
        width: 150px;
        font-size: 8px;
        color: white;
        border: 0;
        outline: none;
        border-bottom: 1px solid #f0f0f2;
        background-color: #606266;
    }
    .AdminsUserManageChild-if-text-massageName{
        margin-right: 5px;
    }
    .AdminsUserManageChild-inputtext{
        color: white;
        margin-top: 15px;
        font-size: 9px;
    }
    .AdminsUserManageChild-inputtext-title{
        margin-bottom: 10px;
    }
</style>