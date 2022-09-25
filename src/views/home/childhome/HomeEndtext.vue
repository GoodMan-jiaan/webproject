<template>
    <div class="HomeEndtext">
        <h2>英语改变生活</h2>
        <p>如果我会说英语......</p>
        <div class="HomeEndtext-Item">
            <HomeEndtextItem></HomeEndtextItem>
        </div>
        <el-button color="#ff329b"
                   class="submit" type="primary" size="small" @click="submit">立即学习</el-button>
    </div>
</template>

<script>
    import HomeEndtextItem from './HomeEndtextItem'
    export default {
        name: "HomeEndtext",
        components:{
            HomeEndtextItem
        },
        methods:{
            submit(){
                this.$router.push('/resource')
            }
        }

    }
</script>

<style scoped>
    .HomeEndtext{
        margin-left: 80px;
        margin-top: 60px;
        /*margin: 60px auto;*/
    }
    .HomeEndtext p{
        font-size: 9px;
    }
    .HomeEndtext-Item{
        width: 700px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /*justify-content: space-around;*/
    }
    .submit{
        margin-left: 40%;
        margin-bottom: 50px;
        margin-top: 30px;

    }
</style>