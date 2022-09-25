<template>
    <div class="AdminsComment">
        <div class="AdminsUserManage-heard">
            <img src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%8A%A0%E5%8F%B7.png">
            <div @click="AddCommentClick">新增评论</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">

            <el-table-column prop="commentId" label="评论Id" width="50px" />
            <el-table-column prop="userId" label="用户Id" width="50px" />
            <el-table-column prop="videoesGatherId" label="视频集Id"   width="50px"/>
            <el-table-column prop="commenttext" label="评论信息"   width="300px"/>
            <el-table-column prop="commentUptime" label="发布时间" :formatter="timestampToTime"  />

            <el-table-column align="right">
                <template #header>
                    <el-input class="AdminsUserManage-input"
                              @change="inputChange"
                              v-model="search"
                              size="small"
                              placeholder="请输入视频集Id" />
                </template>
                <template #default="scope">
                    <el-button class="AdminsUserManage-btn"
                               size="small"
                               @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                    >
                    <el-button
                            class="AdminsUserManage-btn"
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <div class="AdminsUserManage-end">
            <div class="AdminsUserManage-end-last"
                 @click="lastClick"
                 @mouseover="addActivelast($event)"
                 @mouseout="removeActivelast($event)">上一页</div>
            <div>第{{this.totalPages}}页</div>
            <div class="AdminsUserManage-end-next"
                 @click="nextClick"
                 @mouseover="addActivenext($event)"
                 @mouseout="removeActivenext($event)">下一页</div>
        </div>
        <AdminsCommentChild v-if="this.getIsShowComment" class="massageBox" :comment-massage="this.commentMassage"></AdminsCommentChild>
        <AdminsCommentAdd v-if="this.getIsShowCommentAdd" class="massageBox1"></AdminsCommentAdd>
    </div>
</template>

<script>
    import {getPageComment} from "@/network/admins"
    import {SelectCommentByVideoID,deleteCommentByID} from "@/network/comment"
    import AdminsCommentChild from "./AdminsCommentChild"
    import AdminsCommentAdd from "./AdminsCommentAdd"
    import { h } from 'vue'
    import { ElNotification } from 'element-plus'
    export default {
        name: "AdminsComment",
        components:{
            AdminsCommentChild,
            AdminsCommentAdd
        },
        data(){
            return{
                tableData:[],
                pageNum:1,
                totalPages:0,
                commentMassage:{},
                search:""
            }
        },
        computed:{
            getIsShowComment(){
                return this.$store.state.IsShowComment
            },
            getIsShowCommentAdd(){
                return this.$store.state.IsShowCommentAdd
            }
        },
        watch:{
            getIsShowComment(){
                this.getComment()
            },
            getIsShowCommentAdd(){
                this.getComment()
            }
        },
        mounted() {
            this.getComment()
        },
        methods:{
            //输入视频集Id按回车
            inputChange(){
                if(this.search!=""){
                    this.pageNum=1
                    SelectCommentByVideoID(this.pageNum,10,this.search).then(res=>{
                        if(res.content.length!=0){
                            this.tableData=res.content
                            this.totalPages=res.totalPages
                            this.IsSelect=true
                        }else {
                            this.$message.error("没有查询到该用户Id！")
                        }
                    })
                }else {
                    //重新加载
                    this.IsSelect=false
                    this.pageNum=1
                    this.getComment()
                }
            },

            //点击删除评论
            handleDelete(index,comment){
                deleteCommentByID(comment.commentId,comment.videoesGatherId).then(res=>{
                    if(res){
                        this.pageNum=1
                        this.getComment()
                        this.$message.success("删除成功！")
                    }else {
                        this.$message.error("删除失败！")
                    }
                })
            },

            //点击添加评论
            AddCommentClick(){
                this.$store.commit("updateIsShowCommentAdd",true)
            },

            //点击编辑按钮
            handleEdit(index,Comment){
                this.commentMassage=Comment
                this.$store.commit('updateIsShowComment',true)
            },

            //获取评论
            getComment(){
                getPageComment(this.pageNum,10).then(res=>{
                    this.tableData=res.content
                    this.totalPages=res.totalPages
                })
            },
            //点击上一个
            lastClick(){
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    if(this.IsSelect){
                        SelectCommentByVideoID(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getComment()
                    }
                }
            },
            //点击下一页
            nextClick() {
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    if(this.IsSelect){
                        SelectCommentByVideoID(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getComment()
                    }
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
            addActivelast($event) {
                $event.currentTarget.className = 'AdminsUserManage-end-last active'
            },
            removeActivelast($event) {
                $event.currentTarget.className = 'AdminsUserManage-end-last'
            },
            addActivenext($event) {
                $event.currentTarget.className = 'AdminsUserManage-end-next active'
            },
            removeActivenext($event) {
                $event.currentTarget.className = 'AdminsUserManage-end-next'
            },
            timestampToTime (row) {
                // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var date = new Date(row['commentUptime']*1)
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
    .massageBox1{
        position: relative;
        top: -300px;
        left: 100px;
    }
    .massageBox{
        position: relative;
        top: -300px;
        left: 200px;
    }
    .active{
        color: #409EFF;
    }
    .AdminsUserManage-end{
        margin-top: 10px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        font-size: 10px;
        color: #cdcdcd;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .AdminsComment{
        width: 100%;
        height: 300px;
        background-color: white;
    }
    .AdminsUserManage-heard{
        height: 20px;
        margin-left: 300px;
        color: #cdcdcd;
        font-size: 9px;
        display: flex;
        padding-top: 5px;
        flex-wrap: nowrap;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .AdminsUserManage-heard img{
        width: 10px;
        height: 10px;
    }
    .AdminsUserManage-table{
        font-size: 8px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .AdminsUserManage-input {
        width: 120px;
        font-size: 8px;
    }
    .AdminsUserManage-btn{
        font-size: 8px;
    }
</style>