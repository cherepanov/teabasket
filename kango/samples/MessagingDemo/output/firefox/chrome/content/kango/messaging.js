/*
Built using MessagingDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
MessagingDemo_kango.MessageRouter=function(){};MessagingDemo_kango.MessageRouter.prototype={_onMessage:function(event){this.onmessage(event);},onmessage:function(event){},dispatchMessage:function(name,data){var event={name:name,data:data,origin:'background',target:MessagingDemo_kango,source:MessagingDemo_kango};var self=this;window.setTimeout(function(){self.onmessage(event)},1);}};