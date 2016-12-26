// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//http://stackoverflow.com/questions/265984/how-to-redefine-css-classes-with-javascript

'use strict';

var constants = {
    BG_GLOBAL: {selector: {main: ".app-wrapper"}, add: "addBgGlobal", add_by_file: "addBgGlobalByFile", remove: "removeBgGlobal"},
    BG_GLOBAL_TOP: {selector: {main: ".app-wrapper::after"}, add: "addBgGlobalTop", add_by_file: "addBgTopByFile", remove: "removeBgGlobalTop"},
    BG_CHAT: {selector: {main: ".pane-chat-body"}, add: "addBgChat", add_by_file: "addBgChatByFile", remove: "removeBgChat"},
    BG_PANEL_HEADER: {selector: {main: ".pane-header", bgchatlist: '.pane-one .pane-body .infinite-list-viewport', search: '.pane-one .search-container', chat: '.chat-drag-cover .chat'}, add: "addBgPanelHeader", remove: "removeBgPanelHeader"},
    BG_PANEL_MESSAGE: {selector: {main: ".block-compose"}, add: "addBgPanelMessage", remove: "removeBgPanelMessage"},
    BG_MESSAGE_IN: {selector: {main: ".message-in", tail: ".message-in .tail-container", tail_highlight: ".message-in .tail-container.highlight", contextin: '.context-in', contexticon: '.context-in .context-icon'}, add: "addBgMessageIn", remove: "removeBgMessageIn"},
    BG_MESSAGE_OUT: {selector: {main: ".message-out", tail: ".message-out .tail-container", tail_highlight: ".message-out .tail-container.highlight", contextout: '.context-out', contexticon: '.context-out .context-icon'}, add: "addBgMessageOut", remove: "removeBgMessageOut"},
    TEXT_MESSAGE_IN: {selector: {main: ".message-in .message-text", msgdate: '.message-in .message-datetime'}, add: "addTextMessageIn", remove: "removeTextMessageIn"},
    TEXT_MESSAGE_OUT: {selector: {main: ".message-out .message-text", msgdate: '.message-out .message-datetime'}, add: "addTextMessageOut", remove: "removeTextMessageOut"},
    CHAT_TITLE: {selector: {main: ".pane-one .pane-body .chat-body .chat-title, .pane-two .chat-body .chat-title", chattime: '.pane-one .pane-body .chat-body .chat-time', chatstatus: '.pane-one .pane-body .chat-body .chat-status, .pane-two .chat-body .chat-status', chatbody: '.pane-one .pane-body .chat-body'}, add: "addChatTitle", remove: "removeChatTitle"},

    BUTTONS_IMG: {selector: {image: '.media-viewer-img'}, others: {thumbimage: 'image-thumb-body'}},

    IMPORT_CONFIG: "import_config",
    EXPORT_CONFIG: "export_config",

    DELETE_CONFIG: "deleteStorage"
}

chrome.storage.sync.clear(); ////
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