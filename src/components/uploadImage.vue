<!--上传图片的组件-->
<template>
   <div>
       <el-upload
               ref="upload"
               action="http://localhost:8080/uploadImage"
               :limit="1"
               :on-success="handleAvatarSuccess"
               :before-upload="beforeAvatarUpload"
               :on-remove="removeImage"
               accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
       >
           <template #trigger>
               <el-button type="primary" size="small" >选择图片</el-button>
           </template>
       </el-upload>
   </div>
</template>

<script >
    import {DeleteImage} from '@/network/fileUp'
    export default {
        name: "uploadImage",
        data(){
            return{
                imageUrl:"lja"
            }
        },
        methods:{
            handleAvatarSuccess(res, file){
                this.imageUrl = res
                    //    将视频路径释放出去
                this.$emit('transmitImage',this.imageUrl)
            },
            beforeAvatarUpload(file){
                console.log(file)
                return true
            },
            removeImage(file){
                console.log(file.response)
                if(file.response!=null){
                    //删除前一次的七牛云的视频
                    DeleteImage(this.imageUrl).then(ress=>{
                        this.imageUrl="lja"
                        //    将视频路径释放出去
                        this.$emit('transmitImage',this.imageUrl)
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
</style>