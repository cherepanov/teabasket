﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.BrowserBase=function(){kango.oop.mixin(this,kango.EventTarget.prototype);kango.oop.mixin(this,new kango.EventTarget());};kango.BrowserBase.prototype={event:{DocumentComplete:'DocumentComplete',BeforeNavigate:'BeforeNavigate',TabChanged:'TabChanged',TabCreated:'TabCreated',TabRemoved:'TabRemoved'},getName:function(){throw new kango.NotImplementedException();},tabs:{getAll:function(callback){var result=[];var windowsProcessedCount=0;kango.browser.windows.getAll(function(wins){for(var i=0;i<wins.length;i++){wins[i].getTabs(function(tabs){result.push.apply(result,tabs);if(++windowsProcessedCount==wins.length)callback(result);});}
if(wins.length==0)callback(result);});},getCurrent:function(callback){kango.browser.windows.getCurrent(function(win){win.getCurrentTab(function(tab){callback(tab);});});},create:function(details){throw new kango.NotImplementedException();}},windows:{getAll:function(callback){throw new kango.NotImplementedException();},getCurrent:function(callback){throw new kango.NotImplementedException();},create:function(details){throw new kango.NotImplementedException();}}};kango.IBrowserWindow=function(){};kango.IBrowserWindow.prototype={getTabs:function(callback){throw new kango.NotImplementedException();},getCurrentTab:function(callback){throw new kango.NotImplementedException();},isActive:function(){throw new kango.NotImplementedException();}};kango.IBrowserTab=function(){};kango.IBrowserTab.prototype={getId:function(){throw new kango.NotImplementedException();},getUrl:function(){throw new kango.NotImplementedException();},getTitle:function(){throw new kango.NotImplementedException();},getDOMWindow:function(){throw new kango.NotImplementedException();},isActive:function(){throw new kango.NotImplementedException();},navigate:function(url){throw new kango.NotImplementedException();},dispatchMessage:function(name,data){throw new kango.NotImplementedException();}};

// Merged from /home/ac/IdeaProjects/teabasket/kango/src/js/chrome/kango/browser.part.js

/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.Browser=function(){this.superclass.apply(this,arguments);chrome.tabs.onActiveChanged.addListener(kango.lang.bind(this._onTabChanged,this));chrome.tabs.onCreated.addListener(kango.lang.bind(this._onTabCreated,this));chrome.tabs.onRemoved.addListener(kango.lang.bind(this._onTabRemoved,this));chrome.webNavigation.onBeforeNavigate.addListener(kango.lang.bind(this._onBeforeNavigate,this));chrome.webNavigation.onDOMContentLoaded.addListener(kango.lang.bind(this._onDOMContentLoaded,this));};kango.Browser.prototype=kango.oop.extend(kango.BrowserBase,{_onBeforeNavigate:function(details){if(details.frameId==0){var self=this;chrome.tabs.get(details.tabId,function(tab){if(typeof tab!='undefined'){var event={url:details.url,target:new kango.BrowserTab(tab)};self.fireEvent(self.event.BeforeNavigate,event);}});}},_onDOMContentLoaded:function(details){if(details.frameId==0){var self=this;chrome.tabs.get(details.tabId,function(tab){if(typeof tab!='undefined'){var event={url:details.url,title:tab.title,target:new kango.BrowserTab(tab)};self.fireEvent(self.event.DocumentComplete,event);}});}},_onTabCreated:function(tab){this.fireEvent(this.event.TabCreated,{tabId:tab.id,target:new kango.BrowserTab(tab)});},_onTabRemoved:function(tabId,removeInfo){this.fireEvent(this.event.TabRemoved,{tabId:tabId});},_onTabChanged:function(tabId,selectInfo){var self=this;chrome.tabs.get(tabId,function(tab){if(typeof tab!='undefined'){var event={url:tab.url,title:tab.title,tabId:tabId,target:new kango.BrowserTab(tab)};self.fireEvent(self.event.TabChanged,event);}});},getName:function(){return'chrome';},windows:{getAll:function(callback){chrome.windows.getAll({populate:false},function(wins){callback(kango.array.map(wins,function(item){return new kango.BrowserWindow(item);}));});},getCurrent:function(callback){chrome.windows.getCurrent(function(win){callback(new kango.BrowserWindow(win));});},create:function(details){chrome.windows.create({url:details.url,type:details.type,width:details.width,height:details.height});}},tabs:{getAll:function(callback){chrome.tabs.query({windowType:'normal'},function(tabs){callback(kango.array.map(tabs,function(item){return new kango.BrowserTab(item);}));})},getCurrent:function(callback){chrome.windows.getCurrent(function(win){chrome.tabs.getSelected(win.windowId,function(tab){callback(new kango.BrowserTab(tab));});});},create:function(details){var focused=(typeof details.focused!='undefined')?details.focused:true;chrome.tabs.create({url:details.url,active:focused});}}});kango.BrowserWindow=function(win){this._window=win;};kango.BrowserWindow.prototype=kango.oop.extend(kango.IBrowserWindow,{_window:null,getTabs:function(callback){chrome.tabs.getAllInWindow(this._window.windowId,function(tabs){callback(kango.array.map(tabs,function(item){return new kango.BrowserTab(item);}));});},getCurrentTab:function(callback){chrome.tabs.getSelected(this._window.windowId,function(tab){callback(new kango.BrowserTab(tab));});},isActive:function(){return this._window.focused;}});kango.BrowserTab=function(tab){this._tab=tab;};kango.BrowserTab.prototype=kango.oop.extend(kango.IBrowserTab,{_tab:null,getId:function(){return this._tab.id;},getUrl:function(){return this._tab.url;},getTitle:function(){return this._tab.title;},getDOMWindow:function(){return null;},isActive:function(){return this._tab.active;},navigate:function(url){chrome.tabs.update(this._tab.id,{url:url});},dispatchMessage:function(name,data){var event={name:name,data:data,origin:'background',target:null,source:null};chrome.tabs.sendRequest(this._tab.id,event,function(){});}});kango.browser=new kango.Browser();