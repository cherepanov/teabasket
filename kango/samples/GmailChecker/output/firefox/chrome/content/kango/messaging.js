/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.MessageRouter=function(){};GmailnChecker_kango.MessageRouter.prototype={_onMessage:function(event){this.onmessage(event);},onmessage:function(event){},dispatchMessage:function(name,data){var event={name:name,data:data,origin:'background',target:GmailnChecker_kango,source:GmailnChecker_kango};var self=this;window.setTimeout(function(){self.onmessage(event)},1);}};