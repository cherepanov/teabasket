/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using ChristmasTree_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
ChristmasTree_kango.HTMLSandbox=function(){this._browser=document.getElementById(this._browserId);};ChristmasTree_kango.HTMLSandbox.prototype={_browserId:"ChristmasTree_kangoBackgroundScriptHost",_browser:null,create:function(src,callback){this._browser.addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;callback(win);},true);this._browser.setAttribute('src',ChristmasTree_kango.io.getExtensionFileUrl(src));}};ChristmasTree_kango.Lang=function(){};ChristmasTree_kango.Lang.prototype=ChristmasTree_kango.oop.extend(ChristmasTree_kango.LangBase,{createHTMLSandbox:function(src,callback){return(new ChristmasTree_kango.HTMLSandbox()).create(src,callback);},evalInSandbox:function(win,api,text){if(typeof api['kango']!='undefined'&&win!=null&&win!=window){api['kango']=ChristmasTree_kango.browser.getTabProxyForWindow(win);}
var sandbox=Components.utils.Sandbox(win);for(var key in api){if(api.hasOwnProperty(key)){sandbox[key]=api[key];}}
sandbox.__proto__=new XPCNativeWrapper(win);Components.utils.evalInSandbox('(function(){'+text+'\n})();',sandbox);}});ChristmasTree_kango.lang=new ChristmasTree_kango.Lang();