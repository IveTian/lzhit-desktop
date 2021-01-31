const {shell} = require('electron');
const libcheckbtn =document.querySelector('#libcheckbtn') //图书馆馆藏查询
const jwxt =document.querySelector('#jwxt') //教务系统
const gspt =document.querySelector('#gspt') //学生工作平台
const tree =document.querySelector('#tree') //树洞社区
const e_rec =document.querySelector('#e_rec') //电子资源查询
const cjcx =document.querySelector('#cjcx') //成绩快速查询
const privacy =document.querySelector('#privacy') //隐私协议
//渲染进程没法直接调用主进程中的模块，但是我们可以通过 electron中的remote模块间接的调用主进程中的模块
//remote执行主进程与渲染进程之间的IPC
const BrowserWindow =require('electron').remote.BrowserWindow
var newWin = null; 

//图书馆馆藏查询
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
    //信息更新banner
    info.onclick=function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        shell.openExternal(href)
    }
    //教务系统
    jwxt.onclick=function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        shell.openExternal(href)
    }
    //学生工作平台
    gspt.onclick=function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        shell.openExternal(href)
    }
    //成绩快速查询
    cjcx.onclick=function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        shell.openExternal(href)
    }
    //数字资源查询
    e_rec.onclick=function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        shell.openExternal(href)
    }
    //树洞社区
    tree.onclick=function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        shell.openExternal(href)
    }
    //隐私协议
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