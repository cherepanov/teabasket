/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.ui.OptionsPage=function(){var info=PopupDemo_kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=PopupDemo_kango.io.getExtensionFileUrl(info.options_page).toLowerCase();PopupDemo_kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=PopupDemo_kango;}});}};PopupDemo_kango.ui.OptionsPage.prototype=PopupDemo_kango.oop.extend(PopupDemo_kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
PopupDemo_kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});PopupDemo_kango.ui.optionsPage=new PopupDemo_kango.ui.OptionsPage();