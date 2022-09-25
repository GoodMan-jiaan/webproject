<template>
    <div v-for="item in info" class="HomeEndtext-for">
        <div class="HomeEndtext-for-item">
            <div class="HomeEndtext-for-item-img"><img :src="item.imageUrl"/></div>
            <h5 class="HomeEndtext-for-item-img-h">{{item.infoTitle}}</h5>
            <div class="HomeEndtext-for-item-p"><p>{{item.infoText}}</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeEndtextItem",
        data(){
            return{
                info:[
                    {
                        imageUrl:"https://storyblok-image.ef.com.cn/unsafe/400x267/filters:focal(443x200:444x201):quality(70)/f/10/800x600/7423723cb2/2.jpg",
                        infoTitle:"英语有多好，职场就有多大",
                        infoText:"“英语是全球通用的商务语言，优秀的英文沟通能力可以让我在职场上脱颖而出，获得更多机会，所以我希望获得与时俱进的英语学习方法，持续提高我的英语能力，这样才能在不断变化的环境中游刃有余。”"
                    },
                    {
                        imageUrl:"https://storyblok-image.ef.com.cn/unsafe/400x267/filters:focal(300x222:301x223):quality(70)/f/11/600x443/04f9b64da1/home_7.jpg",
                        infoTitle:"英语有多好，世界就有多大",
                        infoText:"“英语会为旅行、探索和学习全新的理念开启一扇大门。我将非常享受通过英语社交平台了解到最新的时尚和科技趋势，用英语和来自国外的朋友交换观点，用英语帮别人解决问题。””"
                    },
                    {
                        imageUrl:"https://storyblok-image.ef.com.cn/unsafe/400x267/filters:focal(300x222:301x223):quality(70)/f/11/600x443/79d79f8eeb/home_8.jpg",
                        infoTitle:"英语有多好，社交圈就有多大",
                        infoText:"“人脉对我的工作至关重要。就全世界来说，英语已经成为一门毋庸置疑的世界语言，熟练掌握英语可以扩大自己的社交圈，发展更多的潜在客户，用同样的语言交流不仅让彼此更了解对方的想法，也能增强我跟客户之间的信任。”"
                    }
                ]
            }

        }

    }
</script>

<style scoped>

    .HomeEndtext-for-item{
        width: 220px;
        border: 1px solid #e6e6e6;
        height: 300px;
        background-repeat: no-repeat;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.3);
    }
    .HomeEndtext-for-item-img{
        width: 220px;

    }
    .HomeEndtext-for-item-img img{
        width: 100%;
    }
    .HomeEndtext-for-item-p{
        font-size: 10px;
        line-height: 1.5;
        font-weight: 400;
        margin-left: 5px;
        margin-right: 5px;
    }
    .HomeEndtext-for-item-img-h{
        text-align: center;
        margin-top: 10px;
    }
    .HomeEndtext-for{
        margin-top: 5px;
    }
</style>