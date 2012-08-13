/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeeBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeeBasket_kango.ui.OptionsPage=function(){var info=TeeBasket_kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=TeeBasket_kango.io.getExtensionFileUrl(info.options_page).toLowerCase();TeeBasket_kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=TeeBasket_kango;}});}};TeeBasket_kango.ui.OptionsPage.prototype=TeeBasket_kango.oop.extend(TeeBasket_kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
TeeBasket_kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});TeeBasket_kango.ui.optionsPage=new TeeBasket_kango.ui.OptionsPage();