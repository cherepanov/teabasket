/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using GmailnChecker_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
GmailnChecker_kango.BackgroundScriptEngine=function(){};GmailnChecker_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(target){var self=this;this._sandbox=GmailnChecker_kango.lang.createHTMLSandbox('background.html',function(win){self._initScripts(win,target);});},getContext:function(){return this._window;},_initScripts:function(win,target){this._window=win;win['kango']=target;var doc=win.document;var background_scripts=GmailnChecker_kango.getExtensionInfo().background_scripts;if(typeof background_scripts!='undefined'){var currentScriptIdx=0;var loadNextScript=function(){var script=doc.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src',GmailnChecker_kango.io.getExtensionFileUrl(background_scripts[currentScriptIdx]));var onload=function(){currentScriptIdx++;if(currentScriptIdx<background_scripts.length){loadNextScript();}};if(typeof script.onreadystatechange!='undefined'){script.onreadystatechange=function(){if(script.readyState=='complete'){onload();}}}
else{script.onload=onload}
doc.body.appendChild(script);};loadNextScript();}}};GmailnChecker_kango.BackgroundScriptModule=function(){};GmailnChecker_kango.BackgroundScriptModule.prototype.init=function(target){GmailnChecker_kango.backgroundScript=new GmailnChecker_kango.BackgroundScriptEngine();GmailnChecker_kango.addEventListener(GmailnChecker_kango.event.Ready,function(){GmailnChecker_kango.backgroundScript.init(target);});};GmailnChecker_kango.registerModule(GmailnChecker_kango.BackgroundScriptModule);