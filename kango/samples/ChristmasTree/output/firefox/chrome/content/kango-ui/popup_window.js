﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using ChristmasTree_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
var ChristmasTree_kango=null;var ChristmasTree_kangoPopup={_container:null,border_size:21,frameWidth:0,frameHeight:0,x:0,y:0,url:'',setConfig:function(config){this.url=config.url;this.frameWidth=config.width;this.frameHeight=config.height;this.x=config.x;this.y=config.y;},getFrame:function(){return document.getElementById('frame');},navigateFrame:function(url){this.getFrame().setAttribute('src',url);},initApiForFrame:function(){var self=this;this.getFrame().addEventListener('DOMContentLoaded',function(){(new XPCNativeWrapper(self.getFrame().contentWindow).wrappedJSObject)['kango']=ChristmasTree_kango;},true);},init:function(){var config=window.arguments[0].wrappedJSObject;ChristmasTree_kango=config['kango'];this.setConfig(config);this.initApiForFrame();this.navigateFrame(this.url);var outerSize=this.getOuterSize();window.resizeTo(outerSize.width,outerSize.height);this.magicMoveTo(this.x,this.y);},getOuterSize:function(){return{width:this.frameWidth+2*this.border_size,height:this.frameHeight+2*this.border_size};},getWindowRect:function(wnd){var rect=null;if(wnd.windowState==STATE_MAXIMIZED){rect={left:wnd.mozInnerScreenX,top:wnd.mozInnerScreenY,right:wnd.screenX+(wnd.mozInnerScreenX-wnd.screenX)+wnd.innerWidth,bottom:wnd.screenY+(wnd.mozInnerScreenY-wnd.screenY)+wnd.innerHeight};}
else{rect={left:wnd.screenX,top:wnd.mozInnerScreenY,right:wnd.screenX+wnd.outerWidth,bottom:wnd.screenY+wnd.outerHeight};}
rect.outerHeight=wnd.outerHeight;rect.outerWidth=wnd.outerWidth;return rect;},magicMoveTo:function(x,y){var defaultPinIndent=20;var halfPinWidth=8;var transparentSpaceHeight=7;var defaultRightIndent=5;var standartPos={x:x-defaultPinIndent-halfPinWidth,y:y-transparentSpaceHeight};var rcOpener=this.getWindowRect(window.opener);var overflow=rcOpener.right-standartPos.x-window.outerWidth+defaultRightIndent;if(overflow<0)
standartPos.x+=overflow;standartPos.x-=6;var additionalPinIndent=0;if(rcOpener.right-x<22)
additionalPinIndent=5+6;var pin=document.getElementById('pin');pin.left=(x-standartPos.x-halfPinWidth-additionalPinIndent)+'px';window.moveTo(standartPos.x,standartPos.y);}};window.addEventListener('load',function(){ChristmasTree_kangoPopup.init()},false);