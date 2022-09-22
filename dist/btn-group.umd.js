(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.BtnGroup={},t.Vue))})(this,function(t,e){"use strict";const c={props:{componentPrefix:String,size:String,sizePrefix:String},computed:{sizeableClassPrefix(){return this.sizePrefix||this.componentPrefix},hasSizeablePrefix(){return this.size&&!!this.size.match(new RegExp(`^${this.sizeableClassPrefix}`))},sizeableClass(){return this.size?!this.sizeableClassPrefix||this.hasSizeablePrefix?this.size:`${this.sizeableClassPrefix}-${this.size}`:""}}},l=(s,n)=>{const o=s.__vccOpts||s;for(const[r,i]of n)o[r]=i;return o},u={name:"BtnGroup",mixins:[c],props:{sizePrefix:{type:String,default(){return"btn-group"}},toggle:Boolean,vertical:Boolean},computed:{classes(){return{"btn-group":!this.vertical,"btn-group-toggle":this.toggle,"btn-group-vertical":this.vertical,[this.sizeableClass]:!!this.size}}}},f=["data-toggle"];function p(s,n,o,r,i,a){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(a.classes),"data-toggle":o.toggle?"buttons":!1,role:"group"},[e.renderSlot(s.$slots,"default")],10,f)}const d=l(u,[["render",p]]),g={name:"BtnGroupToggle"},_={class:"btn-group-toggle","data-toggle":"buttons"};function h(s,n,o,r,i,a){return e.openBlock(),e.createElementBlock("div",_,[e.renderSlot(s.$slots,"default")])}const b=l(g,[["render",h]]),$={name:"BtnToolbar"},m={class:"btn-toolbar",role:"toolbar"};function z(s,n,o,r,i,a){return e.openBlock(),e.createElementBlock("div",m,[e.renderSlot(s.$slots,"default")])}const B=l($,[["render",z]]);t.BtnGroup=d,t.BtnGroupToggle=b,t.BtnToolbar=B,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
