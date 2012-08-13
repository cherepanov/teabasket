/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.Console=function(){this._consoleService=Components.classes['@mozilla.org/consoleservice;1'].getService(Components.interfaces.nsIConsoleService);};GmailnChecker_kango.Console.prototype=GmailnChecker_kango.oop.extend(GmailnChecker_kango.IConsole,{_consoleService:null,log:function(str){if(arguments.length>1){str=GmailnChecker_kango.string.format.apply(GmailnChecker_kango.string,arguments);}
this._consoleService.logStringMessage(str);}});GmailnChecker_kango.console=new GmailnChecker_kango.Console();