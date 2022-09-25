import {request} from "./request";

//根据用户ID与被关注用户ID查找点赞表，查看用户是否已经关注,当存在关注是返回true
export function SelectAttentionByUserId(followUser, beFollowUser) {
    return request({
        url:'/SelectAttentionByUserId',
        params:{
            followUser,
            beFollowUser
        }
    })
}

//删除或添加关注表，judge为标识，1为添加，0为删除
export function AddOrDelectAttention(followUser, beFollowUser,judge) {
    return request({
        url:'/AddOrDelectAttention',
        params:{
            followUser,
            beFollowUser,
            judge
        }
    })
}

export function getPageAttentionById(pageNum,pageSize,userId) {
    return request({
        url:'/getPageAttentionById',
        params:{
            pageNum,
            pageSize,
            userId
        }
    })
}
