<template>
    <div class="AdminsEmail">
<!--        border-bottom: 4px solid #009688;--><!--                 :style="{'color,border-bottom':current === 1 ? '#009688,4px solid #009688':'' }"-->
        <div class="AdminsUserManage-heard">
            <div class="AdminsUserManage-heard-one"
                 @click="oneClick"
                 :style="{'color':current === 0 ? '#009688':'','border-bottom':current === 0 ? '3px solid #009688':''}"
                 >未读</div>
            <div class="AdminsUserManage-heard-two"
                 @click="TwoClick"
                 :style="{'color':current === 1 ? '#009688':'','border-bottom':current === 1 ? '3px solid #009688':''}">已读</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">

            <el-table-column prop="adviseId" label="建议Id" width="70px"/>
            <el-table-column prop="phone" label="用户手机号" width="70px"/>
            <el-table-column prop="content" label="建议内容" width="170px"/>
            <el-table-column prop="uptime" :formatter="timestampToTime" label="提交时间"/>
            <el-table-column align="right">
                <template #header>
                    <el-input class="AdminsUserManage-input"
                              @change="inputChange"
                              v-model="search"
                              size="small"
                              placeholder="请输入手机号"/>
                </template>
                <template #default="scope">
                    <el-button class="AdminsUserManage-btn"
                               size="small"
                               @click="handleEdit(scope.$index, scope.row)"
                    >查看
                    </el-button
                    >
                    <el-button
                            class="AdminsUserManage-btn"
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                    >删除
                    </el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <div class="AdminsUserManage-end">
            <div class="AdminsUserManage-end-last"
                 @click="lastClick"
                 @mouseover="addActivelast($event)"
                 @mouseout="removeActivelast($event)">上一页
            </div>
            <div>第1页</div>
            <div class="AdminsUserManage-end-next"
                 @click="nextClick"
                 @mouseover="addActivenext($event)"
                 @mouseout="removeActivenext($event)">下一页
            </div>
        </div>
        <AdminsEmailChild v-if="this.getIsEmailSelect" :just="this.current" :email-massage="this.emailMassage" class="massageBox"></AdminsEmailChild>
    </div>
</template>

<script>
    import {getPageAdvise} from "@/network/admins"
    import {getPageAdviseByPhone,deleteAdvise} from "@/network/advise"
    import AdminsEmailChild from "./AdminsEmailChild"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "AdminsEmail",
        data() {
            return {
                current:0,//已读未读路由
                tableData: [],
                pageNum: 1,
                totalPages: 0,
                search:"",//搜索内容
                emailMassage:{},//邮件信息
            }
        },
        components:{
            AdminsEmailChild
        },
        computed:{
            getIsEmailSelect(){
                return this.$store.state.IsEmailSelect;
            }
        },
        watch:{
            getIsEmailSelect() {
                this.getEmail()
            }
        },
        mounted() {
            this.getEmail()
        },
        methods: {
            oneClick(){
                //更改样式
                this.current=0
                //请求页
                this.pageNum=1
                this.getEmail()
            },
            TwoClick(){
                this.current=1
                this.pageNum=1
                this.getEmail()
            },
            //点击查看按钮
            handleEdit(index,email){

                this.emailMassage=email
                this.$store.commit("updateIsEmailSelect",true)
            },

            //点击删除按钮
            handleDelete(index,email){
                deleteAdvise(email.adviseId).then(res=>{
                    if(res){
                        this.$message.success("删除成功！")
                        this.pageNum=1
                        this.getEmail()
                    }else {
                        this.$message.error("删除失败！")
                    }
                })
            },

            //输入框按回车
            inputChange(){
                if(this.current==0){
                    if(this.search!=""){
                        this.pageNum=1
                        getPageAdviseByPhone(this.pageNum,10,this.search,this.current).then(res=>{
                            if(res.content.length!=0){
                                this.tableData=res.content
                                this.totalPages=res.totalPages
                                this.IsSelect=true
                            }else {
                                this.$message.error("没有查询到该手机号！")
                            }
                        })
                    }else {
                        //重新加载
                        this.IsSelect=false
                        this.pageNum=1
                        this.getEmail()
                    }
                }else if(this.current==1){
                    if(this.search!=""){
                        this.pageNum=1
                        getPageAdviseByPhone(this.pageNum,10,this.search,this.current).then(res=>{
                            if(res.content.length!=0){
                                this.tableData=res.content
                                this.totalPages=res.totalPages
                                this.IsSelect=true
                            }else {
                                this.$message.error("没有查询到该手机号")
                            }
                        })
                    }else {
                        //重新加载
                        this.IsSelect=false
                        this.pageNum=1
                        this.getEmail()
                    }
                }

            },
            //点击上一个
            lastClick(){
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    if(this.IsSelect){
                        getPageAdviseByPhone(this.pageNum,10,this.search,this.current).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getEmail()
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
                        getPageAdviseByPhone(this.pageNum,10,this.search,this.current).then(res=>{
                            this.totalPages=res.totalPages
                            this.tableData=res.content
                            this.IsSelect=true
                        })
                    }else {
                        this.getEmail()
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
            //获取建议信息
            getEmail() {
                getPageAdvise(this.pageNum, 10,this.current).then(res => {
                    this.totalPages = res.totalPages
                    this.tableData = res.content
                })
            },
            timestampToTime (row) {
                // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var date = new Date(row['uptime']*1)
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
        font-size: 10px;
        display: flex;
        padding-top: 5px;
        flex-wrap: nowrap;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .AdminsUserManage-heard-one{
        margin-right: 20px;
        width: 30px;
        text-align: center;
    }
    .AdminsUserManage-heard-two{
        width: 30px;
    }
    .AdminsEmail {
        width: 100%;
        height: 300px;
        background-color: white;
    }
    .massageBox{
        position: relative;
        top: -300px;
        left: 200px;
    }
    .AdminsUserManage-table {
        font-size: 8px;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .AdminsUserManage-input {
        width: 120px;
        font-size: 8px;
    }

    .AdminsUserManage-btn {
        font-size: 8px;
    }

    .active {
        color: #409EFF;
    }

    .AdminsUserManage-end {
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