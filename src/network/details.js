
import {request} from "./request";

//根据视频集Id获取视频逆序
export function getCourseByVideoesGatherId(videoesGatherId) {
    return request({
        url:'/getCourse',
        params:{
            videoesGatherId
        }
    })
}

//通过视频Id查看视频信息
export function SelectCourseById(courseId) {
    return request({
        url:'/SelectCourseById',
        params:{
            courseId
        }
    })

}
//通过Id删除信息
export function deleteByCourseId(courseId) {
    return request({
        url:'/deleteByCourseId',
        params:{
            courseId
        }
    })
}


//通过视频Id查看文件信息
export function updateCourseFile(courseFileTitle,courseFileResources,courseId) {
    return request({
        url:'/updateCourseFile',
        params:{
            courseFileTitle,
            courseFileResources,
            courseId
        }
    })
}

//通过视频Id更改文件信息
export function updateCourseFile1(courseFileResources,courseId) {
    return request({
        url:'/updateCourseFile1',
        params:{
            courseFileResources,
            courseId
        }
    })
}



//通过视频Id更新视频路径
export function UpdateCourseImageUrl(courseId,courseVideoesResources) {
    return request({
        url:'/UpdateCourseImageUrl',
        params:{
            courseId,
            courseVideoesResources
        }
    })
}
//通过视频Id更新视频标题
export function updateCourseTitle(courseId,courseVideoesName,videoesNumber) {
    return request({
        url:'/updateCourseTitle',
        params:{
            courseId,
            courseVideoesName,
            videoesNumber
        }
    })
}



//根据视频集Id获取视频正序
export function getCourseByVideoesGatherId2(videoesGatherId) {
    return request({
        url:'/getCourse2',
        params:{
            videoesGatherId
        }
    })
}
//更改视频集信息
export function updateVideoGatherMassage(videoesGatherId,videoesGatherName,videoesGatherAuthorName,
                                         videoesGatherIntroduce,videoesGatherOrgan,videoesGatherKind) {
    return request({
        url:'/updateVideoGatherMassage',
        params:{
            videoesGatherId,
            videoesGatherName,
            videoesGatherAuthorName,
            videoesGatherIntroduce,
            videoesGatherOrgan,
            videoesGatherKind
        }
    })

}



//更改视频集图片信息
export function updateVideoesGatherImage(videoesGatherId,videoesGatherImage) {
    return request({
        url:'/updateVideoesGatherImage',
        params:{
            videoesGatherId,
            videoesGatherImage
        }
    })
}


//根据视频视频集Id查找查找视频集主要信息
export function selectVideoesgatherById(videoesGatherId) {
    return request({
        url:'/selectVideoesgatherById',
        params:{
            videoesGatherId
        }
    })
}

//根据视频视频集Id查找视频集是否 存在
export function adminsSelectVideogatherById(videoesGatherId) {
    return request({
        url:'/adminsSelectVideogatherById',
        params:{
            videoesGatherId
        }
    })
}


export function getFileByVideoGatherId(videoesGatherId) {
    return request({
        url:"/getFileByVideoGatherId",
        params:{
            videoesGatherId
        }
    })
}


//根据用户Id查找用户信息
export function SelectUserById(userId) {
    return request({
        url:'/SelectUserById',
        params:{
            userId
        }
    })
}

//根据用户ID与视频集ID查找点赞表，查看用户是否有点赞视频集,当存在点赞是返回true
export function SelectGivelikeByUserId(userId,videoesGatherId) {
    return request({
        url:'/SelectGivelikeByUserId',
        params:{
            userId,
            videoesGatherId
        }
    })
}

//删除或添加点赞表，judge为标识，1为添加，0为删除
export function AddOrDelectGivelike(userId,videoesGatherId,judge) {
    return request({
        url:'/AddOrDelectGivelike',
        params:{
            userId,
            videoesGatherId,
            judge
        }
    })
}

//根据用户ID与视频集ID查找收藏表，查看用户是否有搜藏视频集,当存在收藏是返回true
export function SelectCollectByUserId(userId,videoesGatherId) {
    return request({
        url:'/SelectCollectByUserId',
        params:{
            userId,
            videoesGatherId
        }
    })
}

//删除或添加收藏表，judge为标识，1为添加，0为删除
export function AddOrDelectCollect(userId,videoesGatherId,judge) {
    return request({
        url:'/AddOrDelectCollect',
        params:{
            userId,
            videoesGatherId,
            judge
        }
    })
}

//根据用户ID与被关注用户ID查找点赞表，查看用户是否已经关注,当存在关注是返回true
export function SelectAttentionByUserId(followUser,beFollowUser) {
    return request({
        url:'/SelectAttentionByUserId',
        params:{
            followUser,
            beFollowUser
        }
    })
}

//删除或添加关注表，judge为标识，1为添加，0为删除
export function AddOrDelectAttention(followUser,beFollowUser,judge) {
    return request({
        url:'/AddOrDelectAttention',
        params:{
            followUser,
            beFollowUser,
            judge
        }
    })
}