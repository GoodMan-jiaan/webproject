<template>
    <div class="ProfileMain">
        <div class="ProfileMain-head">
            <div class="ProfileMain-head-img">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fpd%2F1l%2FQJ6129531091.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652879787&t=6d21941a205276d8d27ddd839cbf3d44"/>
            </div>
            <div class="ProfileMain-head-p">为了更好的保障您账号的安全，请您继续完善信息！</div>
        </div>
        <div v-if="this.IsShow" class="ProfileMain-lja">
            <div class="title"><h6>基本信息</h6></div>
            <div class="ProfileMain-main">
                <div class="content1">
                    <div class="content1-label">用户昵称</div>
                    <div class="content1-name">{{this.user.userName}}</div>
                </div>
                <div class="content1">
                    <div class="content1-label">姓&emsp;&emsp;名</div>
                    <div class="content1-name">{{this.user.userPracticalName}}</div>
                </div>
                <div class="content1">
                    <div class="content1-label">性&emsp;&emsp;别</div>
                    <div class="content1-name">{{this.user.userSex}}</div>
                </div>
                <div class="content1">
                    <div class="content1-label">年&emsp;&emsp;龄</div>
                    <div class="content1-name">{{this.user.userAge}}</div>
                </div>
                <div class="content1">
                    <div class="content1-label">账&emsp;&emsp;号</div>
                    <div class="content1-name">{{this.user.userPhone}}</div>
                </div>
                <div class="content1">
                    <div class="content1-label">密&emsp;&emsp;码</div>
                    <div class="content1-name">{{this.user.userPassword}}</div>
                </div>
                <div class="content1">
                    <div class="content1-label">身份证号</div>
                    <div class="content1-name">{{this.user.userIdcard}}</div>
                </div>
            </div>
            <div class="ProfileMain-end">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB60lEQVRYCe1XP0vDUBC/q7GDOCi4WP8gOIqCH6BfwMVBEXXrqosIraurLYgOOomOBVerm6OjOPUjNE6CQxFs03e+S5vmvTQpSRqoQx6Ed+/evfvd/V5yvQKkY8wMoB9+rmIVgKhABJsANO1no+kQSa6vPkuTp5peWeSuaRlbnfVG0XhW1JBRFyznLlpVEuKeiPKhwL0OfNaLFdqAX+tdCFFbKtOqaqIxwJkzOAJ+YQaPZqYmXurH2FQPRJUZXJD1KhOaQ8QnycC2nJkxexiOYM+Sdp4ZXBo+NrTN6AsPeG12xdhVwdmjdgXdOwfgzKPD6Sd8wHfqe9jSrTwBOHeeMO2cuS84B6Mx4I0uzjps5o7vRAOICs5BJBZAHPDEAogLnkgAUcDny+1LfhjYGSNdQRTwHuCJnPnpj9gBnBNlBLVrvQo39FProxGh/I3Rqm/8ABAFELwhwt2w77wPHiDopTjAKEhtnmUPeM8MMgihj81ACN+hTNIAUgb+GwPd9mvtJkQjGuodd41cn3qLpzEgi8oHH/n+6Wy5R5ORHJ8OhuNVL0SID7JU5knQ7ULFsluzUbsjzpzB2acNyhjK0Ooy6+22HGBfsUlMlNlXzVL2UHU4EABvRv5jonockLFp0y4zN4uGlv2AaaoYBwN/reAFFzj+0usAAAAASUVORK5CYII="/>
                <div class="ProfileMain-end-write" @click="IsShowClick">编辑</div>
            </div>
        </div>

        <div v-else class="ProfileMain-lja">
            <div class="title"><h6>修改信息</h6></div>
            <div class="ProfileMain-main2">
                <div class="content2">
                    <div class="content2-label">用户昵称</div>
                    <input :placeholder="this.user.userName" v-model="this.updateUser.userName" class="content2-input"
                           type="text"/>
                </div>
                <div class="inputline"></div>
            </div>
            <div class="ProfileMain-main2">
                <div class="content2">
                    <div class="content2-label">姓&emsp;&emsp;名</div>
                    <input :placeholder="this.user.userPracticalName" v-model="this.updateUser.userPracticalName"
                           class="content2-input" type="text"/>
                </div>
                <div class="inputline"></div>
            </div>
            <div class="ProfileMain-main2">
                <div class="content2">
                    <div class="content2-label">性&emsp;&emsp;别</div>
                    <input :placeholder="this.user.userSex" v-model="this.updateUser.userSex" class="content2-input"
                           type="text"/>
                </div>
                <div class="inputline"></div>
            </div>
            <div class="ProfileMain-main2">
                <div class="content2">
                    <div class="content2-label">年&emsp;&emsp;龄</div>
                    <input :placeholder="this.user.userAge" type="number" v-model="this.updateUser.userAge"
                           class="content2-input"/>
                </div>
                <div class="inputline"></div>
            </div>
            <div class="ProfileMain-main2">
                <div class="content2">
                    <div class="content2-label">账&emsp;&emsp;号</div>
                    <input :placeholder="this.user.userPhone" v-model="this.updateUser.userPhone" class="content2-input"
                           type="number"/>
                </div>
                <div class="inputline"></div>
            </div>
            <div class="ProfileMain-main2">
                <div class="content2">
                    <div class="content2-label">密&emsp;&emsp;码</div>
                    <input :placeholder="this.user.userPassword" v-model="this.updateUser.userPassword"
                           class="content2-input" type="text"/>
                </div>
                <div class="inputline"></div>
            </div>
            <div class="ProfileMain-main2">
                <div class="content2">
                    <div class="content2-label">身份证号</div>
                    <input :placeholder="this.user.userIdcard" v-model="this.updateUser.userIdcard"
                           class="content2-input" type="text"/>
                </div>
                <div class="inputline"></div>
            </div>
            <div class="ProfileMain-lja-end">
                <div class="tijiao" @click="tijiaoClick">提交</div>
                <div class="fanhui" @click="fanhuiClick">返回</div>
            </div>

        </div>
    </div>
