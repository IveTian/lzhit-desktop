const myNotification = new Notification('欢迎使用LZHIT助手！', {
    body: '不知道为什么，就是想写个通知。'
  })
  
  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
  