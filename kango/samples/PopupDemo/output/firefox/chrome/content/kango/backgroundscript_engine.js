/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.BackgroundScriptEngine=function(){};PopupDemo_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(target){var self=this;this._sandbox=PopupDemo_kango.lang.createHTMLSandbox('background.html',function(win){self._initScripts(win,target);});},getContext:function(){return this._window;},_initScripts:function(win,target){this._window=win;win['kango']=target;var doc=win.document;var background_scripts=PopupDemo_kango.getExtensionInfo().background_scripts;if(typeof background_scripts!='undefined'){var currentScriptIdx=0;var loadNextScript=function(){var script=doc.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src',PopupDemo_kango.io.getExtensionFileUrl(background_scripts[currentScriptIdx]));var onload=function(){currentScriptIdx++;if(currentScriptIdx<background_scripts.length){loadNextScript();}};if(typeof script.onreadystatechange!='undefined'){script.onreadystatechange=function(){if(script.readyState=='complete'){onload();}}}
else{script.onload=onload}
doc.body.appendChild(script);};loadNextScript();}}};PopupDemo_kango.BackgroundScriptModule=function(){};PopupDemo_kango.BackgroundScriptModule.prototype.init=function(target){PopupDemo_kango.backgroundScript=new PopupDemo_kango.BackgroundScriptEngine();PopupDemo_kango.addEventListener(PopupDemo_kango.event.Ready,function(){PopupDemo_kango.backgroundScript.init(target);});};PopupDemo_kango.registerModule(PopupDemo_kango.BackgroundScriptModule);