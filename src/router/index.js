

import { createRouter, createWebHistory } from 'vue-router'

import home from "@/views/home/home";
import login from "@/views/Login/login";
import profile from "@/views/profile/profile";
import ProfileUpVideo from "@/views/profile/childprofile/ProfileUpVideo"
import resource from "@/views/resource/resource"
import details from "@/views/details/details"
import ProfileMain from "@/views/profile/childprofile/ProfileMain"
import ProfileCollect from "@/views/profile/childprofile/ProfileCollect"
import ProfileComment from "@/views/profile/childprofile/ProfileComment"
import ProfileCommentMine from "@/views/profile/childprofile/ProfileCommentMine"
import ProfileCommentMassage from "@/views/profile/childprofile/ProfileCommentMassage"
import ProfileCollectChild from "@/views/profile/childprofile/ProfileCollectChild"
import ProfileCollectAttention from "@/views/profile/childprofile/ProfileCollectAttention"
import ProfileHistory from "@/views/profile/childprofile/ProfileHistory"
import ProfileVideo from "@/views/profile/childprofile/ProfileVideo"
import ProfileAttention from "@/views/profile/childprofile/ProfileAttention"
import videoManage from "@/views/videoManage/videoManage"
import admins from "@/views/admins/admins"
import AdminsUserManage from "@/views/admins/childadmins/AdminsUserManage"
import AdminsVideoManage from "@/views/admins/childadmins/AdminsVideoManage"
import AdminsComment from "@/views/admins/childadmins/AdminsComment"
import AdminsGiveLike from "@/views/admins/childadmins/AdminsGiveLike"
import AdminsCollect from "@/views/admins/childadmins/AdminsCollect"
import AdminsAttention from "@/views/admins/childadmins/AdminsAttention"
import AdminsCourse from "@/views/admins/childadmins/AdminsCourse"
import AdminsHistory from "@/views/admins/childadmins/AdminsHistory"
import AdminsVideoManageAdd from "@/views/admins/childadmins/AdminsVideoManageAdd"
import AdminsEmail from "@/views/admins/childadmins/AdminsEmail"
import AdminsNavbarUpdatePassword from "@/views/admins/childadmins/AdminsNavbarUpdatePassword"
import AdminsNavbarProfile from "@/views/admins/childadmins/AdminsNavbarProfile"
import profileCenter from "@/views/profileCenter/profileCenter"

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },

    {
        path: '/login',
        name: 'login',
        component: login
    },
    {//个人界面的路由
        path: '/profile',
        name: 'profile',
        component: profile,
        children:[
            {//文件上传路由
            path: '/ProfileUpVideo',
            component: ProfileUpVideo
        },{//个人信息路由
            path: '/ProfileMain',
            component: ProfileMain

        },{//收藏路由
            path: '/ProfileCollect',
            component: ProfileCollect,
            children: [{
                    path: '/ProfileCollectChild',
                    component: ProfileCollectChild
                },{
                    path: '/ProfileCollectAttention',
                    component: ProfileCollectAttention
                }]
        },{
            path: '/ProfileComment',
            component: ProfileComment,
            children:[{
                path:'/ProfileCommentMine',
                component:ProfileCommentMine
            },{
                path: '/ProfileCommentMassage',
                component: ProfileCommentMassage
            }]
        },{
            path: '/ProfileHistory',
            component: ProfileHistory
        },{
            path: '/ProfileVideo',
            component: ProfileVideo
        },{
            path: '/ProfileAttention',
                component: ProfileAttention
            }
        ]
    },
    {
        path: '/resource',
        name: 'resource',
        component: resource
    },
    {
        path: "/details/:videoesGatherId",
        name: 'details',
        component: details
    },
    {
        path: "/videoManage/:videoesGatherId",
        name: 'videoManage',
        component: videoManage
    },
    {
        path: "/admins",
        name: 'admins',
        component: admins,
        children: [
            {
                path: "/AdminsUserManage",
                component: AdminsUserManage
            },
            {
                path: "/AdminsVideoManage",
                component: AdminsVideoManage
            },
            {
                path: "/AdminsComment",
                component: AdminsComment
            },
            {
                path: "/AdminsGiveLike",
                component: AdminsGiveLike
            },
            {
                path: "/AdminsCollect",
                component: AdminsCollect
            },
            {
                path: "/AdminsAttention",
                component: AdminsAttention
            },
            {
                path: "/AdminsCourse",
                component: AdminsCourse
            },
            {
                path: "/AdminsHistory",
                component: AdminsHistory
            },
            {
                path: "/AdminsEmail",
                component: AdminsEmail
            },
            {
                path: "/AdminsNavbarUpdatePassword",
                component: AdminsNavbarUpdatePassword
            },
            {
                path: "/AdminsNavbarProfile",
                component: AdminsNavbarProfile
            }
        ]
    },
    {
        path: "/AdminsVideoManageAdd",
        name: 'AdminsVideoManageAdd',
        component: AdminsVideoManageAdd
    },
    {
        path: "/profileCenter/:userId",
        name: "profileCenter",
        component: profileCenter
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router