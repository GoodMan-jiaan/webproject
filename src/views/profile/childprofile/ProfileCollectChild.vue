<template>
    <div v-if="IsShow" class="ProfileCollectChild">
        <ProfileCollectItem v-for="item in CollectList"  :collect-item="item"></ProfileCollectItem>
        <div class="ProfileCollect-end">
            <div class="ProfileCollect-end-last" @click="lastClick">上一页</div>
            <div>当前为{{this.totalPages}}页</div>
            <div class="ProfileCollect-end-next" @click="nextClick">下一页</div>
        </div>
    </div>
    <div v-else>
        <promptNull></promptNull>
    </div>
</template>

<script>
    import ProfileCollectItem from "./ProfileCollectItem"
    import {SelectCollect} from "@/network/collect"
    import promptNull from "@/components/promptNull"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'

    export default {
        name: "ProfileCollectChild",
        components: {
            ProfileCollectItem,
            promptNull
        },
        data() {
            return {
                CollectList: [],
                pageNum: 1,
                totalPages: 0,
                IsShow:false
            }
        },
        methods: {
            //分页请求收藏信息
            getCollect() {
                SelectCollect(this.pageNum, 10, this.$store.state.userId).then(res => {
                    this.totalPages = res.totalPages
                    this.CollectList = res.content
                    if(this.CollectList.length==0){
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
                    this.getCollect()
                }
            },
            //点击下一页
            nextClick() {
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    this.getCollect()
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
            this.getCollect()
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