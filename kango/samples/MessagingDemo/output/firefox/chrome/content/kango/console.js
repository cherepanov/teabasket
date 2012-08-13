/*
Built using MessagingDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
MessagingDemo_kango.Console=function(){this._consoleService=Components.classes['@mozilla.org/consoleservice;1'].getService(Components.interfaces.nsIConsoleService);};MessagingDemo_kango.Console.prototype=MessagingDemo_kango.oop.extend(MessagingDemo_kango.IConsole,{_consoleService:null,log:function(str){if(arguments.length>1){str=MessagingDemo_kango.string.format.apply(MessagingDemo_kango.string,arguments);}
this._consoleService.logStringMessage(str);}});MessagingDemo_kango.console=new MessagingDemo_kango.Console();