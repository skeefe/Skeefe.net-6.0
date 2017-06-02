"use strict";function elementAt(t,e){return this.lift(new ElementAtOperator(t,e))}var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},Subscriber_1=require("../Subscriber"),ArgumentOutOfRangeError_1=require("../util/ArgumentOutOfRangeError");exports.elementAt=elementAt;var ElementAtOperator=function(){function t(t,e){if(this.index=t,this.defaultValue=e,t<0)throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError}return t.prototype.call=function(t,e){return e._subscribe(new ElementAtSubscriber(t,this.index,this.defaultValue))},t}(),ElementAtSubscriber=function(t){function e(e,r,n){t.call(this,e),this.index=r,this.defaultValue=n}return __extends(e,t),e.prototype._next=function(t){0===this.index--&&(this.destination.next(t),this.destination.complete())},e.prototype._complete=function(){var t=this.destination;this.index>=0&&("undefined"!=typeof this.defaultValue?t.next(this.defaultValue):t.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError)),t.complete()},e}(Subscriber_1.Subscriber);