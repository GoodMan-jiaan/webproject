import {request} from "./request";

//根据用户昵称查看用户
export function getUserListByUserName(pageNum,pageSize,userName) {
    return request({
        url:'/getUserListByUserName',
        params:{
            pageNum,
            pageSize,
            userName
        }
    })
}

//根据用户Id查看用户是否存在
export function adminsSelectUserById(userId) {
    return request({
        url:'/adminsSelectUserById',
        params:{
            userId
        }
    })
}

//更改用户信息
export function updateUser(userId,userPhone,userPassword,userName,userPracticalName,userAge,userSex,userIdcard) {
    return request({
        url:'/updateUser',
        params:{
            userId,
            userPhone,
            userPassword,
            userName,
            userPracticalName,
            userAge,
            userSex,
            userIdcard
        }
    })
}

//删除用户信息
export function adminsDeleteByUserId(userId) {
    return request({
        url:'/adminsDeleteByUserId',
        params:{
            userId
        }
    })
}

export function updatePasswordById(userId,userPassword) {
    return request({
        url:'/updatePasswordById',
        params:{
            userId,
            userPassword
        }
    })

}