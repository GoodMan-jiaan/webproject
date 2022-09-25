<template>
<!--    首页中意见反馈的组件-->
    <div id="HomeMainHead">
        <div class="HomeMainHead-img">
            <img src="../../../assets/mainImage.png">
        </div>
        <div class="HomeMainHead-loginimg">
            <div class="HomeMainHead-loginimg-child">
                <div >
                    <p class="HomeMainHead-loginimg-child-p">感受超出想象的<br>英语世界</p>
                    <p class="HomeMainHead-loginimg-child-ppp">立即提交宝贵意见</p>
                </div>
<!--                表单-->
                <div class="HomeMainHead-loginimg-child-form">
                    <el-form :model="form" label-width="120px">
                        <el-form-item >
                            <el-input v-model="form.phone"
                                      pattern="[0-9]*"
                                      type="tel"
                                      oninput="if(value.length > 11)value = value.slice(0, 11)" size="small" placeholder="手机号码"/>
                        </el-form-item>
                        <el-form-item >
                            <el-input v-model="form.text" size="small" type="textarea" placeholder="建议"/>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" size="small"  @click="onSubmit">提交意见</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {InsertAdvise} from '@/network/advise'
    import { reactive } from 'vue'
    const form = reactive({
        phone: '',
        text:""
    })

    export default {
        name: "HomeMainHead",
        methods:{
            onSubmit(){
                //判断手机号
                if(form.phone!=""&&(/^1[3456789]\d{9}$/.test(form.phone))){
                    if(form.text!=""){
                        InsertAdvise(form.phone,form.text).then(res=>{
                            if(res){
                                form.phone=""
                                form.text=""
                                this.$message.success("建议提交成功！")
                            }else {
                                this.$message.error("建议提交失败！")
                            }
                        })
                    }else {
                        alert("内容不能为空!")
                    }
                }else {
                    alert("请输入正确的手机号!")
                }

            }
        },
        setup(){
            return{form}
        }
    }
</script>

<style scoped>
    .HomeMainHead-loginimg-child-ppp{
        font-size: 9px;
        font-family: Calibri;
        color: white;
    }
    .HomeMainHead-loginimg-child-form{
        padding-top: 20px;
    }

    .HomeMainHead-loginimg-child{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .HomeMainHead-loginimg-child-p{
        font-size: 25px;
        color: white;
        font-weight: 700;
    }

    .HomeMainHead-img {
        width: 100%;
        height: 250px;
        z-index: 1;
    }
    .HomeMainHead-img img{
        object-position:50% 50%;
        object-fit:cover;
        width: 100%;
        display: block;
        max-width: 100%;
        flex-shrink: 0;
    }
    .HomeMainHead-loginimg{
        position: relative;
        top: -40px;
        height: 200px;
        width: 85%;
        background-image: url("https://storyblok-image.ef.com.cn/unsafe/1200x295/filters:focal(4082x1000:4083x1001):quality(100)/f/10/8163x2000/b2745b6e2c/leads-form-bg.jpg");
        margin: 0 auto;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);

    }
</style>