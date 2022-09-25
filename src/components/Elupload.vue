<!--上传视频组件-->
<template>
    <div>
        <el-upload
                ref="upload"
                class="upload-demo"
                action="http://localhost:8080/upload"
                :limit="1"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="removefile"
        >
            <template #trigger>
                <el-button type="primary" size="small" >{{btnText}}</el-button>
            </template>
            <template #tip>
                <div class="el-upload__tip text-red">
                </div>
            </template>
        </el-upload>
    </div>
</template>

<script >

    import {DeleteVideo} from '@/network/fileUp'
    export default {
        name: "Elupload",
        data(){
            return {
                //视频的url
                imageUrl:"lja",
                btnText:"选择视频"
            }
        },
        methods:{
            /**
             * 选择视频之后自动上传，查看视频的imageUrl的是否相同，
             * 如果不相同就删除前面的已经上传的视频,
             * 然后将其覆盖
             * @param res
             * @param file
             */
            handleAvatarSuccess(res, file) {
                    this.imageUrl = res
                    //    将视频路径释放出去
                    this.$emit('transmitVideo',this.imageUrl)
            },
            beforeAvatarUpload(file){
                return true
            },
            removefile(file){
                console.log(file.response)
                if(file.response!=null){
                    //删除前一次的七牛云的视频
                    DeleteVideo(this.imageUrl).then(ress=>{
                        this.imageUrl="lja"
                        //    将视频路径释放出去
                        this.$emit('transmitVideo',this.imageUrl)
                        return true;
                    }).catch(err=>{
                        return false;
                    })
                }else {
                    return false;
                }

            }
        },
        setup(){

        }
    }
</script>

<style scoped>
    .el-button--primary{
        font-size: 8px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>