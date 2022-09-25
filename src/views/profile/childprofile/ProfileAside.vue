<template>
    <div class="ProfileAside">
        <div class="personCenter-img">
            <img v-if="IsShow" class="personCenter-img1" src="https://himg.bdimg.com/sys/portraitn/item/7e3eb0dcb0dcd1a9c3b7b6f9cf3d"/>
            <img v-else class="personCenter-img1" :src="this.getImageUrl"/>
            <div class="lja">
                <el-upload class="avatar-uploader"
                           :limit="1"
                           :show-file-list="false"
                           :on-success="handleAvatarSuccess"
                           :before-upload="beforeAvatarUpload"
                           accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                           action="http://localhost:8080/uploadImage">
                    <div class="ProfileMain-end">
                        <img class="ProfileMain-end-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB60lEQVRYCe1XP0vDUBC/q7GDOCi4WP8gOIqCH6BfwMVBEXXrqosIraurLYgOOomOBVerm6OjOPUjNE6CQxFs03e+S5vmvTQpSRqoQx6Ed+/evfvd/V5yvQKkY8wMoB9+rmIVgKhABJsANO1no+kQSa6vPkuTp5peWeSuaRlbnfVG0XhW1JBRFyznLlpVEuKeiPKhwL0OfNaLFdqAX+tdCFFbKtOqaqIxwJkzOAJ+YQaPZqYmXurH2FQPRJUZXJD1KhOaQ8QnycC2nJkxexiOYM+Sdp4ZXBo+NrTN6AsPeG12xdhVwdmjdgXdOwfgzKPD6Sd8wHfqe9jSrTwBOHeeMO2cuS84B6Mx4I0uzjps5o7vRAOICs5BJBZAHPDEAogLnkgAUcDny+1LfhjYGSNdQRTwHuCJnPnpj9gBnBNlBLVrvQo39FProxGh/I3Rqm/8ABAFELwhwt2w77wPHiDopTjAKEhtnmUPeM8MMgihj81ACN+hTNIAUgb+GwPd9mvtJkQjGuodd41cn3qLpzEgi8oHH/n+6Wy5R5ORHJ8OhuNVL0SID7JU5knQ7ULFsluzUbsjzpzB2acNyhjK0Ooy6+22HGBfsUlMlNlXzVL2UHU4EABvRv5jonockLFp0y4zN4uGlv2AaaoYBwN/reAFFzj+0usAAAAASUVORK5CYII="/>
                        <div class="ProfileMain-end-write">编辑</div>
                    </div>
                </el-upload>
            </div>
        </div>
        <div class="personCenter-name">{{userName}}</div>

        <div class="ProfileAside-center">
            <div class="ProfileAside-center-data">{{uploadNumber}}</div>
            <div class="ProfileAside-center-label">已上传</div>
        </div>
        <div class="ProfileAside-center1">
            <div class="ProfileAside-center-data">{{attentionNumber}}</div>
            <div class="ProfileAside-center-label">关注</div>
        </div>
        <div>
            <div class="ProfileAside-center-data">{{fenNumber}}</div>
            <div class="ProfileAside-center-label">粉丝</div>
        </div>

        <div class="endBtnHome">
            <div class="endBtn "
                 :style="{'color':current === 1 ? '#ff329b':'' }"
                 @click="UpdateClick"
                 @mouseover="addActiveUpdate($event)"
                 @mouseout="removeActiveUpdate($event)">
                <img v-if="this.IsImage.IsImage1" src="../../../assets/upadate.png">
                <img v-else src="../../../assets/update1.png">
                <div class="endBtn-text1">上传视频</div>
            </div>
            <div class="endBtn1"
                 @click="shouchangClick"
                 :style="{'color':current === 2 ? '#ff329b':'' }"
                 @mouseover="addActiveShouchang($event)"
                 @mouseout="removeActiveShouchang($event)">
                <img v-if="this.IsImage.IsImage2" src="../../../assets/shouchang.png">
                <img v-else src="../../../assets/shouchang1.png">
                <div class="endBtn-text">收藏与赞</div>
            </div>
            <div class="endBtn2"
                 @click="lisiClick"
                 :style="{'color':current === 3 ? '#ff329b':'' }"
                 @mouseover="addActiveLishi($event)"
                 @mouseout="removeActiveLishi($event)">
                <img v-if="this.IsImage.IsImage3" src="../../../assets/lishi.png">
                <img v-else src="../../../assets/lishi1.png">
                <div class="endBtn-text">历史记录</div>
            </div>
            <div class="endBtn3"
                 @click="pinlunClick"
                 :style="{'color':current === 4 ? '#ff329b':'' }"
                 @mouseover="addActivePinglun($event)"
                 @mouseout="removeActivePinglun($event)">
                <img v-if="this.IsImage.IsImage4" src="../../../assets/comment.png">
                <img v-else src="../../../assets/comment1.png">
                <div class="endBtn-text">评论信息</div>
            </div>
            <div class="endBtn4"
                 @click="ProfileClick"
                 :style="{'color':current === 5 ? '#ff329b':'' }"
                 @mouseover="addActiveProfile($event)"
                 @mouseout="removeActiveProfile($event)">
                <img v-if="this.IsImage.IsImage5" src="../../../assets/geren.png">
                <img v-else src="../../../assets/geren1.png">
                <div class="endBtn-text">个人信息</div>
            </div>

            <div class="endBtn5"
                 @click="VideoClick"
                 :style="{'color':current === 6 ? '#ff329b':'' }"
                 @mouseover="addActiveVideo($event)"
                 @mouseout="removeActiveVideo($event)">
                <img v-if="this.IsImage.IsImage6" src="../../../assets/shiping.png">
                <img v-else src="../../../assets/shiping1.png">
                <div class="endBtn-text">视频管理</div>
            </div>

            <div class="endBtn6"
                 @click="AttentionClick"
                 :style="{'color':current === 7 ? '#ff329b':'' }"
                 @mouseover="addActiveAttention($event)"
                 @mouseout="removeActiveAttention($event)">
                <img v-if="this.IsImage.IsImage7" src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%B7%B2%E5%85%B3%E6%B3%A8%E4%BE%9B%E5%BA%94%E5%95%86.png">
                <img v-else src="http://raz6v4f43.hn-bkt.clouddn.com/%E5%B7%B2%E5%85%B3%E6%B3%A8%E4%BE%9B%E5%BA%94%E5%95%86%20%281%29.png">
                <div class="endBtn-text">已关注</div>
            </div>
        </div>

    </div>
