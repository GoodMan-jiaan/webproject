<template>
<!--    首页中提交视频的组件-->
    <div class="HomeSubmit">
        <div class="HomeSubmit-img"><img src="https://storyblok-image.ef.com.cn/unsafe/600x401/filters:focal(484x193:485x194):quality(70)/f/10/800x600/3f0ff41507/1.jpg"/></div>
        <div class="HomeSubmit-span">
            <h2>lja资源共享<br/></h2>
            <p class="HomeSubmit-span-text">为了更好的为学生服务，平台为学生教师提供资源共享平台，使其学习资源更加丰富。</p>

            <el-button class="HomeSubmit-span-button"
                       color="#ff329b"
                       @click="submitClick"
                       type="primary" round>共享资源</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "HomeSubmitVideo",
        computed:{
            getUserId(){
                return this.$store.state.userId
            }
        },
        methods:{
            submitClick(){
                console.log(this.getUserId)
                if(this.getUserId==""){
                    this.$message.error("请先进行登录！")
                }else {
                    this.$router.push("/ProfileUpVideo")
                }
            }
        }
    }
</script>

<style scoped>
    .HomeSubmit{
        display: flex;
        margin-left: 60px;
        margin-top: 30px;
    }
    .HomeSubmit-img{
        width: 250px;
        /*position: relative;*/
        /*left: 25px;*/
    }
    .HomeSubmit-img img{
        width: 100%;
        border-radius: 50%;
        border: 0;
    }
    .HomeSubmit-span-text{
        font-size: 10px;
        font-family: EF Circular Latin,PingFang SC,Microsoft Yahei,sans-serif
    }
    .HomeSubmit-span{
        margin-top: 20px;
        position: relative;
        left: 70px;
    }
    .HomeSubmit-span-button{
        margin-top: 15px;
        font-family: EF Circular Latin,PingFang SC,Microsoft Yahei,sans-serif
    }

</style>