const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1920, height: 1080});
    const webWindow = mainWindow.webContents;

    const menu = new electron.Menu();
    menu.append(new electron.MenuItem(
        {
            label: 'Toggle Fullscreen',
            click() {
                mainWindow.setFullScreen(!mainWindow.isFullScreen());
            },
        }));

    menu.append(new electron.MenuItem(
        {
            label: 'Show Results',
            click() {
                webWindow.send('show-results');
            },
        }));

    menu.append(new electron.MenuItem(
        {
            label: 'Reset Totals',
            click() {
                webWindow.send('reset-totals');
            },
        }));

    menu.append(new electron.MenuItem(
        {
            label: 'Load Sample Results',
            click() {
                webWindow.send('load-sample');
            },
        }));

    webWindow.on('context-menu', () => {
        menu.popup(mainWindow);
    });

    // Prod
    // mainWindow.loadURL(url.format({
    //   pathname: path.join(__dirname, 'index.html'),
    //   protocol: 'file:',
    //   slashes: true
    // }));

    // Dev
    mainWindow.loadURL('http://localhost:3000');
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
