(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[0],{119:function(e,t,s){},124:function(e,t,s){e.exports={logo:"Footer_logo__3ACxa"}},13:function(e,t,s){e.exports={profileBox:"ProfileInfo_profileBox__1v93W",profileInfo:"ProfileInfo_profileInfo__2IJgv",avatar:"ProfileInfo_avatar__3xuFq",div:"ProfileInfo_div__3At7N",title:"ProfileInfo_title__2t6A6",name:"ProfileInfo_name__1VvQB",description:"ProfileInfo_description__2yWda",status:"ProfileInfo_status__2G3BZ",inputBox:"ProfileInfo_inputBox__2oJBN",input:"ProfileInfo_input__f3lao",saveStatusBtn:"ProfileInfo_saveStatusBtn__2vNYc"}},17:function(e,t,s){e.exports={messageComponent:"Message_messageComponent__2_iBn",messageComponentMe:"Message_messageComponentMe__1w1Wo",img:"Message_img__3-T8Q",time:"Message_time__oGKVI",messageBabble:"Message_messageBabble__2EWNh",messageBabbleMe:"Message_messageBabbleMe__1DfI-",tail:"Message_tail__3RUok",tailMe:"Message_tailMe__m4hsZ",messageBox:"Message_messageBox__1ynL0",messageBoxMe:"Message_messageBoxMe__3KXIW"}},247:function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,251)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),i(e),o(e)}))},n=(s(119),s(54)),i=s.n(n),o=s(1),r=s.n(o),c=s(12),l=s(6),u=s(76),d=s.n(u),j=(s(124),s(0));var g=function(){return Object(j.jsxs)("footer",{children:["\xa9 My first site on \xa0",Object(j.jsx)("a",{href:"#",children:"React"})]})},p=s(26),b=s.n(p),m=s(21),f=s(22),O=s(24),_=s(23),h=s(10),x=s(77),v=s.n(x),S=s(56),N=s.n(S);var E=function(e){return Object(j.jsxs)("div",{className:N.a.friend,children:[Object(j.jsx)("img",{alt:e.name,src:e.img,className:N.a.img}),Object(j.jsx)("p",{className:N.a.name,children:e.name})]})},P=s.p+"static/media/unknown.dc967cb3.png";var T=function(e){var t=e.friends.map((function(e){return Object(j.jsx)(E,{name:e.name.length>7?e.name.slice(0,6)+"...":e.name,img:e.photos.small||P},e.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:v.a.title,children:"Friends"}),Object(j.jsx)("div",{className:v.a.friends,children:t})]})},M=function(e){Object(O.a)(s,e);var t=Object(_.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(f.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(j.jsx)(T,{friends:[]})}}]),s}(r.a.Component),w=Object(h.b)((function(){return{}}),{})(M);var A=function(){return Object(j.jsx)("aside",{children:Object(j.jsxs)("nav",{className:b.a.navbar,children:[Object(j.jsx)(c.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"}),Object(j.jsx)(c.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"}),Object(j.jsx)(c.b,{to:"/news",activeClassName:b.a.active,children:"News"}),Object(j.jsx)(c.b,{to:"/music",activeClassName:b.a.active,children:"Music"}),Object(j.jsx)(c.b,{to:"/users",activeClassName:b.a.active,className:b.a.other,children:"Find users"}),Object(j.jsx)(c.b,{to:"/settings",activeClassName:b.a.active,className:b.a.other,children:"Settings"}),Object(j.jsx)(w,{})]})})};var C=function(){return Object(j.jsx)("div",{children:"News"})};var U=function(){return Object(j.jsx)("div",{children:"Music"})};var y=function(){return Object(j.jsx)("div",{children:"Settings"})},I=s(57),D=s.n(I),L=s(58),F=s.n(L);var k=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)(c.b,{to:"/dialogs/"+e.id,className:F.a.dialog,activeClassName:F.a.active,children:[Object(j.jsx)("img",{className:F.a.img,src:e.img,alt:e.name}),e.name]})})},B=s(37),R=s.n(B),G=s(17),W=s.n(G);var H=function(e){return Object(j.jsxs)("div",{className:"Me"===e.name?W.a.messageComponentMe:W.a.messageComponent,children:[Object(j.jsx)("img",{className:W.a.img,src:e.img,alt:"avatar"}),Object(j.jsxs)("div",{className:"Me"===e.name?W.a.messageBabbleMe:W.a.messageBabble,children:[Object(j.jsx)("div",{className:"Me"===e.name?W.a.tailMe:W.a.tail}),Object(j.jsxs)("div",{className:"Me"===e.name?W.a.messageBoxMe:W.a.messageBox,children:[Object(j.jsx)("div",{className:W.a.message,children:e.message}),Object(j.jsx)("div",{className:W.a.time,children:"22:00"})]})]})]})},K=function(e){var t=e.dialog.messages.map((function(e,t){return Object(j.jsx)(H,{name:e.name,img:e.img,message:e.message},t)})),s=r.a.createRef(),a=function(){e.addMessage(e.dialog.id)};return Object(j.jsxs)("div",{className:R.a.dialogsMessages,children:[Object(j.jsx)("div",{className:R.a.messages,children:t}),Object(j.jsxs)("div",{className:R.a.sendBox,children:[Object(j.jsx)("textarea",{onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),a())},value:e.dialog.newMessage,onChange:function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.changeNewMessage(a,e.dialog.id)},ref:s,placeholder:"Text your message...",className:R.a.textarea}),Object(j.jsx)("button",{onClick:a,className:R.a.button,children:"Send"})]})]})};var J=function(e){var t=e.dialogs.map((function(e){return Object(j.jsx)(k,{img:e.img,id:e.id,name:e.name},e.id)}));return Object(j.jsxs)("div",{className:D.a.dialogPage,children:[Object(j.jsx)("div",{className:D.a.dialogsColumn,children:t}),Object(j.jsx)("div",{className:D.a.messagesColumn,children:Object(j.jsx)(l.b,{path:"/dialogs/:dialogID",render:function(t){var s=t.match.params.dialogID,a=e.dialogs.find((function(e){return e.id===+s}));return a&&Object(j.jsx)(K,{dialog:a,addMessage:function(t){return e.addMessage(t)},changeNewMessage:function(t,s){return e.changeNewMessage(t,s)}})}})})]})},Y=s(25),q=s(3),z="ADD-MESSAGE",Q="UPDATE-NEW-MESSAGE",V={dialogs:[{id:1,name:"Nick",img:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg",messages:[{message:"Hi!",name:"Nick",img:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"},{message:"How are you?",name:"Nick",img:"https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"},{message:"Yo",name:"Me",img:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg"},{message:"I'm fine! How're you?",name:"Me",img:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg"}],newMessage:""},{id:2,name:"Jhon",img:"https://vraki.net/sites/default/files/inline/images/30_55.jpg",messages:[{message:"Hi!",name:"Jhon",img:"https://vraki.net/sites/default/files/inline/images/30_55.jpg"}],newMessage:""},{id:3,name:"Anna",img:"https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg",messages:[{message:"Hi!",name:"Anna",img:"https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-78.jpg"}],newMessage:""}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:var s=e.dialogs.find((function(e){return e.id===t.id}));if(!s.newMessage.trim())return Object(q.a)(Object(q.a)({},e),{},{dialogs:e.dialogs.map((function(e){return e.id===t.id?Object(q.a)(Object(q.a)({},e),{},{newMessage:""}):e}))});var a={message:s.newMessage,name:"Me",img:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg"};return Object(q.a)(Object(q.a)({},e),{},{dialogs:e.dialogs.map((function(e){return e.id===t.id?Object(q.a)(Object(q.a)({},e),{},{messages:[].concat(Object(Y.a)(e.messages),[a]),newMessage:""}):e}))});case Q:return Object(q.a)(Object(q.a)({},e),{},{dialogs:e.dialogs.map((function(e){return e.id===t.id?Object(q.a)(Object(q.a)({},e),{},{newMessage:t.message}):e}))});default:return e}},X=s(117),$=function(e){return{isAuth:e.auth.isAuth}};function ee(e){return Object(h.b)($,{})((function(t){var s=t.isAuth,a=Object(X.a)(t,["isAuth"]);return s?Object(j.jsx)(e,Object(q.a)({},a)):Object(j.jsx)(l.a,{to:"/login"})}))}var te=s(8),se=Object(te.d)(Object(h.b)((function(e){return{dialogs:e.dialogs.dialogs}}),{addMessage:function(e){return{type:z,id:e}},changeNewMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:Q,message:e,id:t}}}),ee)(J),ae="NOT-INITIALIZED",ne="IN-PROGRESS",ie="SUCCESS",oe=s(13),re=s.n(oe),ce=function(e){Object(O.a)(s,e);var t=Object(_.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={editMode:!1,status:e.props.status},e.onEditMode=function(){e.setState({editMode:!0})},e.offEditMode=function(){e.setState({editMode:!1}),e.props.updateProfileStatus(e.state.status)},e}return Object(f.a)(s,[{key:"componentDidUpdate",value:function(e,t,s){e.status!==this.state.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:this.state.editMode?Object(j.jsx)("div",{className:re.a.inputBox,children:Object(j.jsx)("input",{type:"text",autoFocus:!0,className:re.a.input,onBlur:this.offEditMode,value:this.state.status,onChange:function(t){return e.setState({status:t.currentTarget.value})},onKeyPress:function(t){"Enter"===t.key&&e.props.updateProfileStatus(t.currentTarget.value)}})}):Object(j.jsx)("div",{className:re.a.status,onDoubleClick:this.onEditMode,children:this.state.status})})}}]),s}(r.a.Component);var le=function(e){return Object(j.jsxs)("div",{className:re.a.profileBox,children:[Object(j.jsx)("img",{className:re.a.avatar,src:e.profile.photos.large||P,alt:e.profile.fullName}),Object(j.jsxs)("div",{className:re.a.profileInfo,children:[Object(j.jsx)("div",{className:re.a.div,children:Object(j.jsx)("p",{className:re.a.name,children:e.profile.fullName})}),Object(j.jsx)("div",{className:re.a.div,children:Object(j.jsx)(ce,{status:e.profileStatus||"Nothing yet...",updateProfileStatus:e.updateProfileStatus})}),Object(j.jsxs)("div",{className:re.a.div,children:[Object(j.jsx)("p",{className:re.a.title,children:"I'm looking a job: "}),Object(j.jsx)("p",{className:re.a.description,children:e.profile.lookingForAJob?"yes":"no"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:re.a.title,children:"About me: "}),Object(j.jsx)("p",{className:re.a.description,children:e.profile.aboutMe||"Nothing yet..."})]})]})]})},ue=s(45),de=s.n(ue),je=s(38),ge=s.n(je),pe=s(30),be=s.n(pe);var me=function(e){return Object(j.jsxs)("div",{className:be.a.post,children:[Object(j.jsxs)("div",{className:be.a.postContent,children:[Object(j.jsx)("img",{className:be.a.avatar,src:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg",alt:"Avatar"}),Object(j.jsx)("div",{className:be.a.message,children:e.message})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:be.a.likesCount,children:[e.likesCount," likes"]}),Object(j.jsx)("button",{onClick:function(){e.addLike(e.id)},className:be.a.like,children:"Like!"}),Object(j.jsx)("button",{onClick:function(){e.removePost(e.id)},className:be.a.button,children:"Remove post"})]})]})};var fe=function(e){var t=e.posts.map((function(t){return Object(j.jsx)(me,{id:t.id,message:t.message,likesCount:t.likesCount,removePost:function(t){return e.removePost(t)},addLike:function(t){return e.addLike(t)}},t.id)})),s=r.a.createRef(),a=function(){e.addPost()};return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:ge.a.title,children:"My Posts"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("textarea",{onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),a())},value:e.newPostMessage,onChange:function(){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;a&&e.updateNewPostMessage(a)},ref:s,className:ge.a.textarea,placeholder:"Your message..."}),Object(j.jsx)("div",{className:ge.a.buttons,children:Object(j.jsx)("button",{onClick:a,className:ge.a.button,children:"Add post"})})]}),Object(j.jsx)("div",{className:ge.a.posts,children:t})]})};var Oe,_e=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(le,{profile:e.profile,profileStatus:e.profileStatus,updateProfileStatus:e.updateProfileStatus}),Object(j.jsxs)("div",{className:de.a.imageBox,children:[Object(j.jsx)("img",{alt:"arrow-left",src:"https://piaspb.ru/img/new-img/arrows-l.png",className:de.a.arrow}),Object(j.jsx)("img",{alt:"arrow-right",src:"https://piaspb.ru/img/new-img/arrows-l.png",className:"".concat(de.a.arrow," ").concat(de.a.arrowRight)})]}),Object(j.jsx)(fe,Object(q.a)({},e))]})},he=s(114),xe=s.n(he).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"ff96c8c6-9a67-45a6-8e7e-64655709b2bd"}}),ve=function(e,t){return xe.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},Se=function(e){return xe.delete("follow/".concat(e)).then((function(e){return e.data}))},Ne=function(e){return xe.post("follow/".concat(e)).then((function(e){return e.data}))},Ee=function(e){return xe.get("profile/".concat(e)).then((function(e){return e.data}))},Pe=function(e){return xe.get("profile/status/".concat(e)).then((function(e){return e.data}))},Te=function(e){return xe.put("/profile/status",{status:e}).then((function(e){return e.data}))},Me=function(){return xe.get("auth/me").then((function(e){return e.data}))};!function(e){e.ADD_POST="ADD-POST",e.UPDATE_NEW_POST_MESSAGE="UPDATE-NEW-POST-MESSAGE",e.REMOVE_POST="REMOVE-POST",e.ADD_LIKE="ADD-LIKE",e.SET_PROFILE="SET-PROFILE",e.SET_STATUS="SONET/PROFILE/SET-STATUS",e.TOGGLE_FETCHING="SONET/PROFILE/TOGGLE-FETCHING",e.SET_PROFILE_STATUS="SET-PROFILE-STATUS"}(Oe||(Oe={}));var we,Ae={profile:{aboutMe:"",contacts:{facebook:"",website:"",vk:"",twitter:"",instagram:"",youtube:"",github:"",mainLink:""},lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",userId:1,photos:{small:"",large:""}},profileStatus:"",posts:[{id:1,message:"It is my first post!",likesCount:25},{id:2,message:"How are you?",likesCount:15}],newPostMessage:"",status:ae,isFetching:!1},Ce=function(e){return{type:Oe.SET_PROFILE,profile:e}},Ue=function(e){return{status:e,type:Oe.SET_STATUS}},ye=function(e){return{fetching:e,type:Oe.TOGGLE_FETCHING}},Ie=function(e){return{profileStatus:e,type:Oe.SET_PROFILE_STATUS}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe.ADD_POST:if(""===e.newPostMessage)return e;var s={id:e.posts.length+1,message:e.newPostMessage,likesCount:0};return Object(q.a)(Object(q.a)({},e),{},{posts:[].concat(Object(Y.a)(e.posts),[s]),newPostMessage:""});case Oe.UPDATE_NEW_POST_MESSAGE:return Object(q.a)(Object(q.a)({},e),{},{newPostMessage:t.postMessage});case Oe.REMOVE_POST:return confirm("Delete this post?")?Object(q.a)(Object(q.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id})),newPostMessage:""}):e;case Oe.ADD_LIKE:return Object(q.a)(Object(q.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(q.a)(Object(q.a)({},e),{},{likesCount:++e.likesCount}):e})),newPostMessage:""});case Oe.SET_PROFILE:return Object(q.a)(Object(q.a)({},e),{},{profile:t.profile});case Oe.SET_STATUS:return Object(q.a)(Object(q.a)({},e),{},{status:t.status});case Oe.TOGGLE_FETCHING:return Object(q.a)(Object(q.a)({},e),{},{isFetching:t.fetching});case Oe.SET_PROFILE_STATUS:return Object(q.a)(Object(q.a)({},e),{},{profileStatus:t.profileStatus});default:return e}},Le=s(80),Fe=s.n(Le),ke=s.p+"static/media/loading.bb27ba0a.gif",Be=function(){return Object(j.jsxs)("div",{className:Fe.a.loadingBox,children:[Object(j.jsx)("img",{alt:"loading...",className:Fe.a.loadingGif,src:ke}),Object(j.jsx)("div",{children:"Loading..."})]})},Re=function(e){Object(O.a)(s,e);var t=Object(_.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(f.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userID;e||(e="18931"),this.props.status===ae&&(this.props.getProfile(e),this.props.getProfileStatus(e))}},{key:"componentWillUnmount",value:function(){this.props.setStatus(ae)}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.props.isFetching?Object(j.jsx)(_e,Object(q.a)({},this.props)):Object(j.jsx)(Be,{})})}}]),s}(r.a.Component),Ge=Object(te.d)(Object(h.b)((function(e){return{profile:e.profile.profile,posts:e.profile.posts,newPostMessage:e.profile.newPostMessage,isFetching:e.profile.isFetching,status:e.profile.status,profileStatus:e.profile.profileStatus}}),{addPost:function(){return{type:Oe.ADD_POST}},updateNewPostMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:Oe.UPDATE_NEW_POST_MESSAGE,postMessage:e}},removePost:function(e){return{type:Oe.REMOVE_POST,id:e}},addLike:function(e){return{type:Oe.ADD_LIKE,id:e}},setProfile:Ce,setFetching:ye,setStatus:Ue,getProfile:function(e){return function(t){t(Ue(ne)),t(ye(!1)),Ee(e).then((function(e){t(Ce(e)),t(Ue(ie)),t(ye(!0))}))}},getProfileStatus:function(e){return function(t){t(Ue(ne)),t(ye(!1)),Pe(e).then((function(e){t(Ie(e)),t(Ue(ie)),t(ye(!0))}))}},updateProfileStatus:function(e){return function(t){t(Ue(ne)),t(ye(!1)),Te(e).then((function(s){0===s.resultCode&&(t(Ie(e)),t(Ue(ie)),t(ye(!0)))}))}}}),l.f,ee)(Re);!function(e){e.CHANGE_FOLLOWED_STATUS="CHANGE-FOLLOWED-STATUS",e.SET_USERS="SONET/USERS/SET-USERS",e.SET_STATUS="SONET/USERS/SET-STATUS",e.CHANGE_PAGE="SONET/USERS/CHANGE-PAGE",e.SET_USERS_COUNT="SONET/USERS/SET-USERS-COUNT",e.SET_LOADING="SONET/USERS/SET-LOADING",e.SET_FOLLOWING="SONET/USERS/SET-FOLLOWING"}(we||(we={}));var We={users:[],pageSize:10,totalUsersCount:0,activePage:1,isLoading:!0,isFollowing:[],status:ae},He=function(e,t){return{userID:e,isFollow:t,type:we.CHANGE_FOLLOWED_STATUS}},Ke=function(e){return{status:e,type:we.SET_STATUS}},Je=function(e){return{loading:e,type:we.SET_LOADING}},Ye=function(e,t){return{following:e,userId:t,type:we.SET_FOLLOWING}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we.CHANGE_FOLLOWED_STATUS:return Object(q.a)(Object(q.a)({},e),{},{users:Object(Y.a)(e.users.map((function(e){return e.id===t.userID?Object(q.a)(Object(q.a)({},e),{},{followed:t.isFollow}):e})))});case we.SET_USERS:return Object(q.a)(Object(q.a)({},e),{},{users:Object(Y.a)(t.users)});case we.SET_STATUS:return Object(q.a)(Object(q.a)({},e),{},{status:t.status});case we.CHANGE_PAGE:return Object(q.a)(Object(q.a)({},e),{},{activePage:t.page});case we.SET_USERS_COUNT:return Object(q.a)(Object(q.a)({},e),{},{totalUsersCount:t.usersCount});case we.SET_LOADING:return Object(q.a)(Object(q.a)({},e),{},{isLoading:t.loading});case we.SET_FOLLOWING:return Object(q.a)(Object(q.a)({},e),{},{isFollowing:t.following?[].concat(Object(Y.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!==t.userId}))});default:return e}},ze=s(9),Qe=s.n(ze),Ve=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=5;a++)s.push(a);s.push("..."),s.push(t);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:Qe.a.titlePage,children:"All users in SoNet"}),Object(j.jsxs)("div",{className:Qe.a.container,children:[!e.users.length&&e.status===ie&&Object(j.jsx)("span",{className:Qe.a.title,style:{margin:"20px"},children:"Users not found"}),e.users.map((function(t){return Object(j.jsxs)("div",{className:Qe.a.friendBox,children:[Object(j.jsxs)("div",{className:Qe.a.imgBox,children:[Object(j.jsx)(c.b,{to:"/profile/"+t.id,children:Object(j.jsx)("img",{alt:t.name,src:t.photos.small||P,className:Qe.a.img})}),Object(j.jsx)("button",{onClick:t.followed?function(){var s;s=t.id,e.unfollow(s)}:function(){var s;s=t.id,e.follow(s)},className:"".concat(Qe.a.followBtn," ").concat(t.followed?Qe.a.red:Qe.a.green," ").concat(e.isFollowing.includes(t.id)?Qe.a.disabled:""),disabled:e.isFollowing.some((function(e){return e===t.id})),children:t.followed?"UNFOLLOW":"FOLLOW"})]}),Object(j.jsxs)("div",{className:Qe.a.infoBox,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"".concat(Qe.a.title," ").concat(Qe.a.name),children:"Name: "}),Object(j.jsx)("p",{className:"".concat(Qe.a.description," ").concat(Qe.a.name),children:t.name})]}),Object(j.jsx)("div",{className:Qe.a.infoBottom,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:Qe.a.title,children:"Status: "}),Object(j.jsx)("p",{className:Qe.a.description,children:t.status||"Nothing yet..."})]})})]})]},t.id)})),Object(j.jsx)("div",{children:s.map((function(t){return"..."===t?Object(j.jsx)("span",{className:Qe.a.pages,children:"..."},t+"page"):Object(j.jsx)("span",{onClick:function(){return e.onClickPage(+t)},className:e.activePage===t?"".concat(Qe.a.activePage," ").concat(Qe.a.pages):Qe.a.pages,children:t},t+" page")}))})]})]})},Ze=function(e){Object(O.a)(s,e);var t=Object(_.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onClickPage=function(t){e.props.changePage(t),e.props.getUsers(e.props.pageSize,t)},e}return Object(f.a)(s,[{key:"componentDidMount",value:function(){this.props.status===ae&&this.props.getUsers(this.props.pageSize,this.props.activePage)}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.props.isLoading?Object(j.jsx)(Be,{}):Object(j.jsx)(Ve,Object(q.a)(Object(q.a)({},this.props),{},{onClickPage:this.onClickPage}))})}}]),s}(r.a.Component),Xe=Object(te.d)(ee,Object(h.b)((function(e){return{users:e.users.users,status:e.users.status,pageSize:e.users.pageSize,totalUsersCount:e.users.totalUsersCount,activePage:e.users.activePage,isLoading:e.users.isLoading,isFollowing:e.users.isFollowing}}),{changePage:function(e){return{page:e,type:we.CHANGE_PAGE}},getUsers:function(e,t){return function(s){s(Ke(ne)),s(Je(!0)),ve(e,t).then((function(e){s(Ke(ie)),s({usersCount:e.totalCount,type:we.SET_USERS_COUNT}),s(Je(!1)),s({users:e.items,type:we.SET_USERS})}))}},follow:function(e){return function(t){t(Ye(!0,e)),Ne(e).then((function(s){0===s.resultCode&&(t(He(e,!0)),t(Ye(!1,e)))}))}},unfollow:function(e){return function(t){t(Ye(!0,e)),Se(e).then((function(s){0===s.resultCode&&(t(He(e,!1)),t(Ye(!1,e)))}))}}}))(Ze),$e=s(81),et=s.n($e);var tt,st=function(e){return Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:et.a.logo,children:[Object(j.jsx)("img",{alt:"logo",src:"https://img.apksum.com/9f/nicola.web/2.7/icon.png"}),Object(j.jsx)(c.b,{to:"/profile",children:"SoNet"})]}),e.isAuth?Object(j.jsxs)("div",{className:et.a.greeting,children:["Hello, ",e.login]}):Object(j.jsx)(c.b,{to:"/login",children:"LogIn"})]})};!function(e){e.SET_USER_DATA="SET-USER-DATA"}(tt||(tt={}));var at={id:0,email:"",login:"",isAuth:!1},nt=function(e,t,s){return{type:tt.SET_USER_DATA,data:{id:e,email:t,login:s}}},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt.SET_USER_DATA:return Object(q.a)(Object(q.a)(Object(q.a)({},e),t.data),{},{isAuth:!0});default:return e}},ot=function(e){Object(O.a)(s,e);var t=Object(_.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(f.a)(s,[{key:"componentDidMount",value:function(){this.props.auth()}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(st,Object(q.a)({},this.props))})}}]),s}(r.a.Component),rt=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:nt,auth:function(){return function(e){Me().then((function(t){0===t.resultCode&&e(nt(t.data.id,t.data.email,t.data.login))}))}}})(ot),ct=s(249),lt=s(248),ut=Object(lt.a)({form:"login"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(ct.a,{placeholder:"Login",component:"input",name:"login"})}),Object(j.jsx)("div",{children:Object(j.jsx)(ct.a,{placeholder:"Password",component:"input",name:"password"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(ct.a,{type:"checkbox",component:"input",name:"rememberMe"})," remember me"]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})})]})})),dt=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"LOGIN PAGE"}),Object(j.jsx)(ut,{onSubmit:function(e){console.log(e)}})]})};var jt,gt=function(){return Object(j.jsxs)("div",{className:d.a.appWrapper,children:[Object(j.jsx)(rt,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(A,{}),Object(j.jsxs)("div",{className:d.a.content,children:[Object(j.jsx)(l.b,{path:"/profile/:userID?",component:Ge}),Object(j.jsx)(l.b,{path:"/dialogs",component:se}),Object(j.jsx)(l.b,{path:"/users",component:Xe}),Object(j.jsx)(l.b,{path:"/news",component:C}),Object(j.jsx)(l.b,{path:"/music",component:U}),Object(j.jsx)(l.b,{path:"/settings",component:y}),Object(j.jsx)(l.b,{path:"/login",component:dt})]})]}),Object(j.jsx)(g,{})]})};!function(e){e.SET_FRIENDS="SET-FRIENDS",e.SET_LOADING="SET-LOADING"}(jt||(jt={}));var pt={friends:[],isLoading:!0},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-FRIENDS":return Object(q.a)(Object(q.a)({},e),{},{friends:[].concat(Object(Y.a)(e.friends),[t.friends])});default:return e}},mt=s(116),ft=s(250),Ot=Object(te.c)({profile:De,dialogs:Z,friends:bt,users:qe,auth:it,form:ft.a}),_t=Object(te.e)(Ot,Object(te.a)(mt.a));window.state=_t.getState();var ht=_t;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(c.a,{children:Object(j.jsx)(h.a,{store:ht,children:Object(j.jsx)(gt,{})})})}),document.getElementById("root")),a()},26:function(e,t,s){e.exports={navbar:"Navbar_navbar__CLYHD",other:"Navbar_other__vqMC5",active:"Navbar_active__3mbhk"}},30:function(e,t,s){e.exports={post:"Post_post__A0EJd",postContent:"Post_postContent__dePS0",avatar:"Post_avatar__1wBwP",message:"Post_message__3raFK",like:"Post_like__oViQh",likesCount:"Post_likesCount__R9C9-",button:"Post_button__2dr5U"}},37:function(e,t,s){e.exports={dialogsMessages:"DialogsMessages_dialogsMessages__3QP42",messages:"DialogsMessages_messages__3fvU4",sendBox:"DialogsMessages_sendBox__3hn7h",textarea:"DialogsMessages_textarea__3H-Xz",button:"DialogsMessages_button__2YtVE"}},38:function(e,t,s){e.exports={title:"MyPosts_title__3q_Ko",textarea:"MyPosts_textarea__3KLbu",buttons:"MyPosts_buttons__2wUXL",button:"MyPosts_button__2WbpQ",posts:"MyPosts_posts__3tZ1c"}},45:function(e,t,s){e.exports={imageBox:"Profile_imageBox__1et71",arrow:"Profile_arrow__te3cM",arrowRight:"Profile_arrowRight__3ifeA"}},56:function(e,t,s){e.exports={friend:"Friend_friend__3qKjq",img:"Friend_img__3KzQt",name:"Friend_name__33ANY"}},57:function(e,t,s){e.exports={dialogPage:"Dialogs_dialogPage__3cRJY",dialogsColumn:"Dialogs_dialogsColumn__y5DL0"}},58:function(e,t,s){e.exports={dialog:"DialogItem_dialog__3tDA2",img:"DialogItem_img__30y70",active:"DialogItem_active__2qnc5"}},76:function(e,t,s){e.exports={appWrapper:"App_appWrapper__3rnam",content:"App_content__3La4L"}},77:function(e,t,s){e.exports={title:"FriendsPanel_title__2_gYF",friends:"FriendsPanel_friends__3pdJ2"}},80:function(e,t,s){e.exports={loadingGif:"Preloader_loadingGif__lFy-A",loadingBox:"Preloader_loadingBox__1-RkT"}},81:function(e,t,s){e.exports={logo:"Header_logo__3_SJs",greeting:"Header_greeting__1RmOx"}},9:function(e,t,s){e.exports={titlePage:"Users_titlePage__-qQrJ",container:"Users_container__6F9oG",friendBox:"Users_friendBox__2qTnN",imgBox:"Users_imgBox__3UYsy",img:"Users_img__3OuDf",followBtn:"Users_followBtn__3m1nP",btn:"Users_btn__9AIH5",red:"Users_red__3k9_c",green:"Users_green__2qlvh",infoBox:"Users_infoBox__m1z_G",infoBottom:"Users_infoBottom__3bLuP",title:"Users_title__2S65O",name:"Users_name__3Kys8",description:"Users_description__QFQc5",showBtn:"Users_showBtn__1c0oR",activePage:"Users_activePage__28hh7",pages:"Users_pages__2ZPtK",disabled:"Users_disabled__vXtPd"}}},[[247,1,2]]]);
//# sourceMappingURL=main.7cd1b098.chunk.js.map