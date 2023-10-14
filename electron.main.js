"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
// Enable live reload if process is started with the --serve argument
var liveReload = process.argv.slice(2).some(function (arg) { return arg === '--serve'; });
function createWindow() {
    var size = electron_1.screen.getPrimaryDisplay().workAreaSize;
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
        webPreferences: {
            nodeIntegration: true,
            allowRunningInsecureContent: liveReload
        }
    });
    if (liveReload) {
        mainWindow.webContents.openDevTools();
        require('electron-reload')(__dirname, { electron: require("".concat(__dirname, "/node_modules/electron")) });
        mainWindow.loadURL('http://localhost:4200');
    }
    else {
        // Load the index.html of the app.
        mainWindow.loadFile('desktop/index.html');
    }
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=electron.main.js.map