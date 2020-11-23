const app = getApp()
Page({
  data: {
    history_list:[
      {
        name:"一号柜-1",
        time:"2020/10/10 18:00",
        ztai:"正在使用"
      },
      {
        name:"一号柜-1",
        time:"2020/10/10 18:00",
        ztai:"正在使用"
      },
      {
        name:"一号柜-1",
        time:"2020/10/10 18:00",
        ztai:"正在使用"
      }
    ],
    guizi:[
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      },
      {
        "class":"list_guizi_list_1",
        "num":1
      },
      {
        "class":"list_guizi_list_0",
        "num":2
      }
    ],
    floor_index: 0,
    floor: ['一楼', '二楼', '三楼'],
    switchChecked:true,

  },
  switchChange:function(res){
    if(this.data.switchChecked){
      console.log("取消")
      this.setData({
      switchChecked:false
      })
    }else{
      console.log("确认")

      this.setData({
        switchChecked:true
        })
    }
  },
  onLoad: function (options) {
    var that = this
    if(app.globalData.userInfo.nickName){
      that.setData({
        name:app.globalData.userInfo.nickName,
        imageUrl:app.globalData.userInfo.avatarUrl,
      })
    }
  },
  getscan:function(e){
    wx.scanCode({
      onlyFromCamera: true,
      scanType:['qrCode'],
      success (res) {
        console.log(res)
      }
    })
  },
  cleaN:function(res){
    var that = this

    console.log(res)
    // res.currentTarget.dataset.item
    wx.showModal({
      title:that.data.floor[that.data.floor_index]+"-"+res.currentTarget.dataset.item+"号柜",
      cancelColor: 'cancelColor',
      showCancel:true,
      cancelText:"否",
      content:"是否清空该柜",
      confirmText:"是"
    })
  }
})