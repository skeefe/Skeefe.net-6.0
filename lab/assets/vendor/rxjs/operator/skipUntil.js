"use strict";function skipUntil(t){return this.lift(new SkipUntilOperator(t))}var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},OuterSubscriber_1=require("../OuterSubscriber"),subscribeToResult_1=require("../util/subscribeToResult");exports.skipUntil=skipUntil;var SkipUntilOperator=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){return e._subscribe(new SkipUntilSubscriber(t,this.notifier))},t}(),SkipUntilSubscriber=function(t){function e(e,i){t.call(this,e),this.hasValue=!1,this.isInnerStopped=!1,this.add(subscribeToResult_1.subscribeToResult(this,i))}return __extends(e,t),e.prototype._next=function(e){this.hasValue&&t.prototype._next.call(this,e)},e.prototype._complete=function(){this.isInnerStopped?t.prototype._complete.call(this):this.unsubscribe()},e.prototype.notifyNext=function(t,e,i,r,s){this.hasValue=!0},e.prototype.notifyComplete=function(){this.isInnerStopped=!0,this.isStopped&&t.prototype._complete.call(this)},e}(OuterSubscriber_1.OuterSubscriber);