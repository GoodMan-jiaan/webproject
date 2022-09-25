<template>
    <div v-if="IsShow" class="ProfileCollectAttention">
        <ProfileCollectAttentionItem v-for="item in AttentionList" :attention-item="item" ></ProfileCollectAttentionItem>
        <div class="ProfileCollect-end">
            <div class="ProfileCollect-end-last" @click="lastClick">上一页</div>
            <div>当前为{{this.pageNum}}页</div>
            <div class="ProfileCollect-end-next" @click="nextClick">下一页</div>
        </div>
    </div>
    <div v-else>
        <promptNull></promptNull>
    </div>
</template>

<script>
    import {SelectGiveLikeById} from "@/network/givelike"
    import ProfileCollectAttentionItem from "./ProfileCollectAttentionItem"
    import promptNull from "@/components/promptNull"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    export default {
        name: "ProfileCollectAttention",
        data(){
            return{
                AttentionList:[],
                pageNum: 1,
                totalPages: 0,
                IsShow:false
            }
        },
        components:{
            ProfileCollectAttentionItem,
            promptNull
        },
        methods:{
            //分页请求点赞信息
            getAttention() {
                SelectGiveLikeById(this.pageNum, 10, this.$store.state.userId).then(res => {
                    this.totalPages = res.totalPages
                    this.AttentionList = res.content
                    if(res.content.length==0){
                        this.IsShow=false
                    }else {
                        this.IsShow=true
                    }
                })
            },
            //点击上一页
            lastClick() {
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    this.getAttention()
                }
            },
            //点击下一页
            nextClick() {
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    this.getAttention()
                }
            },
            open1() {
                ElNotification({
                    title: "提示！",
                    message: h('i', {
                        style: 'color: teal'
                    }, '这已经是首页了')
                })
            },
            open2() {
                ElNotification({
                    title: "提示！",
                    message: h('i', {
                        style: 'color: teal'
                    }, '这已经是尾巴了!')
                })
            }
        },
        mounted() {
            this.getAttention()
        }

    }
</script>

<style scoped>
    .ProfileCollect-end-last {
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ProfileCollect-end-next {
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ProfileCollectAttention {
        width: 100%;
        border-radius: 1%;
        height: 500px;
        background-color: white;
    }

    .ProfileCollect-end {
        margin-top: 20px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        font-size: 8px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: #9195A3;
    }
</style>