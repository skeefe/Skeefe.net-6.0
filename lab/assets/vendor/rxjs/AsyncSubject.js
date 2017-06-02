"use strict";var __extends=this&&this.__extends||function(t,e){function s(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)},Subject_1=require("./Subject"),Subscription_1=require("./Subscription"),AsyncSubject=function(t){function e(){t.apply(this,arguments),this.value=null,this.hasNext=!1,this.hasCompleted=!1}return __extends(e,t),e.prototype._subscribe=function(e){return this.hasCompleted&&this.hasNext?(e.next(this.value),e.complete(),Subscription_1.Subscription.EMPTY):this.hasError?(e.error(this.thrownError),Subscription_1.Subscription.EMPTY):t.prototype._subscribe.call(this,e)},e.prototype.next=function(t){this.hasCompleted||(this.value=t,this.hasNext=!0)},e.prototype.complete=function(){this.hasCompleted=!0,this.hasNext&&t.prototype.next.call(this,this.value),t.prototype.complete.call(this)},e}(Subject_1.Subject);exports.AsyncSubject=AsyncSubject;