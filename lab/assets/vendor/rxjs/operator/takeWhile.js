"use strict";function takeWhile(e){return this.lift(new TakeWhileOperator(e))}var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},Subscriber_1=require("../Subscriber");exports.takeWhile=takeWhile;var TakeWhileOperator=function(){function e(e){this.predicate=e}return e.prototype.call=function(e,t){return t._subscribe(new TakeWhileSubscriber(e,this.predicate))},e}(),TakeWhileSubscriber=function(e){function t(t,r){e.call(this,t),this.predicate=r,this.index=0}return __extends(t,e),t.prototype._next=function(e){var t,r=this.destination;try{t=this.predicate(e,this.index++)}catch(e){return void r.error(e)}this.nextOrComplete(e,t)},t.prototype.nextOrComplete=function(e,t){var r=this.destination;Boolean(t)?r.next(e):r.complete()},t}(Subscriber_1.Subscriber);