<!--界面参考：https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.xunruicms.com%2Fvipfile%2F201911%2F007bf06dae8ecf8.png&refer=http%3A%2F%2Ffile.xunruicms.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651826657&t=e07f40545f3d6d1e221d46c4cb53b860-->

<template>
    <div class="ProfileUpVideo">
        <div>
            <div class="title"><p>上传视频</p></div>
            <div class="inputline"></div>
            <div class="videoTitle">填写视频集内容</div>
            <div class="Videos" v-if="IsVideos">
                <div class="example-block">
                    <el-cascader placeholder="请选择您已上传的视频集"
                                 size="small"
                                 v-model="value"
                                 :options="options"
                                 @change="handleChange" />
                </div>
                <el-button  class="Videos-button" size="small" type="primary" round @click="IsVideosClick">新建视频集</el-button>
            </div>
            <div  v-else>
                <div class="Videos2">
                    <div class="Videos-input"><el-input size="small"
                                                        class="lja"
                                                        v-model="VideGather.VideTitle"
                                                        placeholder="输入新建视频集的名称" /></div>
                    <el-button size="small"
                               class="Videos2-button"
                               type="primary" round
                               @click="IsVideosClick">返回选择视频集</el-button>
                </div>
                <div class="inputwidth"><el-input class="lja" v-model="VideGather.VideGatherName" size="small" placeholder="输入作者名称"/></div>
                <div class="inputwidth"><el-input class="lja" size="small" v-model="VideGather.VideGatherOrgan" placeholder="机构信息"/></div>
                <div class="radioTitle">选择类型：</div>
                <div class="radiobtn">
                    <el-radio  v-model="VideGather.VideGatherKind" label="四级" size="small">四级</el-radio>
                    <el-radio  v-model="VideGather.VideGatherKind" label="六级" size="small">六级</el-radio>
                    <el-radio  v-model="VideGather.VideGatherKind" label="其他" size="small">其他</el-radio>
                </div>
                <div class="upImage">
                    <div class="radioTitle">点击上传视频封面：</div>
                    <upload-image class="updaImage" @transmitImage="getImgaeUrl"></upload-image>
                </div>
                <div class="radioTitle">视频集描述：</div>
                <el-input
                        class="inputtext"
                        v-model="VideGather.videGatherIntroduce"
                        :rows="2"
                        type="textarea"
                        placeholder="介绍"
                />
            </div>
        </div>
        <div>
            <div class="videoTitle">填写视频信息：</div>
            <div class="inputwidth"><el-input class="lja" size="small" v-model="Video.VideoTitle" placeholder="请输入视频名称"/></div>
            <ElUpload class="elup" @transmitVideo="getVideoUrl"></ElUpload>
            <div class="radioIsFile">
                <label class="videoTitle">是否选择上传文档：</label>
                <el-radio v-model="IsFile" label="1" size="small" @click="IsFileClick">否</el-radio>
                <el-radio v-model="IsFile" label="0" size="small" @click="IsFileClick2">是</el-radio>
            </div>
            <div v-if="IsFileDiv">
                <div class="inputwidth"><el-input class="lja" size="small" v-model="files.FileTitle" placeholder="请输入文档名称"/></div>
                <uploadFile class="uplafi" @transmitFile="getFileUrl"></uploadFile>
            </div>
        </div>
        <el-button class="submit" type="primary" size="small" @click="submit">点击上传</el-button>
    </div>
</template>

