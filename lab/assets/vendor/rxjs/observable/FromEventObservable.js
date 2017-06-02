"use strict";function isNodeStyleEventEmmitter(e){return!!e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}function isJQueryStyleEventEmitter(e){return!!e&&"function"==typeof e.on&&"function"==typeof e.off}function isNodeList(e){return!!e&&"[object NodeList]"===e.toString()}function isHTMLCollection(e){return!!e&&"[object HTMLCollection]"===e.toString()}function isEventTarget(e){return!!e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},Observable_1=require("../Observable"),tryCatch_1=require("../util/tryCatch"),isFunction_1=require("../util/isFunction"),errorObject_1=require("../util/errorObject"),Subscription_1=require("../Subscription"),FromEventObservable=function(e){function t(t,r,n,i){e.call(this),this.sourceObj=t,this.eventName=r,this.selector=n,this.options=i}return __extends(t,e),t.create=function(e,r,n,i){return isFunction_1.isFunction(n)&&(i=n,n=void 0),new t(e,r,i,n)},t.setupSubscription=function(e,r,n,i,o){var s;if(isNodeList(e)||isHTMLCollection(e))for(var u=0,c=e.length;u<c;u++)t.setupSubscription(e[u],r,n,i,o);else if(isEventTarget(e)){var f=e;e.addEventListener(r,n,o),s=function(){return f.removeEventListener(r,n)}}else if(isJQueryStyleEventEmitter(e)){var v=e;e.on(r,n),s=function(){return v.off(r,n)}}else if(isNodeStyleEventEmmitter(e)){var a=e;e.addListener(r,n),s=function(){return a.removeListener(r,n)}}i.add(new Subscription_1.Subscription(s))},t.prototype._subscribe=function(e){var r=this.sourceObj,n=this.eventName,i=this.options,o=this.selector,s=o?function(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];var n=tryCatch_1.tryCatch(o).apply(void 0,t);n===errorObject_1.errorObject?e.error(errorObject_1.errorObject.e):e.next(n)}:function(t){return e.next(t)};t.setupSubscription(r,n,s,e,i)},t}(Observable_1.Observable);exports.FromEventObservable=FromEventObservable;