</template>

<script>
    import {SelectUserById} from "@/network/details"
    import {UpdateUserImageUrl,DeleteImage} from "@/network/fileUp"
    export default {
        name: "ProfileAside",
        data() {
            return {
                current: 5,//下面信息的路由
                userName: "林佳岸",
                uploadNumber: 0,
                attentionNumber: 1,//关注总数
                fenNumber: 1,//粉丝总数
                IsImage: {
                    IsImage1: true,
                    IsImage2: true,
                    IsImage3: true,
                    IsImage4: true,
                    IsImage5: false,
                    IsImage6: true,
                    IsImage7: true
                },//下面路由的图片是否改变
                IsShow:true,//当用户信息的没有图片是显示今天图片
                ImageUrl:"",//头像的图片路径
            }

        },
        mounted() {
            this.getUser()
        },
        computed:{
          getImageUrl(){
              return "http://rb8v8q2nr.hn-bkt.clouddn.com/"+this.ImageUrl
          }
        },
        methods: {
            handleAvatarSuccess(res, file){
                UpdateUserImageUrl(this.$store.state.userId,res).then(ress=>{
                    this.ImageUrl=ress.userImageUrl
                    this.$message.success("更换成功！")
                    this.IsShow=false
                })

            },
            //点击上传图片前
            beforeAvatarUpload(file){
                //删除七牛上的已有的图片
                DeleteImage(this.ImageUrl).then(res=>{
                    if(res==200){
                        return true;
                    }else {
                        return false
                    }
                })

            },
            //获取用户信息
            getUser(){
                SelectUserById(this.$store.state.userId).then(res=>{
                    this.ImageUrl=res.userImageUrl
                    this.uploadNumber=res.userUpdateTotal
                    this.attentionNumber=res.userFollowTotal
                    this.fenNumber=res.userBeFollowTotal
                    this.userName=res.userName
                    if(this.ImageUrl!=null){
                        this.IsShow=false
                    }
                })
            },
            //点击已关注
            AttentionClick(){
                this.current=7
                this.$router.push("/ProfileAttention")
            },

            //点击评论
            pinlunClick() {
                this.current = 4
                this.$router.push("/ProfileCommentMine")
            },
            //点击历史
            lisiClick() {
                this.current = 3
                this.$router.push("/ProfileHistory")
            },
            //点击收藏
            shouchangClick() {
                this.current = 2
                this.$router.push("/ProfileCollectChild")
            },

            //点击上传视频
            UpdateClick() {
                this.$router.push('/ProfileUpVideo')
                // this.$store.commit('updateIsProfileMain', false)
                this.current = 1
            },
            VideoClick(){
                this.$router.push('/ProfileVideo')
                this.current=6
            },
            //点击个人信息
            ProfileClick(){
                this.$router.push("/ProfileMain")
                this.current=5
            },

            addActiveUpdate($event) {
                $event.currentTarget.className = 'endBtn active'
                this.IsImage.IsImage1 = false
            },
            removeActiveUpdate($event) {
                $event.currentTarget.className = 'endBtn'
                this.IsImage.IsImage1 = true
            },
            addActiveShouchang($event) {
                $event.currentTarget.className = 'endBtn1 active'
                this.IsImage.IsImage2 = false
            },
            removeActiveShouchang($event) {
                $event.currentTarget.className = 'endBtn1'
                this.IsImage.IsImage2 = true
            },
            addActiveLishi($event) {
                $event.currentTarget.className = 'endBtn2 active'
                this.IsImage.IsImage3 = false
            },
            removeActiveLishi($event) {
                $event.currentTarget.className = 'endBtn2'
                this.IsImage.IsImage3 = true
            },
            addActivePinglun($event) {
                $event.currentTarget.className = 'endBtn3 active'
                this.IsImage.IsImage4 = false
            },
            removeActivePinglun($event) {
                $event.currentTarget.className = 'endBtn3'
                this.IsImage.IsImage4 = true
            },
            addActiveProfile($event) {
                $event.currentTarget.className = 'endBtn4 active'
                this.IsImage.IsImage5 = false
            },
            removeActiveProfile($event) {
                $event.currentTarget.className = 'endBtn4'
                this.IsImage.IsImage5 = true
            },
            addActiveVideo($event) {
                $event.currentTarget.className = 'endBtn5 active'
                this.IsImage.IsImage6 = false
            },
            removeActiveVideo($event) {
                $event.currentTarget.className = 'endBtn5'
                this.IsImage.IsImage6 = true
            },
            addActiveAttention($event) {
                $event.currentTarget.className = 'endBtn6 active'
                this.IsImage.IsImage7 = false
            },
            removeActiveAttention($event) {
                $event.currentTarget.className = 'endBtn6'
                this.IsImage.IsImage7 = true
            },
        }
    }
