/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.ui.OptionsPage=function(){var info=GmailnChecker_kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=GmailnChecker_kango.io.getExtensionFileUrl(info.options_page).toLowerCase();GmailnChecker_kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=GmailnChecker_kango;}});}};GmailnChecker_kango.ui.OptionsPage.prototype=GmailnChecker_kango.oop.extend(GmailnChecker_kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
GmailnChecker_kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});GmailnChecker_kango.ui.optionsPage=new GmailnChecker_kango.ui.OptionsPage();