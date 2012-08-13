/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.IO=function(){};kango.IO.prototype=kango.oop.extend(kango.IOBase,{getExtensionFileUrl:function(filename){return safari.extension.baseURI+filename;}});kango.io=new kango.IO();