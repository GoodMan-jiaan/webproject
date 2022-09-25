//文件上传功能
import {request} from "./request";

export function UploadFile(file) {
    return request({
        url:'/UploadFile',
        params:{
            file,
        }
    })
}

//更改头像
export function UpdateUserImageUrl(userId,userImageUrl) {
    return request({
        url:"/UpdateUserImageUrl",
        params:{
            userId,
            userImageUrl
        }
    })
}



//视频删除
export function DeleteVideo(fileName) {
    return request({
        url:'/deleteVideo',
        params:{
            fileName,
        }
    })
}

//图片删除
export function DeleteImage(fileName) {
    return request({
        url:"/DeleteImage",
        params:{
            fileName
        }
    })
}

//文件删除
export function DeleteFile(fileName) {
    return request({
        url:"/DeleteFile",
        params:{
            fileName
        }
    })
}

//提交视频集返回信息
export function insertVideoesgather(userId,videoesGatherKind,videoesGatherName,
                                    videoesGatherAuthorName,videoesGatherIntroduce,videoesGatherImage,videoesGatherOrgan) {
    return request({
        url:"/insertVideoesgather",
        params:{
            userId,
            videoesGatherKind,
            videoesGatherName,
            videoesGatherAuthorName,
            videoesGatherIntroduce,
            videoesGatherImage,
            videoesGatherOrgan
        }
    })
}

//提交视频
export function InsertCourse(videoesGatherId,courseVideoesName,courseVideoesResources,
                             courseFileTitle,courseFileResources) {
    return request({
        url:"/InsertCourse",
        params:{
            videoesGatherId,
            courseVideoesName,
            courseVideoesResources,
            courseFileTitle,
            courseFileResources
        }
    })
}
//提交有视频集时提交视频
export function InsertCourseNext(videoesGatherId,courseVideoesName,courseVideoesResources,
                                 courseFileTitle,courseFileResources) {
    return request({
        url:"/InsertCourseNext",
        params:{
            videoesGatherId,
            courseVideoesName,
            courseVideoesResources,
            courseFileTitle,
            courseFileResources
        }
    })
}
//添加没有文件的视频
export function InsertCourseNoFile(videoesGatherId,courseVideoesName,courseVideoesResources,jude) {
    return request({
        url:'/InsertCourseNoFile',
        params:{
            videoesGatherId,
            courseVideoesName,
            courseVideoesResources,
            jude
        }
    })
}



//根据userId,寻找用户上传的视频集
export function selectVideoesByUserId(userId) {
    return request({
        url:"/selectVideoesByUserId",
        params:{
            userId
        }
    })

}

