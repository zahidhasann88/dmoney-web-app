(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[14],{36:function(e,a,t){"use strict";var s=t(38),n=t(13),c=t(12),r=t(15),i=t(16),l=t(0),o=t.n(l),d=t(25),b=t(3),j=function(){var e=localStorage.getItem("role"),a=localStorage.getItem("email"),t=function(){localStorage.clear(),window.location.href="/login"};return"Admin"===e||"Agent"===e||"Customer"===e||"Merchant"===e?Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{"data-bs-toggle":"modal","data-bs-target":"#add-lead-modal",className:"nav-link highlighted-text",href:"#!",children:a})}),Object(b.jsxs)("li",{className:"nav-item dropdown notifications",children:[Object(b.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(b.jsx)("i",{className:"fa fa-user-circle","aria-hidden":"true"})}),Object(b.jsxs)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(b.jsxs)(d.b,{className:"dropdown-item",to:"/my-profile",children:[Object(b.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})," Profile"]}),Object(b.jsx)("div",{className:"dropdown-divider"}),Object(b.jsxs)(d.b,{className:"dropdown-item",onClick:t,children:[Object(b.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})," Sign out"]})]})]})]})})]})}):void 0},m=(t(41),t(42)),u=t.n(m),h=t(2),O=function(){var e=localStorage.getItem("role"),a=Object(h.m)();return"Admin"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/user-list",children:[Object(b.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," User List"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/create-user",children:[Object(b.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})," Create User"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/transaction",children:[Object(b.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"})," Transaction"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/system-balance",children:[Object(b.jsx)("i",{class:"fa fa-money","aria-hidden":"true"})," System Balance"]})})]})})]}):"Agent"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/payment",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/deposit",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Deposit"]})})]})})]}):"Customer"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/send-money",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Send Money"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/withdraw",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/payment",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/user-limit",children:[Object(b.jsx)("i",{class:"fa fa-ban","aria-hidden":"true"})," Limit"]})})]})})]}):"Merchant"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(u.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(d.b,{tag:"a",className:"",to:"/withdraw",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})})]})})]}):void a("/login")},x=t(43);a.a=function(e){return function(a){Object(r.a)(l,a);var t=Object(i.a)(l);function l(e){var a;return Object(n.a)(this,l),(a=t.call(this,e)).handleParentData=function(e){console.log(e)},a.state={pageLoaded:!1,saveLeadClickEvent:""},a}return Object(c.a)(l,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{pageLoaded:!0}}))}),1e3)}},{key:"renderHtml",value:function(){return this.state.pageLoaded?Object(b.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"main",id:"page-content-wrapper",children:[Object(b.jsx)(j,{}),Object(b.jsx)("div",{className:"container-fluid content-container",children:Object(b.jsx)(e,Object(s.a)({},this.props))})]})]}):Object(b.jsx)("div",{className:"loading-page",children:Object(b.jsx)("div",{className:"center",children:Object(b.jsx)(x.Preloader,{use:x.Bars,size:60,strokeWidth:10,strokeColor:"#f7b085",duration:600})})})}},{key:"addLeadModalFooterContent",value:function(){var e=this;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{style:{width:"100%"},children:Object(b.jsx)("button",{onClick:function(a){return e.setState((function(){return{saveLeadClickEvent:(Math.random()+1).toString(36).substring(7)}}))},className:"btn btn-default low-height-btn",children:"Add Lead"})})})}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.renderHtml()})}}]),l}(o.a.Component)}},81:function(e,a,t){"use strict";t.r(a);var s=t(4),n=t(7),c=t(5),r=t(0),i=t(91),l=t(39),o=t.n(l),d=t(36),b=t(3);a.default=Object(d.a)((function(){var e=Object(r.useState)(null),a=Object(c.a)(e,2),t=a[0],l=a[1],d=Object(r.useState)(null),j=Object(c.a)(d,2),m=j[0],u=j[1],h=Object(r.useState)(0),O=Object(c.a)(h,2),x=O[0],f=O[1],p=localStorage.getItem("user"),g=JSON.parse(p).phone_number;Object(r.useEffect)((function(){function e(){return(e=Object(n.a)(Object(s.a)().mark((function e(){var a,t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={Authorization:localStorage.getItem("token"),"X-Auth-Secret-Key":"ROADTOSDET"},t={headers:a},e.next=4,i.a.get("/transaction/balance/".concat(g),t).then((function(e){var a;console.log(e.data),f(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.balance)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[localStorage.getItem("token")]);var v=function(){var e=Object(n.a)(Object(s.a)().mark((function e(a){var c,r,l;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c={from_account:g,to_account:t,amount:Number(m)},r=m.toLocaleString("en-US"),l=x.toLocaleString("en-US"),!(m>x)){e.next=7;break}return o.a.fire({icon:"warning",title:"Insufficient balance!",html:"Entered Amount: "+r+" TK<br>Current Balance: "+l+" TK"}),e.abrupt("return");case 7:o.a.fire({icon:"warning",html:"<b>Do you confirm to send money?</b><br>Amount: "+r+" TK<br>Current Balance: "+l+" TK",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Send"}).then(function(){var e=Object(n.a)(Object(s.a)().mark((function e(a){var t,n,r,l;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConfirmed){e.next=16;break}return e.prev=1,e.next=4,i.a.post("/transaction/sendmoney",c,{headers:{Authorization:"".concat(localStorage.getItem("token")),"X-Auth-Secret-Key":"ROADTOSDET"}});case 4:t=e.sent,console.log(t.data),null!==(n=t.data)&&void 0!==n&&n.currentBalance?(r=n.currentBalance.toLocaleString("en-US"),l=n.fee||0,f(n.currentBalance),o.a.fire(n.message,"Your current balance is ".concat(r," TK ").concat(l?"Fee ".concat(l," TK"):""," Trnx ID: ").concat(n.trnxId),"success")):o.a.fire("Warning!",null===n||void 0===n?void 0:n.message,"warning"),e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(1),401!==e.t0.response.status){e.next=15;break}return window.location.href="/login",e.abrupt("return");case 15:o.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("form",{onSubmit:v,children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{children:"Send Money"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"row mt-4",children:[Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("label",{className:"form-label",children:"To Account"})}),Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("div",{className:"form-outline mb-3",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Your Account Number",value:t||"",onChange:function(e){return l(e.target.value)},required:!0})})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("label",{className:"form-label",children:"Amount"})}),Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("div",{className:"form-outline mb-3",children:Object(b.jsx)("input",{type:"number",className:"form-control",placeholder:"Enter Number of Amount",value:m||"",onChange:function(e){return u(e.target.value)},required:!0})})})]})]}),Object(b.jsx)("div",{className:"mt-2",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send"})})]})})})})}))}}]);
//# sourceMappingURL=14.f554cb3e.chunk.js.map