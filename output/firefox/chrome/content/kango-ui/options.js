/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeaBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeaBasket_kango.ui.OptionsPage=function(){var info=TeaBasket_kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=TeaBasket_kango.io.getExtensionFileUrl(info.options_page).toLowerCase();TeaBasket_kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=TeaBasket_kango;}});}};TeaBasket_kango.ui.OptionsPage.prototype=TeaBasket_kango.oop.extend(TeaBasket_kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
TeaBasket_kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});TeaBasket_kango.ui.optionsPage=new TeaBasket_kango.ui.OptionsPage();