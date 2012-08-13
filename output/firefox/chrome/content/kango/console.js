/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeeBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeeBasket_kango.Console=function(){this._consoleService=Components.classes['@mozilla.org/consoleservice;1'].getService(Components.interfaces.nsIConsoleService);};TeeBasket_kango.Console.prototype=TeeBasket_kango.oop.extend(TeeBasket_kango.IConsole,{_consoleService:null,log:function(str){if(arguments.length>1){str=TeeBasket_kango.string.format.apply(TeeBasket_kango.string,arguments);}
this._consoleService.logStringMessage(str);}});TeeBasket_kango.console=new TeeBasket_kango.Console();