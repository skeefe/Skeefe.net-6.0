!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(this,function(){"use strict";!function(e){function n(e,o){if(!o)return null;var t={};for(var c in e)if(e.hasOwnProperty(c)){var a=e[c];switch(typeof a){case"object":var r=a&&a.constructor&&a.constructor.name;a=r==Object.name?n(a,o-1):r;break;case"function":a=a.name||void 0}t[c]=a}return t}function o(e){var n=e.name;for(e=e.parent;null!=e;)n=e.name+"::"+n,e=e.parent;return n}var t=null,c=null,a=function(){var n=e.wtf;return!(!n||!(t=n.trace)||(c=t.events,0))}(),r=function(){function e(){this.name="WTF"}return e.prototype.onFork=function(n,t,c,a){var r=n.fork(c,a);return e.forkInstance(o(c),r.name),r},e.prototype.onInvoke=function(n,a,r,i,s,u,f){var p=e.invokeScope[f];return p||(p=e.invokeScope[f]=c.createScope("Zone:invoke:"+f+"(ascii zone)")),t.leaveScope(p(o(r)),n.invoke(r,i,s,u,f))},e.prototype.onHandleError=function(e,n,o,t){return e.handleError(o,t)},e.prototype.onScheduleTask=function(t,a,r,i){var s=i.type+":"+i.source,u=e.scheduleInstance[s];u||(u=e.scheduleInstance[s]=c.createInstance("Zone:schedule:"+s+"(ascii zone, any data)"));var f=t.scheduleTask(r,i);return u(o(r),n(i.data,2)),f},e.prototype.onInvokeTask=function(n,a,r,i,s,u){var f=i.source,p=e.invokeTaskScope[f];return p||(p=e.invokeTaskScope[f]=c.createScope("Zone:invokeTask:"+f+"(ascii zone)")),t.leaveScope(p(o(r)),n.invokeTask(r,i,s,u))},e.prototype.onCancelTask=function(t,a,r,i){var s=i.source,u=e.cancelInstance[s];u||(u=e.cancelInstance[s]=c.createInstance("Zone:cancel:"+s+"(ascii zone, any options)"));var f=t.cancelTask(r,i);return u(o(r),n(i.data,2)),f},e.forkInstance=a&&c.createInstance("Zone:fork(ascii zone, ascii newZone)"),e.scheduleInstance={},e.cancelInstance={},e.invokeScope={},e.invokeTaskScope={},e}();Zone.wtfZoneSpec=a?new r:null}("object"==typeof window&&window||"object"==typeof self&&self||global)});