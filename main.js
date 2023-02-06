const { app, BrowserWindow,ipcMain } = require('electron');
const path = require('path')
const fs = require('fs')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
  });
  win.loadFile('index.html');
  
  win.webContents.openDevTools();
  ipcMain.handle("ping",(event,data)=>{
    console.log(data)
     
    fs.writeFileSync("test2.txt",data)
    return "pong"
})
};



app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

try {
	require('electron-reloader')(module);
} catch {}