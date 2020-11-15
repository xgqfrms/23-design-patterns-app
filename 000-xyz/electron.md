# Electron

## 应用程序架构

Electron 由三个主要支柱组成:

* Chromium 用于显示网页内容。
* Node.js 用于本地文件系统和操作系统。
* 自定义 APIs 用于使用经常需要的 OS 本机函数。

使用 Electron 开发应用程序就像使用 Web界面构建 Node.js应用程序或通过无缝 Node.js集成构建网页一样。

## 主进程和渲染器进程

如前所述，Electron 有两种类型的进程: Main 和 Renderer。

主进程通过创建 BrowserWindow 实例来创建网页。
每个 BrowserWindow 实例在其 Renderer 进程中运行网页。
销毁 BrowserWindow 实例后，相应的 Renderer 进程也将终止。

Main 进程管理所有网页及其相应的 Renderer 进程。

渲染器进程仅管理相应的网页。
一个 Renderer 进程中的崩溃不会影响其他 Renderer 进程。

Renderer 进程通过 IPC 与 Main 进程进行通信，以在网页中执行 GUI 操作。
由于安全问题和潜在的资源泄漏，直接从 Renderer 进程调用与本机 GUI 相关的 API 受到限制。


可以通过进程间通信（IPC）模块 ipcMain 和 ipcRenderer 在进程之间进行通信。
