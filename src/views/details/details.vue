<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ResourceNavbar class="ResourceNavbar"></ResourceNavbar>
<!--                <ProfileNavbar></ProfileNavbar>-->
            </el-header>
            <el-main>
                <DetailVideo :videoes-gather-id="videoesGatherId"></DetailVideo>
                <div class="mianClass">
                    <DetailMassage :videoes-gather-id="videoesGatherId"></DetailMassage>
                    <DetailFamousQuotes :image-url="this.DetailFamousQuotesMassage.imageUrl"
                                         :english="this.DetailFamousQuotesMassage.English"
                                          :china="this.DetailFamousQuotesMassage.china"
                                        class="DetailFamousQuotesClass"></DetailFamousQuotes>
                </div>
                <DetailComment :videoes-gather-id="videoesGatherId"></DetailComment>
<!--                <div class="commentClass">-->
<!--                    <DetailComment :videoes-gather-id="videoesGatherId"></DetailComment>-->
<!--                    <DetailFamousQuotes :image-url="this.DetailFamousQuotesMassage1.imageUrl"-->
<!--                                        :english="this.DetailFamousQuotesMassage1.English"-->
<!--                                        :china="this.DetailFamousQuotesMassage1.china"-->
<!--                                        class="DetailFamousQuotesClass1"></DetailFamousQuotes>-->
<!--                </div>-->
                <DetailFile class="DetailFileClass" :videoes-gather-id="videoesGatherId"></DetailFile>

            </el-main>
        </el-container>
    </div>
</template>

<script>
    import ResourceNavbar from "@/views/resource/childresource/ResourceNavbar"
    import DetailVideo from "@/views/details/childdetails/DetailVideo"
    import DetailMassage from "@/views/details/childdetails/DetailMassage"
    import DetailComment from "@/views/details/childdetails/DetailComment"
    import DetailFamousQuotes from "@/views/details/childdetails/DetailFamousQuotes"
    import DetailFile from "./childdetails/DetailFile";
    import ProfileNavbar from "@/views/profile/childprofile/ProfileNavbar"
    import {InsertHistoric} from "@/network/historic"
    export default {
        name: "details",
        data(){
            return{
                videoesGatherId:this.$route.params.videoesGatherId,
                DetailFamousQuotesMassage:{
                    imageUrl:"https://storyblok-image.ef.com.cn/unsafe/600x400/filters:focal(1102x237:1103x238):quality(70)/f/10/1920x1065/7f17ee8d1d/carousel_b_2.jpg",
                    English:"Rome wasn’t built in a day. Work harder and practice more. Your hard work will be rewarded by god one day. God is equal to everyone!",
                    china:"冰冻三尺，非一日之寒。更加努力地学习，更加勤奋地操练，你所付出的一切将会得到上帝的报答，上帝是公平的。"
                },
                DetailFamousQuotesMassage1:{
                    imageUrl:"https://storyblok-image.ef.com.cn/unsafe/600x400/filters:focal(300x222:301x223):quality(70)/f/11/600x443/a8a87f5dcf/home_4.jpg",
                    English:"A great man once said it is necessary to dill as much as possible, and the more you apply it in real situations, the more natural it will become!",
                    china:"一位伟人曾说，反复操练是非常必要的，你越多地将所学到的东西运用到实际生活中，他们就变得越自然!"
                }
            }

        },
        components:{
            ResourceNavbar,
            DetailVideo,
            DetailMassage,
            DetailComment,
            DetailFamousQuotes,
            DetailFile,
            ProfileNavbar
        },
        mounted() {
            // this.videoesGatherId=this.$route.params.videoesGatherId
            this.getInsertHistoric()
        },
        methods:{
            getInsertHistoric(){
                if(this.$store.state.userId!=""){
                    InsertHistoric(this.$store.state.userId,this.videoesGatherId).then(res=>{
                        if(res){
                        }
                    })
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
    .mianClass{
        display: flex;
        flex-wrap: nowrap;
        /*justify-content: space-around;*/
    }
    .DetailFamousQuotesClass{
        position: relative;
        left: -140px;
        width: 370px;
        top: 50px;
    }

    .commentClass{
        display: flex;
        flex-wrap: nowrap;
    }
    .DetailFileClass{
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>