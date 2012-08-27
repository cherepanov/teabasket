﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeaBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeaBasket_kango.UserscriptEngine=function(){this._scripts=[];};TeaBasket_kango.UserscriptEngine.prototype={_scripts:[],addScript:function(id,text){for(var i=0;i<this._scripts.length;i++){if(this._scripts[i].id==id){return false;}}
this._scripts.push({id:id,script:new TeaBasket_kango.Userscript(text)});return true;},removeScript:function(id){for(var i=0;i<this._scripts.length;i++){if(this._scripts[i].id==id){this._scripts.splice(i,1);return true;}}
return false;},clear:function(){this._scripts=[];},getScripts:function(url,runAt){var result={};for(var i=0;i<this._scripts.length;i++){var script=this._scripts[i].script;var namespace=script.headers.namespace||'default';var script_run_at=script.headers['run-at']||'document-end';if(script_run_at==runAt&&this._isIncludedUrl(script,url)&&!this._isExcludedUrl(script,url)){result[namespace]=result[namespace]||[];result[namespace].push(script.text);}}
return result;},_checkPatternArray:function(array,url){if(typeof array!='undefined'){if(!(array instanceof Array)){array=new Array(array);}
for(var j=0;j<array.length;j++){var pattern=array[j].replace(/\*/g,'(.*)');pattern=pattern.replace(/tld/g,'(.*)');var re=new RegExp(pattern);if(re.test(url)){return true;}}}
return false;},_isIncludedUrl:function(script,url){if(script.headers.include==null){return true;}
return this._checkPatternArray(script.headers.include,url);},_isExcludedUrl:function(script,url){if(script.headers.exclude==null){return false;}
return this._checkPatternArray(script.headers.exclude,url);}};TeaBasket_kango.Userscript=function(text){this.text=text;this.headers={};this._parseHeaders();};TeaBasket_kango.Userscript.prototype={headers:null,text:null,_parseHeaders:function(){this.headers=this._parseHeadersToHashTable(this.text);if(typeof this.headers.match!='undefined'){if(typeof this.headers.include=='undefined'){this.headers.include=this.headers.match;}
else{this.headers.include.concat(this.headers.match);}}},_parseHeadersToHashTable:function(text){var headers={};var lines=text.split(/\n/);for(var i=0;i<lines.length;i++){var line=lines[i];if(line.indexOf('// ==/UserScript==')==0){break;}
var result=line.match(/\/\/ @(\S+)\s*(.*)/);if(result!=null){var name=result[1];var value=result[2].replace(/\n|\r/g,'');switch(name){case'include':case'exclude':case'match':headers[name]=headers[name]||[];headers[name].push(value);break;default:headers[name]=value;}}}
return headers;}};TeaBasket_kango.registerModule(function(){this.init=function(){TeaBasket_kango.userscript=new TeaBasket_kango.UserscriptEngine();var content_scripts=TeaBasket_kango.getExtensionInfo().content_scripts;if(typeof content_scripts!='undefined'){for(var i=0;i<content_scripts.length;i++){TeaBasket_kango.userscript.addScript(content_scripts[i],TeaBasket_kango.io.getExtensionFileContents(content_scripts[i]));}}};});

// Merged from /home/ac/Downloads/teabasket/TeaBasket_kango/src/js/ie firefox/TeaBasket_kango/userscript_engine.part.js

/*
Built using TeaBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeaBasket_kango.addEventListener(TeaBasket_kango.event.Ready,function(){TeaBasket_kango.browser.addEventListener('DOMContentLoaded',function(event){var gm_client=new TeaBasket_kango.UserscriptEngineClient();gm_client.run(event.window);});});