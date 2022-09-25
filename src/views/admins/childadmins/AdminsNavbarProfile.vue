<template>
    <div class="AdminsNavbarProfile">
        <div class="AdminsNavbarProfile-main">
            <div class="title">个人基本信息</div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">管理员&emsp;账号: </div>
                <input :placeholder="this.adminsMassage.adminAccount" v-model="this.updateAdmins.adminAccount"  />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">管理员&emsp;名称: </div>
                <input :placeholder="this.adminsMassage.adminName" v-model="this.updateAdmins.adminName" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">管理员手机号: </div>
                <input :placeholder="this.adminsMassage.adminPhone" v-model="this.updateAdmins.adminPhone" />
            </div>
            <el-button class="submit" @click="submitClick" color="#009688" type="primary" size="small">保存</el-button>
        </div>
    </div>
</template>

<script>
    import {SelectAdminsByAdmins,updateAdminsById} from "@/network/admins"
    export default {
        name: "AdminsNavbarProfile",
        data(){
            return{
                adminsMassage:{},
                updateAdmins:{}
            }
        },
        methods:{
            //过去用户信息
            getAdminsMessage(){
                SelectAdminsByAdmins(this.$store.state.adminsId).then(res=>{
                    this.adminsMassage=res
                })
            },
            //点击保存
            submitClick(){
                let adminAccount=this.adminsMassage.adminAccount
                let adminName=this.adminsMassage.adminName
                let adminPhone=this.adminsMassage.adminPhone

                if(this.updateAdmins.adminAccount!=null){
                    adminAccount=this.updateAdmins.adminAccount
                }
                if(this.updateAdmins.adminName!=null){
                    adminName=this.updateAdmins.adminName
                }
                if(this.updateAdmins.adminPhone!=null){
                    adminPhone=this.updateAdmins.adminPhone
                }

                updateAdminsById(this.$store.state.adminsId,adminPhone,adminName,adminAccount).then(res=>{
                    if(res){
                        this.$router.push("/AdminsUserManage")
                        this.$message.success("保存成功！")
                    }else {
                        this.$message.error("保存出错！")
                    }
                })

            }
        },
        mounted() {
            this.getAdminsMessage()
        }
    }
</script>

<style scoped>
    .submit{
        margin-top: 20px;
        margin-left: 80px;
    }
    .title{
        font-size: 12px;
        color: black;
        font-weight: 600;
        margin-left: 60px;
        margin-bottom: 30px;
    }
    .AdminsNavbarProfile{
        width: 100%;
        height: 300px;
        background-color: white;
    }
    .AdminsNavbarProfile-main{
        width: 250px;
        margin: 20px auto;
        padding-top: 40px;
    }
    .AdminsUserManageChild-if-text-massage{
        color: #606266;
        font-size: 9px;
        display: flex;
        flex-wrap: nowrap;
        margin-top: 20px;
    }
    .AdminsUserManageChild-if-text-massage input{
        height: 12px;
        width: 150px;
        font-size: 10px;
        color: #606266;
        border: 0;
        outline: none;
        border-bottom: 1px solid #606266;
    }
    .AdminsUserManageChild-if-text-massageName{
        margin-right: 5px;
    }
</style>