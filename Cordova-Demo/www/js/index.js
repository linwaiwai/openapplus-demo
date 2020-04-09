/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function onButtonClicked(){
    var CordovaOpenApplusPlugin = cordova.plugins.CordovaOpenApplusPlugin;
    CordovaOpenApplusPlugin.navigateToMiniProgram("openapplus://jsApp/Lr12JhPrE9bg7N4uoABBXY");
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
        CordovaOpenApplusPlugin.start("oa606f78973e434c78933b869d8ba73c59","$2a$10$4bbR9ZNAhm74x3sckSLf/uPyR.E2JQvACCHP4xKtLt/OOpbJsiq9q");
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
