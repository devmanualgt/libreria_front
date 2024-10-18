import './polyfills.server.mjs';
import{a as F,b as C,d as m}from"./chunk-5QSAM4NB.mjs";import{$ as s,Da as l,Ea as w,H as u,I as h,Q as k,Qa as j,Ra as $,Ta as A,W as n,X as o,Y as T,Z as x,aa as d,d as v,da as y,ea as S,h as f,k as c,o as b}from"./chunk-67O63YUE.mjs";import{h as g}from"./chunk-VVCT4QZE.mjs";var I=(()=>{let r=class r{constructor(e,t,i,p){this.http=e,this.router=t,this.message=i,this.authFacade=p,this.apiUrl=F.apiUrl}getToken(){return localStorage.getItem("accessToken")}setToken(e){localStorage.setItem("accessToken",e)}getAllBooks(){let e=new l({"Content-Type":"application/json",Authorization:`${this.getToken()}`});return this.http.get(`${this.apiUrl}books`,{headers:e})}newBook(e){let t=new l({"Content-Type":"application/json",Authorization:`${this.getToken()}`});return this.http.post(`${this.apiUrl}books`,e,{headers:t}).subscribe({next:i=>{this.message.successAlert(),this.router.navigate(["/welcome"])},error:i=>{this.message.errorAlert(i.error.message)}})}getBookByid(e){let t=new l({"Content-Type":"application/json",Authorization:`${this.getToken()}`});return this.http.get(`${this.apiUrl}books/${e}`,{headers:t})}deleteBook(e){let t=new l({"Content-Type":"application/json",Authorization:`${this.getToken()}`});return this.http.delete(`${this.apiUrl}books/${e}`,{headers:t}).subscribe({next:i=>{this.message.successAlert(),setTimeout(()=>{window.location.reload()},2e3)},error:i=>{this.message.errorAlert(i.error.message)}})}updateBook(e,t){let i=new l({"Content-Type":"application/json",Authorization:`${this.getToken()}`});return this.http.put(`${this.apiUrl}books/${e}`,t,{headers:i}).pipe(v(p=>p))}};r.\u0275fac=function(t){return new(t||r)(c(w),c(j),c(C),c(m))},r.\u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();var M=()=>["/facade-user"],O=(()=>{let r=class r{constructor(e,t){this.authService=e,this.authFacade=t,this.user=null}ngOnInit(){return g(this,null,function*(){this.authFacade.getProfile().subscribe(e=>{this.user=e})})}logout(){this.authFacade.logout()}};r.\u0275fac=function(t){return new(t||r)(h(I),h(m))},r.\u0275cmp=b({type:r,selectors:[["app-header"]],standalone:!0,features:[y],decls:18,vars:4,consts:[[1,"navbar","navbar-expand-sm","bg-primary","fixed-top",2,"margin-bottom","100px"],[1,"container-fluid","bg-primary","text-light-emphasis"],["href","/welcome",1,"navbar-brand","text-white","fs-3"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","d-flex","gap-2","align-items-center"],[1,"nav-item"],["aria-current","page",1,"nav-link","text-white",2,"cursor","pointer",3,"routerLink"],["aria-current","page",1,"nav-link","text-white",2,"cursor","pointer",3,"click"]],template:function(t,i){t&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),s(3,"Bienvenido"),o(),n(4,"button",3),T(5,"span",4),o(),n(6,"div",5)(7,"ul",6)(8,"li",7),s(9),o(),n(10,"li",7),s(11),o(),n(12,"li",7)(13,"a",8),s(14,"Mi Perfil"),o()(),n(15,"li",7)(16,"a",9),x("click",function(){return i.logout()}),s(17,"Cerrar Sesi\xF3n"),o()()()()()()),t&2&&(u(9),d(i.user==null?null:i.user.firstName),u(2),d(i.user==null?null:i.user.lastName),u(2),k("routerLink",S(3,M)))},dependencies:[A,$],encapsulation:2});let a=r;return a})();export{I as a,O as b};
