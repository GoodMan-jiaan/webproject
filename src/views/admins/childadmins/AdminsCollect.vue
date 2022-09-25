<template>
    <div class="AdminsCollect">
        <div class="AdminsUserManage-heard">
            <img src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%8A%A0%E5%8F%B7.png">
            <div @click="GiveLikeClick">新增收藏</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">

            <el-table-column prop="collectId" label="收藏Id" width="70px" />
            <el-table-column prop="userId" label="用户Id" width="70px" />
            <el-table-column prop="videoesGatherId" label="视频集Id"  />
            <el-table-column align="right">
                <template #header>
                    <el-input class="AdminsUserManage-input"
                              @change="inputChange"
                              v-model="search"
                              size="small"
                              placeholder="请输入用户Id" />
                </template>
                <template #default="scope">
                    <!--                    <el-button class="AdminsUserManage-btn"-->
                    <!--                               size="small"-->
                    <!--                               @click="handleEdit(scope.$index, scope.row)"-->
                    <!--                    >编辑</el-button-->
                    <!--                    >-->
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
        <AdminsGiveLikeAdd v-if="this.getIsGiveLikeAdd" :just="2" class="massageBox" ></AdminsGiveLikeAdd>
    </div>
</template>

<script>
    import {getPageCollect} from "@/network/admins"
    import {SelectCollect} from "@/network/collect"
    import {AddOrDelectCollect} from "@/network/details"
    import AdminsGiveLikeAdd from "./AdminsGiveLikeAdd"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "AdminsCollect",
        data(){
            return{
                tableData:[],
                pageNum:1,
                totalPages:0,
                search:"",
                IsSelect:false
            }
        },
        computed:{
            getIsGiveLikeAdd(){
                return this.$store.state.IsGiveLikeAdd
            }
        },
        watch:{
            getIsGiveLikeAdd() {
                this.getCollect()
            }
        },
        components:{
            AdminsGiveLikeAdd
        },
        mounted() {
            this.getCollect()
        },
        methods:{
            //根据输入框回车
            inputChange(){
                if(this.search!=""){
                    this.pageNum=1
                    SelectCollect(this.pageNum,10,this.search).then(res=>{
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
                    this.getCollect()
                }
            },

            //点击删除按钮
            handleDelete(index,collect){
                AddOrDelectCollect(collect.userId,collect.videoesGatherId,0).then(res=>{
                    if(res){
                        this.pageNum=1
                        this.getCollect()
                        this.$message.success("删除成功！")
                    }else {
                        this.$message.error("删除失败！")
                    }
                })
            },
            //点击上一个
            lastClick(){
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    if(this.IsSelect){
                        SelectCollect(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getGiveLike()
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
                        SelectCollect(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getGiveLike()
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
            //点击添加点赞
            GiveLikeClick(){
                this.$store.commit('updateIsGiveLikeAdd',true)
            },
            getCollect(){
                getPageCollect(this.pageNum,10).then(res=>{
                    this.tableData=res.content
                    this.totalPages=res.totalPages
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
    .massageBox{
        position: relative;
        top: -300px;
        left: 200px;
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
    .AdminsCollect{
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
</style>