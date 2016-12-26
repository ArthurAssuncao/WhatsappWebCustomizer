// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//http://stackoverflow.com/questions/265984/how-to-redefine-css-classes-with-javascript
//para ajudar a corrigir erro
//http://stackoverflow.com/questions/24199119/load-an-external-image-in-img-tag-in-a-chrome-app
//https://github.com/StylishThemes/GitHub-Dark/issues/188

'use strict';

console.log('Extensao Wpp Web Customizer');

// Constants
var constants = {};
chrome.storage.sync.get('constants', function(obj){
    constants = obj.constants;
    getConfig();
    buttonsImage();
});

// storage
var storage = chrome.storage.local;

var styleRules = {
    bgGlobal: {
        main: function(values){
            if(values.imgUrl)
                return '' +
                'background-image: url(' + values.imgUrl + ');' +
                '-webkit-background-size: 100% 100%;' +
                'background-repeat: no-repeat;'+
                'background-size: 100% 100%;' +
                'background-position: center;' +
                '';
            else if(values.bgColor)
                return 'background-color: ' + values.bgColor + ';' + 
                'background-image: none;';
        }
    },

    bgGlobalTop: {
        main: function(values){
            if(values.imgUrl)
                return '' +
                'background-image: url(' + values.imgUrl + ');' +
                '-webkit-background-size: 100% 100%;' +
                'background-repeat: no-repeat;'+
                'background-size: 100% 100%;' +
                'background-position: center;' +
                '';
            else if(values.bgColor)
                return 'background-color: ' + values.bgColor + ';' + 
                'background-image: none;';
        }
    },

    bgChat: {
        main: function(values){
            if(values.imgUrl)
                return '' +
                'background-image: url(' + values.imgUrl + ');' +
                '-webkit-background-size: 100% 100%;' +
                'background-repeat: no-repeat;'+
                'background-size: 100% 100%;' +
                'background-position: center;' +
                '';
            else if(values.bgColor)
                return 'background-color: ' + values.bgColor + ';' + 
                'background-image: none;';
        }
    },

    bgPanelHeader: {
        main: function(values){
            return '' +
            'background-color:' + values.bgColor + ';' +
            '';
        },
        bgchatlist: function(values){
            return '' +
            'background-color:' + values.bgColor + ';' +
            '';
        },
        search: function(values){
            return '' +
            'background-color:' + values.bgColor + ';' +
            '';
        },
        chat: function(values){
            return '' +
            'background-color:' + values.bgColor + ';' +
            '';
        }
    },

    bgPanelMessage: {
        main: function(values){
            return '' +
            'background-color:' + values.bgColor + ';' +
            '';
        }
    },

    bgMessageIn: {
        main: function(values){
            return '' +
            'background-color:' + values.bgColor + ';' +
            '';
        },
        tail: function(){
            return '' +
            'background-image:none;' +
            '';
        },
        tail_highlight: function(){
            return '' +
            'background-image:none;' +
            '';
        },
        contextin: function(values){
            return '' +
            'background: linear-gradient(to right,rgba(255,255,255,0)0%,' + values.bgColor + ' 50%) !important;' +
            '';
        },
        contexticon: function(values){
            return '' +
            'background-color:' + hexToRgba('#FFFFFF', 0.20) + ';' +
            'border-radius: 20%;' +
            '';
        }
    },

    bgMessageOut: {
        main: function(values){
            return '' +
            'background-color:' + values.bgColor + ';' +
            '';
        },
        tail: function(){
            return '' +
            'background-image:none;' +
            '';
        },
        tail_highlight: function(){
            return '' +
            'background-image:none;' +
            '';
        },
        contextout: function(values){
            return '' +
            'background: linear-gradient(to right,rgba(255,255,255,0)0%,' + values.bgColor + ' 50%) !important;' +
            '';
        },
        contexticon: function(values){
            return '' +
            'background-color:' + hexToRgba('#FFFFFF', 0.20) + ';' +
            'border-radius: 20%;' +
            '';
        }
    },

    textMessageIn: {
        main: function(values){
            return '' +
            'color:' + values.color + ';' +
            '';
        },
        msgdate: function(values){
            return '' +
            'color: '+ hexToRgba(values.color, 0.55) + ';' +
            '';
        }
    },

    textMessageOut: {
        main: function(values){
            return '' +
            'color:' + values.color + ';' +
            '';
        },
        msgdate: function(values){
            return '' +
            'color: '+ hexToRgba(values.color, 0.55) + ';' +
            '';
        }
    },

    chatTitle: {
        main: function(values){
            return '' +
            'color:' + values.color + ';' +
            '';
        },
        chattime: function(values){
            return '' +
            'color: '+ hexToRgba(values.color, 0.55) + ';' +
            '';
        },
        chatstatus: function(values){
            return '' +
            'color: '+ hexToRgba(values.color, 0.7) + ' !important;' +
            '';
        },
        chatbody: function(values){
            return '' +
            'border-top-color: '+ hexToRgba(values.color, 0.55) + ' !important;' +
            '';
        }
    },
};

