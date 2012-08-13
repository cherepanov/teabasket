/*
Built using MessagingDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
MessagingDemo_kango.IO=function(){};MessagingDemo_kango.IO.prototype=MessagingDemo_kango.oop.extend(MessagingDemo_kango.IOBase,{getExtensionFileUrl:function(filename){return'chrome://MessagingDemo_kango/content/'+filename;}});MessagingDemo_kango.io=new MessagingDemo_kango.IO();