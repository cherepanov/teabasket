﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.ui={};kango.oop.mixin(kango.ui,kango.EventTarget.prototype);kango.oop.mixin(kango.ui,new kango.EventTarget());kango.ui._init=function(){throw new kango.NotImplementedException();};kango.ui.event={Ready:'Ready'};kango.ui.ButtonBase=function(details){this._details=details;kango.oop.mixin(this,kango.EventTarget.prototype);kango.oop.mixin(this,new kango.EventTarget());};kango.ui.ButtonBase.prototype={_details:null,event:{Command:'command',PopupDocumentComplete:'PopupDocumentComplete'},setTooltipText:function(text){throw new kango.NotImplementedException();},setCaption:function(text){throw new kango.NotImplementedException();},setIcon:function(path){throw new kango.NotImplementedException();},setBadgeValue:function(val){throw new kango.NotImplementedException();},setBadgeBackgroundColor:function(color){throw new kango.NotImplementedException();},setPopup:function(details){throw new kango.NotImplementedException();},setContextMenu:function(){throw new kango.NotImplementedException();}};kango.addEventListener(kango.event.Ready,function(){kango.ui._init();});kango.ui.IOptionsPage=function(){};kango.ui.IOptionsPage.prototype={open:function(){throw new kango.NotImplementedException();}};

// Merged from /home/ac/Downloads/teabasket/kango/src/js/chrome opera safari/kango-ui/ui.part.js

/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.ui._init=function(){var browser_button=kango.getExtensionInfo().browser_button;if(kango.lang.isObject(browser_button)){kango.ui.browserButton=new kango.ui.BrowserButton(browser_button);}
return this.fireEvent(this.event.Ready);};