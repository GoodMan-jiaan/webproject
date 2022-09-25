<template>
    <div class="AdminsNavbarUpdatePassword">
        <div class="AdminsNavbarUpdatePassword-main">
            <div class="title">更改密码</div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">&emsp;管理员账号: </div>
                <input placeholder="请输入您的账号" v-model="this.phone" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">&emsp;&emsp;新的密码: </div>
                <input placeholder="请输入新的密码" type="password" v-model="this.password" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">确认新的密码: </div>
                <input placeholder="请确认新的密码" type="password" v-model="this.newPassword" />
            </div>
            <div class="AdminsNavbarUpdatePassword-number">
                <input placeholder="请输入验证码" v-model="this.yanNumber" />
                <el-button class="submit" @click="numberClick" type="primary" color="#009688" size="small">发送验证码</el-button>
            </div>
            <el-button class="submitClick" @click="submitClick" type="primary" color="#009688" size="small">修改密码</el-button>
        </div>
    </div>
</template>

<script>
    import {send} from "@/network/login"
    import {updatePasswordById} from "@/network/user"
    import {updateAdminsPasswordById} from "@/network/admins"
    export default {
        name: "AdminsNavbarUpdatePassword",
        data(){
            return{
                phone:"",
                password:"",
                newPassword:"",
                yanNumber:"",//输入的验证码
                backToNumber:"",//接收的验证码
            }
        },
        methods:{
            //点击发送验证码
            numberClick(){
                if(this.phone!=""){
                    if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                        this.$message.error("请输入正确的手机号")
                    }else {
                        send(this.phone).then(res=>{
                            if (res != "") {
                                this.$message.success("验证码发送成功")
                                this.backToNumber = res
                            } else {
                                this.$message.error("验证码发送失败")
                            }
                        })
                    }
                }else {
                    this.$message.error("手机号不能为空")
                }
            },
            //点击修改
            submitClick(){
                //判断账号信息
                if(this.phone!=""&&(/^1[3456789]\d{9}$/.test(this.phone))){
                    if(this.password!=""&&this.newPassword!=""&&this.password==this.newPassword){
                        if(this.backToNumber!=""){
                            if(this.yanNumber!=""&&this.backToNumber==this.yanNumber){
                                console.log(this.backToNumber);
                                updatePasswordById(this.$store.state.userId,this.newPassword).then(res=>{
                                    if(res){
                                        updateAdminsPasswordById(this.$store.state.adminsId,this.newPassword).then(ress=>{
                                            if(ress){
                                                this.$message.success("更改成功！")
                                                this.$router.push("/AdminsUserManage")
                                            }else {
                                                this.$message.error("修改失败！")
                                            }
                                        })
                                    }else {
                                        this.$message.error("修改失败！")
                                    }
                                })
                            }else {
                                this.$message.error("请输入正确的验证码！")
                            }
                        }else {
                            this.$message.error("请获取验证码！")
                        }
                    }else {
                        this.$message.error("密码为空或新密码不一致！")
                    }
                }else {
                    this.$message.error("账号为空或账号格式出错！")
                }
            }
        }
    }
</script>

<style scoped>
    .AdminsNavbarUpdatePassword-number{
        margin-top: 20px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
    .AdminsNavbarUpdatePassword{
        width: 100%;
        height: 300px;
        background-color: white;
    }
    .AdminsNavbarUpdatePassword-main{
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

    .AdminsNavbarUpdatePassword-number input{
        height: 12px;
        width: 80px;
        font-size: 10px;
        color: #606266;
        border: 0;
        outline: none;
        border-bottom: 1px solid #606266;
        position: relative;
        left: 30px;

    }

    .submit{
        width: 50px;
        font-size: 9px;
        position: relative;
        left: -10px;
        top: -8px;
    }
    .submitClick{
        width: 60px;
        font-size: 9px;
        margin-top: 20px;
        margin-left: 60px;
    }
    .AdminsUserManageChild-if-text-massageName{
        margin-right: 5px;
    }
    .title{
        font-size: 12px;
        color: black;
        font-weight: 600;
        margin-left: 60px;
        margin-bottom: 30px;
    }
</style>