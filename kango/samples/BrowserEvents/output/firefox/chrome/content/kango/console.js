/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.Console=function(){this._consoleService=Components.classes['@mozilla.org/consoleservice;1'].getService(Components.interfaces.nsIConsoleService);};BrowserEvents_kango.Console.prototype=BrowserEvents_kango.oop.extend(BrowserEvents_kango.IConsole,{_consoleService:null,log:function(str){if(arguments.length>1){str=BrowserEvents_kango.string.format.apply(BrowserEvents_kango.string,arguments);}
this._consoleService.logStringMessage(str);}});BrowserEvents_kango.console=new BrowserEvents_kango.Console();