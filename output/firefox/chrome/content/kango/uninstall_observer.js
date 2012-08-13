/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeeBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeeBasket_kango.UninstallObserver={init:function(){this.register();},observe:function(subject,topic,data){var objExtensionItem=subject.QueryInterface(Components.interfaces.nsIUpdateItem);if(data=='item-uninstalled'){if(objExtensionItem.id==TeeBasket_kango.getExtensionInfo().id){TeeBasket_kango.fireEvent(TeeBasket_kango.event.Uninstall);}}},register:function(){var observerService=Components.classes['@mozilla.org/observer-service;1'].getService(Components.interfaces.nsIObserverService);observerService.addObserver(this,'em-action-requested',false);},unregister:function(){var observerService=Components.classes['@mozilla.org/observer-service;1'].getService(Components.interfaces.nsIObserverService);observerService.removeObserver(this,'em-action-requested');}};TeeBasket_kango.addEventListener(TeeBasket_kango.event.Ready,function(){if(typeof AddonManager!='undefined'){AddonManager.addAddonListener({onUninstalling:function(addon,needsRestart){if(addon.id==TeeBasket_kango.getExtensionInfo().id){TeeBasket_kango.fireEvent(TeeBasket_kango.event.Uninstall);}}});}
else{TeeBasket_kango.UninstallObserver.init();}});