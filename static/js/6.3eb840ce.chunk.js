(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[6],{36:function(e,a,t){"use strict";var s=t(38),c=t(13),r=t(12),n=t(15),l=t(16),i=t(0),d=t.n(i),o=t(25),j=t(3),b=function(){var e=localStorage.getItem("role"),a=localStorage.getItem("email"),t=function(){localStorage.clear(),window.location.href="/login"};return"Admin"===e||"Agent"===e||"Customer"===e||"Merchant"===e?Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{"data-bs-toggle":"modal","data-bs-target":"#add-lead-modal",className:"nav-link highlighted-text",href:"#!",children:a})}),Object(j.jsxs)("li",{className:"nav-item dropdown notifications",children:[Object(j.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(j.jsx)("i",{className:"fa fa-user-circle","aria-hidden":"true"})}),Object(j.jsxs)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(j.jsxs)(o.b,{className:"dropdown-item",to:"/my-profile",children:[Object(j.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})," Profile"]}),Object(j.jsx)("div",{className:"dropdown-divider"}),Object(j.jsxs)(o.b,{className:"dropdown-item",onClick:t,children:[Object(j.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})," Sign out"]})]})]})]})})]})}):void 0},m=(t(41),t(42)),u=t.n(m),h=t(2),O=function(){var e=localStorage.getItem("role"),a=Object(h.m)();return"Admin"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/user-list",children:[Object(j.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," User List"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/create-user",children:[Object(j.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})," Create User"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/transaction",children:[Object(j.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"})," Transaction"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/system-balance",children:[Object(j.jsx)("i",{class:"fa fa-money","aria-hidden":"true"})," System Balance"]})})]})})]}):"Agent"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/deposit",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Deposit"]})})]})})]}):"Customer"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/send-money",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Send Money"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/user-limit",children:[Object(j.jsx)("i",{class:"fa fa-ban","aria-hidden":"true"})," Limit"]})})]})})]}):"Merchant"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})})]})})]}):void a("/login")},x=t(43);a.a=function(e){return function(a){Object(n.a)(i,a);var t=Object(l.a)(i);function i(e){var a;return Object(c.a)(this,i),(a=t.call(this,e)).handleParentData=function(e){console.log(e)},a.state={pageLoaded:!1,saveLeadClickEvent:""},a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{pageLoaded:!0}}))}),1e3)}},{key:"renderHtml",value:function(){return this.state.pageLoaded?Object(j.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"main",id:"page-content-wrapper",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container-fluid content-container",children:Object(j.jsx)(e,Object(s.a)({},this.props))})]})]}):Object(j.jsx)("div",{className:"loading-page",children:Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(x.Preloader,{use:x.Bars,size:60,strokeWidth:10,strokeColor:"#f7b085",duration:600})})})}},{key:"addLeadModalFooterContent",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{width:"100%"},children:Object(j.jsx)("button",{onClick:function(a){return e.setState((function(){return{saveLeadClickEvent:(Math.random()+1).toString(36).substring(7)}}))},className:"btn btn-default low-height-btn",children:"Add Lead"})})})}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.renderHtml()})}}]),i}(d.a.Component)}},48:function(e,a,t){},52:function(e,a,t){"use strict";var s=t(38),c=t(13),r=t(12),n=t(15),l=t(16),i=t(0),d=t.n(i),o=t(36),j=(t(48),t(3));a.a=function(e){var a=function(a){Object(n.a)(i,a);var t=Object(l.a)(i);function i(e){var a;return Object(c.a)(this,i),(a=t.call(this,e)).state={},a}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"profile",children:Object(j.jsx)("div",{className:"profile-content",children:Object(j.jsx)(e,Object(s.a)({},this.props))})})})}}]),i}(d.a.Component);return Object(o.a)(a)}},81:function(e,a,t){"use strict";t.r(a);var s=t(4),c=t(7),r=t(5),n=t(0),l=t(39),i=t.n(l),d=t(94),o=(t(48),t(52)),j=t(2),b=t(3);a.default=Object(o.a)((function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(""),m=Object(r.a)(o,2),u=m[0],h=m[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),p=x[0],f=x[1],v=Object(n.useState)(""),g=Object(r.a)(v,2),N=g[0],w=g[1],y=Object(n.useState)(""),S=Object(r.a)(y,2),k=S[0],C=S[1],A=Object(n.useState)(""),D=Object(r.a)(A,2),P=D[0],E=D[1],I=Object(j.o)().id;Object(n.useEffect)((function(){function e(){return(e=Object(c.a)(Object(s.a)().mark((function e(){var a,t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={Authorization:localStorage.getItem("token"),"X-Auth-Secret-Key":"ROADTOSDET"},t={headers:a},e.prev=2,e.next=5,d.a.get("/user/search/id/"+I,t);case 5:c=e.sent,l(c.data.user.name),h(c.data.user.email),f(c.data.user.password),w(c.data.user.phone_number),C(c.data.user.nid),E(c.data.user.role),e.next=27;break;case 14:if(e.prev=14,e.t0=e.catch(2),401!==e.t0.response.status){e.next=19;break}return window.location.href="/login",e.abrupt("return");case 19:l(""),h(""),f(""),w(""),C(""),E(""),console.log(e.t0),i.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 27:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[localStorage.getItem("token")]);var L=function(){var e=Object(c.a)(Object(s.a)().mark((function e(a){var c,r,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c={name:t,email:u,password:p,phone_number:N,nid:k,role:P},r={headers:{Authorization:"".concat(localStorage.getItem("token")),"X-Auth-Secret-Key":"ROADTOSDET"}},e.prev=3,e.next=6,d.a.put("/user/update/".concat(I),c,r);case 6:n=e.sent,console.log(n.data),i.a.fire("Success!","User Update Successfully!","success"),e.next=17;break;case 11:if(e.prev=11,e.t0=e.catch(3),401!==e.t0.response.status){e.next=16;break}return window.location.href="/login",e.abrupt("return");case 16:i.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"my-3 p-3 bg-body rounded shadow-sm",children:[Object(b.jsx)("h6",{className:"border-bottom pb-2 mb-0 mb-3",children:"Personal Info"}),Object(b.jsxs)("form",{onSubmit:L,children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Name"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",value:t,onChange:function(e){return l(e.target.value)},required:!0})})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Email address"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email",value:u,onChange:function(e){return h(e.target.value)},required:!0})})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Password"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:p,onChange:function(e){return f(e.target.value)},required:!0})})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Phone Number"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Phone Number",name:"phoneNumber",value:N,onChange:function(e){return w(e.target.value)},required:!0})})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"NID"}),Object(b.jsx)("div",{className:"input-group mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"NID",name:"nid",value:k,onChange:function(e){return C(e.target.value)},required:!0})})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form-label",children:"Role"}),Object(b.jsxs)("select",{className:"form-select",name:"role",value:P,onChange:function(e){return E(e.target.value)},required:!0,children:[Object(b.jsx)("option",{value:"",children:"Select"}),Object(b.jsx)("option",{value:"Admin",children:"Admin"}),Object(b.jsx)("option",{value:"Customer",children:"Customer"}),Object(b.jsx)("option",{value:"Agent",children:"Agent"})]})]})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-default",children:"Update"})]})]})})}))}}]);
//# sourceMappingURL=6.3eb840ce.chunk.js.map