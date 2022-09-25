<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ProfileNavbar></ProfileNavbar>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <ProfileAside></ProfileAside>
                </el-aside>
                <el-main>
                    <div class="lja-profile-main">
<!--                        <ProfileMain v-if="this.$store.state.IsProfileMain"></ProfileMain>-->
                        <router-view></router-view>
                        <DetailFamousQuotes :image-url="this.DetailFamousQuotesMassage1.imageUrl"
                                            :english="this.DetailFamousQuotesMassage1.English"
                                            :china="this.DetailFamousQuotesMassage1.china"
                                            class="DetailFamousQuotesClass1"></DetailFamousQuotes>
                    </div>

                </el-main>
            </el-container>
        </el-container>
    </div>
<!--    个人界面-->
</template>

<script>
    import ProfileNavbar from "./childprofile/ProfileNavbar"
    import ProfileAside from "./childprofile/ProfileAside"
    import ProfileMain from "./childprofile/ProfileMain"
    import DetailFamousQuotes from "@/views/details/childdetails/DetailFamousQuotes"

    export default {
        name: "profile",
        components:{
            ProfileNavbar,
            ProfileAside,
            ProfileMain,
            DetailFamousQuotes
        },
        data(){
          return{
              DetailFamousQuotesMassage1:{
                  imageUrl:"https://storyblok-image.ef.com.cn/unsafe/600x400/filters:focal(300x222:301x223):quality(70)/f/11/600x443/a8a87f5dcf/home_4.jpg",
                  English:"A great man once said it is necessary to dill as much as possible, and the more you apply it in real situations, the more natural it will become!",
                  china:"一位伟人曾说，反复操练是非常必要的，你越多地将所学到的东西运用到实际生活中，他们就变得越自然!"
              }
          }
        },
        methods:{
            getVideoUrl(val){
                console.log(val)
            }
        }

    }
</script>

<style scoped>
    .DetailFamousQuotesClass1{
        background-color: white;
        width: 170px;
        position: relative;
        left: 20px;
    }
    .lja-profile-main{
        display: flex;
        flex-wrap: nowrap;
    }
    .common-layout{
        /*width: 100%;*/
        /*height: 100%;*/
        background-color: #f6f6f6;
    }
    .el-header{
        height: 30px;
    }
    /*.el-main{*/
    /*    margin-top: 15px;*/
    /*    background-color: white;*/
    /*    border-radius: 1%;*/
    /*    width: 200px;*/
    /*}*/

</style>