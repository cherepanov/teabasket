/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.Console=function(){this._consoleService=Components.classes['@mozilla.org/consoleservice;1'].getService(Components.interfaces.nsIConsoleService);};PopupDemo_kango.Console.prototype=PopupDemo_kango.oop.extend(PopupDemo_kango.IConsole,{_consoleService:null,log:function(str){if(arguments.length>1){str=PopupDemo_kango.string.format.apply(PopupDemo_kango.string,arguments);}
this._consoleService.logStringMessage(str);}});PopupDemo_kango.console=new PopupDemo_kango.Console();