(this.webpackJsonptodo16v2=this.webpackJsonptodo16v2||[]).push([[0],{129:function(t,e,n){},130:function(t,e,n){},157:function(t,e,n){"use strict";n.r(e);var a,i,c=n(0),o=n.n(c),r=n(33),s=n.n(r),l=(n(129),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))}),d=n(13),u=(n(130),n(20)),j=n(15),b=n(16),O=n(103),f=n.n(O).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"552d629c-2943-4e99-a733-e3c3adc34777"}}),h=function(){return f.get("todo-lists")},p=function(t){return f.post("todo-lists",{title:t})},T=function(t){return f.delete("todo-lists/".concat(t))},m=function(t,e){return f.put("todo-lists/".concat(t),{title:e})},g=function(t){return f.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return f.delete("todo-lists/".concat(t,"/tasks/").concat(e))},x=function(t,e){return f.post("todo-lists/".concat(t,"/tasks"),{title:e})},k=function(t,e,n){return f.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},S=function(t){return f.post("/auth/login",t)},I=function(){return f.get("/auth/me")},C=function(){return f.delete("/auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var y=function(t,e){t.messages.length?e(w(t.messages[0])):e(w("Some error occurred")),e(P("failed"))},E=function(t,e){e(w(t.message?t.message:"Some error occurred")),e(P("failed"))},A={isLoggedIn:!1},L=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},D={status:"idle",error:null,isInitialized:!1},w=function(t){return{type:"APP/SET-ERROR",error:t}},P=function(t){return{type:"APP/SET-STATUS",status:t}},N=function(t){return{type:"APP/SET-INITIALIZED",value:t}},F=[],R=n(5),G={},M=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(j.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);k(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}else y(i.data,a)})).catch((function(t){E(t,a)}))}else console.warn("task not found in the state")}},H=n(211),K=n(219),U=n(205),V=n(212),z=n(202),Z=n(1),B=o.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n,i=t.label,o=Object(c.useState)(""),r=Object(d.a)(o,2),s=r[0],l=r[1],u=Object(c.useState)(null),j=Object(d.a)(u,2),b=j[0],O=j[1],f=function(){""!==s.trim()?(e(s),l("")):O("Title is required")};return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(U.a,{variant:"outlined",disabled:a,error:!!b,value:s,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==b&&O(null),13===t.charCode&&f()},label:i,helperText:b}),Object(Z.jsx)(V.a,{color:"primary",onClick:f,disabled:a,children:Object(Z.jsx)(z.a,{})})]})})),W=n(109),Y=o.a.memo((function(t){var e=Object(c.useState)(!1),n=Object(d.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(t.value),r=Object(d.a)(o,2),s=r[0],l=r[1];return a?Object(Z.jsx)(U.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(s)}}):Object(Z.jsx)("span",{onDoubleClick:function(){i(!0),l(t.value)},children:t.value})})),J=n(213),q=n(203),$=n(207),_=o.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(c.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(Z.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(Z.jsx)($.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(Z.jsx)(Y,{value:t.task.title,onChange:i}),Object(Z.jsx)(V.a,{onClick:e,children:Object(Z.jsx)(q.a,{})})]},t.task.id)})),Q=o.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(W.a)(t,["demo"]),o=Object(u.b)();Object(c.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(P("loading")),g(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(P("succeeded"))}))});o(e)}}),[]);var r=Object(c.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(c.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),l=Object(c.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),d=Object(c.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(c.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("h3",{children:[Object(Z.jsx)(Y,{value:i.todolist.title,onChange:s}),Object(Z.jsx)(V.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(Z.jsx)(q.a,{})})]}),Object(Z.jsx)(B,{addItem:r,disabled:"loading"===i.todolist.entityStatus,label:"Add Task"}),Object(Z.jsx)("div",{children:b.map((function(t){return Object(Z.jsx)(_,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(Z.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(Z.jsx)(J.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:l,color:"inherit",children:"All"}),Object(Z.jsx)(J.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:d,color:"primary",children:"Active"}),Object(Z.jsx)(J.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),X=n(14),tt=function(t){var e=t.demo,n=void 0!==e&&e,a=t.searchValue,i=Object(u.c)((function(t){return t.todolists})),o=Object(u.c)((function(t){return t.auth.isLoggedIn})),r=Object(u.c)((function(t){return t.tasks})),s=Object(u.b)();Object(c.useEffect)((function(){var t=function(t){t(P("loading")),h().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data})})).finally((function(){t(P("succeeded"))}))};s(t)}),[]);var l=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){v(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);s(n)}),[]),d=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){n(P("loading")),x(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(P("succeeded"))}else y(t.data,n)})).catch((function(t){E(t,n)}))}}(t,e);s(n)}),[]),j=Object(c.useCallback)((function(t,e,n){var a=M(t,{status:e},n);s(a)}),[]),b=Object(c.useCallback)((function(t,e,n){var a=M(t,{title:e},n);s(a)}),[]),O=Object(c.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};s(n)}),[]),f=Object(c.useCallback)((function(t){var e,n=(e=t,function(t){t(P("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),T(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(P("succeeded"))}))});s(n)}),[]),g=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){m(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);s(n)}),[]),k=Object(c.useCallback)((function(t){var e=function(t){return function(e){e(P("loading")),p(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(P("succeeded"))}))}}(t);s(e)}),[s]);return o?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(H.a,{container:!0,style:{padding:"20px"},children:Object(Z.jsx)(B,{addItem:k,label:"Add New Todo List"})}),Object(Z.jsx)(H.a,{container:!0,spacing:3,children:i.filter((function(t){return t.title.includes(a)})).map((function(t){var e=r[t.id];return Object(Z.jsx)(H.a,{item:!0,children:Object(Z.jsx)(K.a,{style:{padding:"10px"},children:Object(Z.jsx)(Q,{todolist:t,tasks:e,removeTask:l,changeFilter:O,addTask:d,changeTaskStatus:j,removeTodolist:f,changeTaskTitle:b,changeTodolistTitle:g,demo:n})})},t.id)}))})]}):Object(Z.jsx)(X.a,{to:"/login"})},et=n(214),nt=n(215),at=n(217),it=n(216),ct=n(209),ot=n(208),rt=o.a.forwardRef((function(t,e){return Object(Z.jsx)(ot.a,Object(j.a)({elevation:6,ref:e,variant:"filled"},t))}));function st(){var t=Object(u.c)((function(t){return t.app.error})),e=Object(u.b)(),n=function(t,n){"clickaway"!==n&&e(w(null))};return Object(Z.jsx)(ct.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(Z.jsx)(rt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var lt=n(218),dt=n(221),ut=n(220),jt=n(199),bt=n(108),Ot=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.auth.isLoggedIn})),n=Object(bt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Email is empty",t.password?t.password.length<4&&(e.password="Minimal length password is 4"):e.password="Email is empty",e},onSubmit:function(e){var n;t((n=e,function(t){t(P("loading")),S(n).then((function(e){0===e.data.resultCode?(t(P("succeeded")),t(L(!0))):y(e.data,t)})).catch((function(e){E(e,t)}))}))}});return e?Object(Z.jsx)(X.a,{to:"/"}):Object(Z.jsx)(H.a,{container:!0,justifyContent:"center",paddingTop:"100px",children:Object(Z.jsx)(H.a,{item:!0,justifyContent:"center",children:Object(Z.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(Z.jsx)(lt.a,{children:Object(Z.jsxs)(ut.a,{children:[Object(Z.jsx)(U.a,Object(j.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(Z.jsx)("div",{children:n.errors.email}),Object(Z.jsx)(U.a,Object(j.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(Z.jsx)("div",{children:n.errors.password}),Object(Z.jsx)(dt.a,Object(j.a)({label:"Remember me",control:Object(Z.jsx)($.a,{})},n.getFieldProps("rememberMe"))),Object(Z.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})}),Object(Z.jsxs)(jt.a,{children:[Object(Z.jsx)("p",{children:"Use common test account credentials:"}),Object(Z.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(Z.jsx)("p",{children:"Password: free"})]})]})})})},ft=function(){var t=Object(X.g)();return Object(Z.jsxs)("div",{style:{textAlign:"center"},children:[Object(Z.jsx)("div",{style:{color:"#1976d2",fontSize:"100px",fontWeight:"bold"},children:"404"}),Object(Z.jsx)("h1",{children:"Page not found"}),Object(Z.jsx)(J.a,{variant:"contained",color:"primary",onClick:function(){return t("/")},children:"Go Home"})]})},ht=n(223),pt=n(222),Tt=n(106),mt=n.n(Tt),gt=function(t){var e=t.sx,n=t.value,a=t.onChange;return Object(Z.jsx)(U.a,{placeholder:"Enter TodoList Name",sx:e,fullWidth:!0,value:n,onChange:a})};var vt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(u.b)(),i=Object(u.c)((function(t){return t.app.status})),o=Object(u.c)((function(t){return t.app.isInitialized})),r=Object(u.c)((function(t){return t.auth.isLoggedIn})),s=Object(c.useState)(""),l=Object(d.a)(s,2),j=l[0],b=l[1];return Object(c.useEffect)((function(){a((function(t){I().then((function(e){0===e.data.resultCode&&t(L(!0))})).finally((function(){t(P("failed")),t(N(!0))}))}))}),[a]),o?Object(Z.jsxs)("div",{className:"App",children:[Object(Z.jsx)(st,{}),Object(Z.jsxs)(et.a,{position:"static",children:[Object(Z.jsxs)(nt.a,{style:{display:"flex",justifyContent:"center"},children:[Object(Z.jsx)(pt.a,{fontSize:"30px",fontWeight:"bolder",children:"ToDoLists.com"}),Object(Z.jsx)(gt,{sx:{backgroundColor:"white",marginLeft:"30px"},onChange:function(t){b(t.currentTarget.value)}}),Object(Z.jsx)(V.a,{sx:{marginLeft:"400px"},children:Object(Z.jsx)(mt.a,{})}),r&&Object(Z.jsx)(J.a,{color:"inherit",onClick:function(){return a((function(t){t(P("loading")),C().then((function(e){e.data.resultCode?y(e.data,t):(t(P("succeeded")),t(L(!1)))})).catch((function(e){E(e,t)}))}))},children:"Logout"})]}),"loading"===i&&Object(Z.jsx)(it.a,{})]}),Object(Z.jsx)(at.a,{fixed:!0,children:Object(Z.jsxs)(X.d,{children:[Object(Z.jsx)(X.b,{path:"/",element:Object(Z.jsx)(tt,{searchValue:j,demo:n})}),Object(Z.jsx)(X.b,{path:"/login",element:Object(Z.jsx)(Ot,{})}),Object(Z.jsx)(X.b,{path:"/404",element:Object(Z.jsx)(ft,{})}),Object(Z.jsx)(X.b,{path:"*",element:Object(Z.jsx)(X.a,{to:"/404"})})]})})]}):Object(Z.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(Z.jsx)(ht.a,{})})},xt=n(70),kt=n(107),St=Object(xt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},e.task.todoListId,[e.task].concat(Object(b.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(j.a)(Object(j.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(j.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(j.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(j.a)(Object(j.a)({},t),{},Object(R.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(j.a)(Object(j.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(b.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(j.a)(Object(j.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(j.a)(Object(j.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(j.a)(Object(j.a)({},t),{},{isInitialized:e.value});default:return Object(j.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(j.a)(Object(j.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),It=Object(xt.c)(St,Object(xt.a)(kt.a));window.store=It;var Ct=n(56);s.a.render(Object(Z.jsx)(o.a.StrictMode,{children:Object(Z.jsx)(Ct.a,{children:Object(Z.jsx)(u.a,{store:It,children:Object(Z.jsx)(vt,{})})})}),document.getElementById("root")),l()}},[[157,1,2]]]);
//# sourceMappingURL=main.c71f3ddd.chunk.js.map