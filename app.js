const { app, BrowserWindow, webContents } = require('electron')
const DiscordRPC = require("discord-rpc")
const url = require('url');
const version = "0.1"

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenuBarVisibility(false)
    win.setTitle('9anime desktop build v' + version)
    win.loadFile('index.html')

    win.webContents.on('new-window', function (e, url) {
        e.preventDefault();
    });
}

app.whenReady().then(createWindow)


const clientId = '707323113922101268';
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
var today = Date.now();
var todayI = today;
async function setActivity() {
    if (!rpc || !win) {
        return;
    }
    

   /* 
   const stateC = await win.webContents.executeJavaScript(`
    var iframeTitle = document.getElementById("ifrm").contentDocument.title;
    document.title = iframeTitle;
    `);
    */

    //
    // the rpc is still under construction, since i have to somehow use cross origin without having access to the server 
    // as explained here: https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame
    //

    todayI = today;
        rpc.setActivity({
            state: 'Watching anime in build v' + version,
            // details: document.getElementsByClassName('title')[0].textContent,
            startTimestamp: todayI,
            largeImageKey: 'header',
            largeImageText: 'in desktop app',
            smallImageKey: 'play',
            smallImageText: 'playing',
            instance: false,
        });
}

rpc.on('ready', () => {
    setActivity();
    setInterval(() => {
        setActivity();
    }, 15e3);
});

rpc.login({ clientId }).catch(console.error);

