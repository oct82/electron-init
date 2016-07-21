'use strict'

const electron = require('electron')
const {app} = electron

let window

const createWindow = () => {
  // window = new electron.BrowserWindow(electron.screen.getPrimaryDisplay().workAreaSize)
  window = new electron.BrowserWindow({ width: 1200, height: 900 })

  window.loadURL(`file://${__dirname}/index.htm`)
  // window.webContents.openDevTools()

  window.on('closed', () => { window = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', app.quit)

app.on('activate', () => {
  createWindow()
})
