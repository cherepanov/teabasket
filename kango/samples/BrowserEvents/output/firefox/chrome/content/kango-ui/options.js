/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.ui.OptionsPage=function(){var info=BrowserEvents_kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=BrowserEvents_kango.io.getExtensionFileUrl(info.options_page).toLowerCase();BrowserEvents_kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=BrowserEvents_kango;}});}};BrowserEvents_kango.ui.OptionsPage.prototype=BrowserEvents_kango.oop.extend(BrowserEvents_kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
BrowserEvents_kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});BrowserEvents_kango.ui.optionsPage=new BrowserEvents_kango.ui.OptionsPage();