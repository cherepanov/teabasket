/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.IO=function(){};BrowserEvents_kango.IO.prototype=BrowserEvents_kango.oop.extend(BrowserEvents_kango.IOBase,{getExtensionFileUrl:function(filename){return'chrome://BrowserEvents_kango/content/'+filename;}});BrowserEvents_kango.io=new BrowserEvents_kango.IO();