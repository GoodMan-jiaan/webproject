<template>
    <div class="ProfileComment">
        <div class="ProfileComment-head">
            <div class="title"><h6>评论信息</h6></div>
            <div class="ProfileComment-router">
                <div class="ProfileComment-router-myComment">
                    <div class="ProfileComment-router-myComment-p"
                         @click="myCommentClick"
                         :style="{'color':current === 0 ? '#ff329b':'','border-bottom':current === 0 ? '3px solid #ff329b':''}"
                         @mouseover="addActiveComment($event)"
                         @mouseout="removeActiveComment($event)">我的评论</div>
                </div>
                <div class="ProfileComment-router-CommentMassage">
                    <div class="ProfileComment-router-CommentMassage-p"
                         @click="CommentMassageClick"
                         :style="{'color':current === 1 ? '#ff329b':'','border-bottom':current === 1 ? '3px solid #ff329b':''}"
                         @mouseover="addActiveCommentMassage($event)"
                         @mouseout="removeActiveCommentMassage($event)">评论消息</div>

                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "ProfileComment",
        data(){
            return{
                current:0
            }
        },
        methods:{
            myCommentClick(){
                this.current=0
                this.$router.push('/ProfileCommentMine')
            },
            CommentMassageClick(){
                this.current=1
                this.$router.push('/ProfileCommentMassage')
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
        }
    }
</script>

<style scoped>
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