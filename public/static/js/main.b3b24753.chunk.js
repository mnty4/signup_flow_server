(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports={Register:"Register_Register__360gr",fieldGroup:"Register_fieldGroup__37Q-N",fieldLabel:"Register_fieldLabel__2wkww",group:"Register_group__1WHlE",cardBody:"Register_cardBody__1WEP-"}},17:function(e,t,a){e.exports={Login:"Login_Login__16OeA",fieldGroup:"Login_fieldGroup__R_eH9",fieldLabel:"Login_fieldLabel__V5QSB",group:"Login_group__3Setm",cardBody:"Login_cardBody__wKdOn"}},21:function(e,t,a){e.exports={Home:"Home_Home__1eAKq",content:"Home_content__3CE9b",buttonsWrapper:"Home_buttonsWrapper__2gWTp",button:"Home_button__34QlL"}},22:function(e,t,a){e.exports={Loader:"Loader_Loader__2Pl5P",loaderWheel:"Loader_loaderWheel__3n1wV",spin:"Loader_spin__1xq9l"}},33:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(25),r=a.n(s),o=(a(33),a(10)),i=a.n(o),l=a(13),j=a(7),b=(a(35),a(36),a(28)),d=a(17),u=a.n(d),x=a(43),h=a(42),p=a(41),m=a(44),O=a(5),f=a(14),g=a(1),_=function(e){var t=e.setJwt,a=Object(n.useState)(""),c=Object(j.a)(a,2),s=c[0],r=c[1],o=Object(n.useRef)(""),b=Object(n.useRef)(""),d=Object(O.g)(),_=function(){var e=Object(l.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("".concat("https://signup-flow-123.herokuapp.com","/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.current.value,password:b.current.value})});case 3:if((n=e.sent).ok){e.next=10;break}return e.t0=r,e.next=8,n.text();case 8:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 10:return r(""),e.t2=t,e.next=14,n.text();case 14:e.t3=e.sent,(0,e.t2)(e.t3),d("../");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:u.a.Login,children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(x.a.Header,{children:Object(g.jsx)(x.a.Title,{as:"h3",children:"Login"})}),Object(g.jsxs)(x.a.Body,{className:u.a.cardBody,children:[Object(g.jsxs)(h.a,{onSubmit:_,children:[Object(g.jsx)(p.a,{className:"mb-3",children:Object(g.jsxs)(h.a.Group,{className:u.a.group,children:[Object(g.jsx)(h.a.Label,{children:"Email"}),Object(g.jsx)(h.a.Control,{type:"text",ref:o,placeholder:"john@email.com",className:"mb-1"}),Object(g.jsx)(h.a.Text,{className:"text-muted",children:"We won't share your email with anyone, we promise."})]})}),Object(g.jsx)(p.a,{className:"mb-3",children:Object(g.jsxs)(h.a.Group,{className:u.a.group,children:[Object(g.jsx)(h.a.Label,{children:"Password"}),Object(g.jsx)(h.a.Control,{type:"password",ref:b})]})}),Object(g.jsx)(m.a,{variant:"primary",type:"submit",className:"mb-2",children:"Login"})]}),Object(g.jsx)(f.b,{to:"/register",children:"Register here if you don't already have an account."}),""!==s&&Object(g.jsx)(x.a.Text,{className:"text-danger mt-2",children:s})]})]})})};_.defaultProps={};var v=_,N=a(16),y=a.n(N),w=function(e){var t=e.setJwt,a=Object(n.useRef)(""),c=Object(n.useRef)(""),s=Object(n.useRef)(""),r=Object(n.useState)(""),o=Object(j.a)(r,2),b=o[0],d=o[1],u=Object(O.g)(),_=function(){var e=Object(l.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("".concat("https://signup-flow-123.herokuapp.com","/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.current.value,email:c.current.value,password:s.current.value})});case 3:if((r=e.sent).ok){e.next=10;break}return e.t0=d,e.next=8,r.text();case 8:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 10:return d(""),e.t2=t,e.next=14,r.text();case 14:return e.t3=e.sent,e.next=17,(0,e.t2)(e.t3);case 17:u("../",{replace:!0});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:y.a.Register,children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(x.a.Header,{children:Object(g.jsx)(x.a.Title,{as:"h3",children:"Register"})}),Object(g.jsxs)(x.a.Body,{className:y.a.cardBody,children:[Object(g.jsxs)(h.a,{onSubmit:_,children:[Object(g.jsx)(p.a,{className:"mb-3",children:Object(g.jsxs)(h.a.Group,{className:y.a.group,children:[Object(g.jsx)(h.a.Label,{className:"",children:"Name"}),Object(g.jsx)(h.a.Control,{type:"text",ref:a,placeholder:"John Doe"})]})}),Object(g.jsx)(p.a,{className:"mb-3",children:Object(g.jsxs)(h.a.Group,{className:y.a.group,children:[Object(g.jsx)(h.a.Label,{className:"",children:"Email"}),Object(g.jsx)(h.a.Control,{type:"text",ref:c,placeholder:"john@email.com"})]})}),Object(g.jsx)(p.a,{className:"mb-1",children:Object(g.jsxs)(h.a.Group,{className:y.a.group,children:[Object(g.jsx)(h.a.Label,{className:"",children:"Password"}),Object(g.jsx)(h.a.Control,{type:"password",ref:s})]})}),Object(g.jsx)(p.a,{className:"mb-4",children:Object(g.jsx)(h.a.Text,{className:"text-muted",children:"We won't share your info with anyone, we promise."})}),Object(g.jsx)(m.a,{variant:"primary",type:"submit",className:"mb-2",children:"Register"})]}),Object(g.jsx)(f.b,{to:"/login",children:"Already have an account?"}),""!==b&&Object(g.jsx)(x.a.Text,{className:"text-danger mt-2",children:b})]})]})})};w.defaultProps={};var L=w,k=a(21),R=a.n(k),T=function(e){var t=e.userInfo,a=e.logout;return Object(g.jsx)("div",{className:R.a.Home,children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(x.a.Header,{children:["You logged in as ",Object(g.jsx)("b",{children:t.name}),"."]}),Object(g.jsxs)("div",{className:R.a.content,children:[Object(g.jsx)("b",{children:"name "}),Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("b",{children:"email "}),Object(g.jsx)("div",{children:t.email})]}),Object(g.jsx)("div",{children:Object(g.jsx)(m.a,{className:"my-2",onClick:a,children:"Logout"})})]})})})};T.defaultProps={};var S=T,C=a(22),P=a.n(C),H=function(){return Object(g.jsx)("div",{className:P.a.Loader,children:Object(g.jsx)("div",{className:P.a.loaderWheel})})};H.defaultProps={};var B=H;var W=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(j.a)(s,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){""!==a&&Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://signup-flow-123.herokuapp.com","/users/me"),{method:"GET",headers:{"Content-Type":"application/json","x-auth-token":a}});case 2:if(!(t=e.sent).ok){e.next=9;break}return e.t0=d,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})))()}),[a]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(b.a,{fluid:!0,className:"app-container",children:[Object(g.jsx)("header",{className:"mb-5",children:Object(g.jsx)("h1",{children:"Website Name"})}),Object(g.jsx)(f.a,{children:Object(g.jsxs)(O.d,{children:[""!==a&&null!==o&&Object(g.jsx)(O.b,{path:"/",element:Object(g.jsx)(S,{userInfo:o,logout:function(){c(""),d(null)}})}),""!==a&&null===o&&Object(g.jsx)(O.b,{path:"/",element:Object(g.jsx)(B,{})}),""===a&&Object(g.jsx)(O.b,{path:"/",element:Object(g.jsx)(O.a,{to:"/login"})}),Object(g.jsx)(O.b,{path:"login",element:Object(g.jsx)(v,{setJwt:c})}),Object(g.jsx)(O.b,{path:"register",element:Object(g.jsx)(L,{setJwt:c})})]})})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root")),G()}},[[40,1,2]]]);
//# sourceMappingURL=main.b3b24753.chunk.js.map