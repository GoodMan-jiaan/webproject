<template>
    <div class="login" @touchmove.prevent>
        <img class="login-img" src="https://img.tukuppt.com//ad_preview/00/15/05/5c999a124f477.jpg!/fw/980">
        <div class="login-mind">
            <div class="login-mind-left">
                <p>Welcome<br>lja四六级线上英语学习</p>
            </div>
            <div class="login-mind-right" v-if="zuce==='a'">
                <div class="nameone">
                    <div class="inputImg">
                        <div class="inputImg-img"><img src="../../assets/logo.png"></div>
                        <input placeholder="请输入用户名"
                               pattern="[0-9]*"
                               oninput="if(value.length > 11)value = value.slice(0, 11)"
                               v-model="loginName" type="tel"/>
                    </div>
                    <div class="inputline"></div>
                </div>

                <div class="nametwo">
                    <div class="inputImg">
                        <div class="inputImg-img"><img src="../../assets/logo.png"></div>
                        <input placeholder="请输入密码" v-model="loginPassword" type="password"/>
                    </div>
                    <div class="inputline"></div>
                </div>
                <div class="radio1class">
                    <el-radio v-model="radio1" label="1" size="small">学生</el-radio>
<!--                    <el-radio v-model="radio1" label="2" size="small">教师</el-radio>-->
                    <el-radio v-model="radio1" label="3" size="small">管理员</el-radio>
                </div>

                <el-button class="DengLu"
                           @click="loginClick">登&nbsp;&nbsp;&nbsp;&nbsp;录
                </el-button>
                <p class="password" @click="passwordClick">忘记密码?</p>
                <span class="ZuCe" @click="zuceClick">立即注册</span>
            </div>
            <div class="login-mind-rightb" v-else-if="zuce==='b'">
                <div class="namethreeb">
                    <div class="inputImgb">
                        <div class="inputImgb-img"><img src="../../assets/logo.png"></div>
                        <input placeholder="请输入用户名"
                               pattern="[0-9]*"
                               oninput="if(value.length > 11)value = value.slice(0, 11)"
                               v-model="forgetName" type="tel"/>
                    </div>
                    <div class="inputlineb"></div>
                </div>
                <div class="namethreeb">
                    <div class="inputImgb">
                        <div class="inputImgb-img"><img src="../../assets/logo.png"></div>
                        <input placeholder="请输入新的密码"
                               v-model="forgetPassword" type="password"/>
                    </div>
                    <div class="inputlineb"></div>
                </div>
                <div class="namethreeb">
                    <div class="inputImgb">
                        <div class="inputImgb-img"><img src="../../assets/logo.png"></div>
                        <input placeholder="请确认新的密码"
                               v-model="forgetNewPassword" type="tel"/>
                    </div>
                    <div class="inputlineb"></div>
                </div>
                <div class="namethreebb">
                    <div class="namethreebb-input">
                        <input v-model="forgetNumber" placeholder="请输入验证码"/>
                        <div class="inputlinebb"></div>
                    </div>
                    <el-button class="submit" @click="numberClick" type="primary" size="small">发送验证码</el-button>
                </div>
                <el-button class="updatePassword" @click="updatePassword" type="primary" size="small">更改密码</el-button>
                <p class="ljaZuCe" @click="ToLoginHome">登录</p>
            </div>
            <div class="login-mind-right" v-else-if="zuce==='c'">
                <div class="nameone">
                    <div class="inputImg">
                        <div class="inputImg-img"><img src="../../assets/logo.png"></div>
                        <input v-model="zuceName"
                               minlength="11"
                               type="tel"
                               oninput="if(value.length > 11)value = value.slice(0, 11)"
                               placeholder="请输入用户名(手机号)"/>
                    </div>
                    <div class="inputline"></div>
                </div>
                <div class="nametwo2">
                    <div class="inputImg">
                        <div class="inputImg-img"><img src="../../assets/logo.png"></div>
                        <input v-model="zucePassword" type="password" placeholder="请输入密码"/>
                    </div>
                    <div class="inputline"></div>
                </div>
                <div class="nametwo3">
                    <div class="inputImg">
                        <div class="inputImg-img"><img src="../../assets/logo.png"></div>
                        <input v-model="zucePassword1" type="password" placeholder="请确认密码"/>
                    </div>
                    <div class="inputline"></div>
                </div>
                <button class="DengLu" @click="zuceClick2">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
                <p class="ljaZuCe" @click="ToLoginHome">登录</p>
            </div>
        </div>
    </div>
