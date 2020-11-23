// pages/suggestion/suggestion.js
Page({
  data: {
    sug:""
  },
  sugPut:function(res){
    // console.log(res)
    this.setData({
      sug:res.detail.value
    })
  },
  sugIn:function(res){
    // console.log("hello")
    console.log(this.data.sug)
  }
})