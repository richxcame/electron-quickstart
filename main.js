const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
	let win = new BrowserWindow({
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});
	win.maximize();
	win.loadFile('./index.html');
};

app.whenReady().then(() => {
	createWindow();
});
