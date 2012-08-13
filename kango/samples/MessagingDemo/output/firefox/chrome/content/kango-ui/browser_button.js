/*
Built using MessagingDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
MessagingDemo_kango.ui.BrowserButton=function(details){if(this._getContainerElem()==null){this._insertButton();}
MessagingDemo_kango.ui.Button.call(this,document.getElementById(this._buttonId),details);};MessagingDemo_kango.ui.BrowserButton.prototype=MessagingDemo_kango.oop.extend(MessagingDemo_kango.ui.Button,{_buttonId:'MessagingDemo_kango-ui-browserButton',_containerId:'MessagingDemo_kango-ui-browserButton-container',_getContainerElem:function(){return document.getElementById(this._containerId);},_insertButton:function(){var afterId='search-container';var navBar=document.getElementById('nav-bar');var curSet=navBar.currentSet.split(',');if(curSet.indexOf(this._containerId)==-1){var pos=curSet.indexOf(afterId)+1||curSet.length;navBar.currentSet=curSet.slice(0,pos).concat(this._containerId).concat(curSet.slice(pos)).join(',');document.persist(navBar.id,'currentset');try{BrowserToolboxCustomizeDone(true);}
catch(e){}}}});