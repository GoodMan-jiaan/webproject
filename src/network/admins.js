import {request} from "./request";

export function loginAdmins(adminAccount, adminPassword) {
    return request({
        url:'/loginAdmins',
        params:{
            adminAccount,
            adminPassword
        }
    })
}
//管理视频界面模糊查询
export function getPageCourseByName(pageNum, pageSize, courseVideoesName) {
    return request({
        url:'/getPageCourseByName',
        params:{
            pageNum,
            pageSize,
            courseVideoesName
        }
    })
}
//根据管理员Id更改密码
export function updateAdminsPasswordById(adminsId,adminPassword) {
    return request({
        url:"/updateAdminsPasswordById",
        params:{
            adminsId,
            adminPassword
        }
    })
}


export function SelectAdminsByAdmins(adminsId) {
    return request({
        url:'/SelectAdminsByAdmins',
        params:{
            adminsId
        }
    })

}

//根据管理员Id更改管理员信息
export function updateAdminsById(adminsId,adminsPhone,adminsName,adminAccount) {
    return request({
        url:'/updateAdminsById',
        params:{
            adminsId,
            adminsPhone,
            adminsName,
            adminAccount
        }
    })
}


//管理视频集界面模糊查询
export function getVideoGatherByName(pageNum, pageSize, videoesGatherName) {
    return request({
        url:'/getVideoGatherByName',
        params:{
            pageNum,
            pageSize,
            videoesGatherName
        }
    })
}


//在管理界面更改视频信息
export function updateAdminsCourse(courseId,courseVideoesName,videoesNumber,courseFileTitle) {
    return request({
        url:'/updateAdminsCourse',
        params:{
            courseId,
            courseVideoesName,
            videoesNumber,
            courseFileTitle
        }
    })
}


//分页查询用户数
export function findUserByPage(pageNum,pageSize) {
    return request({
        url:"/findUserByPage",
        params:{
            pageNum,
            pageSize
        }
    })
}

//分页查询视频集信息
export function pageAll(pageNum,pageSize) {
    return request({
        url:'/pageAll',
        params:{
            pageNum,
            pageSize
        }
    })
}

//分页查询收藏信息
export function getPageCollect(pageNum,pageSize){
    return request({
        url:'/getPageCollect',
        params:{
            pageNum,
            pageSize
        }
    })
}

//分页查询点赞信息
export function getPageGiveLike(pageNum,pageSize){
    return request({
        url:'/getPageGiveLike',
        params:{
            pageNum,
            pageSize
        }
    })
}


//分页查询关注信息
export function getPageAttention(pageNum,pageSize){
    return request({
        url:'/getPageAttention',
        params:{
            pageNum,
            pageSize
        }
    })
}

//分页查询评论信息
export function getPageComment(pageNum,pageSize){
    return request({
        url:'/getPageComment',
        params:{
            pageNum,
            pageSize
        }
    })
}

//分页查询视频信息
export function getPageCourse(pageNum,pageSize){
    return request({
        url:'/getPageCourse',
        params:{
            pageNum,
            pageSize
        }
    })
}

//分页查询历史记录
export function getPageHistoric(pageNum,pageSize) {
    return request({
        url:'/getPageHistoric',
        params:{
            pageNum,
            pageSize
        }
    })
}


//分页查询建议信息
export function getPageAdvise(pageNum,pageSize,just) {
    return request({
        url:'/getPageAdvise',
        params:{
            pageNum,
            pageSize,
            just
        }
    })
}