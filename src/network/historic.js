import {request} from "./request";

//添加历史记录，成功返回true
export function InsertHistoric(userId,videoesGatherId) {
    return request({
        url:'/InsertHistoric',
        params:{
            userId,
            videoesGatherId
        }
    })
}

//根据用户Id与视频集Id删除信息
export function DeleteHistoric(userId,videoesGatherId) {
    return request({
        url:'/DeleteHistoric',
        params:{
            userId,
            videoesGatherId
        }
    })
}

//根据用户Id进行分页逆序查询
export function SelectHistoricByUserId(pageNum,pageSize,userId) {
    return request({
        url:'/SelectHistoricByUserId',
        params:{
            pageNum,
            pageSize,
            userId
        }
    })
}