<template>
    <div class="DetailFile">
        <div class="DetailFile-Title">文件下载：</div>
        <div class="DetailFile-a" v-for="item in files">
            <a :href="getFileUrl(item.courseFileResources)">{{item.courseFileTitle}}</a>
        </div>

    </div>
</template>

<script>
    import {getFileByVideoGatherId} from '@/network/details'
    export default {
        name: "DetailFile",
        data(){
            return{
                files:[]
            }
        },
        computed:{
          // getFileUrl(url){
          //     return "http://r9o05za4e.hn-bkt.clouddn.com/"+url
          // }
        },
        props:{
            videoesGatherId:{
                type:String
            }
        },
        mounted() {
            this.getFile()
        },
        methods:{
            getFile(){
                getFileByVideoGatherId(this.videoesGatherId).then(res=>{
                    this.files=res
                })
            },
            getFileUrl(url){
                return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+url
            }
        }
    }
</script>

<style scoped>
    .DetailFile{
        /*display: flex;*/
        /*flex-wrap: nowrap;*/
        font-size: 10px;
        margin-left: 100px;
    }
    .DetailFile-a{
        margin-left: 50px;
    }
</style>