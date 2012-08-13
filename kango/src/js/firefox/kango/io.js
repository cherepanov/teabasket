/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.IO=function(){};kango.IO.prototype=kango.oop.extend(kango.IOBase,{getExtensionFileUrl:function(filename){return'chrome://kango/content/'+filename;}});kango.io=new kango.IO();