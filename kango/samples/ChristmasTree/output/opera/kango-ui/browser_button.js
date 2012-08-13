﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.ui.BrowserButton=function(details){this.superclass.apply(this,arguments);var self=this;var properties={disabled:false,title:'',icon:'',badge:{},popup:{},onclick:function(){self._onClicked();}};if(kango.lang.isObject(details)){if(kango.lang.isString(details.icon)){properties.icon=details.icon;}
if(kango.lang.isString(details.tooltipText)){properties.title=details.tooltipText;}}
this._button=opera.contexts.toolbar.createItem(properties);opera.contexts.toolbar.addItem(this._button);if(kango.lang.isObject(details)&&kango.lang.isObject(details.popup)){this.setPopup(details.popup);}};kango.ui.BrowserButton.prototype=kango.oop.extend(kango.ui.ButtonBase,{_button:null,_popupHostUrl:'kango-ui/remote_popup_host.html',_onClicked:function(){return this.fireEvent(this.event.Command);},setTooltipText:function(text){this._button.title=text;},setCaption:function(text){},setIcon:function(path){this._button.icon=kango.io.getFileUrl(path);},setBadgeValue:function(val){val=(val!=null&&val!=0)?val.toString():'';if(this._badgeText!=val){this._button.badge.textContent=val;}},setBadgeBackgroundColor:function(color){},setPopup:function(details){this._popupDetails=details;if(details!=null&&kango.lang.isString(details.url)){var url='';var height=details.height;if(details!=null&&kango.lang.isString(details.url)){if(kango.io.isLocalUrl(details.url)){url=details.url;}
else{details.url=this._popupHostUrl;height+=4;}}
this._button.popup.href=url;this._button.popup.width=details.width;this._button.popup.height=height;}
else{this._button.popup={};}},getPopupDetails:function(){return this._popupDetails;},setContextMenu:function(){}});