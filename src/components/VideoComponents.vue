<template>
    <div class="VideoComponents">
        <video :src="this.getVideoSrc" class="VideoComponents-video" controls="true">
        </video>
    </div>
</template>

<script>
    import "animate.css"
    export default {
        name: "VideoComponents",
        props:{
            videoSrc:{
                type:String
            }
        },
        computed:{
            getVideoSrc(){
                return "http://rb8v7sv0k.hn-bkt.clouddn.com/"+this.videoSrc;
            }
        }
    }
</script>

<style scoped>
    .VideoComponents{
        width: 450px;

    }
    .VideoComponents-video{
        width: 100%;
        box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);
    }
</style>