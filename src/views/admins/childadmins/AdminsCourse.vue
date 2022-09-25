<template>
    <div class="AdminsCourse">
        <div class="AdminsUserManage-heard">
            <img src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%8A%A0%E5%8F%B7.png">
            <div  @click="videoGatherClick">新增视频</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">

            <el-table-column prop="courseId" label="视频Id" width="50px" />
            <el-table-column prop="videoesGatherId" label="视频集Id" width="50px" />
            <el-table-column prop="courseVideoesName" label="视频名称" width="230px" />
            <el-table-column prop="courseFileTitle" label="文件名称" width="130px" />
            <el-table-column prop="videoesNumber" label="视频集数"  />
            <el-table-column align="right">
                <template #header>
                    <el-input class="AdminsUserManage-input"
                              @change="inputChange"
                              v-model="search"
                              size="small"
                              placeholder="请输入视频名称" />
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

        <AdminsCourseChild class="massageBox" v-if="this.getIsShowCourse" :course-massage="this.courseMassage"></AdminsCourseChild>
    </div>
</template>

<script>
    import {getPageCourse,getPageCourseByName} from "@/network/admins"
    import {DeleteVideo,DeleteFile} from "@/network/fileUp"
    import {deleteByCourseId} from "@/network/details"
    import AdminsCourseChild from "./AdminsCourseChild"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "AdminsCourse",
        data(){
            return{
                tableData:[],
                pageNum:1,
                totalPages:0,
                courseMassage:{},
                search:"",
                IsSelect:false,//判断是否是搜索的内容
            }
        },
        components:{
            AdminsCourseChild
        },
        computed:{
          getIsShowCourse(){
              return this.$store.state.IsShowCourse
          }
        },
        watch:{
            //监听
            getIsShowCourse() {
                this.getCourse()
            }
        },
        mounted() {
            this.getCourse()
        },
        methods:{
            //点击新增视频
            videoGatherClick(){
                this.$router.push("/AdminsVideoManageAdd")
            },

            //点击删除
            handleDelete(index,Course){
                this.confirmDialog(Course)
            },
            //点击对话框
            confirmDialog(Course){
                if(confirm("是否删除该视频?")){
                    if(Course.courseFileResources!=null){
                        DeleteFile(Course.courseFileResources).then(res=>{
                        })
                    }
                    if(Course.courseVideoesResources!=null){
                        DeleteVideo(Course.courseVideoesResources).then(res=>{

                        })
                    }
                    deleteByCourseId(Course.courseId).then(res=>{
                        if(res){
                            this.pageNum=1
                            this.getCourse()
                            this.$message.success("删除成功！")
                        }else {
                            this.$message.error("删除失败！")
                        }
                    })
                }else {
                    console.log("点击了取消")
                }
            },
            //点击搜索框
            inputChange(){
                if(this.search==""){
                    this.pageNum=1
                    this.IsSelect=false
                    this.getCourse()
                }else {
                    this.pageNum=1
                    getPageCourseByName(this.pageNum,10,this.search).then(res=>{
                        this.totalPages=res.totalPages
                        this.tableData=res.content
                        this.IsSelect=true
                    })
                }
            },
            //点击编辑按钮
            handleEdit(index,course){
                this.courseMassage=course
                this.$store.commit('updateIsShowCourse',true)
            },

            //获取视频
            getCourse(){
              getPageCourse(this.pageNum,10).then(res=>{
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
                    //判断是否为搜索的内容
                    if(this.IsSelect){
                        getPageCourseByName(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getCourse()
                    }

                }
            },
            //点击下一页
            nextClick() {
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    //判断时候为搜索的内容
                    if(this.IsSelect){
                        getPageCourseByName(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getCourse()
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
    .AdminsCourse{
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
    .massageBox{
        position: relative;
        top: -350px;
        left: 50px;
    }
</style>