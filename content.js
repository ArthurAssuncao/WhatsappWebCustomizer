// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//http://stackoverflow.com/questions/265984/how-to-redefine-css-classes-with-javascript
//para ajudar a corrigir erro
//http://stackoverflow.com/questions/24199119/load-an-external-image-in-img-tag-in-a-chrome-app
//https://github.com/StylishThemes/GitHub-Dark/issues/188

"use strict";

console.log("Extensao Wpp Web Customizer");

// Constants
var constants = {};
chrome.storage.sync.get('constants', function(obj){
    constants = obj.constants;
    getConfig();
});

// storage
var storage = chrome.storage.local;


var styleRules = {
    bgGlobal: function(values){
        return '' + 
        'background-image: url(' + values.imgUrl + ');' +
        'background-color: ' + values.bgColor + ';' +
        '-webkit-background-size: 100% 100%;' +
        'background-repeat: no-repeat;'+
        'background-size: 100% 100%;' +
        'background-position: center;' +
        '';
    },

    bgGlobalTop: function(values){
        return '' + 
        'background-image: url(' + values.imgUrl + ');' + 
        'background-color: ' + values.bgColor + ';' +
        '-webkit-background-size: 100% 100%;' + 
        'background-repeat: no-repeat;'+
        'background-size: 100% 100%;' +
        'background-position: center;' +
        '';
    },

    bgChat: function(values){
        return '' + 
        'background-image: url(' + (values.imgUrl || '') + ');' + 
        'background-color: ' + values.bgColor + ';' +
        '-webkit-background-size: 100% 100%;' + 
        'background-repeat: no-repeat;'+
        'background-size: 100% 100%;' +
        'background-position: center;' +
        '';
    },

    bgPanelHeader: function(values){
        return '' + 
        'background-color:' + values.bgColor + ';' +
        '';
    },

    bgPanelMessage: function(values){
        return '' + 
        'background-color:' + values.bgColor + ';' +
        '';
    },

    bgMessageIn: function(values){
        return '' + 
        'background-color:' + values.bgColor + ';' +
        '';
    },

    bgMessageOut: function(values){
        return '' + 
        'background-color:' + values.bgColor + ';' +
        '';
    },

    textMessageIn: function(values){
        return '' + 
        'color:' + values.color + ';' +
        '';
    },

    textMessageOut: function(values){
        return '' + 
        'color:' + values.color + ';' +
        '';
    },
};

var configurations;
function getConfig(){
    configurations = {
        bgGlobal: {
            selector: constants.BG_GLOBAL.selector,
            storage: "bgGlobal",
            styles: styleRules.bgGlobal
        },
        bgGlobalTop: {
            selector: constants.BG_GLOBAL_TOP.selector,
            storage: "bgGlobalTop",
            styles: styleRules.bgGlobalTop
        },
        bgChat: {
            selector: constants.BG_CHAT.selector,
            storage: "bgChat",
            styles: styleRules.bgChat
        },
        bgPanelHeader: {
            selector: constants.BG_PANEL_HEADER.selector,
            storage: "bgPanelHeader",
            styles: styleRules.bgPanelHeader
        },
        bgPanelMessage: {
            selector: constants.BG_PANEL_MESSAGE.selector,
            storage: "bgPanelMessage",
            styles: styleRules.bgPanelMessage
        },
        bgMessageIn: {
            selector: constants.BG_MESSAGE_IN.selector,
            storage: "bgMessageIn",
            styles: styleRules.bgMessageIn
        },
        bgMessageOut: {
            selector: constants.BG_MESSAGE_OUT.selector,
            storage: "bgMessageOut",
            styles: styleRules.bgMessageOut
        },
        textMessageIn: {
            selector: constants.TEXT_MESSAGE_IN.selector,
            storage: "textMessageIn",
            styles: styleRules.textMessageIn
        },
        textMessageOut: {
            selector: constants.TEXT_MESSAGE_OUT.selector,
            storage: "textMessageOut",
            styles: styleRules.textMessageOut
        },
    }
}


var setStyleRule = function(selector, rule) {
    var stylesheet = document.styleSheets[(document.styleSheets.length - 1)];
    if(stylesheet.addRule) {
        stylesheet.addRule(selector, rule);
    } else if(stylesheet.insertRule) {
        stylesheet.insertRule(selector + ' { ' + rule + ' }', stylesheet.cssRules.length);
    }
};

function executeOption(element, values, saveStorage){
    setStyleRule(element.selector, element.styles(values));

    if(saveStorage !== false){
        var obj = {};
        obj[element.storage] = values;
        storage.set(obj);
    }
}

function removeConfig(storageObj){
    storage.remove(storageObj, function(r){
        console.log("Removido: ", storageObj);
    });
}

