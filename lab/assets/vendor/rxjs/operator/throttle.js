"use strict";function throttle(t){return this.lift(new ThrottleOperator(t))}var __extends=this&&this.__extends||function(t,r){function e(){this.constructor=t}for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o]);t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)},OuterSubscriber_1=require("../OuterSubscriber"),subscribeToResult_1=require("../util/subscribeToResult");exports.throttle=throttle;var ThrottleOperator=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,r){return r._subscribe(new ThrottleSubscriber(t,this.durationSelector))},t}(),ThrottleSubscriber=function(t){function r(r,e){t.call(this,r),this.destination=r,this.durationSelector=e}return __extends(r,t),r.prototype._next=function(t){this.throttled||this.tryDurationSelector(t)},r.prototype.tryDurationSelector=function(t){var r=null;try{r=this.durationSelector(t)}catch(t){return void this.destination.error(t)}this.emitAndThrottle(t,r)},r.prototype.emitAndThrottle=function(t,r){this.add(this.throttled=subscribeToResult_1.subscribeToResult(this,r)),this.destination.next(t)},r.prototype._unsubscribe=function(){var t=this.throttled;t&&(this.remove(t),this.throttled=null,t.unsubscribe())},r.prototype.notifyNext=function(t,r,e,o,i){this._unsubscribe()},r.prototype.notifyComplete=function(){this._unsubscribe()},r}(OuterSubscriber_1.OuterSubscriber);