<template>
    <div class="DetailVideo">
        <VideoComponents class="DetailVideo-components" :video-src="videoUrl"></VideoComponents>
        <div class="DetailVideo-videoSelect">
            <div class="DetaileVideo-xxx">
                <div class="DetaileVideo-videoSelect-img">
                    <img src="../../../assets/SelectVideo.png"/>
                    <span class="DetaileVideo-videoSelect-img-span">选集</span>
                </div>
                <img @click="shunxuClick" class="DetaileVideo-xxx-img" src="../../../assets/shunxu.png">
            </div>

            <div class="DetaileVideo-videoSelect-main">
                <div v-for="(item,index) in courseList"
                     class="DetaileLja"
                     :style="{'color':current === index ? '#ff329b':'' }"
                     @click="DetailSelectClick(item.courseVideoesResources,index)"
                     @mouseover="addActiveDetailSelect($event)"
                     @mouseout="removeActiveDetailSelect($event)"
                     :key="index">{{item.videoesNumber}}-{{item.courseVideoesName}}</div>
            </div>

        </div>
    </div>
</template>

<script>
    import {getCourseByVideoesGatherId,getCourseByVideoesGatherId2} from "@/network/details"
    import VideoComponents from "@/components/VideoComponents"
    export default {
        name: "DetailVideo",
        data(){
          return{
              videoUrl:"",
              current:0,
              courseList:[],
              shunxu:true
            }
        },
        components:{
            VideoComponents,
        },
        props:{
            videoesGatherId:{
                type:Number,
                default(){
                    return{}
                }
            }
        },
        mounted() {
            this.getCourse2();
        },
        methods:{
            addActiveDetailSelect($event) {
                $event.currentTarget.className = 'DetaileLja active'
            },
            removeActiveDetailSelect($event) {
                $event.currentTarget.className = 'DetaileLja'
            },
            //获取视频数据，数组方式逆序
            getCourse(){
                getCourseByVideoesGatherId(this.videoesGatherId).then(res=>{
                    this.videoUrl=res[0].courseVideoesResources
                    this.courseList=res
                })
            },
            //获取视频数据，数组方式正序
            getCourse2(){
                getCourseByVideoesGatherId2(this.videoesGatherId).then(res=>{
                    this.videoUrl=res[0].courseVideoesResources
                    this.courseList=res
                })
            },
            //点击选择视频集
            DetailSelectClick(courseVideoesResources,index){
                this.videoUrl=courseVideoesResources
                this.current=index
            },
            //点击顺序
            shunxuClick(){
                this.shunxu=!this.shunxu
                if (!this.shunxu){
                    this.getCourse2()
                }else {
                    this.getCourse()
                }
            }
        }
    }
</script>

<style scoped>
    .DetailVideo-components{
        position: relative;
        left: -40px;
    }
    .DetaileVideo-videoSelect-img-span{
        font-size: 10px;
        margin-left: 3px;
        font-family: PingFangSC-Regular,PingFang SC;
        color: #999;
    }
    .DetaileVideo-xxx{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 10px 10px 10px;
    }
    .DetailVideo{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }
    .DetaileVideo-videoSelect-main{
        width: 150px;
        height: 300px;
        overflow: scroll;
        overflow-x: hidden;
        font-size: 11px;
        color: #999;

    }
    .DetaileLja{
        /*鼠标变小手*/
        cursor: pointer;
        /*width: 70%;*/
        margin-bottom: 5px;
        /*padding-left: 5px;*/
        border-radius: 3px;
        padding-left: 10px;
        width:100%;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

    }
    .DetailVideo-videoSelect{
        background-color: #f6f6f6;
    }
    .active{
        color: #ff329b;
        background-color: white;

    }
    .DetaileVideo-videoSelect-img{
        display: flex;
        flex-wrap: wrap;
    }
    .DetaileVideo-videoSelect-img img{
        width: 10px;
    }
    .DetaileVideo-xxx-img{
        width: 10px;
        height: 10px;
        /*鼠标变小手*/
        cursor: pointer;
    }
</style>