(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(30),c=n.n(a),o=(n(39),n(40),n(41),n(12)),r=n(2),i=n(10),l=n(31),u=n(3),d=function(e){return fetch("/login",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return 401!==e.status?e.json():{isAuthenticated:!1,user:{username:"",email:""}}})).then((function(e){return console.log(e),e}))},j=function(e){return fetch("/register",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))},b=function(){return fetch("/authenticated",{method:"get"}).then((function(e){return 401!==e.status?e.json().then((function(e){return e})):{isAuthenticated:!1,user:{_id:"",name:"",email:"",notes:[]}}})).then((function(e){return e}))},h=n(0),m=Object(s.createContext)(),O=function(e){var t=e.children,n=Object(s.useState)(null),a=Object(r.a)(n,2),c=a[0],o=a[1],i=Object(s.useState)(!1),l=Object(r.a)(i,2),u=l[0],d=l[1],j=Object(s.useState)(!1),O=Object(r.a)(j,2),f=O[0],v=O[1];return Object(s.useEffect)((function(){b().then((function(e){o(e.user),d(e.isAuthenticated),v(!0)}))}),[]),Object(h.jsx)("div",{children:f?Object(h.jsx)(m.Provider,{value:{user:c,setUser:o,isAuthenticated:u,setIsAuthenticated:d},children:t}):Object(h.jsx)("div",{className:"loader-container",children:Object(h.jsx)("div",{className:"loader",title:1,children:Object(h.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",children:Object(h.jsx)("path",{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z",children:Object(h.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})})})};var f=Object(u.g)((function(e){var t=Object(s.useContext)(m),n=Object(s.useState)(""),a=Object(r.a)(n,2),c=a[0],i=a[1],l=Object(s.useState)(""),u=Object(r.a)(l,2),j=u[0],b=u[1],O=Object(s.useState)(""),f=Object(r.a)(O,2),v=f[0],g=f[1],x=function(e){"username"===e.target.name?i(e.target.value):"password"===e.target.name&&b(e.target.value)};return Object(h.jsx)("div",{className:"form-page",children:Object(h.jsxs)("div",{className:"form-card",children:[Object(h.jsx)("div",{className:"form-heading",children:"Login"}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),d({username:c,password:j}).then((function(n){var s=n.isAuthenticated,a=n.user;s?(t.setUser(a),t.setIsAuthenticated(s),console.log(t.isAuthenticated),e.history.push("/notes")):g("Username/Password Incorrect")}))},children:[Object(h.jsx)("input",{type:"text",placeholder:"Username",value:c,name:"username",onChange:x}),Object(h.jsx)("input",{type:"password",placeholder:"Password",value:j,name:"password",onChange:x}),""===v?Object(h.jsx)("div",{}):Object(h.jsx)("div",{className:"form-error",children:v}),Object(h.jsx)("button",{type:"submit",children:"Login"})]})}),Object(h.jsxs)("div",{className:"register-option",children:["Don't have an account? ",Object(h.jsx)(o.b,{to:"/register",children:"Signup"})]})]})})}));var v=Object(u.g)((function(e){var t=Object(s.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(""),i=Object(r.a)(o,2),l=i[0],u=i[1],d=Object(s.useState)(""),b=Object(r.a)(d,2),m=b[0],O=b[1],f=Object(s.useState)(""),v=Object(r.a)(f,2),g=v[0],x=v[1],p=Object(s.useState)(""),y=Object(r.a)(p,2),k=y[0],N=y[1],C=Object(s.useState)(""),S=Object(r.a)(C,2),w=S[0],_=S[1],T=Object(s.useState)({value:!1,msg:""}),I=Object(r.a)(T,2),E=I[0],A=I[1],F=function(e){"username"===e.target.name?c(e.target.value):"password"===e.target.name?u(e.target.value):"name"===e.target.name?x(e.target.value):"email"===e.target.name?N(e.target.value):"confirmPassword"===e.target.name&&O(e.target.value)},P=function(e){L(e.target.name,e.target.value),e.target.addEventListener("change",(function(e){L(e.target.name,e.target.value)}))},L=function(e,t){var n=t.trim();if("username"===e)return n.length>16||n.length<3?(A({value:!1,msg:"\nUsername must be between <br> 3 and 16 characters"}),!1):(A({value:!1,msg:""}),!0);if("email"===e){if(!1===/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{1,4}$/i.test(t))return A({value:!1,msg:"\nEnter a Valid Email"}),!1;A({value:!0,msg:""})}return"confirmPassword"===e?t!==l?(A({value:!1,msg:"Password Does Not Match"}),!1):(A({value:!0,msg:""}),!0):void 0};return Object(h.jsx)("div",{className:"form-page",children:Object(h.jsxs)("div",{className:"form-card register-card",children:[Object(h.jsx)("div",{className:"form-heading",children:"Register"}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),E.value&&j({name:g.trim(),email:k,username:a,password:l}).then((function(t){t.message.msgError?_(t.message.msgBody):(_(""),e.history.push("/"))}))},children:[Object(h.jsx)("input",{type:"text",placeholder:"Name",value:g,name:"name",onChange:F,onBlur:P}),Object(h.jsx)("input",{type:"email",placeholder:"Email",value:k,name:"email",onChange:F,onBlur:P}),Object(h.jsx)("input",{type:"text",placeholder:"Username",value:a,name:"username",onChange:F,onBlur:P}),Object(h.jsx)("input",{type:"password",placeholder:"Password",value:l,name:"password",onChange:F,onBlur:P}),Object(h.jsx)("input",{type:"password",placeholder:"Confirm Password",value:m,name:"confirmPassword",onChange:F,onBlur:P}),""===w?Object(h.jsx)("div",{}):Object(h.jsx)("div",{className:"form-error",children:w}),!1===E.value?Object(h.jsx)("div",{className:"form-error",dangerouslySetInnerHTML:{__html:E.msg}}):Object(h.jsx)("div",{}),Object(h.jsx)("button",{className:"register-button",type:"submit",children:"Register"})]})})]})})})),g=n(5),x=n(33),p=n.n(x);var y=function(e){var t=Object(s.useState)({}),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)({}),l=Object(r.a)(o,2),u=l[0],d=l[1],j=Object(s.useState)([]),b=Object(r.a)(j,2),O=b[0],f=b[1],v=Object(s.useContext)(m);return Object(s.useEffect)((function(){c(e.note),f(e.notes),d(Object(i.a)({},e.note))}),[e]),Object(h.jsx)("div",{className:"note-modal-container",children:Object(h.jsxs)("div",{className:"note-modal",children:[Object(h.jsx)("i",{className:"material-icons close-modal",onClick:function(e){c(Object(i.a)(Object(i.a)({},a),{},{content:a.content}));var t=document.querySelector("#".concat(a.key));c(Object(i.a)(Object(i.a)({},a),{},{content:u.content}));var n=O.findIndex((function(e){return e.key===a.key})),s=Object(g.a)(O);s[n].content=u.content,f(s),t.value=u.content,document.querySelector(".note-modal-container").classList.toggle("note-modal-container-active")},children:"close"}),Object(h.jsx)("textarea",{name:a.key,id:a.key,style:{backgroundColor:a.color},placeholder:"Click to add notes",value:a.content,onChange:function(e){c(Object(i.a)(Object(i.a)({},a),{},{content:e.target.value}));var t=O.findIndex((function(t){return t.key===e.target.name})),n=Object(g.a)(O);n[t].content=e.target.value,f(n)}},a.key),Object(h.jsx)("i",{className:"material-icons save-modal",onClick:function(t){var n={_id:v.user._id,note:a};fetch("/editnote",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)})),document.querySelector(".note-modal-container").classList.toggle("note-modal-container-active"),e.setNotes(O)},children:"save"})]})})};function k(e){var t=e.notes,n=e.setNotes,s=e.userId,a=function(e){var a=[{key:p()(),color:e.target.value,content:"",starred:!1}].concat(t),c={_id:s,notes:a};fetch("/addnotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log(e)})),n(a)};return Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsx)("div",{className:"sidebar-heading",children:"Stickies"}),Object(h.jsx)("i",{className:"material-icons add-note-button",onClick:function(e){document.querySelector(".add-note-button").classList.toggle("add-note-button-focus"),document.querySelector(".color-list").classList.toggle("color-list-selected")},children:"add_circle"}),Object(h.jsxs)("div",{className:"color-list",children:[Object(h.jsx)("button",{value:"#FFC770",onClick:a,style:{backgroundColor:"#FFC770"}}),Object(h.jsx)("button",{value:"#FFA172",onClick:a,style:{backgroundColor:"#FFA172"}}),Object(h.jsx)("button",{value:"#B89AFF",onClick:a,style:{backgroundColor:"#B89AFF"}}),Object(h.jsx)("button",{value:"#00C2FF",onClick:a,style:{backgroundColor:"#00C2FF"}}),Object(h.jsx)("button",{value:"#E8E78E",onClick:a,style:{backgroundColor:"#E8E78E"}})]}),Object(h.jsx)("i",{className:"material-icons view-starred-notes",onClick:function(t){e.history.push("/starred")},children:"stars"}),Object(h.jsx)("i",{className:"material-icons logout-button",onClick:function(t){fetch("/logout",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.history.push("/")}))},children:"exit_to_app"})]})}function N(e){var t=Object(s.useState)([{}]),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)([{}]),i=Object(r.a)(o,2),l=i[0],u=i[1];Object(s.useEffect)((function(){c(e.notes),u(e.searchResults)}),[e]);var d=function(e){if(0===l.length){var t=a.findIndex((function(t){return t.key==e.target.name})),n=Object(g.a)(a);n[t].content=e.target.value,c(n)}else{var s=a.findIndex((function(t){return t.key==e.target.name})),o=Object(g.a)(a);o[s].content=e.target.value,c(o);var r=l.findIndex((function(t){return t.key==e.target.name})),i=Object(g.a)(l);i[r].content=e.target.value,u(i)}},j=function(t){t.target.scrollTop=0;var n={_id:e.userId,notes:a};fetch("/addnotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},b=function(t){var n={_id:e.userId,notes:{_id:t.target.id}},s=a.filter((function(e){return e.key!=t.target.id}));e.mainSetNotes(s),fetch("/deletenote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},m=function(t){var n=[],s=e.notes.findIndex((function(e){return e.key==t.target.id}));if(0===l.length)(n=Object(g.a)(e.notes))[s].starred=!n[s].starred,e.mainSetNotes(n);else{(n=Object(g.a)(e.notes))[s].starred=!n[s].starred,e.mainSetNotes(n);var a=l.findIndex((function(e){return e.key==t.target.id})),c=Object(g.a)(l);c[a].starred=!c[a].starred,u(c)}var o={_id:e.userId,notes:n};fetch("/addnotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},O=function(t){document.querySelector(".note-modal-container").classList.toggle("note-modal-container-active"),e.setNoteModalData(a.filter((function(e){return e.key===t.target.id}))[0])};return 0===l.length?a.map((function(e){return""===e.color?null:Object(h.jsxs)("div",{className:"note-div",style:{backgroundColor:e.color},children:[Object(h.jsx)("textarea",{name:e.key,className:"note",style:{backgroundColor:e.color},placeholder:"Click to add notes",value:e.content,onChange:d,onBlur:j},e.key),Object(h.jsx)("i",{id:e.key,className:"material-icons delete-note-button",onClick:b,children:"delete"}),Object(h.jsx)("i",{id:e.key,className:"material-icons star-note-button",onClick:m,children:e.starred?"star":"star_outline"}),Object(h.jsx)("i",{id:e.key,className:"material-icons edit-note-button",onClick:O,children:"edit"})]},e.key)})):l.map((function(e){return""===e.color?null:Object(h.jsxs)("div",{className:"note-div",style:{backgroundColor:e.color},children:[Object(h.jsx)("textarea",{name:e.key,className:"note",style:{backgroundColor:e.color},placeholder:"Click to add notes",value:e.content,onChange:d,onBlur:j},e.key),Object(h.jsx)("i",{id:e.key,className:"material-icons delete-note-button",onClick:b,children:"delete"}),Object(h.jsx)("i",{id:e.key,className:"material-icons star-note-button",onClick:m,children:e.starred?"star":"star_outline"}),Object(h.jsx)("i",{id:e.key,className:"material-icons edit-note-button",onClick:O,children:"edit"})]},e.key)}))}var C=Object(u.g)((function(e){var t=Object(s.useContext)(m),n=Object(s.useState)([]),a=Object(r.a)(n,2),c=a[0],o=a[1],i=Object(s.useState)(""),l=Object(r.a)(i,2),u=l[0],d=l[1],j=Object(s.useState)([]),b=Object(r.a)(j,2),O=b[0],f=b[1],v=Object(s.useState)(""),g=Object(r.a)(v,2),x=g[0],p=g[1],C=Object(s.useState)({}),S=Object(r.a)(C,2),w=S[0],_=S[1];Object(s.useEffect)((function(){o(e.notes)}),[e.notes]);var T=function(e){e.preventDefault();var n={id:t.user._id,keyword:u};fetch("/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){f(e.result),0===e.result.length&&p("No Notes Found")})),document.querySelector(".add-note-button").classList.add("hide-button"),document.querySelector(".color-list").classList.add("hide-button"),document.querySelector(".view-starred-notes").classList.add("hide-button")};return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{note:w,notes:c,setNotes:o}),Object(h.jsx)(k,{notes:c,setNotes:o,userId:t.user._id,history:e.history}),Object(h.jsxs)("div",{className:"notes-heading",children:[Object(h.jsxs)("form",{onSubmit:T,className:"search-icon",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search",value:u,onChange:function(e){d(e.target.value)}}),Object(h.jsx)("i",{className:"material-icons",onClick:T,children:"search"}),Object(h.jsx)("i",{className:"material-icons",onClick:function(){d(""),f([]),p(""),document.querySelector(".add-note-button").classList.remove("hide-button"),document.querySelector(".color-list").classList.remove("hide-button"),document.querySelector(".view-starred-notes").classList.remove("hide-button")},children:"close"}),Object(h.jsx)("span",{className:"result-message",children:Object(h.jsx)("em",{children:x})})]}),Object(h.jsx)("div",{children:"Notes"})]}),Object(h.jsx)("div",{className:"notes-container",children:Object(h.jsx)(N,{notes:c,searchResults:O,setNotes:o,userId:t.user._id,mainSetNotes:e.setNotes,setNoteModalData:_})})]})})),S=n(34),w=n.n(S);function _(e){var t=Object(s.useContext)(m);return Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsx)("div",{className:"sidebar-heading",children:"Stickies"}),Object(h.jsx)("div",{className:"back-button-div",children:Object(h.jsx)("i",{className:"material-icons back-button",onClick:function(t){e.history.push("/notes")},children:"arrow_back"})}),Object(h.jsx)("i",{className:"material-icons email-button",onClick:function(e){var n={_id:t.user._id};w.a.post("/sendmail",n)},children:"email"}),Object(h.jsx)("i",{className:"material-icons logout-button",onClick:function(t){fetch("/logout",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.history.push("/")}))},children:"exit_to_app"})]})}function T(e){var t=Object(s.useState)([{}]),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)([{}]),i=Object(r.a)(o,2),l=i[0],u=i[1];Object(s.useEffect)((function(){c(e.notes),u(e.searchResults)}),[e]);var d=a.filter((function(e){return!1!==e.starred})),j=function(t){if(0===l.length){var n=a.findIndex((function(e){return e.key==t.target.id})),s=Object(g.a)(a);s[n].starred=!s[n].starred,c(s)}else{var o=a.findIndex((function(e){return e.key==t.target.id})),r=Object(g.a)(a);r[o].starred=!r[o].starred,c(r);var i=l.findIndex((function(e){return e.key==t.target.id})),d=Object(g.a)(l);d[i].starred=!d[i].starred,u(d)}var j={_id:e.userId,notes:e.notes};fetch("/addnotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},b=function(e){e.target.scrollTop=0};return 0===l.length?d.map((function(e){return""===e.color?null:Object(h.jsxs)("div",{className:"note-div",style:{backgroundColor:e.color},children:[Object(h.jsx)("textarea",{name:e.key,className:"note",style:{backgroundColor:e.color},placeholder:"Click to add notes",value:e.content,onBlur:b},e.key),Object(h.jsx)("i",{id:e.key,className:"material-icons starred-notes",onClick:j,children:e.starred?"star":"star_outline"})]},e.key)})):l.map((function(e){return""===e.color?null:Object(h.jsxs)("div",{className:"note-div",style:{backgroundColor:e.color},children:[Object(h.jsx)("textarea",{name:e.key,className:"note",style:{backgroundColor:e.color},placeholder:"Click to add notes",value:e.content},e.key),Object(h.jsx)("i",{id:e.key,className:"material-icons starred-notes",onClick:j,children:e.starred?"star":"star_outline"})]},e.key)}))}var I=Object(u.g)((function(e){var t=Object(s.useContext)(m),n=Object(s.useState)([]),a=Object(r.a)(n,2),c=a[0],o=a[1],i=Object(s.useState)(""),l=Object(r.a)(i,2),u=l[0],d=l[1],j=Object(s.useState)([]),b=Object(r.a)(j,2),O=b[0],f=b[1],v=Object(s.useState)(""),g=Object(r.a)(v,2),x=g[0],p=g[1];Object(s.useEffect)((function(){o(e.notes)}),[e.notes]);var y=function(e){e.preventDefault();var n={id:t.user._id,keyword:u};fetch("/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){f(e.result),0===e.result.length&&p("No Notes Found")}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{history:e.history,notes:c}),Object(h.jsxs)("div",{className:"notes-heading",children:[Object(h.jsxs)("form",{onSubmit:y,className:"search-icon",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search",value:u,onChange:function(e){d(e.target.value)}}),Object(h.jsx)("i",{className:"material-icons",onClick:y,children:"search"}),Object(h.jsx)("i",{className:"material-icons",onClick:function(){d(""),f([]),p("")},children:"close"}),Object(h.jsx)("span",{className:"result-message",children:Object(h.jsx)("em",{children:x})})]}),Object(h.jsx)("div",{children:"Starred Notes"})]}),Object(h.jsx)("div",{className:"notes-container",children:Object(h.jsx)(T,{notes:c,searchResults:O,userId:t.user._id})})]})})),E=function(e){var t=e.component,n=e.notes,s=e.setNotes,a=Object(l.a)(e,["component","notes","setNotes"]);return Object(h.jsx)(u.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return a.isAuthenticated?Object(h.jsx)(t,Object(i.a)({notes:n,setNotes:s},e)):Object(h.jsx)(u.a,{to:"/"})}}))};var A=Object(u.g)((function(){var e=Object(s.useContext)(m),t=Object(s.useState)([{}]),n=Object(r.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){c(e.user.notes)}),[e.user.notes]),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/",children:Object(h.jsx)(f,{})}),Object(h.jsx)(u.b,{path:"/register",children:Object(h.jsx)(v,{})}),Object(h.jsx)(E,{path:"/notes",component:C,notes:a,setNotes:c,isAuthenticated:e.isAuthenticated}),Object(h.jsx)(u.b,{path:"/starred",children:Object(h.jsx)(I,{notes:a,setNotes:c,isAuthenticated:e.isAuthenticated})})]})}));var F=function(){return Object(h.jsx)(o.a,{children:Object(h.jsx)(A,{})})};c.a.render(Object(h.jsx)(O,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.619be2a3.chunk.js.map