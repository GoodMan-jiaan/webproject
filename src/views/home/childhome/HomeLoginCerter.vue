<template>
<!--    登录成功之后首页中个人中心的组件-->
    <el-dropdown size="small" placement="bottom-start" @command="handleCommand">
    <span class="el-dropdown-link">
      <div class="personCenter">
          <div class="personCenter-img">
              <img v-if="this.IsShow" src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d">
              <img v-else :src="this.getImageurl"/>
          </div>
          <span class="personCenter-span">{{this.$store.state.userPhone}}</span>
      </div>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
                <el-dropdown-item command="意见反馈">意见反馈</el-dropdown-item>
                <el-dropdown-item command="退出">退出</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
    import {SelectUserById} from "@/network/details"
    import {ArrowDown} from '@element-plus/icons-vue'
    export default {
        name: "HomeLoginCerter",
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
            //我的下拉
            handleCommand(command){
                if(command=="个人中心"){
                    this.$router.push('/ProfileMain')
                }else if(command=="意见反馈"){
                    this.$router.push("/")
                }else if(command=="退出"){
                    this.$router.go(0)
                }
            },
            getUser(){
                if(this.getUserId!=""){
                    SelectUserById(this.getUserId).then(res=>{
                        console.log(res)
                        console.log(res.userImageUrl)
                        if(res.userImageUrl==null){
                            console.log("发生变化")
                            this.IsShow=true
                        }else {
                            this.imageUrl=res.userImageUrl
                            this.IsShow=false

                        }
                    })
                }

            },

        },
        mounted() {
            this.getUser()
        },
        setup(){
            return {ArrowDown}
        }
    }
</script>

<style scoped>
    .el-dropdown{
        /*鼠标变小手*/
        cursor: pointer;
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
    .personCenter{
        position: relative;
        left: 15px;
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

    .example-showcase .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
    }
</style>