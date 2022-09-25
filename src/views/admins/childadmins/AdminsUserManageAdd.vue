<template>
    <div class="AdminsUserManageAdd">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">
        <div class="AdminsUserManageAdd-main">
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">用户账号: </div>
                <input placeholder="用户账号" v-model="this.zuceName" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">密&emsp;&emsp;码: </div>
                <input placeholder="用户密码" v-model="this.zucePassword" />
            </div>
            <div class="AdminsUserManageChild-if-text-massage">
                <div class="AdminsUserManageChild-if-text-massageName">确定密码: </div>
                <input placeholder="确定密码" v-model="this.zucePassword1" />
            </div>
            <el-button class="successClass" @click="zuceClick" type="success" size="small">注&emsp;册</el-button>
        </div>
    </div>
</template>

<script>
    import { zuce, selectByuserPhone} from "@/network/login"
    export default {
        name: "AdminsUserManageAdd",
        data(){
            return{
                zuceName:"",
                zucePassword:"",
                zucePassword1:""
            }
        },
        methods:{
            //点击叉号
            shadiaoClick(){
                this.$store.commit('updateIsShowAdd',false)
            },
            //点击注册
            zuceClick(){
                if (!(/^1[3456789]\d{9}$/.test(this.zuceName))) {
                    this.$message.error('请输出正确的手机号！')
                } else if (this.zucePassword != this.zucePassword1) {
                    this.$message.error('密码不一致！')
                } else if (this.zucePassword1 == "" && this.zucePassword == "") {
                    this.$message.error('密码不能为空')
                } else {
                    //查看用户是否存在
                    selectByuserPhone(this.zuceName).then(res => {
                        //判断用户用户是否存在
                        if (res.userId == 0) {
                            //添加用户
                            zuce(this.zuceName, this.zucePassword).then(ress => {
                                this.$store.commit('updateIsShowAdd',false)
                                this.$message.success("添加成功！")
                            }).catch(err => {
                                this.$message.error('网络出错，注册出错！')
                            })
                        } else {
                            this.$message.error('用户已经存在！')

                        }
                    })

                }
            }
        }
    }
</script>

<style scoped>
    .successClass{
        margin-left: 70px;
        margin-top: 15px;
    }
    .AdminsUserManageAdd-main{
        margin-left: 60px;
    }
    .AdminsUserManageAdd{
        width: 300px;
        height: 200px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 270px;
        /*鼠标变小手*/
        cursor: pointer;
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