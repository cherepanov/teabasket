/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
window.addEventListener('DOMContentLoaded',function(){window.kango=KangoAPI.createKangoProxy(chrome.extension.getBackgroundPage().kango);KangoAPI.closeWindow=function(){window.close();};KangoAPI.fireReady();},false);