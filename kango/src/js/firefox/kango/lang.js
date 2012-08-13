/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.HTMLSandbox=function(){this._browser=document.getElementById(this._browserId);};kango.HTMLSandbox.prototype={_browserId:"kangoBackgroundScriptHost",_browser:null,create:function(src,callback){this._browser.addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;callback(win);},true);this._browser.setAttribute('src',kango.io.getExtensionFileUrl(src));}};kango.Lang=function(){};kango.Lang.prototype=kango.oop.extend(kango.LangBase,{createHTMLSandbox:function(src,callback){return(new kango.HTMLSandbox()).create(src,callback);},evalInSandbox:function(win,api,text){if(typeof api['kango']!='undefined'&&win!=null&&win!=window){api['kango']=kango.browser.getTabProxyForWindow(win);}
var sandbox=Components.utils.Sandbox(win);for(var key in api){if(api.hasOwnProperty(key)){sandbox[key]=api[key];}}
sandbox.__proto__=new XPCNativeWrapper(win);Components.utils.evalInSandbox('(function(){'+text+'\n})();',sandbox);}});kango.lang=new kango.Lang();