<template>
    <div class="VideoManageAside">
        <div class="DetaileVideo-videoSelect-img">
            <img src="../../../assets/SelectVideo.png"/>
            <span class="DetaileVideo-videoSelect-img-span">选集</span>
        </div>
        <div class="VideoManageAside-scroll">
            <div v-for="(item,index) in videoTitle"
                 class="DetaileLja"
                 :style="{'color':current === index ? '#ff329b':'' }"
                 :key="index" @click="DetailSelectClick(item.courseVideoesResources,index)">
                {{item.videoesNumber}}-{{item.courseVideoesName}}
            </div>
        </div>

    </div>
</template>

<script>
    import {getCourseByVideoesGatherId2} from "@/network/details"
    export default {
        name: "VideoManageAside",
        computed:{
          getIsRefresh(){
              return this.$store.state.isRefresh
          }
        },
        //当视频信息修改时，刷新视频列表
        watch:{
            getIsRefresh(newCount, oldCount){
                console.log(newCount)
                this.getCourse()
            }
        },
        data(){
            return{
                videoTitle:[],
                current:0
            }
        },
        props: {
            videoesGatherId: {
                type: Number
            }
        },

        methods:{
            getCourse(){
                getCourseByVideoesGatherId2(this.videoesGatherId).then(res=>{
                    this.videoTitle=res
                    this.$store.commit("updateVideoCourseId",res[0].courseId)
                })
            },
            //点击选择视频
            DetailSelectClick(courseVideoesResources,index){
                this.$store.commit("updateVideoCourseId",this.videoTitle[index].courseId)
                this.current=index
            },

        },
        mounted() {
            this.getCourse()
        }
    }
</script>

<style scoped>

    .VideoManageAside{
        width: 130px;
    }
    .VideoManageAside-scroll{
        background-color: white;
        width: 130px;
        height: 255px;
        overflow: scroll;
        overflow-x: hidden;
        font-size: 9px;
        color: #999;
    }
    .DetaileVideo-videoSelect-img-span{
        font-size: 10px;
        margin-left: 3px;
        font-family: PingFangSC-Regular,PingFang SC;
        color: #999;
    }
    .DetaileVideo-videoSelect-img{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 5px;
    }
    .DetaileVideo-videoSelect-img img{
        width: 10px;
    }
    .DetaileLja{
        /*鼠标变小手*/
        cursor: pointer;
        /*width: 70%;*/
        margin-bottom: 5px;
        /*padding-left: 5px;*/
        border-radius: 3px;
        padding-left: 10px;
        width: 100%;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
</style>