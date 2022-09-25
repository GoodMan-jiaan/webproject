<template>
    <div class="ProfileCollect" >
        <div class="ProfileComment-head">
            <div class="title"><h6>收藏与点赞</h6></div>
            <div class="ProfileComment-router">
                <div class="ProfileComment-router-myComment">
                    <div class="ProfileComment-router-myComment-p"
                         @click="myCommentClick1"
                         :style="{'color':current === 0 ? '#ff329b':'','border-bottom':current === 0 ? '3px solid #ff329b':''}"
                         @mouseover="addActiveComment($event)"
                         @mouseout="removeActiveComment($event)">收藏</div>
                </div>
                <div class="ProfileComment-router-CommentMassage">
                    <div class="ProfileComment-router-CommentMassage-p"
                         @click="CommentMassageClick1"
                         :style="{'color':current === 1 ? '#ff329b':'','border-bottom':current === 1 ? '3px solid #ff329b':''}"
                         @mouseover="addActiveCommentMassage($event)"
                         @mouseout="removeActiveCommentMassage($event)">点赞</div>

                </div>
            </div>
        </div>
        <router-view></router-view>
<!--        <div>-->
<!--            <profile-collect-item v-for="item in CollectList" :collect-item="item"></profile-collect-item>-->
<!--        </div>-->
<!--        <div class="ProfileCollect-end">-->
<!--            <div class="ProfileCollect-end-last" @click="lastClick">上一页</div>-->
<!--            <div>当前为{{this.totalPages}}页</div>-->
<!--            <div class="ProfileCollect-end-next" @click="nextClick">下一页</div>-->
<!--        </div>-->
    </div>
</template>

<script>

    export default {
        name: "ProfileCollect",
        data(){
            return{
                current:0
            }
        },
        methods:{
            myCommentClick1(){
                this.current=0
                this.$router.push('/ProfileCollectChild')
            },
            CommentMassageClick1(){
                this.current=1
                this.$router.push('/ProfileCollectAttention')
            },
            addActiveComment($event) {
                $event.currentTarget.className = 'ProfileComment-router-myComment-p active'
            },
            removeActiveComment($event) {
                $event.currentTarget.className = 'ProfileComment-router-myComment-p'
            },
            addActiveCommentMassage($event) {
                $event.currentTarget.className = 'ProfileComment-router-CommentMassage-p active'
            },
            removeActiveCommentMassage($event) {
                $event.currentTarget.className = 'ProfileComment-router-CommentMassage-p'
            },
            getTxu(){
                console.log("进图手残和")
            },
        }
    }
</script>

<style scoped>
    /*.ProfileCollect-end-last{*/
    /*    !*鼠标变小手*!*/
    /*    cursor: pointer;*/
    /*}*/
    /*.ProfileCollect-end-next{*/
    /*    !*鼠标变小手*!*/
    /*    cursor: pointer;*/
    /*}*/
    .ProfileCollect{
        width: 60%;
        border-radius: 1%;
        height: 500px;
        background-color: white;
    }
    /*.title{*/
    /*    padding-left: 10px;*/
    /*    width: 100%;*/
    /*    border-bottom: 1px solid #f0f0f2;*/
    /*}*/
    /*.title h6 {*/
    /*    line-height: 0px;*/
    /*}*/
    /*.ProfileCollect-end{*/
    /*    margin-top: 20px;*/
    /*    display: flex;*/
    /*    flex-wrap: nowrap;*/
    /*    justify-content: space-around;*/
    /*    font-size: 8px;*/
    /*    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;*/
    /*    color: #9195A3;*/
    /*}*/


    .active{
        border-bottom: 3px solid #ff329b;
        color: #ff329b;
    }
    .ProfileComment-router-myComment{
        width: 50px;
        height: 20px;
        margin-right: 20px;
        text-align: center;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .ProfileComment-router-CommentMassage{
        width: 50px;
        height: 20px;
        text-align: center;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .ProfileComment-head{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        width: 100%;
        border-bottom: 1px solid #f0f0f2;
    }
    .ProfileComment-router{
        display: flex;
        flex-wrap: nowrap;
        color: #9195A3;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-size: 8px;
        position: relative;
        left: -138px;
        top: 37px;
    }
    .ProfileComment{
        width: 60%;
        border-radius: 1%;
        height: 500px;
        background-color: white;
    }
    .title{
        padding-left: 10px;
        width: 50%;
    }
    .title h6 {
        line-height: 0px;
    }
</style>