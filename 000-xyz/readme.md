# electron

Electron 是一个框架，可以让您使用 JavaScript, HTML 和 CSS 创建桌面应用程序。

然后这些应用程序可以打包在 macOS、Windows 和 Linux 上直接运行，或者通过 Mac App Store 或微软商店分发。

https://www.cnblogs.com/xgqfrms/p/12904610.html

https://crowdin.com/translate/electron/46/en-zhcn

## 快速上手

https://www.electronjs.org/docs/tutorial/quick-start

```sh

$ yarn add electron

```

> main.js

主脚本指定了您将运行主进程的 Electron 应用程序的入口点(就我们而言， main.js 文件)。
通常，在主进程中运行的脚本控制应用程序的生命周期，并显示图形用户界面及其元素。
执行本机操作系统交互，并在网页中创建渲染程序。
Electron 应用程序只能有一个主进程。

electron@10.1.5

electron-v10.1.5-darwin-x64.zip

```json
  "scripts": {
    "start": "electron .",
    "dev": "electron ./src/index.js",
  },
```

```sh
$ npm start

$ yarn dev

```


## 打包并分发应用程序

https://www.electronforge.io/

## demo

https://electronjs.org/docs/tutorial/first-app



## 手动下载 electron-v10.1.5-darwin-x64.zip ？？？

手动安装

nrm => cnpm

## CSP

> Content-Security-Policy

https://electronjs.org/docs/tutorial/security

```sh

Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security Policy set or a policy with "unsafe-eval" enabled.
This exposes users of this app to unnecessary security risks.

For more information and help, consult
https://electronjs.org/docs/tutorial/security.
This warning will not show up
once the app is packaged.
(anonymous) @ electron/js2c/renderer_init.js:111

```
