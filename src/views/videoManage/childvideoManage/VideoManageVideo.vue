<template>
    <div class="VideoManageVideo">
        <div>
            <VideoComponents :video-src="this.videoMassage.courseVideoesResources"></VideoComponents>
            <div class="lja">
                <el-upload class="avatar-uploader"
                           :limit="1"
                           :show-file-list="false"
                           :on-success="handleAvatarSuccess"
                           :before-upload="beforeAvatarUpload"
                           action="http://localhost:8080/upload">
                    <div class="ProfileMain-end">
                        <img class="ProfileMain-end-img"
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB60lEQVRYCe1XP0vDUBC/q7GDOCi4WP8gOIqCH6BfwMVBEXXrqosIraurLYgOOomOBVerm6OjOPUjNE6CQxFs03e+S5vmvTQpSRqoQx6Ed+/evfvd/V5yvQKkY8wMoB9+rmIVgKhABJsANO1no+kQSa6vPkuTp5peWeSuaRlbnfVG0XhW1JBRFyznLlpVEuKeiPKhwL0OfNaLFdqAX+tdCFFbKtOqaqIxwJkzOAJ+YQaPZqYmXurH2FQPRJUZXJD1KhOaQ8QnycC2nJkxexiOYM+Sdp4ZXBo+NrTN6AsPeG12xdhVwdmjdgXdOwfgzKPD6Sd8wHfqe9jSrTwBOHeeMO2cuS84B6Mx4I0uzjps5o7vRAOICs5BJBZAHPDEAogLnkgAUcDny+1LfhjYGSNdQRTwHuCJnPnpj9gBnBNlBLVrvQo39FProxGh/I3Rqm/8ABAFELwhwt2w77wPHiDopTjAKEhtnmUPeM8MMgihj81ACN+hTNIAUgb+GwPd9mvtJkQjGuodd41cn3qLpzEgi8oHH/n+6Wy5R5ORHJ8OhuNVL0SID7JU5knQ7ULFsluzUbsjzpzB2acNyhjK0Ooy6+22HGBfsUlMlNlXzVL2UHU4EABvRv5jonockLFp0y4zN4uGlv2AaaoYBwN/reAFFzj+0usAAAAASUVORK5CYII="/>
                        <div class="ProfileMain-end-write">点击更换视频</div>
                    </div>
                </el-upload>
            </div>
        </div>
        <div class="VideoManageUpdate-main-one-title">
            <div>
                <div class="VideoManageUpdate-main-one-title1">
                    视频标题:<input :placeholder="this.videoMassage.courseVideoesName" v-model="this.inputText" class="oneTitle" type="text"/>
                    <div class="inputline"></div>
                </div>
                <div class="VideoManageUpdate-main-one-title1">
                    视频序列:<input :placeholder="this.videoMassage.videoesNumber" v-model="this.inputText1" class="oneTitle" type="number"/>
                    <div class="inputline"></div>
                </div>
            </div>
            <el-button class="submit1" @click="submitClick" color="#ff329b" type="primary" size="small">更改信息</el-button>
            <el-button class="submit" @click="deleteClick" color="#ff329b" type="primary" size="small">删除视频</el-button>
        </div>
        <VideoManageFileMain></VideoManageFileMain>
    </div>
</template>

<script>
    import VideoComponents from "@/components/VideoComponents"
    import {DeleteVideo,DeleteFile} from "@/network/fileUp"
    import {SelectCourseById,UpdateCourseImageUrl,updateCourseTitle,deleteByCourseId} from "@/network/details"
    import VideoManageFileMain from "./VideoManageFileMain"

    export default {
        name: "VideoManageVideo",
        components: {
            VideoComponents,
            VideoManageFileMain
        },
        data() {
            return {
                videoMassage: {},//视频信息
                inputText: "",//标题输入框
                inputText1:"",//视频序列输入框
            }
        },
        computed: {
            //获取vuex中的视频的视频Id
            getCourse() {
                return this.$store.state.videoCourseId
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                UpdateCourseImageUrl(this.getCourse, res).then(ress => {
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
                //删除七牛上的已有的图片
                DeleteVideo(this.videoMassage.courseVideoesResources).then(res => {
                    if (res == 200) {
                        return true;
                    } else {
                        return false
                    }
                })

            },
            //根据视频Id过去视频信息
            getCourseMassage() {
                if(this.getCourse!=0){
                    SelectCourseById(this.getCourse).then(res => {
                        this.videoMassage = res
                        console.log(this.videoMassage.courseVideoesResources)
                    })
                }
            },
            //点击更改标题
            submitClick(){
                let inputText=this.videoMassage.courseVideoesName
                let inputText1=this.videoMassage.videoesNumber
                if(this.inputText!="")
                    inputText=this.inputText
                if(this.inputText1!="")
                    inputText1=this.inputText1

                updateCourseTitle(this.getCourse,inputText,inputText1).then(res=>{
                    if(res){
                        this.getCourseMassage()
                        this.$store.commit("updateisRefresh",this.getCourse++)
                        this.$router.go(0)
                        this.inputText=""
                        this.inputText1=""
                        this.$message.success("更新成功！")
                    }else {
                        this.$message.error("更新失败！")
                    }
                })

            },
            deleteClick(){
                //判断视频是否有文件，有就直接删除七牛云的文件
                if(this.videoMassage.courseFileResources!=null){
                    DeleteFile(this.videoMassage.courseFileResources).then(res=>{
                        if(res==200){

                            //判断视频是否有视频，有就直接删除七牛云的视频
                            if(this.videoMassage.courseVideoesResources!=null){
                                DeleteVideo(this.videoMassage.courseVideoesResources).then(ress=>{
                                    if(ress==200){
                                        deleteByCourseId(this.getCourse).then(resss=>{
                                            if(resss){
                                                this.getCourseMassage()
                                                this.$store.commit("updateisRefresh",this.getCourse++)
                                                this.$router.go(0)
                                                this.$message.success("删除成功")
                                            }else {
                                                this.$message.error("删除失败")
                                            }
                                        })
                                    }else {
                                        this.$message.error("删除失败！")
                                    }
                                })
                            }
                        }else {
                            this.$message.error("删除失败！")
                        }
                    })
                }
            }
        },
        //监听vuex数据发生变化时触发事件，用于监听CourseId的值
        watch:{
            getCourse(newCount, oldCount){
                this.getCourseMassage()
            }
        }

    }
</script>

<style scoped>

    .VideoManageVideo {
        margin-left: 40px;
        margin-top: 40px;
    }

    .VideoManageUpdate-main-one-title1 {
        font-size: 10px;
        color: #9195A3;
        margin-bottom: 5px;
    }

    .VideoManageUpdate-main-one-title {
        margin-bottom: 10px;
        margin-top:10px;
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
        top: 6px;
    }
    .submit1{
        font-size: 9px;
        position: relative;
        left: 25px;
        top: 6px;
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