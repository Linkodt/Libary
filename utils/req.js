module.exports={
  request:request
}
function request(rquestParams) {
  let app = getApp();
  if (!rquestParams.url) return;
  let header;
  if (!rquestParams.header){
    //没有传header就默认下面这个
    header={
      'content-type':'application/x-www-form-urlencoded'
    }
  }else{
    header = rquestParams.header;
  }
  // let cookie = app.globalData.cookie;
  let method = rquestParams.method || "POST";
  let data = rquestParams.data;
  let url = app.globalData.url + rquestParams.url;
  return new Promise(function (resolve,reject) {
      wx.request({
          url: url,
          method: method,
          data: data,
          header: header,
          success: (res) => {
              resolve(res);
          },
          fail:(res)=>{
            reject(res)
          }
      })
  })
}