cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-openapplus-plugin.CordovaOpenApplusPlugin",
      "file": "plugins/cordova-openapplus-plugin/www/CordovaOpenApplusPlugin.js",
      "pluginId": "cordova-openapplus-plugin",
      "clobbers": [
        "cordova.plugins.CordovaOpenApplusPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-openapplus-plugin": "0.0.4"
  };
});