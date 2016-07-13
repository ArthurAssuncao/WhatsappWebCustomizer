"use strict";

var constants;
chrome.runtime.getBackgroundPage(function(window){
    constants = window.constants;
});

var btnAddBg;
var btnRemoveBg;
var urlBg;

var btnAddBgTop;
var btnRemoveBgTop;
var urlBgTop;

var btnAddBgChat;
var btnRemoveBgChat;
var urlBgChat;

var btnAddBgPanelHeader;
var btnRemoveBgPanelHeader;
var urlBgPanelHeader;

var btnAddBgPanelMessage;
var btnRemoveBgPanelMessage;
var urlBgPanelMessage;

var btnAddBgMessageIn;
var btnRemoveBgMessageIn;
var urlBgMessageIn;

var btnAddBgMessageOut;
var btnRemoveBgMessageOut;
var urlBgMessageOut;

var btnAddTextMessageIn;
var btnRemoveTextMessageIn;
var urlTextMessageIn;

var btnAddTextMessageOut;
var btnRemoveTextMessageOut;
var urlTextMessageOut;

var btnAddChatTitle;
var btnRemoveChatTitle;
var urlChatTitle;

var btnReadLocalImg;

var btnDeleteConfig;

document.addEventListener('DOMContentLoaded', function () {
    // background
    btnAddBg = document.getElementById("btn_add_bg");
    btnRemoveBg = document.getElementById("btn_del_bg");
    urlBg = document.getElementById("url_bg");
    btnAddBg.innerText = chrome.i18n.getMessage("btn_change_bg");
    urlBg.placeholder = chrome.i18n.getMessage("textfield_holder");
    urlBg.title = chrome.i18n.getMessage("textfield_msg_erro");

    // background top
    btnAddBgTop = document.getElementById("btn_add_bg_top");
    btnRemoveBgTop = document.getElementById("btn_del_bg_top");
    urlBgTop = document.getElementById("url_bg_top");

    //backgrond chat
    btnAddBgChat = document.getElementById("btn_add_bg_chat");
    btnRemoveBgChat = document.getElementById("btn_del_bg_chat");
    urlBgChat = document.getElementById("url_bg_chat");

    // panel header
    btnAddBgPanelHeader = document.getElementById("btn_add_bg_panelheader");
    btnRemoveBgPanelHeader = document.getElementById("btn_del_bg_panelheader");
    urlBgPanelHeader = document.getElementById("url_bg_panelheader");

    // panel message
    btnAddBgPanelMessage = document.getElementById("btn_add_bg_panelmessage");
    btnRemoveBgPanelMessage = document.getElementById("btn_del_bg_panelmessage");
    urlBgPanelMessage = document.getElementById("url_bg_panelmessage");

    // message in
    btnAddBgMessageIn = document.getElementById("btn_add_bg_messagein");
    btnRemoveBgMessageIn = document.getElementById("btn_del_bg_messagein");
    urlBgMessageIn = document.getElementById("url_bg_messagein");

    // message out
    btnAddBgMessageOut = document.getElementById("btn_add_bg_messageout");
    btnRemoveBgMessageOut = document.getElementById("btn_del_bg_messageout");
    urlBgMessageOut = document.getElementById("url_bg_messageout");

    // text message in
    btnAddTextMessageIn = document.getElementById("btn_add_text_messagein");
    btnRemoveTextMessageIn = document.getElementById("btn_del_text_messagein");
    urlTextMessageIn = document.getElementById("url_text_messagein");

    // text message out
    btnAddTextMessageOut = document.getElementById("btn_add_text_messageout");
    btnRemoveTextMessageOut = document.getElementById("btn_del_text_messageout");
    urlTextMessageOut = document.getElementById("url_text_messageout");

    // chat title
    btnAddChatTitle = document.getElementById("btn_add_chat_title");
    btnRemoveChatTitle = document.getElementById("btn_del_chat_title");
    urlChatTitle = document.getElementById("url_chat_title");

    // btn local img
    btnReadLocalImg = document.getElementById("btn_localimg");

    //delete config
    btnDeleteConfig = document.getElementById("btn_delete_config");

    btnAddBg.addEventListener("click", function(){ funcAdd(constants.BG_GLOBAL.add, {imgUrl: urlBg.value}) });
    btnRemoveBg.addEventListener("click", function(){ funcRemove(constants.BG_GLOBAL.remove) });

    btnAddBgTop.addEventListener("click", function(){ funcAdd(constants.BG_GLOBAL_TOP.add, {imgUrl: urlBgTop.value}) });
    btnRemoveBgTop.addEventListener("click", function(){ funcRemove(constants.BG_GLOBAL_TOP.remove) });

    btnAddBgChat.addEventListener("click", function(){ funcAdd(constants.BG_CHAT.add, {imgUrl: urlBgChat.value}) });
    btnRemoveBgChat.addEventListener("click", function(){ funcRemove(constants.BG_CHAT.remove) });

    btnAddBgPanelHeader.addEventListener("click", function(){ funcAdd(constants.BG_PANEL_HEADER.add, {bgColor: urlBgPanelHeader.value}) });
    btnRemoveBgPanelHeader.addEventListener("click", function(){ funcRemove(constants.BG_PANEL_HEADER.remove) });

    btnAddBgPanelMessage.addEventListener("click", function(){ funcAdd(constants.BG_PANEL_MESSAGE.add, {bgColor: urlBgPanelMessage.value}) });
    btnRemoveBgPanelMessage.addEventListener("click", function(){ funcRemove(constants.BG_PANEL_MESSAGE.remove) });

    btnAddBgMessageIn.addEventListener("click", function(){ funcAdd(constants.BG_MESSAGE_IN.add, {bgColor: urlBgMessageIn.value}) });
    btnRemoveBgMessageIn.addEventListener("click", function(){ funcRemove(constants.BG_MESSAGE_IN.remove) });

    btnAddBgMessageOut.addEventListener("click", function(){ funcAdd(constants.BG_MESSAGE_OUT.add, {bgColor: urlBgMessageOut.value}) });
    btnRemoveBgMessageOut.addEventListener("click", function(){ funcRemove(constants.BG_MESSAGE_OUT.remove) });

    btnAddTextMessageIn.addEventListener("click", function(){ funcAdd(constants.TEXT_MESSAGE_IN.add, {color: urlTextMessageIn.value}) });
    btnRemoveTextMessageIn.addEventListener("click", function(){ funcRemove(constants.TEXT_MESSAGE_IN.remove) });

    btnAddTextMessageOut.addEventListener("click", function(){ funcAdd(constants.TEXT_MESSAGE_OUT.add, {color: urlTextMessageOut.value}) });
    btnRemoveTextMessageOut.addEventListener("click", function(){ funcRemove(constants.TEXT_MESSAGE_OUT.remove) });

    btnAddChatTitle.addEventListener("click", function(){ funcAdd(constants.CHAT_TITLE.add, {color: urlChatTitle.value}) });
    btnRemoveChatTitle.addEventListener("click", function(){ funcRemove(constants.CHAT_TITLE.remove) });

    btnReadLocalImg.addEventListener("change", readLocalImg);
    
    btnDeleteConfig.addEventListener("click", deleteConfig);
});

function funcAdd(option, obj){
    if(urlBg.checkValidity() || true){ ////
        chrome.runtime.getBackgroundPage(function(bg){
            bg.backgroundFunction(option, obj);
        });
    }
    else{
        alert(obj);
    }
}

function funcRemove(option, obj){
    var r = confirm(chrome.i18n.getMessage("remover_bg_pergunta"));
    if (r == true) {
        chrome.runtime.getBackgroundPage(function(bg){
            bg.backgroundFunction(option, obj);
        });
    } else {
        //nada
    }
}

function deleteConfig(){
    chrome.runtime.getBackgroundPage(function(bg){
        bg.backgroundFunction(constants.DELETE_CONFIG);
    });
}

function readLocalImg() {
    if (this.files && this.files[0]) {
        if(!this.files[0].type.startsWith("image")){
            //accept only image
        }
        else if(this.files[0].size > 1.5 * 1000000){ // > 1.5MB
            //accept image less than 1.5MB
        }
        else{
            var FR = new FileReader();
            FR.onload = function(e) {
                var imgBase64 = e.target.result;
                //
            }
            FR.readAsDataURL( this.files[0] );
        }
    }
}