<template>
    <div class="AdminsUserManage">
        <div class="AdminsUserManage-heard">
            <img src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%8A%A0%E5%8F%B7.png">
            <div @click="AddUserClick">新增用户</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">
            <el-table-column prop="userId" label="用户Id" width="50px" />
            <el-table-column prop="userName" label="用户昵称" width="80px" />
            <el-table-column prop="userPracticalName" label="用户姓名"   width="50px"/>
            <el-table-column prop="userPhone" label="用户账号"   width="80px"/>
            <el-table-column prop="userAge" label="年龄"   width="50px"/>
            <el-table-column prop="userSex" label="性别" width="50px" />
            <el-table-column prop="userBeFollowTotal" label="粉丝数" width="50px"/>
            <el-table-column prop="userFollowTotal" label="关注数" width="50px"/>
            <el-table-column prop="userUpdateTotal" label="上传数" />


            <el-table-column align="right">
                <template #header>
                    <el-input class="AdminsUserManage-input"
                              @change="inputChange"
                              v-model="search"
                              size="small"
                              placeholder="请输入用户名称" />
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
        <AdminsUserManageChild v-if="this.getIsShow" :user-massage="this.userMassage" class="massageBox" ></AdminsUserManageChild>
        <AdminsUserManageAdd v-if="this.getIsShowAdd" class="massageBox1"></AdminsUserManageAdd>
    </div>
</template>

<script>
    import {findUserByPage} from "@/network/admins"
    import {getUserListByUserName,adminsDeleteByUserId} from "@/network/user"
    import AdminsUserManageChild from "./AdminsUserManageChild"
    import AdminsUserManageAdd from "./AdminsUserManageAdd"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "AdminsUserManage",
        components:{
            AdminsUserManageChild,
            AdminsUserManageAdd
        },
        data(){
            return{
                tableData:[],//表格数据
                search:"",//输入框内容
                pageNum:1,
                totalPages:0,
                // IsShow:false,
                userMassage:{},//用户信息
                IsSelect:false,//表示是否为搜索内容
            }
        },
        mounted() {
            this.getUser()
        },
        computed:{
            getIsShow(){
                return this.$store.state.IsShow
            },
            getIsShowAdd(){
                return this.$store.state.IsShowAdd
            }
        },
        watch:{
            getIsShow() {
                this.getUser()
            },
            getIsShowAdd() {
                this.getUser()
            }
        },
        methods:{
            //点击编辑按钮
            handleEdit(index,User){
                this.userMassage=User
                this.$store.commit('updateIsShow',true)
            },
            //点击删除按钮
            handleDelete(index,User){
                this.confirmDialog(User.userId);
            },
            //输入框按回车
            inputChange(){
                if(this.search!=""){
                    this.pageNum=1
                    getUserListByUserName(this.pageNum,10,this.search).then(res=>{
                        if(res.content.length!=0){
                            this.tableData=res.content
                            this.totalPages=res.totalPages
                            this.IsSelect=true
                        }else {
                            this.$message.error("没有查询到该用户昵称！")
                        }
                    })
                }else {
                    //重新加载
                    this.IsSelect=false
                    this.pageNum=1
                    this.getUser()
                }
            },
            //点击对话框
            confirmDialog(userId){
                if(confirm("是否删除该用户，及相关的收藏、点赞、评论、视频以及历史记录？")){
                    adminsDeleteByUserId(userId).then(res=>{
                        if(res){
                            this.pageNum=1
                            this.getUser()
                            this.$message.success("删除成功！")
                        }else {
                            this.$message.error("删除失败！")
                        }
                    })
                }else {
                    console.log("点击了取消")
                }
            },


            //获取用户信息
            getUser(){
                //发送请求
                console.log(this.$store.state.userId)
                findUserByPage(this.pageNum,10).then(res=>{
                    this.totalPages=res.totalPages
                    this.tableData=res.content
                })
            },

            //点击上一个
            lastClick(){
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    if(this.IsSelect){
                        getUserListByUserName(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getUser()
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
                        getUserListByUserName(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getUser()
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
            },
            //点击添加用户
            AddUserClick(){
                this.$store.commit('updateIsShowAdd',true)
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
        }
    }
</script>

<style scoped>
    .active{
        color: #409EFF;
    }
    .massageBox{
        position: relative;
        top: -300px;
        left: 100px;
    }
    .massageBox1{
        position: relative;
        top: -300px;
        left: 100px;
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

    .AdminsUserManage{
        width: 100%;
        height: 300px;
        background-color: white;
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