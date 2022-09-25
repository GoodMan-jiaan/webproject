<template>
    <div class="AdminsHistory">
        <div class="AdminsUserManage-heard">
            <img src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%8A%A0%E5%8F%B7.png">
            <div @click="GiveLikeClick">新增历史记录</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">

            <el-table-column prop="historicrecordsId" label="历史记录Id" width="70px" />
            <el-table-column prop="userId" label="用户Id" width="70px" />
            <el-table-column prop="videoesGatherId" label="视频集Id" width="70px" />
            <el-table-column prop="hestoricRecordTime" :formatter="timestampToTime" label="观看时间"  />
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
            <div>第{{this.totalPages}}页</div>
            <div class="AdminsUserManage-end-next"
                 @click="nextClick"
                 @mouseover="addActivenext($event)"
                 @mouseout="removeActivenext($event)">下一页</div>
        </div>
        <AdminsGiveLikeAdd v-if="this.getIsGiveLikeAdd" :just="4" class="massageBox" ></AdminsGiveLikeAdd>
    </div>
</template>

<script>
    import {getPageHistoric} from "@/network/admins"
    import {SelectHistoricByUserId,DeleteHistoric} from "@/network/historic"
    import AdminsGiveLikeAdd from "./AdminsGiveLikeAdd"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "AdminsHistory",
        data(){
            return{
                tableData:[],
                pageNum:1,
                totalPages:0,
                search:"",
                IsSelect:false
            }
        },
        mounted() {
            this.getHistory()
        },
        components:{
            AdminsGiveLikeAdd
        },
        computed:{
            getIsGiveLikeAdd(){
                return this.$store.state.IsGiveLikeAdd
            }
        },
        watch:{
            getIsGiveLikeAdd() {
                this.getHistory()
            }
        },
        methods:{
            //点击新增历史记录
            GiveLikeClick(){
                this.$store.commit('updateIsGiveLikeAdd',true)
            },
            //通过输入框，回车
            inputChange(){
                if(this.search!=""){
                    this.pageNum=1
                    SelectHistoricByUserId(this.pageNum,10,this.search).then(res=>{
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
                    this.getHistory()
                }
            },

            //获取历史记录
            getHistory(){
                getPageHistoric(this.pageNum,10).then(res=>{
                    this.tableData=res.content
                    this.totalPages=res.totalPages
                })
            },
            //点击删除
            handleDelete(index,history){
                DeleteHistoric(history.userId,history.videoesGatherId).then(res=>{
                    if(res){
                        this.pageNum=1
                        this.$message.success("删除成功！")
                        this.getHistory()
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
                        SelectHistoricByUserId(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getHistory()
                    }
                }
            },
            //点击下一页
            nextClick() {
                console.log("点击了")
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    if(this.IsSelect){
                        SelectHistoricByUserId(this.pageNum,10,this.search).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getHistory()
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
            //时间戳转化格式
            timestampToTime (row) {
                // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var date = new Date(row['hestoricRecordTime']*1)
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
    .AdminsHistory{
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