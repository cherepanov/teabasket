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

// Merged from ./output/chrome/includes/content_kango.part.js

/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.browser.getName=function(){return'chrome'};kango._initMessaging=function(){var listeners=[];chrome.extension.onRequest.addListener(function(event,sender,sendResponse){event.source=event.target=kango;for(var i=0;i<listeners.length;i++){listeners[i](event);}});kango.dispatchMessage=function(name,data){var event={name:name,data:data,origin:'tab',source:null,target:null};chrome.extension.sendRequest(event,function(){});};kango.addEventListener=function(type,listener){if(type=='message'){for(var i=0;i<listeners.length;i++){if(listeners[i]==listener){return;}}
listeners.push(listener);}};(new kango.InvokeAsyncModule()).init(kango);(new kango.MessageTargetModule()).init(kango);};