import {request} from "./request";

//通过用户ID查看收藏信息,分页查询
export function SelectGiveLikeById(pageNum,pageSize,userId) {
    return request({
        url:'/SelectGiveLikeById',
        params:{
            pageNum,
            pageSize,
            userId
        }
    })
}