EN

# Electron framework to achieve rounded rectangular border method

> Tips. Because this article is limited to discussing my approach to implementing the rounded rectangle border of the Electron framework, it does not include a tutorial or a general introduction to the Electron framework, so this article is generally on the boring side. If you don't know the Electron framework, you can ignore this article.

## I. Why did I think I would optimize the border style?

Since I recently installed the latest leaked version of Windows 11 on my Surface Go, the overall animation is smoother and more consistent, and the overall interface design and style is more modern and youthful with the addition of the rounded rectangle border design language that is seen everywhere.

In the current Electron framework, there is no official option for rounded rectangular borders, and when running the borderless Electron program on the latest Windows 10 (20H2) system (`frame: false`), it still has the default large right angle and no projection. It looks flat, not three-dimensional, and very hard to see.

## II. My solution ideas

The way I currently implement the same functionality is to set the program to be transparent at the bottom (`transparent: true`) when the Electron program is borderless (`frame: false`), so that the outer body of the program exists but is transparent and invisible, and then use CSS + HTML techniques, and then create a `<div>` inside the `<Body>` to achieve the same effect as the `<Body>`.

A similar effect can be achieved by assigning a background-color property (`background-color`) and a rounded-corner property (`border-radius`) to `<div>` in css.

![pic](https://tzih.top/wp-content/uploads/2021/06/%E6%BC%94%E7%A4%BA%E6%96%87%E7%A8%BF1-1024x576.jpg)

## III. The code used to implement

First, create `index.html` :
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="css/common.css">
    </head>
    <body>
        <div class="bgclor">
            ......
        </div>
    </body>
</html>
```
Then, go to the ``common.css`` that is associated with ``index.html``.

```css
.bgclor{
    margin-top: 0;
    margin-left: 0;
    width: 500px;
    height: 860px;
    background-color: #EFEFEF;
    border-radius: 10px;
}
```

Then in the ``main.js`` section of ``mainWindow = new BrowserWindow({ })``, which Electron uses for the entry, specify the property

```javascript
mainWindow = new BrowserWindow({
    ......
    frame: false,
    transparent: true
})
```

## IV. Known issues

Because the program is a <DIV> to achieve the rounded border effect, and the underlying box of the program is transparent and real, so in Windows 11 (Dev) system, the border will be forced to round the corners, so there will be interface display problems. This problem can be circumvented by loading a different interface layout file by determining the version number of the system.

## V. Open source

This interface optimization change was included in the last code change to my IveTian/lzhit-desktop repository, which is open sourced on GitHub. (Check the commit history for details)

-----



中文/CN

# Electron 框架下实现圆角矩形边框的方法

> Tips. 因为此篇文章仅限于讨论我实现 Electron 框架圆角矩形边框的方法，并不包括 Electron 框架的入门教程、科普等内容，因此此篇文章总体偏于枯燥。若不知晓 Electron 框架，可以忽略此篇文章。

## 一、为什么会想到会优化边框？

​		因为最近给我的 Surface Go 装上了最新泄露版的 Windows 11 系统，系统整体的动画更加流畅、连贯，整体界面设计及风格也因加入了随处可见的圆角矩形边框的设计语言而显得更加现代化、年轻化。

​		在目前的 Electron 框架中，官方并未提供圆角矩形边框的选项，并且在目前最新的 Windows 10 (20H2) 系统上运行无边框 Electron 程序时(`frame: false`)，仍然是默认的大直角，并且也没有投影，显得很平面，没有立体感，非常难看。

## 二、我的解决思路

​		我目前实现同类功能的办法是在 Electron 程序为无边框属性时(`frame: false`)，将程序设置为底部透明(`transparent: true`)，此时虽然程序的外框体存在，但是透明、不可见的，然后通过 CSS + HTML 技术，再在 `<Body>` 内部创建一个 `<div>`  用于实现与 `<Body>`同等的效果。

​		在 css 里给 `<div>` 指定一个背景色属性 (`background-color`) 和圆角属性 (`border-radius`) ，就可以实现类似的效果。

​		为了能够更直观、准确地表达出我所想表达的意思、弥补我语言表达上的不足，我将我的解决思路与层级概念制作了一张图片。

![演示文稿1](https://tzih.top/wp-content/uploads/2021/06/%E6%BC%94%E7%A4%BA%E6%96%87%E7%A8%BF1-1024x576.jpg)

## 三、用于实现的代码

首先，创建 `index.html` ：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="css/common.css">
    </head>
    <body>
        <div class="bgclor">
            ......
        </div>
    </body>
</html>
```

然后，进入 ```index.html``` 关联的 ```common.css``` ：

```css
.bgclor{
    margin-top: 0;
    margin-left: 0;
    width: 500px;
    height: 860px;
    background-color: #EFEFEF;
    border-radius: 10px;
}
```

再在 Electron 用于入口的 ```main.js``` 中的 ```mainWindow = new BrowserWindow({ })``` 部分中，指定属性：

```javascript
mainWindow = new BrowserWindow({
    ......
    frame: false,
    transparent: true
})
```

## 四、已知的问题

​		因为程序是通过 DIV 来实现的圆角边框效果，并且程序底层框体为透明、真实存在的，因此在 Windows 11(Dev) 系统下，由于边框会被强制圆角，所以会出现界面的显示问题。目前可通过判断系统的版本号来加载不同的界面布局文件以规避此问题。

## 五、开源

我在 GitHub 平台上开源的 IveTian/lzhit-desktop 仓库的最近一次代码更已包含此界面优化更改。(详细可查询 commit history)

