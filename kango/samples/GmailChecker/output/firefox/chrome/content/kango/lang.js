/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.HTMLSandbox=function(){this._browser=document.getElementById(this._browserId);};GmailnChecker_kango.HTMLSandbox.prototype={_browserId:"GmailnChecker_kangoBackgroundScriptHost",_browser:null,create:function(src,callback){this._browser.addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;callback(win);},true);this._browser.setAttribute('src',GmailnChecker_kango.io.getExtensionFileUrl(src));}};GmailnChecker_kango.Lang=function(){};GmailnChecker_kango.Lang.prototype=GmailnChecker_kango.oop.extend(GmailnChecker_kango.LangBase,{createHTMLSandbox:function(src,callback){return(new GmailnChecker_kango.HTMLSandbox()).create(src,callback);},evalInSandbox:function(win,api,text){if(typeof api['kango']!='undefined'&&win!=null&&win!=window){api['kango']=GmailnChecker_kango.browser.getTabProxyForWindow(win);}
var sandbox=Components.utils.Sandbox(win);for(var key in api){if(api.hasOwnProperty(key)){sandbox[key]=api[key];}}
sandbox.__proto__=new XPCNativeWrapper(win);Components.utils.evalInSandbox('(function(){'+text+'\n})();',sandbox);}});GmailnChecker_kango.lang=new GmailnChecker_kango.Lang();