﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.BrowserBase=function(){GmailnChecker_kango.oop.mixin(this,GmailnChecker_kango.EventTarget.prototype);GmailnChecker_kango.oop.mixin(this,new GmailnChecker_kango.EventTarget());};GmailnChecker_kango.BrowserBase.prototype={event:{DocumentComplete:'DocumentComplete',BeforeNavigate:'BeforeNavigate',TabChanged:'TabChanged',TabCreated:'TabCreated',TabRemoved:'TabRemoved'},getName:function(){throw new GmailnChecker_kango.NotImplementedException();},tabs:{getAll:function(callback){var result=[];var windowsProcessedCount=0;GmailnChecker_kango.browser.windows.getAll(function(wins){for(var i=0;i<wins.length;i++){wins[i].getTabs(function(tabs){result.push.apply(result,tabs);if(++windowsProcessedCount==wins.length)callback(result);});}
if(wins.length==0)callback(result);});},getCurrent:function(callback){GmailnChecker_kango.browser.windows.getCurrent(function(win){win.getCurrentTab(function(tab){callback(tab);});});},create:function(details){throw new GmailnChecker_kango.NotImplementedException();}},windows:{getAll:function(callback){throw new GmailnChecker_kango.NotImplementedException();},getCurrent:function(callback){throw new GmailnChecker_kango.NotImplementedException();},create:function(details){throw new GmailnChecker_kango.NotImplementedException();}}};GmailnChecker_kango.IBrowserWindow=function(){};GmailnChecker_kango.IBrowserWindow.prototype={getTabs:function(callback){throw new GmailnChecker_kango.NotImplementedException();},getCurrentTab:function(callback){throw new GmailnChecker_kango.NotImplementedException();},isActive:function(){throw new GmailnChecker_kango.NotImplementedException();}};GmailnChecker_kango.IBrowserTab=function(){};GmailnChecker_kango.IBrowserTab.prototype={getId:function(){throw new GmailnChecker_kango.NotImplementedException();},getUrl:function(){throw new GmailnChecker_kango.NotImplementedException();},getTitle:function(){throw new GmailnChecker_kango.NotImplementedException();},getDOMWindow:function(){throw new GmailnChecker_kango.NotImplementedException();},isActive:function(){throw new GmailnChecker_kango.NotImplementedException();},navigate:function(url){throw new GmailnChecker_kango.NotImplementedException();},dispatchMessage:function(name,data){throw new GmailnChecker_kango.NotImplementedException();}};

// Merged from D:\Work\Kango-Builds\kango-0.9.8-public\src\js\firefox\GmailnChecker_kango\browser.part.js

