<template>
    <div class="webEnd">

        <div class="webEnd-title">
            <div class="webEnd-title-text">lja英语线上学习系统-专注互联网视觉教育</div>
            <div class="webEnd-title-div"></div>
        </div>
        <div class="webEnd-content-first">
            <div class="webEnd-content">
                <div class="webEnd-content-phone">
                    <img class="webEnd-content-phone-img"
                         src="http://img.tianhujy.com/pc/statics/css/newmain/2019New_indexImg/20190418132.png"/>
                    <p class="webEnd-content-phone-text">咨询热线</p>
                    <p class="webEnd-content-phone-bord"></p>
                    <p class="webEnd-content-phone-phone">15625878842</p>
                </div>
                <div class="webEnd-content-address">
                    <img class="webEnd-content-address-img"
                         src="http://img.tianhujy.com/pc/statics/css/newmain/2019New_indexImg/20190418133.png"/>
                    <p class="webEnd-content-address-title">学校地址</p>
                    <p class="webEnd-content-address-bord"></p>
                    <p class="webEnd-content-address-address">广东省东莞市寮步镇文昌路1号东莞城市学院</p>
                </div>
            </div>
            <div class="webEnd-two">
                <div class="webEnd-two-teacher">指导老师：王丽莉</div>
                <div class="webEnd-two-softName">系统负责人：林佳岸</div>
                <div class="webEnd-two-order">系统开发目的：为完成2022年软件工程毕业设计</div>

                <div class="webEnd-two-reference">
                    <div class="webEnd-two-reference-title">系统web布局参考网站：</div>
                    <div class="webEnd-two-reference-main">
                        <div class="webEnd-two-reference-main-one">首页:<a
                                href="https://center.ef.com.cn/cnppc/?utm_source=baidu&utm_medium=cpc&utm_campaign=democlass&utm_offer=democlass&utm_content=pckw_group27_null-310311312-g_f73ff731e4e14fc6bf813d84dff643681&utm_agent=yifu&ptn=cnppc&bd_vid=7711741679987494177">EF英孚教育首页</a>
                        </div>
                        <div class="webEnd-two-reference-main-two">个人界面:<a
                                href="https://www.baidu.com/my/index">百度个人界面</a></div>
                        <div class="webEnd-two-reference-main-three">资源详情页:<a
                                href="https://www.bilibili.com/bangumi/play/ep477124?from_spmid=666.4.0.0">B站视频播放界面</a>
                        </div>
                        <div class="webEnd-two-reference-main-four">资源列表界面:<a
                                href="https://www.zhangmen.com/live">掌门1对1</a></div>
                        <div class="webEnd-two-reference-main-five">网站底部模块:<a
                                href="http://bdpmpc.thjy6.com/list-545-1.html?wm=bdC6_cpxpm_pp&jh=%5BPC-%E5%93%81%E7%89%8C%5D-cpx-%E5%85%A8&dy=%E5%93%81%E7%89%8C-%E5%AD%A6%E4%B9%A0&id=%E5%A4%A9%E7%90%A5%E7%BA%BF%E4%B8%8A%E5%AD%A6%E4%B9%A0?sid=1759053&stag=a8f9d5f9831ee6cf3fc5321e32e8a4fd&renqun_youhua=3046795&bd_vid=7355838786001979226">天琥教育首页</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Introduce">{{this.Introduce}}</div>
    </div>
</template>

<script>
    export default {
        name: "webEnd",
        data(){
            return{
                Introduce:"本本系统利用Spring Boot+MyBati、" +
                    "Vue.js等开发框架进行在线学习平台的开发，后端数据库使用MySQL数据库进行数据操纵，该平台采用B/S模式，" +
                    "基于Web浏览器的实现。平台使用角色分为学生、教师、管理员，本文将对三种角色进行详细需求和功能分析，并且完成不同角色的功能。"
            }
        }
    }
</script>

<style scoped>
    .Introduce{
        text-align: center;
        color: #49484e;
        font-size: 7px;
        width: 60%;
        margin: 10px auto;
    }
    .webEnd-two-teacher {
        margin-bottom: 5px;
    }

    .webEnd-two-softName {
        margin-bottom: 5px;
    }

    .webEnd-two-order {
        margin-bottom: 5px;
    }

    .webEnd-content-first {
        display: flex;
        flex-wrap: nowrap;
        border-bottom: 1px solid #34333b;
        padding-bottom: 40px;
    }

    .webEnd-content-address-address {
        position: relative;
        left: 32px;
        top: -3px;
    }

    .webEnd-content-phone-phone {
        font-size: 16px;
        color: #fc6c00;
        position: relative;
        left: 32px;
        top: -15px;
    }

    .webEnd-content-phone-img {
        width: 20px;
        height: 20px;
    }

    .webEnd-content-address-img {
        width: 20px;
        height: 20px;
    }

    .webEnd-content-phone-text {
        color: #7d7c87;
        font-size: 10px;
        position: relative;
        left: 15px;
        top: -6px;
    }

    .webEnd-content-address-title {
        position: relative;
        left: 15px;
        top: -4px;
    }

    .webEnd-content-phone-bord {
        width: 1px;
        height: 13px;
        background-color: #43424a;
        position: relative;
        left: 23px;
        top: -12px;
    }

    .webEnd-content-address-bord {
        width: 1px;
        height: 13px;
        background-color: #43424a;
        position: relative;
        left: 23px;
        top: -5px;
    }

    .webEnd {
        width: 100%;
        height: 330px;
        background-color: black;
        font-family: "Microsoft YaHei", "宋体";
        font-weight: normal;
    }

    .webEnd-title-div {
        width: 20px;
        height: 3px;
        background-color: #fc6c00;
        margin-top: 20px;
    }

    .webEnd-title-text {
        color: white;
        font-size: 10px;

    }

    .webEnd-title {
        border-bottom: 1px solid #34333b;
        padding-top: 40px;
        padding-left: 30px;
    }

    .webEnd-content-phone {
        display: flex;
        flex-wrap: nowrap;
        margin-left: 30px;
        margin-top: 30px;
        height: 35px;
    }

    .webEnd-content-address {
        display: flex;
        flex-wrap: nowrap;
        margin-left: 30px;
        color: #7d7c87;
        font-size: 9px;
    }

    .webEnd-content {
        width: 50%;
    }

    .webEnd-two {
        width: 50%;
        color: #7d7c87;
        font-size: 9px;
        margin-top: 25px;
        padding-left: 200px;
    }

    .webEnd-two-reference {
        display: flex;
        flex-wrap: nowrap;
    }
</style>