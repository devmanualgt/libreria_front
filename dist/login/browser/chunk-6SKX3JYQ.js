import{a as F}from"./chunk-5BKIBLQU.js";import{$ as k,B as h,D as u,E as _,F as x,G as v,H as r,I as a,J as p,L as s,M as m,O as d,Q as b,W as S,X as g,ea as E,fa as T,k as C,m as y,v as c,w as I,z as l}from"./chunk-BLXA747D.js";function j(e,t){e&1&&(r(0,"div",5),p(1,"i",8),a())}function w(e,t){e&1&&(r(0,"div",9),p(1,"i",10),a())}function $(e,t){if(e&1&&(r(0,"p",11)(1,"span",12),m(2),a(),m(3),a()),e&2){let i=s().$implicit,n=s(2);c(2),d("",i,":"),c(),d(" ",n.user[i],"")}}function A(e,t){if(e&1&&(r(0,"p",11)(1,"span",12),m(2),a(),m(3),a()),e&2){let i=t.$implicit,n=s(2).$implicit,o=s(2);c(2),d("",i,":"),c(),d(" ",o.user[n][i],"")}}function D(e,t){if(e&1&&x(0,A,4,2,"p",11,_),e&2){let i=s().$implicit,n=s(2);v(n.getObjectKeys(n.user[i]))}}function M(e,t){if(e&1&&l(0,$,4,2,"p",11)(1,D,2,0),e&2){let i=t.$implicit;u(0,i!=="type_user"?0:1)}}function O(e,t){if(e&1&&(r(0,"div",4),l(1,j,2,0,"div",5)(2,w,2,0),r(3,"div",6),x(4,M,2,1,null,null,_),r(6,"a",7),m(7,"Regresar"),a()()()),e&2){let i=s();c(),u(1,i.user.type_user.type==="Admin"?1:2),c(3),v(i.getObjectKeys(i.user))}}var J=(()=>{let t=class t{constructor(n){this.authService=n,this.route=C(k),this.users=[],this.authService.getUsers().subscribe({next:o=>{this.users=o;let f=parseInt(this.route.snapshot.params.id,10);this.user=this.users.find(U=>U.id===f)},error:o=>{console.error(o)}})}getObjectKeys(n){return Object.keys(n)}};t.\u0275fac=function(o){return new(o||t)(I(T))},t.\u0275cmp=y({type:t,selectors:[["app-user-information"]],standalone:!0,features:[b],decls:6,vars:1,consts:[[1,"container","text-center"],[1,"my-5"],[1,"d-flex","justify-content-center"],["class","card","style","width: 18rem;",4,"ngIf"],[1,"card",2,"width","18rem"],[2,"background-color","#21CABD"],[1,"card-body"],["href","/welcome",1,"btn","btn-primary"],[1,"bi","bi-person-circle","fs-1",2,"color","#fff"],[2,"background-color","#0E51D5"],[1,"bi","bi-person","fs-1",2,"color","#fff"],[1,"card-text"],[1,"fw-bold"]],template:function(o,f){o&1&&(p(0,"app-header"),r(1,"div",0)(2,"h1",1),m(3,"Informaci\xF3n de usuario"),a(),r(4,"div",2),l(5,O,8,1,"div",3),a()()),o&2&&(c(5),h("ngIf",f.user))},dependencies:[g,S,E,F],encapsulation:2});let e=t;return e})();export{J as default};
