<template>
    <div class="AdminsUserManageChild">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">
        <div class="AdminsUserManageChild-if">
            <div class="AdminsUserManageChild-if-image">
                <img v-if="this.IsShow" src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d"/>
                <img v-else :src="this.getUrl"/>
                <div class="lja">
                    <el-upload class="avatar-uploader"
                               :limit="1"
                               :show-file-list="false"
                               :on-success="handleAvatarSuccess"
                               :before-upload="beforeAvatarUpload"
                               accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                               action="http://localhost:8080/uploadImage">
                        <div class="ProfileMain-end">
                            <img class="ProfileMain-end-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB60lEQVRYCe1XP0vDUBC/q7GDOCi4WP8gOIqCH6BfwMVBEXXrqosIraurLYgOOomOBVerm6OjOPUjNE6CQxFs03e+S5vmvTQpSRqoQx6Ed+/evfvd/V5yvQKkY8wMoB9+rmIVgKhABJsANO1no+kQSa6vPkuTp5peWeSuaRlbnfVG0XhW1JBRFyznLlpVEuKeiPKhwL0OfNaLFdqAX+tdCFFbKtOqaqIxwJkzOAJ+YQaPZqYmXurH2FQPRJUZXJD1KhOaQ8QnycC2nJkxexiOYM+Sdp4ZXBo+NrTN6AsPeG12xdhVwdmjdgXdOwfgzKPD6Sd8wHfqe9jSrTwBOHeeMO2cuS84B6Mx4I0uzjps5o7vRAOICs5BJBZAHPDEAogLnkgAUcDny+1LfhjYGSNdQRTwHuCJnPnpj9gBnBNlBLVrvQo39FProxGh/I3Rqm/8ABAFELwhwt2w77wPHiDopTjAKEhtnmUPeM8MMgihj81ACN+hTNIAUgb+GwPd9mvtJkQjGuodd41cn3qLpzEgi8oHH/n+6Wy5R5ORHJ8OhuNVL0SID7JU5knQ7ULFsluzUbsjzpzB2acNyhjK0Ooy6+22HGBfsUlMlNlXzVL2UHU4EABvRv5jonockLFp0y4zN4uGlv2AaaoYBwN/reAFFzj+0usAAAAASUVORK5CYII="/>
                            <div class="ProfileMain-end-write">编辑</div>
                        </div>
                    </el-upload>
                </div>
            </div>
            <div class="AdminsUserManageChild-if-text">
                <div class="AdminsUserManageChild-if-text-label">用户Id:{{this.userMassage.userId}}</div>

                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">用户昵称: </div>
                    <input :placeholder="this.userMassage.userName" v-model="this.updateUserMassage.userName"/>
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">用户姓名: </div>
                    <input :placeholder="this.userMassage.userPracticalName" v-model="this.updateUserMassage.userPracticalName" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">用户账号: </div>
                    <input :placeholder="this.userMassage.userPhone" v-model="this.updateUserMassage.userPhone" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">用户密码: </div>
                    <input :placeholder="this.userMassage.userPassword" v-model="this.updateUserMassage.userPassword"/>
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">用户年龄: </div>
                    <input :placeholder="this.userMassage.userAge" v-model="this.updateUserMassage.userAge" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">用户性别: </div>
                    <input :placeholder="this.userMassage.userSex" v-model="this.updateUserMassage.userSex" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">身份证号: </div>
                    <input :placeholder="this.userMassage.userIdcard" v-model="this.updateUserMassage.userIdcard" />
                </div>
                <el-button class="submit" type="primary" size="small" @click="submit">更改信息</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {UpdateUserImageUrl,DeleteImage} from "@/network/fileUp"
    import {updateUser} from "@/network/user"
    export default {
        name: "AdminsUserManageChild",
        props:{
            userMassage:{
                type:Object
            },
        },
        data(){
            return{
                updateUserMassage:{},
                IsShow:true,//是否展示图片
            }
        },
        computed:{
            getUrl(){
                return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.userMassage.userImageUrl
            }
        },
        mounted() {
            this.testIsShow()
        },
        methods:{
            testIsShow(){
                if(this.userMassage.userImageUrl==null){
                    this.IsShow=true
                }else {
                    this.IsShow=false
                }
            },
            //点击提交
            submit(){
                let userName=this.userMassage.userName
                let userPracticalName=this.userMassage.userPracticalName
                let userPhone=this.userMassage.userPhone
                let userPassword=this.userMassage.userPassword
                let userAge=this.userMassage.userAge
                let userSex=this.userMassage.userSex
                let userIdcard=this.userMassage.userIdcard
                if(this.updateUserMassage.userName!=null){
                    userName=this.updateUserMassage.userName
                }
                if(this.updateUserMassage.userPracticalName!=null){
                    userPracticalName=this.updateUserMassage.userPracticalName
                }
                if(this.updateUserMassage.userPhone!=null && (/^1[3456789]\d{9}$/.test(this.updateUserMassage.userPhone))){
                    userPhone=this.updateUserMassage.userPhone
                }
                if(this.updateUserMassage.userPassword!=null){
                    userPassword=this.updateUserMassage.userPassword
                }
                if(this.updateUserMassage.userAge!=null){
                    userAge=this.updateUserMassage.userAge
                }
                if(this.updateUserMassage.userSex!=null){
                    userSex=this.updateUserMassage.userSex
                }
                if(this.updateUserMassage.userIdcard!=null){
                    let code = this.updateUserMassage.userIdcard//身份证号码
                    let reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
                    if (!code || !code.match(reg)) {
                        alert("身份证号码不正确")
                        return false
                    }else {
                        userIdcard=this.updateUserMassage.userIdcard
                    }
                }

                //更改信息
                updateUser(this.userMassage.userId,userPhone,userPassword,userName,
                    userPracticalName,userAge,userSex,userIdcard).then(res=>{
                    if(res){

                        this.updateUserMassage.userName=""
                        this.updateUserMassage.userPracticalName=""
                        this.updateUserMassage.userPhone=""
                        this.updateUserMassage.userPassword=""
                        this.updateUserMassage.userAge=""
                        this.updateUserMassage.userSex=""
                        this.updateUserMassage.userIdcard=""
                        this.$store.commit('updateIsShow',false)
                        this.$message.success("更改成功！")
                    }
                })

            },
            shadiaoClick(){
                this.$store.commit('updateIsShow',false)
            },
            handleAvatarSuccess(res, file){
                UpdateUserImageUrl(this.userMassage.userId,res).then(ress=>{
                    this.$store.commit("updateIsShow",false)
                    this.$message.success("更换成功！")
                })

            },
            //点击上传图片前
            beforeAvatarUpload(file){
                // //删除七牛上的已有的图片
                DeleteImage(this.userMassage.userImageUrl).then(res=>{
                    if(res==200){
                        return true;
                    }else {
                        return false
                    }
                })

            },
        }
    }
</script>

<style scoped>
    .el-button--primary{
        font-size: 8px;
    }
    .submit{
        margin-top: 15px;
        margin-left: 70px;
    }
    .AdminsUserManageChild-if-text-label{
        font-size: 9px;
        color: white;
    }
    .AdminsUserManageChild-if-text{
        margin-left: 30px;

    }
    .AdminsUserManageChild{
        width: 400px;
        height: 300px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 370px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .AdminsUserManageChild-if-image img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
    .AdminsUserManageChild-if-image{
        position: relative;
        top: 30px;
    }
    .AdminsUserManageChild-if{
        margin-left: 30px;
        margin-top:10px;
        display: flex;
        flex-wrap: nowrap;
    }

    .AdminsUserManageChild-if-text-massage{
        color: white;
        font-size: 9px;
        display: flex;
        flex-wrap: nowrap;
        margin-top: 10px;
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

    .ProfileMain-end img{
        width: 8px;
        height: 8px;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
    .ProfileMain-end{
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
    }
    .ProfileMain-end-write{
        color: #1989fa;
        font-size: 8px;
        /*鼠标变小手*/
        cursor: pointer;
    }
</style>