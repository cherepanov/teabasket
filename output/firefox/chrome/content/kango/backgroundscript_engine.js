/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeeBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeeBasket_kango.BackgroundScriptEngine=function(){};TeeBasket_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(target){var self=this;this._sandbox=TeeBasket_kango.lang.createHTMLSandbox('background.html',function(win){self._initScripts(win,target);});},getContext:function(){return this._window;},_initScripts:function(win,target){this._window=win;win['kango']=target;var doc=win.document;var background_scripts=TeeBasket_kango.getExtensionInfo().background_scripts;if(typeof background_scripts!='undefined'){var currentScriptIdx=0;var loadNextScript=function(){var script=doc.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src',TeeBasket_kango.io.getExtensionFileUrl(background_scripts[currentScriptIdx]));var onload=function(){currentScriptIdx++;if(currentScriptIdx<background_scripts.length){loadNextScript();}};if(typeof script.onreadystatechange!='undefined'){script.onreadystatechange=function(){if(script.readyState=='complete'){onload();}}}
else{script.onload=onload}
doc.body.appendChild(script);};loadNextScript();}}};TeeBasket_kango.BackgroundScriptModule=function(){};TeeBasket_kango.BackgroundScriptModule.prototype.init=function(target){TeeBasket_kango.backgroundScript=new TeeBasket_kango.BackgroundScriptEngine();TeeBasket_kango.addEventListener(TeeBasket_kango.event.Ready,function(){TeeBasket_kango.backgroundScript.init(target);});};TeeBasket_kango.registerModule(TeeBasket_kango.BackgroundScriptModule);