</script>

<style scoped>


    .ProfileMain-end img{
        width: 8px;
        height: 8px;
        position: relative;
        top: 2px;
        margin-right: 2px;
    }
    .ProfileMain-end{
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
    }
    .ProfileMain-end-write{
        color: #1989fa;
        font-size: 8px;
        /*鼠标变小手*/
        cursor: pointer;
    }
    .active {
        color: #ff329b;
        background-color: #F5A9E1;
    }


    .endBtnHome {
        margin-top: 30px;
    }

    .personCenter-name {
        font-size: 13px;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ProfileAside {
        margin-left: 50px;
        margin-top: 15px;
        padding: 20px;
        background-color: white;
        border-radius: 2%;
        text-align: center;
        width: 45%;
        height: 612px;
    }

    .personCenter-img {
        width: 100%;
        margin: 0 auto;
    }

    .personCenter-img img {
        /*鼠标变小手*/
        cursor: pointer;
        border-radius: 50%;
        border: 0;
    }
    .personCenter-img1{
        width: 50px;
        height: 50px;
    }

    .endBtn, .endBtn1, .endBtn2, .endBtn3, .endBtn4, .endBtn5,.endBtn6{
        width: 90px;
        height: 20px;
        margin-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 8px;
        /*background-color: #ff329b;*/
        border-radius: 8%;
        /*鼠标变小手*/
        cursor: pointer;

    }

    .endBtn img, .endBtn1 img, .endBtn2 img, .endBtn3 img, .endBtn4 img, .endBtn5 img,.endBtn6 img{
        margin-left: 15px;
        margin-top: 5px;
        width: 12px;
        height: 10px;
    }

    .ProfileAside-center {
        margin-top: 20px;
    }

    .ProfileAside-center-label {
        font-size: 7px;
        font-weight: 300;
        color: #9195A3;
    }

    .ProfileAside-center-data {
        font-size: 14px;
    }

    .ProfileAside-center1 {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .endBtn-text {
        margin-right: 25px;
        margin-top: 5px;
    }

    .endBtn-text1 {
        /*margin-right: 5px;*/
        margin-top: 5px;
        position: relative;
        left: -25px;
    }
</style>