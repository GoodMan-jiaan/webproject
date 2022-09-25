import { createStore } from 'vuex'

export default createStore({
    //全局变量数据
    state:{
        userId:"",//用户Id
        userPhone:"",//用户手机号
        IsUser:false,//判断该用户是否为管理员
        IsProfileMain:true,//个人中心中，登录进去的首页
        page:1,//当前界面
        Resource:[],//界面的视频集资源
        totalPages:0,//总的页数
        recognition:0,//识别功能，用户resource中的上下页点击时的网络请求
        //三个类型的值
        videosType:{
            classType:"",
            organType:"",
            contentType:""
        },
        //视频路径
        videoUrl:"",
        //用于视频管理的视频Id
        videoCourseId:0,
        //视频信息更改时，旁边视频列表刷新使用，在列表组件中监听
        isRefresh:3,
        //管理员用户界面的隐藏窗口
        IsShow:false,
        IsShowAdd:false,
        //管理员视频集管理界面的隐藏窗口
        IsShowVideoGather:false,
        //管理员评论管理界面的隐藏窗口
        IsShowComment:false,
        IsShowCommentAdd:false,
        //管理员视频管理界面的隐藏窗口
        IsShowCourse:false,
        //管理员点赞的添加隐藏窗口
        IsGiveLikeAdd:false,
        //管理员邮件的查看隐藏窗口
        IsEmailSelect:false,
        //管理员Id
        adminsId:"",
    },
    //变更数据操作
    mutations:{

        updateAdminsId(state,adminsId){
            state.adminsId=adminsId;
        },

        updateIsEmailSelect(state,IsEmailSelect){
            state.IsEmailSelect=IsEmailSelect
        },

        updateIsUser(state,IsUser){
          state.IsUser=IsUser
        },
        //更改IsGiveLikeAdd
        updateIsGiveLikeAdd(state,IsGiveLikeAdd){
            state.IsGiveLikeAdd=IsGiveLikeAdd
        },

        //更改IsShowCommentAdd
        updateIsShowCommentAdd(state,IsShowCommentAdd){
            state.IsShowCommentAdd=IsShowCommentAdd
        },

        //更改IsShowAdd
        updateIsShowAdd(state,IsShowAdd){
            state.IsShowAdd=IsShowAdd
        },

        //更改IsShowCourse
        updateIsShowCourse(state,IsShowCourse){
            state.IsShowCourse=IsShowCourse
        },

        //更改IsShowComment
        updateIsShowComment(state,IsShowComment){
            state.IsShowComment=IsShowComment
        },

        //更改IsShowVideoGather
        updateIsShowVideoGather(state,IsShowVideoGather){
            state.IsShowVideoGather=IsShowVideoGather
        },

        //更改IsShow
        updateIsShow(state,IsShow){
            state.IsShow=IsShow
        },

        //更改isRefresh
        updateisRefresh(state,isRefresh){
            state.isRefresh=isRefresh
        },

        //更改视频集的视频Id
        updateVideoCourseId(state,videoCourseId){
            state.videoCourseId=videoCourseId
        },

        //更新视频路径
        updatevideoUrl(state,videoUrl){
            state.videoUrl=videoUrl
        },

        //更新video的值
        updateVideosType(state,[classType,organType,contentType]){
            state.videosType.classType=classType
            state.videosType.organType=organType
            state.videosType.contentType=contentType
        },


        //更新用户信息
        updateUserId(state,userId) {
            state.userId=userId
        },

        //更新用户名称
        updateUserPhone(state,userPhone){
            state.userPhone=userPhone

        },
        //更新个人信息主页的状态
        updateIsProfileMain(state,IsClick){
            state.IsProfileMain=IsClick
        },

        //更新当前页数
        updatePage(state,page){
            state.page=page
        },
        //更新当前界面
        updateResource(state,Resource){
            state.Resource=Resource
        },
        //更新当前界面总数
        updateTotalPages(state,totalPages){
            state.totalPages=totalPages
        },
        updateRecognition(state,recognition){
            state.recognition=recognition;
        }

    },
    actions:{

    }
})
