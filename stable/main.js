var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow // 窗口引用

var mainWindow = null //声明要打开的主窗口

app.on('ready',()=>{
    //客户端多开报错
    const gotTheLock = app.requestSingleInstanceLock()
    if (!gotTheLock) {
        app.quit()
        electron.dialog.showErrorBox('启动失败','请检查是否已经打开了一个客户端！(code:020)');
      }
      //打开主窗体
    mainWindow = new BrowserWindow({
        width:500,
        height:870,
        webPreferences:{
            webSecurity: false,
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        useContentSize: true,
        fullscreen:false,
        useContentSize: true,
        frame: false,
        resizable: false,
        transparent: true,
    })
    mainWindow.loadFile('internet_check.html') //打开入口文件
    mainWindow.on('closed',()=>{
        mainWindow = null //监听关闭操作，防止内存爆炸
    })
    //开发者工具
    //mainWindow.webContents.openDevTools({mode:'detach'}); //默认关闭开发者工具
    
})

