'use strict';

var constants;
chrome.runtime.getBackgroundPage(function(window){
    constants = window.constants;
});


document.addEventListener('DOMContentLoaded', function () {
    // background
    var btnAddBg = $('#btn_add_bg');
    var btnRemoveBg = $('#btn_del_bg');
    var valueBg = $('#value_bg');
    var btnTypeBg = $('#btn_type_bg');
    btnAddBg.text(chrome.i18n.getMessage('btn_change_bg'));
    valueBg.prop('placeholder', chrome.i18n.getMessage('textfield_holder'));
    valueBg.prop('title', chrome.i18n.getMessage('textfield_msg_erro'));

    // background top
    var btnAddBgTop = $('#btn_add_bg_top');
    var btnRemoveBgTop = $('#btn_del_bg_top');
    var valueBgTop = $('#value_bg_top');

    //backgrond chat
    var btnAddBgChat = $('#btn_add_bg_chat');
    var btnRemoveBgChat = $('#btn_del_bg_chat');
    var valueBgChat = $('#value_bg_chat');
    var btnTypeBgChat = $('#btn_type_bg_chat');

    // panel header
    var btnAddBgPanelHeader = $('#btn_add_bg_panelheader');
    var btnRemoveBgPanelHeader = $('#btn_del_bg_panelheader');
    var valueBgPanelHeader = $('#value_bg_panelheader');

    // panel message
    var btnAddBgPanelMessage = $('#btn_add_bg_panelmessage');
    var btnRemoveBgPanelMessage = $('#btn_del_bg_panelmessage');
    var valueBgPanelMessage = $('#value_bg_panelmessage');

    // message in
    var btnAddBgMessageIn = $('#btn_add_bg_messagein');
    var btnRemoveBgMessageIn = $('#btn_del_bg_messagein');
    var valueBgMessageIn = $('#value_bg_messagein');

    // message out
    var btnAddBgMessageOut = $('#btn_add_bg_messageout');
    var btnRemoveBgMessageOut = $('#btn_del_bg_messageout');
    var valueBgMessageOut = $('#value_bg_messageout');

    // text message in
    var btnAddTextMessageIn = $('#btn_add_text_messagein');
    var btnRemoveTextMessageIn = $('#btn_del_text_messagein');
    var valueTextMessageIn = $('#value_text_messagein');

    // text message out
    var btnAddTextMessageOut = $('#btn_add_text_messageout');
    var btnRemoveTextMessageOut = $('#btn_del_text_messageout');
    var valueTextMessageOut = $('#value_text_messageout');

    // chat title
    var btnAddChatTitle = $('#btn_add_chat_title');
    var btnRemoveChatTitle = $('#btn_del_chat_title');
    var valueChatTitle = $('#value_chat_title');

    //delete config
    var btnDeleteConfig = $('#btn_delete_config');


    //bg global
    btnAddBg.on('click.type_link', function(){
        funcAdd(constants.BG_GLOBAL.add, {imgUrl: valueBg.val()});
    });
    $('#type_bg li').click(function(){
        btnTypeBg.html($(this).text() + ' <span class="caret"></span>');
        valueBg.val('');

        if($(this).hasClass('type_color')){
            valueBg.prop('type', 'text');
            btnAddBg.prop('disabled', true);
            valueBg.colorpicker().on('changeColor', function(e) {
                funcAdd(constants.BG_GLOBAL.add, {bgColor: e.color.toString()});
            });
        }
        else{
            if(valueBg.hasClass('colorpicker-element')) valueBg.colorpicker('destroy');
            btnAddBg.prop('disabled', false);
            btnAddBg.off('click.type_file').off('click.type_link');

            if($(this).hasClass('type_link')){
                valueBg.prop('type', 'url');
                btnAddBg.on('click.type_link', function(){
                    funcAdd(constants.BG_GLOBAL.add, {imgUrl: valueBg.val()});
                });
            }
            else if($(this).hasClass('type_file')){
                valueBg.prop('type', 'file');
                btnAddBg.on('click.type_file', function(){
                    readLocalImg(valueBg[0], function(imgB64){
                        funcAdd(constants.BG_GLOBAL.add, {imgUrl: imgB64});
                    });
                });
            }
        }
    });

    //bg chat
    btnAddBgChat.on('click.type_link', function(){
        funcAdd(constants.BG_GLOBAL.add, {imgUrl: valueBgChat.val()});
    });
    $('#type_bg_chat li').click(function(){
        btnTypeBgChat.html($(this).text() + ' <span class="caret"></span>');
        valueBgChat.val('');

        if($(this).hasClass('type_color')){
            valueBgChat.prop('type', 'text');
            btnAddBgChat.prop('disabled', true);
            valueBgChat.colorpicker().on('changeColor', function(e) {
                funcAdd(constants.BG_CHAT.add, {bgColor: e.color.toString()});
            });
        }
        else{
            if(valueBgChat.hasClass('colorpicker-element')) valueBgChat.colorpicker('destroy');
            btnAddBgChat.prop('disabled', false);
            btnAddBgChat.off('click.type_file').off('click.type_link');

            if($(this).hasClass('type_link')){
                valueBgChat.prop('type', 'url');
                btnAddBgChat.on('click.type_link', function(){
                    funcAdd(constants.BG_CHAT.add, {imgUrl: valueBgChat.val()});
                });
            }
            else if($(this).hasClass('type_file')){
                valueBgChat.prop('type', 'file');
                btnAddBgChat.on('click.type_file', function(){
                    readLocalImg(valueBgChat[0], function(imgB64){
                        funcAdd(constants.BG_CHAT.add, {imgUrl: imgB64});
                    });
                });
            }
        }
    });

    valueBgPanelHeader.colorpicker().on('changeColor', function(e) {
        funcAdd(constants.BG_PANEL_HEADER.add, {bgColor: e.color.toString()});
    });

    valueBgMessageIn.colorpicker().on('changeColor', function(e) {
        funcAdd(constants.BG_MESSAGE_IN.add, {bgColor: e.color.toString()});
    });

    valueBgMessageOut.colorpicker().on('changeColor', function(e) {
        funcAdd(constants.BG_MESSAGE_OUT.add, {bgColor: e.color.toString()});
    });

    valueTextMessageIn.colorpicker({format: 'hex'}).on('changeColor', function(e) {
        funcAdd(constants.TEXT_MESSAGE_IN.add, {color: e.color.toHex()});
    });

    valueTextMessageOut.colorpicker({format: 'hex'}).on('changeColor', function(e) {
        funcAdd(constants.TEXT_MESSAGE_OUT.add, {color: e.color.toHex()});
    });

    valueChatTitle.colorpicker({format: 'hex'}).on('changeColor', function(e) {
        funcAdd(constants.CHAT_TITLE.add, {color: e.color.toHex()});
    });

    btnRemoveBg.on('click', function(){ funcRemove(constants.BG_GLOBAL.remove) });
    //btnRemoveBgTop.on('click', function(){ funcRemove(constants.BG_GLOBAL_TOP.remove) });
    btnRemoveBgChat.on('click', function(){ funcRemove(constants.BG_CHAT.remove) });
    btnRemoveBgPanelHeader.on('click', function(){ funcRemove(constants.BG_PANEL_HEADER.remove) });
    //btnRemoveBgPanelMessage.on('click', function(){ funcRemove(constants.BG_PANEL_MESSAGE.remove) });
    btnRemoveBgMessageIn.on('click', function(){ funcRemove(constants.BG_MESSAGE_IN.remove) });
    btnRemoveBgMessageOut.on('click', function(){ funcRemove(constants.BG_MESSAGE_OUT.remove) });
    btnRemoveTextMessageIn.on('click', function(){ funcRemove(constants.TEXT_MESSAGE_IN.remove) });
    btnRemoveTextMessageOut.on('click', function(){ funcRemove(constants.TEXT_MESSAGE_OUT.remove) });
    btnRemoveChatTitle.on('click', function(){ funcRemove(constants.CHAT_TITLE.remove) });
    
    btnDeleteConfig.on('click', deleteConfig);
});

function funcAdd(option, obj){
    for(var o in obj)
        if(obj[o])
            chrome.runtime.getBackgroundPage(function(bg){
                bg.backgroundFunction(option, obj);
            });
}

function funcRemove(option, obj){
    var r = confirm(chrome.i18n.getMessage('remover_bg_pergunta'));
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

function readLocalImg(element, callback) {
    if (element.files && element.files[0]) {
        if(!element.files[0].type.startsWith('image')){
            //accept only image
        }
        else if(element.files[0].size > 1.5 * 1000000){ // > 1.5MB
            //accept image less than 1.5MB
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