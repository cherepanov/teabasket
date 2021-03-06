﻿/*
Built using BrowserEvents_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
BrowserEvents_kango.XHRRequest=function(){this.method='GET';this.url='';this.params={};this.headers={};this.async=true;this.contentType='';this.username='';this.password='';this.mimeType='';};BrowserEvents_kango.XHRResult=function(){this.response='';this.status=0;};BrowserEvents_kango.XHR=function(){};BrowserEvents_kango.XHR.prototype={_paramsToString:function(params){var result='';for(var key in params){if(params.hasOwnProperty(key)){if(result!=''){result+='&';}
result+=key+'='+params[key];}}
return result;},getXMLHttpRequest:function(){return new XMLHttpRequest();},send:function(details,callback){var req=this.getXMLHttpRequest();var method=details.method||'GET';var async=details.async||true;var params=details.params||null;var type=details.contentType||'text';var url=details.url;var username=details.username||null;var password=details.password||null;var headers=details.headers||{};var mimeType=details.mimeType||null;if(url.indexOf(BrowserEvents_kango.SCHEME)==0||(url.indexOf('http://')==-1&&url.indexOf('https://')==-1)){url=BrowserEvents_kango.io.getFileUrl(url);}
function getResult(req,type){var data={response:null,status:0,abort:function(){req.abort();}};if(req.readyState>=2){data.status=req.status;if(req.readyState==4){if(type=='xml'){data.response=req.responseXML;}
else if(type=='json'){try{data.response=JSON.parse(req.responseText);}
catch(e){}}
else{data.response=req.responseText;}
data.abort=function(){};}}
return data;}
function getErrorResult(){return{response:null,status:0,abort:function(){}};}
if(params!=null){if(typeof details.params=='object'){params=this._paramsToString(params);if(method=='POST'){headers['Content-Type']='application/x-www-form-urlencoded';}}
if(method=='GET'){url=url+'?'+params;params=null;}}
try{req.open(method,url,async,username,password);}
catch(e){callback(getErrorResult());return getErrorResult();}
if(typeof req.overrideMimeType!='undefined'){if(mimeType!=null){req.overrideMimeType(mimeType);}
else if(type=='json'){req.overrideMimeType('application/json');}}
req.onreadystatechange=function(){if(req.readyState==4){if(typeof callback=='function'||(typeof callback.call!='undefined'&&typeof callback.apply!='undefined')){callback(getResult(req,type));}}};if(typeof headers=='object'){for(var key in headers){if(headers.hasOwnProperty(key)){req.setRequestHeader(key,headers[key]);}}}
try{req.send(params);}
catch(e){callback(getErrorResult());return getErrorResult();}
return getResult(req,type);}};BrowserEvents_kango.xhr=new BrowserEvents_kango.XHR();