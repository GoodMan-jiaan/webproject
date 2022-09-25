//文件上传功能
import {request} from "./request";

//分页查找视频集
export function pageAll(pageNum,pageSize) {
    return request({
        url:'/pageAll',
        params:{
            pageNum,
            pageSize
        }
    })
}

//分页查找视频集
export function getVideoesgatherByMassage(classType,organType,contentType,pageNum,pageSize) {
    return request({
        url:'/getVideoesgatherByMassage',
        params:{
            classType,
            organType,
            contentType,
            pageNum,
            pageSize
        }
    })
}

//根据用户Id分页查询
export function getVideoGatherByUserId(pageNum,pageSize,userId) {
    return request({
        url:'/getVideoGatherByUserId',
        params:{
            pageNum,
            pageSize,
            userId
        }
    })

}

//通过用户Id与视频集的名称搜索
export function getVideoGatherByUserIdAndTitle(pageNum,pageSize,userId,title) {
    return request({
        url:'/getVideoGatherByUserIdAndTitle',
        params:{
            pageNum,
            pageSize,
            userId,
            title
        }
    })

}

//通过视频集Id删除视频集
export function deleteVideoGatherById(videoesGatherId) {
    return request({
        url:'/deleteVideoGatherById',
        params:{
            videoesGatherId
        }
    })

}