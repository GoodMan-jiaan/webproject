import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
// import {ElMessage} from "element-plus";
import 'element-plus/dist/index.css'
import router from "./router";
import store from "./store";
//转化为时间戳
import moment from 'moment'

import 'video.js/dist/video-js.css'

const app=createApp(App);

app.use(ElementPlus)
app.use(router).use(store)
app.mount("#app")


