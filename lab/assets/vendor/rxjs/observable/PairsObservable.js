"use strict";function dispatch(e){var t=e.obj,r=e.keys,s=e.length,i=e.index,n=e.subscriber;if(i===s)return void n.complete();var o=r[i];n.next([o,t[o]]),e.index=i+1,this.schedule(e)}var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},Observable_1=require("../Observable"),PairsObservable=function(e){function t(t,r){e.call(this),this.obj=t,this.scheduler=r,this.keys=Object.keys(t)}return __extends(t,e),t.create=function(e,r){return new t(e,r)},t.prototype._subscribe=function(e){var t=this,r=t.keys,s=t.scheduler,i=r.length;if(s)return s.schedule(dispatch,0,{obj:this.obj,keys:r,length:i,index:0,subscriber:e});for(var n=0;n<i;n++){var o=r[n];e.next([o,this.obj[o]])}e.complete()},t}(Observable_1.Observable);exports.PairsObservable=PairsObservable;