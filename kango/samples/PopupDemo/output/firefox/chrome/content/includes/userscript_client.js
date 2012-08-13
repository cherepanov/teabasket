/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using PopupDemo_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
PopupDemo_kango.UserscriptEngineClient=function(){};PopupDemo_kango.UserscriptEngineClient.prototype={run:function(win,runAt){runAt=runAt||'document-end';var url=win.document.URL;var self=this;PopupDemo_kango.invokeAsync('kango.userscript.getScripts',url,runAt,function(scripts){for(var namespace in scripts){if(scripts.hasOwnProperty(namespace)){if(PopupDemo_kango.browser.getName()=='opera'&&scripts[namespace].length>1){var text='';for(var i=0;i<scripts[namespace].length;i++){text+='var __WindowVarsHandler={_vars:[],enter:function(){for(var a in window)window.hasOwnProperty(a)&&this._vars.push(a)},leave:function(a){for(var b in window)if(window.hasOwnProperty(b)&&-1==this._vars.indexOf(b))try{eval.call(a,"var "+b+"=window."+b+";")}catch(c){}}};\n';text+='__WindowVarsHandler.enter();\n'+scripts[namespace][i]+'\n__WindowVarsHandler.leave(this);\n\n'}
self.executeScript(win,text);}
else{self.executeScript(win,scripts[namespace].join('\n\n'));}}}});},executeScript:function(win,text){try{var api=new PopupDemo_kango.UserscriptApi(win);api['kango']=PopupDemo_kango;PopupDemo_kango.lang.evalInSandbox(win,api,text);}
catch(e){PopupDemo_kango.console.log('US: '+e.message+'\n'+e.stack||'');}}};PopupDemo_kango.UserscriptApi=function(win){this.window=(typeof XPCNativeWrapper!='undefined')?new XPCNativeWrapper(win):win;this.document=this.window.document;};PopupDemo_kango.UserscriptApi.prototype={window:null,document:null};