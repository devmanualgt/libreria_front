import"./chunk-KIJP73NZ.js";import{n as h,o as C}from"./chunk-QQAJAO2A.js";import{J as a,Q as m,Y as l,Z as c,_ as s,aa as d,da as u,fa as f,k as i,m as p,p as n}from"./chunk-BLXA747D.js";var e=(o,t)=>i(f).isLoggedIn();var v=[{path:"login",loadComponent:()=>import("./chunk-RYKLV7AM.js")},{path:"welcome",title:"Welcome",loadComponent:()=>import("./chunk-QIVAVG65.js"),canMatch:[e]},{path:"details/:id",title:"User Datails",loadComponent:()=>import("./chunk-6SKX3JYQ.js"),canMatch:[e]},{path:"details-book/:id",title:"Book Datails",loadComponent:()=>import("./chunk-6G7RQAUX.js"),canMatch:[e]},{path:"new-user",title:"New User",loadComponent:()=>import("./chunk-B4E4RIU5.js"),canMatch:[e]},{path:"new-book",title:"New Book",loadComponent:()=>import("./chunk-TBX2B33F.js"),canMatch:[e]},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",title:"Not-found",loadComponent:()=>import("./chunk-44C5VKNT.js")}];var M={providers:[u(v),s(),n(l,C,h)]};var g=(()=>{let t=class t{constructor(){this.title="login"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(r,F){r&1&&a(0,"router-outlet")},dependencies:[d]});let o=t;return o})();c(g,M).catch(o=>console.error(o));
