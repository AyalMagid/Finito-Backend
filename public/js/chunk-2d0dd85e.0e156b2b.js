(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd85e"],{"826d":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signup-cmp"},[s("form",{staticClass:"signup-form flex col",on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[s("h1",[e._v("Sign Up")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerDetails.email,expression:"registerDetails.email"}],attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:e.registerDetails.email},on:{input:function(t){t.target.composing||e.$set(e.registerDetails,"email",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerDetails.username,expression:"registerDetails.username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.registerDetails.username},on:{input:function(t){t.target.composing||e.$set(e.registerDetails,"username",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerDetails.password,expression:"registerDetails.password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.registerDetails.password},on:{input:function(t){t.target.composing||e.$set(e.registerDetails,"password",t.target.value)}}}),s("button",{staticClass:"signup-btn"},[e._v("Register")])])])},i=[],a={name:"signup-cmp",data(){return{registerDetails:{username:"",password:"",email:""}}},methods:{registerUser(){this.$store.dispatch({type:"signup",registerDetails:{...this.registerDetails}}),this.$router.push("/")}}},n=a,l=s("2877"),o=Object(l["a"])(n,r,i,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0dd85e.0e156b2b.js.map