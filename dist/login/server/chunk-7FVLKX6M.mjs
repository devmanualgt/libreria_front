import './polyfills.server.mjs';
import{a as w}from"./chunk-V34YRFXY.mjs";import{$ as f,F as m,G as n,H as c,P as u,Ra as S,Ta as g,V as o,W as t,X as k,Y as b,_ as i,aa as p,ca as v,da as h,ea as y,n as s,ya as E}from"./chunk-C4ROVKSZ.mjs";var I=a=>["/details-book",a],_=()=>["/welcome"],j=(()=>{let l=class l{constructor(r){this.AuthService=r}deleteBook(r){r!==void 0?this.AuthService.deleteBook(r):console.error("El ID del libro es indefinido.")}};l.\u0275fac=function(d){return new(d||l)(c(w))},l.\u0275cmp=s({type:l,selectors:[["app-book-card"]],inputs:{book:"book"},standalone:!0,features:[v],decls:24,vars:11,consts:[[1,"card",2,"width","18rem"],[1,"card-body"],[2,"width","100%","height","400px",3,"src","alt"],[1,"card-title","fs-3",2,"height","100px","display","flex","align-items","center","justify-content","center"],[1,"fw-bolder"],[1,"card-text"],[1,"fw-bold"],[1,"d-flex","justify-content-evenly","gap-2"],[1,"btn","btn-primary",2,"width","100%",3,"routerLink"],[1,"btn","btn-danger",2,"width","100%",3,"click","routerLink"]],template:function(d,e){d&1&&(o(0,"div",0)(1,"div",1),k(2,"img",2),o(3,"div")(4,"p",3)(5,"span",4),i(6),t()()(),o(7,"p",5)(8,"span",6),i(9,"Autor:"),t(),i(10),t(),o(11,"p",5)(12,"span",6),i(13,"Temas:"),t(),i(14),t(),o(15,"p",5)(16,"span",6),i(17,"Isbn:"),t(),i(18),t(),o(19,"div",7)(20,"a",8),i(21,"Editar"),t(),o(22,"a",9),b("click",function(){return e.deleteBook(e.book==null?null:e.book.id)}),i(23,"Eliminar"),t()()()()),d&2&&(n(2),u("src",e.book==null?null:e.book.link_img,m)("alt",e.book==null?null:e.book.title),n(4),f(e.book==null?null:e.book.title),n(4),p(" ",e.book==null?null:e.book.author," "),n(4),p(" ",e.book==null?null:e.book.topics," "),n(4),p(" ",e.book==null?null:e.book.isbn," "),n(2),u("routerLink",y(8,I,e.book==null?null:e.book.id)),n(2),u("routerLink",h(10,_)))},dependencies:[E,g,S],encapsulation:2});let a=l;return a})();export{j as a};
