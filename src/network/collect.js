import {request} from "./request";

//通过用户ID查看收藏信息,分页查询
export function SelectCollect(pageNum,pageSize,userId) {
    return request({
        url:'/SelectCollect',
        params:{
            pageNum,
            pageSize,
            userId
        }
    })
}