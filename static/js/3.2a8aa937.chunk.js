(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{416:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3XUJr",mainPhoto:"ProfileInfo_mainPhoto__10n9Q",contact:"ProfileInfo_contact__1FYvF"}},417:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2j9GH",posts:"MyPosts_posts__Vl0LY"}},418:function(e,t,a){e.exports={item:"Post_item__5RPoF"}},419:function(e,t,a){"use strict";a.r(t);var n=a(163),l=a(164),o=a(202),r=a(204),s=a(0),c=a.n(s),i=a(160),u=a(416),m=a.n(u),p=a(107),f=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],l=a[1],o=Object(s.useState)(e.status),r=Object(i.a)(o,2),u=r[0],m=r[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status: ")," ",c.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"-------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(u)},value:u})))},d=a(159),b=a.n(d),E=a(54),h=a(201),v=a(87),k=a.n(v),P=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:k.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(E.c)("Full name","fullName",[],E.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(E.c)("","lookingForAJob",[],E.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(E.c)("My professional skills","lookingForAJobDescription",[],E.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(E.c)("About me","aboutMe",[],E.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(E.c)(e,"contacts."+e,[],E.a)))}))))})),g=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return c.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},O=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a)},j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,u=Object(s.useState)(!1),d=Object(i.a)(u,2),E=d[0],h=d[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||b.a,className:m.a.mainPhoto}),l&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&o(e.target.files[0])}}),E?c.a.createElement(P,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){h(!1)}))}}):c.a.createElement(g,{goToEditMode:function(){h(!0)},profile:t,isOwner:l}),c.a.createElement(f,{status:a,updateStatus:n})))},y=a(161),S=a(74),_=a(417),I=a.n(_),w=a(418),A=a.n(w),F=function(e){return e.profile?c.a.createElement("div",{className:A.a.item},c.a.createElement("img",{src:e.profile.photos.large||b.a,className:A.a.mainPhoto}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount)):c.a.createElement(p.a,null)},C=a(109),M=Object(h.a)({form:"profile-add-post"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,Object(E.c)("Your post","newPostText",[C.b],E.a)),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),N=c.a.memo((function(e){var t=Object(S.a)(e.posts).reverse().map((function(t){return c.a.createElement(F,{key:t.id,message:t.message,likesCount:t.likesCount,profile:e.profile})}));return c.a.createElement("div",{className:I.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(M,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:I.a.posts},t))})),U=a(14),J=Object(U.b)((function(e){return{posts:e.profilePage.posts,profile:e.profilePage.profile}}),{addPost:y.a.addPostActionCreator})(N),x=function(e){return c.a.createElement("div",null,c.a.createElement(j,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(J,null))},B=a(18),T=a(16),D=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement(x,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(T.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),B.h)(D)}}]);
//# sourceMappingURL=3.2a8aa937.chunk.js.map