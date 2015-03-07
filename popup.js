document.addEventListener('DOMContentLoaded', function () {
	var botao_add_bg = document.getElementById("botao_add_bg");
	var botao_remove_bg = document.getElementById("botao_remove_bg");
	var campo_texto = document.getElementById("image-link");
	botao_add_bg.addEventListener("click", add_bg);
	botao_remove_bg.addEventListener("click", remove_bg);
	var botao_msg = chrome.i18n.getMessage("btn_change_bg");
	var placeholder_msg = chrome.i18n.getMessage("textfield_holder");
	var msg_erro = chrome.i18n.getMessage("textfield_msg_erro");
	botao_add_bg.innerText = botao_msg;
	campo_texto.placeholder = placeholder_msg;
	campo_texto.title = msg_erro;
});

function add_bg(){
	var campo_texto = document.getElementById("image-link");
	if(campo_texto.checkValidity()){
		chrome.runtime.getBackgroundPage(mudar_fundo);
	}
	else{
		alert(campo_texto.title);
	}
};

function mudar_fundo(bg){
	var img = document.getElementById('image-link');
	bg.set_fundo(img.value);
	console.log("mudou");
	window.close();
};

function remove_bg(){
	var r = confirm(chrome.i18n.getMessage("remover_bg_pergunta"));
	if (r == true) {
	    bg.remove_fundo();
	} else {
		//nada
	}
};
