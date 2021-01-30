const libcheckbtn =document.querySelector('#libcheckbtn')
const jwxt =document.querySelector('#jwxt')
const gspt =document.querySelector('#gspt')
const tree =document.querySelector('#tree')
const privacy =document.querySelector('#privacy')
//渲染进程没法直接调用主进程中的模块，但是我们可以通过 electron中的remote模块间接的调用主进程中的模块
//remote执行主进程与渲染进程之间的IPC
const BrowserWindow =require('electron').remote.BrowserWindow
var newWin = null; 

window.onload=function(){
    libcheckbtn.onclick=function () {
        //调用 BrowserWindow打开新窗口
        newWin = new BrowserWindow({
            width: 500,
            height: 860,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                enableRemoteModule: true,
            },
            useContentSize: true,
            fullscreen:false,
            useContentSize: true,
            frame: false,
            resizable: false
        });
        //新建窗口
        newWin.loadFile('web/libcheck.html');
        newWin.on('close', () => {
            newWin = null;
        });
    }
    jwxt.onclick=function () {
        //调用 BrowserWindow打开新窗口
        newWin = new BrowserWindow({
            width: 1480,
            height: 870,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                enableRemoteModule: true,
            },
            useContentSize: true,
            fullscreen:false,
            useContentSize: true,
            frame: false,
            resizable: false
        });
        //新建窗口
        newWin.loadFile('web/jwxt.html');
        newWin.on('close', () => {
            newWin = null;
        });
    }
    gspt.onclick=function () {
        //调用 BrowserWindow打开新窗口
        newWin = new BrowserWindow({
            width: 1480,
            height: 870,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                enableRemoteModule: true,
            },
            useContentSize: true,
            fullscreen:false,
            useContentSize: true,
            frame: false,
            resizable: false
        });
        //新建窗口
        newWin.loadFile('web/gspt.html');
        newWin.on('close', () => {
            newWin = null;
        });
    }
    tree.onclick=function () {
        //调用 BrowserWindow打开新窗口
        newWin = new BrowserWindow({
            width: 1480,
            height: 870,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                enableRemoteModule: true,
            },
            useContentSize: true,
            fullscreen:false,
            useContentSize: true,
            frame: false,
            resizable: false
        });
        //新建窗口
        newWin.loadFile('tree.html');
        newWin.on('close', () => {
            newWin = null;
        });
    }
    privacy.onclick=function () {
        //调用 BrowserWindow打开新窗口
        newWin = new BrowserWindow({
            width: 500,
            height: 860,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                enableRemoteModule: true,
            },
            useContentSize: true,
            fullscreen:false,
            useContentSize: true,
            frame: false,
            resizable: false
        });
        //新建窗口
        newWin.loadFile('web/privacy.html');
        newWin.on('close', () => {
            newWin = null;
        });
    }
}