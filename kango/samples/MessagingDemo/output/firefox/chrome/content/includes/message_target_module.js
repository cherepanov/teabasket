/*
Built using MessagingDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
MessagingDemo_kango.MessageTargetModule=function(){};MessagingDemo_kango.MessageTargetModule.prototype.init=function(target){var listeners={};target.addMessageListener=function(name,listener){if(typeof listener.call!='undefined'&&typeof listener.apply!='undefined'){listeners[name]=listeners[name]||[];for(var i=0;i<listeners[name].length;i++){if(listeners[name][i]==listener){return false;}}
listeners[name].push(listener);return true;}
return false;};target.removeMessageListener=function(name,listener){if(typeof listeners[name]!='undefined'){for(var i=0;i<listeners[name].length;i++){if(listeners[name][i]==listener){listeners[name].splice(i,1);return true;}}}
return false;};target.removeAllMessageListeners=function(){listeners={};};target.addEventListener('message',function(event){var name=event.name;if(typeof listeners[name]!='undefined'){for(var i=0;i<listeners[name].length;i++){listeners[name][i](event);}}});};if(typeof MessagingDemo_kango!='undefined'&&typeof MessagingDemo_kango.registerModule!='undefined'){MessagingDemo_kango.registerModule(MessagingDemo_kango.MessageTargetModule);}