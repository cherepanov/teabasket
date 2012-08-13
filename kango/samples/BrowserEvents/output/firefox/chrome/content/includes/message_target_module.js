﻿/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.MessageTargetModule=function(){};BrowserEvents_kango.MessageTargetModule.prototype.init=function(target){var listeners={};target.addMessageListener=function(name,listener){if(typeof listener.call!='undefined'&&typeof listener.apply!='undefined'){listeners[name]=listeners[name]||[];for(var i=0;i<listeners[name].length;i++){if(listeners[name][i]==listener){return false;}}
listeners[name].push(listener);return true;}
return false;};target.removeMessageListener=function(name,listener){if(typeof listeners[name]!='undefined'){for(var i=0;i<listeners[name].length;i++){if(listeners[name][i]==listener){listeners[name].splice(i,1);return true;}}}
return false;};target.removeAllMessageListeners=function(){listeners={};};target.addEventListener('message',function(event){var name=event.name;if(typeof listeners[name]!='undefined'){for(var i=0;i<listeners[name].length;i++){listeners[name][i](event);}}});};if(typeof BrowserEvents_kango!='undefined'&&typeof BrowserEvents_kango.registerModule!='undefined'){BrowserEvents_kango.registerModule(BrowserEvents_kango.MessageTargetModule);}