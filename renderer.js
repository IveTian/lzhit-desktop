const myNotification = new Notification('欢迎使用LZHIT助手！', {
    body: '正在检查您的网络状况，请耐心等待。'
  })
  
  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
  