</template>

<script>
    import {SelectUserById} from "@/network/details"
    import {updateMoreUserMassage} from "@/network/login"

    export default {
        name: "ProfileMain",
        data() {
            return {
                user: {},
                updateUser: {},
                IsShow: true,
                userIdcard: "",
            }
        },
        methods: {
            getUser() {
                if (this.$store.state.userId != "") {
                    SelectUserById(this.$store.state.userId).then(res => {
                        this.user = res
                        this.userIdcard = res.userIdcard
                        this.user.userIdcard = res.userIdcard.replace(res.userIdcard.substring(3, 14), "xxxxxxxx")
                        this.user.userPassword = res.userPassword.replace(res.userPassword.substring(3, res.userPassword.length), "********")
                        this.user.userPhone = res.userPhone.replace(res.userPhone.substring(3, 8), "******")

                    })
                }

            },
            IsShowClick() {
                console.log("点胶机编辑")
                this.IsShow = false
            },
            fanhuiClick() {
                this.IsShow = true
            },

            tijiaoClick() {
                //判断表单的内容是否更改了

                let userName = this.user.userName;
                let userAge = this.user.userAge;
                let userSex = this.user.userSex;
                let userPracticalName = this.user.userPracticalName;
                let userIdcard = this.userIdcard


                if (this.updateUser.userName != null)
                    userName = this.updateUser.userName
                if (this.updateUser.userAge != null)
                    userAge = this.updateUser.userAge
                if (this.updateUser.userSex != null)
                    userSex = this.updateUser.userSex
                if (this.updateUser.userPracticalName)
                    userPracticalName = this.updateUser.userPracticalName
                if (this.updateUser.userIdcard != null) {
                    let code = this.updateUser.userIdcard//身份证号码
                    let reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
                    if (!code || !code.match(reg)) {
                        console.log('身份证号码不正确')
                        alert("身份证号码不正确")
                        return false
                    }else {
                        userIdcard = this.updateUser.userIdcard
                    }
                }
                //判断身份证号

                //更改信息
                updateMoreUserMassage(this.$store.state.userId,userName,userAge,userSex,userIdcard,userPracticalName).then(res=>{
                    if(res!=null){
                        this.getUser()
                        this.IsShow=true
                        this.updateUser.userName=""
                        this.updateUser.userAge=""
                        this.updateUser.userSex=""
                        this.updateUser.userPracticalName=""
                        this.updateUser.userIdcard=""
                    }
                })

            }
        },
        mounted() {
            this.getUser();
        }

    }
</script>

<style scoped>

    .ProfileMain-lja-end {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin-top: 20px;
        font-size: 9px;
        color: #1989fa;
    }

    .content2-label {
        margin-right: 10px;
    }

    .ProfileMain-main2 {
        margin-left: 15px;
        margin-top: 20px;
    }

    .content2 {
        display: flex;
        flex-wrap: nowrap;
        color: #555666;
        font-size: 9px;
    }

    .inputline {
        width: 55%;
        margin-top: 3px;
        border-bottom: 1px solid #cdcdcd;
        position: relative;
        left: 45px;
    }

    .content2-input {
        height: 10px;
        width: 150px;
        font-size: 8px;
        border: 0;
        outline: none;
        position: relative;
        top: 1px;
    }

    .ProfileMain-lja {
        padding-top: 4px;
        background-color: white;
        padding-bottom: 20px;
    }

    .ProfileMain-head {
        background-color: white;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .ProfileMain-head-p {
        color: #555666;
        font-size: 7px;
        text-align: center;
        margin-bottom: 10px;
    }

    .ProfileMain-head-img img {
        width: 80px;
        height: 80px;
    }

    .ProfileMain-head-img {
        background: url("https://img-home.csdnimg.cn/images/20201223055552.png");
        width: 100%;
        height: 90px;
        text-align: center;
        padding-top: 20px;
    }

    .ProfileMain {
        width: 60%;
        border-radius: 1%;
        height: 500px;

    }

    .title {
        padding-left: 10px;
        width: 100%;
        border-bottom: 1px solid #f0f0f2;
    }

    .title h6 {
        line-height: 0px;
    }

    .content1 {
        display: flex;
        flex-wrap: nowrap;
        color: #555666;
        font-size: 9px;
        margin-bottom: 20px;
    }

    .content1-name {
        margin-left: 30px;
    }

    .ProfileMain-main {
        margin-top: 20px;
        margin-left: 15px;
    }

    .ProfileMain-end img {
        width: 10px;
        height: 10px;
        margin-right: 5px;
    }

    .ProfileMain-end {
        display: flex;
        flex-wrap: nowrap;
        margin-left: 15px;
    }

    .ProfileMain-end-write {
        color: #1989fa;
        font-size: 9px;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .fanhui {
        /*鼠标变小手*/
        cursor: pointer;
    }

    .tijiao {
        /*鼠标变小手*/
        cursor: pointer;
    }
</style>