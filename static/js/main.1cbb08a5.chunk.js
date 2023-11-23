(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,s=n(10),c=n.n(s),r=n(11),i=n(2),o=n(6),l=n(3),d=n(5),m=n.n(d),j=n(1),u=(n(17),n(18),n(19),n(4)),b=n.n(u),h=n(0),O=function(e){var t=e.posts,n=e.onPostSelect,a=e.selectedPost;return Object(h.jsxs)("div",{"data-cy":"PostsList",children:[Object(h.jsx)("p",{className:"title",children:"Posts:"}),Object(h.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"has-background-link-light",children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){var t=e===a;return Object(h.jsxs)("tr",{"data-cy":"Post",children:[Object(h.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(h.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{type:"button","data-cy":"PostButton",className:b()("button is-link",{"is-light":!t}),onClick:function(){return n(e)},children:t?"Close":"Open"})})]},e.id)}))})]})]})},v=(n(21),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});!function(e){e.Name="Name",e.Email="Email",e.Body="Body"}(a||(a={}));var x=function(e){var t=e.onAddComment,n=e.isSubmit,s=e.newComment,c=e.handleChangeField,r=e.commentError,i=e.reset;return Object(h.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:t,children:[Object(h.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{value:null===s||void 0===s?void 0:s.name,type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:b()("input",{"is-danger":null===r||void 0===r?void 0:r.errorName}),onChange:function(e){c(e.target.value,a.Name)}}),Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-user"})}),(null===r||void 0===r?void 0:r.errorName)&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),(null===r||void 0===r?void 0:r.errorName)&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(h.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(h.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{value:null===s||void 0===s?void 0:s.email,type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:b()("input",{"is-danger":null===r||void 0===r?void 0:r.errorEmail}),onChange:function(e){c(e.target.value,a.Email)}}),Object(h.jsx)("span",{className:"icon is-small is-left",children:Object(h.jsx)("i",{className:"fas fa-envelope"})}),(null===r||void 0===r?void 0:r.errorEmail)&&Object(h.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(h.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),(null===r||void 0===r?void 0:r.errorEmail)&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(h.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(h.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("textarea",{value:(null===s||void 0===s?void 0:s.body)||"",id:"comment-body",name:"body",placeholder:"Type comment here",className:b()("textarea",{"is-danger":null===r||void 0===r?void 0:r.errorBody}),onChange:function(e){c(e.target.value,a.Body)}})}),(null===r||void 0===r?void 0:r.errorBody)&&Object(h.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(h.jsxs)("div",{className:"field is-grouped",children:[Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"submit",className:b()("button is-link",{"is-loading":n}),children:"Add"})}),Object(h.jsx)("div",{className:"control",children:Object(h.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:i,children:"Clear"})})]})]})},p=function(e){var t=e.comments,n=e.onCommentDelete;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"title is-4",children:"Comments:"}),t.map((function(e){var t=e.id,a=e.email,s=e.name,c=e.body;return Object(h.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(h.jsxs)("div",{className:"message-header",children:[Object(h.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:s}),Object(h.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(t)},children:"delete button"})]}),Object(h.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:c})]},t)}))]})},f=function(e){var t=e.comments,n=e.post,a=e.error,s=e.isLoading,c=e.onAddComment,r=e.isSubmit,i=e.onCommentDelete,o=e.newComment,l=e.handleChangeField,d=e.commentError,m=e.isFormDisplayed,j=e.setIsFormDisplayed,u=e.reset,b=t.length?Object(h.jsx)(p,{comments:t,onCommentDelete:i}):Object(h.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),O=!m&&Object(h.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return j(!0)},children:"Write a comment"});return Object(h.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(h.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(n.id,": ").concat(n.title)}),Object(h.jsx)("p",{"data-cy":"PostBody",children:n.body})]}),Object(h.jsxs)("div",{className:"block",children:[s&&Object(h.jsx)(v,{}),a&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:a}),!s&&Object(h.jsxs)(h.Fragment,{children:[b,O]})]}),m&&Object(h.jsx)(x,{onAddComment:c,isSubmit:r,newComment:o,handleChangeField:l,commentError:d,reset:u})]})})},N=function(e){var t=e.users,n=e.isDisplayed,a=e.setIsDisplayed,s=e.onUserSelect,c=e.selectedUser;return Object(h.jsxs)("div",{"data-cy":"UserSelector",className:b()("dropdown",{"is-active":n}),children:[Object(h.jsx)("div",{className:"dropdown-trigger",children:Object(h.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return a(!n)},onBlur:function(){return setTimeout((function(){return a(!1)}),150)},children:[Object(h.jsx)("span",{children:c?c.name:"Choose a user"}),Object(h.jsx)("span",{className:"icon is-small",children:Object(h.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(h.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(h.jsx)("a",{href:"#user-".concat(e.id),className:b()("dropdown-item",{"is-active":e===c}),onClick:function(){return s(e)},children:e.name},e.id)}))})})]})},y="https://mate.academy/students-api";function g(e){return new Promise((function(t){setTimeout(t,e)}))}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.body=JSON.stringify(n),a.headers={"Content-Type":"application/json; charset=UTF-8"}),g(300).then((function(){return fetch(y+e,a)})).then((function(e){return e.json()}))}var w=function(e){return C(e)},k=function(e,t){return C(e,"POST",t)},E=function(e){return C(e,"DELETE")},S=function(e){return k("/comments",e)},F=function(e){return E("/comments/".concat(e))},P=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(j.useState)(null),d=Object(l.a)(c,2),u=d[0],x=d[1],p=Object(j.useState)(!1),y=Object(l.a)(p,2),g=y[0],C=y[1],k=Object(j.useState)([]),E=Object(l.a)(k,2),P=E[0],D=E[1],B=Object(j.useState)(null),T=Object(l.a)(B,2),I=T[0],A=T[1],L=Object(j.useState)([]),U=Object(l.a)(L,2),M=U[0],_=U[1],J=Object(j.useState)(!0),q=Object(l.a)(J,2),W=q[0],G=q[1],Y=Object(j.useState)(!1),z=Object(l.a)(Y,2),H=z[0],K=z[1],Q=Object(j.useState)(!1),R=Object(l.a)(Q,2),V=R[0],X=R[1],Z=Object(j.useState)(null),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(j.useState)(null),ae=Object(l.a)(ne,2),se=ae[0],ce=ae[1],re=Object(j.useState)(!1),ie=Object(l.a)(re,2),oe=ie[0],le=ie[1],de=Object(j.useState)(""),me=Object(l.a)(de,2),je=me[0],ue=me[1],be=!P.length&&u&&!oe,he=P.length>0&&!oe,Oe=function(e){return null===e||void 0===e?void 0:e.trim()},ve={name:Oe(null===ee||void 0===ee?void 0:ee.name),email:Oe(null===ee||void 0===ee?void 0:ee.email),body:Oe(null===ee||void 0===ee?void 0:ee.body)},xe=function(){var e=Object(o.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("/users");case 3:t=e.sent,s(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),pe=Object(j.useCallback)(Object(o.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=null===u||void 0===u?void 0:u.id,w("/posts?userId=".concat(n));case 3:t=e.sent,D(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),ue("Something went wrong!");case 10:return e.prev=10,le(!1),e.finish(10);case 13:case"end":return e.stop()}var n}),e,null,[[0,7,10,13]])}))),[u]),fe=Object(j.useCallback)(Object(o.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=null===I||void 0===I?void 0:I.id,w("/comments?postId=".concat(n));case 3:t=e.sent,_(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),ue("Something went wrong");case 10:return e.prev=10,G(!1),e.finish(10);case 13:case"end":return e.stop()}var n}),e,null,[[0,7,10,13]])}))),[I]);Object(j.useEffect)((function(){xe()}),[]),Object(j.useEffect)((function(){u&&(ue(""),pe())}),[u,pe]),Object(j.useEffect)((function(){I&&(ue(""),fe())}),[I,fe]);var Ne=function(){var e=Object(o.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),ce({errorName:!ve.name,errorEmail:!ve.email,errorBody:!ve.body}),!(ve.name&&ve.email&&ve.body&&I)){e.next=18;break}return K(!0),e.prev=4,e.next=7,S(Object(i.a)(Object(i.a)({},ve),{},{postId:null===I||void 0===I?void 0:I.id}));case 7:n=e.sent,_((function(e){return[].concat(Object(r.a)(e),[n])})),te(Object(i.a)(Object(i.a)({},ee),{},{body:""})),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(4),new Error;case 15:return e.prev=15,K(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(o.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=M,_((function(e){return e.filter((function(e){return e.id!==t}))})),e.prev=2,e.next=5,F(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),_(n);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){te(null),ce(null)};return Object(h.jsx)("main",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"tile is-ancestor",children:[Object(h.jsx)("div",{className:"tile is-parent",children:Object(h.jsxs)("div",{className:"tile is-child box is-success",children:[Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(N,{users:n,isDisplayed:g,setIsDisplayed:C,onUserSelect:function(e){u!==e&&(le(!0),A(null),x(e)),C(!1)},selectedUser:u})}),Object(h.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!u&&Object(h.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),oe&&Object(h.jsx)(v,{}),je&&Object(h.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),be&&Object(h.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),he&&Object(h.jsx)(O,{posts:P,onPostSelect:function(e){G(!0),X(!1),ge(),A(I===e?null:e)},selectedPost:I})]})]})}),Object(h.jsx)("div",{"data-cy":"Sidebar",className:b()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":I}),children:I&&Object(h.jsx)("div",{className:"tile is-child box is-success ",children:Object(h.jsx)(f,{comments:M,post:I,error:je,isLoading:W,onAddComment:Ne,isSubmit:H,onCommentDelete:ye,newComment:ee,handleChangeField:function(e,t){switch(t){case a.Name:te(Object(i.a)(Object(i.a)({},ee),{},{name:e})),ce(Object(i.a)(Object(i.a)({},se),{},{errorName:!1}));break;case a.Email:te(Object(i.a)(Object(i.a)({},ee),{},{email:e})),ce(Object(i.a)(Object(i.a)({},se),{},{errorEmail:!1}));break;case a.Body:te(Object(i.a)(Object(i.a)({},ee),{},{body:e})),ce(Object(i.a)(Object(i.a)({},se),{},{errorBody:!1}))}},commentError:se,isFormDisplayed:V,setIsFormDisplayed:X,reset:ge})})})]})})})};c.a.render(Object(h.jsx)(P,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.1cbb08a5.chunk.js.map