/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.MessageRouter=function(){safari.application.addEventListener('message',kango.lang.bind(this._onMessage,this),false);};kango.MessageRouter.prototype={_onMessage:function(event){if(event.target instanceof SafariBrowserTab){this.onmessage({name:event.name,data:event.message,origin:'tab',target:kango.browser.getTab(event.target),source:{dispatchMessage:function(name,data){event.target.page.dispatchMessage(name,data);}}});}
else{kango.console.log('Messaging supported only for SafariBrowserTab targets');}},onmessage:function(event){},dispatchMessage:function(name,data){var event={name:name,data:data,origin:'background',source:kango,target:kango};var self=this;window.setTimeout(function(){self.onmessage(event)},1);}};