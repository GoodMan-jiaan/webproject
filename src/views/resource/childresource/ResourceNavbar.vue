<template>
    <div class="Navbar">
        <div class="NavbarImg">
            <img src="../../../assets/ljalogo.png"/>
        </div>
        <div class="NavbarButton">
            <el-button color="#ff329b"
                       class="submit"
                       type="primary"
                       size="small"
                       v-if="!this.$store.state.userPhone"
                       @click="loginClick">登录/注册</el-button>
            <HomeLoginCerter v-else></HomeLoginCerter>
        </div>
    </div>
</template>

<script>
    import HomeLoginCerter from "@/views/home/childhome/HomeLoginCerter"
    export default {
        name: "ResourceNavbar",
        components:{
            HomeLoginCerter
        },

        methods:{
            loginClick(){
                this.$router.push('/login')
            },
        },

    }
</script>

<style scoped>
    .Navbar{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        /*padding-top: 5px;*/
    }
    .NavbarImg{
        width: 100px;
        position: relative;
        left: -80px;
    }
    .NavbarImg img{width: 100%;}
    .NavbarButton{
        position: relative;
        left: 50px;
        top: 8px;
    }
</style>