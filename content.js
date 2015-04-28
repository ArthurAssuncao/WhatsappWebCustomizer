// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//http://stackoverflow.com/questions/265984/how-to-redefine-css-classes-with-javascript
//para ajudar a corrigir erro
//http://stackoverflow.com/questions/24199119/load-an-external-image-in-img-tag-in-a-chrome-app
//https://github.com/StylishThemes/GitHub-Dark/issues/188

console.log("Extensao Wpp Web Customizer");
bg_global = "bg_global";
seletor_painel_chat = ".pane-body.pane-chat-body"

setStyleRule = function(selector, rule) {
    var stylesheet = document.styleSheets[(document.styleSheets.length - 1)];
    if(stylesheet.addRule) {
        stylesheet.addRule(selector, rule)
    } else if(stylesheet.insertRule) {
        stylesheet.insertRule(selector + ' { ' + rule + ' }', stylesheet.cssRules.length);
    }
};

function set_fundo_global(img_url){
    var regra_css = ''+
        'background-image: url(' + img_url + ');' + 
        '-webkit-background-size: cover;' + 
        'background-size: cover;'
    ;
    setStyleRule(seletor_painel_chat, regra_css);
    var storage = chrome.storage.local;
    var obj = {};
    obj[bg_global] = img_url;
    storage.set(obj);
}

function remove_fundo_global(){
  var storage = chrome.storage.local;
    storage.remove("bg_global", function(r){
        console.log(r);
        var regra_css = ''+
        'background-image: url("");' + 
        '-webkit-background-size: cover;' + 
        'background-size: cover;'
        ;
        setStyleRule(seletor_painel_chat, regra_css);
    });
}

/* Listen for messages */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if(request.tipo == "fundo"){
        set_fundo_global(request.img);
    }
    else if(request.tipo == "fundo_remover"){
        remove_fundo_global();
    }
    sendResponse({result: "ok"});
  });

var storage = chrome.storage.local;
storage.get(bg_global, function(r){
    img = r[bg_global];
    console.log("Carregar background: " + img);
    if(img && img != "undefined"){
      set_fundo_global(img);
    }
});

// setStyleRule('#pane-main', 'background-color: gray');
// setStyleRule('.message-in', 'background-color: red');
// setStyleRule('.message-out', 'background-color: blue');

/*
painel do chat
class pane-chat pane-chat-body lastTabIndex
id pane-main

baloes
class="message message-in"
class="message message-out"

seta dos baloes
.message-in:before

*/
