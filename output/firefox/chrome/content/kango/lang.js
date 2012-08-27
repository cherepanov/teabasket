/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeaBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeaBasket_kango.HTMLSandbox=function(){this._browser=document.getElementById(this._browserId);};TeaBasket_kango.HTMLSandbox.prototype={_browserId:"TeaBasket_kangoBackgroundScriptHost",_browser:null,create:function(src,callback){this._browser.addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;callback(win);},true);this._browser.setAttribute('src',TeaBasket_kango.io.getExtensionFileUrl(src));}};TeaBasket_kango.Lang=function(){};TeaBasket_kango.Lang.prototype=TeaBasket_kango.oop.extend(TeaBasket_kango.LangBase,{createHTMLSandbox:function(src,callback){return(new TeaBasket_kango.HTMLSandbox()).create(src,callback);},evalInSandbox:function(win,api,text){if(typeof api['kango']!='undefined'&&win!=null&&win!=window){api['kango']=TeaBasket_kango.browser.getTabProxyForWindow(win);}
var sandbox=Components.utils.Sandbox(win);for(var key in api){if(api.hasOwnProperty(key)){sandbox[key]=api[key];}}
sandbox.__proto__=new XPCNativeWrapper(win);Components.utils.evalInSandbox('(function(){'+text+'\n})();',sandbox);}});TeaBasket_kango.lang=new TeaBasket_kango.Lang();