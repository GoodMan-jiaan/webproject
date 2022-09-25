<template>

    <div class="MainHead">
        <div class="MainHead-type">
            <label>课程类型</label>
            <ul class="MainHead-type-ul" >
                <li class="MainHead-type-li"
                    v-for="(item,index) in classType"
                    :key=index
                    :style="{'color':current === index ? '#ff329b':'' }"
                    @click="TypeLiClick(item.label,index)"
                    @mouseover="addActiveTypeLi($event)"
                    @mouseout="removeActiveTypeLi($event)">{{item.label}}</li>
            </ul>
        </div>
        <div class="organType">
            <label>机构类型</label>
            <ul class="organType-ul" >
                <li class="organType-li"
                    v-for="(item,index) in organType" :key=index
                    :style="{'color':currentIndex === index ? '#ff329b':'' }"
                    @click="OrganLiClick(item.label,index)"
                    @mouseover="addActiveTypeorgan($event)"
                    @mouseout="removeActiveTypeorgan($event)">{{item.label}}</li>
            </ul>
        </div>
        <div class="organType">
            <label>内容类型</label>
            <ul class="organType-ul" >
                <li class="organType-li"
                    v-for="(item,index) in contentType" :key=index
                    :style="{'color':currentContentIndex === index ? '#ff329b':'' }"
                    @click="ContentLiClick(item.label,index)"
                    @mouseover="addActiveTypeorgan($event)"
                    @mouseout="removeActiveTypeorgan($event)">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getVideoesgatherByMassage} from "@/network/resource"
    export default {
        name: "ResourceIntegration",
        data(){
            return{
                current:0,//课程类别的索引
                currentIndex:0,//机构类别的索引
                currentContentIndex:0,
                classType:[
                    {
                    label: "全部"
                },{
                    label:"四级"
                },{
                    label: "六级"
                },{
                    label: "其他"
                }
                ],
                organType:[
                    {label:"全部"},
                    {label:"新东方"},
                    {label:"有道"},
                    {label:"商志"},
                    {label:"高教社"},
                    {label:"文都"},
                    {label:"考虫"},
                    {label:"其他"},
                    ],
                //内容给
                contentType:[
                    {label:"全部"},
                    {label:"词汇"},
                    {label:"语法"},
                    {label:"听力"},
                    {label:"阅读"},
                    {label:"写作"},
                    {label:"翻译"},
                    {label:"口语"},
                    {label: "其他"}
                ]
            }
        },
        computed:{
            getPage(){
                return this.$store.state.page
            },
            getResource22(){
                return this.$store.state.Resource
            },
            gettotalPages(){
                return this.$store.state.totalPages
            }
        },
        methods:{
            addActiveTypeLi($event) {
                $event.currentTarget.className = 'MainHead-type-li active'
            },
            removeActiveTypeLi($event) {
                $event.currentTarget.className = 'MainHead-type-li'
            },
            addActiveTypeorgan($event) {
                $event.currentTarget.className = 'organType-li active'
            },
            removeActiveTypeorgan($event) {
                $event.currentTarget.className = 'organType-li'
            },
            //请求数据
            getvideoesgather(){
                getVideoesgatherByMassage(this.$store.state.videosType.classType,
                    this.$store.state.videosType.organType,
                    this.$store.state.videosType.contentType,
                    this.getPage,9).then(res=>{
                    console.log(res)
                    this.$store.commit("updateResource",res.content)
                    this.$store.commit("updateTotalPages",res.totalPages)
                    this.$store.commit("updateRecognition",1)
                })
            },

            //反正由于缓存使的Page的值下不来
            initialPage(){
                this.$store.commit("updatePage",1)
                this.$store.commit("updateVideosType",[this.classType[this.current].label,this.organType[this.currentIndex].label,
                    this.contentType[this.currentContentIndex].label])
            },
            //点击类别上面的类型
            TypeLiClick(label,index){
                this.current = index;
                this.initialPage();
                this.getvideoesgather();
            },
            //点击类别上面的类型
            OrganLiClick(label,index){
                this.currentIndex = index;
                this.initialPage();
                this.getvideoesgather();

            },
            ContentLiClick(label,index){
                this.currentContentIndex = index;
                this.initialPage();
                this.getvideoesgather();

            }
        }
    }
</script>

<style scoped>
    .active{
        color: #ff329b;
    }
    .MainHead-type{
        display: flex;
        flex-wrap: wrap;
        margin-left: 30px;
    }
    .organType{
        display: flex;
        flex-wrap: wrap;
        margin-left: 30px;
        margin-top: -30px;
        margin-bottom: 10px;
    }
    .MainHead-type-ul{
        list-style-type: none;
        position: relative;
        top: 6px;
        right: 10px;
        display: flex;
        flex-wrap: wrap;

    }
    .organType-ul{
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        position: relative;
        top: 6px;
        right: 10px;
    }
    .MainHead-type-li{
        font-size: 10px;
        margin-right: 30px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .organType-li{
        font-size: 10px;
        margin-right: 30px;
        /*鼠标变小手*/
        cursor: pointer;

        margin-bottom: 5px;
    }
    .MainHead-type label{
        font-size: 10px;
        font-weight: 400;
        line-height: 60px;
        font-family: PingFangSC-Regular,PingFang SC;
        color: #999;
    }

    .organType label{
        font-size: 10px;
        font-weight: 400;
        line-height: 60px;
        font-family: PingFangSC-Regular,PingFang SC;
        color: #999;
    }
    .MainHead{
        width: 80%;
        height: 150px;
        background-color: white;
        border-radius: 6px;
        margin: 20px auto;
        box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);
    }
</style>