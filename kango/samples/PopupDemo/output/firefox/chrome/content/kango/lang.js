/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.HTMLSandbox=function(){this._browser=document.getElementById(this._browserId);};PopupDemo_kango.HTMLSandbox.prototype={_browserId:"PopupDemo_kangoBackgroundScriptHost",_browser:null,create:function(src,callback){this._browser.addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;callback(win);},true);this._browser.setAttribute('src',PopupDemo_kango.io.getExtensionFileUrl(src));}};PopupDemo_kango.Lang=function(){};PopupDemo_kango.Lang.prototype=PopupDemo_kango.oop.extend(PopupDemo_kango.LangBase,{createHTMLSandbox:function(src,callback){return(new PopupDemo_kango.HTMLSandbox()).create(src,callback);},evalInSandbox:function(win,api,text){if(typeof api['kango']!='undefined'&&win!=null&&win!=window){api['kango']=PopupDemo_kango.browser.getTabProxyForWindow(win);}
var sandbox=Components.utils.Sandbox(win);for(var key in api){if(api.hasOwnProperty(key)){sandbox[key]=api[key];}}
sandbox.__proto__=new XPCNativeWrapper(win);Components.utils.evalInSandbox('(function(){'+text+'\n})();',sandbox);}});PopupDemo_kango.lang=new PopupDemo_kango.Lang();