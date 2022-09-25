<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ResourceNavbar class="ResourceNavbar"></ResourceNavbar>
            </el-header>
            <el-main>
                <div class="RIntegrationImg"><img src="http://rb8v8q2nr.hn-bkt.clouddn.com/12175612782_1200x800%20%282%29.jpg"/></div>
                <ResourceIntegration></ResourceIntegration>
                <ResourceTotal></ResourceTotal>
                <webEnd></webEnd>
            </el-main>
        </el-container>
    </div>
<!--    资源列表页面-->
</template>


<script>
    import ResourceNavbar from "./childresource/ResourceNavbar"
    import ResourceIntegration from "./childresource/ResourceIntegration"
    import ResourceTotal from "./childresource/ResourceTotal"
    import webEnd from "@/components/webEnd"

    export default {
        name: "resource",
        components:{
            ResourceNavbar,
            ResourceIntegration,
            ResourceTotal,
            webEnd
        },
        data(){
            return{

            }
        },

        methods: {

        }
    }
</script>

<style scoped>
    .RIntegrationImg{
        width: 100%;
        height: 250px;
    }
    .RIntegrationImg img{
        width: 100%;
        height: 100%;
    }
    .el-main{
        width: 100%;
        padding: 0 0 0 0;
        background-color: white;
        margin-left: 0px;
        margin-right: 0px;
    }
    .ResourceNavbar{
        margin-top: 12px;
    }


</style>