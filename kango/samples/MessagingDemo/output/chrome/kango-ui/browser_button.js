/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.ui.BrowserButton=function(details){this.superclass.apply(this,arguments);var self=this;chrome.browserAction.onClicked.addListener(function(){self._onClicked();});this._initDetails(details);};kango.ui.BrowserButton.prototype=kango.oop.extend(kango.ui.ButtonBase,{_popupHostUrl:'kango-ui/remote_popup_host.html',_popupDetails:null,_onClicked:function(){return this.fireEvent(this.event.Command);},_initDetails:function(details){if(kango.lang.isObject(details)){if(kango.lang.isString(details.icon)){this.setIcon(details.icon);}
if(kango.lang.isString(details.caption)){this.setCaption(details.caption);}
if(kango.lang.isString(details.tooltipText)){this.setTooltipText(details.tooltipText);}
if(kango.lang.isObject(details.popup)){this.setPopup(details.popup);}}},setTooltipText:function(text){chrome.browserAction.setTitle({title:text.toString()});},setCaption:function(text){},setIcon:function(path){chrome.browserAction.setIcon({path:kango.io.getFileUrl(path)});},setBadgeValue:function(val){chrome.browserAction.setBadgeText({text:(val!=null&&val!=0)?val.toString():''});},setBadgeBackgroundColor:function(color){},setPopup:function(details){this._popupDetails=details;var url='';if(details!=null&&kango.lang.isString(details.url)){url=kango.io.isLocalUrl(details.url)?details.url:this._popupHostUrl;}
chrome.browserAction.setPopup({popup:url});},getPopupDetails:function(){return this._popupDetails;},setContextMenu:function(){}});