import './polyfills.server.mjs';
import{a as N,b as u,c as x,d as q,e as I,g as M,h as T,i as A,j as R,k as j,l as G,m as V,n as D,o as O}from"./chunk-3Q7N7PIF.mjs";import"./chunk-IPNF4IXI.mjs";import{a as P}from"./chunk-V34YRFXY.mjs";import{G as l,Ga as E,H as g,N as d,P as a,Qa as F,Ta as C,V as t,W as e,X as m,Y as U,_ as r,ca as h,n as b,xa as S,ya as y}from"./chunk-C4ROVKSZ.mjs";import"./chunk-VVCT4QZE.mjs";function H(n,o){n&1&&(t(0,"div",25),r(1,"Usuario obligatorio"),e())}function k(n,o){n&1&&(t(0,"div",25),r(1,"Nombre de usuario obligatorio"),e())}function B(n,o){n&1&&(t(0,"div",25),r(1,"Apellido obligatorio"),e())}function L(n,o){n&1&&(t(0,"div",25),r(1,"Clave obligatorio"),e())}function z(n,o){n&1&&(t(0,"div",25),r(1,"Tipo de usuario obligatorio"),e())}var ie=(()=>{let o=class o{constructor(p,s,i){this.AuthService=p,this.fb=s,this.router=i,this.newUserForm=this.fb.group({user:["",u.required],password:["",u.required],name:["",u.required],last_name:["",u.required],type_user:["",u.required]})}newUser(){let p={user:this.newUserForm.value.user??"",password:this.newUserForm.value.password??"",name:this.newUserForm.value.name??"",last_name:this.newUserForm.value.last_name??"",type_user:parseInt(this.newUserForm.value.type_user??0)};this.AuthService.newUser(p)}};o.\u0275fac=function(s){return new(s||o)(g(P),g(V),g(F))},o.\u0275cmp=b({type:o,selectors:[["app-new-user"]],standalone:!0,features:[h],decls:45,vars:7,consts:[[1,"pt-3"],[1,"mb-2","text-center"],[1,"container","d-flex","justify-content-end"],["href","/welcome",1,"btn","btn-danger"],[1,"bi","bi-arrow-left-circle"],["id","newUserForm",1,"container","pb-2",2,"width","400px","max-width","100%",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","user",1,"form-label"],["formControlName","user","required","","autocomplete","off","type","text","id","user",1,"form-control"],["class","validacion",4,"ngIf"],["for","name",1,"form-label"],["formControlName","name","required","","autocomplete","off","type","text","id","name",1,"form-control"],["for","last_name",1,"form-label"],["formControlName","last_name","required","","autocomplete","off","type","text","id","last_name",1,"form-control"],["for","password",1,"form-label"],["formControlName","password","required","","type","password","id","password",1,"form-control"],["for","type_user",1,"form-label"],["formControlName","type_user","id","type_user","required","",1,"form-select"],["selected","","disabled","","value",""],["value","1"],["value","2"],[1,"invalid-feedback"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary","d-flex","gap-2",3,"disabled"],[1,"bi","bi-person-plus"],[1,"validacion"]],template:function(s,i){if(s&1&&(t(0,"div",0)(1,"h2",1),r(2,"New User"),e(),t(3,"div",2)(4,"a",3),m(5,"i",4),r(6," Regresar"),e()(),t(7,"form",5),U("ngSubmit",function(){return i.newUser()}),t(8,"div",6)(9,"label",7),r(10,"User"),e(),m(11,"input",8),d(12,H,2,0,"div",9),t(13,"div",6)(14,"label",10),r(15,"User Name"),e(),m(16,"input",11),d(17,k,2,0,"div",9),e(),t(18,"div",6)(19,"label",12),r(20,"Last name"),e(),m(21,"input",13),d(22,B,2,0,"div",9),e()(),t(23,"div",6)(24,"label",14),r(25,"Password"),e(),m(26,"input",15),d(27,L,2,0,"div",9),e(),t(28,"div",6)(29,"label",16),r(30,"TypeUser"),e(),t(31,"select",17)(32,"option",18),r(33,"Choose..."),e(),t(34,"option",19),r(35,"Admin"),e(),t(36,"option",20),r(37,"Gerente"),e()(),t(38,"div",21),r(39," Please select a valid state. "),e(),d(40,z,2,0,"div",9),e(),t(41,"div",22)(42,"button",23),m(43,"i",24),r(44,"Registrar"),e()()()()),s&2){let f,c,v,w,_;l(7),a("formGroup",i.newUserForm),l(5),a("ngIf",((f=i.newUserForm.get("user"))==null?null:f.hasError("required"))&&((f=i.newUserForm.get("user"))==null?null:f.touched)),l(5),a("ngIf",((c=i.newUserForm.get("name"))==null?null:c.hasError("required"))&&((c=i.newUserForm.get("name"))==null?null:c.touched)),l(5),a("ngIf",((v=i.newUserForm.get("last_name"))==null?null:v.hasError("required"))&&((v=i.newUserForm.get("last_name"))==null?null:v.touched)),l(5),a("ngIf",((w=i.newUserForm.get("password"))==null?null:w.hasError("required"))&&((w=i.newUserForm.get("password"))==null?null:w.touched)),l(13),a("ngIf",((_=i.newUserForm.get("type_user"))==null?null:_.hasError("required"))&&((_=i.newUserForm.get("type_user"))==null?null:_.touched)),l(2),a("disabled",i.newUserForm.invalid)}},dependencies:[y,S,C,D,I,R,j,N,A,x,q,G,O,M,T,E],styles:[".validacion[_ngcontent-%COMP%]{color:red;text-align:end}"]});let n=o;return n})();export{ie as default};
