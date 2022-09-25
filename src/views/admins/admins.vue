<template>
    <div class="admins">
        <AdminsNavbar></AdminsNavbar>
        <div class="common-layout" >
            <el-container>
                <el-aside width="125px">
                    <AdminsAside></AdminsAside>
                </el-aside>
                <el-main>
                    <AdminsMain></AdminsMain>
                </el-main>
            </el-container>
        </div>
    </div>
<!--    管理员界面-->
</template>

<script>
    import AdminsNavbar from "@/views/admins/childadmins/AdminsNavbar"
    import AdminsAside from "@/views/admins/childadmins/AdminsAside"
    import AdminsMain from "@/views/admins/childadmins/AdminsMain"
    export default {
        name: "admins",
        components:{
            AdminsNavbar,
            AdminsAside,
            AdminsMain
        },
        data(){
            return{
                windowHeight:document.documentElement.clientHeight,
                windowWidth:document.documentElement.clientWidth
            }
        }
    }
</script>

<style scoped>
    .admins{
        height: 412px;
        background-color: #fff;
        /*background-color: #009688;*/
    }
    .el-aside{
        background-color: #24262F;
        height: 382px;
    }
    .el-main{
        background-color: #f0f0f2;
    }
</style>