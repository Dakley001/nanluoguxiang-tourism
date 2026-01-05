App({
  globalData: {
    baseUrl: 'http://127.0.0.1:8000/api'  // 开发时使用本地地址，上线需改为服务器地址
  },
  
  // 封装请求方法
  request(url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.globalData.baseUrl + url,
        method,
        data,
        header: { 'Content-Type': 'application/json' },
        success: res => resolve(res.data),
        fail: err => reject(err)
      })
    })
  }
})