/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.WebProgressListener=function(callback){this._callback=callback;};GmailnChecker_kango.WebProgressListener.prototype={_callback:null,QueryInterface:function(aIID){if(aIID.equals(Components.interfaces.nsIWebProgressListener)||aIID.equals(Components.interfaces.nsISupportsWeakReference)||aIID.equals(Components.interfaces.nsISupports))
return this;throw Components.results.NS_NOINTERFACE;},onProgressChange:function(aWebProgress,aRequest,aCurSelfProgress,aMaxSelfProgress,aCurTotalProgress,aMaxTotalProgress){},onStatusChange:function(aWebProgress,aRequest,aStatus,aMessage){},onSecurityChange:function(aWebProgress,aRequest,aState){},onLocationChange:function(aProgress,aRequest,aLocation){},onStateChange:function(aWebProgress,aRequest,aStateFlags,aStatus){var nsIWebProgressListener=Components.interfaces.nsIWebProgressListener;if(aStateFlags&nsIWebProgressListener.STATE_START&&aStateFlags&nsIWebProgressListener.STATE_IS_DOCUMENT){var nsIChannel=Components.interfaces.nsIChannel;var event={url:aRequest.QueryInterface(nsIChannel).originalURI.spec,window:aWebProgress.DOMWindow,document:aWebProgress.DOMWindow.document};this._callback(event);}}};GmailnChecker_kango.Browser=function(){this.superclass.apply(this,arguments);this._lastTabId=0;this._webProgressListener=new GmailnChecker_kango.WebProgressListener(GmailnChecker_kango.lang.bind(this._onPageBeforeNavigate,this));GmailnChecker_kango.addEventListener(GmailnChecker_kango.event.Ready,GmailnChecker_kango.lang.bind(this._subscribeEvents,this));};GmailnChecker_kango.Browser.prototype=GmailnChecker_kango.oop.extend(GmailnChecker_kango.BrowserBase,{_webProgressListener:null,_lastTabId:0,_generateTabId:function(){return this._lastTabId++;},_subscribeEvents:function(){document.getElementById('appcontent').addEventListener('DOMContentLoaded',GmailnChecker_kango.lang.bind(this._onPageLoad,this),true);gBrowser.addProgressListener(this._webProgressListener);gBrowser.tabContainer.addEventListener('TabSelect',GmailnChecker_kango.lang.bind(this._onTabSelect,this),false);gBrowser.tabContainer.addEventListener('TabOpen',GmailnChecker_kango.lang.bind(this._onTabOpen,this),false);gBrowser.tabContainer.addEventListener('TabClose',GmailnChecker_kango.lang.bind(this._onTabClose,this),false);},_onPageBeforeNavigate:function(event){if(!event.document.defaultView.frameElement){var win=event.document.defaultView.top;this.fireEvent(this.event.BeforeNavigate,{url:event.url,target:this.getTab(win)});}},_onPageLoad:function(event){var doc=event.originalTarget;if(doc instanceof HTMLDocument){var win=doc.defaultView;var e={url:doc.URL||'',title:doc.title||'',target:this.getTab(win)};if(!doc.defaultView.frameElement){this.fireEvent(this.event.DocumentComplete,e);}
e.window=win;this.fireEvent('DOMContentLoaded',e);}},_onTabSelect:function(event){var win=gBrowser.getBrowserForTab(event.target).contentWindow
var doc=win.document;var tab=this.getTab(win);this.fireEvent(this.event.TabChanged,{url:doc.URL||'',title:doc.title||'',target:tab,tabId:tab.getId()});},_onTabOpen:function(event){var tab=this.getTab(gBrowser.getBrowserForTab(event.target).contentWindow);this.fireEvent(this.event.TabCreated,{target:tab,tabId:tab.getId()});},_onTabClose:function(event){this.fireEvent(this.event.TabRemoved,{tabId:this._getTabId(gBrowser.getBrowserForTab(event.target).contentWindow)});},_getTabId:function(win){var propertyName="GmailnChecker_kangoTabId_"+GmailnChecker_kango.getExtensionInfo().id;return win[propertyName]=win[propertyName]||this._generateTabId();},getTabBrowsers:function(){return[gBrowser];},getTabs:function(tabbrowser){var result=[];var tabContainer=tabbrowser.tabContainer;for(var i=0;i<tabContainer.childNodes.length;i++){result.push(GmailnChecker_kango.browser.getTab(gBrowser.getBrowserForTab(tabContainer.childNodes[i]).contentWindow));}
return result;},getTab:function(win){return new GmailnChecker_kango.BrowserTab(win,this._getTabId(win));},getName:function(){return'firefox';},tabs:{getAll:function(callback){var result=[];var tabBrowsers=GmailnChecker_kango.browser.getTabBrowsers();for(var i=0;i<tabBrowsers.length;i++){result=result.concat(GmailnChecker_kango.browser.getTabs(tabBrowsers[i]))}
callback(result);},getCurrent:function(callback){GmailnChecker_kango.browser.windows.getCurrent(function(win){win.getCurrentTab(function(tab){callback(tab);});});},create:function(details){var focused=typeof details.focused=='undefined'||details.focused;var reuse=typeof details.reuse!='undefined'&&details.reuse;var tab=null;if(reuse){for(var i=0;i<gBrowser.browsers.length;i++){var currentBrowser=gBrowser.getBrowserAtIndex(i);if(currentBrowser.currentURI.spec==details.url){tab=gBrowser.tabContainer.childNodes[i];break;}}}
if(tab==null){tab=gBrowser.addTab(details.url);}
if(focused){gBrowser.selectedTab=tab;}}},windows:{getAll:function(callback){this.getCurrent(function(win){callback([win]);});},getCurrent:function(callback){callback(new GmailnChecker_kango.BrowserWindow(gBrowser));},create:function(details){window.open(details.url);}},getTabProxyForWindow:function(win){var proxyName="GmailnChecker_kangoTabProxy_"+GmailnChecker_kango.getExtensionInfo().id;if(typeof win[proxyName]=='undefined'){win[proxyName]=new GmailnChecker_kango.TabProxy(this.getTab(win));}
return win[proxyName];}});GmailnChecker_kango.BrowserWindow=function(tabbrowser){this._tabbrowser=tabbrowser;};GmailnChecker_kango.BrowserWindow.prototype=GmailnChecker_kango.oop.extend(GmailnChecker_kango.IBrowserWindow,{_tabbrowser:null,getTabs:function(callback){callback(GmailnChecker_kango.browser.getTabs(this._tabbrowser));},getCurrentTab:function(callback){var tabContainer=this._tabbrowser.tabContainer;var tab=null;for(var i=0;i<tabContainer.childNodes.length;i++){tab=tabContainer.childNodes[i];if(tab.selected){break;}}
callback(GmailnChecker_kango.browser.getTab(gBrowser.getBrowserForTab(tab).contentWindow));},isActive:function(){return true;}});GmailnChecker_kango.BrowserTab=function(win,id){this._win=win;this._id=id;this._tab=this._getTabFromWindow(win);};GmailnChecker_kango.BrowserTab.prototype=GmailnChecker_kango.oop.extend(GmailnChecker_kango.IBrowserTab,{_tab:null,_id:null,_win:null,_getTabFromWindow:function(win){var targetBrowserIndex=gBrowser.getBrowserIndexForDocument(win.top.document);if(targetBrowserIndex!=-1){return gBrowser.tabContainer.childNodes[targetBrowserIndex];}
return null},getId:function(){return this._id;},getUrl:function(){var url='';try{url=this.getDOMWindow().document.URL||'';}
catch(e){}
return url;},getTitle:function(){var title='';try{title=this.getDOMWindow().document.title;}
catch(e){}
return title;},getDOMWindow:function(){return this._win.wrappedJSObject;},isActive:function(){return this._tab.selected;},navigate:function(url){gBrowser.getBrowserForTab(this._tab).setAttribute('src',url);},dispatchMessage:function(name,data){var event={name:name,data:data,origin:'tab',source:GmailnChecker_kango,target:GmailnChecker_kango};GmailnChecker_kango.browser.getTabProxyForWindow(this._win).fireEvent('message',event);}});GmailnChecker_kango.browser=new GmailnChecker_kango.Browser();