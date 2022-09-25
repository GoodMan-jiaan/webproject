<template>
    <div class="AdminsVideoManage">
        <div class="AdminsUserManage-heard">
            <img src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%8A%A0%E5%8F%B7.png">
            <div @click="videoGatherClick">新增视频集</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="this.tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">
            <el-table-column prop="videoesGatherId" label="视频集Id" width="50px" />
            <el-table-column prop="userId" label="用户Id" width="50px" />
            <el-table-column prop="videoesGatherKind" label="视频集类型"   width="80px"/>
            <el-table-column prop="videoesGatherName" label="视频集名称"   width="150px"/>
            <el-table-column prop="videoesGatherOrgan" label="机构"   width="50px"/>
            <el-table-column prop="videoesGatherTotalAttention" label="关注总数" width="50px" />
            <el-table-column prop="videoesGatherTotalCollect" label="收藏总数" width="50px"/>
            <el-table-column prop="videoesGatherTotalComment" label="评论总数" />

            <el-table-column align="right">
                <template #header>
                    <el-input class="AdminsUserManage-input"
                              @change="inputChange"
                              v-model="this.search"
                              size="small"
                              placeholder="请输入视频集名称" />
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
            <div>第1页</div>
            <div class="AdminsUserManage-end-next"
                 @click="nextClick"
                 @mouseover="addActivenext($event)"
                 @mouseout="removeActivenext($event)">下一页</div>
        </div>
        <AdminsVideoManageChild class="massageBox" v-if="this.getIsShowVideoGather" :video-gather-massage="this.videoGatherMassage"></AdminsVideoManageChild>
    </div>
</template>

<script>
    import {pageAll,getVideoGatherByName} from "@/network/admins"
    import AdminsVideoManageChild from "./AdminsVideoManageChild"
    import {deleteVideoGatherById} from "@/network/resource"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "AdminsVideoManage",
        components:{
            AdminsVideoManageChild
        },
        computed:{
            getIsShowVideoGather(){
                return this.$store.state.IsShowVideoGather
            }
        },
        watch:{
            getIsShowVideoGather(){
                this.getVideoGather()
            }
        },
        data(){
            return{
                tableData:[],
                pageNum:1,
                totalPages:0,
                search:"",
                videoGatherMassage:{},
                IsSelect:false
            }
        },
        mounted() {
            this.getVideoGather()
        },
        methods:{
            //点击添加视频集
            videoGatherClick(){
              this.$router.push("/AdminsVideoManageAdd")
            },
            //获取视频集
            getVideoGather(){
                pageAll(this.pageNum,10).then(res=>{
                    this.tableData=res.content
                    this.totalPages=res.totalPages
                })
            },
            //点击编辑按钮
            handleEdit(index,videoGather){
                this.videoGatherMassage=videoGather
                this.$store.commit('updateIsShowVideoGather',true)
            },
            //点击删除按钮
            handleDelete(index,videoGather){
                this.confirmDialog(videoGather.videoesGatherId)
            },
            //点击对话框
            confirmDialog(videoGatherId){
                if(confirm("是否删除该视频集，及相关的收藏、点赞、评论、视频以及历史记录？")){
                    deleteVideoGatherById(videoGatherId).then(res=>{
                        if(res){
                            this.pageNum=1
                            this.getVideoGather()
                            this.$message.success("删除成功！")
                        }else {
                            this.$message.error("删除失败！")
                        }
                    })
                }else {
                    console.log("点击了取消")
                }
            },
            //输入框按回车
            inputChange(){
                if(this.search!=""){
                    this.pageNum=1
                    getVideoGatherByName(this.pageNum,10,this.search).then(res=>{
                        if(res.content.length!=0){
                            this.tableData=res.content
                            this.totalPages=res.totalPages
                            this.IsSelect=true
                        }else {
                            this.$message.error("没有查询到该视频集名称！")
                        }
                    })
                }else {
                    //重新加载
                    this.IsSelect=false
                    this.pageNum=1
                    this.getVideoGather()
                }
            },
            //点击上一个
            lastClick(){
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    if(this.IsSelect){
                        getVideoGatherByName(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getVideoGather()
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
                        getVideoGatherByName(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getVideoGather()
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
    .AdminsVideoManage{
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
    .massageBox{
        position: relative;
        top: -300px;
        left: 70px;
    }
</style>