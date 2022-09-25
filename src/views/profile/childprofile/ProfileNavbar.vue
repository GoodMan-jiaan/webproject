<!--个人中心里的头-->
<template>
    <div class="ProfileNavbar">
        <div class="ProfileNavbar-one">个人中心  |</div>
        <div class="personCenter">
            <div class="personCenter-home" @click="HomeClick">首页</div>
            <div class="personCenter-img">
                <img v-if="IsShow" src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d">
                <img v-else :src="this.getImageurl"/>
            </div>
            <span class="personCenter-span">{{this.$store.state.userPhone}}</span>
        </div>
    </div>
</template>

<script>
    import {SelectUserById} from "@/network/details"
    export default {
        name: "ProfileNavbar",
        data(){
            return{
                IsShow:true,
                imageUrl:""
            }
        },
        computed:{
          getUserId(){
              return this.$store.state.userId
          },
            getImageurl(){
              return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.imageUrl
            }
        },
        //监听用户Id的变化重新请求数据
        watch:{
            getUserId() {
                this.getUser()
            }
        },
        methods:{
            HomeClick(){
                this.$router.push('/')
                this.$store.commit('updateIsProfileMain',true)
            },
            getUser(){
                SelectUserById(this.getUserId).then(res=>{
                    this.imageUrl=res.userImageUrl
                    if(this.imageUrl!=""){
                        this.IsShow=false
                    }else {
                        this.IsShow=true
                    }
                })
            }
        },
        mounted() {
            this.getUser()
        }
    }
</script>

<style scoped>
    .personCenter-home{
        font-weight: 400;
        position: relative;
        top: 8px;
        right: 20px;
        font-size: 9px;
        /*鼠标变小手*/
        cursor: pointer;
    }

    .ProfileNavbar-one{
        font-weight: 400;
        font-size: 10px;
        position: relative;
        right: 100px;
    }
    .ProfileNavbar{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }


    .personCenter{
        position: relative;
        left: 150px;
        display: flex;
        font-size: 9px;
        font-family: "SimSun-ExtB";
        font-weight: 600;

    }
    .personCenter-img{
        width: 28px;
        height: 28px;

    }
    .personCenter-img img{
        width: 24px;
        border-radius: 50%;
        border: 0;
    }
    .personCenter-span{
        position: relative;
        left: 5px;
        top:10px;
        width: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;

    }
</style>