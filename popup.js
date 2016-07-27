'use strict';

var constants;
chrome.runtime.getBackgroundPage(function(window){
    constants = window.constants;
});


document.addEventListener('DOMContentLoaded', function () {
    $('#name').text(chrome.i18n.getMessage('name'));
    $('#message_warning').text(chrome.i18n.getMessage('message_warning'));

    //input types
    $('.type_url > a').text(chrome.i18n.getMessage('input_type_url'));
    $('.type_file > a').text(chrome.i18n.getMessage('input_type_file'));
    $('.type_color > a').text(chrome.i18n.getMessage('input_type_color'));


    // background
    var btnAddBg = $('#btn_add_bg');
    var btnTypeBg = $('#btn_type_bg');
    var valueBg = $('#value_bg');
    var btnRemoveBg = $('#btn_del_bg');
    btnAddBg.html(chrome.i18n.getMessage('global_btn_add_bg') + ' <span class="glyphicon glyphicon-upload" aria-hidden="true"></span>');
    btnAddBg.prop('title', chrome.i18n.getMessage('global_title_btn_add_bg'));
    btnTypeBg.html(chrome.i18n.getMessage('input_type_url') + ' <span class="caret"></span>');
    valueBg.prop('placeholder', chrome.i18n.getMessage('global_placeholder_input_url'));
    btnRemoveBg.prop('title', chrome.i18n.getMessage('global_title_btn_remove_bg'));

    // background top
    /*var btnRemoveBgTop = $('#btn_del_bg_top');
    var valueBgTop = $('#value_bg_top');*/

    //backgrond chat
    var btnAddBgChat = $('#btn_add_bg_chat');
    var btnTypeBgChat = $('#btn_type_bg_chat');
    var valueBgChat = $('#value_bg_chat');
    var btnRemoveBgChat = $('#btn_del_bg_chat');
    btnAddBgChat.html(chrome.i18n.getMessage('chat_btn_add_bg') + ' <span class="glyphicon glyphicon-upload" aria-hidden="true"></span>');
    btnAddBgChat.prop('title', chrome.i18n.getMessage('chat_title_btn_add_bg'));
    btnTypeBgChat.html(chrome.i18n.getMessage('input_type_url') + ' <span class="caret"></span>');
    valueBgChat.prop('placeholder', chrome.i18n.getMessage('chat_placeholder_input_url'));
    btnRemoveBgChat.prop('title', chrome.i18n.getMessage('chat_title_btn_remove_bg'));

    // panel header
    var legendPanel = $('#legend_panel');
    var nameInputPanel = $('#name_input_panel');
    var valueBgPanelHeader = $('#value_bg_panelheader');
    var btnRemoveBgPanelHeader = $('#btn_del_bg_panelheader');
    legendPanel.text(chrome.i18n.getMessage('panel_fieldset_legend'));
    nameInputPanel.text(chrome.i18n.getMessage('panel_name_input_bg'));
    valueBgPanelHeader.prop('placeholder', chrome.i18n.getMessage('panel_placeholder_input_bg'));
    valueBgPanelHeader.prop('title', chrome.i18n.getMessage('panel_title_input_bg'));
    btnRemoveBgPanelHeader.prop('title', chrome.i18n.getMessage('panel_title_btn_remove_bg'));

    // chat title
    var nameInputChatTitle = $('#name_input_chattitle');
    var valueChatTitle = $('#value_chattitle');
    var btnRemoveChatTitle = $('#btn_del_chattitle');
    nameInputChatTitle.text(chrome.i18n.getMessage('chattitle_name_input_textcolor'));
    valueChatTitle.prop('placeholder', chrome.i18n.getMessage('chattitle_placeholder_input_textcolor'));
    valueChatTitle.prop('title', chrome.i18n.getMessage('chattitle_title_input_textcolor'));
    btnRemoveChatTitle.prop('title', chrome.i18n.getMessage('chattitle_title_btn_remove_textcolor'));
    
    // panel message
    /*var btnAddBgPanelMessage = $('#btn_add_bg_panelmessage');
    var btnRemoveBgPanelMessage = $('#btn_del_bg_panelmessage');
    var valueBgPanelMessage = $('#value_bg_panelmessage');*/

    // message out
    var legendMessageOut = $('#legend_messageout');
    var nameInputMessageOut = $('#name_input_messageout');
    var valueBgMessageOut = $('#value_bg_messageout');
    var btnRemoveBgMessageOut = $('#btn_del_bg_messageout');
    legendMessageOut.text(chrome.i18n.getMessage('messageout_fieldset_legend'));
    nameInputMessageOut.text(chrome.i18n.getMessage('messageout_name_input_bg'));
    valueBgMessageOut.prop('placeholder', chrome.i18n.getMessage('messageout_placeholder_input_bg'));
    valueBgMessageOut.prop('title', chrome.i18n.getMessage('messageout_title_input_bg'));
    btnRemoveBgMessageOut.prop('title', chrome.i18n.getMessage('messageout_title_btn_remove_bg'));


    // text message out
    var nameInputTextMessageOut = $('#name_input_text_messageout');
    var valueTextMessageOut = $('#value_text_messageout');
    var btnRemoveTextMessageOut = $('#btn_del_text_messageout');
    nameInputTextMessageOut.text(chrome.i18n.getMessage('textmessageout_name_input_textcolor'));
    valueTextMessageOut.prop('placeholder', chrome.i18n.getMessage('textmessageout_placeholder_input_textcolor'));
    valueTextMessageOut.prop('title', chrome.i18n.getMessage('textmessageout_title_input_textcolor'));
    btnRemoveTextMessageOut.prop('title', chrome.i18n.getMessage('textmessageout_title_btn_remove_textcolor'));

    // message in
    var legendMessageIn = $('#legend_messagein');
    var nameInputMessageIn = $('#name_input_messagein');
    var valueBgMessageIn = $('#value_bg_messagein');
    var btnRemoveBgMessageIn = $('#btn_del_bg_messagein');
    legendMessageIn.text(chrome.i18n.getMessage('messagein_fieldset_legend'));
    nameInputMessageIn.text(chrome.i18n.getMessage('messagein_name_input_bg'));
    valueBgMessageIn.prop('placeholder', chrome.i18n.getMessage('messagein_placeholder_input_bg'));
    valueBgMessageIn.prop('title', chrome.i18n.getMessage('messagein_title_input_bg'));
    btnRemoveBgMessageIn.prop('title', chrome.i18n.getMessage('messagein_title_btn_remove_bg'));

    // text message in
    var nameInputTextMessageIn = $('#name_input_text_messagein');
    var valueTextMessageIn = $('#value_text_messagein');
    var btnRemoveTextMessageIn = $('#btn_del_text_messagein');
    nameInputTextMessageIn.text(chrome.i18n.getMessage('textmessagein_name_input_textcolor'));
    valueTextMessageIn.prop('placeholder', chrome.i18n.getMessage('textmessagein_placeholder_input_textcolor'));
    valueTextMessageIn.prop('title', chrome.i18n.getMessage('textmessagein_title_input_textcolor'));
    btnRemoveTextMessageIn.prop('title', chrome.i18n.getMessage('textmessagein_title_btn_remove_textcolor'));

    //restore default
    var btnRestoreDefault = $('#btn_delete_config');
    btnRestoreDefault.text(chrome.i18n.getMessage('restoredefault_btn'));
    btnRestoreDefault.prop('title', chrome.i18n.getMessage('restoredefault_title'));


    //bg global
    btnAddBg.on('click.type_url', function(){
        funcAdd(constants.BG_GLOBAL.add, {imgUrl: valueBg.val()});
    });
    $('#type_bg li').click(function(){
        btnTypeBg.html($(this).text() + ' <span class="caret"></span>');
        valueBg.val('');
        valueBg.off('click.prevent');
        btnAddBg.prop('disabled', true);

        if($(this).hasClass('type_color')){
            valueBg.prop('placeholder', chrome.i18n.getMessage('placeholder_input_color'));
            valueBg.prop('type', 'text');
            valueBg.colorpicker().on('changeColor', function(e) {
                funcAdd(constants.BG_GLOBAL.add, {bgColor: e.color.toString()});
            });
        }
        else{
            if(valueBg.hasClass('colorpicker-element')) valueBg.colorpicker('destroy');

            if($(this).hasClass('type_url')){
                valueBg.prop('placeholder', chrome.i18n.getMessage('global_placeholder_input_url'));
                valueBg.prop('type', 'url');
                btnAddBg.prop('disabled', false);
            }
            else if($(this).hasClass('type_file')){
                valueBg.prop('placeholder', chrome.i18n.getMessage('placeholder_input_file'));
                valueBg.prop('type', 'file');

                valueBg.on('click.prevent', function(e){
                    e.preventDefault();
                    funcAdd(constants.BG_GLOBAL.add_by_file);
                });
            }
        }
    });

    //bg chat
    btnAddBgChat.on('click.type_url', function(){
        funcAdd(constants.BG_CHAT.add, {imgUrl: valueBgChat.val()});
    });
    $('#type_bg_chat li').click(function(){
        btnTypeBgChat.html($(this).text() + ' <span class="caret"></span>');
        valueBgChat.val('');
        valueBgChat.off('click.prevent');
        btnAddBgChat.prop('disabled', true);

        if($(this).hasClass('type_color')){
            valueBgChat.prop('placeholder', chrome.i18n.getMessage('placeholder_input_color'));
            valueBgChat.prop('type', 'text');
            valueBgChat.colorpicker().on('changeColor', function(e) {
                funcAdd(constants.BG_CHAT.add, {bgColor: e.color.toString()});
            });
        }
        else{
            if(valueBgChat.hasClass('colorpicker-element')) valueBgChat.colorpicker('destroy');

            if($(this).hasClass('type_url')){
                valueBgChat.prop('placeholder', chrome.i18n.getMessage('chat_placeholder_input_url'));
                valueBgChat.prop('type', 'url');
                btnAddBgChat.prop('disabled', false);
            }
            else if($(this).hasClass('type_file')){
                valueBgChat.prop('placeholder', chrome.i18n.getMessage('placeholder_input_file'));
                valueBgChat.prop('type', 'file');

                valueBgChat.on('click.prevent', function(e){
                    e.preventDefault();
                    funcAdd(constants.BG_CHAT.add_by_file);
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
    
    btnRestoreDefault.on('click', function(){ funcRemove(constants.DELETE_CONFIG) });
});

function funcAdd(option, obj){
    obj = obj || {};
    var valid = true;
    for(var o in obj)
        if(!obj[o]) valid = false;

    if(valid){
        chrome.runtime.getBackgroundPage(function(bg){
            bg.backgroundFunction(option, obj);
        });
    }
}

function funcRemove(option, obj){
    var r;
    if(option == constants.DELETE_CONFIG)
        r = confirm(chrome.i18n.getMessage('question_restore_default'));
    else
        r = confirm(chrome.i18n.getMessage('question_remove_item'));

    if (r == true) {
        chrome.runtime.getBackgroundPage(function(bg){
            bg.backgroundFunction(option, obj);
            $('#message_warning').removeClass('_hidden');
        });
    }
}


function readLocalImg(element, callback) {
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