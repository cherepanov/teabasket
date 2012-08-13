/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
window.addEventListener('DOMContentLoaded',function(){window.kango=KangoAPI.createKangoProxy(safari.extension.globalPage.contentWindow.kango);KangoAPI.closeWindow=function(){kango.ui.browserButton.closePopup();};KangoAPI.fireReady();},false);