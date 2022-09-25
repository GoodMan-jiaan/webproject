import {request} from "./request";

export function InsertAdvise(phone, content) {
    return request({
        url:'/InsertAdvise',
        params:{
            phone,
            content
        }
    })
}

//根据手机分页查询邮件，just等于0时为未读，1为已读
export function getPageAdviseByPhone(pageNum,pageSize,phone,just) {
    return request({
        url:'/getPageAdviseByPhone',
        params:{
            pageNum,
            pageSize,
            phone,
            just
        }
    })

}

//将建议标记为已读
export function updateIsreadByadminId(adviseId) {
    return request({
        url:'/updateIsreadByadminId',
        params:{
            adviseId
        }
    })

}

//删除该建议
export function deleteAdvise(adviseId) {
    return request({
        url:'/deleteAdvise',
        params:{
            adviseId
        }
    })
}