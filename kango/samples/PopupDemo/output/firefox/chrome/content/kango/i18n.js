﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.Internationalization=function(){};PopupDemo_kango.Internationalization.prototype={_messages:null,_currentLocale:'en',_defaultLocale:'en',_loadLocales:function(localeName){var info=PopupDemo_kango.getExtensionInfo();this._locales=info.locales||null;if(this._locales!=null){this._defaultLocale=info.default_locale||'en';this._currentLocale=(localeName!=null&&localeName!='')?localeName.slice(0,2).toLowerCase():this._defaultLocale;this._messages={};var messages=this._getLocaleMessages(this._currentLocale);if(messages!=null){this._messages[this._currentLocale]=messages;}
if(this._currentLocale!=this._defaultLocale){this._messages[this._defaultLocale]=this._getLocaleMessages(this._defaultLocale);}}},_getLocaleMessages:function(locale){var data=PopupDemo_kango.io.getExtensionFileContents('locales/'+locale+'.json');if(data!=null&&data!=''){return JSON.parse(data);}
return null;},init:function(localeName){this.setCurrentLocale(localeName);},setCurrentLocale:function(localeName){this._loadLocales(localeName);},getCurrentLocale:function(){return this._currentLocale;},getMessages:function(){if(this._messages!=null){return(typeof this._messages[this._currentLocale]!='undefined')?this._messages[this._currentLocale]:this._messages[this._defaultLocale];}
return null;},getMessage:function(message){var messages=this.getMessages();return(messages!=null&&typeof messages[message]!='undefined')?messages[message]:message;}};PopupDemo_kango.i18n=new PopupDemo_kango.Internationalization();

// Merged from D:\Work\Kango-Builds\kango-0.9.8-public\src\js\chrome opera safari firefox\PopupDemo_kango\i18n.part.js

/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.i18n.init(window.navigator.userLanguage||window.navigator.language||null);