﻿/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.ui={};BrowserEvents_kango.oop.mixin(BrowserEvents_kango.ui,BrowserEvents_kango.EventTarget.prototype);BrowserEvents_kango.oop.mixin(BrowserEvents_kango.ui,new BrowserEvents_kango.EventTarget());BrowserEvents_kango.ui._init=function(){throw new BrowserEvents_kango.NotImplementedException();};BrowserEvents_kango.ui.event={Ready:'Ready'};BrowserEvents_kango.ui.ButtonBase=function(details){this._details=details;BrowserEvents_kango.oop.mixin(this,BrowserEvents_kango.EventTarget.prototype);BrowserEvents_kango.oop.mixin(this,new BrowserEvents_kango.EventTarget());};BrowserEvents_kango.ui.ButtonBase.prototype={_details:null,event:{Command:'command',PopupDocumentComplete:'PopupDocumentComplete'},setTooltipText:function(text){throw new BrowserEvents_kango.NotImplementedException();},setCaption:function(text){throw new BrowserEvents_kango.NotImplementedException();},setIcon:function(path){throw new BrowserEvents_kango.NotImplementedException();},setBadgeValue:function(val){throw new BrowserEvents_kango.NotImplementedException();},setBadgeBackgroundColor:function(color){throw new BrowserEvents_kango.NotImplementedException();},setPopup:function(details){throw new BrowserEvents_kango.NotImplementedException();},setContextMenu:function(){throw new BrowserEvents_kango.NotImplementedException();}};BrowserEvents_kango.addEventListener(BrowserEvents_kango.event.Ready,function(){BrowserEvents_kango.ui._init();});BrowserEvents_kango.ui.IOptionsPage=function(){};BrowserEvents_kango.ui.IOptionsPage.prototype={open:function(){throw new BrowserEvents_kango.NotImplementedException();}};

// Merged from D:\Work\Kango-Builds\kango-0.9.8-public\src\js\firefox\kango-ui\ui.part.js

