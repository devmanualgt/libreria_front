import './polyfills.server.mjs';
import{a as x,b as d,c as I,d as k,e as B,f as T,g as M,h as A,l as R,m as j,n as V,o as D}from"./chunk-3Q7N7PIF.mjs";import{a as O}from"./chunk-J7GER5XP.mjs";import{a as H}from"./chunk-IPNF4IXI.mjs";import{a as G}from"./chunk-V34YRFXY.mjs";import{G as m,Ga as S,H as w,N as u,P as a,Qa as U,Ta as N,V as i,W as e,X as l,Y as F,_ as r,ca as C,n as y,xa as q,ya as E}from"./chunk-C4ROVKSZ.mjs";function P(o,n){o&1&&(i(0,"div",25),r(1,"Titulo obligatorio"),e())}function Y(o,n){o&1&&(i(0,"div",25),r(1,"Nombre de usuario obligatorio"),e())}function z(o,n){o&1&&(i(0,"div",25),r(1,"Apellido obligatorio"),e())}function J(o,n){o&1&&(i(0,"div",25),r(1,"Clave obligatorio"),e())}function K(o,n){o&1&&(i(0,"div",25),r(1,"Cantidad de Copias obligatorio"),e())}function L(o,n){o&1&&(i(0,"div",25),r(1,"Cantidad obligatorio"),e())}function Q(o,n){o&1&&(i(0,"div",25),r(1,"Topics obligatorio"),e())}var me=(()=>{let n=class n{constructor(s,p,t){this.AuthService=s,this.fb=p,this.router=t,this.newUserForm=this.fb.group({title:["",d.required],author:["",d.required],isbn:["",d.required],publish_year:["",d.required],copies:["",d.required],quantity:["",d.required],topics:["",d.required]})}newBook(){let s={title:this.newUserForm.value.title??"",author:this.newUserForm.value.author??"",isbn:this.newUserForm.value.isbn??"",publish_year:this.newUserForm.value.publish_year??"",copies:this.newUserForm.value.copies??"",quantity:parseInt(this.newUserForm.value.quantity??0),topics:this.newUserForm.value.topics??""};this.AuthService.newBook(s)}};n.\u0275fac=function(p){return new(p||n)(w(G),w(j),w(U))},n.\u0275cmp=y({type:n,selectors:[["app-new-book"]],standalone:!0,features:[C],decls:49,vars:9,consts:[[1,"py-5"],[1,"mb-2","text-center"],[1,"container","d-flex","justify-content-end"],["href","/welcome",1,"btn","btn-primary"],[1,"bi","bi-arrow-left-circle"],["id","newUserForm",1,"container","pb-2",2,"width","400px","max-width","100%",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","title",1,"form-label"],["formControlName","title","required","","autocomplete","off","type","text","id","title",1,"form-control"],["class","validacion",4,"ngIf"],["for","author",1,"form-label"],["formControlName","author","required","","autocomplete","off","type","text","id","author",1,"form-control"],["for","isbn",1,"form-label"],["formControlName","isbn","required","","autocomplete","off","type","number","id","isbn",1,"form-control"],["for","publish_year",1,"form-label"],["formControlName","publish_year","required","","type","number","id","publish_year",1,"form-control"],["for","copies",1,"form-label"],["formControlName","copies","required","","type","number","id","copies",1,"form-control"],["for","quantity",1,"form-label"],["formControlName","quantity","required","","type","number","id","quantity",1,"form-control"],["for","topics",1,"form-label"],["formControlName","topics","required","","type","text","id","topics",1,"form-control"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary","d-flex","gap-2",3,"disabled"],[1,"bi","bi-person-plus"],[1,"validacion"]],template:function(p,t){if(p&1&&(l(0,"app-header"),i(1,"div",0)(2,"h2",1),r(3,"Nuevo libro"),e(),i(4,"div",2)(5,"a",3),l(6,"i",4),r(7," Regresar"),e()(),i(8,"form",5),F("ngSubmit",function(){return t.newBook()}),i(9,"div",6)(10,"label",7),r(11,"title"),e(),l(12,"input",8),u(13,P,2,0,"div",9),i(14,"div",6)(15,"label",10),r(16,"Autor"),e(),l(17,"input",11),u(18,Y,2,0,"div",9),e(),i(19,"div",6)(20,"label",12),r(21,"Isbn"),e(),l(22,"input",13),u(23,z,2,0,"div",9),e()(),i(24,"div",6)(25,"label",14),r(26,"Year publicacion"),e(),l(27,"input",15),u(28,J,2,0,"div",9),e(),i(29,"div",6)(30,"label",16),r(31,"Copias"),e(),l(32,"input",17),u(33,K,2,0,"div",9),e(),i(34,"div",6)(35,"label",18),r(36,"Cantidad"),e(),l(37,"input",19),u(38,L,2,0,"div",9),e(),i(39,"div",6)(40,"label",20),r(41,"Topics"),e(),l(42,"input",21),u(43,Q,2,0,"div",9),e(),i(44,"div",22)(45,"button",23),l(46,"i",24),r(47,"Registrar"),e()()()(),l(48,"app-footer")),p&2){let f,c,b,v,h,_,g;m(8),a("formGroup",t.newUserForm),m(5),a("ngIf",((f=t.newUserForm.get("title"))==null?null:f.hasError("required"))&&((f=t.newUserForm.get("title"))==null?null:f.touched)),m(5),a("ngIf",((c=t.newUserForm.get("author"))==null?null:c.hasError("required"))&&((c=t.newUserForm.get("author"))==null?null:c.touched)),m(5),a("ngIf",((b=t.newUserForm.get("isbn"))==null?null:b.hasError("required"))&&((b=t.newUserForm.get("isbn"))==null?null:b.touched)),m(5),a("ngIf",((v=t.newUserForm.get("publish_year"))==null?null:v.hasError("required"))&&((v=t.newUserForm.get("publish_year"))==null?null:v.touched)),m(5),a("ngIf",((h=t.newUserForm.get("copies"))==null?null:h.hasError("required"))&&((h=t.newUserForm.get("copies"))==null?null:h.touched)),m(5),a("ngIf",((_=t.newUserForm.get("quantity"))==null?null:_.hasError("required"))&&((_=t.newUserForm.get("quantity"))==null?null:_.touched)),m(5),a("ngIf",((g=t.newUserForm.get("topics"))==null?null:g.hasError("required"))&&((g=t.newUserForm.get("topics"))==null?null:g.touched)),m(2),a("disabled",t.newUserForm.invalid)}},dependencies:[E,q,H,N,V,B,x,T,I,k,R,D,M,A,S,O],styles:[".validacion[_ngcontent-%COMP%]{color:red;text-align:end}"]});let o=n;return o})();export{me as a};
