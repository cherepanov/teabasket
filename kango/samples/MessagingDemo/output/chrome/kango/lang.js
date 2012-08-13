/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.Lang=function(){};kango.Lang.prototype=kango.oop.extend(kango.LangBase,{createHTMLSandbox:function(src,callback){return callback(window);},evalInSandbox:function(win,api,text){var apiStubCode='';for(var key in api){if(api.hasOwnProperty(key)&&key!='window'&&key!='document'){apiStubCode+='var '+key+'=api["'+key+'"];';}}
var func=eval('(function(){return function(api){'+apiStubCode+text+'\n}})();');func.call(win,api);}});kango.lang=new kango.Lang();