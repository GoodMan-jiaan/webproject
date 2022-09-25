<template>
    <div class="AdminsCourseChild">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">
        <div class="AdminsCourseChild-main">
            <div class="AdminsCourseChild-main-video">
                <video :src="this.getVideoSrc" class="VideoComponents-video" controls="true"></video>
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
                <div v-if="this.IsFileShow" class="ljaxxx">
                    <div class="fileClass">文件:<a :href="this.getFileSrc">{{this.courseMassage.courseFileTitle}}</a></div>
                    <div class="lja">
                        <el-upload class="avatar-uploader"
                                   :limit="1"
                                   :show-file-list="false"
                                   :on-success="handleAvatarSuccess1"
                                   :before-upload="beforeAvatarUpload1"
                                   action="http://localhost:8080/uploadFile">
                            <div class="ProfileMain-end">
                                <img class="ProfileMain-end-img"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB60lEQVRYCe1XP0vDUBC/q7GDOCi4WP8gOIqCH6BfwMVBEXXrqosIraurLYgOOomOBVerm6OjOPUjNE6CQxFs03e+S5vmvTQpSRqoQx6Ed+/evfvd/V5yvQKkY8wMoB9+rmIVgKhABJsANO1no+kQSa6vPkuTp5peWeSuaRlbnfVG0XhW1JBRFyznLlpVEuKeiPKhwL0OfNaLFdqAX+tdCFFbKtOqaqIxwJkzOAJ+YQaPZqYmXurH2FQPRJUZXJD1KhOaQ8QnycC2nJkxexiOYM+Sdp4ZXBo+NrTN6AsPeG12xdhVwdmjdgXdOwfgzKPD6Sd8wHfqe9jSrTwBOHeeMO2cuS84B6Mx4I0uzjps5o7vRAOICs5BJBZAHPDEAogLnkgAUcDny+1LfhjYGSNdQRTwHuCJnPnpj9gBnBNlBLVrvQo39FProxGh/I3Rqm/8ABAFELwhwt2w77wPHiDopTjAKEhtnmUPeM8MMgihj81ACN+hTNIAUgb+GwPd9mvtJkQjGuodd41cn3qLpzEgi8oHH/n+6Wy5R5ORHJ8OhuNVL0SID7JU5knQ7ULFsluzUbsjzpzB2acNyhjK0Ooy6+22HGBfsUlMlNlXzVL2UHU4EABvRv5jonockLFp0y4zN4uGlv2AaaoYBwN/reAFFzj+0usAAAAASUVORK5CYII="/>
                                <div class="ProfileMain-end-write">点击更换文件</div>
                            </div>
                        </el-upload>
                    </div>
                </div>
                <div v-else class="ljaxxx">
                    <uploadFile @transmitFile="getFileUrl"></uploadFile>
                </div>
            </div>
            <div class="AdminsCourseChild-main-text">
                <div class="AdminsUserManageChild-if-text-label">视频 Id:{{this.courseMassage.courseId}}</div>
                <div class="AdminsUserManageChild-if-text-label">视频集Id:{{this.courseMassage.videoesGatherId}}</div>
                <div class="AdminsUserManageChild-if-text-label">上传时间:{{timestampToTime(this.courseMassage.courseVideoesUpTime/1000)}}</div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">视频名称: </div>
                    <input :placeholder="this.courseMassage.courseVideoesName" v-model="this.videoTitle" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">文件名称: </div>
                    <input :placeholder="this.courseMassage.courseFileTitle" v-model="this.fileTitle" />
                </div>
                <div class="AdminsUserManageChild-if-text-massage">
                    <div class="AdminsUserManageChild-if-text-massageName">视频集数: </div>
                    <input :placeholder="this.courseMassage.videoesNumber" type="number" v-model="this.videoNumber" />
                </div>
                <el-button class="successClass" type="success" size="small" @click="sumbit" >保存</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    import uploadFile from "@/components/uploadFile"
    import {updateAdminsCourse} from "@/network/admins"
    import {DeleteVideo,DeleteFile} from "@/network/fileUp"
    import {UpdateCourseImageUrl,updateCourseFile1,updateCourseFile} from "@/network/details"

    export default {
        name: "AdminsCourseChild",
        components:{
            uploadFile
        },
        computed:{
            getVideoSrc(){
                return "http://rb8v7sv0k.hn-bkt.clouddn.com/"+this.courseMassage.courseVideoesResources
            },
            getFileSrc(){
                return "http://rb8vxgfgt.hn-bkt.clouddn.com/"+this.courseMassage.courseFileResources
            }
        },
        data(){
            return{
                IsFileShow:true,//是否展示文件
                videoTitle:"",
                fileTitle:"",
                videoNumber:"",
                FileUrl:""
            }
        },
        props:{
            courseMassage:{
                type:Object
            }
        },
        mounted() {
            this.testIsFileShow()
        },
        methods:{
            //点击保存按钮
            sumbit(){
                let videoTitle=this.courseMassage.courseVideoesName
                let fileTitle=this.courseMassage.courseFileTitle
                let videoesNumber=this.courseMassage.videoesNumber
                let FileUrl=this.courseMassage.FileUrl

                if(this.FileUrl!=""){
                    FileUrl=this.FileUrl
                }
                if(this.videoTitle!=""){
                    console.log("点击为空");
                    videoTitle=this.videoTitle
                }
                if(this.fileTitle!=""){
                    fileTitle=this.fileTitle
                }
                if(this.videoNumber!=""){
                    videoesNumber=this.videoNumber
                }
                //更改文件
                if(this.IsFileShow){
                    updateAdminsCourse(this.courseMassage.courseId,videoTitle,videoesNumber,fileTitle).then(res=>{
                        if(res){
                            this.videoTitle=""
                            this.fileTitle=""
                            this.videoesNumber=""
                            this.$store.commit('updateIsShowCourse',false)
                            this.$message.success("更新成功！")
                        }
                    })
                }else {//新添文件
                    updateAdminsCourse(this.courseMassage.courseId,videoTitle,videoesNumber,fileTitle).then(res=>{
                        if(res){
                            updateCourseFile(fileTitle,FileUrl,this.courseMassage.courseId).then(ress=>{
                                if(ress){
                                    this.$store.commit('updateIsShowCourse',false)
                                    this.$message.success("添加成功！")
                                }
                            })
                        }
                    })
                }

            },

            handleAvatarSuccess(res, file) {
                UpdateCourseImageUrl(this.courseMassage.courseId, res).then(ress => {
                    if(ress){
                        this.$store.commit('updateIsShowCourse',false)
                        this.$message.success("更改成功！")
                    }else {
                        this.$message.error("更改失败！")
                    }
                })
            },
            //点击上传图片前
            beforeAvatarUpload(file) {
                //删除七牛上的已有的视频
                DeleteVideo(this.courseMassage.courseVideoesResources).then(res => {
                    if (res == 200) {
                        return true;
                    } else {
                        return false
                    }
                })

            },

            handleAvatarSuccess1(res, file) {
                updateCourseFile1(res,this.courseMassage.courseId).then(ress => {
                    if(ress){
                        this.$store.commit('updateIsShowCourse',false)
                        this.$message.success("更改成功！")
                    }else {
                        this.$message.error("更改失败！")
                    }
                })
            },
            //点击上传图片前
            beforeAvatarUpload1(file) {
                //删除七牛上已有的文件
                DeleteFile(this.courseMassage.courseFileResources).then(res => {
                    if (res == 200) {
                        return true;
                    } else {
                        return false
                    }
                })
            },
            //返回文件的URL
            getFileUrl(val){
                this.FileUrl=val
            },
            //是否展示文件了
            testIsFileShow(){
                if(this.courseMassage.courseFileResources==null){
                    this.IsFileShow=false
                }else {
                    this.IsFileShow=true
                }
            },
            shadiaoClick(){
                this.$store.commit('updateIsShowCourse',false)
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
    .successClass{
        margin-top: 20px;
        margin-left: 80px;
    }
    .AdminsCourseChild-main-text{
        margin-left: 10px;
    }
    .AdminsUserManageChild-if-text-label{
        font-size: 9px;
        color: white;
        margin-bottom: 15px;
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
    .ljaxxx{
        margin-top: 10px;
    }
    .fileClass{
        font-size: 9px;
        color: white;
    }
    .fileClass-title{
        font-size: 9px;
        color: white;
        margin-bottom: 5px;
    }
    .fileClass-input{
        font-size: 10px;
        margin-bottom: 5px;
    }
    .AdminsCourseChild-main-video{
        margin-left: 20px;
        width: 250px;
    }
    .VideoComponents-video{
        width: 250px;
    }
    .AdminsCourseChild-main{
        display: flex;
        flex-wrap: nowrap;
    }
    .AdminsCourseChild{
        width: 500px;
        height: 350px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 480px;
        /*鼠标变小手*/
        cursor: pointer;
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