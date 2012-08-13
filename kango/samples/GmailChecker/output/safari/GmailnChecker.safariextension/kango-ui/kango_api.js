/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
(function(win){var createKangoProxy=function(kango){var obj=kango.oop.createProxy(kango);var listeners=[];obj.addMessageListener=function(name,listener){if(kango.browser.getName()=='opera'){var originalListener=listener;listener=function(){var isOperaPopupDestroyed=function(){try{return document.location.href=='';}
catch(e){}
return true;};if(isOperaPopupDestroyed()){removeAllListeners();}
else{originalListener();}};}
if(this.baseObject.addMessageListener(name,listener)){listeners.push({name:name,listener:listener});return true;}
return false;};obj.removeMessageListener=function(name,listener){if(this.baseObject.removeMessageListener(name,listener)){for(var i=0;i<listeners.length;i++){if(listeners[i].name==name&&listeners[i].listener==listener){listeners.splice(i,1);return true;}}}
return false;};var removeAllListeners=function(){for(var i=0;i<listeners.length;i++){kango.removeMessageListener(listeners[i].name,listeners[i].listener);}
listeners=[];};if(typeof window.addEventListener!='undefined'){window.addEventListener('unload',function(){removeAllListeners();},false);}
else{window.attachEvent('onunload',function(){removeAllListeners();});}
return obj;};win.KangoAPI={_readyListeners:[],_readyFired:false,createKangoProxy:function(obj){return createKangoProxy(obj);},onReady:function(callback){if(!this._readyFired){this._readyListeners.push(callback);}
else{callback();}},closeWindow:function(){},fireReady:function(){for(var i=0;i<this._readyListeners.length;i++){this._readyListeners[i]();}
this._readyFired=true;}};})(window);

// Merged from D:\Work\Kango-Builds\kango-0.9.8-public\src\js\safari\kango-ui\kango_api.part.js

/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
window.addEventListener('DOMContentLoaded',function(){window.kango=KangoAPI.createKangoProxy(safari.extension.globalPage.contentWindow.kango);KangoAPI.closeWindow=function(){kango.ui.browserButton.closePopup();};KangoAPI.fireReady();},false);