<script>
    import ElUpload from "@/components/Elupload"
    import uploadImage from '@/components/uploadImage'
    import { ref } from 'vue'
    import uploadFile from '@/components/uploadFile'
    import {insertVideoesgather,InsertCourse,selectVideoesByUserId,InsertCourseNext,InsertCourseNoFile} from '@/network/fileUp'
    //下拉框
    // const value = ref([])
    const props = {
        expandTrigger: 'hover',
    }

    const radio3 = ref('1')

    export default {
        name: "ProfileUpVideo",
        data(){
            return{
                //当下面的值为true时，才能上传
                IsSubmit:{
                    IsVide:false,
                    IsVides:false,
                    IsFil:false
                },
                IsVideos:true,//是否展示视频集
                IsFile:"1",//文档默认值
                IsFileDiv:false,//是否展示文件
                VideGather:{//视频集信息
                    VideTitle:"",
                    VideGatherName:"",
                    VideGatherOrgan:"",
                    VideGatherKind: "四级",
                    videGatherIntroduce:"",
                    videGatherImage:"lja",
                },
                Video:{//视频信息
                    VideoTitle:"",
                    videoUrl:"lja",
                },
                files:{//文件信息
                    FileTitle:"",
                    FileUrl:""
                },
                options:[{
                    value:"0",
                    label:"您无上传过资料"
                }],
                value:"",//视频集的值

            }
        },
        components:{
            ElUpload,
            uploadImage,
            uploadFile
        },
        computed:{
            getIsUser(){
                return this.$store.state.IsUser
            }
        },
        //初始化时调用该函数
        mounted(){
            this.getVideoGaters();
        },
        methods:{
            //点击上传
            submit(){
                //判断视频集合值的合法性
                if(!this.IsVideos){
                    if(this.VideGather.VideTitle==null||this.VideGather.VideGatherName==null||
                        this.VideGather.VideGatherOrgan==null||this.VideGather.videGatherIntroduce==null){
                        this.$message.error("请将信息填写完整")
                    }else if(this.VideGather.videGatherImage=="lja"){
                        this.$message.error("请为视频集选择图片")
                    }else {
                        this.IsSubmit.IsVides=true
                        console.log(this.IsSubmit.IsVides)
                    }
                }
                else {
                    if(this.value==null){
                        this.$message.error("请选择您已上传的视频集")
                    }else {
                        this.IsSubmit.IsVides=true
                    }
                }

                //判断视频信息
                if(this.Video.VideoTitle==null||this.Video.videoUrl=="lja"){
                    this.$message.error("请将视频信息进行完善")
                }else {
                    this.IsSubmit.IsVide=true
                }

                //判断文件信息
                console.log(this.IsFileDiv)
                if(this.IsFileDiv){
                    if(this.files.FileTitle==null||this.files.FileUrl==null){
                        this.$message.error("请将文件信息进行完善")
                    }else {
                        this.IsSubmit.IsFil=true
                    }
                }else {
                    this.IsSubmit.IsFil=true
                }

                //请求数据库上传

                if(this.IsSubmit.IsFil&&this.IsSubmit.IsVide&&this.IsSubmit.IsVides){
                    //选择视频集
                    if(this.IsVideos){
                        if(this.value!=null){
                            if(this.IsFileDiv){
                                InsertCourseNext(this.value[0],this.Video.VideoTitle,this.Video.videoUrl,
                                    this.files.FileTitle,this.files.FileUrl).then(res=>{
                                        if(this.getIsUser){
                                            this.$message.success("上传成功")
                                            this.$router.push('/AdminsUserManage')
                                        }else {
                                            this.$message.success("上传成功")
                                            this.$router.push('/ProfileMain')
                                        }
                                })
                            }else if(this.IsFileDiv==false){
                                //上传视频
                                InsertCourseNoFile(this.value[0],this.Video.VideoTitle,this.Video.videoUrl,1).then(ress=>{
                                    if (ress){
                                        if(this.getIsUser){
                                            this.$message.success("上传成功")
                                            this.$router.push('/AdminsUserManage')
                                        }else {
                                            this.$message.success("上传成功")
                                            this.$router.push('/ProfileMain')
                                        }
                                    }
                                })
                            }

                        }else {
                            this.$message.error("请选择视频集！")
                        }

                    }else {//新建立视频集
                        //网络生成新的视频集合
                        console.log(this.VideGather.VideGatherKind,
                            this.VideGather.VideTitle,this.VideGather.VideGatherName,this.VideGather.videGatherIntroduce,
                            this.VideGather.videGatherImage,this.VideGather.VideGatherOrgan)
                        insertVideoesgather(this.$store.state.userId,this.VideGather.VideGatherKind,
                            this.VideGather.VideTitle,this.VideGather.VideGatherName,this.VideGather.videGatherIntroduce,
                            this.VideGather.videGatherImage,this.VideGather.VideGatherOrgan).then(res=>{
                                if(res!=0&&this.IsFileDiv){
                                    //上传视频
                                    InsertCourse(res,this.Video.VideoTitle,this.Video.videoUrl,
                                        this.files.FileTitle,this.files.FileUrl).then(ress=>{
                                        if(ress){
                                            if(this.getIsUser){
                                                this.$message.success("上传成功")
                                                this.$router.push('/AdminsUserManage')
                                            }else {
                                                this.$message.success("上传成功")
                                                this.$router.push('/ProfileMain')
                                            }
                                            // this.$store.commit('updateIsProfileMain',true)
                                        }
                                    })
                                }else if(res!=0&&this.IsFileDiv==false){
                                    //上传视频
                                    InsertCourseNoFile(res,this.Video.VideoTitle,this.Video.videoUrl,0).then(ress=>{
                                        if (ress){
                                            if(this.getIsUser){
                                                this.$message.success("上传成功")
                                                this.$router.push('/AdminsUserManage')
                                            }else {
                                                this.$message.success("上传成功")
                                                this.$router.push('/ProfileMain')
                                            }
                                        }
                                    })
                                }
                        })
                    }
                }else {
                    this.$message.error("视频或文件较大，请等待进度条消失在点击上传！")
                }
            },
            //获取该用户所上传的视频集信息
            getVideoGaters(){
                selectVideoesByUserId(this.$store.state.userId).then(res=>{
                    if(res!=null){
                        this.options=res
                    }
                })
            },

            //上传视频返回的视频URL
            getVideoUrl(val){
                this.Video.videoUrl=val
            },
            //改变视频集选择状态
            IsVideosClick(){
                this.IsVideos=!this.IsVideos
            },
            //获取组件返回的图片URL
            getImgaeUrl(val){
                this.VideGather.videGatherImage=val
            },
            //是否显示文档信息
            IsFileClick(){
                this.IsFileDiv=false
            },
            IsFileClick2(){
                this.IsFileDiv=true
            },
            //返回文件的URL
            getFileUrl(val){
              this.files.FileUrl=val
            },
            //监听选址视频集
            handleChange(value){
                console.log(value)
                console.log(this.value)
            }

        },
        setup(){
            return{props,radio3}
        }
    }
