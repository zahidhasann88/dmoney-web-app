(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[9],{36:function(e,t,a){"use strict";var s=a(38),n=a(13),c=a(12),r=a(15),i=a(16),l=a(0),d=a.n(l),o=a(25),j=a(3),b=function(){var e=localStorage.getItem("role"),t=localStorage.getItem("email"),a=function(){localStorage.clear(),window.location.href="/login"};return"Admin"===e||"Agent"===e||"Customer"===e||"Merchant"===e?Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{"data-bs-toggle":"modal","data-bs-target":"#add-lead-modal",className:"nav-link highlighted-text",href:"#!",children:t})}),Object(j.jsxs)("li",{className:"nav-item dropdown notifications",children:[Object(j.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(j.jsx)("i",{className:"fa fa-user-circle","aria-hidden":"true"})}),Object(j.jsxs)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(j.jsxs)(o.b,{className:"dropdown-item",to:"/my-profile",children:[Object(j.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})," Profile"]}),Object(j.jsx)("div",{className:"dropdown-divider"}),Object(j.jsxs)(o.b,{className:"dropdown-item",onClick:a,children:[Object(j.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})," Sign out"]})]})]})]})})]})}):void 0},u=(a(41),a(42)),h=a.n(u),m=a(2),O=function(){var e=localStorage.getItem("role"),t=Object(m.m)();return"Admin"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/user-list",children:[Object(j.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," User List"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/create-user",children:[Object(j.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})," Create User"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/transaction",children:[Object(j.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"})," Transaction"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/system-balance",children:[Object(j.jsx)("i",{class:"fa fa-money","aria-hidden":"true"})," System Balance"]})})]})})]}):"Agent"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/deposit",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Deposit"]})})]})})]}):"Customer"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/send-money",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Send Money"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/user-limit",children:[Object(j.jsx)("i",{class:"fa fa-ban","aria-hidden":"true"})," Limit"]})})]})})]}):"Merchant"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(h.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})})]})})]}):void t("/login")},x=a(43);t.a=function(e){return function(t){Object(r.a)(l,t);var a=Object(i.a)(l);function l(e){var t;return Object(n.a)(this,l),(t=a.call(this,e)).handleParentData=function(e){console.log(e)},t.state={pageLoaded:!1,saveLeadClickEvent:""},t}return Object(c.a)(l,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{pageLoaded:!0}}))}),1e3)}},{key:"renderHtml",value:function(){return this.state.pageLoaded?Object(j.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"main",id:"page-content-wrapper",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container-fluid content-container",children:Object(j.jsx)(e,Object(s.a)({},this.props))})]})]}):Object(j.jsx)("div",{className:"loading-page",children:Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(x.Preloader,{use:x.Bars,size:60,strokeWidth:10,strokeColor:"#f7b085",duration:600})})})}},{key:"addLeadModalFooterContent",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{width:"100%"},children:Object(j.jsx)("button",{onClick:function(t){return e.setState((function(){return{saveLeadClickEvent:(Math.random()+1).toString(36).substring(7)}}))},className:"btn btn-default low-height-btn",children:"Add Lead"})})})}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.renderHtml()})}}]),l}(d.a.Component)}},45:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var s=a(4),n=a(7),c=a(5),r=a(0),i=a(36),l=(a(45),a(91)),d=a(39),o=a.n(d),j=a(2),b=a(3);t.default=Object(i.a)((function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],d=Object(r.useState)(!1),u=Object(c.a)(d,2),h=u[0],m=(u[1],Object(r.useState)(null)),O=Object(c.a)(m,2),x=O[0],f=(O[1],Object(r.useState)("")),p=Object(c.a)(f,2),g=p[0],v=p[1],N=Object(r.useState)({key:null,direction:"ascending"}),w=Object(c.a)(N,2),k=w[0],y=w[1],S=Object(r.useState)(1),C=Object(c.a)(S,2),L=C[0],_=C[1],D=Object(r.useState)(30),A=Object(c.a)(D,2),E=A[0],I=(A[1],Object(r.useState)(null)),M=Object(c.a)(I,2),T=M[0],P=M[1],U=Object(r.useState)(!1),B=Object(c.a)(U,2),F=(B[0],B[1],T?T.toLocaleString("en-US"):"");var z=localStorage.getItem("user"),J=JSON.parse(z),K=null===J||void 0===J?void 0:J.phone_number,R=Object(j.m)();Object(r.useEffect)((function(){function e(){return e=Object(n.a)(Object(s.a)().mark((function e(){var t,a,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={Authorization:localStorage.getItem("token"),"X-Auth-Secret-Key":"ROADTOSDET"},a={headers:t},e.prev=2,e.next=5,l.a.get("/user/list",a);case 5:return n=e.sent,i(n.data.users),e.next=9,l.a.get("/transaction/balance/".concat(K),a).then((function(e){var t;console.log(e.data),P(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.balance)})).catch((function(e){console.log("hi"),console.log(e),401!==e.response.status||(window.location.href="/login")}));case 9:e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(2),console.log(e.t0),401!==e.t0.response.status){e.next=17;break}return window.location.href="/login",e.abrupt("return");case 17:o.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 18:case"end":return e.stop()}}),e,null,[[2,11]])}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[localStorage.getItem("token")]);var W=function(){var e=Object(n.a)(Object(s.a)().mark((function e(t){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"".concat(localStorage.getItem("token")),"X-Auth-Secret-Key":"ROADTOSDET"}},e.prev=1,e.next=4,l.a.delete("/user/delete/".concat(t),a);case 4:e.sent,o.a.fire("Success","User deleted successfully","success"),e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(1),401!==e.t0.response.status){e.next=13;break}return window.location.href="/login",e.abrupt("return");case 13:o.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t="ascending";k.key===e&&"ascending"===k.direction&&(t="descending"),y({key:e,direction:t})},X=function(e){_(e)},q=a.filter((function(e){var t=e.id?e.id.toString().toLowerCase():"",a=e.name?e.name.toLowerCase():"",s=e.email?e.email.toLowerCase():"",n=e.phone_number?e.phone_number.toLowerCase():"",c=e.role?e.role.toLowerCase():"",r=e.nid?e.nid.toLowerCase():"";return t.includes(g.toLowerCase())||a.includes(g.toLowerCase())||s.includes(g.toLowerCase())||n.includes(g.toLowerCase())||c.includes(g.toLowerCase())||r.includes(g.toLowerCase())})).sort((function(e,t){if(null!==k.key){if(e[k.key]<t[k.key])return"ascending"===k.direction?-1:1;if(e[k.key]>t[k.key])return"ascending"===k.direction?1:-1}return 0})),G=L*E,Q=G-E,V=q.slice(Q,G),Y=Math.ceil(q.length/E);return h?Object(b.jsx)("div",{children:"Loading..."}):x?Object(b.jsxs)("div",{children:["Error: ",x.message]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"row mb-2",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("h5",{children:"User List"})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsxs)("h2",{children:["Balance: ",F||0," TK"]})})})}),Object(b.jsx)("div",{className:"col text-right",children:Object(b.jsxs)("button",{type:"button",class:"btn btn-outline-secondary",children:[Object(b.jsx)("i",{class:"fa fa-file-excel-o","aria-hidden":"true"})," Export"]})})]}),Object(b.jsxs)("div",{className:"row mt-2",children:[Object(b.jsx)("div",{className:"col-9"}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search list",value:g,onChange:function(e){return v(e.target.value)}})})]}),Object(b.jsx)("div",{className:"mt-2",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{onClick:function(){return H("id")},children:[Object(b.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})," ID"]}),Object(b.jsxs)("th",{onClick:function(){return H("name")},children:[Object(b.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})," Name"]}),Object(b.jsxs)("th",{onClick:function(){return H("email")},children:[Object(b.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})," Email"]}),Object(b.jsxs)("th",{onClick:function(){return H("phone_number")},children:[Object(b.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})," Phone Number"]}),Object(b.jsxs)("th",{onClick:function(){return H("role")},children:[Object(b.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})," Role"]}),Object(b.jsxs)("th",{onClick:function(){return H("nid")},children:[Object(b.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})," NID"]}),Object(b.jsxs)("th",{onClick:function(){return H("balance")},children:[Object(b.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})," Balance"]})]})}),Object(b.jsx)("tbody",{children:V.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.phone_number}),Object(b.jsx)("td",{children:e.role}),Object(b.jsx)("td",{children:e.nid}),Object(b.jsx)("td",{children:e.balance}),Object(b.jsxs)("td",{children:[Object(b.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true",onClick:function(){return t=e.id,void R("/profile/".concat(t));var t}}),"\xa0\xa0",Object(b.jsx)("i",{className:"fa fa-trash","aria-hidden":"true",onClick:function(){return W(e.id)}})]})]},e.id)}))})]})}),Object(b.jsxs)("div",{className:"pagination",children:[Object(b.jsx)("button",{className:"pagination__button",onClick:function(){return X(L-1)},disabled:1===L,children:"Prev"}),L>3&&Object(b.jsx)("button",{className:"pagination__button",onClick:function(){return X(1)},children:"1"}),L>4&&Object(b.jsx)("span",{className:"pagination__ellipsis",children:"..."}),Array.from({length:Y},(function(e,t){return t+1})).filter((function(e){return 1===e||e===Y||Math.abs(e-L)<2||L<4&&e<6||L>Y-4&&e>Y-6})).map((function(e){return Object(b.jsx)("button",{className:"pagination__button ".concat(e===L?"pagination__button--active":""),onClick:function(){return X(e)},children:e},e)})),L<Y-3&&Object(b.jsx)("span",{className:"pagination__ellipsis",children:"..."}),L<Y-2&&Object(b.jsx)("button",{className:"pagination__button",onClick:function(){return X(Y)},children:Y}),Object(b.jsx)("button",{className:"pagination__button",onClick:function(){return X(L+1)},disabled:L===Y,children:"Next"})]})]})})})}))}}]);
//# sourceMappingURL=9.5dd806ab.chunk.js.map