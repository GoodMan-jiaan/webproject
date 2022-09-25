<template>
    <div class="AdminsEmailChild">
        <img class="AdminsUserManageChild-img" @click="shadiaoClick" src="../../../assets/chahao.png">
        <div v-if="this.just===0">
            <div class="AdminsEmailChild-mian">
                <div class="AdminsEmailChild-mian-item">建议Id:{{this.emailMassage.adviseId}}</div>
                <div class="AdminsEmailChild-mian-item">用户手机号:{{this.emailMassage.phone}}</div>
                <div class="AdminsEmailChild-mian-item">上传时间:{{timestampToTime(this.emailMassage.uptime/1000)}}</div>
                <div class="AdminsEmailChild-mian-item1">内容:{{this.emailMassage.content}}</div>
            </div>
            <el-button type="primary" size="small" @click="submit" class="submit">已读</el-button>
        </div>
        <div v-else-if="this.just==1">
            <div class="AdminsEmailChild-mian">
                <div class="AdminsEmailChild-mian-item">建议Id:{{this.emailMassage.adviseId}}</div>
                <div class="AdminsEmailChild-mian-item">用户手机号:{{this.emailMassage.phone}}</div>
                <div class="AdminsEmailChild-mian-item">上传时间:{{timestampToTime(this.emailMassage.uptime/1000)}}</div>
                <div class="AdminsEmailChild-mian-item1">内容:{{this.emailMassage.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {updateIsreadByadminId} from "@/network/advise"
    export default {
        name: "AdminsEmailChild",
        props:{
            emailMassage:{
                type:Object
            },
            just:{
                type: Number
            }
        },
        methods:{
            //点击已读
            submit(){
                updateIsreadByadminId(this.emailMassage.adviseId).then(res=>{
                    if(res){
                        this.$store.commit('updateIsEmailSelect',false)
                        this.$message.success("标记成功！")
                    }else {
                        this.$message.error("无法标记为已读！")
                    }
                })
            },

            //点击叉号
            shadiaoClick(){
                this.$store.commit('updateIsEmailSelect',false)
            },
            //时间戳转化格式
            timestampToTime (time) {
                // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var date = new Date(time * 1000)
                let y = date.getFullYear()
                let MM = date.getMonth() + 1
                MM = MM < 10 ? ('0' + MM) : MM
                let d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                let h = date.getHours()
                h = h < 10 ? ('0' + h) : h
                let m = date.getMinutes()
                m = m < 10 ? ('0' + m) : m
                let s = date.getSeconds()
                s = s < 10 ? ('0' + s) : s
                return y + '年' + MM + '月' + d + '日'
            },
        }
    }
</script>

<style scoped>
    .AdminsEmailChild{
        width: 300px;
        background-color: #606266;
        z-index: 100;
    }
    .AdminsUserManageChild-img{
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 275px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .AdminsEmailChild-mian{
        font-size: 10px;
        color: white;
        margin-left: 25px;
        padding-bottom: 20px;
    }
    .AdminsEmailChild-mian-item{
        margin-bottom: 10px;
        width: 250px;
    }
    .AdminsEmailChild-mian-item1{
        width: 250px;
        font-size: 9px;

    }
    .submit{
        margin-top: 15px;
        margin-bottom: 20px;
        margin-left: 125px;
    }
</style>