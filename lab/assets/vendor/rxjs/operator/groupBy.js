"use strict";function groupBy(t,e,r){return this.lift(new GroupByOperator(this,t,e,r))}var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},Subscriber_1=require("../Subscriber"),Subscription_1=require("../Subscription"),Observable_1=require("../Observable"),Subject_1=require("../Subject"),Map_1=require("../util/Map"),FastMap_1=require("../util/FastMap");exports.groupBy=groupBy;var GroupByOperator=function(){function t(t,e,r,o){this.source=t,this.keySelector=e,this.elementSelector=r,this.durationSelector=o}return t.prototype.call=function(t,e){return e._subscribe(new GroupBySubscriber(t,this.keySelector,this.elementSelector,this.durationSelector))},t}(),GroupBySubscriber=function(t){function e(e,r,o,i){t.call(this,e),this.keySelector=r,this.elementSelector=o,this.durationSelector=i,this.groups=null,this.attemptedToUnsubscribe=!1,this.count=0}return __extends(e,t),e.prototype._next=function(t){var e;try{e=this.keySelector(t)}catch(t){return void this.error(t)}this._group(t,e)},e.prototype._group=function(t,e){var r=this.groups;r||(r=this.groups="string"==typeof e?new FastMap_1.FastMap:new Map_1.Map);var o,i=r.get(e);if(this.elementSelector)try{o=this.elementSelector(t)}catch(t){this.error(t)}else o=t;if(!i){r.set(e,i=new Subject_1.Subject);var s=new GroupedObservable(e,i,this);if(this.destination.next(s),this.durationSelector){var n=void 0;try{n=this.durationSelector(new GroupedObservable(e,i))}catch(t){return void this.error(t)}this.add(n.subscribe(new GroupDurationSubscriber(e,i,this)))}}i.closed||i.next(o)},e.prototype._error=function(t){var e=this.groups;e&&(e.forEach(function(e,r){e.error(t)}),e.clear()),this.destination.error(t)},e.prototype._complete=function(){var t=this.groups;t&&(t.forEach(function(t,e){t.complete()}),t.clear()),this.destination.complete()},e.prototype.removeGroup=function(t){this.groups.delete(t)},e.prototype.unsubscribe=function(){this.closed||this.attemptedToUnsubscribe||(this.attemptedToUnsubscribe=!0,0===this.count&&t.prototype.unsubscribe.call(this))},e}(Subscriber_1.Subscriber),GroupDurationSubscriber=function(t){function e(e,r,o){t.call(this),this.key=e,this.group=r,this.parent=o}return __extends(e,t),e.prototype._next=function(t){this._complete()},e.prototype._error=function(t){var e=this.group;e.closed||e.error(t),this.parent.removeGroup(this.key)},e.prototype._complete=function(){var t=this.group;t.closed||t.complete(),this.parent.removeGroup(this.key)},e}(Subscriber_1.Subscriber),GroupedObservable=function(t){function e(e,r,o){t.call(this),this.key=e,this.groupSubject=r,this.refCountSubscription=o}return __extends(e,t),e.prototype._subscribe=function(t){var e=new Subscription_1.Subscription,r=this,o=r.refCountSubscription,i=r.groupSubject;return o&&!o.closed&&e.add(new InnerRefCountSubscription(o)),e.add(i.subscribe(t)),e},e}(Observable_1.Observable);exports.GroupedObservable=GroupedObservable;var InnerRefCountSubscription=function(t){function e(e){t.call(this),this.parent=e,e.count++}return __extends(e,t),e.prototype.unsubscribe=function(){var e=this.parent;e.closed||this.closed||(t.prototype.unsubscribe.call(this),e.count-=1,0===e.count&&e.attemptedToUnsubscribe&&e.unsubscribe())},e}(Subscription_1.Subscription);