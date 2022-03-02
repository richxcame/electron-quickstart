const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  let win = new BrowserWindow();
  win.maximize();
  win.loadURL("https://github.com");
};

app.on("ready", () => {
  createWindow();
})