</script>

<style scoped>
    .el-button--primary{
        font-size: 8px;
    }
    .lja{
        font-size: 9px;
    }
    .submit{
        margin-left: 230px;
        margin-top: 10px;
    }
    .uplafi{
        margin-left: 68px;
        margin-top: 10px;
    }
    .elup{
        margin-left: 68px;
        margin-top: 10px;
    }
    .inputtext{
        width: 250px;
        font-size: 9px;
        margin-left: 50px;
        margin-top: 10px;
    }
    .upImage{
        display: flex;
        flex-wrap: wrap;
    }
    .updaImage{
       position: relative;
       top: 15px;
    }
    .radiobtn{
        margin-top: 5px;
        margin-left: 60px;

    }

    .radioTitle{
        font-weight: 500;
        font-size: 9px;
        margin-left: 40px;
        margin-top: 20px;
    }
    .inputwidth{
        width: 200px;
        margin-left: 66px;
        margin-top: 5px;
    }
    .videoTitle{
        font-weight: 500;
        font-size: 11px;
        margin-left: 40px;
        margin-top: 20px;
    }
    .Videos-button{
        position: relative;
        top: 17px;
    }
    .Videos{
        display: flex;
        flex-wrap: wrap;
        margin-left: 50px;
    }
    .Videos2{
        display: flex;
        flex-wrap: wrap;
        margin-left: 70px;
        margin-bottom: 30px;
    }
    .Videos2-button{
        margin-left: 30px;
        position: relative;
        top: 20px;
    }
    .title{
        font-size: 11px;
        font-family: "微软雅黑";
        font-weight: 400;
        text-align: center;
    }

    .ProfileUpVideo{
        width: 60%;
        height: 630px;
        background-color: white;
        border-radius: 1%;
        padding-top: 20px;
    }
    .inputline{
        width: 85%;
        margin: 3px auto;
        border-bottom: 1px solid #cdcdcd;

    }
    .Videos-input{
        position: relative;
        top: 20px;
    }

    /*下拉数据*/
    .example-block {
        margin: 1rem;
    }
    .example-demonstration {
        margin: 1rem;
    }

</style>