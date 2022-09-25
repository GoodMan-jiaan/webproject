<template>
    <div class="AdminsGiveLikeAdd">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">

        <div v-if="this.just===1" class="AdminsUserManageAdd-main">
            <div class="AdminsGiveLikeAdd-title">新添点赞信息</div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">用户&emsp;Id: </div>
                <input placeholder="用户Id" v-model="this.userId" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">视频集Id: </div>
                <input placeholder="视频集Id" v-model="this.videoGatherId" />
            </div>
            <el-button class="successClass" type="success" @click="GiveLikeClick" size="small">提&emsp;交</el-button>
        </div>
        <div v-else-if="this.just===2" class="AdminsUserManageAdd-main">
            <div class="AdminsGiveLikeAdd-title">新添收藏信息</div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">用户&emsp;Id: </div>
                <input placeholder="用户Id" v-model="this.userId" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">视频集Id: </div>
                <input placeholder="视频集Id" v-model="this.videoGatherId" />
            </div>
            <el-button class="successClass" type="success" @click="CollectClick" size="small">提&emsp;交</el-button>
        </div>
        <div v-else-if="this.just===3" class="AdminsUserManageAdd-main">
            <div class="AdminsGiveLikeAdd-title">新添关注信息</div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">关注用户&emsp;Id: </div>
                <input placeholder="关注用户Id" v-model="this.followId" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">被关注用户Id: </div>
                <input placeholder="被关注用户Id" v-model="this.beFollowId" />
            </div>
            <el-button class="successClass" type="success" @click="attentionClick" size="small">提&emsp;交</el-button>
        </div>
        <div v-else-if="this.just===4" class="AdminsUserManageAdd-main">
            <div class="AdminsGiveLikeAdd-title">新添历史记录信息</div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">用户&emsp;Id: </div>
                <input placeholder="用户Id" v-model="this.userId" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">视频集Id: </div>
                <input placeholder="视频集Id" v-model="this.videoGatherId" />
            </div>
            <el-button class="successClass" type="success" size="small" @click="historyClick">提&emsp;交</el-button>
        </div>
    </div>
</template>

<script>
    import {adminsSelectVideogatherById,AddOrDelectGivelike,SelectGivelikeByUserId,SelectCollectByUserId,AddOrDelectCollect} from "@/network/details"
    import {adminsSelectUserById} from "@/network/user"
    import {InsertHistoric} from "@/network/historic"
    import {SelectAttentionByUserId,AddOrDelectAttention} from "@/network/attention"
    export default {
        name: "AdminsGiveLikeAdd",
        props:{
            just:{
                type:Number
            }
        },
        methods:{
            //点击叉号
            shadiaoClick(){
                this.$store.commit('updateIsGiveLikeAdd',false)
            },
            //点击新增点赞
            GiveLikeClick(){
                if(this.videoGatherId!=""&&this.userId!=""){
                    //视频集是否存在
                    adminsSelectVideogatherById(this.videoGatherId).then(res=>{
                        if(res){
                            //用户是否存在
                            adminsSelectUserById(this.userId).then(ress=>{
                                if(ress){
                                    SelectGivelikeByUserId(this.userId,this.videoGatherId).then(rses=>{
                                        if(rses){
                                            this.$message.error("该用户已经点赞该视频集！")
                                        }else {
                                            //添加点赞
                                            AddOrDelectGivelike(this.userId,this.videoGatherId,1).then(rexs=>{
                                                if(rexs){
                                                    this.$store.commit('updateIsGiveLikeAdd',false)
                                                    this.$message.success("添加成功！")
                                                }else {
                                                    this.$message.error("添加失败！")
                                                }
                                            })
                                        }
                                    })
                                }else {
                                    this.$message.error("查无该用户")
                                }
                            })
                        }else {
                            this.$message.error("查无该视频集")
                        }
                    })
                }else {
                    this.$message.error("数据不能为空！")
                }
            },
            //点击提交收藏
            CollectClick(){
                if(this.videoGatherId!=""&&this.userId!=""){
                    //视频集是否存在
                    adminsSelectVideogatherById(this.videoGatherId).then(res=>{
                        if(res){
                            //用户是否存在
                            adminsSelectUserById(this.userId).then(ress=>{
                                if(ress){
                                    SelectCollectByUserId(this.userId,this.videoGatherId).then(rses=>{
                                        if(rses){
                                            this.$message.error("该用户已经收藏该视频集！")
                                        }else {
                                            AddOrDelectCollect(this.userId,this.videoGatherId,1).then(rexs=>{
                                                if(rexs){
                                                    this.$store.commit('updateIsGiveLikeAdd',false)
                                                    this.$message.success("添加成功！")
                                                }else {
                                                    this.$message.error("添加失败！")
                                                }
                                            })
                                        }
                                    })
                                }else {
                                    this.$message.error("查无该用户")
                                }
                            })
                        }else {
                            this.$message.error("查无该视频集")
                        }
                    })
                }else {
                    this.$message.error("数据不能为空！")
                }
            },
            //点击提交关注信息
            attentionClick(){
                if(this.followId!=""&&this.beFollowId!=""){
                    if(this.followId!=this.beFollowId){

                        adminsSelectUserById(this.followId).then(rex=>{
                            if(rex){
                                adminsSelectUserById(this.beFollowId).then(rexx=>{
                                    if(rexx){
                                        SelectAttentionByUserId(this.followId,this.beFollowId).then(res=>{
                                            if(res){
                                                this.$store.commit('updateIsGiveLikeAdd',false)
                                                this.$message.success("已经关注了哦！")
                                            }else {
                                                AddOrDelectAttention(this.followId,this.beFollowId,1).then(ress=>{
                                                    if(ress){
                                                        this.$store.commit('updateIsGiveLikeAdd',false)
                                                        this.$message.success("添加成功！")
                                                    }else {
                                                        this.$message.error("添加失败！")
                                                    }
                                                })
                                            }
                                        })
                                    }else {
                                        this.$message.error("被关注用户不存在")
                                    }
                                })

                            }else {
                                this.$message.error("关注用户不存在！")
                            }
                        })
                    }else {
                        this.$message.error("你不能关注你自己哦！")
                    }
                }else {
                    this.$message.error("数据不能为空！")
                }
            },
            //点击新增历史记录
            historyClick(){
                if(this.videoGatherId!=""&&this.userId!=""){
                    //查看视频集是否存在
                    adminsSelectVideogatherById(this.videoGatherId).then(res=>{
                        if(res){
                            //用户是否存在
                            adminsSelectUserById(this.userId).then(ress=>{
                                if(ress){
                                    InsertHistoric(this.userId,this.videoGatherId).then(rs=>{
                                        if(rs){
                                            this.$store.commit('updateIsGiveLikeAdd',false)
                                            this.$message.success("成功更新或添加！")
                                        }
                                    })
                                }else {
                                    this.$message.error("查无该用户")
                                }
                            })
                        }else {
                            this.$message.error("查无该视频集")
                        }
                    })
                }else {
                    this.$message.error("数据不能为空！")
                }
            }
        },
        data(){
            return{
                videoGatherId:"",
                userId:"",
                followId:"",
                beFollowId:""
            }
        }
    }
</script>

<style scoped>
    .AdminsGiveLikeAdd-title{
        font-size: 12px;
        color: white;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 20px;
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
    .successClass{
        margin-left: 70px;
        margin-top: 20px;
    }
    .AdminsGiveLikeAdd{
        width: 300px;
        height: 250px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageAdd-main{
        margin-left: 60px;
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
</style>