/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.ui.PopupOpenParams={url:'',width:0,height:0};PopupDemo_kango.ui.Popup=function(){PopupDemo_kango.oop.mixin(this,PopupDemo_kango.EventTarget.prototype);PopupDemo_kango.oop.mixin(this,new PopupDemo_kango.EventTarget());};PopupDemo_kango.ui.Popup.prototype={_popupWnd:null,open:function(params){if(params.url.indexOf('http')!=0){params.url=PopupDemo_kango.io.getFileUrl(params.url.replace(PopupDemo_kango.SCHEME,''));}
this.close();params['kango']=PopupDemo_kango;this._popupWnd=window.openDialog('chrome://PopupDemo_kango/content/kango-ui/popup_window.xul','','chrome=yes,dependent=yes,width='+params.width+',height='+params.height,{wrappedJSObject:params});var self=this;var loseFocuse=function(){window.removeEventListener('focus',loseFocuse,true);window.removeEventListener('unload',loseFocuse,true);self.close();};window.addEventListener('focus',loseFocuse,true);window.addEventListener('unload',loseFocuse,true);this._popupWnd.addEventListener('load',function(e){e.target.getElementById('frame').addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;self.fireEvent('PopupDocumentComplete',{'document':win.document,'window':win});},true);},true);},close:function(){if(this._popupWnd!=null){this._popupWnd.close();this._popupWnd=null;}}};