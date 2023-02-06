const { app, BrowserWindow,ipcMain } = require('electron');
const path = require('path')
const fs = require('fs')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 550,webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      }, autoHideMenuBar: true,
      icon: "img/mini_logo.png"
  });
  win.setAlwaysOnTop(true, 'screen');

  win.loadFile('index.html');


  if(!fs.existsSync("mini_data.txt"))
  {
    let defaulttext=`
    Hi 👋,
    Thanks For choosing mini
    Its a simple and lightweight note taking app
    Made for you.
    You dont need to save the text
    mini does this automatically for you!

    Start Writing 🤗
    
    
    `
    
    fs.writeFileSync("mini_data.txt",defaulttext)
  }
  
 //win.webContents.openDevTools();
 ipcMain.handle("saveText",(event,data)=>{
    console.log(data)
     
    fs.writeFileSync("mini_data.txt",data)
    
}) 

ipcMain.handle("getText",(event,data)=>{
     
      var text=fs.readFileSync("mini_data.txt","utf-8");
      console.log(text)
   return text;
    
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
	require('electron-reloader')(module,{ignore:["mini_data.txt"]});
} catch {}