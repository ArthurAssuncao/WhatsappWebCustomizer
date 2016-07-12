// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//http://stackoverflow.com/questions/265984/how-to-redefine-css-classes-with-javascript

"use strict";

var constants = {
    BG_GLOBAL: {selector: {main: ".app-wrapper"}, add: "addBgGlobal", remove: "removeBgGlobal"},
    BG_GLOBAL_TOP: {selector: {main: ".app-wrapper::after"}, add: "addBgGlobalTop", remove: "removeBgGlobalTop"},
    BG_CHAT: {selector: {main: ".pane-chat-body"}, add: "addBgChat", remove: "removeBgChat"},
    BG_PANEL_HEADER: {selector: {main: ".pane-header"}, add: "addBgPanelHeader", remove: "removeBgPanelHeader"},
    BG_PANEL_MESSAGE: {selector: {main: ".block-compose"}, add: "addBgPanelMessage", remove: "removeBgPanelMessage"},
    BG_MESSAGE_IN: {selector: {main: ".message-in", contextin: '.context-in'}, add: "addBgMessageIn", remove: "removeBgMessageIn"},
    BG_MESSAGE_OUT: {selector: {main: ".message-out"}, add: "addBgMessageOut", remove: "removeBgMessageOut"},
    TEXT_MESSAGE_IN: {selector: {main: ".message-in .message-text"}, add: "addTextMessageIn", remove: "removeTextMessageIn"},
    TEXT_MESSAGE_OUT: {selector: {main: ".message-out .message-text"}, add: "addTextMessageOut", remove: "removeTextMessageOut"},

    DELETE_CONFIG: "deleteStorage"
}

chrome.storage.sync.get('constants', function(obj){
    if(!Object.keys(obj).length)
        chrome.storage.sync.set({'constants': constants}, function() {
            console.log("constants saved");
        });
});


// Active icon
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(tab.url)
        if (tab.url.indexOf("https://web.whatsapp.com/") == 0) {
            chrome.pageAction.show(tabId);
        }
});

function sendMessage(message, callback){
    callback = callback || function(resp){};
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, message, callback);
    });
}

var backgroundFunction = function(opt, val){
    var msg = {option: opt, values: val};
    sendMessage(msg);
}