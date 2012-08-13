/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.ui.PopupOpenParams={url:'',width:0,height:0};GmailnChecker_kango.ui.Popup=function(){GmailnChecker_kango.oop.mixin(this,GmailnChecker_kango.EventTarget.prototype);GmailnChecker_kango.oop.mixin(this,new GmailnChecker_kango.EventTarget());};GmailnChecker_kango.ui.Popup.prototype={_popupWnd:null,open:function(params){if(params.url.indexOf('http')!=0){params.url=GmailnChecker_kango.io.getFileUrl(params.url.replace(GmailnChecker_kango.SCHEME,''));}
this.close();params['kango']=GmailnChecker_kango;this._popupWnd=window.openDialog('chrome://GmailnChecker_kango/content/kango-ui/popup_window.xul','','chrome=yes,dependent=yes,width='+params.width+',height='+params.height,{wrappedJSObject:params});var self=this;var loseFocuse=function(){window.removeEventListener('focus',loseFocuse,true);window.removeEventListener('unload',loseFocuse,true);self.close();};window.addEventListener('focus',loseFocuse,true);window.addEventListener('unload',loseFocuse,true);this._popupWnd.addEventListener('load',function(e){e.target.getElementById('frame').addEventListener('DOMContentLoaded',function(event){var win=event.target.defaultView.wrappedJSObject;self.fireEvent('PopupDocumentComplete',{'document':win.document,'window':win});},true);},true);},close:function(){if(this._popupWnd!=null){this._popupWnd.close();this._popupWnd=null;}}};