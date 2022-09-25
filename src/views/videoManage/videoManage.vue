<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ResourceNavbar></ResourceNavbar>
<!--                <ProfileNavbar></ProfileNavbar>-->
            </el-header>
            <el-main>
                <VideoManageUpdate :videoes-gather-id="videoesGatherId"></VideoManageUpdate>
                <VideoManageCourse :videoes-gather-id="videoesGatherId"></VideoManageCourse>
                <webEnd></webEnd>
            </el-main>
        </el-container>
    </div>
<!--    视频管理界面-->
</template>

<script>
    import VideoManageAside from "@/views/videoManage/childvideoManage/VideoManageAside"
    import ResourceNavbar from "@/views/resource/childresource/ResourceNavbar"
    import VideoManageUpdate from "@/views/videoManage/childvideoManage/VideoManageUpdate"
    import VideoManageCourse from "@/views/videoManage/childvideoManage/VideoManageCourse"
    import webEnd from "@/components/webEnd"
    import ProfileNavbar from "@/views/profile/childprofile/ProfileNavbar"

    export default {
        name: "videoManage",
        components:{
            ResourceNavbar,
            VideoManageAside,
            VideoManageUpdate,
            VideoManageCourse,
            webEnd,
            ProfileNavbar
        },
        data(){
            return{
                videoesGatherId:this.$route.params.videoesGatherId,
            }
        }
    }
</script>

<style scoped>
    .el-main{
        /*background-color: rgba(247,247,247,1);*/
        width: 100%;
        padding: 0 0 0 0;
    }
</style>