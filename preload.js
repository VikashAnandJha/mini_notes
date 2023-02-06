const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  saveText: (text) => {
    console.log(text)
    ipcRenderer.invoke('saveText',text)} 
   ,getText: () => {
    
    return ipcRenderer.invoke('getText')

}  
})