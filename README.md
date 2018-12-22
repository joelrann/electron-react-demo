# Electron React Demo

This is a basic kiosk app to demonstrate running React inside of Electron. The target display is 1920x1080 in portrait orientation.


### Create
The following article provided guidance for using create-react-app to start the project with minimal configuration.
https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c

* run `create-react-app` to generate a basic React application

* run `npm install --save-dev electron`

* add main.js from electron-quick-start (we’ll rename it to electron-starter.js, for clarity)

* modify call to mainWindow.loadURL (in electron-starter.js) to use localhost:3000 (webpack-dev-server)

* add a main entry to package.json for electron-starter.js

* add a run target to start Electron to package.json

* `npm start` followed by `npm run electron`


### Development
As noted in the article above, Electron can be pointed at the npm server during development to eliminate building and launching the app after every update.

First the main.js should be edited to uncomment the dev version of mainWindow.loadURL.

Then run the following commands to start the node server and launch Electron.

`npm run startbin`

`npm run electron`


### Build
To build the application run the following command then copy the package.json and main.js files ot the build folder. Remember to change the main.js back to prod as mentioned above. 

`npm run build`

The build folder will need to be copied into the Electron app as described here:
https://electronjs.org/docs/tutorial/application-distribution

This app was based on Electron version 1.8.4 which can be downloaded here:
https://github.com/electron/electron/releases/tag/v1.8.4

### Pack ASAR
The build folder can be packed into a single ASAR file for simplicity and to prevent viewing the source.

`npm run packasar`


Read more about ASAR here: https://github.com/electron/asar


### Content
Questions were sourced from the following site:
http://quipoquiz.com/quiz/science-or-fiction/ This app is only intended for demonstrating the functionality of React and Electron with no intention of taking credit for or replacing this site. Any use of this app besides technical demonstration should remove this content. 
