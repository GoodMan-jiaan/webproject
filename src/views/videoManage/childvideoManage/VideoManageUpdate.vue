<template>
    <div class="VideoManageUpdate">
        <div class="title">视频集信息</div>
        <div class="VideoManageUpdate-main">
            <div class="VideoManageUpdate-main-img">
                <img v-if="this.IsImage" :src="this.getImageUrl"/>
                <img v-else src="https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF"/>
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
                            <div class="ProfileMain-end-write">点击更换图片</div>
                        </div>
                    </el-upload>
                </div>
                <el-button class="submit" @click="submitClick" color="#ff329b" type="primary" size="small">更改保存</el-button>
            </div>
            <div>
                <div class="ljaMain">
                    <div class="VideoManageUpdate-main-one">
                        <div class="VideoManageUpdate-main-one-title">
                            <div class="VideoManageUpdate-main-one-title1">视频集标题:<input :placeholder="this.videoMassage.videoesGatherName" v-model="this.inputMassage.videoesGatherName" class="oneTitle" type="text"/></div>
                            <div class="inputline"></div>
                        </div>
                        <div class="VideoManageUpdate-main-one-title">
                            <div class="VideoManageUpdate-main-one-title1">视频集机构:<input :placeholder="this.videoMassage.videoesGatherOrgan" v-model="this.inputMassage.videoesGatherOrgan" class="oneTitle" type="text"/></div>
                            <div class="inputline"></div>
                        </div>
                    </div>
                    <div class="VideoManageUpdate-main-two">
                        <div class="VideoManageUpdate-main-one-title">
                            <div class="VideoManageUpdate-main-one-title1">视频集作者:<input :placeholder="this.videoMassage.videoesGatherAuthorName" v-model="this.inputMassage.videoesGatherAuthorName" class="oneTitle" type="text"/></div>
                            <div class="inputline"></div>
                        </div>
                        <div class="VideoManageUpdate-main-one-title">
                            <div class="radio1class">
                                <el-radio v-model="radio1" label="四级" size="small">四级</el-radio>
                                <el-radio v-model="radio1" label="六级" size="small">六级</el-radio>
                                <el-radio v-model="radio1" label="其他" size="small">其他</el-radio>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="introduce">
                    <div class="introduce-title">视频介绍:</div>
                    <el-input :placeholder="this.videoMassage.videoesGatherIntroduce" v-model="this.inputMassage.videoesGatherIntroduce" class="introduce-text" :rows="3" type="textarea"/>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import {DeleteImage} from "@/network/fileUp"
    import {selectVideoesgatherById,updateVideoesGatherImage,updateVideoGatherMassage} from "@/network/details"
    export default {
        name: "VideoManageUpdate",
        props: {
            videoesGatherId: {
                type: Number
            }
        },
        data() {
            return {
                //视频集信息
                videoMassage: {},
                inputMassage: {},//输入校对的内容
                videoesGatherName:"",
                ImageUrl:"", //视频集图片
                radio1:"四级" ,    //单选框
                IsImage:true
            }

        },
        computed:{
            getImageUrl(){
                return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.ImageUrl
            }
        },
        methods:{
            handleAvatarSuccess(res, file){
                //已经成功上传到七牛云，现在更改视频集信息
                updateVideoesGatherImage(this.videoesGatherId,res).then(ress=>{
                    if(ress){
                        this.getVideoGather()
                        this.$message.success("视频上传成功！")
                    }else {
                        this.$message.error("更改失败！")
                    }
                })
            },
            //点击上传图片前
            beforeAvatarUpload(file){
                console.log(file)
                console.log(this.ImageUrl)
                //删除七牛上的已有的图片
                DeleteImage(this.ImageUrl).then(res=>{
                    if(res==200){
                        return true;
                    }else {
                        return false
                    }
                })

            },
            //获取视频集信息
            getVideoGather(){
                selectVideoesgatherById(this.videoesGatherId).then(res=>{
                    this.videoMassage=res
                    this.radio1=res.videoesGatherKind
                    this.ImageUrl=res.videoesGatherImage
                    if(this.ImageUrl!=""){
                        this.IsImage=true
                    }else {
                        this.IsImage=false
                    }
                })
            },
            //点击提交更改信息
            submitClick(){
                let videoesGatherName=this.videoMassage.videoesGatherName;
                let videoesGatherAuthorName=this.videoMassage.videoesGatherAuthorName;
                let videoesGatherIntroduce=this.videoMassage.videoesGatherIntroduce;
                let videoesGatherOrgan=this.videoMassage.videoesGatherOrgan;
                let videoesGatherKind=this.videoMassage.videoesGatherKind;

                console.log(this.inputMassage.videoesGatherName)
                if(this.inputMassage.videoesGatherName!=""){
                    videoesGatherName=this.inputMassage.videoesGatherName
                }

                if(this.inputMassage.videoesGatherAuthorName!=""){
                    videoesGatherAuthorName=this.inputMassage.videoesGatherAuthorName
                }

                if(this.inputMassage.videoesGatherIntroduce!=""){
                    videoesGatherIntroduce=this.inputMassage.videoesGatherIntroduce
                }

                if(this.inputMassage.videoesGatherOrgan!=""){
                    videoesGatherOrgan=this.inputMassage.videoesGatherOrgan
                }

                if(this.radio1!=videoesGatherKind){
                    videoesGatherKind=this.radio1
                }


                updateVideoGatherMassage(this.videoesGatherId,videoesGatherName,videoesGatherAuthorName,
                    videoesGatherIntroduce,videoesGatherOrgan,videoesGatherKind).then(res=>{
                    if(res){
                        this.getVideoGather()

                        this.inputMassage.videoesGatherOrgan=""
                        this.inputMassage.videoesGatherIntroduce=""
                        this.inputMassage.videoesGatherAuthorName=""
                        this.inputMassage.videoesGatherName=""
                        this.radio1=this.videoMassage.videoesGatherKind
                        this.$message.success("更改成功！")
                    }else{
                        this.$message.error("更改失败！")
                    }
                })
            }
        },
        mounted() {
            this.getVideoGather();
        }
    }
</script>

<style scoped>
    .VideoManageUpdate{
        width: 100%;
        margin: 0 0 0 0 ;
    }
    .title{
        width: 85%;
        margin: 0 auto;
        text-align: center;
        background-color: #ff329b;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 12px;
        color: white;
    }
    .VideoManageUpdate-main{
        width: 80%;
        margin: 20px auto;
        padding: 20px 20px 20px 20px;
        background-color: #f6f6f6;
        display: flex;
        flex-wrap: nowrap;
    }
    .ljaMain{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        width: 600px;
    }
    .VideoManageUpdate-main-img img{
        width: 100px;
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
    .VideoManageUpdate-main-one-title1{
        font-size: 10px;
        color: #9195A3;
    }
    .introduce{
        font-size: 10px;
        color: #9195A3;
        margin-left: 45px;
    }
    .introduce-text{
        border: none;
        width: 280px;
        height: 50px;
        font-size: 10px;
        outline:none;
        border: 5px;
    }
    .introduce-title{
        margin-bottom: 10px;
    }
    .VideoManageUpdate-main-one-title1 input{
        height: 10px;
        width: 150px;
        font-size: 8px;
        border:0 solid #f6f6f6;
        outline:none;
        background-color: #f6f6f6;
    }
    .inputline{
        width: 150px;
        border-bottom: 1px solid black;
        position: relative;
        left: 55px;
    }

    .VideoManageUpdate-main-one-title{
        margin-bottom: 10px;
    }
    .submit{
        font-size: 10px;
        margin-top: 15px;
    }
</style>