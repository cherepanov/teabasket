/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using ChristmasTree_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
ChristmasTree_kango.ui.OptionsPage=function(){var info=ChristmasTree_kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var optionsUrl=this._optionsUrl=ChristmasTree_kango.io.getExtensionFileUrl(info.options_page).toLowerCase();ChristmasTree_kango.browser.addEventListener('DOMContentLoaded',function(event){if(event.url.toLowerCase().indexOf(optionsUrl)==0){event.window['kango']=ChristmasTree_kango;}});}};ChristmasTree_kango.ui.OptionsPage.prototype=ChristmasTree_kango.oop.extend(ChristmasTree_kango.ui.IOptionsPage,{_optionsUrl:'',open:function(hash){if(this._optionsUrl!=''){var url=this._optionsUrl;if(typeof hash!='undefined'){url+='#'+hash;}
ChristmasTree_kango.browser.tabs.create({url:url,focused:true,reuse:true});return true;}
return false;}});ChristmasTree_kango.ui.optionsPage=new ChristmasTree_kango.ui.OptionsPage();