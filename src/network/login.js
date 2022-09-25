import {request} from "./request";


//请求发送验证码
export function send(phone) {
    return request({
        url:'/send',
        params:{
            phone
        }
    })
}

//更改用户密码
export function updatePassword(userPassword,userPhone) {
    return request({
        url:'/updatePassword',
        params:{
            userPassword,
            userPhone
        }
    })

}

//登录功能
export function login(userPhone,userPassword) {
    return request({
        url:'/loginBack',
        params:{
            userPhone,
            userPassword
        }
    })
}

//注册功能
export function zuce(userPhone,userPassword) {
    return request({
        url:'/insertUser',
        params:{
            userPhone,
            userPassword
        }
    })
}



//注册功能，查找用户是否存在
export function selectByuserPhone(userPhone) {
    return request({
        url:'/selectByuserPhone',
        params:{
            userPhone
        }
    })
}

//更新用户信息
export function updateMoreUserMassage(userId,userName,userAge,userSex,userIdcard,userPracticalName) {
    return request({
        url:'/updateMoreUserMassage',
        params:{
            userId,
            userName,
            userAge,
            userSex,
            userIdcard,
            userPracticalName
        }
    })
}