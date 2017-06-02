"use strict";function timeInterval(e){return void 0===e&&(e=async_1.async),this.lift(new TimeIntervalOperator(e))}var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},Subscriber_1=require("../Subscriber"),async_1=require("../scheduler/async");exports.timeInterval=timeInterval;var TimeInterval=function(){function e(e,t){this.value=e,this.interval=t}return e}();exports.TimeInterval=TimeInterval;var TimeIntervalOperator=function(){function e(e){this.scheduler=e}return e.prototype.call=function(e,t){return t._subscribe(new TimeIntervalSubscriber(e,this.scheduler))},e}(),TimeIntervalSubscriber=function(e){function t(t,r){e.call(this,t),this.scheduler=r,this.lastTime=0,this.lastTime=r.now()}return __extends(t,e),t.prototype._next=function(e){var t=this.scheduler.now(),r=t-this.lastTime;this.lastTime=t,this.destination.next(new TimeInterval(e,r))},t}(Subscriber_1.Subscriber);