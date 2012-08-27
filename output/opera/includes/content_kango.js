/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
var kango={event:{Message:'message'}};kango.lang={evalInSandbox:function(win,api,text){for(var key in api){if(api.hasOwnProperty(key)){arguments.callee[key]=api[key];}}
eval('(function(){'+text+'\n})();');}};kango.browser={getName:function(){return null;}};kango.console={log:function(str){if(typeof opera!='undefined'){opera.postError(str);}
else{console.log(str);}}};kango.xhr={send:function(request,callback){var contentType=request.contentType;if(contentType=='xml'||contentType=='json'){request.contentType='text';}
kango.invokeAsyncCallback('kango.xhr.send',request,function(data){if(data.response!=''){if(contentType=='json'){try{data.response=JSON.parse(data.response);}
catch(e){data.response=null;}}
else if(contentType=='xml'){var DOMParserClass=null;if(typeof DOMParser!='undefined'){DOMParserClass=DOMParser;}
else{DOMParserClass=window.DOMParser;}
var parser=new DOMParserClass();data.response=parser.parseFromString(data.response,'text/xml');}}
data.contentType=contentType;callback(data);});}};kango._init=function(runAt){if(typeof kango.dispatchMessage=='undefined'){this._initMessaging();}
var usclient=new kango.UserscriptEngineClient();usclient.run(window,runAt);};

// Merged from /home/ac/Downloads/teabasket/kango/src/js/opera/includes/content_kango.part.js

/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.browser.getName=function(){return'opera'};kango.FireDOMContentLoadedEvent=function(){if(!(window!=window.top)){kango.dispatchMessage('KangoBrowser_DOMContentLoaded',{url:document.location.href,title:document.title});}};kango.FireBeforeNavigateEvent=function(){if(!(window!=window.top)){kango.dispatchMessage('KangoBrowser_BeforeNavigate',{url:document.location.href});}};kango.BrowserHelper=function(){};kango.BrowserHelper.prototype={init:function(){var self=this;kango.addMessageListener('KangoBrowser_navigate',function(event){self.navigate(event.data);});kango.FireBeforeNavigateEvent();},navigate:function(data){document.location.href=data;}};kango._initMessaging=function(){var listeners=[];opera.extension.onmessage=function(event){var message=JSON.parse(event.data);var e={name:message.name,data:message.data,origin:event.origin,source:{dispatchMessage:function(name,data){event.source.postMessage(JSON.stringify({name:name,data:data}));}},target:kango};for(var i=0;i<listeners.length;i++){listeners[i](e);}};kango.dispatchMessage=function(name,data){opera.extension.postMessage(JSON.stringify({name:name,data:data}));};kango.addEventListener=function(type,listener){if(type=='message'){for(var i=0;i<listeners.length;i++){if(listeners[i]==listener){return;}}
listeners.push(listener);}};(new kango.InvokeAsyncModule()).init(kango);(new kango.MessageTargetModule()).init(kango);(new kango.BrowserHelper()).init();};kango.documentStartInitialized=false;kango.DelayedInitStart=function(){if(typeof kango.UserscriptEngineClient!='undefined'){kango._init('document-start');kango.documentStartInitialized=true;}
else{window.setTimeout(kango.DelayedInitStart,10);}};kango.DelayedInitStart();kango.DelayedInitEnd=function(){if(kango.documentStartInitialized&&document.readyState=='complete'){kango._init('document-end');kango.FireDOMContentLoadedEvent();}
else{window.setTimeout(kango.DelayedInitEnd,50);}};if(document.readyState=='complete'||document.readyState=='interactive'){kango.DelayedInitEnd();}
else{window.addEventListener('DOMContentLoaded',kango.DelayedInitEnd,false);}