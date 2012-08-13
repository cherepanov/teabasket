/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeeBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeeBasket_kango.HTMLSandbox=function(){this._browser=document.getElementById(this._browserId);};TeeBasket_kango.HTMLSandbox.prototype={_browserId:"TeeBasket_kangoBackgroundScriptHost",_browser:null,create:function(src,callback){this._browser.addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;callback(win);},true);this._browser.setAttribute('src',TeeBasket_kango.io.getExtensionFileUrl(src));}};TeeBasket_kango.Lang=function(){};TeeBasket_kango.Lang.prototype=TeeBasket_kango.oop.extend(TeeBasket_kango.LangBase,{createHTMLSandbox:function(src,callback){return(new TeeBasket_kango.HTMLSandbox()).create(src,callback);},evalInSandbox:function(win,api,text){if(typeof api['kango']!='undefined'&&win!=null&&win!=window){api['kango']=TeeBasket_kango.browser.getTabProxyForWindow(win);}
var sandbox=Components.utils.Sandbox(win);for(var key in api){if(api.hasOwnProperty(key)){sandbox[key]=api[key];}}
sandbox.__proto__=new XPCNativeWrapper(win);Components.utils.evalInSandbox('(function(){'+text+'\n})();',sandbox);}});TeeBasket_kango.lang=new TeeBasket_kango.Lang();