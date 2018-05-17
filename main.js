const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        backgroundColor: '#ffffff'
    });

    //win.loadURL(`file://${__dirname}/dist/warframe-relic-eval/index.html`);

    win.loadURL(`http://localhost:4200`);

    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
  
app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
});