﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.ui.BrowserButton=function(details){this.superclass.apply(this,arguments);var self=this;safari.application.addEventListener('command',function(){self._onClicked()},false);safari.application.addEventListener('popover',function(){var button=self._getButton();if(button!=null){button.popover.contentWindow.location.reload();}},true);this._initDetails(details);};kango.ui.BrowserButton.prototype=kango.oop.extend(kango.ui.ButtonBase,{_popupHostUrl:'kango-ui/remote_popup_host.html',_popupDetails:null,_id:'kango-ui-button',_getButton:function(){var items=safari.extension.toolbarItems;for(var i=0;i<items.length;i++){if(items[i].identifier==this._id){return items[i];}}
return null;},_removePopup:function(){var button=this._getButton();button.popover=null;safari.extension.removePopover('kango-ui-popup');button.command='KangoButtonCommand';},setTooltipText:function(text){this._getButton().toolTip=text.replace(/\n/g,'; ').replace(/\r/g,'');},setCaption:function(text){},setIcon:function(path){this._getButton().image=safari.extension.baseURI+path;},setBadgeValue:function(val){if(val!=null){this._getButton().badge=parseInt(val,10);}},setBadgeBackgroundColor:function(color){},setPopup:function(details){this._popupDetails=details;var button=this._getButton();if(details!=null&&kango.lang.isString(details.url)){var url='';var height=details.height;var width=details.width;if(details!=null&&kango.lang.isString(details.url)){if(kango.io.isLocalUrl(details.url)){url=details.url;}
else{url=this._popupHostUrl;height+=4;}}
this._removePopup();button.popover=safari.extension.createPopover('kango-ui-popup',safari.extension.baseURI+url,width,height);button.command=null;button.popover.width=details.width;button.popover.height=height;}
else{this._removePopup();}},closePopup:function(){var button=this._getButton();if(button!=null&&button.popover!=null){button.popover.hide();}},getPopupDetails:function(){return this._popupDetails;},setContextMenu:function(){},_onClicked:function(){return this.fireEvent(this.event.Command);},_initDetails:function(details){if(kango.lang.isObject(details)){if(kango.lang.isString(details.icon)){this.setIcon(details.icon);}
if(kango.lang.isString(details.caption)){this.setCaption(details.caption);}
if(kango.lang.isString(details.tooltipText)){this.setTooltipText(details.tooltipText);}
if(kango.lang.isObject(details.popup)){this.setPopup(details.popup);}
else{var button=this._getButton();button.command='KangoButtonCommand';button.popover=null;}}}});