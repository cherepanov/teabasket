/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeaBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeaBasket_kango.Console=function(){this._consoleService=Components.classes['@mozilla.org/consoleservice;1'].getService(Components.interfaces.nsIConsoleService);};TeaBasket_kango.Console.prototype=TeaBasket_kango.oop.extend(TeaBasket_kango.IConsole,{_consoleService:null,log:function(str){if(arguments.length>1){str=TeaBasket_kango.string.format.apply(TeaBasket_kango.string,arguments);}
this._consoleService.logStringMessage(str);}});TeaBasket_kango.console=new TeaBasket_kango.Console();