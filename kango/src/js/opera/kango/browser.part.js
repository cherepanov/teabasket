/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.Browser=function(){this.superclass.apply(this,arguments);opera.extension.tabs.addEventListener('focus',kango.lang.bind(this._onTabFocus,this),false);opera.extension.tabs.addEventListener('close',kango.lang.bind(this._onTabClose,this),false);opera.extension.tabs.addEventListener('create',kango.lang.bind(this._onTabCreate,this),false);var self=this;kango.addEventListener(kango.event.Ready,function(){kango.addMessageListener('KangoBrowser_DOMContentLoaded',function(event){self._onDOMContentLoaded(event.target,event.data);});kango.addMessageListener('KangoBrowser_BeforeNavigate',function(event){self._onBeforeNavigate(event.target,event.data);});});};kango.Browser.prototype=kango.oop.extend(kango.BrowserBase,{_onBeforeNavigate:function(target,data){var event={url:data.url,target:target};this.fireEvent(this.event.BeforeNavigate,event);},_onDOMContentLoaded:function(target,data){var event={url:data.url,title:data.title,target:target};this.fireEvent(this.event.DocumentComplete,event);},_onTabFocus:function(event){if(typeof event.tab!='undefined'){var tab=event.tab;this.fireEvent(this.event.TabChanged,{url:tab.url||'',title:tab.title||'',tabId:tab.id,target:new kango.BrowserTab(tab)});}},_onTabCreate:function(event){if(typeof event.tab!='undefined'){this.fireEvent(this.event.TabCreated,{tabId:event.tab.id,target:new kango.BrowserTab(event.tab)});}},_onTabClose:function(event){if(typeof event.tab!='undefined'){this.fireEvent(this.event.TabRemoved,{tabId:event.tab.id});}},getName:function(){return'opera';},tabs:{getAll:function(callback){var result=[];var tabs=opera.extension.tabs.getAll();for(var i=0;i<tabs.length;i++){if(tabs[i].url){result.push(new kango.BrowserTab(tabs[i]));}}
callback(result);},getCurrent:function(callback){var tab=opera.extension.tabs.getSelected();if(tab!=null){callback(new kango.BrowserTab(tab));}},create:function(details){var focused=(typeof details.focused!='undefined')?details.focused:true;opera.extension.tabs.create({url:details.url,focused:focused});}},windows:{getAll:function(callback){callback(kango.array.map(opera.extension.windows.getAll(),function(item){return new kango.BrowserWindow(item);}));},getCurrent:function(callback){var win=opera.extension.windows.getLastFocused();if(win!=null){callback(new kango.BrowserWindow(win));}},create:function(details){opera.extension.windows.create().tabs[0].url=details.url;}},getTabFromUrl:function(url){var tab=opera.extension.tabs.getFocused();if(tab==null||tab.url!=url){var wins=opera.extension.windows.getAll();for(var i=0;i<wins.length;i++){var tabs=wins[i].tabs.getAll();for(var j=0;j<tabs.length;j++){if(tabs[j].url==url){tab=tabs[j];if(tabs[j].focused){break;}}}}}
return new kango.BrowserTab(tab)}});kango.BrowserWindow=function(win){this._window=win;};kango.BrowserWindow.prototype=kango.oop.extend(kango.IBrowserWindow,{_window:null,getTabs:function(callback){var result=[];var tabs=this._window.tabs.getAll();if(tabs!=null){for(var i=0;i<tabs.length;i++){if(tabs[i].url){result.push(new kango.BrowserTab(tabs[i]));}}}
callback(result);},getCurrentTab:function(callback){var tab=this._window.tabs.getSelected();if(tab!=null){callback(new kango.BrowserTab(tab));}},isActive:function(){return this._window.focused;}});kango.BrowserTab=function(tab){this._tab=tab;};kango.BrowserTab.prototype=kango.oop.extend(kango.IBrowserTab,{_tab:null,getId:function(){return this._tab.id;},getUrl:function(){return this._tab.url||'';},getTitle:function(){return this._tab.title||'';},getDOMWindow:function(){return null;},isActive:function(){return this._tab.focused;},navigate:function(url){this.dispatchMessage('KangoBrowser_navigate',url);},dispatchMessage:function(name,data){try{this._tab.postMessage(JSON.stringify({name:name,data:data}));}
catch(e){kango.console.log('Error during tab.postMessage');}}});kango.browser=new kango.Browser();