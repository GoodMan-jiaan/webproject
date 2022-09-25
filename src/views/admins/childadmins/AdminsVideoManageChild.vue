<template>
    <div class="AdminsVideoManageChild">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">
        <div class="AdminsVideoManageChild-main">
            <div class="AdminsVideoManageChild-main-image">
                <img :src="this.getUrl"/>
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
            <div class="AdminsVideoManageChild-main-text">
                <div class="AdminsVideoManageChild-main-text-li">视频集Id: {{this.videoGatherMassage.videoesGatherId}}</div>
                <div class="AdminsVideoManageChild-main-text-li">用户ID: {{this.videoGatherMassage.userId}}</div>
                <div class="AdminsVideoManageChild-main-text-li">上传时间: {{timestampToTime(this.videoGatherMassage.videoesGatherUptime/1000)}}</div>
                <div class="numberClass">
                    <div class="numberClass-one">点赞数: {{this.videoGatherMassage.videoesGatherTotalAttention}}</div>
                    <div class="numberClass-one">收藏数: {{this.videoGatherMassage.videoesGatherTotalCollect}}</div>
                    <div class="numberClass-one">评论数: {{this.videoGatherMassage.videoesGatherTotalComment}}</div>
                </div>
            </div>
        </div>
        <div class="AdminsVideoManageChild-input">
            <dvi class="AdminsVideoManageChild-input-one">
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">视频集名称: </div>
                    <input :placeholder="this.videoGatherMassage.videoesGatherName" v-model="this.videoGather.videoesGatherName" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">视频集作者: </div>
                    <input :placeholder="this.videoGatherMassage.videoesGatherAuthorName" v-model="this.videoGather.videoesGatherAuthorName" />
                </div>
            </dvi>
            <dvi class="AdminsVideoManageChild-input-one">
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">视频集类型: </div>
                    <input :placeholder="this.videoGatherMassage.videoesGatherKind" v-model="this.videoGather.videoesGatherKind" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">视频集机构: </div>
                    <input :placeholder="this.videoGatherMassage.videoesGatherOrgan" v-model="this.videoGather.videoesGatherOrgan" />
                </div>
            </dvi>
        </div>
        <div class="AdminsUserManageChild-if-text-massage1">
            <div class="AdminsUserManageChild-if-text-massageName">视频集介绍: </div>
            <el-input class="AdminsUserManageChild-if-text-massage-textarea"
                      :rows="3" type="textarea"
                      v-model="this.videoGather.videoesGatherIntroduce"
                      :placeholder="this.videoGatherMassage.videoesGatherIntroduce" />
        </div>
        <el-button class="submit" type="primary" size="small" @click="submit">保存</el-button>
    </div>
</template>

<script>
    import {updateVideoGatherMassage,updateVideoesGatherImage} from "@/network/details"
    import {UpdateUserImageUrl,DeleteImage} from "@/network/fileUp"

    export default {
        name: "AdminsVideoManageChild",
        props:{
            videoGatherMassage:{
                type:Object
            }
        },
        data(){
            return{
                videoGather:{}
            }
        },
        computed:{
            getUrl(){
                return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.videoGatherMassage.videoesGatherImage
            }
        },
        methods:{
            shadiaoClick(){
                this.$store.commit('updateIsShowVideoGather',false)
            },
            submit(){
                let videoesGatherName=this.videoGatherMassage.videoesGatherName
                let videoesGatherAuthorName=this.videoGatherMassage.videoesGatherAuthorName
                let videoesGatherKind=this.videoGatherMassage.videoesGatherKind
                let videoesGatherOrgan=this.videoGatherMassage.videoesGatherOrgan
                let videoesGatherIntroduce=this.videoGatherMassage.videoesGatherIntroduce

                if(this.videoGather.videoesGatherName!=null){
                    videoesGatherName=this.videoGather.videoesGatherName
                }
                if(this.videoGather.videoesGatherAuthorName){
                    videoesGatherAuthorName=this.videoGather.videoesGatherAuthorName
                }
                if(this.videoGather.videoesGatherKind){
                    videoesGatherKind=this.videoGather.videoesGatherKind
                }
                if(this.videoGather.videoesGatherOrgan){
                    videoesGatherOrgan=this.videoGather.videoesGatherOrgan
                }
                if(this.videoGather.videoesGatherIntroduce){
                    videoesGatherIntroduce=this.videoGather.videoesGatherIntroduce
                }
                updateVideoGatherMassage(this.videoGatherMassage.videoesGatherId,videoesGatherName,videoesGatherAuthorName,
                    videoesGatherIntroduce,videoesGatherOrgan,videoesGatherKind).then(res=>{
                        if(res){
                            this.videoGather.videoesGatherName=""
                            this.videoGather.videoesGatherAuthorName=""
                            this.videoGather.videoesGatherKind=""
                            this.videoGather.videoesGatherOrgan=""
                            this.videoGather.videoesGatherIntroduce=""
                            this.$store.commit('updateIsShowVideoGather',false)
                            this.$message.success("更改成功！")
                        }
                })

            },
            handleAvatarSuccess(res, file){
                updateVideoesGatherImage(this.videoGatherMassage.videoesGatherId,res).then(ress=>{
                    this.$store.commit("updateIsShowVideoGather",false)
                    this.$message.success("更换成功！")

                })

            },
            //点击上传图片前
            beforeAvatarUpload(file){

                //删除七牛上的已有的图片
                DeleteImage(this.videoGatherMassage.videoesGatherImage).then(res=>{
                    if(res==200){
                        return true;
                    }else {
                        return false
                    }
                })

            },
            //时间戳转化格式
            timestampToTime (time) {
                // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var date = new Date(time * 1000)
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
    .el-button--primary{
        font-size: 8px;
    }
    .submit{
        margin-top: 20px;
        margin-left: 225px;
    }
    .AdminsUserManageChild-if-text-massage-textarea{
        width: 75%;
        font-size: 9px;
    }
    .AdminsVideoManageChild-input-one{
        display: flex;
        flex-wrap: nowrap;
    }
    .AdminsVideoManageChild-input{
        margin-top: 20px;
        margin-left: 30px;
    }
    .AdminsUserManageChild-if-text-massage1{
        color: white;
        font-size: 9px;
        display: flex;
        flex-wrap: nowrap;
        margin-top: 10px;
        margin-right: 20px;
        margin-left: 30px;
    }
    .AdminsUserManageChild-if-text-massage{
        color: white;
        font-size: 9px;
        display: flex;
        flex-wrap: nowrap;
        margin-top: 10px;
        margin-right: 20px;
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
    .numberClass-one{
        margin-left: 20px;
    }
    .numberClass{
        display: flex;
        flex-wrap: nowrap;
    }
    .AdminsVideoManageChild-main-text-li{
        margin-bottom: 10px;
    }
    .AdminsVideoManageChild-main-text{
        margin-left: 30px;
        font-size: 9px;
        color: white;
    }
    .AdminsVideoManageChild-main-image{
        margin-left: 30px;
    }
    .AdminsVideoManageChild-main-image img{
        width: 100px;
    }
    .AdminsVideoManageChild{
        width: 500px;
        height: 300px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 470px;
        /*鼠标变小手*/
        cursor: pointer;
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
    .AdminsVideoManageChild-main{
        display: flex;
        flex-wrap: nowrap;
    }
</style>