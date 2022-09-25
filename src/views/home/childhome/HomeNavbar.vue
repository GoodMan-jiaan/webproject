<template>
<!--    首页中横条中的组件-->
    <div class="HomeNavbar">
        <div class="HomeNavar-laber">
            <div class="HomeNavar-laber-siji"
                 @mouseover="addActivesiji($event)"
                 @mouseout="removeActivesiji($event)"
            ><a>四级</a></div>

            <div class="HomeNavar-laber-liuji"
                 @mouseover="addActiveliuji($event)"
                 @mouseout="removeActiveliuji($event)"><a>六级</a></div>

            <el-dropdown size="small" placement="bottom-start" @command="handleCommand">
       <span class="el-dropdown-link">
      机构
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
                <template #dropdown>
                    <el-dropdown-menu >
                        <el-dropdown-item command="Action1">Action 1</el-dropdown-item>
                        <el-dropdown-item command="Action2">Action 2</el-dropdown-item>
                        <el-dropdown-item command="Action3">Action 3</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
        <div class="HomeNavar-input">
            <el-input
                    @blur="loseFocus"
                    v-model="input2"
                    class="w-50 m-2"
                    placeholder="Please Input"
                    :suffix-icon="Search"
                    size="small"
            />
        </div>
        <div class="HomeNavar-login"
             v-if="!this.$store.state.userPhone"
             @click="loginClick"
             @mouseover="addActive($event)"
             @mouseout="removeActive($event)">
            <a >登录 | 注册</a>
        </div>
        <HomeLoginCerter v-else></HomeLoginCerter>
    </div>
</template>



<script>
    import {ref} from 'vue'
    import {Search} from '@element-plus/icons-vue'
    import {ArrowDown} from '@element-plus/icons-vue'
    import HomeLoginCerter from './HomeLoginCerter'

    export default {
        name: "HomeNavbar",
        components:{
            HomeLoginCerter
        },
        data(){
          return{
              IsLogin:false
          }
        },
        methods:{
            addActivesiji($event) {
                $event.currentTarget.className = 'HomeNavar-laber-siji active'
            },
            removeActivesiji($event) {
                $event.currentTarget.className = 'HomeNavar-laber-siji'
            },
            addActiveliuji($event) {
                $event.currentTarget.className = 'HomeNavar-laber-liuji active'
            },
            removeActiveliuji($event) {
                $event.currentTarget.className = 'HomeNavar-laber-liuji'
            },

            addActive($event) {
                $event.currentTarget.className = 'HomeNavar-login active'
            },
            removeActive($event) {
                $event.currentTarget.className = 'HomeNavar-login'
            },


            //点击登录注册
            loginClick(){
                this.$router.push('login')
            },

            //下拉菜单的触发事件
            handleCommand(command){

                if(command=="Action1"){
                    console.log("Action1");
                }else if(command=="Action2"){
                    console.log("Action2");
                }else {
                    console.log("Action3");
                }
            },
            //搜索框事件
            loseFocus(){
                console.log(this.input2);
            }
        },
        setup() {
            const input2 = ref('')
            return {input2, Search, ArrowDown}
        }
    }

</script>

<style scoped>
    .el-dropdown{
        /*鼠标变小手*/
        cursor: pointer;
      }

    .HomeNavbar a{
        font-size: 8px;
        font-family: "Bell MT";
    }


    .active{
        color: #ff329b;
    }


    .HomeNavar-laber-siji{
        margin-right: 25px;
        margin-left: 150px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .HomeNavar-laber-liuji{
        margin-right: 25px;
        /*鼠标变小手*/
        cursor: pointer;
    }


    .HomeNavbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 15px;
        font-size: 10px;
        font-weight: 400;
        font-family: EF Circular Latin,PingFang SC,Microsoft Yahei,sans-serif;
    }

    .HomeNavar-input {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .el-input {
        width: 200px;
        right: 10px;
        font-size: 8px;

    }

    .HomeNavar-login {
        font-size: 10px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .el-dropdown-link{
        position: relative;
        top: -2px;
        font-size: 8px;
        font-family: "SimSun-ExtB";
        font-weight: 500;
    }

    .HomeNavar-laber {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .example-showcase .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
    }

</style>