<!--    登录界面-->
</template>

<script>
    import {login, zuce, selectByuserPhone, send, updatePassword} from "@/network/login"
    import {loginAdmins} from "@/network/admins"
    export default {
        name: "login",
        data() {
            return {
                zuce: "a",  //判断是否注册
                loginName: "",    //登录界面的用户名
                loginPassword: "",    //登录界面的密码
                radio1: "1",    //登录界面的单选框

                zuceName: "",    //注册界面的用户名
                zucePassword: "",     //注册界面的密码
                zucePassword1: "",     //注册界面的确认密码

                forgetName: "",
                forgetPassword: "",
                forgetNewPassword: "",
                forgetNumber: "",
                backToNumber: ""
            }
        },
        methods: {
            //点击更改密码
            updatePassword() {
                if (this.forgetName != "" && this.forgetNumber != "" && this.forgetNewPassword != "" && this.forgetPassword != "") {
                    if (this.forgetPassword == this.forgetNewPassword) {
                        if (this.forgetNumber == this.backToNumber) {
                            console.log("网络请求改密码")
                            updatePassword(this.forgetPassword, this.forgetName).then(res => {
                                if (res) {
                                    this.$message.success("密码更改成功")
                                    this.zuce = 'a'
                                }
                            })
                        } else {
                            this.$message.error("验证码输入失败！")
                        }
                    } else {
                        this.$message.error("重置密码两者不一致！")
                    }
                } else {
                    this.$message.error("请完善信息！")
                }
            },
            //点击发送验证码
            numberClick() {
                if (this.forgetName != "") {
                    if (!(/^1[3456789]\d{9}$/.test(this.forgetName))) {
                        this.$message.error("请输入正确的手机号")
                    } else {
                        send(this.forgetName).then(res => {
                            if (res != "") {
                                this.$message.success("验证码发送成功")
                                this.backToNumber = res
                            } else {
                                this.$message.error("验证码发送失败")
                            }
                        })

                    }
                } else {
                    this.$message.error("手机号（用户名）不能为空")
                }
            },
            //点击注册的字体
            zuceClick() {
                this.zuce = 'c'
            },
            ToLoginHome() {
                this.zuce = 'a'
            },
            //点击登录功能
            loginClick() {
                if (this.loginName != "" && this.loginPassword != "" && (/^1[3456789]\d{9}$/.test(this.loginName))) {
                    //学生、教师
                    if (this.radio1 == 1) {
                        //学生、教师网络请求
                        login(this.loginName, this.loginPassword).then(res => {
                            //调用Mutation更改vuex的数据

                            console.log(res);
                            if(res.userId==0){
                                this.$message.error("用户名或密码错误！")
                            }else {
                                this.$store.commit('updateUserId', res.userId)
                                this.$store.commit('updateUserPhone', res.userPhone)
                                this.$router.push('/')
                                this.$message.success('登录成功！')
                            }

                        }).catch(err => {
                            this.$message.error('网络出错')
                        })
                    } else {
                        //管理员网络请求
                        loginAdmins(this.loginName,this.loginPassword).then(res=>{
                            if(res.adminId==0){
                                this.$message.error("用户名或密码错误！")
                            }else {
                                login(this.loginName,this.loginPassword).then(ress=>{
                                    if(ress.userId==0){
                                        this.$message.error("登录失败！")
                                    }else {
                                        this.$store.commit("updateUserId",ress.userId)
                                        this.$store.commit("updateUserPhone",ress.userPhone);
                                        this.$store.commit("updateAdminsId",res.adminId)
                                        this.$store.commit("updateIsUser",true);
                                        this.$router.push('/AdminsUserManage')
                                        this.$message.success('登录成功！')
                                    }
                                })

                            }
                        })
                    }

                } else {
                    this.$message.error('请输入正确的用户名与密码！')
                }
            },
            //点击注册功能
            zuceClick2() {
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
                                //调用Mutation更改vuex的数据
                                this.$store.commit('updateUserId', ress.userId)
                                this.$store.commit('updateUserPhone', ress.userPhone)

                                if (this.$store.state.userId == 0) {
                                    this.$message.error("用户名或密码错误！")
                                } else {
                                    this.$router.push('/')
                                    this.$message.success('登录成功！')
                                }
                            }).catch(err => {
                                this.$message.error('网络出错，注册出错！')
                            })
                        } else {
                            this.$message.error('用户已经存在！')

                        }
                    })

                }

            },
            //点击忘记密码
            passwordClick() {
                this.zuce = 'b'
            }
        },
        setup() {

        },

    }
