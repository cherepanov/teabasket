/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using ChristmasTree_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
ChristmasTree_kango.Console=function(){this._consoleService=Components.classes['@mozilla.org/consoleservice;1'].getService(Components.interfaces.nsIConsoleService);};ChristmasTree_kango.Console.prototype=ChristmasTree_kango.oop.extend(ChristmasTree_kango.IConsole,{_consoleService:null,log:function(str){if(arguments.length>1){str=ChristmasTree_kango.string.format.apply(ChristmasTree_kango.string,arguments);}
this._consoleService.logStringMessage(str);}});ChristmasTree_kango.console=new ChristmasTree_kango.Console();