<template>
    <div class="profileCenterUser">
        <div class="profileCenterUser-img">
            <img v-if="this.IsShow" src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d"/>
            <img v-else :src="this.getImageUrl" >
        </div>
        <div class="profileCenterUser-main">
            <div class="profileCenterUser-main-name">{{this.userMassage.userName}}</div>
            <div class="profileCenterUser-main-text">
                <div class="profileCenterUser-main-text-item"><div class="profileCenterUser-main-text-item-number">{{this.userMassage.userUpdateTotal}}</div><div class="profileCenterUser-main-text-item-title">原创</div></div>
                <div class="profileCenterUser-main-text-item"><div class="profileCenterUser-main-text-item-number">{{this.userMassage.userFollowTotal}}</div><div class="profileCenterUser-main-text-item-title">关注</div></div>
                <div class="profileCenterUser-main-text-item"><div class="profileCenterUser-main-text-item-number">{{this.userMassage.userBeFollowTotal}}</div><div class="profileCenterUser-main-text-item-title">粉丝</div></div>
            </div>
        </div>
        <div class="profileCenterUser-Attention"
             @click="AttentionClick"
             @mouseover="addActiveComment($event)"
             @mouseout="removeActiveComment($event)">已关注</div>
    </div>
</template>

<script>
    import {AddOrDelectAttention} from "@/network/attention"
    import {SelectUserById} from "@/network/details"
    export default {
        name: "profileCenterUser",
        props:{
            userId:{
                type:String
            }
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
            getUserMassage(){
                SelectUserById(this.userId).then(res=>{
                    this.userMassage=res
                    if(res.userImageUrl!=null){
                        this.IsShow=false
                    }
                })
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
                            this.$router.push('/ProfileAttention')
                        }else {
                            this.$message.error("取消失败！")
                        }
                    })
                }else {
                    console.log("点击了取消")
                }
            },
            addActiveComment($event) {
                $event.currentTarget.className = 'profileCenterUser-Attention active'
            },
            removeActiveComment($event) {
                $event.currentTarget.className = 'profileCenterUser-Attention'
            },
        },
        mounted() {
            this.getUserMassage()
        }
    }
</script>

<style scoped>
    .active{
        color: black;
    }
    .profileCenterUser{
        width: 85%;
        height: 80px;
        background-color: white;
        z-index: 10;
        border-radius: 5px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
    .profileCenterUser-img img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .profileCenterUser-img{
        position: relative;
        left: -30px;
        top: -10px;
    }
    .profileCenterUser-main{
        width: 300px;
        margin-top: 10px;
        position: relative;
        left: -130px;
    }
    .profileCenterUser-main-text{
        display: flex;
        flex-wrap: nowrap;
    }
    .profileCenterUser-main-text-item{
        display: flex;
        flex-wrap: nowrap;
        margin-right: 15px;
    }
    .profileCenterUser-main-text-item-title{
        color: #9195A3;
        font-size: 8px;
        position: relative;
        top: 2px;
    }
    .profileCenterUser-main-name{
        font-size: 13px;
        margin-bottom: 5px;
    }
    .profileCenterUser-main-text-item-number{
        /*position: relative;*/
        /*top: 2px;*/
        font-size: 12px;
        color: black;
        font-weight: 600;
        margin-right: 4px;
    }
    .profileCenterUser-Attention{
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        height: 10px;
        /*鼠标变小手*/
        cursor: pointer;
        position: relative;
        right: -20px;
        top: 27px;
        font-size: 8px;
        color: #9195A3;
        padding: 3px 5px 3px 5px;
    }
</style>