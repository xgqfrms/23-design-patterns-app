"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-01
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

const path = require('path');
// path.dirname(file_path);

// log(`__dirname`, __dirname);
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // win.loadFile('index.html');
  // win.loadFile(__dirname + '/index.html');
  // relative path 拼接 ✅
  // win.loadFile(__dirname.replace(`src`, ``) + '/public/index.html');
  let directories = path.dirname('index.js');
  log(`directories =`, directories);
  // directories = ., . 即指项目的 root path ✅
  // win.loadFile(directories.replace(`src`, ``) + '/public/index.html');
  // . === 项目的 root path ✅
  win.loadFile('./public/index.html');
  // 打开 debug 模式
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
