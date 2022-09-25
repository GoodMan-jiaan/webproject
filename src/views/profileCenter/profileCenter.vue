<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ResourceNavbar class="ResourceNavbar"></ResourceNavbar>
            </el-header>
            <el-main>
                <div class="profileCenter">
                    <profileCenterUser class="profileCenterUser" :user-id="this.userId"></profileCenterUser>
                    <div class="ljaProfile">
                        <DetailFamousQuotes :image-url="this.DetailFamousQuotesMassage1.imageUrl"
                                            :english="this.DetailFamousQuotesMassage1.English"
                                            :china="this.DetailFamousQuotesMassage1.china"
                                            class="DetailFamousQuotesClass1"></DetailFamousQuotes>
                        <profileCenterVideoGather class="profileCenterVideoGather" :user-id="this.userId"></profileCenterVideoGather>
                    </div>


                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import ResourceNavbar from "@/views/resource/childresource/ResourceNavbar"
    import profileCenterUser from "./profileCenterchild/profileCenterUser"
    import profileCenterVideoGather from "./profileCenterchild/profileCenterVideoGather"
    import DetailFamousQuotes from "@/views/details/childdetails/DetailFamousQuotes"
    export default {
        name: "profileCenter",
        components:{
            ResourceNavbar,
            profileCenterUser,
            profileCenterVideoGather,
            DetailFamousQuotes
        },
        data(){
            return{
                userId:this.$route.params.userId,
                DetailFamousQuotesMassage1:{
                    imageUrl:"https://storyblok-image.ef.com.cn/unsafe/600x400/filters:focal(300x222:301x223):quality(70)/f/11/600x443/a8a87f5dcf/home_4.jpg",
                    English:"A great man once said it is necessary to dill as much as possible, and the more you apply it in real situations, the more natural it will become!",
                    china:"一位伟人曾说，反复操练是非常必要的，你越多地将所学到的东西运用到实际生活中，他们就变得越自然!"
                }
            }
        },

    }
</script>

<style scoped>

    .ResourceNavbar{
        margin-top: 12px;
    }
    .el-main{
        padding: 0;
    }
    .profileCenter{
        background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fphoto%2F40140%2F6560.gif_wh860.gif&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654353129&t=4ecc2a4f2a5b92ebfa66b36f72640f62");
        background-size: 100% 100% ;
        padding-top: 20px;
        width: 100%;
        height: 500px;
    }
    .profileCenterUser{
        margin: 5px auto;
    }
    .profileCenterVideoGather{
        margin-left: 10px;
    }
    .ljaProfile{
        display: flex;
        flex-wrap: nowrap;
        margin: 10px auto;
        width: 85%;
    }
    .DetailFamousQuotesClass1{
        background-color: white;
        width: 170px;
    }
</style>