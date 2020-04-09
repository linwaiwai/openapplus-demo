cordova.define("cordova-openapplus-plugin.CordovaOpenApplusPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.start = function (key, secret, success, error) {
    exec(success, error, 'CordovaOpenApplusPlugin', 'start', [key, secret]);
};


exports.sync = function (key, secret, success, error) {
    exec(success, error, 'CordovaOpenApplusPlugin', 'sync', []);
};


exports.enableLogging = function (enable, success, error) {
    exec(success, error, 'CordovaOpenApplusPlugin', 'enableLogging', [enable ? "1":"0"]);
};


exports.navigateToMiniProgram = function (link, success, error) {
    exec(success, error, 'CordovaOpenApplusPlugin', 'navigateToMiniProgram', [link]);
};
});
