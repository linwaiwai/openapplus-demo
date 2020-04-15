<h1 align="center">Welcome to cordova-openapplus-plugin 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.3-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D8.0.0-blue.svg" />
  <a href="https://www.npmjs.com/package/@openapplus/react-auto-chart" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: GPL--3.0" src="https://img.shields.io/badge/License-GPL--3.0-yellow.svg" />
  </a>
  <a href="https://twitter.com/linwaiwai" target="_blank">
    <img alt="Twitter: linwaiwai" src="https://img.shields.io/twitter/follow/linwaiwai.svg?style=social" />
  </a>
</p>

> auto chart component for online editing, include a auto chart or combination chart to your react app

### 🏠 [Homepage](https://github.com/linwaiwai/openapplus-demo)

## Prerequisites

- node >=8.0.0

## Install

```sh
* cordova create Cordova-Demo
* cordova platform add ios
* cd Cordova-Demo
* cordova plugin add @openapplus/cordova-openapplus-plugin (or cordova plugin add path/to/CordovaOpenApplusPlugin)
```

## Usage

```javascript
function onButtonClicked(){
    var CordovaOpenApplusPlugin = cordova.plugins.CordovaOpenApplusPlugin;
    CordovaOpenApplusPlugin.navigateToMiniProgram("openapplus://jsApp/{jskey}}");
}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        var CordovaOpenApplusPlugin = cordova.plugins.CordovaOpenApplusPlugin;
        CordovaOpenApplusPlugin.start("{appkey}","{appscret}");
        CordovaOpenApplusPlugin.enableLogging(true);

        document.querySelector('button').addEventListener('click', onButtonClicked);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
```

## License

/*
 * GPLv3 License
 *
 * cordova plugin for integerating openapplus
 *
 * Copyright (C) 2020  linwaiwai(jiansihun@foxmail.com)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * Note:
 * 
 * This library is using opensource license GPLv3.
 * 
 * If your want to have it for commerce use, please contract author to be granted. 
 *
 */

## Author

👤 **linwaiwai**

* Website: http://www.openapplus.com
* Twitter: [@linwaiwai](https://twitter.com/linwaiwai)
* Github: [@linwaiwai](https://github.com/linwaiwai)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/linwaiwai/openapplus-demo/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_