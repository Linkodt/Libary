// pages/renzheng/renzheng.js
Page({
  data: {
    zhao:"",
    mima:""
  },
  formInput_zhao:function(res){
    // var that = this
    this.setData({
      zhao:res.detail.value
    })
  },
  formInput_mima:function(res){
    // var that = this
    this.setData({
      mima:res.detail.value
    })
  },
  getIn:function(res){
    var that = this
    if(that.data.mima==""||that.data.zhao == ""){
      wx.showModal({
        showCancel:false,
        content:"账号或密码不能为空"
      })
    }else{
      console.log(that.data.zhao)
      
      console.log(that.data.mima)
    }
  }
})