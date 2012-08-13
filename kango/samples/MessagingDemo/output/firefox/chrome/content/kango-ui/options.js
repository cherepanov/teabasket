/*
Built using MessagingDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
MessagingDemo_kango.ui.OptionsPage=function(){var info=MessagingDemo_kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=MessagingDemo_kango.io.getExtensionFileUrl(info.options_page).toLowerCase();MessagingDemo_kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=MessagingDemo_kango;}});}};MessagingDemo_kango.ui.OptionsPage.prototype=MessagingDemo_kango.oop.extend(MessagingDemo_kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
MessagingDemo_kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});MessagingDemo_kango.ui.optionsPage=new MessagingDemo_kango.ui.OptionsPage();