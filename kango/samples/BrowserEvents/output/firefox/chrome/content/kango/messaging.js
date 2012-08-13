/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.MessageRouter=function(){};BrowserEvents_kango.MessageRouter.prototype={_onMessage:function(event){this.onmessage(event);},onmessage:function(event){},dispatchMessage:function(name,data){var event={name:name,data:data,origin:'background',target:BrowserEvents_kango,source:BrowserEvents_kango};var self=this;window.setTimeout(function(){self.onmessage(event)},1);}};