<template>
    <div class="AdminsAttention">
        <div class="AdminsUserManage-heard">
            <img src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%8A%A0%E5%8F%B7.png">
            <div @click="GiveLikeClick">新增关注</div>
        </div>
        <el-table class="AdminsUserManage-table"
                  size="small"
                  :data="tableData"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  height="280px" style="width: 100%">

            <el-table-column prop="attentionId" label="关注Id" width="70px" />
            <el-table-column prop="followUser" label="关注用户Id" width="70px" />
            <el-table-column prop="beFollowUser" label="被关注用户Id"  />
            <el-table-column align="right">
                <template #header>
                    <el-input class="AdminsUserManage-input"
                              @change="inputChange"
                              v-model="search"
                              size="small"
                              placeholder="请输入关注用户Id" />
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
                 @mouseover="addActivelast($event)"
                 @mouseout="removeActivelast($event)">上一页</div>
            <div>第1页</div>
            <div class="AdminsUserManage-end-next"
                 @mouseover="addActivenext($event)"
                 @mouseout="removeActivenext($event)">下一页</div>
        </div>
        <AdminsGiveLikeAdd v-if="this.getIsGiveLikeAdd" :just="3" class="massageBox" ></AdminsGiveLikeAdd>
    </div>
</template>

<script>
    import {getPageAttention} from "@/network/admins"
    import {getPageAttentionById,AddOrDelectAttention} from "@/network/attention"
    import AdminsGiveLikeAdd from "./AdminsGiveLikeAdd"
    export default {
        name: "AdminsAttention",
        data(){
            return{
                tableData:[],
                pageNum:1,
                totalPages:0,
                search:""
            }
        },
        computed:{
            getIsGiveLikeAdd(){
                return this.$store.state.IsGiveLikeAdd
            }
        },
        watch:{
            getIsGiveLikeAdd() {
                this.getAttention()
            }
        },
        mounted() {
            this.getAttention()
        },
        components:{
            AdminsGiveLikeAdd
        },
        methods:{
            //点击添加点赞
            GiveLikeClick(){
                this.$store.commit('updateIsGiveLikeAdd',true)
            },
            //点击删除
            handleDelete(index,Attention){
                AddOrDelectAttention(Attention.followUser,Attention.beFollowUser,0).then(res=>{
                    if(res){
                        this.pageNum=1
                        this.getAttention()
                        this.$message.success("删除成功！")
                    }else {
                        this.$message.error("删除失败！")
                    }
                })
            },
            //获取关注信息
            getAttention(){
                getPageAttention(this.pageNum,10).then(res=>{
                    this.tableData=res.content
                    this.totalPages=res.totalPages
                })
            },
            //输入框为按回车
            inputChange(){
                if(this.search!=""){
                    this.pageNum=1
                    getPageAttentionById(this.pageNum,10,this.search).then(res=>{
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
                    this.getAttention()
                }
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
    .AdminsAttention{
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