var configurations;
function getConfig(){
    configurations = {
        bgGlobal: {
            selector: constants.BG_GLOBAL.selector,
            storage: 'bgGlobal',
            styles: styleRules.bgGlobal
        },
        bgGlobalTop: {
            selector: constants.BG_GLOBAL_TOP.selector,
            storage: 'bgGlobalTop',
            styles: styleRules.bgGlobalTop
        },
        bgChat: {
            selector: constants.BG_CHAT.selector,
            storage: 'bgChat',
            styles: styleRules.bgChat
        },
        bgPanelHeader: {
            selector: constants.BG_PANEL_HEADER.selector,
            storage: 'bgPanelHeader',
            styles: styleRules.bgPanelHeader
        },
        bgPanelMessage: {
            selector: constants.BG_PANEL_MESSAGE.selector,
            storage: 'bgPanelMessage',
            styles: styleRules.bgPanelMessage
        },
        bgMessageIn: {
            selector: constants.BG_MESSAGE_IN.selector,
            storage: 'bgMessageIn',
            styles: styleRules.bgMessageIn
        },
        bgMessageOut: {
            selector: constants.BG_MESSAGE_OUT.selector,
            storage: 'bgMessageOut',
            styles: styleRules.bgMessageOut
        },
        textMessageIn: {
            selector: constants.TEXT_MESSAGE_IN.selector,
            storage: 'textMessageIn',
            styles: styleRules.textMessageIn
        },
        textMessageOut: {
            selector: constants.TEXT_MESSAGE_OUT.selector,
            storage: 'textMessageOut',
            styles: styleRules.textMessageOut
        },
        chatTitle: {
            selector: constants.CHAT_TITLE.selector,
            storage: 'chatTitle',
            styles: styleRules.chatTitle
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
    for (var i in element.selector) {
        try{
            setStyleRule(element.selector[i], element.styles[i](values));
        }
        catch(error){
            console.log(error);
        }
    }

    if(saveStorage !== false){
        var obj = {};
        obj[element.storage] = values;
        storage.set(obj);
    }
}

function removeConfig(storageObj){
    storage.remove(storageObj, function(r){
        //console.log('Removed: ', storageObj);
    });
}

function executeImportConfig(){
    function fileChooser(){
        var fileChooser = document.createElement('input');
        fileChooser.type = 'file';
        fileChooser.addEventListener('change', function(){
            readFileConfig(this, function(content){
                try{
                    let configObj = JSON.parse(content);

                    storage.clear();
                    storage.set(configObj);

                    alert(chrome.i18n.getMessage('message_warning'));
                }
                catch(e){
                    alert(chrome.i18n.getMessage('alert_error_read_file'));
                }
            });
        });
        fileChooser.click();
    }

    function readFileConfig(element, callback) {
        if (element.files && element.files[0]) {
            if(!element.files[0].type.startsWith('application/json')){
                alert(chrome.i18n.getMessage('alert_file_type_import_config'));
            }
            else if(element.files[0].size > 5 * 1000000){ // > 5MB
                alert(chrome.i18n.getMessage('alert_file_size_import_config'));
            }
            else{
                var FR = new FileReader();
                FR.onload = function(e) {
                    var content = e.target.result;
                    callback(content);
                }
                FR.readAsBinaryString( element.files[0] );
            }
        }
    }

    fileChooser();
}

function executeExportConfig(){
    storage.get(function(items){
        const fileName = (chrome.i18n.getMessage('name') + " config").replace(/ /g, "_").toLowerCase() + ".json";
        fileSave(items, fileName, "application/json");
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
    else if(option == constants.BG_GLOBAL.add_by_file){
        fileChooser(configurations.bgGlobal, 'imgUrl');
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
    else if(option == constants.BG_CHAT.add_by_file){
        fileChooser(configurations.bgChat, 'imgUrl');
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

    else if(option == constants.CHAT_TITLE.add){
        executeOption(configurations.chatTitle, values);
    }
    else if(option == constants.CHAT_TITLE.remove){
        removeConfig(configurations.chatTitle.storage);
    }

    else if(option == constants.IMPORT_CONFIG){
        executeImportConfig();
    }
    else if(option == constants.EXPORT_CONFIG){
        executeExportConfig();
    }

    else if(option == constants.DELETE_CONFIG){
        storage.clear();
        //console.log('CLEAR STORAGE');
    }

    sendResponse({result: 'ok'});
  });

// Load configurations
storage.get(function(items){
    console.log('Loading configurations');
    //console.log('STORAGE: ', items);
    for(var key in configurations){
        var elem = configurations[key];
        if(items[elem.storage]) //no empty
            executeOption(elem, items[elem.storage], false);
    }
});


//Add buttons when expand images
function buttonsImage(){
    var originalImageWidth;
    var originalImageHeight;

    //call function when expand an image
    document.addEventListener('click', function(e){
        var classes = e.target.className.split(' ');
        for(var i in classes){
            if(classes[i] == constants.BUTTONS_IMG.others.thumbimage){
                setTimeout(function() {
                    setImgOriginalSizes();
                    insertButtons();
                }, 450);
            }
        }
    });

    function setImgOriginalSizes(){
        var elementImg = document.querySelector(constants.BUTTONS_IMG.selector.image);

        originalImageWidth = elementImg.offsetWidth;
        originalImageHeight = elementImg.offsetHeight;
    }

    function insertButtons(){
        var btnRotateRight = document.createElement('button');
        btnRotateRight.id='btn_rotate_right';
        btnRotateRight.className = 'btn btn-round btn-media-next';
        btnRotateRight.innerHTML = '<span class="icon icon-refresh"></span>';
        btnRotateRight.style.marginTop = '20px';

        var btnRotateLeft = document.createElement('button');
        btnRotateLeft.id='btn_rotate_left';
        btnRotateLeft.className = 'btn btn-round btn-media-next';
        btnRotateLeft.innerHTML = '<span class="icon icon-refresh"></span>';
        btnRotateLeft.style.marginTop = '5px';
        btnRotateLeft.style.transform = 'rotateY(180deg)';

        btnRotateRight.addEventListener('click', function(e){ e.stopPropagation(); rotateImage('right') });
        btnRotateLeft.addEventListener('click', function(e){ e.stopPropagation(); rotateImage('left') });

        //add wrapper and buttons
        var btn = document.querySelector('.btn-media-next');

        var parent = btn.parentNode;
        var wrapper = document.createElement('div');

        parent.replaceChild(wrapper, btn);

        wrapper.appendChild(btn);
        wrapper.appendChild(btnRotateRight);
        wrapper.appendChild(btnRotateLeft);

        //add margin top to centralize
        var marginTop = btnRotateRight.offsetHeight + btnRotateLeft.offsetHeight;
        marginTop += parseInt(btnRotateRight.style.marginTop.replace('px', '')) + parseInt(btnRotateLeft.style.marginTop.replace('px', ''));
        wrapper.style.marginTop = marginTop + 'px';

        return {left: btnRotateLeft, right: btnRotateRight};
    }

    function rotateImage(side){
        var elementImg = document.querySelector(constants.BUTTONS_IMG.selector.image);

        //max sizes
        var containerWidth = elementImg.parentNode.parentNode.offsetWidth;
        var containerHeight = elementImg.parentNode.parentNode.offsetHeight;

        var parentImg = elementImg.parentNode;

        //calc angle
        var regExp = /rotate\((-?\w*)deg\)/i; //rotate(...)deg
        var regResult = parentImg.style.transform.match(regExp);
        var angle = side == 'right' ? 90 : (-90);
        if(regResult != null)
            angle += parseInt(regResult[1]);

        var newHeight;
        var newWidth;
        var isHorizontal = angle % 180 ? false : true;

        if(isHorizontal){
            newHeight = originalImageHeight;
            newWidth = originalImageWidth;
        }
        else{
            //original zises <= container image
            if(originalImageWidth <= containerHeight && originalImageHeight <= containerWidth){
                newHeight = originalImageHeight;
                newWidth = originalImageWidth;
            }
            //original width zise > container height image
            else if(originalImageWidth > containerHeight){
                newWidth = containerHeight;
                newHeight = originalImageHeight * containerHeight / originalImageWidth;
            }
            //original height zise > container width image
            else if(originalImageHeight > containerWidth){
                newHeight = containerWidth;
                newWidth = originalImageWidth * containerWidth / originalImageHeight;
            }

        }

        parentImg.style.width = newWidth + 'px';
        parentImg.style.height = newHeight + 'px';

        parentImg.style.transform = 'rotate(' + angle + 'deg)';
    }
}


function hexToRgba(hex, opacity) {
    hex = hex.replace('#', '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return 'rgba(' + r +','+ g +','+ b +','+ opacity + ')';
}

function fileChooser(option, key){
    var fileChooser = document.createElement('input');
    fileChooser.type = 'file';
    fileChooser.addEventListener('change', function(){
        readLocalImage(this, function(imgB64){
            executeOption(option, {[key]: imgB64});
        });
    });
    fileChooser.click();
}

function readLocalImage(element, callback) {
    if (element.files && element.files[0]) {
        if(!element.files[0].type.startsWith('image')){
            alert(chrome.i18n.getMessage('alert_type_file_error'));
        }
        else if(element.files[0].size > 1.5 * 1000000){ // > 1.5MB
            alert(chrome.i18n.getMessage('alert_size_file_error'));
        }
        else{
            var FR = new FileReader();
            FR.onload = function(e) {
                var imgBase64 = e.target.result;
                callback(imgBase64);
            }
            FR.readAsDataURL( element.files[0] );
        }
    }
}

function fileSave(content, fileName, contentType){
    content = content || "";
    fileName = fileName || "download.json";
    contentType = contentType || "application/json";

    const text = JSON.stringify(content);
    const textBlob = new Blob([text], {type: contentType});
    const textURL = window.URL.createObjectURL(textBlob);

    var downloadElem = document.createElement("a");
    downloadElem.download = fileName;
    downloadElem.innerHTML = "";
    downloadElem.href = textURL;
    downloadElem.style.display = "none";
    downloadElem.onclick = function(){};
    document.body.appendChild(downloadElem);

    downloadElem.click();
}