/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.ui.Button=function(element,details){BrowserEvents_kango.ui.ButtonBase.call(this,details);this._element=element;this._popup=new BrowserEvents_kango.ui.Popup();this._popupDetails=null;this._icon='';this._badgeText='';this._badgeBackgroundColor=this._badgeDefaultBackgroundColor;this._image=null;var self=this;this._element.addEventListener('command',function(e){self._onCommand(e);},false);this._popup.addEventListener('PopupDocumentComplete',function(e){self._onPopupDocumentComplete(e);});this._initDetails(details);};BrowserEvents_kango.ui.Button.prototype=BrowserEvents_kango.oop.extend(BrowserEvents_kango.ui.ButtonBase,{_element:null,_popup:null,_popupDetails:null,_icon:null,_badgeBackgroundColor:null,_badgeDefaultBackgroundColor:[45,2,180,255],_badgeText:'',_image:null,_initDetails:function(details){if(BrowserEvents_kango.lang.isObject(details)){if(BrowserEvents_kango.lang.isString(details.icon)){this.setIcon(details.icon);}
if(BrowserEvents_kango.lang.isString(details.caption)){this.setCaption(details.caption);}
if(BrowserEvents_kango.lang.isString(details.tooltipText)){this.setTooltipText(details.tooltipText);}
if(BrowserEvents_kango.lang.isObject(details.popup)){this._popupDetails=details.popup;}}},_onCommand:function(event){if(event.target.id==this._element.id){if(this._popupDetails!=null){var rect=this._element.getBoundingClientRect();var x=parseInt(this._element.boxObject.screenX+rect.width/2,10);var y=parseInt(this._element.boxObject.screenY+rect.height,10);this._popup.open({url:this._popupDetails.url,width:parseInt(this._popupDetails.width,10),height:parseInt(this._popupDetails.height,10),x:x,y:y});}
else{this.fireEvent(this.event.Command);}}},_onPopupDocumentComplete:function(e){this.fireEvent(this.event.PopupDocumentComplete,e);},_update:function(){function roundedRect(ctx,x,y,width,height,radius,fillColor){ctx.beginPath();ctx.moveTo(x,y+radius);ctx.lineTo(x,y+height-radius);ctx.quadraticCurveTo(x,y+height,x+radius,y+height);ctx.lineTo(x+width-radius,y+height);ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);ctx.lineTo(x+width,y+radius);ctx.quadraticCurveTo(x+width,y,x+width-radius,y);ctx.lineTo(x+radius,y);ctx.quadraticCurveTo(x,y,x,y+radius);ctx.fillStyle=fillColor;ctx.fill();}
var elem=this._element;if(this._image!=null){this._image.onload=function(){};delete this._image;this._image=null;}
var img=this._image=new Image();var self=this;var onloadHandler=function(){var marginLeft=-4;var imageWidth=img.width;var imageHeight=img.height;if(imageWidth>19||imageHeight>19){imageWidth=imageHeight=19;}
var canvas=document.getElementById('BrowserEvents_kango-ui-canvas');var context=canvas.getContext('2d');if(self._badgeText!=''){var textHeight=11;var font='bold '+textHeight+'px Tahoma,arial,helvetica,sans-serif';context.font=font;canvas.width=19;canvas.height=19;var textWidth=Math.round(context.measureText(self._badgeText).width);canvas.width=imageWidth+textWidth+2;canvas.height=imageHeight;context.drawImage(img,0,0,imageWidth,imageHeight);var backgroundColor='rgba('+self._badgeBackgroundColor[0]+', '+self._badgeBackgroundColor[1]+', '+self._badgeBackgroundColor[2]+', '+self._badgeBackgroundColor[3]/255+')';roundedRect(context,imageWidth+marginLeft,imageHeight-textHeight-1,textWidth+6,textHeight+1,4,backgroundColor);context.font=font;context.textBaseline='top';context.fillStyle='white';context.fillText(self._badgeText,imageWidth+marginLeft+2,imageHeight-textHeight);}
else{canvas.width=imageWidth;canvas.height=imageHeight;context.drawImage(img,0,0,imageWidth,imageHeight);}
elem.image=canvas.toDataURL('image/png');};var onloadCrutchHandler=function(){if(self._image!=null){if(self._image.complete){onloadHandler();}
else{window.setTimeout(onloadCrutchHandler,10);}}};img.onload=onloadCrutchHandler;img.src=this._icon;},setTooltipText:function(text){this._element.setAttribute('tooltiptext',text);},setCaption:function(text){this._element.label=text;},setIcon:function(url){var path=url;if(url.indexOf(BrowserEvents_kango.SCHEME)==0||url.indexOf('http://')!=0||url.indexOf('https://')!=0){if(url!=''){path=BrowserEvents_kango.io.getExtensionFileUrl(url.replace(BrowserEvents_kango.SCHEME,''));}
else{this._element.removeAttribute('image');path='';}}
if(this._icon!=path){this._icon=path;this._update();}},setBadgeValue:function(val){val=(val!=null&&val!=0)?val.toString():'';if(this._badgeText!=val){this._badgeText=val;this._update();}},setBadgeBackgroundColor:function(color){if(color!=null&&BrowserEvents_kango.lang.isArray(color)&&color.length>=4){this._badgeBackgroundColor=color;this._update();}},setPopup:function(details){this._popupDetails=details;},closePopup:function(){this._popup.close();},setContextMenu:function(itemName,callback){var button=this._element;var menupopup=document.createElement('menupopup');var popupId=button.id+'-menu';menupopup.setAttribute('id',popupId);button.appendChild(menupopup);var itemElem=document.createElement('menuitem');itemElem.setAttribute('label',itemName);itemElem.addEventListener('command',function(e){callback();e.preventDefault();},false);menupopup.appendChild(itemElem);this._element.addEventListener('contextmenu',function(e){menupopup.openPopup(button,'after_start',0,0,true,false);e.preventDefault();},false);}});BrowserEvents_kango.ui._init=function(){var toolbar=BrowserEvents_kango.getExtensionInfo().toolbar;if(BrowserEvents_kango.lang.isObject(toolbar)){BrowserEvents_kango.ui.toolbar=new BrowserEvents_kango.ui.Toolbar();}
var browser_button=BrowserEvents_kango.getExtensionInfo().browser_button;if(BrowserEvents_kango.lang.isObject(browser_button)){BrowserEvents_kango.ui.browserButton=new BrowserEvents_kango.ui.BrowserButton(browser_button);}
return this.fireEvent(this.event.Ready);};BrowserEvents_kango.ui.popup={};BrowserEvents_kango.ui.popup.close=function(win){BrowserEvents_kango.ui.browserButton.closePopup();};