import {request} from "./request";

//根据视频集Id进行评论分类查询
export function SelectCommentByVideoID(pageNum,pageSize,videoesGatherId) {
    return request({
        url:'/SelectCommentByVideoID',
        params:{
            pageNum,
            pageSize,
            videoesGatherId
        }
    })
}


//添加评论
export function insertComment(videoesGatherId,userId,commenttext) {
    return request({
        url:'/insertComment',
        params:{
            videoesGatherId,
            userId,
            commenttext
        }
    })

}

//删除评论
export function deleteCommentByID(commentId,videoesGatherId) {
    return request({
        url:'/deleteCommentByID',
        params:{
            commentId,
            videoesGatherId
        }
    })
}

//通过用户Id查看被评论的信息
export function SelectCommentByTwoTable(pageNum,pageSize,userId) {
    return request({
        url:'/SelectCommentByTwoTable',
        params:{
            pageNum,
            pageSize,
            userId
        }
    })
}

//通过用户Id查看用户评论的信息
export function SelectCommentByUserId(pageNum,pageSize,userId) {
    return request({
        url:"/SelectCommentByUserId",
        params:{
            pageNum,
            pageSize,
            userId
        }
    })
}

//更改评论内容
export function updateCommentText(commenttext,commentId) {
    return request({
        url:"/updateCommentText",
        params:{
            commenttext,
            commentId
        }
    })

}