<template>
    <div class="profileCenterVideoGather">
        <div class="title"><h6>视频集</h6></div>
        <div v-if="this.IsShow">
            <profileCenterVideoGatherItem v-for="item in videoGatherList" :video-gather-item="item"></profileCenterVideoGatherItem>
            <div class="ProfileCollect-end">
                <div class="ProfileCollect-end-last" @click="lastClick">上一页</div>
                <div>当前为{{this.pageNum}}页</div>
                <div class="ProfileCollect-end-next" @click="nextClick">下一页</div>
            </div>

        </div>
        <div v-else>
            <promptNull></promptNull>
        </div>
    </div>
</template>

<script>
    import {getVideoGatherByUserId} from "@/network/resource"
    import profileCenterVideoGatherItem from "./profileCenterVideoGatherItem"
    import promptNull from "@/components/promptNull"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'

    export default {
        name: "profileCenterVideoGather",
        props: {
            userId: {
                type: String
            }
        },
        components: {
            promptNull,
            profileCenterVideoGatherItem
        },
        data() {
            return {
                IsShow: true,
                videoGatherList: [],
                pageNum: 1,
                totalPages: 0,
            }
        },
        methods: {
            getVideoGatherList() {
                getVideoGatherByUserId(this.pageNum, 3, this.userId).then(res => {
                    this.videoGatherList = res.content
                    this.totalPages = res.totalPages
                    if (this.videoGatherList.length == 0) {
                        this.IsShow = false
                    } else {
                        this.IsShow = true
                    }
                })
            },
            //点击上一页
            lastClick() {
                if (this.pageNum <= 1) {
                    this.open1()
                } else {
                    this.pageNum = this.pageNum - 1
                    this.getVideoGatherList()
                }
            },
            //点击下一页
            nextClick() {
                if (this.pageNum == this.totalPages) {
                    this.open2()
                } else {
                    this.pageNum = this.pageNum + 1
                    this.getVideoGatherList()
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
            this.getVideoGatherList()
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

    .profileCenterVideoGather {
        width: 100%;
        height: 380px;
        background-color: white;
        z-index: 10;
        border-radius: 5px;
    }

    .title {
        padding-left: 10px;
        width: 95%;
        border-bottom: 1px solid #cdcdcd;
    }

    .title h6 {
        line-height: 0px;

    }
</style>