<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ResourceNavbar></ResourceNavbar>
            </el-header>
            <el-main>

                <HomeMainHead></HomeMainHead>
                <HomeSubmitVideo></HomeSubmitVideo>
                <HomeEndtext></HomeEndtext>
<!--                <VideoComponents></VideoComponents>-->
                <webEnd></webEnd>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import HomeNavbar from "./childhome/HomeNavbar";
    import HomeMainHead from "./childhome/HomeMainHead"
    import HomeSubmitVideo from "./childhome/HomeSubmitVideo"
    import HomeEndtext from "./childhome/HomeEndtext";
    import VideoComponents from "../../components/VideoComponents"
    import ResourceNavbar from "@/views/resource/childresource/ResourceNavbar"
    import webEnd from "@/components/webEnd"

    export default {
        name: "home",
        components:{
            HomeNavbar,
            HomeMainHead,
            HomeSubmitVideo,
            HomeEndtext,
            VideoComponents,
            ResourceNavbar,
            webEnd
        },
        data(){
            return{

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
    .el-header{
        height: 50px;
    }
    .common-layout{
        width: 100%;
    }
</style>