/* Listen for messages */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var option = request.option;
    var values = request.values;

    if(option == constants.BG_GLOBAL.add){
        executeOption(configurations.bgGlobal, values);
    }
    else if(option == constants.BG_GLOBAL.remove){
        removeConfig(configurations.bgGlobal.storage);
    }

    else if(option == constants.BG_GLOBAL_TOP.add){
        executeOption(configurations.bgGlobalTop, values);
    }
    else if(option == constants.BG_GLOBAL_TOP.remove){
        removeConfig(configurations.bgGlobalTop.storage);
    }

    else if(option == constants.BG_CHAT.add){
        executeOption(configurations.bgChat, values);
    }
    else if(option == constants.BG_CHAT.remove){
        removeConfig(configurations.bgChat.storage);
    }

    else if(option == constants.BG_PANEL_HEADER.add || option == constants.BG_PANEL_MESSAGE.add){
        executeOption(configurations.bgPanelHeader, values);
        executeOption(configurations.bgPanelMessage, values);
    }
    else if(option == constants.BG_PANEL_HEADER.remove || option == constants.BG_PANEL_MESSAGE.remove){
        removeConfig(configurations.bgPanelHeader.storage);
        removeConfig(configurations.bgPanelMessage.storage);
    }

    else if(option == constants.BG_MESSAGE_IN.add){
        executeOption(configurations.bgMessageIn, values);
    }
    else if(option == constants.BG_MESSAGE_IN.remove){
        removeConfig(configurations.bgMessageIn.storage);
    }

    else if(option == constants.BG_MESSAGE_OUT.add){
        executeOption(configurations.bgMessageOut, values);
    }
    else if(option == constants.BG_MESSAGE_OUT.remove){
        removeConfig(configurations.bgMessageOut.storage);
    }

    else if(option == constants.TEXT_MESSAGE_IN.add){
        executeOption(configurations.textMessageIn, values);
    }
    else if(option == constants.TEXT_MESSAGE_IN.remove){
        removeConfig(configurations.textMessageIn.storage);
    }

    else if(option == constants.TEXT_MESSAGE_OUT.add){
        executeOption(configurations.textMessageOut, values);
    }
    else if(option == constants.TEXT_MESSAGE_OUT.remove){
        removeConfig(configurations.textMessageOut.storage);
    }

    else if(option == constants.DELETE_CONFIG){
        storage.clear();
        console.log("CLEAR STORAGE");
    }

    sendResponse({result: "ok"});
  });

// Load configurations
storage.get(function(items){
    console.log("Loading configurations");
    console.log("STORAGE: ", items);
    for(var key in configurations){
        var elem = configurations[key];
        if(items[elem.storage]) //no empty
            executeOption(elem, items[elem.storage], false);
    }
});

(function () {
    //call function when expand an image
    document.addEventListener("click", function(e){
        var classes = e.target.className.split(" ");
        for(var i in classes){
            if(classes[i] == "image-thumb-body"){
                setTimeout(function() {
                    insertContainerDiv();
                }, 100);
            }
        }
    });

    function insertContainerDiv(){
        var sizeHDiv = 10;

        //decrease height size in element adjacent
        document.querySelector(".media-viewer-img").style.height = (100 - sizeHDiv) + '%';

        var div = document.createElement('div');
        div.style.border = '1px solid black'; ////
        div.style.height = sizeHDiv + '%';

        div.addEventListener("click", function(e){
            e.stopPropagation();
        });

        div.appendChild(buttonsRotate().left);
        div.appendChild(buttonsRotate().right);

        document.querySelector(".media-content .object-fit > div").appendChild(div); ////
    }

    function buttonsRotate(){
        var btnRotateRight = document.createElement('button');
        btnRotateRight.className = 'btn btn-round';
        btnRotateRight.innerHTML = '<span class="icon icon-refresh"></span>';

        var btnRotateLeft = document.createElement('button');
        btnRotateLeft.className = 'btn btn-round';
        btnRotateLeft.innerHTML = '<span class="icon icon-refresh"></span>';

        btnRotateRight.addEventListener('click', function(){ rotateImage('.media-viewer-img', 'right') });
        btnRotateLeft.addEventListener('click', function(){ rotateImage('.media-viewer-img', 'left') });
        
        return {left: btnRotateLeft, right: btnRotateRight};
    }

    function rotateImage(selector, side){
        var elem = document.querySelector(selector);
        var regExp = /rotate\((-?\w*)deg\)/i; //rotate(...)deg
        var regResult = elem.style.transform.match(regExp);

        //calc angle
        var angle = side == 'right' ? 90 : (-90);
        if(regResult != null)
            angle += parseInt(regResult[1]);

        var sizeParent = elem.parentElement.getBoundingClientRect();
        var width = sizeParent.width;
        if(Math.abs(angle) / 90 % 2 == 1){ //if vertical
            elem.style.display = 'block';
            elem.style.margin = '0 auto';

            width = sizeParent.height;
            var subWidth = parseFloat(elem.style.height.replace('%', ''));
            width -= width * (100 - subWidth) / 100;
        }
        elem.style.width = width+'px';

        document.querySelector(".media-viewer-img").style['transform-origin'] = 'initial'; ////

        elem.style.transform = 'rotate(' + angle + 'deg)';
    }
}());