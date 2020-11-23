//index.js
//获取应用实例
const app = getApp()
const api = require("../../utils/req.js")
Page({
  data: {
    a_list:[
      "身份认证",
      "更改资料",
      "意见反馈"
    ],
    isMana:true,
    name:"点击登录",
    imgurl:"../../image/chat3x.png",
    logged:false // 判断是否登录
  },
  onLoad:function(re){
    var that = this
    wx.login({
      // timeout: 0,
      success:res=>{
        api.request({
          url:"/wx_login",
          data:{
            code:res.code
          }
        }).then(res=>{
          console.log(res)
          if(res.data.Code==201||res.data.Code==200){
            // 已经注册或登录了
            app.globalData.userInfo.avatarUrl = res.data.User.Picture
            app.globalData.userInfo.nickName = res.data.User.WXName
            app.globalData.OpenId = res.data.User.OpenId
            app.globalData.User = res.data.User
            that.setData({
              logged:true,
              name:res.data.User.WXName,
              imgurl:res.data.User.Picture
            })

          }
        })
      }
    })
  },
  //事件处理函数
  navi:function(res){
    console.log(res.currentTarget.dataset.item)
    // res.currentTarget.dataset.item
    if(res.currentTarget.dataset.item==0){
      // 身份认证
      wx.navigateTo({
        url: '../renzheng/renzheng',
      })
    }else if(res.currentTarget.dataset.item==1){
      // 更改资料
      wx.showModal({
        showCancel:false,
        content:"还未开发呢"
      })
    }else{
      // 意见反馈
      wx.navigateTo({
        url: '../suggestion/suggestion',
      })
    }
  },
  knowname:function(res){
    var that = this
    // console.log(res)
    // 登录
    if(res.detail.userInfo && !that.data.logged){
      // 成功登录
      app.globalData.userInfo = res.detail.userInfo
      that.setData({
        name:res.detail.userInfo.nickName,
        imgurl:res.detail.userInfo.avatarUrl,
        logged:true
      })
      wx.login({
        success:re=>{
          // console.log(re)
          api.request({
            url:"/wx_login",
            data:{
              code:re.code,
              picture:res.detail.userInfo.avatarUrl,
              name:res.detail.userInfo.nickName
            }
          }).then(result=>{
            // console.log(result)
            app.globalData.OpenId = result.data.User.OpenId
            app.globalData.User = res.data.User
          })
        }
      })
    }
  },
  manager:function(res){
    wx.navigateTo({
      url: '../Manager/Manager',
    })
  }
})