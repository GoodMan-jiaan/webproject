<template>
    <div class="main">
        <div class="ProfileAttention-main-img">
            <img v-if="this.IsShow" src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d"/>
            <img v-else :src="this.getImageUrl"/>
        </div>
        <div class="ProfileAttention-main-name" @click="UserNameClick" >{{this.userMassage.userName}}</div>
        <div class="ProfileAttention-main-Attention"
             @click="AttentionClick"
             @mouseover="addActiveComment($event)"
             @mouseout="removeActiveComment($event)">已关注</div>
    </div>
</template>

<script>
    import {SelectUserById} from "@/network/details"
    import {AddOrDelectAttention} from "@/network/attention"
    export default {
        name: "ProfileAttentionChild",
        props:{
            attention:{
                type:Object
            }
        },
        watch:{
            userId(){
                this.getuser()
            }
        },
        mounted() {
            this.getuser()
        },
        data(){
            return{
                userMassage:{},
                IsShow:true
            }
        },
        computed:{
            getImageUrl(){
                return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.userMassage.userImageUrl;
            }
        },
        methods:{
            //点击用户名称
            UserNameClick(){
                this.$router.push('/profileCenter/'+this.userMassage.userId)
            },
            //点击已关注
            AttentionClick(){
                this.confirmDialog()
            },
            //点击对话框
            confirmDialog(){
                if(confirm("是否取消关注？")){
                    //取消关注
                    AddOrDelectAttention(this.attention.followUser, this.attention.beFollowUser,0).then(res=>{
                        if(res){
                            this.$message.success("取消成功！")
                            this.$router.push('/ProfileMain')
                        }else {
                            this.$message.error("取消失败！")
                        }
                    })
                }else {
                    console.log("点击了取消")
                }
            },

            addActiveComment($event) {
                $event.currentTarget.className = 'ProfileAttention-main-Attention active'
            },
            removeActiveComment($event) {
                $event.currentTarget.className = 'ProfileAttention-main-Attention'
            },
            //获取用户信息
            getuser(){
                SelectUserById(this.attention.beFollowUser).then(res=>{
                    this.userMassage=res
                    console.log(res);
                    if(res.userImageUrl!=null){
                        this.IsShow=false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .active{
        color: black;
    }
    .ProfileAttention-main-Attention{
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        height: 10px;
        /*鼠标变小手*/
        cursor: pointer;
        position: relative;
        right: -100px;
        top: 7px;
        padding: 3px 5px 3px 5px;
    }
    .ProfileAttention-main-name{
        color: black;
        font-size: 10px;
        position: relative;
        width: 110px;
        left: 20px;
        top: 10px;
        cursor: pointer;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:1;
        text-overflow: ellipsis;
    }
    .ProfileAttention-main-img img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 0;
        position: relative;
        left: 10px;
    }
    .main{
        width: 90%;
        margin: 15px auto;
        border-bottom: 1px solid #f0f0f2;
        font-size: 8px;
        color: #9195A3;
        display: flex;
        flex-wrap: nowrap;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>