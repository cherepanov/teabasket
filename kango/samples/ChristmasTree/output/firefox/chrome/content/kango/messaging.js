/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using ChristmasTree_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
ChristmasTree_kango.MessageRouter=function(){};ChristmasTree_kango.MessageRouter.prototype={_onMessage:function(event){this.onmessage(event);},onmessage:function(event){},dispatchMessage:function(name,data){var event={name:name,data:data,origin:'background',target:ChristmasTree_kango,source:ChristmasTree_kango};var self=this;window.setTimeout(function(){self.onmessage(event)},1);}};