<template>
    <div>
        <el-upload
                ref="upload"
                action="http://localhost:8080/uploadFile"
                :limit="1"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-remove="removefile"
        >
            <template #trigger>
                <el-button type="primary" size="small" >选择文件</el-button>
            </template>
        </el-upload>
    </div>
</template>

<script>

    import {DeleteFile} from '@/network/fileUp'
    export default {
        name: "uploadFile",
        data(){
            return{
                imageUrl:"lja"
            }
        },
        methods:{
            handleAvatarSuccess(res, file){
                this.imageUrl = res
                //    将视频路径释放出去
                this.$emit('transmitFile',this.imageUrl)
            },
            beforeAvatarUpload(file){
                return true
            },
            removefile(file){
                if(file.response!=null){
                    //删除前一次的七牛云的视频
                    DeleteFile(this.imageUrl).then(ress=>{
                        this.imageUrl="lja"
                        //    将视频路径释放出去
                        this.$emit('transmitFile',this.imageUrl)
                        return true;
                    }).catch(err=>{
                        return false;
                    })
                }else {
                    return false;
                }

            }
        },
    }
</script>

<style scoped>
    .el-button--primary{
        font-size: 8px;
    }
</style>