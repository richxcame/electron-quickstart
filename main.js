const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	let win = new BrowserWindow();
	win.maximize();
	win.loadFile('./index.html');
};

app.whenReady().then(() => {
	createWindow();
});
