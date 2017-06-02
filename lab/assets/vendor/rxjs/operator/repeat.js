"use strict";function repeat(t){return void 0===t&&(t=-1),0===t?new EmptyObservable_1.EmptyObservable:t<0?this.lift(new RepeatOperator((-1),this)):this.lift(new RepeatOperator(t-1,this))}var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},Subscriber_1=require("../Subscriber"),EmptyObservable_1=require("../observable/EmptyObservable");exports.repeat=repeat;var RepeatOperator=function(){function t(t,e){this.count=t,this.source=e}return t.prototype.call=function(t,e){return e._subscribe(new RepeatSubscriber(t,this.count,this.source))},t}(),RepeatSubscriber=function(t){function e(e,r,s){t.call(this,e),this.count=r,this.source=s}return __extends(e,t),e.prototype.complete=function(){if(!this.isStopped){var e=this,r=e.source,s=e.count;if(0===s)return t.prototype.complete.call(this);s>-1&&(this.count=s-1),this.unsubscribe(),this.isStopped=!1,this.closed=!1,r.subscribe(this)}},e}(Subscriber_1.Subscriber);