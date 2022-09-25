<template>
    <div class="AdminsAside">
        <div class="AdminsAside-li"
             v-for="(item,index) in asideList"
             @click="adminsClick(item.name,index)"
             :style="{'background-color':current === index ? '#009688':'' }"
             @mouseover="addActiveClick($event)"
             @mouseout="removeActiveClick($event)"
             :key="index">
            <img :src="item.url"/>
            <diV>{{item.name}}</diV>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminsAside",
        data() {
            return {
                asideList: [
                    {
                        name: "用户管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.png"
                    }, {
                        name: "视频管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/%E8%A7%86%E9%A2%91.png"
                    }, {
                        name: "评论管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/%E8%AF%84%E8%AE%BA%E7%AE%A1%E7%90%86.png"
                    }, {
                        name: "点赞管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/%E7%82%B9%E8%B5%9E.png"
                    }, {
                        name: "收藏管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/_%E6%94%B6%E8%97%8F.png"
                    }, {
                        name: "关注管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/%E5%85%B3%E6%B3%A8.png"
                    }, {
                        name: "邮件管理",
                        url:"http://raz6v4f43.hn-bkt.clouddn.com/%E9%82%AE%E4%BB%B6.png"
                    },
                    {
                        name: "视频集管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/%E8%A7%86%E9%A2%91%E7%AE%A1%E7%90%86.png"
                    }, {
                        name: "历史记录管理",
                        url: "http://raz6v4f43.hn-bkt.clouddn.com/%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95.png"
                    },
                ],
                current: 0
            }
        },
        methods: {
            addActiveClick($event) {
                $event.currentTarget.className = 'AdminsAside-li active'
            },
            removeActiveClick($event) {
                $event.currentTarget.className = 'AdminsAside-li'
            },
            adminsClick(name, index) {
                this.current = index
                if (name == '用户管理') {
                    this.$router.push('/AdminsUserManage')
                } else if (name == '视频集管理') {
                    this.$router.push('/AdminsVideoManage')
                } else if (name == '评论管理') {
                    this.$router.push('/AdminsComment')
                } else if (name == '点赞管理') {
                    this.$router.push('/AdminsGiveLike')
                } else if (name == '收藏管理') {
                    this.$router.push('/AdminsCollect')
                } else if (name == '关注管理') {
                    this.$router.push('/AdminsAttention')
                } else if (name == '历史记录管理') {
                    this.$router.push('/AdminsHistory')
                } else if (name == '视频管理') {
                    this.$router.push("/AdminsCourse")
                } else if(name == '邮件管理'){
                    this.$router.push("/AdminsEmail")
                }
            }
        }
    }
</script>

<style scoped>
    .active {
        border-left: 4px solid #009688;
        background-color: #393D49;
    }

    .AdminsAside-li {
        display: flex;
        flex-wrap: nowrap;
        width: 89%;
        color: white;
        font-size: 9px;
        font-family: "微软雅黑 Light";
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 9px;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .AdminsAside-li img {
        width: 10px;
        height: 10px;
        margin-right: 10px;
    }

    .AdminsAside {
        width: 100%;
    }
</style>