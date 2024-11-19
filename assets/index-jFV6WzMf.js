function bm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function xm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wm={exports:{}},ws={},Sm={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),Jy=Symbol.for("react.portal"),e1=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),n1=Symbol.for("react.profiler"),r1=Symbol.for("react.provider"),i1=Symbol.for("react.context"),o1=Symbol.for("react.forward_ref"),a1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),l1=Symbol.for("react.lazy"),tf=Symbol.iterator;function u1(e){return e===null||typeof e!="object"?null:(e=tf&&e[tf]||e["@@iterator"],typeof e=="function"?e:null)}var km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Cm={};function pi(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||km}pi.prototype.isReactComponent={};pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tm(){}Tm.prototype=pi.prototype;function sc(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||km}var lc=sc.prototype=new Tm;lc.constructor=sc;Pm(lc,pi.prototype);lc.isPureReactComponent=!0;var nf=Array.isArray,Em=Object.prototype.hasOwnProperty,uc={current:null},Om={key:!0,ref:!0,__self:!0,__source:!0};function Rm(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Em.call(t,r)&&!Om.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Lo,type:e,key:o,ref:a,props:i,_owner:uc.current}}function c1(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function d1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rf=/\/+/g;function Js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d1(""+e.key):t.toString(36)}function va(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Lo:case Jy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Js(a,0):r,nf(i)?(n="",e!=null&&(n=e.replace(rf,"$&/")+"/"),va(i,t,n,"",function(u){return u})):i!=null&&(cc(i)&&(i=c1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",nf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Js(o,s);a+=va(o,t,n,l,i)}else if(l=u1(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Js(o,s++),a+=va(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Wo(e,t,n){if(e==null)return e;var r=[],i=0;return va(e,r,"","",function(o){return t.call(n,o,i++)}),r}function f1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},ya={transition:null},h1={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:ya,ReactCurrentOwner:uc};function Lm(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Wo,forEach:function(e,t,n){Wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wo(e,function(){t++}),t},toArray:function(e){return Wo(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=pi;X.Fragment=e1;X.Profiler=n1;X.PureComponent=sc;X.StrictMode=t1;X.Suspense=a1;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;X.act=Lm;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=uc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Em.call(t,l)&&!Om.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Lo,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:i1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r1,_context:e},e.Consumer=e};X.createElement=Rm;X.createFactory=function(e){var t=Rm.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:o1,render:e}};X.isValidElement=cc;X.lazy=function(e){return{$$typeof:l1,_payload:{_status:-1,_result:e},_init:f1}};X.memo=function(e,t){return{$$typeof:s1,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=ya.transition;ya.transition={};try{e()}finally{ya.transition=t}};X.unstable_act=Lm;X.useCallback=function(e,t){return tt.current.useCallback(e,t)};X.useContext=function(e){return tt.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};X.useEffect=function(e,t){return tt.current.useEffect(e,t)};X.useId=function(){return tt.current.useId()};X.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return tt.current.useMemo(e,t)};X.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};X.useRef=function(e){return tt.current.useRef(e)};X.useState=function(e){return tt.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return tt.current.useTransition()};X.version="18.3.1";Sm.exports=X;var P=Sm.exports;const Je=xm(P),p1=bm({__proto__:null,default:Je},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=P,g1=Symbol.for("react.element"),v1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,b1=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x1={key:!0,ref:!0,__self:!0,__source:!0};function Dm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)y1.call(t,r)&&!x1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:g1,type:e,key:o,ref:a,props:i,_owner:b1.current}}ws.Fragment=v1;ws.jsx=Dm;ws.jsxs=Dm;wm.exports=ws;var N=wm.exports,Mm={exports:{}},vt={},Am={exports:{}},Nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,I){var $=D.length;D.push(I);e:for(;0<$;){var J=$-1>>>1,de=D[J];if(0<i(de,I))D[J]=I,D[$]=de,$=J;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var I=D[0],$=D.pop();if($!==I){D[0]=$;e:for(var J=0,de=D.length,Ft=de>>>1;J<Ft;){var _e=2*(J+1)-1,Et=D[_e],Xe=_e+1,Yt=D[Xe];if(0>i(Et,$))Xe<de&&0>i(Yt,Et)?(D[J]=Yt,D[Xe]=$,J=Xe):(D[J]=Et,D[_e]=$,J=_e);else if(Xe<de&&0>i(Yt,$))D[J]=Yt,D[Xe]=$,J=Xe;else break e}}return I}function i(D,I){var $=D.sortIndex-I.sortIndex;return $!==0?$:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,f=3,p=!1,y=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=D)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function S(D){if(m=!1,v(D),!y)if(n(l)!==null)y=!0,rt(T);else{var I=n(u);I!==null&&Y(S,I.startTime-D)}}function T(D,I){y=!1,m&&(m=!1,g(C),C=-1),p=!0;var $=f;try{for(v(I),d=n(l);d!==null&&(!(d.expirationTime>I)||D&&!K());){var J=d.callback;if(typeof J=="function"){d.callback=null,f=d.priorityLevel;var de=J(d.expirationTime<=I);I=e.unstable_now(),typeof de=="function"?d.callback=de:d===n(l)&&r(l),v(I)}else r(l);d=n(l)}if(d!==null)var Ft=!0;else{var _e=n(u);_e!==null&&Y(S,_e.startTime-I),Ft=!1}return Ft}finally{d=null,f=$,p=!1}}var b=!1,O=null,C=-1,L=5,A=-1;function K(){return!(e.unstable_now()-A<L)}function le(){if(O!==null){var D=e.unstable_now();A=D;var I=!0;try{I=O(!0,D)}finally{I?pe():(b=!1,O=null)}}else b=!1}var pe;if(typeof h=="function")pe=function(){h(le)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Ye=ie.port2;ie.port1.onmessage=le,pe=function(){Ye.postMessage(null)}}else pe=function(){w(le,0)};function rt(D){O=D,b||(b=!0,pe())}function Y(D,I){C=w(function(){D(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||p||(y=!0,rt(T))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var $=f;f=I;try{return D()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=f;f=D;try{return I()}finally{f=$}},e.unstable_scheduleCallback=function(D,I,$){var J=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?J+$:J):$=J,D){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=$+de,D={id:c++,callback:I,priorityLevel:D,startTime:$,expirationTime:de,sortIndex:-1},$>J?(D.sortIndex=$,t(u,D),n(l)===null&&D===n(u)&&(m?(g(C),C=-1):m=!0,Y(S,$-J))):(D.sortIndex=de,t(l,D),y||p||(y=!0,rt(T))),D},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(D){var I=f;return function(){var $=f;f=I;try{return D.apply(this,arguments)}finally{f=$}}}})(Nm);Am.exports=Nm;var w1=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=P,mt=w1;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _m=new Set,oo={};function xr(e,t){ri(e,t),ri(e+"Capture",t)}function ri(e,t){for(oo[e]=t,e=0;e<t.length;e++)_m.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,k1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,of={},af={};function P1(e){return Kl.call(af,e)?!0:Kl.call(of,e)?!1:k1.test(e)?af[e]=!0:(of[e]=!0,!1)}function C1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T1(e,t,n,r){if(t===null||typeof t>"u"||C1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var dc=/[\-:]([a-z])/g;function fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dc,fc);Ie[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dc,fc);Ie[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dc,fc);Ie[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function hc(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T1(t,n,i,r)&&(n=null),r||i===null?P1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mn=S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),gc=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),sf=Symbol.iterator;function ki(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,el;function Fi(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fi(e):""}function E1(e){switch(e.tag){case 5:return Fi(e.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case Nr:return"Portal";case Wl:return"Profiler";case pc:return"StrictMode";case ql:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jm:return(e.displayName||"Context")+".Consumer";case zm:return(e._context.displayName||"Context")+".Provider";case mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gc:return t=e.displayName||null,t!==null?t:Yl(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return Yl(e(t))}catch{}}return null}function O1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(t);case 8:return t===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R1(e){var t=Vm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=R1(e))}function Im(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Um(e,t){t=t.checked,t!=null&&hc(e,"checked",t,!1)}function Ql(e,t){Um(e,t);var n=jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zl(e,t.type,jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zl(e,t,n){(t!=="number"||Aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vi=Array.isArray;function Qr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Vi(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jn(n)}}function $m(e,t){var n=jn(t.value),r=jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function df(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yo,Hm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L1=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(e){L1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wi[t]=Wi[e]})});function Km(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wi.hasOwnProperty(e)&&Wi[e]?(""+t).trim():t+"px"}function Wm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Km(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var D1=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(D1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,Zr=null,Jr=null;function ff(e){if(e=Ao(e)){if(typeof iu!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ts(t),iu(e.stateNode,e.type,t))}}function qm(e){Zr?Jr?Jr.push(e):Jr=[e]:Zr=e}function Gm(){if(Zr){var e=Zr,t=Jr;if(Jr=Zr=null,ff(e),t)for(e=0;e<t.length;e++)ff(t[e])}}function Ym(e,t){return e(t)}function Xm(){}var rl=!1;function Qm(e,t,n){if(rl)return e(t,n);rl=!0;try{return Ym(e,t,n)}finally{rl=!1,(Zr!==null||Jr!==null)&&(Xm(),Gm())}}function so(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var ou=!1;if(dn)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{ou=!1}function M1(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var qi=!1,Na=null,_a=!1,au=null,A1={onError:function(e){qi=!0,Na=e}};function N1(e,t,n,r,i,o,a,s,l){qi=!1,Na=null,M1.apply(A1,arguments)}function _1(e,t,n,r,i,o,a,s,l){if(N1.apply(this,arguments),qi){if(qi){var u=Na;qi=!1,Na=null}else throw Error(M(198));_a||(_a=!0,au=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hf(e){if(wr(e)!==e)throw Error(M(188))}function z1(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hf(i),e;if(o===r)return hf(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Jm(e){return e=z1(e),e!==null?eg(e):null}function eg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eg(e);if(t!==null)return t;e=e.sibling}return null}var tg=mt.unstable_scheduleCallback,pf=mt.unstable_cancelCallback,j1=mt.unstable_shouldYield,F1=mt.unstable_requestPaint,Te=mt.unstable_now,V1=mt.unstable_getCurrentPriorityLevel,yc=mt.unstable_ImmediatePriority,ng=mt.unstable_UserBlockingPriority,za=mt.unstable_NormalPriority,I1=mt.unstable_LowPriority,rg=mt.unstable_IdlePriority,Ss=null,Kt=null;function U1(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Ss,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:H1,$1=Math.log,B1=Math.LN2;function H1(e){return e>>>=0,e===0?32:31-($1(e)/B1|0)|0}var Xo=64,Qo=4194304;function Ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ja(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Ii(s):(o&=a,o!==0&&(r=Ii(o)))}else a=n&~i,a!==0?r=Ii(a):o!==0&&(r=Ii(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_t(t),i=1<<n,r|=e[n],t&=~i;return r}function K1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-_t(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=K1(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ig(){var e=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_t(t),e[t]=n}function q1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function og(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ag,xc,sg,lg,ug,lu=!1,Zo=[],Rn=null,Ln=null,Dn=null,lo=new Map,uo=new Map,Pn=[],G1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(t.pointerId)}}function Ci(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ao(t),t!==null&&xc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y1(e,t,n,r,i){switch(t){case"focusin":return Rn=Ci(Rn,e,t,n,r,i),!0;case"dragenter":return Ln=Ci(Ln,e,t,n,r,i),!0;case"mouseover":return Dn=Ci(Dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return lo.set(o,Ci(lo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,uo.set(o,Ci(uo.get(o)||null,e,t,n,r,i)),!0}return!1}function cg(e){var t=or(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Zm(n),t!==null){e.blockedOn=t,ug(e.priority,function(){sg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=Ao(n),t!==null&&xc(t),e.blockedOn=n,!1;t.shift()}return!0}function gf(e,t,n){ba(e)&&n.delete(t)}function X1(){lu=!1,Rn!==null&&ba(Rn)&&(Rn=null),Ln!==null&&ba(Ln)&&(Ln=null),Dn!==null&&ba(Dn)&&(Dn=null),lo.forEach(gf),uo.forEach(gf)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,X1)))}function co(e){function t(i){return Ti(i,e)}if(0<Zo.length){Ti(Zo[0],e);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Ti(Rn,e),Ln!==null&&Ti(Ln,e),Dn!==null&&Ti(Dn,e),lo.forEach(t),uo.forEach(t),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Pn.shift()}var ei=mn.ReactCurrentBatchConfig,Fa=!0;function Q1(e,t,n,r){var i=oe,o=ei.transition;ei.transition=null;try{oe=1,wc(e,t,n,r)}finally{oe=i,ei.transition=o}}function Z1(e,t,n,r){var i=oe,o=ei.transition;ei.transition=null;try{oe=4,wc(e,t,n,r)}finally{oe=i,ei.transition=o}}function wc(e,t,n,r){if(Fa){var i=uu(e,t,n,r);if(i===null)pl(e,t,r,Va,n),mf(e,r);else if(Y1(i,e,t,n,r))r.stopPropagation();else if(mf(e,r),t&4&&-1<G1.indexOf(e)){for(;i!==null;){var o=Ao(i);if(o!==null&&ag(o),o=uu(e,t,n,r),o===null&&pl(e,t,r,Va,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var Va=null;function uu(e,t,n,r){if(Va=null,e=vc(r),e=or(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Va=e,null}function dg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V1()){case yc:return 1;case ng:return 4;case za:case I1:return 16;case rg:return 536870912;default:return 16}default:return 16}}var Tn=null,Sc=null,xa=null;function fg(){if(xa)return xa;var e,t=Sc,n=t.length,r,i="value"in Tn?Tn.value:Tn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return xa=i.slice(e,1<r?1-r:void 0)}function wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function vf(){return!1}function yt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jo:vf,this.isPropagationStopped=vf,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=yt(mi),Mo=we({},mi,{view:0,detail:0}),J1=yt(Mo),ol,al,Ei,ks=we({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(ol=e.screenX-Ei.screenX,al=e.screenY-Ei.screenY):al=ol=0,Ei=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:al}}),yf=yt(ks),eb=we({},ks,{dataTransfer:0}),tb=yt(eb),nb=we({},Mo,{relatedTarget:0}),sl=yt(nb),rb=we({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),ib=yt(rb),ob=we({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ab=yt(ob),sb=we({},mi,{data:0}),bf=yt(sb),lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function db(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cb[e])?!!t[e]:!1}function Pc(){return db}var fb=we({},Mo,{key:function(e){if(e.key){var t=lb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ub[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hb=yt(fb),pb=we({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=yt(pb),mb=we({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),gb=yt(mb),vb=we({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yb=yt(vb),bb=we({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xb=yt(bb),wb=[9,13,27,32],Cc=dn&&"CompositionEvent"in window,Gi=null;dn&&"documentMode"in document&&(Gi=document.documentMode);var Sb=dn&&"TextEvent"in window&&!Gi,hg=dn&&(!Cc||Gi&&8<Gi&&11>=Gi),wf=" ",Sf=!1;function pg(e,t){switch(e){case"keyup":return wb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function kb(e,t){switch(e){case"compositionend":return mg(t);case"keypress":return t.which!==32?null:(Sf=!0,wf);case"textInput":return e=t.data,e===wf&&Sf?null:e;default:return null}}function Pb(e,t){if(zr)return e==="compositionend"||!Cc&&pg(e,t)?(e=fg(),xa=Sc=Tn=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hg&&t.locale!=="ko"?null:t.data;default:return null}}var Cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cb[e.type]:t==="textarea"}function gg(e,t,n,r){qm(r),t=Ia(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yi=null,fo=null;function Tb(e){Eg(e,0)}function Ps(e){var t=Vr(e);if(Im(t))return e}function Eb(e,t){if(e==="change")return t}var vg=!1;if(dn){var ll;if(dn){var ul="oninput"in document;if(!ul){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),ul=typeof Pf.oninput=="function"}ll=ul}else ll=!1;vg=ll&&(!document.documentMode||9<document.documentMode)}function Cf(){Yi&&(Yi.detachEvent("onpropertychange",yg),fo=Yi=null)}function yg(e){if(e.propertyName==="value"&&Ps(fo)){var t=[];gg(t,fo,e,vc(e)),Qm(Tb,t)}}function Ob(e,t,n){e==="focusin"?(Cf(),Yi=t,fo=n,Yi.attachEvent("onpropertychange",yg)):e==="focusout"&&Cf()}function Rb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(fo)}function Lb(e,t){if(e==="click")return Ps(t)}function Db(e,t){if(e==="input"||e==="change")return Ps(t)}function Mb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Mb;function ho(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kl.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function Tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var n=Tf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tf(n)}}function bg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xg(){for(var e=window,t=Aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Aa(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ab(e){var t=xg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(r!==null&&Tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ef(n,o);var a=Ef(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nb=dn&&"documentMode"in document&&11>=document.documentMode,jr=null,cu=null,Xi=null,du=!1;function Of(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||jr==null||jr!==Aa(r)||(r=jr,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&ho(Xi,r)||(Xi=r,r=Ia(cu,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},cl={},wg={};dn&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Cs(e){if(cl[e])return cl[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wg)return cl[e]=t[n];return e}var Sg=Cs("animationend"),kg=Cs("animationiteration"),Pg=Cs("animationstart"),Cg=Cs("transitionend"),Tg=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){Tg.set(e,t),xr(t,[e])}for(var dl=0;dl<Rf.length;dl++){var fl=Rf[dl],_b=fl.toLowerCase(),zb=fl[0].toUpperCase()+fl.slice(1);$n(_b,"on"+zb)}$n(Sg,"onAnimationEnd");$n(kg,"onAnimationIteration");$n(Pg,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Cg,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Lf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_1(r,t,void 0,e),e.currentTarget=null}function Eg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Lf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Lf(i,s,u),o=l}}}if(_a)throw e=au,_a=!1,au=null,e}function fe(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||(Og(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),Og(n,e,r,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[ta]){e[ta]=!0,_m.forEach(function(n){n!=="selectionchange"&&(jb.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,hl("selectionchange",!1,t))}}function Og(e,t,n,r){switch(dg(t)){case 1:var i=Q1;break;case 4:i=Z1;break;default:i=wc}n=i.bind(null,t,n,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=or(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Qm(function(){var u=o,c=vc(n),d=[];e:{var f=Tg.get(e);if(f!==void 0){var p=kc,y=e;switch(e){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":p=hb;break;case"focusin":y="focus",p=sl;break;case"focusout":y="blur",p=sl;break;case"beforeblur":case"afterblur":p=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gb;break;case Sg:case kg:case Pg:p=ib;break;case Cg:p=yb;break;case"scroll":p=J1;break;case"wheel":p=xb;break;case"copy":case"cut":case"paste":p=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xf}var m=(t&4)!==0,w=!m&&e==="scroll",g=m?f!==null?f+"Capture":null:f;m=[];for(var h=u,v;h!==null;){v=h;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=so(h,g),S!=null&&m.push(mo(h,S,v)))),w)break;h=h.return}0<m.length&&(f=new p(f,y,null,n,c),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==ru&&(y=n.relatedTarget||n.fromElement)&&(or(y)||y[fn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?or(y):null,y!==null&&(w=wr(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(m=yf,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(m=xf,S="onPointerLeave",g="onPointerEnter",h="pointer"),w=p==null?f:Vr(p),v=y==null?f:Vr(y),f=new m(S,h+"leave",p,n,c),f.target=w,f.relatedTarget=v,S=null,or(c)===u&&(m=new m(g,h+"enter",y,n,c),m.target=v,m.relatedTarget=w,S=m),w=S,p&&y)t:{for(m=p,g=y,h=0,v=m;v;v=Or(v))h++;for(v=0,S=g;S;S=Or(S))v++;for(;0<h-v;)m=Or(m),h--;for(;0<v-h;)g=Or(g),v--;for(;h--;){if(m===g||g!==null&&m===g.alternate)break t;m=Or(m),g=Or(g)}m=null}else m=null;p!==null&&Df(d,f,p,m,!1),y!==null&&w!==null&&Df(d,w,y,m,!0)}}e:{if(f=u?Vr(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=Eb;else if(kf(f))if(vg)T=Db;else{T=Rb;var b=Ob}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Lb);if(T&&(T=T(e,u))){gg(d,T,n,c);break e}b&&b(e,f,u),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Zl(f,"number",f.value)}switch(b=u?Vr(u):window,e){case"focusin":(kf(b)||b.contentEditable==="true")&&(jr=b,cu=u,Xi=null);break;case"focusout":Xi=cu=jr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Of(d,n,c);break;case"selectionchange":if(Nb)break;case"keydown":case"keyup":Of(d,n,c)}var O;if(Cc)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else zr?pg(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(hg&&n.locale!=="ko"&&(zr||C!=="onCompositionStart"?C==="onCompositionEnd"&&zr&&(O=fg()):(Tn=c,Sc="value"in Tn?Tn.value:Tn.textContent,zr=!0)),b=Ia(u,C),0<b.length&&(C=new bf(C,e,null,n,c),d.push({event:C,listeners:b}),O?C.data=O:(O=mg(n),O!==null&&(C.data=O)))),(O=Sb?kb(e,n):Pb(e,n))&&(u=Ia(u,"onBeforeInput"),0<u.length&&(c=new bf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=O))}Eg(d,t)})}function mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=so(e,n),o!=null&&r.unshift(mo(e,o,i)),o=so(e,t),o!=null&&r.push(mo(e,o,i))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=so(n,o),l!=null&&a.unshift(mo(n,l,s))):i||(l=so(n,o),l!=null&&a.push(mo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Fb=/\r\n?/g,Vb=/\u0000|\uFFFD/g;function Mf(e){return(typeof e=="string"?e:""+e).replace(Fb,`
`).replace(Vb,"")}function na(e,t,n){if(t=Mf(t),Mf(e)!==t&&n)throw Error(M(425))}function Ua(){}var fu=null,hu=null;function pu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,Ib=typeof clearTimeout=="function"?clearTimeout:void 0,Af=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof Af<"u"?function(e){return Af.resolve(null).then(e).catch($b)}:mu;function $b(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),co(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gi=Math.random().toString(36).slice(2),$t="__reactFiber$"+gi,go="__reactProps$"+gi,fn="__reactContainer$"+gi,gu="__reactEvents$"+gi,Bb="__reactListeners$"+gi,Hb="__reactHandles$"+gi;function or(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nf(e);e!==null;){if(n=e[$t])return n;e=Nf(e)}return t}e=n,n=e.parentNode}return null}function Ao(e){return e=e[$t]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ts(e){return e[go]||null}var vu=[],Ir=-1;function Bn(e){return{current:e}}function he(e){0>Ir||(e.current=vu[Ir],vu[Ir]=null,Ir--)}function ce(e,t){Ir++,vu[Ir]=e.current,e.current=t}var Fn={},Ge=Bn(Fn),st=Bn(!1),pr=Fn;function ii(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function $a(){he(st),he(Ge)}function _f(e,t,n){if(Ge.current!==Fn)throw Error(M(168));ce(Ge,t),ce(st,n)}function Rg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,O1(e)||"Unknown",i));return we({},n,r)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,pr=Ge.current,ce(Ge,e),ce(st,st.current),!0}function zf(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Rg(e,t,pr),r.__reactInternalMemoizedMergedChildContext=e,he(st),he(Ge),ce(Ge,e)):he(st),ce(st,n)}var en=null,Es=!1,gl=!1;function Lg(e){en===null?en=[e]:en.push(e)}function Kb(e){Es=!0,Lg(e)}function Hn(){if(!gl&&en!==null){gl=!0;var e=0,t=oe;try{var n=en;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,Es=!1}catch(i){throw en!==null&&(en=en.slice(e+1)),tg(yc,Hn),i}finally{oe=t,gl=!1}}return null}var Ur=[],$r=0,Ha=null,Ka=0,wt=[],St=0,mr=null,tn=1,nn="";function Jn(e,t){Ur[$r++]=Ka,Ur[$r++]=Ha,Ha=e,Ka=t}function Dg(e,t,n){wt[St++]=tn,wt[St++]=nn,wt[St++]=mr,mr=e;var r=tn;e=nn;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var o=32-_t(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,tn=1<<32-_t(t)+i|n<<i|r,nn=o+e}else tn=1<<o|n<<i|r,nn=e}function Ec(e){e.return!==null&&(Jn(e,1),Dg(e,1,0))}function Oc(e){for(;e===Ha;)Ha=Ur[--$r],Ur[$r]=null,Ka=Ur[--$r],Ur[$r]=null;for(;e===mr;)mr=wt[--St],wt[St]=null,nn=wt[--St],wt[St]=null,tn=wt[--St],wt[St]=null}var pt=null,ht=null,ve=!1,At=null;function Mg(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ht=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mr!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ht=null,!0):!1;default:return!1}}function yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bu(e){if(ve){var t=ht;if(t){var n=t;if(!jf(e,t)){if(yu(e))throw Error(M(418));t=Mn(n.nextSibling);var r=pt;t&&jf(e,t)?Mg(r,n):(e.flags=e.flags&-4097|2,ve=!1,pt=e)}}else{if(yu(e))throw Error(M(418));e.flags=e.flags&-4097|2,ve=!1,pt=e}}}function Ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function ra(e){if(e!==pt)return!1;if(!ve)return Ff(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pu(e.type,e.memoizedProps)),t&&(t=ht)){if(yu(e))throw Ag(),Error(M(418));for(;t;)Mg(e,t),t=Mn(t.nextSibling)}if(Ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ht=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=pt?Mn(e.stateNode.nextSibling):null;return!0}function Ag(){for(var e=ht;e;)e=Mn(e.nextSibling)}function oi(){ht=pt=null,ve=!1}function Rc(e){At===null?At=[e]:At.push(e)}var Wb=mn.ReactCurrentBatchConfig;function Oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function ia(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vf(e){var t=e._init;return t(e._payload)}function Ng(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=zn(g,h),g.index=0,g.sibling=null,g}function o(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,v,S){return h===null||h.tag!==6?(h=kl(v,g.mode,S),h.return=g,h):(h=i(h,v),h.return=g,h)}function l(g,h,v,S){var T=v.type;return T===_r?c(g,h,v.props.children,S,v.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sn&&Vf(T)===h.type)?(S=i(h,v.props),S.ref=Oi(g,h,v),S.return=g,S):(S=Oa(v.type,v.key,v.props,null,g.mode,S),S.ref=Oi(g,h,v),S.return=g,S)}function u(g,h,v,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Pl(v,g.mode,S),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function c(g,h,v,S,T){return h===null||h.tag!==7?(h=dr(v,g.mode,S,T),h.return=g,h):(h=i(h,v),h.return=g,h)}function d(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=kl(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qo:return v=Oa(h.type,h.key,h.props,null,g.mode,v),v.ref=Oi(g,null,h),v.return=g,v;case Nr:return h=Pl(h,g.mode,v),h.return=g,h;case Sn:var S=h._init;return d(g,S(h._payload),v)}if(Vi(h)||ki(h))return h=dr(h,g.mode,v,null),h.return=g,h;ia(g,h)}return null}function f(g,h,v,S){var T=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:s(g,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return v.key===T?l(g,h,v,S):null;case Nr:return v.key===T?u(g,h,v,S):null;case Sn:return T=v._init,f(g,h,T(v._payload),S)}if(Vi(v)||ki(v))return T!==null?null:c(g,h,v,S,null);ia(g,v)}return null}function p(g,h,v,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,s(h,g,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qo:return g=g.get(S.key===null?v:S.key)||null,l(h,g,S,T);case Nr:return g=g.get(S.key===null?v:S.key)||null,u(h,g,S,T);case Sn:var b=S._init;return p(g,h,v,b(S._payload),T)}if(Vi(S)||ki(S))return g=g.get(v)||null,c(h,g,S,T,null);ia(h,S)}return null}function y(g,h,v,S){for(var T=null,b=null,O=h,C=h=0,L=null;O!==null&&C<v.length;C++){O.index>C?(L=O,O=null):L=O.sibling;var A=f(g,O,v[C],S);if(A===null){O===null&&(O=L);break}e&&O&&A.alternate===null&&t(g,O),h=o(A,h,C),b===null?T=A:b.sibling=A,b=A,O=L}if(C===v.length)return n(g,O),ve&&Jn(g,C),T;if(O===null){for(;C<v.length;C++)O=d(g,v[C],S),O!==null&&(h=o(O,h,C),b===null?T=O:b.sibling=O,b=O);return ve&&Jn(g,C),T}for(O=r(g,O);C<v.length;C++)L=p(O,g,C,v[C],S),L!==null&&(e&&L.alternate!==null&&O.delete(L.key===null?C:L.key),h=o(L,h,C),b===null?T=L:b.sibling=L,b=L);return e&&O.forEach(function(K){return t(g,K)}),ve&&Jn(g,C),T}function m(g,h,v,S){var T=ki(v);if(typeof T!="function")throw Error(M(150));if(v=T.call(v),v==null)throw Error(M(151));for(var b=T=null,O=h,C=h=0,L=null,A=v.next();O!==null&&!A.done;C++,A=v.next()){O.index>C?(L=O,O=null):L=O.sibling;var K=f(g,O,A.value,S);if(K===null){O===null&&(O=L);break}e&&O&&K.alternate===null&&t(g,O),h=o(K,h,C),b===null?T=K:b.sibling=K,b=K,O=L}if(A.done)return n(g,O),ve&&Jn(g,C),T;if(O===null){for(;!A.done;C++,A=v.next())A=d(g,A.value,S),A!==null&&(h=o(A,h,C),b===null?T=A:b.sibling=A,b=A);return ve&&Jn(g,C),T}for(O=r(g,O);!A.done;C++,A=v.next())A=p(O,g,C,A.value,S),A!==null&&(e&&A.alternate!==null&&O.delete(A.key===null?C:A.key),h=o(A,h,C),b===null?T=A:b.sibling=A,b=A);return e&&O.forEach(function(le){return t(g,le)}),ve&&Jn(g,C),T}function w(g,h,v,S){if(typeof v=="object"&&v!==null&&v.type===_r&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:e:{for(var T=v.key,b=h;b!==null;){if(b.key===T){if(T=v.type,T===_r){if(b.tag===7){n(g,b.sibling),h=i(b,v.props.children),h.return=g,g=h;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sn&&Vf(T)===b.type){n(g,b.sibling),h=i(b,v.props),h.ref=Oi(g,b,v),h.return=g,g=h;break e}n(g,b);break}else t(g,b);b=b.sibling}v.type===_r?(h=dr(v.props.children,g.mode,S,v.key),h.return=g,g=h):(S=Oa(v.type,v.key,v.props,null,g.mode,S),S.ref=Oi(g,h,v),S.return=g,g=S)}return a(g);case Nr:e:{for(b=v.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Pl(v,g.mode,S),h.return=g,g=h}return a(g);case Sn:return b=v._init,w(g,h,b(v._payload),S)}if(Vi(v))return y(g,h,v,S);if(ki(v))return m(g,h,v,S);ia(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=kl(v,g.mode,S),h.return=g,g=h),a(g)):n(g,h)}return w}var ai=Ng(!0),_g=Ng(!1),Wa=Bn(null),qa=null,Br=null,Lc=null;function Dc(){Lc=Br=qa=null}function Mc(e){var t=Wa.current;he(Wa),e._currentValue=t}function xu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ti(e,t){qa=e,Lc=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(Lc!==e)if(e={context:e,memoizedValue:t,next:null},Br===null){if(qa===null)throw Error(M(308));Br=e,qa.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return t}var ar=null;function Ac(e){ar===null?ar=[e]:ar.push(e)}function zg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ac(t)):(n.next=i.next,i.next=n),t.interleaved=n,hn(e,r)}function hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kn=!1;function Nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,hn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ac(r)):(t.next=i.next,i.next=t),r.interleaved=t,hn(e,n)}function Sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}function If(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ga(e,t,n,r){var i=e.updateQueue;kn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,c=u=l=null,s=o;do{var f=s.lane,p=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,m=s;switch(f=t,p=n,m.tag){case 1:if(y=m.payload,typeof y=="function"){d=y.call(p,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=m.payload,f=typeof y=="function"?y.call(p,d,f):y,f==null)break e;d=we({},d,f);break e;case 2:kn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);vr|=a,e.lanes=a,e.memoizedState=d}}function Uf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var No={},Wt=Bn(No),vo=Bn(No),yo=Bn(No);function sr(e){if(e===No)throw Error(M(174));return e}function _c(e,t){switch(ce(yo,t),ce(vo,e),ce(Wt,No),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}he(Wt),ce(Wt,t)}function si(){he(Wt),he(vo),he(yo)}function Fg(e){sr(yo.current);var t=sr(Wt.current),n=eu(t,e.type);t!==n&&(ce(vo,e),ce(Wt,n))}function zc(e){vo.current===e&&(he(Wt),he(vo))}var ye=Bn(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function jc(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var ka=mn.ReactCurrentDispatcher,yl=mn.ReactCurrentBatchConfig,gr=0,xe=null,Le=null,Ae=null,Xa=!1,Qi=!1,bo=0,qb=0;function $e(){throw Error(M(321))}function Fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Vc(e,t,n,r,i,o){if(gr=o,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?Qb:Zb,e=n(r,i),Qi){o=0;do{if(Qi=!1,bo=0,25<=o)throw Error(M(301));o+=1,Ae=Le=null,t.updateQueue=null,ka.current=Jb,e=n(r,i)}while(Qi)}if(ka.current=Qa,t=Le!==null&&Le.next!==null,gr=0,Ae=Le=xe=null,Xa=!1,t)throw Error(M(300));return e}function Ic(){var e=bo!==0;return bo=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?xe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Tt(){if(Le===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ae===null?xe.memoizedState:Ae.next;if(t!==null)Ae=t,Le=e;else{if(e===null)throw Error(M(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ae===null?xe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function xo(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Tt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,xe.lanes|=c,vr|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,jt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,xe.lanes|=o,vr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=Tt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);jt(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vg(){}function Ig(e,t){var n=xe,r=Tt(),i=t(),o=!jt(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,Uc(Bg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,wo(9,$g.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(M(349));gr&30||Ug(n,t,i)}return i}function Ug(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $g(e,t,n,r){t.value=n,t.getSnapshot=r,Hg(t)&&Kg(e)}function Bg(e,t,n){return n(function(){Hg(t)&&Kg(e)})}function Hg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Kg(e){var t=hn(e,1);t!==null&&zt(t,e,1,-1)}function $f(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Xb.bind(null,xe,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wg(){return Tt().memoizedState}function Pa(e,t,n,r){var i=Ut();xe.flags|=e,i.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function Os(e,t,n,r){var i=Tt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&Fc(r,a.deps)){i.memoizedState=wo(t,n,o,r);return}}xe.flags|=e,i.memoizedState=wo(1|t,n,o,r)}function Bf(e,t){return Pa(8390656,8,e,t)}function Uc(e,t){return Os(2048,8,e,t)}function qg(e,t){return Os(4,2,e,t)}function Gg(e,t){return Os(4,4,e,t)}function Yg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xg(e,t,n){return n=n!=null?n.concat([e]):null,Os(4,4,Yg.bind(null,t,e),n)}function $c(){}function Qg(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zg(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jg(e,t,n){return gr&21?(jt(n,t)||(n=ig(),xe.lanes|=n,vr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function Gb(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{oe=n,yl.transition=r}}function e0(){return Tt().memoizedState}function Yb(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},t0(e))n0(t,n);else if(n=zg(e,t,n,r),n!==null){var i=et();zt(n,e,r,i),r0(n,t,r)}}function Xb(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(t0(e))n0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,jt(s,a)){var l=t.interleaved;l===null?(i.next=i,Ac(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=zg(e,t,i,r),n!==null&&(i=et(),zt(n,e,r,i),r0(n,t,r))}}function t0(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function n0(e,t){Qi=Xa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function r0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}var Qa={readContext:Ct,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Qb={readContext:Ct,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Bf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,Yg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yb.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:$f,useDebugValue:$c,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=$f(!1),t=e[0];return e=Gb.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,i=Ut();if(ve){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Ne===null)throw Error(M(349));gr&30||Ug(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bf(Bg.bind(null,r,o,e),[e]),r.flags|=2048,wo(9,$g.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Ne.identifierPrefix;if(ve){var n=nn,r=tn;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zb={readContext:Ct,useCallback:Qg,useContext:Ct,useEffect:Uc,useImperativeHandle:Xg,useInsertionEffect:qg,useLayoutEffect:Gg,useMemo:Zg,useReducer:bl,useRef:Wg,useState:function(){return bl(xo)},useDebugValue:$c,useDeferredValue:function(e){var t=Tt();return Jg(t,Le.memoizedState,e)},useTransition:function(){var e=bl(xo)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:Vg,useSyncExternalStore:Ig,useId:e0,unstable_isNewReconciler:!1},Jb={readContext:Ct,useCallback:Qg,useContext:Ct,useEffect:Uc,useImperativeHandle:Xg,useInsertionEffect:qg,useLayoutEffect:Gg,useMemo:Zg,useReducer:xl,useRef:Wg,useState:function(){return xl(xo)},useDebugValue:$c,useDeferredValue:function(e){var t=Tt();return Le===null?t.memoizedState=e:Jg(t,Le.memoizedState,e)},useTransition:function(){var e=xl(xo)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:Vg,useSyncExternalStore:Ig,useId:e0,unstable_isNewReconciler:!1};function Lt(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),i=_n(e),o=on(r,i);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(zt(t,e,i,r),Sa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),i=_n(e),o=on(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(zt(t,e,i,r),Sa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=_n(e),i=on(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(zt(t,e,r,n),Sa(t,e,r))}};function Hf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ho(n,r)||!ho(i,o):!0}function i0(e,t,n){var r=!1,i=Fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(i=lt(t)?pr:Ge.current,r=t.contextTypes,o=(r=r!=null)?ii(e,i):Fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Kf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ct(o):(o=lt(t)?pr:Ge.current,i.context=ii(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rs.enqueueReplaceState(i,i.state,null),Ga(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function li(e,t){try{var n="",r=t;do n+=E1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ku(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ex=typeof WeakMap=="function"?WeakMap:Map;function o0(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ja||(Ja=!0,Au=r),ku(e,t)},n}function a0(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ku(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ku(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ex;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=px.bind(null,e,t,n),t.then(e,e))}function qf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var tx=mn.ReactCurrentOwner,at=!1;function Ze(e,t,n,r){t.child=e===null?_g(t,null,n,r):ai(t,e.child,n,r)}function Yf(e,t,n,r,i){n=n.render;var o=t.ref;return ti(t,i),r=Vc(e,t,n,r,o,i),n=Ic(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(ve&&n&&Ec(t),t.flags|=1,Ze(e,t,r,i),t.child)}function Xf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Xc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,s0(e,t,o,r,i)):(e=Oa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(a,r)&&e.ref===t.ref)return pn(e,t,i)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function s0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ho(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,pn(e,t,i)}return Pu(e,t,n,r,i)}function l0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Kr,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Kr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(Kr,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(Kr,dt),dt|=r;return Ze(e,t,i,n),t.child}function u0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pu(e,t,n,r,i){var o=lt(n)?pr:Ge.current;return o=ii(t,o),ti(t,i),n=Vc(e,t,n,r,o,i),r=Ic(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pn(e,t,i)):(ve&&r&&Ec(t),t.flags|=1,Ze(e,t,n,i),t.child)}function Qf(e,t,n,r,i){if(lt(n)){var o=!0;Ba(t)}else o=!1;if(ti(t,i),t.stateNode===null)Ca(e,t),i0(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=lt(n)?pr:Ge.current,u=ii(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Kf(t,a,r,u),kn=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),l=t.memoizedState,s!==r||f!==l||st.current||kn?(typeof c=="function"&&(wu(t,n,c,r),l=t.memoizedState),(s=kn||Hf(t,n,s,r,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,jg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Lt(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=lt(n)?pr:Ge.current,l=ii(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Kf(t,a,r,l),kn=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i);var y=t.memoizedState;s!==d||f!==y||st.current||kn?(typeof p=="function"&&(wu(t,n,p,r),y=t.memoizedState),(u=kn||Hf(t,n,u,r,f,y,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,n,r,o,i)}function Cu(e,t,n,r,i,o){u0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zf(t,n,!1),pn(e,t,o);r=t.stateNode,tx.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ai(t,e.child,null,o),t.child=ai(t,null,s,o)):Ze(e,t,s,o),t.memoizedState=r.state,i&&zf(t,n,!0),t.child}function c0(e){var t=e.stateNode;t.pendingContext?_f(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_f(e,t.context,!1),_c(e,t.containerInfo)}function Zf(e,t,n,r,i){return oi(),Rc(i),t.flags|=256,Ze(e,t,n,r),t.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function d0(e,t,n){var r=t.pendingProps,i=ye.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ye,i&1),e===null)return bu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ms(a,r,0,null),e=dr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Eu(n),t.memoizedState=Tu,e):Bc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nx(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=zn(s,o):(o=dr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Eu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Tu,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bc(e,t){return t=Ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,n,r){return r!==null&&Rc(r),ai(t,e.child,null,n),e=Bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nx(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(M(422))),oa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ms({mode:"visible",children:r.children},i,0,null),o=dr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ai(t,e.child,null,a),t.child.memoizedState=Eu(a),t.memoizedState=Tu,o);if(!(t.mode&1))return oa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(M(419)),r=wl(o,r,void 0),oa(e,t,a,r)}if(s=(a&e.childLanes)!==0,at||s){if(r=Ne,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,hn(e,i),zt(r,e,i,-1))}return Yc(),r=wl(Error(M(421))),oa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ht=Mn(i.nextSibling),pt=t,ve=!0,At=null,e!==null&&(wt[St++]=tn,wt[St++]=nn,wt[St++]=mr,tn=e.id,nn=e.overflow,mr=t),t=Bc(t,r.children),t.flags|=4096,t)}function Jf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xu(e.return,t,n)}function Sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function f0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ze(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jf(e,n,t);else if(e.tag===19)Jf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ya(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ya(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,o);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ca(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rx(e,t,n){switch(t.tag){case 3:c0(t),oi();break;case 5:Fg(t);break;case 1:lt(t.type)&&Ba(t);break;case 4:_c(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(Wa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?d0(e,t,n):(ce(ye,ye.current&1),e=pn(e,t,n),e!==null?e.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return f0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,l0(e,t,n)}return pn(e,t,n)}var h0,Ou,p0,m0;h0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ou=function(){};p0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sr(Wt.current);var o=null;switch(n){case"input":i=Xl(e,i),r=Xl(e,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ua)}tu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};m0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ri(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ix(e,t,n){var r=t.pendingProps;switch(Oc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return lt(t.type)&&$a(),Be(t),null;case 3:return r=t.stateNode,si(),he(st),he(Ge),jc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,At!==null&&(zu(At),At=null))),Ou(e,t),Be(t),null;case 5:zc(t);var i=sr(yo.current);if(n=t.type,e!==null&&t.stateNode!=null)p0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Be(t),null}if(e=sr(Wt.current),ra(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[go]=o,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ui.length;i++)fe(Ui[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":lf(r,o),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},fe("invalid",r);break;case"textarea":cf(r,o),fe("invalid",r)}tu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&na(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&na(r.textContent,s,e),i=["children",""+s]):oo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":Go(r),uf(r,o,!0);break;case"textarea":Go(r),df(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ua)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[$t]=t,e[go]=r,h0(e,t,!1,!1),t.stateNode=e;e:{switch(a=nu(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ui.length;i++)fe(Ui[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":lf(e,r),i=Xl(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",e);break;case"textarea":cf(e,r),i=Jl(e,r),fe("invalid",e);break;default:i=r}tu(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Wm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(e,l):typeof l=="number"&&ao(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(oo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&fe("scroll",e):l!=null&&hc(e,o,l,a))}switch(n){case"input":Go(e),uf(e,r,!1);break;case"textarea":Go(e),df(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)m0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=sr(yo.current),sr(Wt.current),ra(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Be(t),null;case 13:if(he(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&ht!==null&&t.mode&1&&!(t.flags&128))Ag(),oi(),t.flags|=98560,o=!1;else if(o=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[$t]=t}else oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),o=!1}else At!==null&&(zu(At),At=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?De===0&&(De=3):Yc())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return si(),Ou(e,t),e===null&&po(t.stateNode.containerInfo),Be(t),null;case 10:return Mc(t.type._context),Be(t),null;case 17:return lt(t.type)&&$a(),Be(t),null;case 19:if(he(ye),o=t.memoizedState,o===null)return Be(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ri(o,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ya(e),a!==null){for(t.flags|=128,Ri(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>ui&&(t.flags|=128,r=!0,Ri(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ya(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ve)return Be(t),null}else 2*Te()-o.renderingStartTime>ui&&n!==1073741824&&(t.flags|=128,r=!0,Ri(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Gc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function ox(e,t){switch(Oc(t),t.tag){case 1:return lt(t.type)&&$a(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return si(),he(st),he(Ge),jc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(he(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ye),null;case 4:return si(),null;case 10:return Mc(t.type._context),null;case 22:case 23:return Gc(),null;case 24:return null;default:return null}}var aa=!1,Ke=!1,ax=typeof WeakSet=="function"?WeakSet:Set,_=null;function Hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var eh=!1;function sx(e,t){if(fu=Fa,e=xg(),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++c===r&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hu={focusedElem:e,selectionRange:n},Fa=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var m=y.memoizedProps,w=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:Lt(t.type,m),w);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){Pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=eh,eh=!1,y}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ru(t,n,o)}i=i.next}while(i!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Lu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function g0(e){var t=e.alternate;t!==null&&(e.alternate=null,g0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[go],delete t[gu],delete t[Bb],delete t[Hb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function v0(e){return e.tag===5||e.tag===3||e.tag===4}function th(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||v0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ua));else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}var je=null,Dt=!1;function yn(e,t,n){for(n=n.child;n!==null;)y0(e,t,n),n=n.sibling}function y0(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Ss,n)}catch{}switch(n.tag){case 5:Ke||Hr(n,t);case 6:var r=je,i=Dt;je=null,yn(e,t,n),je=r,Dt=i,je!==null&&(Dt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Dt?(e=je,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),co(e)):ml(je,n.stateNode));break;case 4:r=je,i=Dt,je=n.stateNode.containerInfo,Dt=!0,yn(e,t,n),je=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ru(n,t,a),i=i.next}while(i!==r)}yn(e,t,n);break;case 1:if(!Ke&&(Hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Pe(n,t,s)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,yn(e,t,n),Ke=r):yn(e,t,n);break;default:yn(e,t,n)}}function nh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ax),t.forEach(function(r){var i=gx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:je=s.stateNode,Dt=!1;break e;case 3:je=s.stateNode.containerInfo,Dt=!0;break e;case 4:je=s.stateNode.containerInfo,Dt=!0;break e}s=s.return}if(je===null)throw Error(M(160));y0(o,a,i),je=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)b0(t,e),t=t.sibling}function b0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),It(e),r&4){try{Zi(3,e,e.return),Ls(3,e)}catch(m){Pe(e,e.return,m)}try{Zi(5,e,e.return)}catch(m){Pe(e,e.return,m)}}break;case 1:Ot(t,e),It(e),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(Ot(t,e),It(e),r&512&&n!==null&&Hr(n,n.return),e.flags&32){var i=e.stateNode;try{ao(i,"")}catch(m){Pe(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Um(i,o),nu(s,a);var u=nu(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Wm(i,d):c==="dangerouslySetInnerHTML"?Hm(i,d):c==="children"?ao(i,d):hc(i,c,d,u)}switch(s){case"input":Ql(i,o);break;case"textarea":$m(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Qr(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Qr(i,!!o.multiple,o.defaultValue,!0):Qr(i,!!o.multiple,o.multiple?[]:"",!1))}i[go]=o}catch(m){Pe(e,e.return,m)}}break;case 6:if(Ot(t,e),It(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Pe(e,e.return,m)}}break;case 3:if(Ot(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(t.containerInfo)}catch(m){Pe(e,e.return,m)}break;case 4:Ot(t,e),It(e);break;case 13:Ot(t,e),It(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=Te())),r&4&&nh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(u=Ke)||c,Ot(t,e),Ke=u):Ot(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(_=e,c=e.child;c!==null;){for(d=_=c;_!==null;){switch(f=_,p=f.child,f.tag){case 0:case 11:case 14:case 15:Zi(4,f,f.return);break;case 1:Hr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(m){Pe(r,n,m)}}break;case 5:Hr(f,f.return);break;case 22:if(f.memoizedState!==null){ih(d);continue}}p!==null?(p.return=f,_=p):ih(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Km("display",a))}catch(m){Pe(e,e.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Pe(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ot(t,e),It(e),r&4&&nh(e);break;case 21:break;default:Ot(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(v0(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ao(i,""),r.flags&=-33);var o=th(e);Mu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=th(e);Du(e,s,a);break;default:throw Error(M(161))}}catch(l){Pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lx(e,t,n){_=e,x0(e)}function x0(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||aa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ke;s=aa;var u=Ke;if(aa=a,(Ke=l)&&!u)for(_=i;_!==null;)a=_,l=a.child,a.tag===22&&a.memoizedState!==null?oh(i):l!==null?(l.return=a,_=l):oh(i);for(;o!==null;)_=o,x0(o),o=o.sibling;_=i,aa=s,Ke=u}rh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):rh(e)}}function rh(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Uf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&co(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ke||t.flags&512&&Lu(t)}catch(f){Pe(t,t.return,f)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function ih(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function oh(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(l){Pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Pe(t,i,l)}}var o=t.return;try{Lu(t)}catch(l){Pe(t,o,l)}break;case 5:var a=t.return;try{Lu(t)}catch(l){Pe(t,a,l)}}}catch(l){Pe(t,t.return,l)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var ux=Math.ceil,Za=mn.ReactCurrentDispatcher,Hc=mn.ReactCurrentOwner,Pt=mn.ReactCurrentBatchConfig,te=0,Ne=null,Re=null,Ve=0,dt=0,Kr=Bn(0),De=0,So=null,vr=0,Ds=0,Kc=0,Ji=null,ot=null,Wc=0,ui=1/0,Jt=null,Ja=!1,Au=null,Nn=null,sa=!1,En=null,es=0,eo=0,Nu=null,Ta=-1,Ea=0;function et(){return te&6?Te():Ta!==-1?Ta:Ta=Te()}function _n(e){return e.mode&1?te&2&&Ve!==0?Ve&-Ve:Wb.transition!==null?(Ea===0&&(Ea=ig()),Ea):(e=oe,e!==0||(e=window.event,e=e===void 0?16:dg(e.type)),e):1}function zt(e,t,n,r){if(50<eo)throw eo=0,Nu=null,Error(M(185));Do(e,n,r),(!(te&2)||e!==Ne)&&(e===Ne&&(!(te&2)&&(Ds|=n),De===4&&Cn(e,Ve)),ut(e,r),n===1&&te===0&&!(t.mode&1)&&(ui=Te()+500,Es&&Hn()))}function ut(e,t){var n=e.callbackNode;W1(e,t);var r=ja(e,e===Ne?Ve:0);if(r===0)n!==null&&pf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pf(n),t===1)e.tag===0?Kb(ah.bind(null,e)):Lg(ah.bind(null,e)),Ub(function(){!(te&6)&&Hn()}),n=null;else{switch(og(r)){case 1:n=yc;break;case 4:n=ng;break;case 16:n=za;break;case 536870912:n=rg;break;default:n=za}n=O0(n,w0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function w0(e,t){if(Ta=-1,Ea=0,te&6)throw Error(M(327));var n=e.callbackNode;if(ni()&&e.callbackNode!==n)return null;var r=ja(e,e===Ne?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ts(e,r);else{t=r;var i=te;te|=2;var o=k0();(Ne!==e||Ve!==t)&&(Jt=null,ui=Te()+500,cr(e,t));do try{fx();break}catch(s){S0(e,s)}while(!0);Dc(),Za.current=o,te=i,Re!==null?t=0:(Ne=null,Ve=0,t=De)}if(t!==0){if(t===2&&(i=su(e),i!==0&&(r=i,t=_u(e,i))),t===1)throw n=So,cr(e,0),Cn(e,r),ut(e,Te()),n;if(t===6)Cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!cx(i)&&(t=ts(e,r),t===2&&(o=su(e),o!==0&&(r=o,t=_u(e,o))),t===1))throw n=So,cr(e,0),Cn(e,r),ut(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:er(e,ot,Jt);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=Wc+500-Te(),10<t)){if(ja(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mu(er.bind(null,e,ot,Jt),t);break}er(e,ot,Jt);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_t(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ux(r/1960))-r,10<r){e.timeoutHandle=mu(er.bind(null,e,ot,Jt),r);break}er(e,ot,Jt);break;case 5:er(e,ot,Jt);break;default:throw Error(M(329))}}}return ut(e,Te()),e.callbackNode===n?w0.bind(null,e):null}function _u(e,t){var n=Ji;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=ts(e,t),e!==2&&(t=ot,ot=n,t!==null&&zu(t)),e}function zu(e){ot===null?ot=e:ot.push.apply(ot,e)}function cx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!jt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~Kc,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function ah(e){if(te&6)throw Error(M(327));ni();var t=ja(e,0);if(!(t&1))return ut(e,Te()),null;var n=ts(e,t);if(e.tag!==0&&n===2){var r=su(e);r!==0&&(t=r,n=_u(e,r))}if(n===1)throw n=So,cr(e,0),Cn(e,t),ut(e,Te()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,ot,Jt),ut(e,Te()),null}function qc(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(ui=Te()+500,Es&&Hn())}}function yr(e){En!==null&&En.tag===0&&!(te&6)&&ni();var t=te;te|=1;var n=Pt.transition,r=oe;try{if(Pt.transition=null,oe=1,e)return e()}finally{oe=r,Pt.transition=n,te=t,!(te&6)&&Hn()}}function Gc(){dt=Kr.current,he(Kr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ib(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$a();break;case 3:si(),he(st),he(Ge),jc();break;case 5:zc(r);break;case 4:si();break;case 13:he(ye);break;case 19:he(ye);break;case 10:Mc(r.type._context);break;case 22:case 23:Gc()}n=n.return}if(Ne=e,Re=e=zn(e.current,null),Ve=dt=t,De=0,So=null,Kc=Ds=vr=0,ot=Ji=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ar=null}return e}function S0(e,t){do{var n=Re;try{if(Dc(),ka.current=Qa,Xa){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xa=!1}if(gr=0,Ae=Le=xe=null,Qi=!1,bo=0,Hc.current=null,n===null||n.return===null){De=1,So=t,Re=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=qf(a);if(p!==null){p.flags&=-257,Gf(p,a,s,o,t),p.mode&1&&Wf(o,u,t),t=p,l=u;var y=t.updateQueue;if(y===null){var m=new Set;m.add(l),t.updateQueue=m}else y.add(l);break e}else{if(!(t&1)){Wf(o,u,t),Yc();break e}l=Error(M(426))}}else if(ve&&s.mode&1){var w=qf(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Gf(w,a,s,o,t),Rc(li(l,s));break e}}o=l=li(l,s),De!==4&&(De=2),Ji===null?Ji=[o]:Ji.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=o0(o,l,t);If(o,g);break e;case 1:s=l;var h=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=a0(o,s,t);If(o,S);break e}}o=o.return}while(o!==null)}C0(n)}catch(T){t=T,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function k0(){var e=Za.current;return Za.current=Qa,e===null?Qa:e}function Yc(){(De===0||De===3||De===2)&&(De=4),Ne===null||!(vr&268435455)&&!(Ds&268435455)||Cn(Ne,Ve)}function ts(e,t){var n=te;te|=2;var r=k0();(Ne!==e||Ve!==t)&&(Jt=null,cr(e,t));do try{dx();break}catch(i){S0(e,i)}while(!0);if(Dc(),te=n,Za.current=r,Re!==null)throw Error(M(261));return Ne=null,Ve=0,De}function dx(){for(;Re!==null;)P0(Re)}function fx(){for(;Re!==null&&!j1();)P0(Re)}function P0(e){var t=E0(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?C0(e):Re=t,Hc.current=null}function C0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ox(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Re=null;return}}else if(n=ix(n,t,dt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);De===0&&(De=5)}function er(e,t,n){var r=oe,i=Pt.transition;try{Pt.transition=null,oe=1,hx(e,t,n,r)}finally{Pt.transition=i,oe=r}return null}function hx(e,t,n,r){do ni();while(En!==null);if(te&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(q1(e,o),e===Ne&&(Re=Ne=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sa||(sa=!0,O0(za,function(){return ni(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var a=oe;oe=1;var s=te;te|=4,Hc.current=null,sx(e,n),b0(n,e),Ab(hu),Fa=!!fu,hu=fu=null,e.current=n,lx(n),F1(),te=s,oe=a,Pt.transition=o}else e.current=n;if(sa&&(sa=!1,En=e,es=i),o=e.pendingLanes,o===0&&(Nn=null),U1(n.stateNode),ut(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ja)throw Ja=!1,e=Au,Au=null,e;return es&1&&e.tag!==0&&ni(),o=e.pendingLanes,o&1?e===Nu?eo++:(eo=0,Nu=e):eo=0,Hn(),null}function ni(){if(En!==null){var e=og(es),t=Pt.transition,n=oe;try{if(Pt.transition=null,oe=16>e?16:e,En===null)var r=!1;else{if(e=En,En=null,es=0,te&6)throw Error(M(331));var i=te;for(te|=4,_=e.current;_!==null;){var o=_,a=o.child;if(_.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(_=u;_!==null;){var c=_;switch(c.tag){case 0:case 11:case 15:Zi(8,c,o)}var d=c.child;if(d!==null)d.return=c,_=d;else for(;_!==null;){c=_;var f=c.sibling,p=c.return;if(g0(c),c===u){_=null;break}if(f!==null){f.return=p,_=f;break}_=p}}}var y=o.alternate;if(y!==null){var m=y.child;if(m!==null){y.child=null;do{var w=m.sibling;m.sibling=null,m=w}while(m!==null)}}_=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,_=a;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,_=g;break e}_=o.return}}var h=e.current;for(_=h;_!==null;){a=_;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,_=v;else e:for(a=h;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ls(9,s)}}catch(T){Pe(s,s.return,T)}if(s===a){_=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,_=S;break e}_=s.return}}if(te=i,Hn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Ss,e)}catch{}r=!0}return r}finally{oe=n,Pt.transition=t}}return!1}function sh(e,t,n){t=li(n,t),t=o0(e,t,1),e=An(e,t,1),t=et(),e!==null&&(Do(e,1,t),ut(e,t))}function Pe(e,t,n){if(e.tag===3)sh(e,e,n);else for(;t!==null;){if(t.tag===3){sh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=li(n,e),e=a0(t,e,1),t=An(t,e,1),e=et(),t!==null&&(Do(t,1,e),ut(t,e));break}}t=t.return}}function px(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Ve&n)===n&&(De===4||De===3&&(Ve&130023424)===Ve&&500>Te()-Wc?cr(e,0):Kc|=n),ut(e,t)}function T0(e,t){t===0&&(e.mode&1?(t=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):t=1);var n=et();e=hn(e,t),e!==null&&(Do(e,t,n),ut(e,n))}function mx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),T0(e,n)}function gx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),T0(e,n)}var E0;E0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,rx(e,t,n);at=!!(e.flags&131072)}else at=!1,ve&&t.flags&1048576&&Dg(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ca(e,t),e=t.pendingProps;var i=ii(t,Ge.current);ti(t,n),i=Vc(null,t,r,e,i,n);var o=Ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,Ba(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nc(t),i.updater=Rs,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=Cu(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&Ec(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ca(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yx(r),e=Lt(r,e),i){case 0:t=Pu(null,t,r,e,n);break e;case 1:t=Qf(null,t,r,e,n);break e;case 11:t=Yf(null,t,r,e,n);break e;case 14:t=Xf(null,t,r,Lt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Pu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Qf(e,t,r,i,n);case 3:e:{if(c0(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jg(e,t),Ga(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=li(Error(M(423)),t),t=Zf(e,t,r,n,i);break e}else if(r!==i){i=li(Error(M(424)),t),t=Zf(e,t,r,n,i);break e}else for(ht=Mn(t.stateNode.containerInfo.firstChild),pt=t,ve=!0,At=null,n=_g(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===i){t=pn(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return Fg(t),e===null&&bu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,pu(r,i)?a=null:o!==null&&pu(r,o)&&(t.flags|=32),u0(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&bu(t),null;case 13:return d0(e,t,n);case 4:return _c(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ai(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Yf(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ce(Wa,r._currentValue),r._currentValue=a,o!==null)if(jt(o.value,a)){if(o.children===i.children&&!st.current){t=pn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=on(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(M(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),xu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ti(t,n),i=Ct(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Lt(r,t.pendingProps),i=Lt(r.type,i),Xf(e,t,r,i,n);case 15:return s0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Ca(e,t),t.tag=1,lt(r)?(e=!0,Ba(t)):e=!1,ti(t,n),i0(t,r,i),Su(t,r,i,n),Cu(null,t,r,!0,e,n);case 19:return f0(e,t,n);case 22:return l0(e,t,n)}throw Error(M(156,t.tag))};function O0(e,t){return tg(e,t)}function vx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new vx(e,t,n,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yx(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mc)return 11;if(e===gc)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oa(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Xc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _r:return dr(n.children,i,o,t);case pc:a=8,i|=8;break;case Wl:return e=kt(12,n,t,i|2),e.elementType=Wl,e.lanes=o,e;case ql:return e=kt(13,n,t,i),e.elementType=ql,e.lanes=o,e;case Gl:return e=kt(19,n,t,i),e.elementType=Gl,e.lanes=o,e;case Fm:return Ms(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zm:a=10;break e;case jm:a=9;break e;case mc:a=11;break e;case gc:a=14;break e;case Sn:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=kt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dr(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function Ms(e,t,n,r){return e=kt(22,e,r,t),e.elementType=Fm,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,i,o,a,s,l){return e=new bx(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=kt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(o),e}function xx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function R0(e){if(!e)return Fn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(lt(n))return Rg(e,n,t)}return t}function L0(e,t,n,r,i,o,a,s,l){return e=Qc(n,r,!0,e,i,o,a,s,l),e.context=R0(null),n=e.current,r=et(),i=_n(n),o=on(r,i),o.callback=t??null,An(n,o,i),e.current.lanes=i,Do(e,i,r),ut(e,r),e}function As(e,t,n,r){var i=t.current,o=et(),a=_n(i);return n=R0(n),t.context===null?t.context=n:t.pendingContext=n,t=on(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,a),e!==null&&(zt(e,i,a,o),Sa(e,i,a)),a}function ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){lh(e,t),(e=e.alternate)&&lh(e,t)}function wx(){return null}var D0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}Ns.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));As(e,t,null,null)};Ns.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yr(function(){As(null,e,null,null)}),t[fn]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=lg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&cg(e)}};function ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uh(){}function Sx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ns(a);o.call(u)}}var a=L0(t,r,e,0,null,!1,!1,"",uh);return e._reactRootContainer=a,e[fn]=a.current,po(e.nodeType===8?e.parentNode:e),yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ns(l);s.call(u)}}var l=Qc(e,0,!1,null,null,!1,!1,"",uh);return e._reactRootContainer=l,e[fn]=l.current,po(e.nodeType===8?e.parentNode:e),yr(function(){As(t,l,n,r)}),l}function zs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ns(a);s.call(l)}}As(t,a,e,i)}else a=Sx(n,t,e,i,r);return ns(a)}ag=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ii(t.pendingLanes);n!==0&&(bc(t,n|1),ut(t,Te()),!(te&6)&&(ui=Te()+500,Hn()))}break;case 13:yr(function(){var r=hn(e,1);if(r!==null){var i=et();zt(r,e,1,i)}}),Zc(e,1)}};xc=function(e){if(e.tag===13){var t=hn(e,134217728);if(t!==null){var n=et();zt(t,e,134217728,n)}Zc(e,134217728)}};sg=function(e){if(e.tag===13){var t=_n(e),n=hn(e,t);if(n!==null){var r=et();zt(n,e,t,r)}Zc(e,t)}};lg=function(){return oe};ug=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};iu=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ts(r);if(!i)throw Error(M(90));Im(r),Ql(r,i)}}}break;case"textarea":$m(e,n);break;case"select":t=n.value,t!=null&&Qr(e,!!n.multiple,t,!1)}};Ym=qc;Xm=yr;var kx={usingClientEntryPoint:!1,Events:[Ao,Vr,Ts,qm,Gm,qc]},Li={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jm(e),e===null?null:e.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Ss=la.inject(Px),Kt=la}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(t))throw Error(M(200));return xx(e,t,null,n)};vt.createRoot=function(e,t){if(!ed(e))throw Error(M(299));var n=!1,r="",i=D0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,i),e[fn]=t.current,po(e.nodeType===8?e.parentNode:e),new Jc(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Jm(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return yr(e)};vt.hydrate=function(e,t,n){if(!_s(t))throw Error(M(200));return zs(null,e,t,!0,n)};vt.hydrateRoot=function(e,t,n){if(!ed(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=D0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=L0(t,null,e,1,n??null,i,!1,o,a),e[fn]=t.current,po(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ns(t)};vt.render=function(e,t,n){if(!_s(t))throw Error(M(200));return zs(null,e,t,!1,n)};vt.unmountComponentAtNode=function(e){if(!_s(e))throw Error(M(40));return e._reactRootContainer?(yr(function(){zs(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};vt.unstable_batchedUpdates=qc;vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_s(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return zs(e,t,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function M0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M0)}catch(e){console.error(e)}}M0(),Mm.exports=vt;var td=Mm.exports;const Cx=xm(td),Tx=bm({__proto__:null,default:Cx},[td]);var A0,ch=td;A0=ch.createRoot,ch.hydrateRoot;const Ex="modulepreload",Ox=function(e){return"/artivastore/"+e},dh={},nd=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=Ox(l),l in dh)return;dh[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Ex,u||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}var Oe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Oe||(Oe={}));const fh="popstate";function Rx(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return ko("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:br(i)}return Dx(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ci(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lx(){return Math.random().toString(36).substr(2,8)}function hh(e,t){return{usr:e.state,key:e.key,idx:t}}function ko(e,t,n,r){return n===void 0&&(n=null),me({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||Lx()})}function br(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Oe.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(me({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){s=Oe.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:s,location:m.location,delta:g})}function f(w,g){s=Oe.Push;let h=ko(m.location,w,g);u=c()+1;let v=hh(h,u),S=m.createHref(h);try{a.pushState(v,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(S)}o&&l&&l({action:s,location:m.location,delta:1})}function p(w,g){s=Oe.Replace;let h=ko(m.location,w,g);u=c();let v=hh(h,u),S=m.createHref(h);a.replaceState(v,"",S),o&&l&&l({action:s,location:m.location,delta:0})}function y(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:br(w);return h=h.replace(/ $/,"%20"),Z(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let m={get action(){return s},get location(){return e(i,a)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fh,d),l=w,()=>{i.removeEventListener(fh,d),l=null}},createHref(w){return t(i,w)},createURL:y,encodeLocation(w){let g=y(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return a.go(w)}};return m}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const Mx=new Set(["lazy","caseSensitive","path","id","index","children"]);function Ax(e){return e.index===!0}function rs(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,String(o)],s=typeof i.id=="string"?i.id:a.join("-");if(Z(i.index!==!0||!i.children,"Cannot specify children on an index route"),Z(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Ax(i)){let l=me({},i,t(i),{id:s});return r[s]=l,l}else{let l=me({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=rs(i.children,t,a,r)),l}})}function rr(e,t,n){return n===void 0&&(n="/"),Ra(e,t,n,!1)}function Ra(e,t,n,r){let i=typeof t=="string"?Kn(t):t,o=vi(i.pathname||"/",n);if(o==null)return null;let a=N0(e);_x(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=Wx(o);s=Hx(a[l],u,r)}return s}function Nx(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function N0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Z(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=an([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),N0(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:$x(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of _0(o.path))i(o,a,l)}),t}function _0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=_0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function _x(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Bx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zx=/^:[\w-]+$/,jx=3,Fx=2,Vx=1,Ix=10,Ux=-2,ph=e=>e==="*";function $x(e,t){let n=e.split("/"),r=n.length;return n.some(ph)&&(r+=Ux),t&&(r+=Fx),n.filter(i=>!ph(i)).reduce((i,o)=>i+(zx.test(o)?jx:o===""?Vx:Ix),r)}function Bx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Hx(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=mh({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=mh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:an([o,d.pathname]),pathnameBase:Yx(an([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=an([o,d.pathnameBase]))}return a}function mh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let m=s[d]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const y=s[d];return p&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Kx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ci(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Wx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ci(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function qx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:Gx(n,t):t,search:Xx(r),hash:Qx(i)}}function Gx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rd(e,t){let n=z0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function id(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Kn(e):(i=me({},e),Z(!i.pathname||!i.pathname.includes("?"),Cl("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),Cl("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),Cl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=qx(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const an=e=>e.join("/").replace(/\/\/+/g,"/"),Yx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class is{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function js(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const j0=["post","put","patch","delete"],Zx=new Set(j0),Jx=["get",...j0],ew=new Set(Jx),tw=new Set([301,302,303,307,308]),nw=new Set([307,308]),Tl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Di={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},od=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iw=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),F0="remix-router-transitions";function ow(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Z(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let x=e.detectErrorBoundary;i=k=>({hasErrorBoundary:x(k)})}else i=iw;let o={},a=rs(e.routes,i,void 0,o),s,l=e.basename||"/",u=e.dataStrategy||uw,c=e.patchRoutesOnNavigation,d=me({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,p=new Set,y=null,m=null,w=null,g=e.hydrationData!=null,h=rr(a,e.history.location,l),v=null;if(h==null&&!c){let x=it(404,{pathname:e.history.location.pathname}),{matches:k,route:E}=Th(a);h=k,v={[E.id]:x}}h&&!e.hydrationData&&$o(h,a,e.history.location.pathname).active&&(h=null);let S;if(h)if(h.some(x=>x.route.lazy))S=!1;else if(!h.some(x=>x.route.loader))S=!0;else if(d.v7_partialHydration){let x=e.hydrationData?e.hydrationData.loaderData:null,k=e.hydrationData?e.hydrationData.errors:null;if(k){let E=h.findIndex(R=>k[R.route.id]!==void 0);S=h.slice(0,E+1).every(R=>!Fu(R.route,x,k))}else S=h.every(E=>!Fu(E.route,x,k))}else S=e.hydrationData!=null;else if(S=!1,h=[],d.v7_partialHydration){let x=$o(null,a,e.history.location.pathname);x.active&&x.matches&&(h=x.matches)}let T,b={historyAction:e.history.action,location:e.history.location,matches:h,initialized:S,navigation:Tl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},O=Oe.Pop,C=!1,L,A=!1,K=new Map,le=null,pe=!1,ie=!1,Ye=[],rt=new Set,Y=new Map,D=0,I=-1,$=new Map,J=new Set,de=new Map,Ft=new Map,_e=new Set,Et=new Map,Xe=new Map,Yt;function zy(){if(f=e.history.listen(x=>{let{action:k,location:E,delta:R}=x;if(Yt){Yt(),Yt=void 0;return}ci(Xe.size===0||R!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Qd({currentLocation:b.location,nextLocation:E,historyAction:k});if(z&&R!=null){let B=new Promise(G=>{Yt=G});e.history.go(R*-1),Uo(z,{state:"blocked",location:E,proceed(){Uo(z,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),B.then(()=>e.history.go(R))},reset(){let G=new Map(b.blockers);G.set(z,Di),Qe({blockers:G})}});return}return Gn(k,E)}),n){kw(t,K);let x=()=>Pw(t,K);t.addEventListener("pagehide",x),le=()=>t.removeEventListener("pagehide",x)}return b.initialized||Gn(Oe.Pop,b.location,{initialHydration:!0}),T}function jy(){f&&f(),le&&le(),p.clear(),L&&L.abort(),b.fetchers.forEach((x,k)=>Io(k)),b.blockers.forEach((x,k)=>Xd(k))}function Fy(x){return p.add(x),()=>p.delete(x)}function Qe(x,k){k===void 0&&(k={}),b=me({},b,x);let E=[],R=[];d.v7_fetcherPersist&&b.fetchers.forEach((z,B)=>{z.state==="idle"&&(_e.has(B)?R.push(B):E.push(B))}),[...p].forEach(z=>z(b,{deletedFetchers:R,viewTransitionOpts:k.viewTransitionOpts,flushSync:k.flushSync===!0})),d.v7_fetcherPersist&&(E.forEach(z=>b.fetchers.delete(z)),R.forEach(z=>Io(z)))}function Pr(x,k,E){var R,z;let{flushSync:B}=E===void 0?{}:E,G=b.actionData!=null&&b.navigation.formMethod!=null&&Mt(b.navigation.formMethod)&&b.navigation.state==="loading"&&((R=x.state)==null?void 0:R._isRedirect)!==!0,F;k.actionData?Object.keys(k.actionData).length>0?F=k.actionData:F=null:G?F=b.actionData:F=null;let V=k.loaderData?Ph(b.loaderData,k.loaderData,k.matches||[],k.errors):b.loaderData,j=b.blockers;j.size>0&&(j=new Map(j),j.forEach((ee,ze)=>j.set(ze,Di)));let H=C===!0||b.navigation.formMethod!=null&&Mt(b.navigation.formMethod)&&((z=x.state)==null?void 0:z._isRedirect)!==!0;s&&(a=s,s=void 0),pe||O===Oe.Pop||(O===Oe.Push?e.history.push(x,x.state):O===Oe.Replace&&e.history.replace(x,x.state));let Q;if(O===Oe.Pop){let ee=K.get(b.location.pathname);ee&&ee.has(x.pathname)?Q={currentLocation:b.location,nextLocation:x}:K.has(x.pathname)&&(Q={currentLocation:x,nextLocation:b.location})}else if(A){let ee=K.get(b.location.pathname);ee?ee.add(x.pathname):(ee=new Set([x.pathname]),K.set(b.location.pathname,ee)),Q={currentLocation:b.location,nextLocation:x}}Qe(me({},k,{actionData:F,loaderData:V,historyAction:O,location:x,initialized:!0,navigation:Tl,revalidation:"idle",restoreScrollPosition:Jd(x,k.matches||b.matches),preventScrollReset:H,blockers:j}),{viewTransitionOpts:Q,flushSync:B===!0}),O=Oe.Pop,C=!1,A=!1,pe=!1,ie=!1,Ye=[]}async function Bd(x,k){if(typeof x=="number"){e.history.go(x);return}let E=ju(b.location,b.matches,l,d.v7_prependBasename,x,d.v7_relativeSplatPath,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:R,submission:z,error:B}=gh(d.v7_normalizeFormMethod,!1,E,k),G=b.location,F=ko(b.location,R,k&&k.state);F=me({},F,e.history.encodeLocation(F));let V=k&&k.replace!=null?k.replace:void 0,j=Oe.Push;V===!0?j=Oe.Replace:V===!1||z!=null&&Mt(z.formMethod)&&z.formAction===b.location.pathname+b.location.search&&(j=Oe.Replace);let H=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,Q=(k&&k.flushSync)===!0,ee=Qd({currentLocation:G,nextLocation:F,historyAction:j});if(ee){Uo(ee,{state:"blocked",location:F,proceed(){Uo(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),Bd(x,k)},reset(){let ze=new Map(b.blockers);ze.set(ee,Di),Qe({blockers:ze})}});return}return await Gn(j,F,{submission:z,pendingError:B,preventScrollReset:H,replace:k&&k.replace,enableViewTransition:k&&k.viewTransition,flushSync:Q})}function Vy(){if(Ys(),Qe({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){Gn(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}Gn(O||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:A===!0})}}async function Gn(x,k,E){L&&L.abort(),L=null,O=x,pe=(E&&E.startUninterruptedRevalidation)===!0,Yy(b.location,b.matches),C=(E&&E.preventScrollReset)===!0,A=(E&&E.enableViewTransition)===!0;let R=s||a,z=E&&E.overrideNavigation,B=rr(R,k,l),G=(E&&E.flushSync)===!0,F=$o(B,R,k.pathname);if(F.active&&F.matches&&(B=F.matches),!B){let{error:ue,notFoundMatches:re,route:Se}=Xs(k.pathname);Pr(k,{matches:re,loaderData:{},errors:{[Se.id]:ue}},{flushSync:G});return}if(b.initialized&&!ie&&mw(b.location,k)&&!(E&&E.submission&&Mt(E.submission.formMethod))){Pr(k,{matches:B},{flushSync:G});return}L=new AbortController;let V=Rr(e.history,k,L.signal,E&&E.submission),j;if(E&&E.pendingError)j=[ir(B).route.id,{type:ae.error,error:E.pendingError}];else if(E&&E.submission&&Mt(E.submission.formMethod)){let ue=await Iy(V,k,E.submission,B,F.active,{replace:E.replace,flushSync:G});if(ue.shortCircuited)return;if(ue.pendingActionResult){let[re,Se]=ue.pendingActionResult;if(ft(Se)&&js(Se.error)&&Se.error.status===404){L=null,Pr(k,{matches:ue.matches,loaderData:{},errors:{[re]:Se.error}});return}}B=ue.matches||B,j=ue.pendingActionResult,z=El(k,E.submission),G=!1,F.active=!1,V=Rr(e.history,V.url,V.signal)}let{shortCircuited:H,matches:Q,loaderData:ee,errors:ze}=await Uy(V,k,B,F.active,z,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,G,j);H||(L=null,Pr(k,me({matches:Q||B},Ch(j),{loaderData:ee,errors:ze})))}async function Iy(x,k,E,R,z,B){B===void 0&&(B={}),Ys();let G=ww(k,E);if(Qe({navigation:G},{flushSync:B.flushSync===!0}),z){let j=await Bo(R,k.pathname,x.signal);if(j.type==="aborted")return{shortCircuited:!0};if(j.type==="error"){let H=ir(j.partialMatches).route.id;return{matches:j.partialMatches,pendingActionResult:[H,{type:ae.error,error:j.error}]}}else if(j.matches)R=j.matches;else{let{notFoundMatches:H,error:Q,route:ee}=Xs(k.pathname);return{matches:H,pendingActionResult:[ee.id,{type:ae.error,error:Q}]}}}let F,V=$i(R,k);if(!V.route.action&&!V.route.lazy)F={type:ae.error,error:it(405,{method:x.method,pathname:k.pathname,routeId:V.route.id})};else if(F=(await bi("action",b,x,[V],R,null))[V.route.id],x.signal.aborted)return{shortCircuited:!0};if(lr(F)){let j;return B&&B.replace!=null?j=B.replace:j=wh(F.response.headers.get("Location"),new URL(x.url),l)===b.location.pathname+b.location.search,await Yn(x,F,!0,{submission:E,replace:j}),{shortCircuited:!0}}if(On(F))throw it(400,{type:"defer-action"});if(ft(F)){let j=ir(R,V.route.id);return(B&&B.replace)!==!0&&(O=Oe.Push),{matches:R,pendingActionResult:[j.route.id,F]}}return{matches:R,pendingActionResult:[V.route.id,F]}}async function Uy(x,k,E,R,z,B,G,F,V,j,H){let Q=z||El(k,B),ee=B||G||Oh(Q),ze=!pe&&(!d.v7_partialHydration||!V);if(R){if(ze){let ke=Hd(H);Qe(me({navigation:Q},ke!==void 0?{actionData:ke}:{}),{flushSync:j})}let ne=await Bo(E,k.pathname,x.signal);if(ne.type==="aborted")return{shortCircuited:!0};if(ne.type==="error"){let ke=ir(ne.partialMatches).route.id;return{matches:ne.partialMatches,loaderData:{},errors:{[ke]:ne.error}}}else if(ne.matches)E=ne.matches;else{let{error:ke,notFoundMatches:Tr,route:Si}=Xs(k.pathname);return{matches:Tr,loaderData:{},errors:{[Si.id]:ke}}}}let ue=s||a,[re,Se]=yh(e.history,b,E,ee,k,d.v7_partialHydration&&V===!0,d.v7_skipActionErrorRevalidation,ie,Ye,rt,_e,de,J,ue,l,H);if(Qs(ne=>!(E&&E.some(ke=>ke.route.id===ne))||re&&re.some(ke=>ke.route.id===ne)),I=++D,re.length===0&&Se.length===0){let ne=Gd();return Pr(k,me({matches:E,loaderData:{},errors:H&&ft(H[1])?{[H[0]]:H[1].error}:null},Ch(H),ne?{fetchers:new Map(b.fetchers)}:{}),{flushSync:j}),{shortCircuited:!0}}if(ze){let ne={};if(!R){ne.navigation=Q;let ke=Hd(H);ke!==void 0&&(ne.actionData=ke)}Se.length>0&&(ne.fetchers=$y(Se)),Qe(ne,{flushSync:j})}Se.forEach(ne=>{vn(ne.key),ne.controller&&Y.set(ne.key,ne.controller)});let Cr=()=>Se.forEach(ne=>vn(ne.key));L&&L.signal.addEventListener("abort",Cr);let{loaderResults:xi,fetcherResults:Qt}=await Kd(b,E,re,Se,x);if(x.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",Cr),Se.forEach(ne=>Y.delete(ne.key));let Vt=ua(xi);if(Vt)return await Yn(x,Vt.result,!0,{replace:F}),{shortCircuited:!0};if(Vt=ua(Qt),Vt)return J.add(Vt.key),await Yn(x,Vt.result,!0,{replace:F}),{shortCircuited:!0};let{loaderData:Zs,errors:wi}=kh(b,E,xi,H,Se,Qt,Et);Et.forEach((ne,ke)=>{ne.subscribe(Tr=>{(Tr||ne.done)&&Et.delete(ke)})}),d.v7_partialHydration&&V&&b.errors&&(wi=me({},b.errors,wi));let Xn=Gd(),Ho=Yd(I),Ko=Xn||Ho||Se.length>0;return me({matches:E,loaderData:Zs,errors:wi},Ko?{fetchers:new Map(b.fetchers)}:{})}function Hd(x){if(x&&!ft(x[1]))return{[x[0]]:x[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function $y(x){return x.forEach(k=>{let E=b.fetchers.get(k.key),R=Mi(void 0,E?E.data:void 0);b.fetchers.set(k.key,R)}),new Map(b.fetchers)}function By(x,k,E,R){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");vn(x);let z=(R&&R.flushSync)===!0,B=s||a,G=ju(b.location,b.matches,l,d.v7_prependBasename,E,d.v7_relativeSplatPath,k,R==null?void 0:R.relative),F=rr(B,G,l),V=$o(F,B,G);if(V.active&&V.matches&&(F=V.matches),!F){Xt(x,k,it(404,{pathname:G}),{flushSync:z});return}let{path:j,submission:H,error:Q}=gh(d.v7_normalizeFormMethod,!0,G,R);if(Q){Xt(x,k,Q,{flushSync:z});return}let ee=$i(F,j),ze=(R&&R.preventScrollReset)===!0;if(H&&Mt(H.formMethod)){Hy(x,k,j,ee,F,V.active,z,ze,H);return}de.set(x,{routeId:k,path:j}),Ky(x,k,j,ee,F,V.active,z,ze,H)}async function Hy(x,k,E,R,z,B,G,F,V){Ys(),de.delete(x);function j(Ee){if(!Ee.route.action&&!Ee.route.lazy){let Er=it(405,{method:V.formMethod,pathname:E,routeId:k});return Xt(x,k,Er,{flushSync:G}),!0}return!1}if(!B&&j(R))return;let H=b.fetchers.get(x);gn(x,Sw(V,H),{flushSync:G});let Q=new AbortController,ee=Rr(e.history,E,Q.signal,V);if(B){let Ee=await Bo(z,E,ee.signal);if(Ee.type==="aborted")return;if(Ee.type==="error"){Xt(x,k,Ee.error,{flushSync:G});return}else if(Ee.matches){if(z=Ee.matches,R=$i(z,E),j(R))return}else{Xt(x,k,it(404,{pathname:E}),{flushSync:G});return}}Y.set(x,Q);let ze=D,re=(await bi("action",b,ee,[R],z,x))[R.route.id];if(ee.signal.aborted){Y.get(x)===Q&&Y.delete(x);return}if(d.v7_fetcherPersist&&_e.has(x)){if(lr(re)||ft(re)){gn(x,xn(void 0));return}}else{if(lr(re))if(Y.delete(x),I>ze){gn(x,xn(void 0));return}else return J.add(x),gn(x,Mi(V)),Yn(ee,re,!1,{fetcherSubmission:V,preventScrollReset:F});if(ft(re)){Xt(x,k,re.error);return}}if(On(re))throw it(400,{type:"defer-action"});let Se=b.navigation.location||b.location,Cr=Rr(e.history,Se,Q.signal),xi=s||a,Qt=b.navigation.state!=="idle"?rr(xi,b.navigation.location,l):b.matches;Z(Qt,"Didn't find any matches after fetcher action");let Vt=++D;$.set(x,Vt);let Zs=Mi(V,re.data);b.fetchers.set(x,Zs);let[wi,Xn]=yh(e.history,b,Qt,V,Se,!1,d.v7_skipActionErrorRevalidation,ie,Ye,rt,_e,de,J,xi,l,[R.route.id,re]);Xn.filter(Ee=>Ee.key!==x).forEach(Ee=>{let Er=Ee.key,ef=b.fetchers.get(Er),Zy=Mi(void 0,ef?ef.data:void 0);b.fetchers.set(Er,Zy),vn(Er),Ee.controller&&Y.set(Er,Ee.controller)}),Qe({fetchers:new Map(b.fetchers)});let Ho=()=>Xn.forEach(Ee=>vn(Ee.key));Q.signal.addEventListener("abort",Ho);let{loaderResults:Ko,fetcherResults:ne}=await Kd(b,Qt,wi,Xn,Cr);if(Q.signal.aborted)return;Q.signal.removeEventListener("abort",Ho),$.delete(x),Y.delete(x),Xn.forEach(Ee=>Y.delete(Ee.key));let ke=ua(Ko);if(ke)return Yn(Cr,ke.result,!1,{preventScrollReset:F});if(ke=ua(ne),ke)return J.add(ke.key),Yn(Cr,ke.result,!1,{preventScrollReset:F});let{loaderData:Tr,errors:Si}=kh(b,Qt,Ko,void 0,Xn,ne,Et);if(b.fetchers.has(x)){let Ee=xn(re.data);b.fetchers.set(x,Ee)}Yd(Vt),b.navigation.state==="loading"&&Vt>I?(Z(O,"Expected pending action"),L&&L.abort(),Pr(b.navigation.location,{matches:Qt,loaderData:Tr,errors:Si,fetchers:new Map(b.fetchers)})):(Qe({errors:Si,loaderData:Ph(b.loaderData,Tr,Qt,Si),fetchers:new Map(b.fetchers)}),ie=!1)}async function Ky(x,k,E,R,z,B,G,F,V){let j=b.fetchers.get(x);gn(x,Mi(V,j?j.data:void 0),{flushSync:G});let H=new AbortController,Q=Rr(e.history,E,H.signal);if(B){let re=await Bo(z,E,Q.signal);if(re.type==="aborted")return;if(re.type==="error"){Xt(x,k,re.error,{flushSync:G});return}else if(re.matches)z=re.matches,R=$i(z,E);else{Xt(x,k,it(404,{pathname:E}),{flushSync:G});return}}Y.set(x,H);let ee=D,ue=(await bi("loader",b,Q,[R],z,x))[R.route.id];if(On(ue)&&(ue=await ad(ue,Q.signal,!0)||ue),Y.get(x)===H&&Y.delete(x),!Q.signal.aborted){if(_e.has(x)){gn(x,xn(void 0));return}if(lr(ue))if(I>ee){gn(x,xn(void 0));return}else{J.add(x),await Yn(Q,ue,!1,{preventScrollReset:F});return}if(ft(ue)){Xt(x,k,ue.error);return}Z(!On(ue),"Unhandled fetcher deferred data"),gn(x,xn(ue.data))}}async function Yn(x,k,E,R){let{submission:z,fetcherSubmission:B,preventScrollReset:G,replace:F}=R===void 0?{}:R;k.response.headers.has("X-Remix-Revalidate")&&(ie=!0);let V=k.response.headers.get("Location");Z(V,"Expected a Location header on the redirect Response"),V=wh(V,new URL(x.url),l);let j=ko(b.location,V,{_isRedirect:!0});if(n){let re=!1;if(k.response.headers.has("X-Remix-Reload-Document"))re=!0;else if(od.test(V)){const Se=e.history.createURL(V);re=Se.origin!==t.location.origin||vi(Se.pathname,l)==null}if(re){F?t.location.replace(V):t.location.assign(V);return}}L=null;let H=F===!0||k.response.headers.has("X-Remix-Replace")?Oe.Replace:Oe.Push,{formMethod:Q,formAction:ee,formEncType:ze}=b.navigation;!z&&!B&&Q&&ee&&ze&&(z=Oh(b.navigation));let ue=z||B;if(nw.has(k.response.status)&&ue&&Mt(ue.formMethod))await Gn(H,j,{submission:me({},ue,{formAction:V}),preventScrollReset:G||C,enableViewTransition:E?A:void 0});else{let re=El(j,z);await Gn(H,j,{overrideNavigation:re,fetcherSubmission:B,preventScrollReset:G||C,enableViewTransition:E?A:void 0})}}async function bi(x,k,E,R,z,B){let G,F={};try{G=await cw(u,x,k,E,R,z,B,o,i)}catch(V){return R.forEach(j=>{F[j.route.id]={type:ae.error,error:V}}),F}for(let[V,j]of Object.entries(G))if(gw(j)){let H=j.result;F[V]={type:ae.redirect,response:hw(H,E,V,z,l,d.v7_relativeSplatPath)}}else F[V]=await fw(j);return F}async function Kd(x,k,E,R,z){let B=x.matches,G=bi("loader",x,z,E,k,null),F=Promise.all(R.map(async H=>{if(H.matches&&H.match&&H.controller){let ee=(await bi("loader",x,Rr(e.history,H.path,H.controller.signal),[H.match],H.matches,H.key))[H.match.route.id];return{[H.key]:ee}}else return Promise.resolve({[H.key]:{type:ae.error,error:it(404,{pathname:H.path})}})})),V=await G,j=(await F).reduce((H,Q)=>Object.assign(H,Q),{});return await Promise.all([bw(k,V,z.signal,B,x.loaderData),xw(k,j,R)]),{loaderResults:V,fetcherResults:j}}function Ys(){ie=!0,Ye.push(...Qs()),de.forEach((x,k)=>{Y.has(k)&&rt.add(k),vn(k)})}function gn(x,k,E){E===void 0&&(E={}),b.fetchers.set(x,k),Qe({fetchers:new Map(b.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function Xt(x,k,E,R){R===void 0&&(R={});let z=ir(b.matches,k);Io(x),Qe({errors:{[z.route.id]:E},fetchers:new Map(b.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function Wd(x){return d.v7_fetcherPersist&&(Ft.set(x,(Ft.get(x)||0)+1),_e.has(x)&&_e.delete(x)),b.fetchers.get(x)||rw}function Io(x){let k=b.fetchers.get(x);Y.has(x)&&!(k&&k.state==="loading"&&$.has(x))&&vn(x),de.delete(x),$.delete(x),J.delete(x),_e.delete(x),rt.delete(x),b.fetchers.delete(x)}function Wy(x){if(d.v7_fetcherPersist){let k=(Ft.get(x)||0)-1;k<=0?(Ft.delete(x),_e.add(x)):Ft.set(x,k)}else Io(x);Qe({fetchers:new Map(b.fetchers)})}function vn(x){let k=Y.get(x);k&&(k.abort(),Y.delete(x))}function qd(x){for(let k of x){let E=Wd(k),R=xn(E.data);b.fetchers.set(k,R)}}function Gd(){let x=[],k=!1;for(let E of J){let R=b.fetchers.get(E);Z(R,"Expected fetcher: "+E),R.state==="loading"&&(J.delete(E),x.push(E),k=!0)}return qd(x),k}function Yd(x){let k=[];for(let[E,R]of $)if(R<x){let z=b.fetchers.get(E);Z(z,"Expected fetcher: "+E),z.state==="loading"&&(vn(E),$.delete(E),k.push(E))}return qd(k),k.length>0}function qy(x,k){let E=b.blockers.get(x)||Di;return Xe.get(x)!==k&&Xe.set(x,k),E}function Xd(x){b.blockers.delete(x),Xe.delete(x)}function Uo(x,k){let E=b.blockers.get(x)||Di;Z(E.state==="unblocked"&&k.state==="blocked"||E.state==="blocked"&&k.state==="blocked"||E.state==="blocked"&&k.state==="proceeding"||E.state==="blocked"&&k.state==="unblocked"||E.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+k.state);let R=new Map(b.blockers);R.set(x,k),Qe({blockers:R})}function Qd(x){let{currentLocation:k,nextLocation:E,historyAction:R}=x;if(Xe.size===0)return;Xe.size>1&&ci(!1,"A router only supports one blocker at a time");let z=Array.from(Xe.entries()),[B,G]=z[z.length-1],F=b.blockers.get(B);if(!(F&&F.state==="proceeding")&&G({currentLocation:k,nextLocation:E,historyAction:R}))return B}function Xs(x){let k=it(404,{pathname:x}),E=s||a,{matches:R,route:z}=Th(E);return Qs(),{notFoundMatches:R,route:z,error:k}}function Qs(x){let k=[];return Et.forEach((E,R)=>{(!x||x(R))&&(E.cancel(),k.push(R),Et.delete(R))}),k}function Gy(x,k,E){if(y=x,w=k,m=E||null,!g&&b.navigation===Tl){g=!0;let R=Jd(b.location,b.matches);R!=null&&Qe({restoreScrollPosition:R})}return()=>{y=null,w=null,m=null}}function Zd(x,k){return m&&m(x,k.map(R=>Nx(R,b.loaderData)))||x.key}function Yy(x,k){if(y&&w){let E=Zd(x,k);y[E]=w()}}function Jd(x,k){if(y){let E=Zd(x,k),R=y[E];if(typeof R=="number")return R}return null}function $o(x,k,E){if(c)if(x){if(Object.keys(x[0].params).length>0)return{active:!0,matches:Ra(k,E,l,!0)}}else return{active:!0,matches:Ra(k,E,l,!0)||[]};return{active:!1,matches:null}}async function Bo(x,k,E){if(!c)return{type:"success",matches:x};let R=x;for(;;){let z=s==null,B=s||a,G=o;try{await c({path:k,matches:R,patch:(j,H)=>{E.aborted||xh(j,H,B,G,i)}})}catch(j){return{type:"error",error:j,partialMatches:R}}finally{z&&!E.aborted&&(a=[...a])}if(E.aborted)return{type:"aborted"};let F=rr(B,k,l);if(F)return{type:"success",matches:F};let V=Ra(B,k,l,!0);if(!V||R.length===V.length&&R.every((j,H)=>j.route.id===V[H].route.id))return{type:"success",matches:null};R=V}}function Xy(x){o={},s=rs(x,i,void 0,o)}function Qy(x,k){let E=s==null;xh(x,k,s||a,o,i),E&&(a=[...a],Qe({}))}return T={get basename(){return l},get future(){return d},get state(){return b},get routes(){return a},get window(){return t},initialize:zy,subscribe:Fy,enableScrollRestoration:Gy,navigate:Bd,fetch:By,revalidate:Vy,createHref:x=>e.history.createHref(x),encodeLocation:x=>e.history.encodeLocation(x),getFetcher:Wd,deleteFetcher:Wy,dispose:jy,getBlocker:qy,deleteBlocker:Xd,patchRoutes:Qy,_internalFetchControllers:Y,_internalActiveDeferreds:Et,_internalSetRoutes:Xy},T}function aw(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ju(e,t,n,r,i,o,a,s){let l,u;if(a){l=[];for(let d of t)if(l.push(d),d.route.id===a){u=d;break}}else l=t,u=t[t.length-1];let c=id(i||".",rd(l,o),vi(e.pathname,n)||e.pathname,s==="path");if(i==null&&(c.search=e.search,c.hash=e.hash),(i==null||i===""||i===".")&&u){let d=sd(c.search);if(u.route.index&&!d)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let f=new URLSearchParams(c.search),p=f.getAll("index");f.delete("index"),p.filter(m=>m).forEach(m=>f.append("index",m));let y=f.toString();c.search=y?"?"+y:""}}return r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:an([n,c.pathname])),br(c)}function gh(e,t,n,r){if(!r||!aw(r))return{path:n};if(r.formMethod&&!yw(r.formMethod))return{path:n,error:it(405,{method:r.formMethod})};let i=()=>({path:n,error:it(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),s=U0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Mt(a))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,y)=>{let[m,w]=y;return""+p+m+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Mt(a))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}Z(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Vu(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Vu(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Sh(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Sh(l)}catch{return i()}let c={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Mt(c.formMethod))return{path:n,submission:c};let d=Kn(n);return t&&d.search&&sd(d.search)&&l.append("index",""),d.search="?"+l,{path:br(d),submission:c}}function vh(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(i=>i.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function yh(e,t,n,r,i,o,a,s,l,u,c,d,f,p,y,m){let w=m?ft(m[1])?m[1].error:m[1].data:void 0,g=e.createURL(t.location),h=e.createURL(i),v=n;o&&t.errors?v=vh(n,Object.keys(t.errors)[0],!0):m&&ft(m[1])&&(v=vh(n,m[0]));let S=m?m[1].statusCode:void 0,T=a&&S&&S>=400,b=v.filter((C,L)=>{let{route:A}=C;if(A.lazy)return!0;if(A.loader==null)return!1;if(o)return Fu(A,t.loaderData,t.errors);if(sw(t.loaderData,t.matches[L],C)||l.some(pe=>pe===C.route.id))return!0;let K=t.matches[L],le=C;return bh(C,me({currentUrl:g,currentParams:K.params,nextUrl:h,nextParams:le.params},r,{actionResult:w,actionStatus:S,defaultShouldRevalidate:T?!1:s||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||V0(K,le)}))}),O=[];return d.forEach((C,L)=>{if(o||!n.some(ie=>ie.route.id===C.routeId)||c.has(L))return;let A=rr(p,C.path,y);if(!A){O.push({key:L,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let K=t.fetchers.get(L),le=$i(A,C.path),pe=!1;f.has(L)?pe=!1:u.has(L)?(u.delete(L),pe=!0):K&&K.state!=="idle"&&K.data===void 0?pe=s:pe=bh(le,me({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:w,actionStatus:S,defaultShouldRevalidate:T?!1:s})),pe&&O.push({key:L,routeId:C.routeId,path:C.path,matches:A,match:le,controller:new AbortController})}),[b,O]}function Fu(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,i=n!=null&&n[e.id]!==void 0;return!r&&i?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!i}function sw(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function V0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function bh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function xh(e,t,n,r,i){var o;let a;if(e){let u=r[e];Z(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),a=u.children}else a=n;let s=t.filter(u=>!a.some(c=>I0(u,c))),l=rs(s,i,[e||"_","patch",String(((o=a)==null?void 0:o.length)||"0")],r);a.push(...l)}function I0(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var i;return(i=t.children)==null?void 0:i.some(o=>I0(n,o))}):!1}async function lw(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Z(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";ci(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!Mx.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,me({},t(i),{lazy:void 0}))}async function uw(e){let{matches:t}=e,n=t.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,o,a)=>Object.assign(i,{[n[a].route.id]:o}),{})}async function cw(e,t,n,r,i,o,a,s,l,u){let c=o.map(p=>p.route.lazy?lw(p.route,l,s):void 0),d=o.map((p,y)=>{let m=c[y],w=i.some(h=>h.route.id===p.route.id);return me({},p,{shouldLoad:w,resolve:async h=>(h&&r.method==="GET"&&(p.route.lazy||p.route.loader)&&(w=!0),w?dw(t,r,p,m,h,u):Promise.resolve({type:ae.data,result:void 0}))})}),f=await e({matches:d,request:r,params:o[0].params,fetcherKey:a,context:u});try{await Promise.all(c)}catch{}return f}async function dw(e,t,n,r,i,o){let a,s,l=u=>{let c,d=new Promise((y,m)=>c=m);s=()=>c(),t.signal.addEventListener("abort",s);let f=y=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:o},...y!==void 0?[y]:[]),p=(async()=>{try{return{type:"data",result:await(i?i(m=>f(m)):f())}}catch(y){return{type:"error",result:y}}})();return Promise.race([p,d])};try{let u=n.route[e];if(r)if(u){let c,[d]=await Promise.all([l(u).catch(f=>{c=f}),r]);if(c!==void 0)throw c;a=d}else if(await r,u=n.route[e],u)a=await l(u);else if(e==="action"){let c=new URL(t.url),d=c.pathname+c.search;throw it(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:ae.data,result:void 0};else if(u)a=await l(u);else{let c=new URL(t.url),d=c.pathname+c.search;throw it(404,{pathname:d})}Z(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ae.error,result:u}}finally{s&&t.signal.removeEventListener("abort",s)}return a}async function fw(e){let{result:t,type:n}=e;if($0(t)){let u;try{let c=t.headers.get("Content-Type");c&&/\bapplication\/json\b/.test(c)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(c){return{type:ae.error,error:c}}return n===ae.error?{type:ae.error,error:new is(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ae.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ae.error){if(Eh(t)){var r;if(t.data instanceof Error){var i;return{type:ae.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status}}t=new is(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ae.error,error:t,statusCode:js(t)?t.status:void 0}}if(vw(t)){var o,a;return{type:ae.deferred,deferredData:t,statusCode:(o=t.init)==null?void 0:o.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(Eh(t)){var s,l;return{type:ae.data,data:t.data,statusCode:(s=t.init)==null?void 0:s.status,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function hw(e,t,n,r,i,o){let a=e.headers.get("Location");if(Z(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!od.test(a)){let s=r.slice(0,r.findIndex(l=>l.route.id===n)+1);a=ju(new URL(t.url),s,i,!0,a,o),e.headers.set("Location",a)}return e}function wh(e,t,n){if(od.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),o=vi(i.pathname,n)!=null;if(i.origin===t.origin&&o)return i.pathname+i.search+i.hash}return e}function Rr(e,t,n,r){let i=e.createURL(U0(t)).toString(),o={signal:n};if(r&&Mt(r.formMethod)){let{formMethod:a,formEncType:s}=r;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(r.json)):s==="text/plain"?o.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?o.body=Vu(r.formData):o.body=r.formData}return new Request(i,o)}function Vu(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Sh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function pw(e,t,n,r,i){let o={},a=null,s,l=!1,u={},c=n&&ft(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let f=d.route.id,p=t[f];if(Z(!lr(p),"Cannot handle redirect results in processLoaderData"),ft(p)){let y=p.error;c!==void 0&&(y=c,c=void 0),a=a||{};{let m=ir(e,f);a[m.route.id]==null&&(a[m.route.id]=y)}o[f]=void 0,l||(l=!0,s=js(p.error)?p.error.status:500),p.headers&&(u[f]=p.headers)}else On(p)?(r.set(f,p.deferredData),o[f]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!l&&(s=p.statusCode),p.headers&&(u[f]=p.headers)):(o[f]=p.data,p.statusCode&&p.statusCode!==200&&!l&&(s=p.statusCode),p.headers&&(u[f]=p.headers))}),c!==void 0&&n&&(a={[n[0]]:c},o[n[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:u}}function kh(e,t,n,r,i,o,a){let{loaderData:s,errors:l}=pw(t,n,r,a);return i.forEach(u=>{let{key:c,match:d,controller:f}=u,p=o[c];if(Z(p,"Did not find corresponding fetcher result"),!(f&&f.signal.aborted))if(ft(p)){let y=ir(e.matches,d==null?void 0:d.route.id);l&&l[y.route.id]||(l=me({},l,{[y.route.id]:p.error})),e.fetchers.delete(c)}else if(lr(p))Z(!1,"Unhandled fetcher revalidation redirect");else if(On(p))Z(!1,"Unhandled fetcher deferred data");else{let y=xn(p.data);e.fetchers.set(c,y)}}),{loaderData:s,errors:l}}function Ph(e,t,n,r){let i=me({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Ch(e){return e?ft(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ir(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Th(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function it(e,t){let{pathname:n,routeId:r,method:i,type:o,message:a}=t===void 0?{}:t,s="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):e===403?(s="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",l='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new is(e||500,s,new Error(l),!0)}function ua(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,i]=t[n];if(lr(i))return{key:r,result:i}}}function U0(e){let t=typeof e=="string"?Kn(e):e;return br(me({},t,{hash:""}))}function mw(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function gw(e){return $0(e.result)&&tw.has(e.result.status)}function On(e){return e.type===ae.deferred}function ft(e){return e.type===ae.error}function lr(e){return(e&&e.type)===ae.redirect}function Eh(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function vw(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function $0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yw(e){return ew.has(e.toLowerCase())}function Mt(e){return Zx.has(e.toLowerCase())}async function bw(e,t,n,r,i){let o=Object.entries(t);for(let a=0;a<o.length;a++){let[s,l]=o[a],u=e.find(f=>(f==null?void 0:f.route.id)===s);if(!u)continue;let c=r.find(f=>f.route.id===u.route.id),d=c!=null&&!V0(c,u)&&(i&&i[u.route.id])!==void 0;On(l)&&d&&await ad(l,n,!1).then(f=>{f&&(t[s]=f)})}}async function xw(e,t,n){for(let r=0;r<n.length;r++){let{key:i,routeId:o,controller:a}=n[r],s=t[i];e.find(u=>(u==null?void 0:u.route.id)===o)&&On(s)&&(Z(a,"Expected an AbortController for revalidating fetcher deferred result"),await ad(s,a.signal,!0).then(u=>{u&&(t[i]=u)}))}}async function ad(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ae.error,error:i}}return{type:ae.data,data:e.deferredData.data}}}function sd(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function $i(e,t){let n=typeof t=="string"?Kn(t).search:t.search;if(e[e.length-1].route.index&&sd(n||""))return e[e.length-1];let r=z0(e);return r[r.length-1]}function Oh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function El(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ww(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Mi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Sw(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function xn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function kw(e,t){try{let n=e.sessionStorage.getItem(F0);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function Pw(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(F0,JSON.stringify(n))}catch(r){ci(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}const Fs=P.createContext(null),B0=P.createContext(null),Sr=P.createContext(null),ld=P.createContext(null),Wn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),H0=P.createContext(null);function Cw(e,t){let{relative:n}=t===void 0?{}:t;_o()||Z(!1);let{basename:r,navigator:i}=P.useContext(Sr),{hash:o,pathname:a,search:s}=W0(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:an([r,a])),i.createHref({pathname:l,search:s,hash:o})}function _o(){return P.useContext(ld)!=null}function Vs(){return _o()||Z(!1),P.useContext(ld).location}function K0(e){P.useContext(Sr).static||P.useLayoutEffect(e)}function Tw(){let{isDataRoute:e}=P.useContext(Wn);return e?Iw():Ew()}function Ew(){_o()||Z(!1);let e=P.useContext(Fs),{basename:t,future:n,navigator:r}=P.useContext(Sr),{matches:i}=P.useContext(Wn),{pathname:o}=Vs(),a=JSON.stringify(rd(i,n.v7_relativeSplatPath)),s=P.useRef(!1);return K0(()=>{s.current=!0}),P.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=id(u,JSON.parse(a),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:an([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,o,e])}const Ow=P.createContext(null);function Rw(e){let t=P.useContext(Wn).outlet;return t&&P.createElement(Ow.Provider,{value:e},t)}function W0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(Sr),{matches:i}=P.useContext(Wn),{pathname:o}=Vs(),a=JSON.stringify(rd(i,r.v7_relativeSplatPath));return P.useMemo(()=>id(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Lw(e,t,n,r){_o()||Z(!1);let{navigator:i}=P.useContext(Sr),{matches:o}=P.useContext(Wn),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Vs(),c;c=u;let d=c.pathname||"/",f=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let p=rr(e,{pathname:f});return _w(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:an([l,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:an([l,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r)}function Dw(){let e=Vw(),t=js(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,null)}const Mw=P.createElement(Dw,null);class Aw extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(Wn.Provider,{value:this.props.routeContext},P.createElement(H0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nw(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Fs);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Wn.Provider,{value:t},r)}function _w(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);c>=0||Z(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,f)=>{let p,y=!1,m=null,w=null;n&&(p=s&&d.route.id?s[d.route.id]:void 0,m=d.route.errorElement||Mw,l&&(u<0&&f===0?(y=!0,w=null):u===f&&(y=!0,w=d.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),h=()=>{let v;return p?v=m:y?v=w:d.route.Component?v=P.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,P.createElement(Nw,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?P.createElement(Aw,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var q0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(q0||{}),as=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(as||{});function zw(e){let t=P.useContext(Fs);return t||Z(!1),t}function jw(e){let t=P.useContext(B0);return t||Z(!1),t}function Fw(e){let t=P.useContext(Wn);return t||Z(!1),t}function G0(e){let t=Fw(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function Vw(){var e;let t=P.useContext(H0),n=jw(as.UseRouteError),r=G0(as.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Iw(){let{router:e}=zw(q0.UseNavigateStable),t=G0(as.UseNavigateStable),n=P.useRef(!1);return K0(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,os({fromRouteId:t},o)))},[e,t])}const Rh={};function Uw(e,t){Rh[t]||(Rh[t]=!0,console.warn(t))}const Lr=(e,t,n)=>Uw(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function $w(e,t){e!=null&&e.v7_startTransition||Lr("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&(!t||!t.v7_relativeSplatPath)&&Lr("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist||Lr("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod||Lr("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration||Lr("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation||Lr("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function Bw(e){return Rw(e.context)}function Hw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Oe.Pop,navigator:o,static:a=!1,future:s}=e;_o()&&Z(!1);let l=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:o,static:a,future:os({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Kn(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:y="default"}=r,m=P.useMemo(()=>{let w=vi(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:y},navigationType:i}},[l,c,d,f,p,y,i]);return m==null?null:P.createElement(Sr.Provider,{value:u},P.createElement(ld.Provider,{children:n,value:m}))}new Promise(()=>{});function Kw(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:P.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:P.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:P.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}function Ww(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function qw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gw(e,t){return e.button===0&&(!t||t==="_self")&&!qw(e)}const Yw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Xw="6";try{window.__reactRouterVersion=Xw}catch{}function Qw(e,t){return ow({basename:void 0,future:Po({},void 0,{v7_prependBasename:!0}),history:Rx({window:void 0}),hydrationData:Zw(),routes:e,mapRouteProperties:Kw,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function Zw(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Po({},t,{errors:Jw(t.errors)})),t}function Jw(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new is(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const eS=P.createContext({isTransitioning:!1}),tS=P.createContext(new Map),nS="startTransition",Lh=p1[nS],rS="flushSync",Dh=Tx[rS];function iS(e){Lh?Lh(e):e()}function Ai(e){Dh?Dh(e):e()}class oS{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function aS(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=P.useState(n.state),[a,s]=P.useState(),[l,u]=P.useState({isTransitioning:!1}),[c,d]=P.useState(),[f,p]=P.useState(),[y,m]=P.useState(),w=P.useRef(new Map),{v7_startTransition:g}=r||{},h=P.useCallback(C=>{g?iS(C):C()},[g]),v=P.useCallback((C,L)=>{let{deletedFetchers:A,flushSync:K,viewTransitionOpts:le}=L;A.forEach(ie=>w.current.delete(ie)),C.fetchers.forEach((ie,Ye)=>{ie.data!==void 0&&w.current.set(Ye,ie.data)});let pe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!le||pe){K?Ai(()=>o(C)):h(()=>o(C));return}if(K){Ai(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let ie=n.window.document.startViewTransition(()=>{Ai(()=>o(C))});ie.finished.finally(()=>{Ai(()=>{d(void 0),p(void 0),s(void 0),u({isTransitioning:!1})})}),Ai(()=>p(ie));return}f?(c&&c.resolve(),f.skipTransition(),m({state:C,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(s(C),u({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[n.window,f,c,w,h]);P.useLayoutEffect(()=>n.subscribe(v),[n,v]),P.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new oS)},[l]),P.useEffect(()=>{if(c&&a&&n.window){let C=a,L=c.promise,A=n.window.document.startViewTransition(async()=>{h(()=>o(C)),await L});A.finished.finally(()=>{d(void 0),p(void 0),s(void 0),u({isTransitioning:!1})}),p(A)}},[h,a,c,n.window]),P.useEffect(()=>{c&&a&&i.location.key===a.location.key&&c.resolve()},[c,f,i.location,a]),P.useEffect(()=>{!l.isTransitioning&&y&&(s(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),m(void 0))},[l.isTransitioning,y]),P.useEffect(()=>{},[]);let S=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,L,A)=>n.navigate(C,{state:L,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(C,L,A)=>n.navigate(C,{replace:!0,state:L,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),T=n.basename||"/",b=P.useMemo(()=>({router:n,navigator:S,static:!1,basename:T}),[n,S,T]),O=P.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return P.useEffect(()=>$w(r,n.future),[r,n.future]),P.createElement(P.Fragment,null,P.createElement(Fs.Provider,{value:b},P.createElement(B0.Provider,{value:i},P.createElement(tS.Provider,{value:w.current},P.createElement(eS.Provider,{value:l},P.createElement(Hw,{basename:T,location:i.location,navigationType:i.historyAction,navigator:S,future:O},i.initialized||n.future.v7_partialHydration?P.createElement(sS,{routes:n.routes,future:n.future,state:i}):t))))),null)}const sS=P.memo(lS);function lS(e){let{routes:t,future:n,state:r}=e;return Lw(t,void 0,r,n)}const uS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y0=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c,viewTransition:d}=t,f=Ww(t,Yw),{basename:p}=P.useContext(Sr),y,m=!1;if(typeof u=="string"&&cS.test(u)&&(y=u,uS))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),T=vi(S.pathname,p);S.origin===v.origin&&T!=null?u=T+S.search+S.hash:m=!0}catch{}let w=Cw(u,{relative:i}),g=dS(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:i,viewTransition:d});function h(v){r&&r(v),v.defaultPrevented||g(v)}return P.createElement("a",Po({},f,{href:y||w,onClick:m||o?r:h,ref:n,target:l}))});var Mh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mh||(Mh={}));var Ah;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ah||(Ah={}));function dS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=Tw(),u=Vs(),c=W0(e,{relative:a});return P.useCallback(d=>{if(Gw(d,n)){d.preventDefault();let f=r!==void 0?r:br(u)===br(c);l(e,{replace:f,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,l,c,r,i,n,e,o,a,s])}var X0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Nh=Je.createContext&&Je.createContext(X0),fS=["attr","size","title"];function hS(e,t){if(e==null)return{};var n=pS(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pS(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}function _h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ls(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_h(Object(n),!0).forEach(function(r){mS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mS(e,t,n){return t=gS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gS(e){var t=vS(e,"string");return typeof t=="symbol"?t:t+""}function vS(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Q0(e){return e&&e.map((t,n)=>Je.createElement(t.tag,ls({key:n},t.attr),Q0(t.child)))}function zo(e){return t=>Je.createElement(yS,ss({attr:ls({},e.attr)},t),Q0(e.child))}function yS(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=hS(e,fS),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Je.createElement("svg",ss({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:ls(ls({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&Je.createElement("title",null,o),e.children)};return Nh!==void 0?Je.createElement(Nh.Consumer,null,n=>t(n)):t(X0)}function bS(e){return zo({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M2 377.4l43 74.3A51.35 51.35 0 0 0 90.9 480h285.4l-59.2-102.6zM501.8 350L335.6 59.3A51.38 51.38 0 0 0 290.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275 304.5l-115.5-200L44 304.5z"},child:[]}]})(e)}function xS(e){return zo({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(e)}function wS(e){return zo({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"},child:[]}]})(e)}function SS(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Is(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Iu=e=>Array.isArray(e);function Z0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Co(e){return typeof e=="string"||Array.isArray(e)}function zh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function ud(e,t,n,r){if(typeof t=="function"){const[i,o]=zh(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=zh(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Us(e,t,n){const r=e.getProps();return ud(r,t,n!==void 0?n:r.custom,e)}const cd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dd=["initial",...cd],jo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],kr=new Set(jo),sn=e=>e*1e3,ln=e=>e/1e3,kS={type:"spring",stiffness:500,damping:25,restSpeed:10},PS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),CS={type:"keyframes",duration:.8},TS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ES=(e,{keyframes:t})=>t.length>2?CS:kr.has(e)?e.startsWith("scale")?PS(t[1]):kS:TS;function fd(e,t){return e?e[t]||e.default||e:void 0}const OS={useManualTiming:!1},RS=e=>e!==null;function $s(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(RS),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const qe=e=>e;function LS(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(u){o.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,c=!1,d=!1)=>{const p=d&&r?t:n;return c&&o.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(u))}};return l}const ca=["read","resolveKeyframes","update","preRender","render","postRender"],DS=40;function J0(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=ca.reduce((g,h)=>(g[h]=LS(o),g),{}),{read:s,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=a,p=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,DS),1),i.timestamp=g,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),c.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(p))},y=()=>{n=!0,r=!0,i.isProcessing||e(p)};return{schedule:ca.reduce((g,h)=>{const v=a[h];return g[h]=(S,T=!1,b=!1)=>(n||y(),v.schedule(S,T,b)),g},{}),cancel:g=>{for(let h=0;h<ca.length;h++)a[ca[h]].cancel(g)},state:i,steps:a}}const{schedule:se,cancel:Vn,state:Fe,steps:Ol}=J0(typeof requestAnimationFrame<"u"?requestAnimationFrame:qe,!0),ev=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,MS=1e-7,AS=12;function NS(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=ev(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>MS&&++s<AS);return a}function Fo(e,t,n,r){if(e===t&&n===r)return qe;const i=o=>NS(o,0,1,e,n);return o=>o===0||o===1?o:ev(i(o),t,r)}const tv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,nv=e=>t=>1-e(1-t),rv=Fo(.33,1.53,.69,.99),hd=nv(rv),iv=tv(hd),ov=e=>(e*=2)<1?.5*hd(e):.5*(2-Math.pow(2,-10*(e-1))),pd=e=>1-Math.sin(Math.acos(e)),av=nv(pd),sv=tv(pd),lv=e=>/^0[^.\s]+$/u.test(e);function _S(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||lv(e):!0}let Uu=qe;const uv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),cv=e=>t=>typeof t=="string"&&t.startsWith(e),dv=cv("--"),zS=cv("var(--"),md=e=>zS(e)?jS.test(e.split("/*")[0].trim()):!1,jS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,FS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function VS(e){const t=FS.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function fv(e,t,n=1){const[r,i]=VS(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return uv(a)?parseFloat(a):a}return md(i)?fv(i,t,n+1):i}const In=(e,t,n)=>n>t?t:n<e?e:n,yi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},To={...yi,transform:e=>In(0,1,e)},da={...yi,default:1},Vo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),wn=Vo("deg"),qt=Vo("%"),W=Vo("px"),IS=Vo("vh"),US=Vo("vw"),jh={...qt,parse:e=>qt.parse(e)/100,transform:e=>qt.transform(e*100)},$S=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Fh=e=>e===yi||e===W,Vh=(e,t)=>parseFloat(e.split(", ")[t]),Ih=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Vh(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Vh(o[1],e):0}},BS=new Set(["x","y","z"]),HS=jo.filter(e=>!BS.has(e));function KS(e){const t=[];return HS.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const di={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Ih(4,13),y:Ih(5,14)};di.translateX=di.x;di.translateY=di.y;const hv=e=>t=>t.test(e),WS={test:e=>e==="auto",parse:e=>e},pv=[yi,W,qt,wn,US,IS,WS],Uh=e=>pv.find(hv(e)),fr=new Set;let $u=!1,Bu=!1;function mv(){if(Bu){const e=Array.from(fr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=KS(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var s;(s=r.getValue(o))===null||s===void 0||s.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Bu=!1,$u=!1,fr.forEach(e=>e.complete()),fr.clear()}function gv(){fr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Bu=!0)})}function qS(){gv(),mv()}class gd{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(fr.add(this),$u||($u=!0,se.read(gv),se.resolveKeyframes(mv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),fr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,fr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const to=e=>Math.round(e*1e5)/1e5,vd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function GS(e){return e==null}const YS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yd=(e,t)=>n=>!!(typeof n=="string"&&YS.test(n)&&n.startsWith(e)||t&&!GS(n)&&Object.prototype.hasOwnProperty.call(n,t)),vv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(vd);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},XS=e=>In(0,255,e),Rl={...yi,transform:e=>Math.round(XS(e))},ur={test:yd("rgb","red"),parse:vv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Rl.transform(e)+", "+Rl.transform(t)+", "+Rl.transform(n)+", "+to(To.transform(r))+")"};function QS(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Hu={test:yd("#"),parse:QS,transform:ur.transform},Wr={test:yd("hsl","hue"),parse:vv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+qt.transform(to(t))+", "+qt.transform(to(n))+", "+to(To.transform(r))+")"},He={test:e=>ur.test(e)||Hu.test(e)||Wr.test(e),parse:e=>ur.test(e)?ur.parse(e):Wr.test(e)?Wr.parse(e):Hu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ur.transform(e):Wr.transform(e)},ZS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function JS(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(vd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(ZS))===null||n===void 0?void 0:n.length)||0)>0}const yv="number",bv="color",ek="var",tk="var(",$h="${}",nk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Eo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(nk,l=>(He.test(l)?(r.color.push(o),i.push(bv),n.push(He.parse(l))):l.startsWith(tk)?(r.var.push(o),i.push(ek),n.push(l)):(r.number.push(o),i.push(yv),n.push(parseFloat(l))),++o,$h)).split($h);return{values:n,split:s,indexes:r,types:i}}function xv(e){return Eo(e).values}function wv(e){const{split:t,types:n}=Eo(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const s=n[a];s===yv?o+=to(i[a]):s===bv?o+=He.transform(i[a]):o+=i[a]}return o}}const rk=e=>typeof e=="number"?0:e;function ik(e){const t=xv(e);return wv(e)(t.map(rk))}const Un={test:JS,parse:xv,createTransformer:wv,getAnimatableNone:ik},ok=new Set(["brightness","contrast","saturate","opacity"]);function ak(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(vd)||[];if(!r)return e;const i=n.replace(r,"");let o=ok.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const sk=/\b([a-z-]*)\(.*?\)/gu,Ku={...Un,getAnimatableNone:e=>{const t=e.match(sk);return t?t.map(ak).join(" "):e}},lk={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},uk={rotate:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scale:da,scaleX:da,scaleY:da,scaleZ:da,skew:wn,skewX:wn,skewY:wn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:To,originX:jh,originY:jh,originZ:W},Bh={...yi,transform:Math.round},bd={...lk,...uk,zIndex:Bh,size:W,fillOpacity:To,strokeOpacity:To,numOctaves:Bh},ck={...bd,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:Ku,WebkitFilter:Ku},xd=e=>ck[e];function Sv(e,t){let n=xd(e);return n!==Ku&&(n=Un),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const dk=new Set(["auto","none","0"]);function fk(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!dk.has(o)&&Eo(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Sv(n,i)}class kv extends gd{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),md(u))){const c=fv(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!$S.has(r)||t.length!==2)return;const[i,o]=t,a=Uh(i),s=Uh(o);if(a!==s)if(Fh(a)&&Fh(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)_S(t[i])&&r.push(i);r.length&&fk(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=di[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=di[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function wd(e){return typeof e=="function"}let La;function hk(){La=void 0}const Gt={now:()=>(La===void 0&&Gt.set(Fe.isProcessing||OS.useManualTiming?Fe.timestamp:performance.now()),La),set:e=>{La=e,queueMicrotask(hk)}},Hh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Un.test(e)||e==="0")&&!e.startsWith("url("));function pk(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function mk(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=Hh(i,t),s=Hh(o,t);return!a||!s?!1:pk(e)||(n==="spring"||wd(n))&&r}const gk=40;class Pv{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Gt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>gk?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&qS(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Gt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!mk(t,r,i,o))if(a)this.options.duration=0;else{l==null||l($s(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Cv(e,t){return t?e*(1e3/t):0}const vk=5;function Tv(e,t,n){const r=Math.max(t-vk,0);return Cv(n-e(r),t-r)}const Ll=.001,yk=.01,bk=10,xk=.05,wk=1;function Sk({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,a=1-t;a=In(xk,wk,a),e=In(yk,bk,ln(e)),a<1?(i=u=>{const c=u*a,d=c*e,f=c-n,p=Wu(u,a),y=Math.exp(-d);return Ll-f/p*y},o=u=>{const d=u*a*e,f=d*n+n,p=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-d),m=Wu(Math.pow(u,2),a);return(-i(u)+Ll>0?-1:1)*((f-p)*y)/m}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Ll+c*d},o=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=Pk(i,o,s);if(e=sn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const kk=12;function Pk(e,t,n){let r=n;for(let i=1;i<kk;i++)r=r-e(r)/t(r);return r}function Wu(e,t){return e*Math.sqrt(1-t*t)}const Ck=["duration","bounce"],Tk=["stiffness","damping","mass"];function Kh(e,t){return t.some(n=>e[n]!==void 0)}function Ek(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Kh(e,Tk)&&Kh(e,Ck)){const n=Sk(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Ev({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:s,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:f}=Ek({...r,velocity:-ln(r.velocity||0)}),p=d||0,y=l/(2*Math.sqrt(s*u)),m=o-i,w=ln(Math.sqrt(s/u)),g=Math.abs(m)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(y<1){const v=Wu(w,y);h=S=>{const T=Math.exp(-y*w*S);return o-T*((p+y*w*m)/v*Math.sin(v*S)+m*Math.cos(v*S))}}else if(y===1)h=v=>o-Math.exp(-w*v)*(m+(p+w*m)*v);else{const v=w*Math.sqrt(y*y-1);h=S=>{const T=Math.exp(-y*w*S),b=Math.min(v*S,300);return o-T*((p+y*w*m)*Math.sinh(b)+v*m*Math.cosh(b))/v}}return{calculatedDuration:f&&c||null,next:v=>{const S=h(v);if(f)a.done=v>=c;else{let T=0;y<1&&(T=v===0?sn(p):Tv(h,v,S));const b=Math.abs(T)<=n,O=Math.abs(o-S)<=t;a.done=b&&O}return a.value=a.done?o:S,a}}}function Wh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],f={done:!1,value:d},p=C=>s!==void 0&&C<s||l!==void 0&&C>l,y=C=>s===void 0?l:l===void 0||Math.abs(s-C)<Math.abs(l-C)?s:l;let m=n*t;const w=d+m,g=a===void 0?w:a(w);g!==w&&(m=g-d);const h=C=>-m*Math.exp(-C/r),v=C=>g+h(C),S=C=>{const L=h(C),A=v(C);f.done=Math.abs(L)<=u,f.value=f.done?g:A};let T,b;const O=C=>{p(f.value)&&(T=C,b=Ev({keyframes:[f.value,y(f.value)],velocity:Tv(v,C,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return O(0),{calculatedDuration:null,next:C=>{let L=!1;return!b&&T===void 0&&(L=!0,S(C),O(C)),T!==void 0&&C>=T?b.next(C-T):(!L&&S(C),f)}}}const Ok=Fo(.42,0,1,1),Rk=Fo(0,0,.58,1),Ov=Fo(.42,0,.58,1),Lk=e=>Array.isArray(e)&&typeof e[0]!="number",Sd=e=>Array.isArray(e)&&typeof e[0]=="number",qh={linear:qe,easeIn:Ok,easeInOut:Ov,easeOut:Rk,circIn:pd,circInOut:sv,circOut:av,backIn:hd,backInOut:iv,backOut:rv,anticipate:ov},Gh=e=>{if(Sd(e)){Uu(e.length===4);const[t,n,r,i]=e;return Fo(t,n,r,i)}else if(typeof e=="string")return Uu(qh[e]!==void 0),qh[e];return e},Dk=(e,t)=>n=>t(e(n)),un=(...e)=>e.reduce(Dk),fi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},be=(e,t,n)=>e+(t-e)*n;function Dl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Mk({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=Dl(l,s,e+1/3),o=Dl(l,s,e),a=Dl(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function us(e,t){return n=>n>0?t:e}const Ml=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ak=[Hu,ur,Wr],Nk=e=>Ak.find(t=>t.test(e));function Yh(e){const t=Nk(e);if(!t)return!1;let n=t.parse(e);return t===Wr&&(n=Mk(n)),n}const Xh=(e,t)=>{const n=Yh(e),r=Yh(t);if(!n||!r)return us(e,t);const i={...n};return o=>(i.red=Ml(n.red,r.red,o),i.green=Ml(n.green,r.green,o),i.blue=Ml(n.blue,r.blue,o),i.alpha=be(n.alpha,r.alpha,o),ur.transform(i))},qu=new Set(["none","hidden"]);function _k(e,t){return qu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function zk(e,t){return n=>be(e,t,n)}function kd(e){return typeof e=="number"?zk:typeof e=="string"?md(e)?us:He.test(e)?Xh:Vk:Array.isArray(e)?Rv:typeof e=="object"?He.test(e)?Xh:jk:us}function Rv(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>kd(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function jk(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=kd(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Fk(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[o]=l,i[a]++}return r}const Vk=(e,t)=>{const n=Un.createTransformer(t),r=Eo(e),i=Eo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?qu.has(e)&&!i.values.length||qu.has(t)&&!r.values.length?_k(e,t):un(Rv(Fk(r,i),i.values),n):us(e,t)};function Lv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?be(e,t,n):kd(e)(e,t)}function Ik(e,t,n){const r=[],i=n||Lv,o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||qe:t;s=un(l,s)}r.push(s)}return r}function Uk(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Uu(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Ik(t,r,i),s=a.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=fi(e[c],e[c+1],u);return a[c](d)};return n?u=>l(In(e[0],e[o-1],u)):l}function $k(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=fi(0,t,r);e.push(be(n,1,i))}}function Bk(e){const t=[0];return $k(t,e.length-1),t}function Hk(e,t){return e.map(n=>n*t)}function Kk(e,t){return e.map(()=>t||Ov).splice(0,e.length-1)}function cs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Lk(r)?r.map(Gh):Gh(r),o={done:!1,value:t[0]},a=Hk(n&&n.length===t.length?n:Bk(t),e),s=Uk(a,t,{ease:Array.isArray(i)?i:Kk(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}const Qh=2e4;function Wk(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Qh;)t+=n,r=e.next(t);return t>=Qh?1/0:t}const qk=e=>{const t=({timestamp:n})=>e(n);return{start:()=>se.update(t,!0),stop:()=>Vn(t),now:()=>Fe.isProcessing?Fe.timestamp:Gt.now()}},Gk={decay:Wh,inertia:Wh,tween:cs,keyframes:cs,spring:Ev},Yk=e=>e/100;class Pd extends Pv{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||gd,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(o,s,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,s=wd(n)?n:Gk[n]||cs;let l,u;s!==cs&&typeof t[0]!="number"&&(l=un(Yk,Lv(t[0],t[1])),t=[0,100]);const c=s({...this.options,keyframes:t});o==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Wk(c));const{calculatedDuration:d}=c,f=d+i,p=f*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:p,repeatType:y,repeatDelay:m,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let v=this.currentTime,S=o;if(p){const C=Math.min(this.currentTime,c)/d;let L=Math.floor(C),A=C%1;!A&&C>=1&&(A=1),A===1&&L--,L=Math.min(L,p+1),!!(L%2)&&(y==="reverse"?(A=1-A,m&&(A-=m/d)):y==="mirror"&&(S=a)),v=In(0,1,A)*d}const T=h?{done:!1,value:l[0]}:S.next(v);s&&(T.value=s(T.value));let{done:b}=T;!h&&u!==null&&(b=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return O&&i!==void 0&&(T.value=$s(l,this.options,i)),w&&w(T.value),O&&this.finish(),T}get duration(){const{resolved:t}=this;return t?ln(t.calculatedDuration):0}get time(){return ln(this.currentTime)}set time(t){t=sn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=ln(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=qk,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Xk=new Set(["opacity","clipPath","filter","transform"]),Qk=10,Zk=(e,t)=>{let n="";const r=Math.max(Math.round(t/Qk),2);for(let i=0;i<r;i++)n+=e(fi(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Cd(e){let t;return()=>(t===void 0&&(t=e()),t)}const Jk={linearEasing:void 0};function eP(e,t){const n=Cd(e);return()=>{var r;return(r=Jk[t])!==null&&r!==void 0?r:n()}}const ds=eP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Dv(e){return!!(typeof e=="function"&&ds()||!e||typeof e=="string"&&(e in Gu||ds())||Sd(e)||Array.isArray(e)&&e.every(Dv))}const Bi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Gu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bi([0,.65,.55,1]),circOut:Bi([.55,0,1,.45]),backIn:Bi([.31,.01,.66,-.59]),backOut:Bi([.33,1.53,.69,.99])};function Mv(e,t){if(e)return typeof e=="function"&&ds()?Zk(e,t):Sd(e)?Bi(e):Array.isArray(e)?e.map(n=>Mv(n,t)||Gu.easeOut):Gu[e]}function tP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=Mv(s,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function Zh(e,t){e.timeline=t,e.onfinish=null}const nP=Cd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),fs=10,rP=2e4;function iP(e){return wd(e.type)||e.type==="spring"||!Dv(e.ease)}function oP(e,t){const n=new Pd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<rP;)r=n.sample(o),i.push(r.value),o+=fs;return{times:void 0,keyframes:i,duration:o-fs,ease:"linear"}}const Av={anticipate:ov,backInOut:iv,circInOut:sv};function aP(e){return e in Av}class Jh extends Pv{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new kv(o,(a,s)=>this.onKeyframesResolved(a,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:a,type:s,motionValue:l,name:u,startTime:c}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof a=="string"&&ds()&&aP(a)&&(a=Av[a]),iP(this.options)){const{onComplete:f,onUpdate:p,motionValue:y,element:m,...w}=this.options,g=oP(t,w);t=g.keyframes,t.length===1&&(t[1]=t[0]),i=g.duration,o=g.times,a=g.ease,s="keyframes"}const d=tP(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:a});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Zh(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;l.set($s(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:o,type:s,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return ln(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return ln(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=sn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return qe;const{animation:r}=n;Zh(r,t)}return qe}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...p}=this.options,y=new Pd({...p,keyframes:r,duration:i,type:o,ease:a,times:s,isGenerator:!0}),m=sn(this.time);u.setWithVelocity(y.sample(m-fs).value,y.sample(m).value,fs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:s}=t;return nP()&&r&&Xk.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&a!==0&&s!=="inertia"}}const sP=Cd(()=>window.ScrollTimeline!==void 0);class lP{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>sP()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function uP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Td=(e,t,n,r={},i,o)=>a=>{const s=fd(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-sn(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:f=>{t.set(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};uP(s)||(c={...c,...ES(e,c)}),c.duration&&(c.duration=sn(c.duration)),c.repeatDelay&&(c.repeatDelay=sn(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!o&&t.get()!==void 0){const f=$s(c.keyframes,s);if(f!==void 0)return se.update(()=>{c.onUpdate(f),c.onComplete()}),new lP([])}return!o&&Jh.supports(c)?new Jh(c):new Pd(c)},cP=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),dP=e=>Iu(e)?e[e.length-1]||0:e;function Ed(e,t){e.indexOf(t)===-1&&e.push(t)}function Od(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Rd{constructor(){this.subscriptions=[]}add(t){return Ed(this.subscriptions,t),()=>Od(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ep=30,fP=e=>!isNaN(parseFloat(e));class hP{constructor(t,n={}){this.version="11.11.17",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Gt.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Gt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=fP(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Rd);const r=this.events[t].add(n);return t==="change"?()=>{r(),se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Gt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ep)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ep);return Cv(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Oo(e,t){return new hP(e,t)}function pP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Oo(n))}function mP(e,t){const n=Us(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=dP(o[a]);pP(e,a,s)}}const Ld=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gP="framerAppearId",Nv="data-"+Ld(gP);function _v(e){return e.props[Nv]}const We=e=>!!(e&&e.getVelocity);function vP(e){return!!(We(e)&&e.add)}function Yu(e,t){const n=e.getValue("willChange");if(vP(n))return n.add(t)}function yP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function zv(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(a=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const f=e.getValue(d,(o=e.latestValues[d])!==null&&o!==void 0?o:null),p=l[d];if(p===void 0||c&&yP(c,d))continue;const y={delay:n,...fd(a||{},d)};let m=!1;if(window.MotionHandoffAnimation){const g=_v(e);if(g){const h=window.MotionHandoffAnimation(g,d,se);h!==null&&(y.startTime=h,m=!0)}}Yu(e,d),f.start(Td(d,f,p,e.shouldReduceMotion&&kr.has(d)?{type:!1}:y,e,m));const w=f.animation;w&&u.push(w)}return s&&Promise.all(u).then(()=>{se.update(()=>{s&&mP(e,s)})}),u}function Xu(e,t,n={}){var r;const i=Us(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(zv(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return bP(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[a,s]:[s,a];return u().then(()=>c())}else return Promise.all([a(),s(n.delay)])}function bP(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(xP).forEach((u,c)=>{u.notify("AnimationStart",t),a.push(Xu(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function xP(e,t){return e.sortNodePosition(t)}function wP(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Xu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Xu(e,t,n);else{const i=typeof t=="function"?Us(e,t,n.custom):t;r=Promise.all(zv(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const SP=dd.length;function jv(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?jv(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<SP;n++){const r=dd[n],i=e.props[r];(Co(i)||i===!1)&&(t[r]=i)}return t}const kP=[...cd].reverse(),PP=cd.length;function CP(e){return t=>Promise.all(t.map(({animation:n,options:r})=>wP(e,n,r)))}function TP(e){let t=CP(e),n=tp(),r=!0;const i=l=>(u,c)=>{var d;const f=Us(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:y,...m}=f;u={...u,...m,...y}}return u};function o(l){t=l(e)}function a(l){const{props:u}=e,c=jv(e.parent)||{},d=[],f=new Set;let p={},y=1/0;for(let w=0;w<PP;w++){const g=kP[w],h=n[g],v=u[g]!==void 0?u[g]:c[g],S=Co(v),T=g===l?h.isActive:null;T===!1&&(y=w);let b=v===c[g]&&v!==u[g]&&S;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...p},!h.isActive&&T===null||!v&&!h.prevProp||Is(v)||typeof v=="boolean")continue;const O=EP(h.prevProp,v);let C=O||g===l&&h.isActive&&!b&&S||w>y&&S,L=!1;const A=Array.isArray(v)?v:[v];let K=A.reduce(i(g),{});T===!1&&(K={});const{prevResolvedValues:le={}}=h,pe={...le,...K},ie=Y=>{C=!0,f.has(Y)&&(L=!0,f.delete(Y)),h.needsAnimating[Y]=!0;const D=e.getValue(Y);D&&(D.liveStyle=!1)};for(const Y in pe){const D=K[Y],I=le[Y];if(p.hasOwnProperty(Y))continue;let $=!1;Iu(D)&&Iu(I)?$=!Z0(D,I):$=D!==I,$?D!=null?ie(Y):f.add(Y):D!==void 0&&f.has(Y)?ie(Y):h.protectedKeys[Y]=!0}h.prevProp=v,h.prevResolvedValues=K,h.isActive&&(p={...p,...K}),r&&e.blockInitialAnimation&&(C=!1),C&&(!(b&&O)||L)&&d.push(...A.map(Y=>({animation:Y,options:{type:g}})))}if(f.size){const w={};f.forEach(g=>{const h=e.getBaseTarget(g),v=e.getValue(g);v&&(v.liveStyle=!0),w[g]=h??null}),d.push({animation:w})}let m=!!d.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(m=!1),r=!1,m?t(d):Promise.resolve()}function s(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const d=a(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=tp(),r=!0}}}function EP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Z0(t,e):!1}function Qn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tp(){return{animate:Qn(!0),whileInView:Qn(),whileHover:Qn(),whileTap:Qn(),whileDrag:Qn(),whileFocus:Qn(),exit:Qn()}}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class OP extends qn{constructor(t){super(t),t.animationState||(t.animationState=TP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Is(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let RP=0;class LP extends qn{constructor(){super(...arguments),this.id=RP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const DP={animation:{Feature:OP},exit:{Feature:LP}},Fv=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Bs(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const MP=e=>t=>Fv(t)&&e(t,Bs(t));function rn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function cn(e,t,n,r){return rn(e,t,MP(n),r)}const np=(e,t)=>Math.abs(e-t);function AP(e,t){const n=np(e.x,t.x),r=np(e.y,t.y);return Math.sqrt(n**2+r**2)}class Vv{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Nl(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=AP(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:y}=d,{timestamp:m}=Fe;this.history.push({...y,timestamp:m});const{onStart:w,onMove:g}=this.handlers;f||(w&&w(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Al(f,this.transformPagePoint),se.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Nl(d.type==="pointercancel"?this.lastMoveEventInfo:Al(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,w),y&&y(d,w)},!Fv(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Bs(t),s=Al(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=Fe;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,Nl(s,this.history)),this.removeListeners=un(cn(this.contextWindow,"pointermove",this.handlePointerMove),cn(this.contextWindow,"pointerup",this.handlePointerUp),cn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Vn(this.updatePoint)}}function Al(e,t){return t?{point:t(e.point)}:e}function rp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Nl({point:e},t){return{point:e,delta:rp(e,Iv(t)),offset:rp(e,NP(t)),velocity:_P(t,.1)}}function NP(e){return e[0]}function Iv(e){return e[e.length-1]}function _P(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Iv(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>sn(t)));)n--;if(!r)return{x:0,y:0};const o=ln(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Uv(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const ip=Uv("dragHorizontal"),op=Uv("dragVertical");function $v(e){let t=!1;if(e==="y")t=op();else if(e==="x")t=ip();else{const n=ip(),r=op();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Bv(){const e=$v(!0);return e?(e(),!1):!0}function qr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Hv=1e-4,zP=1-Hv,jP=1+Hv,Kv=.01,FP=0-Kv,VP=0+Kv;function gt(e){return e.max-e.min}function IP(e,t,n){return Math.abs(e-t)<=n}function ap(e,t,n,r=.5){e.origin=r,e.originPoint=be(t.min,t.max,e.origin),e.scale=gt(n)/gt(t),e.translate=be(n.min,n.max,e.origin)-e.originPoint,(e.scale>=zP&&e.scale<=jP||isNaN(e.scale))&&(e.scale=1),(e.translate>=FP&&e.translate<=VP||isNaN(e.translate))&&(e.translate=0)}function no(e,t,n,r){ap(e.x,t.x,n.x,r?r.originX:void 0),ap(e.y,t.y,n.y,r?r.originY:void 0)}function sp(e,t,n){e.min=n.min+t.min,e.max=e.min+gt(t)}function UP(e,t,n){sp(e.x,t.x,n.x),sp(e.y,t.y,n.y)}function lp(e,t,n){e.min=t.min-n.min,e.max=e.min+gt(t)}function ro(e,t,n){lp(e.x,t.x,n.x),lp(e.y,t.y,n.y)}function $P(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?be(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?be(n,e,r.max):Math.min(e,n)),e}function up(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function BP(e,{top:t,left:n,bottom:r,right:i}){return{x:up(e.x,n,i),y:up(e.y,t,r)}}function cp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function HP(e,t){return{x:cp(e.x,t.x),y:cp(e.y,t.y)}}function KP(e,t){let n=.5;const r=gt(e),i=gt(t);return i>r?n=fi(t.min,t.max-r,e.min):r>i&&(n=fi(e.min,e.max-i,t.min)),In(0,1,n)}function WP(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qu=.35;function qP(e=Qu){return e===!1?e=0:e===!0&&(e=Qu),{x:dp(e,"left","right"),y:dp(e,"top","bottom")}}function dp(e,t,n){return{min:fp(e,t),max:fp(e,n)}}function fp(e,t){return typeof e=="number"?e:e[t]||0}const hp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Gr=()=>({x:hp(),y:hp()}),pp=()=>({min:0,max:0}),Ce=()=>({x:pp(),y:pp()});function xt(e){return[e("x"),e("y")]}function Wv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function GP({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function YP(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function _l(e){return e===void 0||e===1}function Zu({scale:e,scaleX:t,scaleY:n}){return!_l(e)||!_l(t)||!_l(n)}function tr(e){return Zu(e)||qv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function qv(e){return mp(e.x)||mp(e.y)}function mp(e){return e&&e!=="0%"}function hs(e,t,n){const r=e-n,i=t*r;return n+i}function gp(e,t,n,r,i){return i!==void 0&&(e=hs(e,i,r)),hs(e,n,r)+t}function Ju(e,t=0,n=1,r,i){e.min=gp(e.min,t,n,r,i),e.max=gp(e.max,t,n,r,i)}function Gv(e,{x:t,y:n}){Ju(e.x,t.translate,t.scale,t.originPoint),Ju(e.y,n.translate,n.scale,n.originPoint)}const vp=.999999999999,yp=1.0000000000001;function XP(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Xr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Gv(e,a)),r&&tr(o.latestValues)&&Xr(e,o.latestValues))}t.x<yp&&t.x>vp&&(t.x=1),t.y<yp&&t.y>vp&&(t.y=1)}function Yr(e,t){e.min=e.min+t,e.max=e.max+t}function bp(e,t,n,r,i=.5){const o=be(e.min,e.max,i);Ju(e,t,n,o,r)}function Xr(e,t){bp(e.x,t.x,t.scaleX,t.scale,t.originX),bp(e.y,t.y,t.scaleY,t.scale,t.originY)}function Yv(e,t){return Wv(YP(e.getBoundingClientRect(),t))}function QP(e,t,n){const r=Yv(e,n),{scroll:i}=t;return i&&(Yr(r.x,i.offset.x),Yr(r.y,i.offset.y)),r}const Xv=({current:e})=>e?e.ownerDocument.defaultView:null,ZP=new WeakMap;class JP{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ce(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Bs(c,"page").point)},o=(c,d)=>{const{drag:f,dragPropagation:p,onDragStart:y}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=$v(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xt(w=>{let g=this.getAxisMotionValue(w).get()||0;if(qt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const v=h.layout.layoutBox[w];v&&(g=gt(v)*(parseFloat(g)/100))}}this.originPoint[w]=g}),y&&se.postRender(()=>y(c,d)),Yu(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(c,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:y,onDrag:m}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:w}=d;if(p&&this.currentDirection===null){this.currentDirection=e2(w),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),m&&m(c,d)},s=(c,d)=>this.stop(c,d),l=()=>xt(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Vv(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Xv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&se.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!fa(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=$P(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&qr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=BP(i.layoutBox,n):this.constraints=!1,this.elastic=qP(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&xt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=WP(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!qr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=QP(r,i.root,this.visualElement.getTransformPagePoint());let a=HP(i.layout.layoutBox,o);if(n){const s=n(GP(a));this.hasMutatedConstraints=!!s,s&&(a=Wv(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=xt(c=>{if(!fa(c,n,this.currentDirection))return;let d=l&&l[c]||{};a&&(d={min:0,max:0});const f=i?200:1e6,p=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Yu(this.visualElement,t),r.start(Td(t,r,0,n,this.visualElement,!1))}stopAnimation(){xt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){xt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){xt(n=>{const{drag:r}=this.getProps();if(!fa(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-be(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!qr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};xt(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const l=s.get();i[a]=KP({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),xt(a=>{if(!fa(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(be(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;ZP.set(this.visualElement,this);const t=this.visualElement.current,n=cn(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();qr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),se.read(r);const a=rn(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(xt(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Qu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function fa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function e2(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class t2 extends qn{constructor(t){super(t),this.removeGroupControls=qe,this.removeListeners=qe,this.controls=new JP(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qe}unmount(){this.removeGroupControls(),this.removeListeners()}}const xp=e=>(t,n)=>{e&&se.postRender(()=>e(t,n))};class n2 extends qn{constructor(){super(...arguments),this.removePointerDownListener=qe}onPointerDown(t){this.session=new Vv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Xv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:xp(t),onStart:xp(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&se.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=cn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Hs=P.createContext(null);function r2(){const e=P.useContext(Hs);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=P.useId();P.useEffect(()=>r(i),[]);const o=P.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const Dd=P.createContext({}),Qv=P.createContext({}),Da={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function wp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ni={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=wp(e,t.target.x),r=wp(e,t.target.y);return`${n}% ${r}%`}},i2={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Un.parse(e);if(i.length>5)return r;const o=Un.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const u=be(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}},ps={};function o2(e){Object.assign(ps,e)}const{schedule:Md}=J0(queueMicrotask,!1);class a2 extends P.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o2(s2),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Da.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||se.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Md.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Zv(e){const[t,n]=r2(),r=P.useContext(Dd);return N.jsx(a2,{...e,layoutGroup:r,switchLayoutGroup:P.useContext(Qv),isPresent:t,safeToRemove:n})}const s2={borderRadius:{...Ni,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ni,borderTopRightRadius:Ni,borderBottomLeftRadius:Ni,borderBottomRightRadius:Ni,boxShadow:i2},Jv=["TopLeft","TopRight","BottomLeft","BottomRight"],l2=Jv.length,Sp=e=>typeof e=="string"?parseFloat(e):e,kp=e=>typeof e=="number"||W.test(e);function u2(e,t,n,r,i,o){i?(e.opacity=be(0,n.opacity!==void 0?n.opacity:1,c2(r)),e.opacityExit=be(t.opacity!==void 0?t.opacity:1,0,d2(r))):o&&(e.opacity=be(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<l2;a++){const s=`border${Jv[a]}Radius`;let l=Pp(t,s),u=Pp(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||kp(l)===kp(u)?(e[s]=Math.max(be(Sp(l),Sp(u),r),0),(qt.test(u)||qt.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=be(t.rotate||0,n.rotate||0,r))}function Pp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const c2=ey(0,.5,av),d2=ey(.5,.95,qe);function ey(e,t,n){return r=>r<e?0:r>t?1:n(fi(e,t,r))}function Cp(e,t){e.min=t.min,e.max=t.max}function bt(e,t){Cp(e.x,t.x),Cp(e.y,t.y)}function Tp(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Ep(e,t,n,r,i){return e-=t,e=hs(e,1/n,r),i!==void 0&&(e=hs(e,1/i,r)),e}function f2(e,t=0,n=1,r=.5,i,o=e,a=e){if(qt.test(t)&&(t=parseFloat(t),t=be(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=be(o.min,o.max,r);e===o&&(s-=t),e.min=Ep(e.min,t,n,s,i),e.max=Ep(e.max,t,n,s,i)}function Op(e,t,[n,r,i],o,a){f2(e,t[n],t[r],t[i],t.scale,o,a)}const h2=["x","scaleX","originX"],p2=["y","scaleY","originY"];function Rp(e,t,n,r){Op(e.x,t,h2,n?n.x:void 0,r?r.x:void 0),Op(e.y,t,p2,n?n.y:void 0,r?r.y:void 0)}function Lp(e){return e.translate===0&&e.scale===1}function ty(e){return Lp(e.x)&&Lp(e.y)}function Dp(e,t){return e.min===t.min&&e.max===t.max}function m2(e,t){return Dp(e.x,t.x)&&Dp(e.y,t.y)}function Mp(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ny(e,t){return Mp(e.x,t.x)&&Mp(e.y,t.y)}function Ap(e){return gt(e.x)/gt(e.y)}function Np(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class g2{constructor(){this.members=[]}add(t){Ed(this.members,t),t.scheduleRender()}remove(t){if(Od(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function v2(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:p,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),d&&(r+=`rotateX(${d}deg) `),f&&(r+=`rotateY(${f}deg) `),p&&(r+=`skewX(${p}deg) `),y&&(r+=`skewY(${y}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const y2=(e,t)=>e.depth-t.depth;class b2{constructor(){this.children=[],this.isDirty=!1}add(t){Ed(this.children,t),this.isDirty=!0}remove(t){Od(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(y2),this.isDirty=!1,this.children.forEach(t)}}function Ma(e){const t=We(e)?e.get():e;return cP(t)?t.toValue():t}function x2(e,t){const n=Gt.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Vn(r),e(o-t))};return se.read(r,!0),()=>Vn(r)}function w2(e){return e instanceof SVGElement&&e.tagName!=="svg"}function S2(e,t,n){const r=We(e)?e:Oo(e);return r.start(Td("",r,t,n)),r.animation}const nr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Hi=typeof window<"u"&&window.MotionDebug!==void 0,zl=["","X","Y","Z"],k2={visibility:"hidden"},_p=1e3;let P2=0;function jl(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ry(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=_v(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",se,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ry(r)}function iy({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=P2++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Hi&&(nr.totalNodes=nr.resolvedTargetDeltas=nr.recalculatedProjection=0),this.nodes.forEach(E2),this.nodes.forEach(M2),this.nodes.forEach(A2),this.nodes.forEach(O2),Hi&&window.MotionDebug.record(nr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new b2)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Rd),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=w2(a),this.instance=a;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=x2(f,250),Da.hasAnimatedSinceResize&&(Da.hasAnimatedSinceResize=!1,this.nodes.forEach(jp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||F2,{onLayoutAnimationStart:w,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!ny(this.targetLayout,y)||p,v=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,v);const S={...fd(m,"layout"),onPlay:w,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||jp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Vn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(N2),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ry(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(zp);return}this.isUpdating||this.nodes.forEach(L2),this.isUpdating=!1,this.nodes.forEach(D2),this.nodes.forEach(C2),this.nodes.forEach(T2),this.clearAllSnapshots();const s=Gt.now();Fe.delta=In(0,1e3/60,s-Fe.timestamp),Fe.timestamp=s,Fe.isProcessing=!0,Ol.update.process(Fe),Ol.preRender.process(Fe),Ol.render.process(Fe),Fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Md.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(R2),this.sharedNodes.forEach(_2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ce(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!ty(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;a&&(s||tr(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),V2(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:s}=this.options;if(!s)return Ce();const l=s.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(I2))){const{scroll:c}=this.root;c&&(Yr(l.x,c.offset.x),Yr(l.y,c.offset.y))}return l}removeElementScroll(a){var s;const l=Ce();if(bt(l,a),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&bt(l,a),Yr(l.x,d.offset.x),Yr(l.y,d.offset.y))}return l}applyTransform(a,s=!1){const l=Ce();bt(l,a);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Xr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),tr(c.latestValues)&&Xr(l,c.latestValues)}return tr(this.latestValues)&&Xr(l,this.latestValues),l}removeTransform(a){const s=Ce();bt(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!tr(u.latestValues))continue;Zu(u.latestValues)&&u.updateSnapshot();const c=Ce(),d=u.measurePageBox();bt(c,d),Rp(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return tr(this.latestValues)&&Rp(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Fe.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ce(),this.relativeTargetOrigin=Ce(),ro(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ce(),this.targetWithTransforms=Ce()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),UP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bt(this.target,this.layout.layoutBox),Gv(this.target,this.targetDelta)):bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ce(),this.relativeTargetOrigin=Ce(),ro(this.relativeTargetOrigin,this.target,p.target),bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Hi&&nr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zu(this.parent.latestValues)||qv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Fe.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;bt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;XP(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Ce());const{target:y}=s;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Tp(this.prevProjectionDelta.x,this.projectionDelta.x),Tp(this.prevProjectionDelta.y,this.projectionDelta.y)),no(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Np(this.projectionDelta.x,this.prevProjectionDelta.x)||!Np(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Hi&&nr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Gr(),this.projectionDelta=Gr(),this.projectionDeltaWithTransform=Gr()}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=Gr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const f=Ce(),p=l?l.source:void 0,y=this.layout?this.layout.source:void 0,m=p!==y,w=this.getStack(),g=!w||w.members.length<=1,h=!!(m&&!g&&this.options.crossfade===!0&&!this.path.some(j2));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const T=S/1e3;Fp(d.x,a.x,T),Fp(d.y,a.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ro(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),z2(this.relativeTarget,this.relativeTargetOrigin,f,T),v&&m2(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Ce()),bt(v,this.relativeTarget)),m&&(this.animationValues=c,u2(c,u,this.latestValues,T,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Vn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=se.update(()=>{Da.hasAnimatedSinceResize=!0,this.currentAnimation=S2(0,_p,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_p),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&oy(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ce();const d=gt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+d;const f=gt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}bt(s,l),Xr(s,c),no(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new g2),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&jl("z",a,u,this.animationValues);for(let c=0;c<zl.length;c++)jl(`rotate${zl[c]}`,a,u,this.animationValues),jl(`skew${zl[c]}`,a,u,this.animationValues);a.render();for(const c in u)a.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return k2;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ma(a==null?void 0:a.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const m={};return this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=Ma(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!tr(this.latestValues)&&(m.transform=c?c({},""):"none",this.hasProjected=!1),m}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=v2(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:p,y}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(s=f.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in ps){if(f[m]===void 0)continue;const{correct:w,applyTo:g}=ps[m],h=u.transform==="none"?f[m]:w(f[m],d);if(g){const v=g.length;for(let S=0;S<v;S++)u[g[S]]=h}else u[m]=h}return this.options.layoutId&&(u.pointerEvents=d===this?Ma(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(zp),this.root.sharedNodes.clear()}}}function C2(e){e.updateLayout()}function T2(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?xt(d=>{const f=a?n.measuredBox[d]:n.layoutBox[d],p=gt(f);f.min=r[d].min,f.max=f.min+p}):oy(o,n.layoutBox,r)&&xt(d=>{const f=a?n.measuredBox[d]:n.layoutBox[d],p=gt(r[d]);f.max=f.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+p)});const s=Gr();no(s,r,n.layoutBox);const l=Gr();a?no(l,e.applyTransform(i,!0),n.measuredBox):no(l,r,n.layoutBox);const u=!ty(s);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const y=Ce();ro(y,n.layoutBox,f.layoutBox);const m=Ce();ro(m,r,p.layoutBox),ny(y,m)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=m,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function E2(e){Hi&&nr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function O2(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function R2(e){e.clearSnapshot()}function zp(e){e.clearMeasurements()}function L2(e){e.isLayoutDirty=!1}function D2(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function jp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function M2(e){e.resolveTargetDelta()}function A2(e){e.calcProjection()}function N2(e){e.resetSkewAndRotation()}function _2(e){e.removeLeadSnapshot()}function Fp(e,t,n){e.translate=be(t.translate,0,n),e.scale=be(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Vp(e,t,n,r){e.min=be(t.min,n.min,r),e.max=be(t.max,n.max,r)}function z2(e,t,n,r){Vp(e.x,t.x,n.x,r),Vp(e.y,t.y,n.y,r)}function j2(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const F2={duration:.45,ease:[.4,0,.1,1]},Ip=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Up=Ip("applewebkit/")&&!Ip("chrome/")?Math.round:qe;function $p(e){e.min=Up(e.min),e.max=Up(e.max)}function V2(e){$p(e.x),$p(e.y)}function oy(e,t,n){return e==="position"||e==="preserve-aspect"&&!IP(Ap(t),Ap(n),.2)}function I2(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const U2=iy({attachResizeListener:(e,t)=>rn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fl={current:void 0},ay=iy({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Fl.current){const e=new U2({});e.mount(window),e.setOptions({layoutScroll:!0}),Fl.current=e}return Fl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$2={pan:{Feature:n2},drag:{Feature:t2,ProjectionNode:ay,MeasureLayout:Zv}};function Bp(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,a)=>{if(o.pointerType==="touch"||Bv())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&se.postRender(()=>l(o,a))};return cn(e.current,n,i,{passive:!e.getProps()[r]})}class B2 extends qn{mount(){this.unmount=un(Bp(this.node,!0),Bp(this.node,!1))}unmount(){}}class H2 extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=un(rn(this.node.current,"focus",()=>this.onFocus()),rn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const sy=(e,t)=>t?e===t?!0:sy(e,t.parentElement):!1;function Vl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Bs(n))}class K2 extends qn{constructor(){super(...arguments),this.removeStartListeners=qe,this.removeEndListeners=qe,this.removeAccessibleListeners=qe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=cn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps(),f=!d&&!sy(this.node.current,s.target)?c:u;f&&se.update(()=>f(s,l))},{passive:!(r.onTap||r.onPointerUp)}),a=cn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=un(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||Vl("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&se.postRender(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=rn(this.node.current,"keyup",a),Vl("down",(s,l)=>{this.startPress(s,l)})},n=rn(this.node.current,"keydown",t),r=()=>{this.isPressing&&Vl("cancel",(o,a)=>this.cancelPress(o,a))},i=rn(this.node.current,"blur",r);this.removeAccessibleListeners=un(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&se.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Bv()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&se.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=cn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=rn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=un(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ec=new WeakMap,Il=new WeakMap,W2=e=>{const t=ec.get(e.target);t&&t(e)},q2=e=>{e.forEach(W2)};function G2({root:e,...t}){const n=e||document;Il.has(n)||Il.set(n,{});const r=Il.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(q2,{root:e,...t})),r[i]}function Y2(e,t,n){const r=G2(t);return ec.set(e,n),r.observe(e),()=>{ec.delete(e),r.unobserve(e)}}const X2={some:0,all:1};class Q2 extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:X2[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return Y2(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Z2(t,n))&&this.startObserver()}unmount(){}}function Z2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const J2={inView:{Feature:Q2},tap:{Feature:K2},focus:{Feature:H2},hover:{Feature:B2}},e5={layout:{ProjectionNode:ay,MeasureLayout:Zv}},Ad=P.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ks=P.createContext({}),Nd=typeof window<"u",ly=Nd?P.useLayoutEffect:P.useEffect,uy=P.createContext({strict:!1});function t5(e,t,n,r,i){var o,a;const{visualElement:s}=P.useContext(Ks),l=P.useContext(uy),u=P.useContext(Hs),c=P.useContext(Ad).reducedMotion,d=P.useRef();r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const f=d.current,p=P.useContext(Qv);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&n5(d.current,n,i,p);const y=P.useRef(!1);P.useInsertionEffect(()=>{f&&y.current&&f.update(n,u)});const m=n[Nv],w=P.useRef(!!m&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,m))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,m)));return ly(()=>{f&&(y.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Md.render(f.render),w.current&&f.animationState&&f.animationState.animateChanges())}),P.useEffect(()=>{f&&(!w.current&&f.animationState&&f.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,m)}),w.current=!1))}),f}function n5(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:cy(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&qr(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function cy(e){if(e)return e.options.allowProjection!==!1?e.projection:cy(e.parent)}function r5(e,t,n){return P.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):qr(n)&&(n.current=r))},[t])}function Ws(e){return Is(e.animate)||dd.some(t=>Co(e[t]))}function dy(e){return!!(Ws(e)||e.variants)}function i5(e,t){if(Ws(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Co(n)?n:void 0,animate:Co(r)?r:void 0}}return e.inherit!==!1?t:{}}function o5(e){const{initial:t,animate:n}=i5(e,P.useContext(Ks));return P.useMemo(()=>({initial:t,animate:n}),[Hp(t),Hp(n)])}function Hp(e){return Array.isArray(e)?e.join(" "):e}const Kp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},hi={};for(const e in Kp)hi[e]={isEnabled:t=>Kp[e].some(n=>!!t[n])};function a5(e){for(const t in e)hi[t]={...hi[t],...e[t]}}const s5=Symbol.for("motionComponentSymbol");function l5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&a5(e);function o(s,l){let u;const c={...P.useContext(Ad),...s,layoutId:u5(s)},{isStatic:d}=c,f=o5(s),p=r(s,d);if(!d&&Nd){c5();const y=d5(c);u=y.MeasureLayout,f.visualElement=t5(i,p,c,t,y.ProjectionNode)}return N.jsxs(Ks.Provider,{value:f,children:[u&&f.visualElement?N.jsx(u,{visualElement:f.visualElement,...c}):null,n(i,s,r5(p,f.visualElement,l),p,d,f.visualElement)]})}const a=P.forwardRef(o);return a[s5]=i,a}function u5({layoutId:e}){const t=P.useContext(Dd).id;return t&&e!==void 0?t+"-"+e:e}function c5(e,t){P.useContext(uy).strict}function d5(e){const{drag:t,layout:n}=hi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const f5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _d(e){return typeof e!="string"||e.includes("-")?!1:!!(f5.indexOf(e)>-1||/[A-Z]/u.test(e))}function fy(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const hy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function py(e,t,n,r){fy(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(hy.has(i)?i:Ld(i),t.attrs[i])}function my(e,{layout:t,layoutId:n}){return kr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ps[e]||e==="opacity")}function zd(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(We(i[a])||t.style&&We(t.style[a])||my(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function gy(e,t,n){const r=zd(e,t,n);for(const i in e)if(We(e[i])||We(t[i])){const o=jo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function jd(e){const t=P.useRef(null);return t.current===null&&(t.current=e()),t.current}function h5({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:p5(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const vy=e=>(t,n)=>{const r=P.useContext(Ks),i=P.useContext(Hs),o=()=>h5(e,t,r,i);return n?o():jd(o)};function p5(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=Ma(o[f]);let{initial:a,animate:s}=e;const l=Ws(e),u=dy(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||a===!1;const d=c?s:a;if(d&&typeof d!="boolean"&&!Is(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const y=ud(e,f[p]);if(y){const{transitionEnd:m,transition:w,...g}=y;for(const h in g){let v=g[h];if(Array.isArray(v)){const S=c?v.length-1:0;v=v[S]}v!==null&&(i[h]=v)}for(const h in m)i[h]=m[h]}}}return i}const Fd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),yy=()=>({...Fd(),attrs:{}}),by=(e,t)=>t&&typeof e=="number"?t.transform(e):e,m5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},g5=jo.length;function v5(e,t,n){let r="",i=!0;for(let o=0;o<g5;o++){const a=jo[o],s=e[a];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(a.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=by(s,bd[a]);if(!l){i=!1;const c=m5[a]||a;r+=`${c}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Vd(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const u=t[l];if(kr.has(l)){a=!0;continue}else if(dv(l)){i[l]=u;continue}else{const c=by(u,bd[l]);l.startsWith("origin")?(s=!0,o[l]=c):r[l]=c}}if(t.transform||(a||n?r.transform=v5(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}function Wp(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function y5(e,t,n){const r=Wp(t,e.x,e.width),i=Wp(n,e.y,e.height);return`${r} ${i}`}const b5={offset:"stroke-dashoffset",array:"stroke-dasharray"},x5={offset:"strokeDashoffset",array:"strokeDasharray"};function w5(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?b5:x5;e[o.offset]=W.transform(-r);const a=W.transform(t),s=W.transform(n);e[o.array]=`${a} ${s}`}function Id(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},c,d){if(Vd(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:p,dimensions:y}=e;f.transform&&(y&&(p.transform=f.transform),delete f.transform),y&&(i!==void 0||o!==void 0||p.transform)&&(p.transformOrigin=y5(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),a!==void 0&&w5(f,a,s,l,!1)}const Ud=e=>typeof e=="string"&&e.toLowerCase()==="svg",S5={useVisualState:vy({scrapeMotionValuesFromProps:gy,createRenderState:yy,onMount:(e,t,{renderState:n,latestValues:r})=>{se.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),se.render(()=>{Id(n,r,Ud(t.tagName),e.transformTemplate),py(t,n)})}})},k5={useVisualState:vy({scrapeMotionValuesFromProps:zd,createRenderState:Fd})};function xy(e,t,n){for(const r in t)!We(t[r])&&!my(r,n)&&(e[r]=t[r])}function P5({transformTemplate:e},t){return P.useMemo(()=>{const n=Fd();return Vd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function C5(e,t){const n=e.style||{},r={};return xy(r,n,e),Object.assign(r,P5(e,t)),r}function T5(e,t){const n={},r=C5(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const E5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ms(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||E5.has(e)}let wy=e=>!ms(e);function O5(e){e&&(wy=t=>t.startsWith("on")?!ms(t):e(t))}try{O5(require("@emotion/is-prop-valid").default)}catch{}function R5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(wy(i)||n===!0&&ms(i)||!t&&!ms(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function L5(e,t,n,r){const i=P.useMemo(()=>{const o=yy();return Id(o,t,Ud(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};xy(o,e.style,e),i.style={...o,...i.style}}return i}function D5(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=(_d(n)?L5:T5)(r,o,a,n),u=R5(r,typeof n=="string",e),c=n!==P.Fragment?{...u,...l,ref:i}:{},{children:d}=r,f=P.useMemo(()=>We(d)?d.get():d,[d]);return P.createElement(n,{...c,children:f})}}function M5(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={..._d(r)?S5:k5,preloadedFeatures:e,useRender:D5(i),createVisualElement:t,Component:r};return l5(a)}}const tc={current:null},Sy={current:!1};function A5(){if(Sy.current=!0,!!Nd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>tc.current=e.matches;e.addListener(t),t()}else tc.current=!1}function N5(e,t,n){for(const r in t){const i=t[r],o=n[r];if(We(i))e.addValue(r,i);else if(We(o))e.addValue(r,Oo(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Oo(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const qp=new WeakMap,_5=[...pv,He,Un],z5=e=>_5.find(hv(e)),Gp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class j5{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=gd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=Gt.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,se.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=Ws(n),this.isVariantNode=dy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const p=d[f];l[f]!==void 0&&We(p)&&p.set(l[f],!1)}}mount(t){this.current=t,qp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Sy.current||A5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){qp.delete(this.current),this.projection&&this.projection.unmount(),Vn(this.notifyUpdate),Vn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=kr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in hi){const n=hi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ce()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Gp.length;r++){const i=Gp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=N5(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Oo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(uv(i)||lv(i))?i=parseFloat(i):!z5(i)&&Un.test(n)&&(i=Sv(t,n)),this.setBaseTarget(t,We(i)?i.get():i)),We(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=ud(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!We(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Rd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class ky extends j5{constructor(){super(...arguments),this.KeyframeResolver=kv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function F5(e){return window.getComputedStyle(e)}class V5 extends ky{constructor(){super(...arguments),this.type="html",this.renderInstance=fy}readValueFromInstance(t,n){if(kr.has(n)){const r=xd(n);return r&&r.default||0}else{const r=F5(t),i=(dv(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Yv(t,n)}build(t,n,r){Vd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return zd(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;We(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class I5 extends ky{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ce}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(kr.has(n)){const r=xd(n);return r&&r.default||0}return n=hy.has(n)?n:Ld(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return gy(t,n,r)}build(t,n,r){Id(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){py(t,n,r,i)}mount(t){this.isSVGTag=Ud(t.tagName),super.mount(t)}}const U5=(e,t)=>_d(e)?new I5(t):new V5(t,{allowProjection:e!==P.Fragment}),$5=M5({...DP,...J2,...$2,...e5},U5),B5=SS($5);class H5 extends P.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function K5({children:e,isPresent:t}){const n=P.useId(),r=P.useRef(null),i=P.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=P.useContext(Ad);return P.useInsertionEffect(()=>{const{width:a,height:s,top:l,left:u}=i.current;if(t||!r.current||!a||!s)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return o&&(c.nonce=o),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),N.jsx(H5,{isPresent:t,childRef:r,sizeRef:i,children:P.cloneElement(e,{ref:r})})}const W5=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=jd(q5),l=P.useId(),u=P.useCallback(d=>{s.set(d,!0);for(const f of s.values())if(!f)return;r&&r()},[s,r]),c=P.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:d=>(s.set(d,!1),()=>s.delete(d))}),o?[Math.random(),u]:[n,u]);return P.useMemo(()=>{s.forEach((d,f)=>s.set(f,!1))},[n]),P.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=N.jsx(K5,{isPresent:n,children:e})),N.jsx(Hs.Provider,{value:c,children:e})};function q5(){return new Map}const ha=e=>e.key||"";function Yp(e){const t=[];return P.Children.forEach(e,n=>{P.isValidElement(n)&&t.push(n)}),t}const G5=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const s=P.useMemo(()=>Yp(e),[e]),l=s.map(ha),u=P.useRef(!0),c=P.useRef(s),d=jd(()=>new Map),[f,p]=P.useState(s),[y,m]=P.useState(s);ly(()=>{u.current=!1,c.current=s;for(let h=0;h<y.length;h++){const v=ha(y[h]);l.includes(v)?d.delete(v):d.get(v)!==!0&&d.set(v,!1)}},[y,l.length,l.join("-")]);const w=[];if(s!==f){let h=[...s];for(let v=0;v<y.length;v++){const S=y[v],T=ha(S);l.includes(T)||(h.splice(v,0,S),w.push(S))}a==="wait"&&w.length&&(h=w),m(Yp(h)),p(s);return}const{forceRender:g}=P.useContext(Dd);return N.jsx(N.Fragment,{children:y.map(h=>{const v=ha(h),S=s===y||l.includes(v),T=()=>{if(d.has(v))d.set(v,!0);else return;let b=!0;d.forEach(O=>{O||(b=!1)}),b&&(g==null||g(),m(c.current),i&&i())};return N.jsx(W5,{isPresent:S,initial:!u.current||r?void 0:!1,custom:S?void 0:n,presenceAffectsLayout:o,mode:a,onExitComplete:S?void 0:T,children:h},v)})})},Py=[{id:1,titleKey:"navbar.newArrival",link:"/artivastore/newarrivals"},{id:2,titleKey:"navbar.products",link:"/artivastore/"},{id:3,titleKey:"navbar.makeTshirt",link:"/artivastore/maketshirt"}],Y5=(...e)=>{console!=null&&console.warn&&(hr(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},Xp={},nc=(...e)=>{hr(e[0])&&Xp[e[0]]||(hr(e[0])&&(Xp[e[0]]=new Date),Y5(...e))},Cy=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},rc=(e,t,n)=>{e.loadNamespaces(t,Cy(e,n))},Qp=(e,t,n,r)=>{if(hr(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return rc(e,n,r);n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Cy(e,r))},X5=(e,t,n={})=>!t.languages||!t.languages.length?(nc("i18n.languages were undefined or empty",t.languages),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(r,i)=>{var o;if(((o=n.bindI18n)==null?void 0:o.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,e))return!1}}),hr=e=>typeof e=="string",Q5=e=>typeof e=="object"&&e!==null,Z5=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,J5={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},eC=e=>J5[e],tC=e=>e.replace(Z5,eC);let ic={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:tC};const nC=(e={})=>{ic={...ic,...e}},rC=()=>ic;let Ty;const iC=e=>{Ty=e},oC=()=>Ty,aC={type:"3rdParty",init(e){nC(e.options.react),iC(e)}},sC=P.createContext();class lC{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const uC=(e,t)=>{const n=P.useRef();return P.useEffect(()=>{n.current=e},[e,t]),n.current},Ey=(e,t,n,r)=>e.getFixedT(t,n,r),cC=(e,t,n,r)=>P.useCallback(Ey(e,t,n,r),[e,t,n,r]),$d=(e,t={})=>{var S,T,b,O;const{i18n:n}=t,{i18n:r,defaultNS:i}=P.useContext(sC)||{},o=n||r||oC();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new lC),!o){nc("You will need to pass in an i18next instance by using initReactI18next");const C=(A,K)=>hr(K)?K:Q5(K)&&hr(K.defaultValue)?K.defaultValue:Array.isArray(A)?A[A.length-1]:A,L=[C,{},!1];return L.t=C,L.i18n={},L.ready=!1,L}(S=o.options.react)!=null&&S.wait&&nc("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...rC(),...o.options.react,...t},{useSuspense:s,keyPrefix:l}=a;let u=i||((T=o.options)==null?void 0:T.defaultNS);u=hr(u)?[u]:u||["translation"],(O=(b=o.reportNamespaces).addUsedNamespaces)==null||O.call(b,u);const c=(o.isInitialized||o.initializedStoreOnce)&&u.every(C=>X5(C,o,a)),d=cC(o,t.lng||null,a.nsMode==="fallback"?u:u[0],l),f=()=>d,p=()=>Ey(o,t.lng||null,a.nsMode==="fallback"?u:u[0],l),[y,m]=P.useState(f);let w=u.join();t.lng&&(w=`${t.lng}${w}`);const g=uC(w),h=P.useRef(!0);P.useEffect(()=>{const{bindI18n:C,bindI18nStore:L}=a;h.current=!0,!c&&!s&&(t.lng?Qp(o,t.lng,u,()=>{h.current&&m(p)}):rc(o,u,()=>{h.current&&m(p)})),c&&g&&g!==w&&h.current&&m(p);const A=()=>{h.current&&m(p)};return C&&(o==null||o.on(C,A)),L&&(o==null||o.store.on(L,A)),()=>{h.current=!1,o&&(C==null||C.split(" ").forEach(K=>o.off(K,A))),L&&o&&L.split(" ").forEach(K=>o.store.off(K,A))}},[o,w]),P.useEffect(()=>{h.current&&c&&m(f)},[o,l,c]);const v=[y,o,c];if(v.t=y,v.i18n=o,v.ready=c,c||!c&&!s)return v;throw new Promise(C=>{t.lng?Qp(o,t.lng,u,()=>C()):rc(o,u,()=>C())})},Oy=({additionalClasses:e="",variant:t="button"})=>{const{t:n}=$d(),r=t==="link";return N.jsxs("div",{className:`flex gap-4 ${e}`,children:[N.jsx("button",{className:`${r?"text-white hover:text-gray-300 uppercase":"hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200"}`,children:n("login")}),N.jsx("button",{className:`${r?"text-white hover:text-gray-300 uppercase":"hover:bg-white text-white bg-primary font-semibold hover:text-primary rounded-md border-2 border-primary px-6 py-2 duration-200"}`,children:n("register")})]})};function dC(e){return zo({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"},child:[]}]})(e)}const Ry=()=>N.jsx(N.Fragment,{children:N.jsx("button",{className:"text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300",children:N.jsx(dC,{})})});function fC(e){return zo({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(e)}const Ly=()=>N.jsx("div",{children:N.jsx("button",{className:"text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300",children:N.jsx(fC,{})})}),hC=({openmenu:e,setOpenmenu:t,menuButtonRef:n,closeMenu:r})=>{const i=P.useRef(null),{t:o}=$d();return P.useEffect(()=>{const a=s=>{i.current&&!i.current.contains(s.target)&&n.current&&!n.current.contains(s.target)&&t(!1)};return e?document.addEventListener("mousedown",a):document.removeEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[e,t,n]),N.jsx(N.Fragment,{children:N.jsx(G5,{mode:"wait",children:e&&N.jsx(B5.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.3},className:"absolute top-20 left-0 w-full h-screen z-20",children:N.jsxs("div",{ref:i,className:"text-xl font-semibold uppercase bg-secondary text-white py-8 m-6 rounded-3xl",children:[N.jsx("ul",{className:"flex flex-col justify-center items-center gap-6",children:Py.map(a=>N.jsx("li",{children:N.jsx(Y0,{onClick:r,to:a.link,className:"hover:text-gray-300",children:o(a.titleKey)})},a.id))}),N.jsx("div",{className:"mt-5 flex flex-col items-center",children:N.jsx(Oy,{additionalClasses:"flex-col items-center gap-6",variant:"link"})}),N.jsxs("div",{className:"flex justify-center my-2",children:[N.jsx(Ry,{}),N.jsx(Ly,{})]})]})})})})},q=e=>typeof e=="string",_i=()=>{let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n},Zp=e=>e==null?"":""+e,pC=(e,t,n)=>{e.forEach(r=>{t[r]&&(n[r]=t[r])})},mC=/###/g,Jp=e=>e&&e.indexOf("###")>-1?e.replace(mC,"."):e,em=e=>!e||q(e),io=(e,t,n)=>{const r=q(t)?t.split("."):t;let i=0;for(;i<r.length-1;){if(em(e))return{};const o=Jp(r[i]);!e[o]&&n&&(e[o]=new n),Object.prototype.hasOwnProperty.call(e,o)?e=e[o]:e={},++i}return em(e)?{}:{obj:e,k:Jp(r[i])}},tm=(e,t,n)=>{const{obj:r,k:i}=io(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let o=t[t.length-1],a=t.slice(0,t.length-1),s=io(e,a,Object);for(;s.obj===void 0&&a.length;)o=`${a[a.length-1]}.${o}`,a=a.slice(0,a.length-1),s=io(e,a,Object),s&&s.obj&&typeof s.obj[`${s.k}.${o}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${o}`]=n},gC=(e,t,n,r)=>{const{obj:i,k:o}=io(e,t,Object);i[o]=i[o]||[],i[o].push(n)},gs=(e,t)=>{const{obj:n,k:r}=io(e,t);if(n)return n[r]},vC=(e,t,n)=>{const r=gs(e,n);return r!==void 0?r:gs(t,n)},Dy=(e,t,n)=>{for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?q(e[r])||e[r]instanceof String||q(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):Dy(e[r],t[r],n):e[r]=t[r]);return e},Dr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var yC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const bC=e=>q(e)?e.replace(/[&<>"'\/]/g,t=>yC[t]):e;class xC{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const wC=[" ",",","?","!",";"],SC=new xC(20),kC=(e,t,n)=>{t=t||"",n=n||"";const r=wC.filter(a=>t.indexOf(a)<0&&n.indexOf(a)<0);if(r.length===0)return!0;const i=SC.getRegExp(`(${r.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!i.test(e);if(!o){const a=e.indexOf(n);a>0&&!i.test(e.substring(0,a))&&(o=!0)}return o},oc=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;){if(!i||typeof i!="object")return;let a,s="";for(let l=o;l<r.length;++l)if(l!==o&&(s+=n),s+=r[l],a=i[s],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<r.length-1)continue;o+=l-o+1;break}i=a}return i},vs=e=>e&&e.replace("_","-"),PC={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class ys{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||PC,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(q(t[0])&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new ys(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new ys(this.logger,t)}}var Ht=new ys;class qs{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(a=>{let[s,l]=a;for(let u=0;u<l;u++)s(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[s,l]=a;for(let u=0;u<l;u++)s.apply(s,[t,...r])})}}class nm extends qs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,a=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;t.indexOf(".")>-1?s=t.split("."):(s=[t,n],r&&(Array.isArray(r)?s.push(...r):q(r)&&o?s.push(...r.split(o)):s.push(r)));const l=gs(this.data,s);return!l&&!n&&!r&&t.indexOf(".")>-1&&(t=s[0],n=s[1],r=s.slice(2).join(".")),l||!a||!q(r)?l:oc(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[t,n];r&&(s=s.concat(a?r.split(a):r)),t.indexOf(".")>-1&&(s=t.split("."),i=n,n=s[1]),this.addNamespaces(n),tm(this.data,s,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(q(r[o])||Array.isArray(r[o]))&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},s=[t,n];t.indexOf(".")>-1&&(s=t.split("."),i=r,r=n,n=s[1]),this.addNamespaces(n);let l=gs(this.data,s)||{};a.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?Dy(l,r,o):l={...l,...r},tm(this.data,s,l),a.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var My={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const rm={};class bs extends qs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),pC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ht.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const a=r&&t.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!kC(t,r,i);if(a&&!s){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:q(o)?[o]:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return{key:t,namespaces:q(o)?[o]:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(t[t.length-1],n),l=s[s.length-1],u=n.lng||this.language,c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(c){const S=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${S}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${S}${a}`}return i?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:a}const d=this.resolve(t,n);let f=d&&d.res;const p=d&&d.usedKey||a,y=d&&d.exactUsedKey||a,m=Object.prototype.toString.apply(f),w=["[object Number]","[object Function]","[object RegExp]"],g=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,h=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!q(f)&&typeof f!="boolean"&&typeof f!="number";if(h&&f&&v&&w.indexOf(m)<0&&!(q(g)&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,f,{...n,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return i?(d.res=S,d.usedParams=this.getUsedParamsDetails(n),d):S}if(o){const S=Array.isArray(f),T=S?[]:{},b=S?y:p;for(const O in f)if(Object.prototype.hasOwnProperty.call(f,O)){const C=`${b}${o}${O}`;T[O]=this.translate(C,{...n,joinArrays:!1,ns:s}),T[O]===C&&(T[O]=f[O])}f=T}}else if(h&&q(g)&&Array.isArray(f))f=f.join(g),f&&(f=this.extendTranslation(f,t,n,r));else{let S=!1,T=!1;const b=n.count!==void 0&&!q(n.count),O=bs.hasDefaultValue(n),C=b?this.pluralResolver.getSuffix(u,n.count,n):"",L=n.ordinal&&b?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",A=b&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),K=A&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${C}`]||n[`defaultValue${L}`]||n.defaultValue;!this.isValidLookup(f)&&O&&(S=!0,f=K),this.isValidLookup(f)||(T=!0,f=a);const pe=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&T?void 0:f,ie=O&&K!==f&&this.options.updateMissing;if(T||S||ie){if(this.logger.log(ie?"updateKey":"missingKey",u,l,a,ie?K:f),o){const D=this.resolve(a,{...n,keySeparator:!1});D&&D.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Ye=[];const rt=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&rt&&rt[0])for(let D=0;D<rt.length;D++)Ye.push(rt[D]);else this.options.saveMissingTo==="all"?Ye=this.languageUtils.toResolveHierarchy(n.lng||this.language):Ye.push(n.lng||this.language);const Y=(D,I,$)=>{const J=O&&$!==f?$:pe;this.options.missingKeyHandler?this.options.missingKeyHandler(D,l,I,J,ie,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(D,l,I,J,ie,n),this.emit("missingKey",D,l,I,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?Ye.forEach(D=>{const I=this.pluralResolver.getSuffixes(D,n);A&&n[`defaultValue${this.options.pluralSeparator}zero`]&&I.indexOf(`${this.options.pluralSeparator}zero`)<0&&I.push(`${this.options.pluralSeparator}zero`),I.forEach($=>{Y([D],a+$,n[`defaultValue${$}`]||K)})}):Y(Ye,a,K))}f=this.extendTranslation(f,t,n,d,r),T&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(T||S)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,S?f:void 0):f=this.options.parseMissingKeyHandler(f))}return i?(d.res=f,d.usedParams=this.getUsedParamsDetails(n),d):f}extendTranslation(t,n,r,i,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=q(t)&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(u){const f=t.match(this.interpolator.nestingRegexp);c=f&&f.length}let d=r.replace&&!q(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,r.lng||this.language||i.usedLng,r),u){const f=t.match(this.interpolator.nestingRegexp),p=f&&f.length;c<p&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var f=arguments.length,p=new Array(f),y=0;y<f;y++)p[y]=arguments[y];return o&&o[0]===p[0]&&!r.context?(a.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):a.translate(...p,n)},r)),r.interpolation&&this.interpolator.reset()}const s=r.postProcess||this.options.postProcess,l=q(s)?[s]:s;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=My.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,a,s;return q(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),c=u.key;i=c;let d=u.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const f=n.count!==void 0&&!q(n.count),p=f&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),y=n.context!==void 0&&(q(n.context)||typeof n.context=="number")&&n.context!=="",m=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(w=>{this.isValidLookup(r)||(s=w,!rm[`${m[0]}-${w}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(rm[`${m[0]}-${w}`]=!0,this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(g=>{if(this.isValidLookup(r))return;a=g;const h=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(h,c,g,w,n);else{let S;f&&(S=this.pluralResolver.getSuffix(g,n.count,n));const T=`${this.options.pluralSeparator}zero`,b=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(h.push(c+S),n.ordinal&&S.indexOf(b)===0&&h.push(c+S.replace(b,this.options.pluralSeparator)),p&&h.push(c+T)),y){const O=`${c}${this.options.contextSeparator}${n.context}`;h.push(O),f&&(h.push(O+S),n.ordinal&&S.indexOf(b)===0&&h.push(O+S.replace(b,this.options.pluralSeparator)),p&&h.push(O+T))}}let v;for(;v=h.pop();)this.isValidLookup(r)||(o=v,r=this.getResource(g,w,v,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&!q(t.replace);let i=r?t.replace:t;if(r&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const o of n)delete i[o]}return i}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}const Ul=e=>e.charAt(0).toUpperCase()+e.slice(1);class im{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ht.create("languageUtils")}getScriptPartFromCode(t){if(t=vs(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=vs(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(q(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(t)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Ul(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=Ul(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=Ul(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&(o.indexOf("-")>0&&i.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===i||o.indexOf(i)===0&&i.length>1))return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),q(t)&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=a=>{a&&(this.isSupportedCode(a)?i.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return q(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):q(t)&&o(this.formatLanguageCode(t)),r.forEach(a=>{i.indexOf(a)<0&&o(this.formatLanguageCode(a))}),i}}let CC=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],TC={1:e=>+(e>1),2:e=>+(e!=1),3:e=>0,4:e=>e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,5:e=>e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5,6:e=>e==1?0:e>=2&&e<=4?1:2,7:e=>e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2,8:e=>e==1?0:e==2?1:e!=8&&e!=11?2:3,9:e=>+(e>=2),10:e=>e==1?0:e==2?1:e<7?2:e<11?3:4,11:e=>e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3,12:e=>+(e%10!=1||e%100==11),13:e=>+(e!==0),14:e=>e==1?0:e==2?1:e==3?2:3,15:e=>e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2,16:e=>e%10==1&&e%100!=11?0:e!==0?1:2,17:e=>e==1||e%10==1&&e%100!=11?0:1,18:e=>e==0?0:e==1?1:2,19:e=>e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3,20:e=>e==1?0:e==0||e%100>0&&e%100<20?1:2,21:e=>e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0,22:e=>e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3};const EC=["v1","v2","v3"],OC=["v4"],om={zero:0,one:1,two:2,few:3,many:4,other:5},RC=()=>{const e={};return CC.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:TC[t.fc]}})}),e};class LC{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Ht.create("pluralResolver"),(!this.options.compatibilityJSON||OC.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=RC(),this.pluralRulesCache={}}addRule(t,n){this.rules[t]=n}clearCache(){this.pluralRulesCache={}}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{const r=vs(t==="dev"?"en":t),i=n.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:r,type:i});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];const a=new Intl.PluralRules(r,{type:i});return this.pluralRulesCache[o]=a,a}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>om[i]-om[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!EC.includes(this.options.compatibilityJSON)}}const am=function(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=vC(e,t,n);return!o&&i&&q(n)&&(o=oc(e,n,r),o===void 0&&(o=oc(t,n,r))),o},$l=e=>e.replace(/\$/g,"$$$$");class DC{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ht.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:o,prefixEscaped:a,suffix:s,suffixEscaped:l,formatSeparator:u,unescapeSuffix:c,unescapePrefix:d,nestingPrefix:f,nestingPrefixEscaped:p,nestingSuffix:y,nestingSuffixEscaped:m,nestingOptionsSeparator:w,maxReplaces:g,alwaysFormat:h}=t.interpolation;this.escape=n!==void 0?n:bC,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?Dr(o):a||"{{",this.suffix=s?Dr(s):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=c?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=f?Dr(f):p||Dr("$t("),this.nestingSuffix=y?Dr(y):m||Dr(")"),this.nestingOptionsSeparator=w||",",this.maxReplaces=g||1e3,this.alwaysFormat=h!==void 0?h:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,r,i){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},u=p=>{if(p.indexOf(this.formatSeparator)<0){const g=am(n,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(g,void 0,r,{...i,...n,interpolationkey:p}):g}const y=p.split(this.formatSeparator),m=y.shift().trim(),w=y.join(this.formatSeparator).trim();return this.format(am(n,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),w,r,{...i,...n,interpolationkey:m})};this.resetRegExp();const c=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>$l(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?$l(this.escape(p)):$l(p)}].forEach(p=>{for(s=0;o=p.regex.exec(t);){const y=o[1].trim();if(a=u(y),a===void 0)if(typeof c=="function"){const w=c(t,o,i);a=q(w)?w:""}else if(i&&Object.prototype.hasOwnProperty.call(i,y))a="";else if(d){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${y} for interpolating ${t}`),a="";else!q(a)&&!this.useRawValueToEscape&&(a=Zp(a));const m=p.safeValue(a);if(t=t.replace(o[0],m),d?(p.regex.lastIndex+=a.length,p.regex.lastIndex-=o[0].length):p.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,a;const s=(l,u)=>{const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const d=l.split(new RegExp(`${c}[ ]*{`));let f=`{${d[1]}`;l=d[0],f=this.interpolate(f,a);const p=f.match(/'/g),y=f.match(/"/g);(p&&p.length%2===0&&!y||y.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),u&&(a={...u,...a})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${c}${f}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;i=this.nestingRegexp.exec(t);){let l=[];a={...r},a=a.replace&&!q(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const c=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=c.shift(),l=c,u=!0}if(o=n(s.call(this,i[1].trim(),a),a),o&&i[0]===t&&!q(o))return o;q(o)||(o=Zp(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((c,d)=>this.format(c,d,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}const MC=e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(a=>{if(a){const[s,...l]=a.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),c=s.trim();n[c]||(n[c]=u),u==="false"&&(n[c]=!1),u==="true"&&(n[c]=!0),isNaN(u)||(n[c]=parseInt(u,10))}})}return{formatName:t,formatOptions:n}},Mr=e=>{const t={};return(n,r,i)=>{let o=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(o={...o,[i.interpolationkey]:void 0});const a=r+JSON.stringify(o);let s=t[a];return s||(s=e(vs(r),i),t[a]=s),s(n)}};class AC{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ht.create("formatter"),this.options=t,this.formats={number:Mr((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Mr((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Mr((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Mr((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Mr((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Mr(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=n.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(s=>s.indexOf(")")>-1)){const s=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,s)].join(this.formatSeparator)}return o.reduce((s,l)=>{const{formatName:u,formatOptions:c}=MC(l);if(this.formats[u]){let d=s;try{const f=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},p=f.locale||f.lng||i.locale||i.lng||r;d=this.formats[u](s,p,{...c,...i,...f})}catch(f){this.logger.warn(f)}return d}else this.logger.warn(`there was no format function for ${u}`);return s},t)}}const NC=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class _C extends qs{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=Ht.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},a={},s={},l={};return t.forEach(u=>{let c=!0;n.forEach(d=>{const f=`${u}|${d}`;!r.reload&&this.store.hasResourceBundle(u,d)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,c=!1,a[f]===void 0&&(a[f]=!0),o[f]===void 0&&(o[f]=!0),l[d]===void 0&&(l[d]=!0)))}),c||(s[u]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],a=i[1];n&&this.emit("failedLoading",o,a,n),!n&&r&&this.store.addResourceBundle(o,a,r,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2,n&&r&&(this.state[t]=0);const s={};this.queue.forEach(l=>{gC(l.loaded,[o],a),NC(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{s[u]||(s[u]={});const c=l.loaded[u];c.length&&c.forEach(d=>{s[u][d]===void 0&&(s[u][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:a});return}this.readingCalls++;const s=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(u&&c&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,a)},o);return}a(u,c)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(c=>s(null,c)).catch(s):s(null,u)}catch(u){s(u)}return}return l(t,n,s)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();q(t)&&(t=this.languageUtils.toResolveHierarchy(t)),q(n)&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,a),!a&&s&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,s),this.loaded(t,a,s)})}saveMissing(t,n,r,i,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let c;u.length===5?c=u(t,n,r,i,l):c=u(t,n,r,i),c&&typeof c.then=="function"?c.then(d=>s(null,d)).catch(s):s(null,c)}catch(c){s(c)}else u(t,n,r,i,s,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}const sm=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),q(e[1])&&(t.defaultValue=e[1]),q(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(r=>{t[r]=n[r]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),lm=e=>(q(e.ns)&&(e.ns=[e.ns]),q(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),q(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),pa=()=>{},zC=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})};class Ro extends qs{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=lm(t),this.services={},this.logger=Ht,this.modules={external:[]},zC(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(q(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=sm();this.options={...i,...this.options,...lm(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const o=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?Ht.init(o(this.modules.logger),this.options):Ht.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=AC);const d=new im(this.options);this.store=new nm(this.options.resources,this.options);const f=this.services;f.logger=Ht,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new LC(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=o(c),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new DC(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new _C(o(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(p){for(var y=arguments.length,m=new Array(y>1?y-1:0),w=1;w<y;w++)m[w-1]=arguments[w];t.emit(p,...m)}),this.modules.languageDetector&&(f.languageDetector=o(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=o(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new bs(this.services,this.options),this.translator.on("*",function(p){for(var y=arguments.length,m=new Array(y>1?y-1:0),w=1;w<y;w++)m[w-1]=arguments[w];t.emit(p,...m)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,r||(r=pa),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return t.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return t.store[c](...arguments),t}});const l=_i(),u=()=>{const c=(d,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),r(d,f)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pa;const i=q(t)?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const o=[],a=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{u!=="cimode"&&o.indexOf(u)<0&&o.push(u)})};i?a(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(s)})}else r(null)}reloadResources(t,n,r){const i=_i();return typeof t=="function"&&(r=t,t=void 0),typeof n=="function"&&(r=n,n=void 0),t||(t=this.languages),n||(n=this.options.ns),r||(r=pa),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&My.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=_i();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},s=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=q(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,c=>{a(c,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(t),i}getFixedT(t,n,r){var i=this;const o=function(a,s){let l;if(typeof s!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([a,s].concat(c))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||r||o.keyPrefix);const f=i.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(a)?p=a.map(y=>`${l.keyPrefix}${f}${y}`):p=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,i.t(p,l)};return q(t)?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const u=this.services.backendConnector.state[`${s}|${l}`];return u===-1||u===0||u===2};if(n.precheck){const s=n.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(r,t)&&(!i||a(o,t)))}loadNamespaces(t,n){const r=_i();return this.options.ns?(q(t)&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=_i();q(t)&&(t=[t]);const i=this.options.preload||[],o=t.filter(a=>i.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return o.length?(this.options.preload=i.concat(o),this.loadResources(a=>{r.resolve(),n&&n(a)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new im(sm());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Ro(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pa;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Ro(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new nm(this.store.data,i),o.services.resourceStore=o.store),o.translator=new bs(o.services,i),o.translator.on("*",function(s){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];o.emit(s,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ue=Ro.createInstance();Ue.createInstance=Ro.createInstance;Ue.createInstance;Ue.dir;Ue.init;Ue.loadResources;Ue.reloadResources;Ue.use;Ue.changeLanguage;Ue.getFixedT;Ue.t;Ue.exists;Ue.setDefaultNamespace;Ue.hasLoadedNamespace;Ue.loadNamespaces;Ue.loadLanguages;const jC={newArrival:"New Arrivals",products:"Products",makeTshirt:"Make Your T-shirt"},FC="Products",VC="Login",IC="Register",UC="Wear",$C="The",BC="Difference",HC={navbar:jC,products:FC,login:VC,register:IC,wear:UC,the:$C,difference:BC},KC={newArrival:"Новинка",products:"Продукты",makeTshirt:"Создайте свою футболку"},WC="продукты",qC="Вход",GC="Регистрация",YC="Носить",XC="Этот",QC="Разница",ZC={navbar:KC,products:WC,login:qC,register:GC,wear:YC,the:XC,difference:QC},{slice:JC,forEach:eT}=[];function tT(e){return eT.call(JC.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}const um=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,nT=(e,t,n)=>{const r=n||{};r.path=r.path||"/";const i=encodeURIComponent(t);let o=`${e}=${i}`;if(r.maxAge>0){const a=r.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");o+=`; Max-Age=${Math.floor(a)}`}if(r.domain){if(!um.test(r.domain))throw new TypeError("option domain is invalid");o+=`; Domain=${r.domain}`}if(r.path){if(!um.test(r.path))throw new TypeError("option path is invalid");o+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o},cm={create(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=nT(e,encodeURIComponent(t),i)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let i=n[r];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(t)===0)return i.substring(t.length,i.length)}return null},remove(e){this.create(e,"",-1)}};var rT={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return cm.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:o}=t;n&&typeof document<"u"&&cm.create(n,e,r,i,o)}},iT={name:"querystring",lookup(e){var r;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const a=i.substring(1).split("&");for(let s=0;s<a.length;s++){const l=a[s].indexOf("=");l>0&&a[s].substring(0,l)===t&&(n=a[s].substring(l+1))}}return n}};let zi=null;const dm=()=>{if(zi!==null)return zi;try{zi=window!=="undefined"&&window.localStorage!==null;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{zi=!1}return zi};var oT={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&dm())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&dm()&&window.localStorage.setItem(n,e)}};let ji=null;const fm=()=>{if(ji!==null)return ji;try{ji=window!=="undefined"&&window.sessionStorage!==null;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{ji=!1}return ji};var aT={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&fm())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&fm()&&window.sessionStorage.setItem(n,e)}},sT={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:r,language:i}=navigator;if(n)for(let o=0;o<n.length;o++)t.push(n[o]);r&&t.push(r),i&&t.push(i)}return t.length>0?t:void 0}},lT={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const r=t||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},uT={name:"path",lookup(e){var i;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(i=n[typeof t=="number"?t:0])==null?void 0:i.replace("/",""):void 0}},cT={name:"subdomain",lookup(e){var i,o;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,r=typeof window<"u"&&((o=(i=window.location)==null?void 0:i.hostname)==null?void 0:o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[n]}};function dT(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}}class Ay{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t||{languageUtils:{}},this.options=tT(n,this.options||{},dT()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(rT),this.addDetector(iT),this.addDetector(oT),this.addDetector(aT),this.addDetector(sT),this.addDetector(lT),this.addDetector(uT),this.addDetector(cT)}addDetector(t){return this.detectors[t.name]=t,this}detect(t){t||(t=this.options.order);let n=[];return t.forEach(r=>{if(this.detectors[r]){let i=this.detectors[r].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(n=n.concat(i))}}),n=n.map(r=>this.options.convertDetectedLanguage(r)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(t,this.options)}))}}Ay.type="languageDetector";Ue.use(Ay).use(aC).init({resources:{en:{translation:HC},ru:{translation:ZC}},detection:{caches:["localStorage","cookie"]},fallbackLng:"en",interpolation:{escapeValue:!1}});const fT=()=>{const[e,t]=P.useState(!1),n=P.useRef(null),r=localStorage.getItem("i18nextLng"),{t:i}=$d(),o=()=>{t(l=>!l)},a=()=>{t(!1)},s=l=>{Ue.changeLanguage(l)};return N.jsxs(N.Fragment,{children:[N.jsx("nav",{children:N.jsxs("div",{className:"flex items-center justify-between border-b-2 border-slate-200 mb-4",children:[N.jsxs("div",{className:"text-2xl flex items-center gap-2 font-bold py-6 uppercase",children:[N.jsx(bS,{}),N.jsx("p",{children:"Artiva"}),N.jsx("p",{className:"text-primary",children:"Store"})]}),N.jsx("div",{className:"hidden lg:block",children:N.jsx("ul",{className:"flex items-center gap-4 text-gray-600",children:Py.map(l=>N.jsx("li",{children:N.jsx(Y0,{onClick:a,to:l.link,className:"hover:text-primary font-semibold",children:i(l.titleKey)})},l.id))})}),N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsxs("div",{className:"hidden lg:flex",children:[N.jsx(Ry,{}),N.jsx(Ly,{})]}),N.jsx("div",{className:"hidden lg:flex",children:N.jsx(Oy,{})}),N.jsxs("select",{defaultValue:r,onClick:l=>s(l.target.value),className:"bg-gray-100 border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-200",children:[N.jsx("option",{value:"en",className:"text-gray-700",children:"EN"}),N.jsx("option",{value:"ru",className:"text-gray-700",children:"RU"})]})]}),N.jsx("div",{className:"lg:hidden cursor-pointer",onClick:o,ref:n,children:e?N.jsx(xS,{className:"text-4xl"}):N.jsx(wS,{className:"text-4xl"})})]})}),N.jsx(hC,{openmenu:e,setOpenmenu:t,menuButtonRef:n,closeMenu:a})]})};function hT(){return N.jsx(N.Fragment,{children:N.jsxs("div",{className:"container mx-auto px-6",children:[N.jsx(fT,{}),N.jsx(Bw,{})]})})}function Me(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Me(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Bt=function(){return Bt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Bt.apply(this,arguments)};function xs(e){return xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xs(e)}var pT=/^\s+/,mT=/\s+$/;function U(e,t){if(t=t||{},(e=e||"")instanceof U)return e;if(!(this instanceof U))return new U(e,t);var n=function(r){var i={r:0,g:0,b:0},o=1,a=null,s=null,l=null,u=!1,c=!1;typeof r=="string"&&(r=function(y){y=y.replace(pT,"").replace(mT,"").toLowerCase();var m,w=!1;if(ac[y])y=ac[y],w=!0;else if(y=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Rt.rgb.exec(y))?{r:m[1],g:m[2],b:m[3]}:(m=Rt.rgba.exec(y))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Rt.hsl.exec(y))?{h:m[1],s:m[2],l:m[3]}:(m=Rt.hsla.exec(y))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Rt.hsv.exec(y))?{h:m[1],s:m[2],v:m[3]}:(m=Rt.hsva.exec(y))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Rt.hex8.exec(y))?{r:ct(m[1]),g:ct(m[2]),b:ct(m[3]),a:ym(m[4]),format:w?"name":"hex8"}:(m=Rt.hex6.exec(y))?{r:ct(m[1]),g:ct(m[2]),b:ct(m[3]),format:w?"name":"hex"}:(m=Rt.hex4.exec(y))?{r:ct(m[1]+""+m[1]),g:ct(m[2]+""+m[2]),b:ct(m[3]+""+m[3]),a:ym(m[4]+""+m[4]),format:w?"name":"hex8"}:(m=Rt.hex3.exec(y))?{r:ct(m[1]+""+m[1]),g:ct(m[2]+""+m[2]),b:ct(m[3]+""+m[3]),format:w?"name":"hex"}:!1}(r)),xs(r)=="object"&&(Zt(r.r)&&Zt(r.g)&&Zt(r.b)?(d=r.r,f=r.g,p=r.b,i={r:255*ge(d,255),g:255*ge(f,255),b:255*ge(p,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Zt(r.h)&&Zt(r.s)&&Zt(r.v)?(a=Ki(r.s),s=Ki(r.v),i=function(y,m,w){y=6*ge(y,360),m=ge(m,100),w=ge(w,100);var g=Math.floor(y),h=y-g,v=w*(1-m),S=w*(1-h*m),T=w*(1-(1-h)*m),b=g%6,O=[w,S,v,v,T,w][b],C=[T,w,w,S,v,v][b],L=[v,v,T,w,w,S][b];return{r:255*O,g:255*C,b:255*L}}(r.h,a,s),u=!0,c="hsv"):Zt(r.h)&&Zt(r.s)&&Zt(r.l)&&(a=Ki(r.s),l=Ki(r.l),i=function(y,m,w){var g,h,v;function S(O,C,L){return L<0&&(L+=1),L>1&&(L-=1),L<1/6?O+6*(C-O)*L:L<.5?C:L<2/3?O+(C-O)*(2/3-L)*6:O}if(y=ge(y,360),m=ge(m,100),w=ge(w,100),m===0)g=h=v=w;else{var T=w<.5?w*(1+m):w+m-w*m,b=2*w-T;g=S(b,T,y+1/3),h=S(b,T,y),v=S(b,T,y-1/3)}return{r:255*g,g:255*h,b:255*v}}(r.h,a,l),u=!0,c="hsl"),r.hasOwnProperty("a")&&(o=r.a));var d,f,p;return o=Ny(o),{ok:u,format:r.format||c,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:o}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function hm(e,t,n){e=ge(e,255),t=ge(t,255),n=ge(n,255);var r,i,o=Math.max(e,t,n),a=Math.min(e,t,n),s=(o+a)/2;if(o==a)r=i=0;else{var l=o-a;switch(i=s>.5?l/(2-o-a):l/(o+a),o){case e:r=(t-n)/l+(t<n?6:0);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:i,l:s}}function pm(e,t,n){e=ge(e,255),t=ge(t,255),n=ge(n,255);var r,i,o=Math.max(e,t,n),a=Math.min(e,t,n),s=o,l=o-a;if(i=o===0?0:l/o,o==a)r=0;else{switch(o){case e:r=(t-n)/l+(t<n?6:0);break;case t:r=(n-e)/l+2;break;case n:r=(e-t)/l+4}r/=6}return{h:r,s:i,v:s}}function mm(e,t,n,r){var i=[Nt(Math.round(e).toString(16)),Nt(Math.round(t).toString(16)),Nt(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function gm(e,t,n,r){return[Nt(_y(r)),Nt(Math.round(e).toString(16)),Nt(Math.round(t).toString(16)),Nt(Math.round(n).toString(16))].join("")}function gT(e,t){t=t===0?0:t||10;var n=U(e).toHsl();return n.s-=t/100,n.s=Gs(n.s),U(n)}function vT(e,t){t=t===0?0:t||10;var n=U(e).toHsl();return n.s+=t/100,n.s=Gs(n.s),U(n)}function yT(e){return U(e).desaturate(100)}function bT(e,t){t=t===0?0:t||10;var n=U(e).toHsl();return n.l+=t/100,n.l=Gs(n.l),U(n)}function xT(e,t){t=t===0?0:t||10;var n=U(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),U(n)}function wT(e,t){t=t===0?0:t||10;var n=U(e).toHsl();return n.l-=t/100,n.l=Gs(n.l),U(n)}function ST(e,t){var n=U(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,U(n)}function kT(e){var t=U(e).toHsl();return t.h=(t.h+180)%360,U(t)}function vm(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=U(e).toHsl(),r=[U(e)],i=360/t,o=1;o<t;o++)r.push(U({h:(n.h+o*i)%360,s:n.s,l:n.l}));return r}function PT(e){var t=U(e).toHsl(),n=t.h;return[U(e),U({h:(n+72)%360,s:t.s,l:t.l}),U({h:(n+216)%360,s:t.s,l:t.l})]}function CT(e,t,n){t=t||6,n=n||30;var r=U(e).toHsl(),i=360/n,o=[U(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,o.push(U(r));return o}function TT(e,t){t=t||6;for(var n=U(e).toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/t;t--;)a.push(U({h:r,s:i,v:o})),o=(o+s)%1;return a}U.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Ny(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=pm(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=pm(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=hm(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=hm(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return mm(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,i,o){var a=[Nt(Math.round(t).toString(16)),Nt(Math.round(n).toString(16)),Nt(Math.round(r).toString(16)),Nt(_y(i))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ge(this._r,255))+"%",g:Math.round(100*ge(this._g,255))+"%",b:Math.round(100*ge(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ge(this._r,255))+"%, "+Math.round(100*ge(this._g,255))+"%, "+Math.round(100*ge(this._b,255))+"%)":"rgba("+Math.round(100*ge(this._r,255))+"%, "+Math.round(100*ge(this._g,255))+"%, "+Math.round(100*ge(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ET[mm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+gm(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=U(e);n="#"+gm(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return U(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(bT,arguments)},brighten:function(){return this._applyModification(xT,arguments)},darken:function(){return this._applyModification(wT,arguments)},desaturate:function(){return this._applyModification(gT,arguments)},saturate:function(){return this._applyModification(vT,arguments)},greyscale:function(){return this._applyModification(yT,arguments)},spin:function(){return this._applyModification(ST,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(CT,arguments)},complement:function(){return this._applyCombination(kT,arguments)},monochromatic:function(){return this._applyCombination(TT,arguments)},splitcomplement:function(){return this._applyCombination(PT,arguments)},triad:function(){return this._applyCombination(vm,[3])},tetrad:function(){return this._applyCombination(vm,[4])}},U.fromRatio=function(e,t){if(xs(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:Ki(e[r]));e=n}return U(e,t)},U.equals=function(e,t){return!(!e||!t)&&U(e).toRgbString()==U(t).toRgbString()},U.random=function(){return U.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},U.mix=function(e,t,n){n=n===0?0:n||50;var r=U(e).toRgb(),i=U(t).toRgb(),o=n/100;return U({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a})},U.readability=function(e,t){var n=U(e),r=U(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},U.isReadable=function(e,t,n){var r,i,o=U.readability(e,t);switch(i=!1,(r=function(a){var s,l;return s=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(a.size||"small").toLowerCase(),s!=="AA"&&s!=="AAA"&&(s="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:s,size:l}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},U.mostReadable=function(e,t,n){var r,i,o,a,s=null,l=0;i=(n=n||{}).includeFallbackColors,o=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=U.readability(e,t[u]))>l&&(l=r,s=U(t[u]));return U.isReadable(e,s,{level:o,size:a})||!i?s:(n.includeFallbackColors=!1,U.mostReadable(e,["#fff","#000"],n))};var ac=U.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ET=U.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(ac);function Ny(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ge(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Gs(e){return Math.min(1,Math.max(0,e))}function ct(e){return parseInt(e,16)}function Nt(e){return e.length==1?"0"+e:""+e}function Ki(e){return e<=1&&(e=100*e+"%"),e}function _y(e){return Math.round(255*parseFloat(e)).toString(16)}function ym(e){return ct(e)/255}var bn,ma,ga,Rt=(ma="[\\s|\\(]+("+(bn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",ga="[\\s|\\(]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",{CSS_UNIT:new RegExp(bn),rgb:new RegExp("rgb"+ma),rgba:new RegExp("rgba"+ga),hsl:new RegExp("hsl"+ma),hsla:new RegExp("hsla"+ga),hsv:new RegExp("hsv"+ma),hsva:new RegExp("hsva"+ga),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Zt(e){return!!Rt.CSS_UNIT.exec(e)}var OT=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(t),o=i+r*(i/5)*-1;return(o==0||o<=Number.EPSILON)&&(o=.1),{animationPeriod:o+"s"}}return{animationPeriod:t}},RT=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var o=n.fontSize;i=function(a,s){var l={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&s.indexOf(u)<0&&(l[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(a);c<u.length;c++)s.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(a,u[c])&&(l[u[c]]=a[u[c]])}return l}(n,["fontSize"]),r=o}return{fontSize:r,styles:i}},LT={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},DT=function(e){var t=e.className,n=e.text,r=e.textColor,i=e.staticText,o=e.style;return n?Je.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:Bt(Bt(Bt({},i&&LT),r&&{color:r,mixBlendMode:"unset"}),o&&o)},typeof n=="string"&&n.length?n:"loading"):null},MT="rgb(50, 205, 50)";function AT(e,t){t===void 0&&(t=0);var n=[];return function r(i,o){return o===void 0&&(o=0),n.push.apply(n,i),n.length<o&&r(n,o),n.slice(0,o)}(e,t)}Me(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var Ar=U(MT).toRgb(),Zn=Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")}),NT=function(e){var t,n=RT(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,i=n.fontSize,o=e==null?void 0:e.easing,a=OT(e==null?void 0:e.speedPlus,"1s").animationPeriod,s=function(l){var u={};if(l instanceof Array){for(var c=AT(l,Zn.length),d=0;d<c.length&&!(d>=4);d++)try{if(!(m=U(c[d])).isValid())throw new Error("invalid color");var f=(w=m.toRgb()).r,p=w.g,y=w.b;u[Zn[d]]="".concat(f,", ").concat(p,", ").concat(y)}catch{f=Ar.r,p=Ar.g,y=Ar.b,u[Zn[d]]="".concat(f,", ").concat(p,", ").concat(y),console.warn("Possibly an invalid color( ".concat(c[d]," ) passed to Atom indicator!"))}return u}try{if(typeof l!="string")throw new Error("Color String expected");var m;if(!(m=U(l)).isValid())throw new Error("Invalid color");var w;for(f=(w=m.toRgb()).r,p=w.g,y=w.b,d=0;d<Zn.length;d++)u[Zn[d]]="".concat(f,", ").concat(p,", ").concat(y)}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l)," received in <Atom /> indicator cannot be processed. Using default instead!")),d=0;d<Zn.length;d++)f=Ar.r,p=Ar.g,y=Ar.b,u[Zn[d]]="".concat(f,", ").concat(p,", ").concat(y)}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return Je.createElement("span",{className:"rli-d-i-b atom-rli-bounding-box",style:Bt(Bt(Bt(Bt(Bt({},i&&{fontSize:i}),a&&{"--rli-animation-duration":a}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},Je.createElement("span",{className:"rli-d-i-b atom-indicator"},Je.createElement("span",{className:"rli-d-i-b electron-orbit"}),Je.createElement("span",{className:"rli-d-i-b electron-orbit"}),Je.createElement("span",{className:"rli-d-i-b electron-orbit"})),Je.createElement(DT,{className:"atom-text",staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Me(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});Me(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")});function Bl(e){return e&&e.Math===Math&&e}Me(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Bl(typeof window=="object"&&window)||Bl(typeof self=="object"&&self)||Bl(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")});Me(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")});Me(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")});Me(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]});Me(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});Me(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});Me(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});Me(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")});Me(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});Me(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")});Me(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")});Me(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});Me(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});Me(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")});Me(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});const Hl=()=>N.jsx("div",{className:"flex justify-center items-center h-screen",children:N.jsx(NT,{color:"#32cd32",size:"medium",text:"",textColor:""})}),_T=P.lazy(()=>nd(()=>import("./Products-B5mToX9o.js"),[])),zT=P.lazy(()=>nd(()=>import("./Makeyourtshirt-DQ_ksdIB.js"),[])),jT=P.lazy(()=>nd(()=>import("./Newarrival-OUpA1IGs.js"),[])),FT=Qw([{path:"/artivastore/",element:N.jsx(hT,{}),children:[{path:"/artivastore/",element:N.jsx(P.Suspense,{fallback:N.jsx(Hl,{}),children:N.jsx(_T,{})})},{path:"/artivastore/newarrivals",element:N.jsx(P.Suspense,{fallback:N.jsx(Hl,{}),children:N.jsx(jT,{})})},{path:"/artivastore/maketshirt",element:N.jsx(P.Suspense,{fallback:N.jsx(Hl,{}),children:N.jsx(zT,{})})}]}]),VT=()=>N.jsx(aS,{router:FT});A0(document.getElementById("root")).render(N.jsx(VT,{}));export{Hl as L,N as j,P as r,$d as u};
