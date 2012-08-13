/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.IO=function(){};PopupDemo_kango.IO.prototype=PopupDemo_kango.oop.extend(PopupDemo_kango.IOBase,{getExtensionFileUrl:function(filename){return'chrome://PopupDemo_kango/content/'+filename;}});PopupDemo_kango.io=new PopupDemo_kango.IO();