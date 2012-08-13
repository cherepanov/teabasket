/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using ChristmasTree_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
ChristmasTree_kango.BackgroundScriptEngine=function(){};ChristmasTree_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(target){var self=this;this._sandbox=ChristmasTree_kango.lang.createHTMLSandbox('background.html',function(win){self._initScripts(win,target);});},getContext:function(){return this._window;},_initScripts:function(win,target){this._window=win;win['kango']=target;var doc=win.document;var background_scripts=ChristmasTree_kango.getExtensionInfo().background_scripts;if(typeof background_scripts!='undefined'){var currentScriptIdx=0;var loadNextScript=function(){var script=doc.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src',ChristmasTree_kango.io.getExtensionFileUrl(background_scripts[currentScriptIdx]));var onload=function(){currentScriptIdx++;if(currentScriptIdx<background_scripts.length){loadNextScript();}};if(typeof script.onreadystatechange!='undefined'){script.onreadystatechange=function(){if(script.readyState=='complete'){onload();}}}
else{script.onload=onload}
doc.body.appendChild(script);};loadNextScript();}}};ChristmasTree_kango.BackgroundScriptModule=function(){};ChristmasTree_kango.BackgroundScriptModule.prototype.init=function(target){ChristmasTree_kango.backgroundScript=new ChristmasTree_kango.BackgroundScriptEngine();ChristmasTree_kango.addEventListener(ChristmasTree_kango.event.Ready,function(){ChristmasTree_kango.backgroundScript.init(target);});};ChristmasTree_kango.registerModule(ChristmasTree_kango.BackgroundScriptModule);