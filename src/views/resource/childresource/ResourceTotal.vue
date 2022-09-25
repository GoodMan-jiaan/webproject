<template>
    <div v-if="IsShow">
        <div class="ResourceTotal">
            <ResourceTotalItem v-for="item in this.getResource22" :resource-item="item"></ResourceTotalItem>
        </div>
        <div class="space-router">
            <el-space class="space-router-one"
                      @click="lastClick"
                      @mouseover="addActiveone($event)"
                      @mouseout="removeActiveone($event)">上一页
            </el-space>
            <el-space class="space-router-two"
                      @click="nextClick"
                      @mouseover="addActivetwo($event)"
                      @mouseout="removeActivetwo($event)">下一页
            </el-space>
        </div>
    </div>
    <div v-else class="ResourceTotal-else">
        <div class="ResourceTotal-else-img">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017646593764faa8012193a3cabf48.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653314155&t=f74037b3798b86aa56beecb8b951c560"/>
        </div>
    </div>
</template>

<script>
    import {pageAll} from "@/network/resource"
    import ResourceTotalItem from "./ResourceTotalItem"
    import {h} from 'vue'
    import {ElNotification} from 'element-plus'
    import {getVideoesgatherByMassage} from "@/network/resource"

    export default {
        name: "ResourceTotal",
        components: {
            ResourceTotalItem
        },
        computed: {
            getPage() {
                return this.$store.state.page
            },
            getResource22() {
                return this.$store.state.Resource
            },
            gettotalPages() {
                return this.$store.state.totalPages
            }
        },
        watch:{
            //监听视频集，判断是否为空值
          getResource22() {
              console.log("视频集发生变化")
              if(this.getResource22.length==0){
                  this.IsShow=false
              }else {
                  this.IsShow=true
              }
          }
        },

        data() {
            return {
                IsShow: false
                // page:this.getPage,
                // Resource:this.getResource22,
                // totalPages:this.gettotalPages,//总的页数
            }
        },
        mounted() {
            this.initialPage()
            this.getResource()
        },
        methods: {
            //点击上一页
            lastClick() {
                if (this.getPage <= 1) {
                    this.open1()
                } else {
                    if (this.$store.state.recognition == 0) {
                        // this.page--
                        this.$store.commit("updatePage", this.getPage - 1)
                        //请求初始化数据
                        this.getResource()
                    } else {
                        this.$store.commit("updatePage", this.getPage - 1)
                        //请求点了类别数据
                        this.getResource2()
                    }

                }
            },
            //点击下一页
            nextClick() {
                if (this.getPage == this.gettotalPages) {
                    this.open2()
                } else {
                    if (this.$store.state.recognition == 0) {
                        // this.page++
                        this.$store.commit("updatePage", this.getPage + 1)
                        //请求初始化数据
                        this.getResource()
                    } else {
                        this.$store.commit("updatePage", this.getPage + 1)
                        //请求点了类别数据
                        this.getResource2()
                    }

                }
            },
            //获得界面视频集数据
            getResource() {
                pageAll(this.getPage, 9).then(res => {
                    console.log(res)
                    // this.Resource.push(...res.content)
                    // this.totalPages=res.totalPages
                    // this.Resource=res.content
                    this.$store.commit("updateResource", res.content)
                    this.$store.commit("updateTotalPages", res.totalPages)
                    this.$store.commit("updateRecognition", 0)
                })
            },

            getResource2() {
                getVideoesgatherByMassage(this.$store.state.videosType.classType,
                    this.$store.state.videosType.organType,
                    this.$store.state.videosType.contentType,
                    this.getPage, 9).then(res => {
                    console.log(res)
                    this.$store.commit("updateResource", res.content)
                    this.$store.commit("updateTotalPages", res.totalPages)
                    this.$store.commit("updateRecognition", 1)
                })
            },
            //反正由于缓存使的Page的值下不来
            initialPage() {
                this.$store.commit("updatePage", 1)
            },
            addActiveone($event) {
                $event.currentTarget.className = 'space-router-one active'
            },
            removeActiveone($event) {
                $event.currentTarget.className = 'space-router-one'
            },
            addActivetwo($event) {
                $event.currentTarget.className = 'space-router-two active'
            },
            removeActivetwo($event) {
                $event.currentTarget.className = 'space-router-two'
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
        }
    }
</script>

<style scoped>
    .active {
        color: #ff329b;
    }

    .space-router-one {
        /*鼠标变小手*/
        cursor: pointer;
    }

    .space-router-two {
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ResourceTotal-else {
        padding-top: 30px;
        padding-bottom: 60px;
        width: 100%;
    }

    .ResourceTotal-else-img{
        width: 300px;
        margin: 0 auto;
    }
    .ResourceTotal-else-img img{
        width: 100%;
    }

    .ResourceTotal {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 78%;
        margin: 20px auto;
    }

    .space-router {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 78%;
        margin: 20px auto;
        font-size: smaller;
    }

</style>