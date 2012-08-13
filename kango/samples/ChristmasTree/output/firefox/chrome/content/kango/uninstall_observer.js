/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using ChristmasTree_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
ChristmasTree_kango.UninstallObserver={init:function(){this.register();},observe:function(subject,topic,data){var objExtensionItem=subject.QueryInterface(Components.interfaces.nsIUpdateItem);if(data=='item-uninstalled'){if(objExtensionItem.id==ChristmasTree_kango.getExtensionInfo().id){ChristmasTree_kango.fireEvent(ChristmasTree_kango.event.Uninstall);}}},register:function(){var observerService=Components.classes['@mozilla.org/observer-service;1'].getService(Components.interfaces.nsIObserverService);observerService.addObserver(this,'em-action-requested',false);},unregister:function(){var observerService=Components.classes['@mozilla.org/observer-service;1'].getService(Components.interfaces.nsIObserverService);observerService.removeObserver(this,'em-action-requested');}};ChristmasTree_kango.addEventListener(ChristmasTree_kango.event.Ready,function(){if(typeof AddonManager!='undefined'){AddonManager.addAddonListener({onUninstalling:function(addon,needsRestart){if(addon.id==ChristmasTree_kango.getExtensionInfo().id){ChristmasTree_kango.fireEvent(ChristmasTree_kango.event.Uninstall);}}});}
else{ChristmasTree_kango.UninstallObserver.init();}});