/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeaBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeaBasket_kango.BackgroundScriptEngine=function(){};TeaBasket_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(target){var self=this;this._sandbox=TeaBasket_kango.lang.createHTMLSandbox('background.html',function(win){self._initScripts(win,target);});},getContext:function(){return this._window;},_initScripts:function(win,target){this._window=win;win['kango']=target;var doc=win.document;var background_scripts=TeaBasket_kango.getExtensionInfo().background_scripts;if(typeof background_scripts!='undefined'){var currentScriptIdx=0;var loadNextScript=function(){var script=doc.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src',TeaBasket_kango.io.getExtensionFileUrl(background_scripts[currentScriptIdx]));var onload=function(){currentScriptIdx++;if(currentScriptIdx<background_scripts.length){loadNextScript();}};if(typeof script.onreadystatechange!='undefined'){script.onreadystatechange=function(){if(script.readyState=='complete'){onload();}}}
else{script.onload=onload}
doc.body.appendChild(script);};loadNextScript();}}};TeaBasket_kango.BackgroundScriptModule=function(){};TeaBasket_kango.BackgroundScriptModule.prototype.init=function(target){TeaBasket_kango.backgroundScript=new TeaBasket_kango.BackgroundScriptEngine();TeaBasket_kango.addEventListener(TeaBasket_kango.event.Ready,function(){TeaBasket_kango.backgroundScript.init(target);});};TeaBasket_kango.registerModule(TeaBasket_kango.BackgroundScriptModule);