<template>
    <div class="VideoManageFileMain">
        <div class="title">
            <div class="title-one">文件信息</div>
            <div class="title-pa"></div>
        </div>
        <div v-if="IsMain" class="VideoManageFileMain-main">
            <div class="VideoManageUpdate-main-one-title">
                <div class="VideoManageUpdate-main-one-title1">
                    文件标题:<input :placeholder="this.videoMassage.courseFileTitle" v-model="this.inputText" class="oneTitle" type="text"/>
                    <div class="inputline"></div>
                </div>
                <el-button class="submit" @click="updateTitle" color="#ff329b" type="primary" size="small">更改标题</el-button>
                <el-button class="submit" @click="deleteFile" color="#ff329b" type="primary" size="small">删除文件</el-button>
            </div>
            <div >
                <div class="fileClass"><a :href="getFileUrl1(this.videoMassage.courseFileResources)">{{this.videoMassage.courseFileTitle}}</a></div>
                <div class="lja">
                    <el-upload class="avatar-uploader"
                               :limit="1"
                               :show-file-list="false"
                               :on-success="handleAvatarSuccess"
                               :before-upload="beforeAvatarUpload"
                               action="http://localhost:8080/uploadFile">
                        <div class="ProfileMain-end">
                            <img class="ProfileMain-end-img"
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB60lEQVRYCe1XP0vDUBC/q7GDOCi4WP8gOIqCH6BfwMVBEXXrqosIraurLYgOOomOBVerm6OjOPUjNE6CQxFs03e+S5vmvTQpSRqoQx6Ed+/evfvd/V5yvQKkY8wMoB9+rmIVgKhABJsANO1no+kQSa6vPkuTp5peWeSuaRlbnfVG0XhW1JBRFyznLlpVEuKeiPKhwL0OfNaLFdqAX+tdCFFbKtOqaqIxwJkzOAJ+YQaPZqYmXurH2FQPRJUZXJD1KhOaQ8QnycC2nJkxexiOYM+Sdp4ZXBo+NrTN6AsPeG12xdhVwdmjdgXdOwfgzKPD6Sd8wHfqe9jSrTwBOHeeMO2cuS84B6Mx4I0uzjps5o7vRAOICs5BJBZAHPDEAogLnkgAUcDny+1LfhjYGSNdQRTwHuCJnPnpj9gBnBNlBLVrvQo39FProxGh/I3Rqm/8ABAFELwhwt2w77wPHiDopTjAKEhtnmUPeM8MMgihj81ACN+hTNIAUgb+GwPd9mvtJkQjGuodd41cn3qLpzEgi8oHH/n+6Wy5R5ORHJ8OhuNVL0SID7JU5knQ7ULFsluzUbsjzpzB2acNyhjK0Ooy6+22HGBfsUlMlNlXzVL2UHU4EABvRv5jonockLFp0y4zN4uGlv2AaaoYBwN/reAFFzj+0usAAAAASUVORK5CYII="/>
                            <div class="ProfileMain-end-write">点击更换文件</div>
                        </div>
                    </el-upload>
                </div>
            </div>
        </div>
        <div v-else class="VideoManageFileMain-main1">
            <div class="VideoManageFileMain-main1-title">该视频暂无配套文件，可新添！</div>
            <div>
                <div class="inputwidth"><el-input class="lja" size="small" v-model="files.FileTitle" placeholder="请输入文档名称"/></div>
                <div class="inputwidth-button">
                    <uploadFile class="uplafi" @transmitFile="getFileUrl"></uploadFile>
                    <el-button @click="submitClick" class="inputwidth-button-lja" type="primary" size="small">提交</el-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import uploadFile from "@/components/uploadFile"
    import {SelectCourseById,updateCourseFile,updateCourseFile1} from "@/network/details"
    import {DeleteFile} from "@/network/fileUp"

    export default {
        name: "VideoManageFileMain",
        data(){
            return{
                IsMain:false,
                files:{//文件信息
                    FileTitle:"",
                    FileUrl:""
                },
                videoMassage:{},
                inputText:"",//文件标题输入框
            }
        },
        components:{
            uploadFile
        },
        computed:{
            getCourse(){
                return this.$store.state.videoCourseId
            }
        },
        methods:{
            handleAvatarSuccess(res, file) {
                console.log(res)
                updateCourseFile1(res,this.getCourse).then(ress => {
                    if(ress){
                        this.getCourseMassage()
                        this.$message.success("更改成功！")
                    }else {
                        this.$message.error("更改失败！")
                    }
                })
            },
            //点击上传图片前
            beforeAvatarUpload(file) {
                //删除七牛上已有的文件
                DeleteFile(this.videoMassage.courseFileResources).then(res => {
                    if (res == 200) {
                        return true;
                    } else {
                        return false
                    }
                })
            },
            //返回文件的URL
            getFileUrl(val){
                this.files.FileUrl=val
            },

            //点击删除文件
            deleteFile(){
                let title=""
                let url=""
                //删除七牛云上的文件
                DeleteFile(this.videoMassage.courseFileResources).then(res=>{
                    if(res==200){
                        updateCourseFile(title,url,this.getCourse).then(ress=>{
                            if(ress){
                                this.IsMain=false
                                // this.getCourseMassage()
                                this.$message.success("删除成功！")

                            }else {
                                this.$message.error("删除失败！")
                            }
                        })
                    }else {
                        this.$message.error("删除失败！")
                    }
                })
            },
            //点击更改标题
            updateTitle(){
                if(this.inputText!=""){
                    updateCourseFile(this.inputText,this.videoMassage.courseFileResources,this.getCourse).then(res=>{
                        if(res){
                            this.getCourseMassage()
                            this.inputText=""
                            this.$message.success("更改成功！")
                        }else {
                            this.$message.error("更改失败！")
                        }
                    })
                }
            },

            //点击上传视频
            submitClick(){
                if(this.files.FileTitle!=""&&this.files.FileUrl!=""){
                    updateCourseFile(this.files.FileTitle,this.files.FileUrl,this.getCourse).then(res=>{
                        if(res){
                            this.getCourseMassage()
                            this.files.FileTitle=""
                            this.files.FileUrl=""
                            this.$message.success("上传成功！")
                        }else {
                            this.$message.error("上传失败！")
                        }
                    })
                }else {
                    this.$message.error("请完善信息！")
                }
            },
            //获得文件信息
            getCourseMassage(){
                if(this.getCourse!=0){
                    SelectCourseById(this.getCourse).then(res => {
                        this.videoMassage = res
                        if(res.courseFileTitle!=null&&res.courseFileResources!=null){
                            this.IsMain=true
                        }else {
                            this.IsMain=false
                        }
                    })
                }
            },
            //添加路径信息
            getFileUrl1(url){
                return "http://rb8vxgfgt.hn-bkt.clouddn.com/"+url
            }
        },
        //监听vuex数据发生变化时触发事件，用于监听CourseId的值
        watch:{
            getCourse(newCount, oldCount){
                console.log(newCount)
                this.getCourseMassage()
            }
        }
    }
