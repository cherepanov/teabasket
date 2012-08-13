/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using Kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
kango.ui.OptionsPage=function(){};kango.ui.OptionsPage.prototype=kango.oop.extend(kango.ui.IOptionsPage,{open:function(hash){var info=kango.getExtensionInfo();if(typeof info.options_page!='undefined'){var url=kango.io.getExtensionFileUrl(info.options_page);if(typeof hash!='undefined'){url+='#'+hash;}
kango.browser.tabs.create({url:url,focused:true});return true;}
return false;}});kango.ui.optionsPage=new kango.ui.OptionsPage();