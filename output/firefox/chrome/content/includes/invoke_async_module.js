﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
/*
Built using TeaBasket_kango - Cross-browser extension framework.
http://kangoextensions.com/
*/
TeaBasket_kango.InvokeAsyncModule=function(){};TeaBasket_kango.InvokeAsyncModule.prototype.init=function(target){var MESSAGE_RESULT='KangoInvokeAsyncModule_result';var MESSAGE_INVOKE='KangoInvokeAsyncModule_invoke';var MESSAGE_INVOKE_CALLBACK='KangoInvokeAsyncModule_invokeCallback';var requests={};var request_counter=0;var generateId=function(){return(Math.random()+request_counter++).toString();};var isCallbackFunction=function(func){return(typeof func.call!='undefined'&&typeof func.apply!='undefined')};var processInvokeAsyncMessage=function(message,source){var response={id:message.id,result:null,error:null};try{response.result=target.lang.invoke(target.getContext(),message.method,message.params);}
catch(e){response.error=e.toString();TeaBasket_kango.console.log('Error during async call method '+message.method+'. Details: '+response.error);}
if(message.id!=null){source.dispatchMessage(MESSAGE_RESULT,response);}};var processInvokeAsyncCallbackMessage=function(message,source){var response={id:message.id,result:null,error:null};try{message.params.push(function(result){response.result=result;if(message.id!=null){source.dispatchMessage(MESSAGE_RESULT,response);}});target.lang.invoke(target.getContext(),message.method,message.params);}
catch(e){response.error=e.toString();if(message.id!=null){source.dispatchMessage(MESSAGE_RESULT,response);}
else{TeaBasket_kango.console.log('Error during async call method '+message.method+'. Details: '+response.error);}}};var processResultMessage=function(message,source){if(typeof message.id!='undefined'&&typeof requests[message.id]!='undefined'){var callbackDetails=requests[message.id];try{if(message.error==null&&isCallbackFunction(callbackDetails.onSuccess)){callbackDetails.onSuccess(message.result);}
else if(isCallbackFunction(callbackDetails.onError)){callbackDetails.onError(message.error);}}
finally{delete requests[message.id];}}};target.addEventListener('message',function(event){var handlers={};handlers[MESSAGE_INVOKE]=processInvokeAsyncMessage;handlers[MESSAGE_INVOKE_CALLBACK]=processInvokeAsyncCallbackMessage;handlers[MESSAGE_RESULT]=processResultMessage;var message=event.data;for(var handlerName in handlers){if(handlers.hasOwnProperty(handlerName)&&handlerName==event.name){handlers[handlerName](message,event.source);break;}}});var invokeAsyncInternal=function(isCallbackInvoke,args){args=Array.prototype.slice.call(args,0);var callback=args[args.length-1];var callbackDetails={onSuccess:function(){},onError:function(error){TeaBasket_kango.console.log('Error during async call method '+args[0]+'. Details: '+error);},isCallbackInvoke:isCallbackInvoke,isNotifyInvoke:false};if(callback!=null&&isCallbackFunction(callback)){callbackDetails.onSuccess=function(response){callback(response);};args[args.length-1]=callbackDetails;}
else{callbackDetails.isNotifyInvoke=true;args.push(callbackDetails);}
target.invokeAsyncEx.apply(target,args);};target.invokeAsyncEx=function(methodName){var callbackDetails=arguments[arguments.length-1];var messageName=(callbackDetails.isCallbackInvoke)?MESSAGE_INVOKE_CALLBACK:MESSAGE_INVOKE;var args=Array.prototype.slice.call(arguments,1,arguments.length-1);var id=null;if(!callbackDetails.isNotifyInvoke){id=generateId();requests[id]=callbackDetails;}
target.dispatchMessage(messageName,{id:id,method:methodName,params:args});};target.invokeAsync=function(methodName){invokeAsyncInternal(false,arguments);};target.invokeAsyncCallback=function(methodName){invokeAsyncInternal(true,arguments);};};if(typeof TeaBasket_kango!='undefined'&&typeof TeaBasket_kango.registerModule!='undefined'){TeaBasket_kango.registerModule(TeaBasket_kango.InvokeAsyncModule);}