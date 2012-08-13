/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.ui.OptionsPage=function(){var info=kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=kango.io.getExtensionFileUrl(info.options_page).toLowerCase();kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=kango;}});}};kango.ui.OptionsPage.prototype=kango.oop.extend(kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});kango.ui.optionsPage=new kango.ui.OptionsPage();