</script>

<style scoped>
    .fileClass{
        font-size: 10px;
        margin-bottom: 5px;
    }
    .inputwidth-button{
        display: flex;
        flex-wrap: nowrap;
    }
    .inputwidth-button-lja{
        position: relative;
        left: 80px;
        top: 10px;
    }
    .el-button--primary{
        font-size: 8px;
    }
    .VideoManageFileMain-main1-title{
        width: 100%;
        /*text-align: center;*/
        color: #9195A3;
        font-size: 9px;
        margin-bottom: 10px;
        /*padding-top: 20px;*/
    }
    .lja{
        font-size: 9px;
    }
    .inputwidth{
        width: 200px;
        /*margin-left: 66px;*/
        margin-top: 5px;
    }
    .uplafi{
        /*margin-left: 68px;*/
        margin-top: 10px;
    }
    .VideoManageFileMain-main{
        width: 85%;
        /*height: 400px;*/
        /*background-color: #f6f6f6;*/
        margin: 20px auto ;
    }
    .VideoManageFileMain-main1{
        width: 85%;
        /*height: 200px;*/
        /*background-color: #f6f6f6;*/
        margin: 20px auto ;
    }
    .VideoManageFileMain{
        width: 100%;
        margin-top: 20px;
        /*margin-top: 40px;*/
    }
    .title-pa{
        width: 40px;
        height: 3px;
        margin-top: 3px;
        background-color: #ff329b;
    }

    .title {
        /*margin-left: 43px;*/
        font-size: 10px;
        font-weight: 600;
    }


    .VideoManageUpdate-main-one-title1 {
        font-size: 10px;
        color: #9195A3;
    }

    .VideoManageUpdate-main-one-title {
        margin-bottom: 10px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    .VideoManageUpdate-main-one-title1 input {
        height: 10px;
        width: 150px;
        font-size: 8px;
        border: 0 solid #f6f6f6;
        outline: none;
        background-color: #f6f6f6;
    }

    .inputline {
        width: 150px;
        border-bottom: 1px solid black;
        position: relative;
        left: 45px;
    }

    .submit {
        font-size: 9px;
        position: relative;
        left: 25px;
        top: -5px;
    }

    .ProfileMain-end img {
        width: 8px;
        height: 8px;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }

    .ProfileMain-end {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
    }

    .ProfileMain-end-write {
        color: #1989fa;
        font-size: 8px;
        /*鼠标变小手*/
        cursor: pointer;
    }
</style>