</script>

<style scoped>
    .updatePassword {
        margin-top: 20px;
        margin-left: 70px;
    }

    .namethreebb {
        display: flex;
        flex-wrap: nowrap;
    }

    .namethreebb-input input {
        height: 10px;
        width: 70px;
        font-size: 8px;
        border: 0;
        outline: none;
    }

    .el-button--primary {
        font-size: 8px;
    }

    .namethreebb-input {
        margin-right: 20px;
    }

    .namethreeb {
        margin-bottom: 20px;
    }

    .radio1class {
        position: relative;
        left: 30px;
        top: 10px;
    }

    .el-radio {
        width: 25px;
    }

    .DengLu {
        width: 70%;
        background-color: blue;
        color: white;
        border: 1px solid white;
        border-radius: 75px;
        margin-top: 20px;
        margin-left: 25px;
    }

    .ZuCe {
        margin-left: 180px;
        /*margin-top: 20px;*/
        color: blue;
        font-size: 7px;
        /*鼠标变小手*/
        cursor: pointer;
        position: relative;
        top: -20px;
    }

    .password {
        color: blue;
        font-size: 7px;
        margin-top: 20px;
        margin-left: 20px;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ljaZuCe {
        color: blue;
        font-size: 7px;
        /*鼠标变小手*/
        cursor: pointer;
        margin-top: 20px;
        margin-left: 200px;
    }

    .inputline {
        width: 65%;
        margin-top: 3px;
        border-bottom: 1px solid #cdcdcd;
    }

    .inputlineb {
        width: 65%;
        margin-top: 3px;
        border-bottom: 1px solid #cdcdcd;
    }

    .inputlinebb {
        width: 70px;
        margin-top: 3px;
        border-bottom: 1px solid #cdcdcd;
    }

    .nametwo {
        margin-left: 35px;
        margin-top: 35px;
    }

    .nametwo2 {
        margin-left: 35px;
        margin-top: 20px;
    }

    .nametwo3 {
        margin-left: 35px;
        margin-top: 20px;
    }

    .nameone {
        margin-left: 35px;
    }

    .namethree {
        margin-left: 35px;
    }

    .inputImgb {
        display: flex;
        flex-wrap: nowrap;
    }

    .inputImgb-img {
        width: 10px;
        height: 10px;
        position: relative;
        top: -3px;
        margin-right: 3px;
    }

    .inputImgb input {
        height: 10px;
        width: 150px;
        font-size: 8px;
        border: 0;
        outline: none;
    }

    .inputImgb-img img {
        width: 100%;
        height: 100%;
    }

    .inputImg {
        display: flex;
    }

    .inputImg input {
        height: 10px;
        width: 150px;
        font-size: 8px;
        border: 0;
        outline: none;
    }

    .inputImg-img {
        width: 10px;
        height: 10px;
        position: relative;
        top: -3px;
        margin-right: 3px;
    }

    .inputImg-img img {
        width: 100%;
        height: 100%;
    }

    .login {
        z-index: -1;
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .login-img {
        width: 100%;
        height: 300px;
    }

    .login-mind {
        z-index: 2;
        position: relative;
        margin: 0 auto;
        top: -200px;
        width: 500px;
        height: 250px;
        display: flex;

        box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.3);

    }

    .login-mind-left {
        /*position: relative;*/
        /*right: 63px;*/
        background-color: rgba(254, 219, 207, 0.5);
        width: 50%;
        color: white;
        font-family: "Arial Unicode MS";
        font-size: 18px;
    }

    .login-mind-left p {
        text-align: center;
        margin-top: 80px;
    }

    .login-mind-right {
        width: 50%;
        background-color: white;
        padding-top: 50px;
    }

    .login-mind-rightb {
        width: 50%;
        background-color: white;
        padding-top: 30px;
        padding-left: 30px;
    }

    ::-webkit-input-placeholder {
        color: #cdcdcd;
    }
</style>