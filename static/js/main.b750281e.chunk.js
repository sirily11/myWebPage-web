(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{418:function(e,t,n){},435:function(e,t,n){},714:function(e,t,n){},768:function(e,t,n){},769:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),i=n(13),o=n.n(i),s=(n(418),n(406)),l=n(14),d=n(38),j=n.n(d),u=n(69),h=n(53),b=n(54),p=n(65),O=n(64),f=n(70),m=n.n(f);function g(e){return"".concat("https://api.sirileepage.com/blog","/").concat(e)}function x(e){return"".concat("https://api.sirileepage.com/podcast","/").concat(e)}function v(e){var t=e.red,n=e.green,a=e.blue;return Math.sqrt(t*t*.299+n*n*.587+a*a*.114)>190}function y(e){for(var t=[],n=0;n<e.length;)t.push(e.slice(n,n+3)),n+=3;return t}var k={},w=r.a.createContext(k),N=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).fetchPosts=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({isLoading:!0}),n=void 0,n=g(t?"post/?category="+t:"post/"),e.next=6,m.a.get(n);case 6:c=e.sent,a.setState({isLoading:!1}),r=c.data,a.setState({posts:r.results,nextURL:r.next}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.alert("Error: "+e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),a.fetchCategory=Object(u.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({isLoading:!0}),t=g("category/"),e.next=5,m.a.get(t);case 5:n=e.sent,c=n.data,a.setState({isLoading:!1,categories:c.results}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({isLoading:!1}),window.alert("Error: "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),a.fetchNext=Object(u.a)(j.a.mark((function e(){var t,n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("fetching next"),!(t=a.state.nextURL)){e.next=16;break}return e.prev=3,e.next=6,m.a.get(t);case 6:n=e.sent,c=n.data,r=(r=a.state.posts).concat(c.results),a.setState({posts:r,nextURL:null===c.next?void 0:c.next}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))),a.state={isLoading:!1,posts:[],seletedCategory:void 0,categories:[],fetchNext:a.fetchNext,getPost:a.getPost,fetchPosts:a.fetchPosts,fetchCategories:a.fetchCategory},a}return Object(b.a)(n,[{key:"getPost",value:function(e){return this.state.posts.find((function(t,n,a){return t.id===e}))}},{key:"render",value:function(){return Object(a.jsx)(w.Provider,{value:this.state,children:this.props.children})}}]),n}(c.Component),S=n(407),C=n(811),E=n(223),P=n(222),M=n(812),L={},_=r.a.createContext(L),R=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).clear=function(){a.setState({currentPlaylist:void 0})},a.play=function(e){a.setState({currentPlaylist:e})},a.fetchPlaylist=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),t=x("playlist"),e.next=4,m.a.get(t);case 4:n=e.sent,a.setState({nextURL:n.data.next,playlist:n.data.results,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),a.fetchPodcast=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x("playlist/".concat(t,"/")),e.next=3,m.a.get(n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.fetchNext=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.nextURL){e.next=8;break}return a.setState({isLoading:!0}),e.next=4,m.a.get(a.state.nextURL);case 4:t=e.sent,n=a.state.playlist,t.data.results.forEach((function(e){n.push(e)})),a.setState({nextURL:t.data.next,playlist:n,isLoading:!1});case 8:case"end":return e.stop()}}),e)}))),a.state={isLoading:!1,playlist:[],fetchNext:a.fetchNext,fetchPodcast:a.fetchPodcast,play:a.play,clear:a.clear,fetchPlaylist:a.fetchPlaylist},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)(_.Provider,{value:this.state,children:this.props.children})}}]),n}(c.Component),I=n(813),D=(n(435),n(436),n(437),n(438),n(280),n(211)),T=(n(94),n(36)),W=(n(118),n(42)),Y=n(43),z=n(800),B=n(815),A=n(803),F=n(374),U={},H=r.a.createContext(U),K=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).fetchVideo=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({isLoading:!0}),n=void 0,n=g(t?"video-diary/?time="+t:"video-diary/"),e.next=6,m.a.get(n);case 6:c=e.sent,a.setState({isLoading:!1}),r=c.data,a.setState({videos:r.results,nextURL:c.data.next,startDate:c.data.start_date,endDate:c.data.end_date,months:c.data.months}),console.log(c.data.months),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),window.alert("Error: "+e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),a.fetchNext=Object(u.a)(j.a.mark((function e(){var t,n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("fetching next"),!(t=a.state.nextURL)){e.next=16;break}return e.prev=3,e.next=6,m.a.get(t);case 6:n=e.sent,c=n.data,r=(r=a.state.videos).concat(c.results),a.setState({videos:r,nextURL:null===c.next?void 0:c.next}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))),a.state={isLoading:!1,videos:[],fetchNext:a.fetchNext,fetchVideo:a.fetchVideo},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)(H.Provider,{value:this.state,children:this.props.children})}}]),n}(c.Component),J=(n(770),n(266)),V=n(127),q=n.n(V),Q=J.a.Link;function X(){var e=Object(l.g)(),t=r.a.useContext(H).months;return Object(a.jsxs)(J.a,{style:{overflowY:"scroll",margin:10},getCurrentAnchor:function(){var t;return"#/diary/".concat(null!==(t=e.time)&&void 0!==t?t:"")},children:[Object(a.jsx)(Q,{href:"#/diary/",title:"All"}),null===t||void 0===t?void 0:t.map((function(e){return q()(e)})).map((function(e,t){return Object(a.jsx)(Q,{href:"#/diary/".concat(e.format("YYYY-MM")),title:"".concat(e.format("YYYY-MM"))})}))]})}n(156);var G=n(115),$=n(816),Z=n(802),ee=Object(z.a)((function(e){return Object(B.a)({card:{backgroundRepeat:"no-repeat",backgroundSize:"cover",margin:10,height:200,backgroundColor:"pink"},titleBright:{position:"absolute",top:30,fontWeight:"bold",color:"white",width:"70%"},titleDark:{position:"absolute",top:30,fontWeight:"bold",color:"black",width:"70%"},button:{position:"absolute",bottom:40}})}));function te(e){var t=ee(),n=e.image,c=e.title,r=e.subtitle,i=e.actionTitle,o=e.onClick,s=e.isBright;return Object(a.jsx)($.a,{elevation:5,className:t.card,style:{backgroundImage:"url(".concat(n,")")},children:Object(a.jsxs)(Z.a,{children:[Object(a.jsxs)("div",{className:s?t.titleDark:t.titleBright,children:[Object(a.jsx)(T.a,{children:Object(a.jsx)("span",{children:r})}),Object(a.jsx)(T.a,{children:Object(a.jsx)("h2",{style:{color:s?"black":"white"},children:c})})]}),Object(a.jsx)(G.a,{type:"primary",className:t.button,onClick:o,children:i})]})})}function ne(){var e=r.a.useContext(H).videos;return Object(a.jsx)(T.a,{children:y(e).map((function(e,t){return Object(a.jsx)(ae,{diaries:e,reverse:t%2===0})}))})}function ae(e){var t=e.diaries,n=e.reverse,c=function(){return Object(a.jsx)(T.a,{children:Object(a.jsx)(W.a,{span:24,children:Object(a.jsx)(te,{title:t[0].title,subtitle:q()(t[0].date).format("YYYY-MM-DD"),actionTitle:"Read",onClick:function(){},image:t[0].cover,isBright:t[0].is_bright})})})},r=function(){return Object(a.jsx)(T.a,{children:t.slice(1).map((function(e,t){return Object(a.jsx)(W.a,{span:12,children:Object(a.jsx)(te,{title:e.title,subtitle:q()(e.date).format("YYYY-MM-DD"),actionTitle:"Read",onClick:function(){},image:e.cover,isBright:e.is_bright})},"post-".concat(t))}))})};return Object(a.jsxs)(W.a,{xs:24,sm:24,md:12,children:[n?r():c(),n?c():r()]})}var ce=Object(z.a)((function(e){var t;return Object(B.a)({content:(t={},Object(Y.a)(t,e.breakpoints.up("md"),{padding:"20px 50px"}),Object(Y.a)(t,"padding",0),t)})}));function re(){var e=ce(),t=r.a.useContext(H),n=t.fetchVideo,c=t.isLoading,i=Object(l.g)();return r.a.useEffect((function(){n(i.time)}),[i]),Object(a.jsxs)("div",{style:{overflowY:"hidden"},children:[Object(a.jsx)(F.Content,{className:e.content,children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(W.a,{md:3,sm:24,xs:24,children:Object(a.jsx)(X,{})}),Object(a.jsx)(W.a,{md:21,sm:24,xs:24,children:Object(a.jsx)(ne,{})})]})}),Object(a.jsx)(A.a,{open:c,style:{color:"#fff",zIndex:1e4},children:Object(a.jsx)("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",alignContent:"center"},children:Object(a.jsx)(D.a,{size:"large"})})})]})}n(231);var ie=n(99),oe=n(48),se=n(773),le=Object(z.a)((function(e){return Object(B.a)({})}));function de(e){var t=e.posts,n=e.reverse,r=(le(),Object(c.useState)(!1)),i=Object(oe.a)(r,2),o=i[0],s=i[1],d=Object(l.e)();setTimeout((function(){s(!0)}),400);var j=function(){var e=0!==t[0].cover_color.length&&v(t[0].cover_color[0]);return Object(a.jsx)(T.a,{children:Object(a.jsx)(W.a,{span:24,children:Object(a.jsx)(te,{title:t[0].title,subtitle:t[0].post_category.category,actionTitle:"Read",onClick:function(){d.push("/blog/post/"+t[0].id)},image:t[0].image_url,isBright:e})})})},u=function(){return Object(a.jsx)(T.a,{children:t.slice(1).map((function(e,t){var n=0!==e.cover_color.length&&v(e.cover_color[0]);return Object(a.jsx)(W.a,{span:12,children:Object(a.jsx)(te,{title:e.title,subtitle:e.post_category.category,actionTitle:"Read",onClick:function(){d.push("/blog/post/"+e.id)},image:e.image_url,isBright:n})},"post-".concat(t))}))})};return Object(a.jsx)(se.a,{in:o,mountOnEnter:!0,children:Object(a.jsxs)(W.a,{xs:24,sm:24,md:12,children:[n?u():j(),n?j():u()]})})}var je=Object(z.a)((function(e){return Object(B.a)({content:Object(Y.a)({},e.breakpoints.up("sm"),{marginLeft:30,margin:40}),divider:Object(Y.a)({},e.breakpoints.down("sm"),{display:"none"}),hrDivider:{backgroundImage:"linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%)",backgroundPosition:"top",backgroundSize:"10px 1px",backgroundRepeat:"repeat-x"}})}));function ue(){var e=je(),t=Object(c.useContext)(w),n=t.posts,r=t.fetchNext,i=(t.getPost,t.seletedCategory,t.nextURL),o=Object(c.useState)(!1),s=Object(oe.a)(o,2),l=s[0],d=s[1];return Object(a.jsxs)("div",{style:{height:"100vh",overflow:"scroll"},children:[Object(a.jsx)(T.a,{className:e.content,children:y(n).map((function(e,t){return 0===e.length?Object(a.jsx)("div",{}):Object(a.jsx)(de,{posts:e,reverse:t%2!==0})}))}),Object(a.jsx)(se.a,{in:void 0!==i&&null!=i,mountOnEnter:!0,unmountOnExit:!0,timeout:100,children:Object(a.jsx)(G.a,{loading:l,type:"primary",onClick:Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,r();case 3:d(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Load more"})})]})}n(309);var he=n(136),be=ie.a.Sider,pe=Object(z.a)((function(e){return{root:{width:"100%"}}}));function Oe(){pe();var e=Object(l.e)(),t=Object(l.g)(),n=Object(c.useContext)(w),i=r.a.useState("0"),o=Object(oe.a)(i,2),s=o[0],d=o[1];return r.a.useEffect((function(){var e=n.fetchCategories();Promise.all([e])}),[]),r.a.useEffect((function(){var e=t.id,a=n.categories.find((function(t){return t.id.toString()===e}));a&&d(a.id.toString()),void 0===e&&d("0"),n.fetchPosts(e)}),[t,n.categories]),Object(a.jsx)(be,{width:200,theme:"light",style:{paddingTop:10},breakpoint:"md",collapsedWidth:0,children:Object(a.jsxs)(he.a,{selectedKeys:[s],theme:"light",children:[Object(a.jsx)(he.a.Item,{onClick:function(){e.push("/blog")},children:"All"},0),n.categories.map((function(t){return Object(a.jsx)(he.a.Item,{onClick:function(){e.push("/blog/".concat(t.id))},children:t.category},t.id)}))]})})}var fe=64,me=ie.a.Content,ge=Object(z.a)((function(e){return Object(B.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})}));function xe(){Object(l.h)(),Object(l.g)().id;r.a.useEffect((function(){document.title="Blog"}),[]);var e=r.a.useContext(w).isLoading;ge();return Object(a.jsx)(ie.a,{style:{height:"calc(100vh - ".concat(fe,"px)"),overflowY:"hidden"},children:Object(a.jsxs)(ie.a,{style:{overflow:"hidden"},children:[Object(a.jsx)(Oe,{}),Object(a.jsx)(ie.a,{style:{padding:0,overflow:"hidden"},children:Object(a.jsxs)(me,{className:"site-layout-background",style:{margin:0,minHeight:280,overflow:"hidden",padding:0},children:[Object(a.jsx)(A.a,{open:e,style:{color:"#fff",zIndex:1e4},children:Object(a.jsx)("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",alignContent:"center"},children:Object(a.jsx)(D.a,{size:"large"})})}),Object(a.jsx)(ue,{})]})})]})})}n(552);var ve=n(267),ye=n(378),ke=(n(771),n(174)),we=ke.a.Title,Ne=(ke.a.Paragraph,ke.a.Text,ke.a.Link,Object(z.a)((function(e){return Object(B.a)({titleBright:{fontWeight:"bold",color:"white",width:"100%",height:"100%",padding:10},titleDark:{fontWeight:"bold",color:"black",width:"100%",padding:10}})})));function Se(e){0!==e.cover_color.length&&v(e.cover_color[0]);var t=Ne();return Object(a.jsx)("div",{style:{zIndex:10,padding:15},children:Object(a.jsx)(we,{style:{fontSize:"3em",fontWeight:"normal",marginBottom:0,marginTop:"3em"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:t.titleBright,id:"post-title",children:e.title}),Object(a.jsxs)("p",{id:"post-detail",className:t.titleDark,children:[e.author," | ",e.category.category," |",q()(e.posted_time).format("YYYY-MM-DD")]})]})})})}var Ce=n(775),Ee=n(810),Pe=n(33),Me=n(263),Le=n.n(Me),_e=n(383),Re=n.n(_e),Ie=n(384),De=n.n(Ie),Te=n(385),We=n.n(Te),Ye=n(386),ze=n.n(Ye),Be=n(387),Ae=n.n(Be),Fe=n(388),Ue=n.n(Fe),He=n(389),Ke=n.n(He),Je=(n(351),n(702),n(703),n(704),n(705),n(171)),Ve=n(817),qe=n(804),Qe=n(390),Xe=n.n(Qe),Ge=n(391),$e=n.n(Ge),Ze=function(){function e(t,n,a,c){Object(h.a)(this,e),this.id=void 0,this.children=void 0,this.content=void 0,this.level=void 0,this.children=n,this.content=c,this.level=t,this.id=a}return Object(b.a)(e,[{key:"addChild",value:function(e){if(this.children.length>0){var t=this.children[this.children.length-1];if(t.level<e.level)return void t.addChild(e)}this.children.push(e)}},{key:"render",value:function(e){var t=0!==e.length&&v(e[0]),n=Object(a.jsx)(Ve.a,{nodeId:"".concat(this.id),label:Object(a.jsx)("h4",{style:{color:t?"black":"white"},children:this.content}),children:this.children.map((function(t){return t.render(e)}))});return 0===this.id?Object(a.jsx)(qe.a,{defaultCollapseIcon:Object(a.jsx)(Xe.a,{}),defaultExpandIcon:Object(a.jsx)($e.a,{}),children:this.children.map((function(t){return t.render(e)}))}):n}}],[{key:"constructElementTree",value:function(t){var n,a=[],c=1,r=Object(Je.a)(t.blocks);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.type.includes("header")){var o=e.getHeaderValue(i);if(a.length>0){var s=a[a.length-1];if(s.level<o){s.addChild(new e(o,[],c,i.text));continue}}a.push(new e(o,[],c,i.text))}c+=1}}catch(l){r.e(l)}finally{r.f()}return new e(0,a,0,"root")}},{key:"getHeaderValue",value:function(e){switch(e.type){case"header-two":return 2;case"header-three":return 3;case"header-four":return 4;case"header-five":return 5;case"header-six":return 6;default:return 1}}}]),e}(),et=n(26),tt=n(814),nt=n(774);function at(e,t,n){e.findEntityRanges((function(e){var t=e.getEntity();return null!==t&&"LINK"===n.getEntity(t).getType()}),t)}var ct=Object(et.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",width:300,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(tt.a),rt=function(e){var t,n=e.contentState.getEntity(e.entityKey).getData().url;return console.log(n),Object(a.jsx)(ct,{title:Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(nt.a,{variant:"h6",children:null!==(t=null===n||void 0===n?void 0:n.title)&&void 0!==t?t:"No data"}),(null===n||void 0===n?void 0:n.image)&&Object(a.jsx)("img",{src:null===n||void 0===n?void 0:n.image,alt:"",height:200,crossOrigin:"anonymous"}),Object(a.jsx)(nt.a,{children:null===n||void 0===n?void 0:n.summary}),Object(a.jsx)("span",{children:null===n||void 0===n?void 0:n.link})]}),children:Object(a.jsx)("a",{href:n.link,target:"_blank",children:e.children})})},it=n(6),ot=n(393),st=n(111),lt=n(805),dt=n(806);function jt(e,t,n){e.findEntityRanges((function(e){var t=e.getEntity();return null!==t&&"image"===n.getEntity(t).getType()}),t)}var ut=function(e){var t=Object(st.a)(),n=Object(lt.a)(t.breakpoints.up("md")),c=r.a.useState(!1),i=Object(oe.a)(c,2),o=i[0],s=i[1],l=r.a.useState(!0),d=Object(oe.a)(l,2),j=d[0],u=d[1],h=e.contentState.getEntity(e.entityKey).getData(),b=h.alignment,p=h.width,O=h.src,f=h.description,m={cursor:"grab"};return m=n?Object(it.a)(Object(it.a)({},m),{},{maxWidth:"".concat(p,"%")}):Object(it.a)(Object(it.a)({},m),{},{width:"100%"}),"left"===b?m=Object(it.a)(Object(it.a)({},m),{},{float:"left"}):"right"===b?m=Object(it.a)(Object(it.a)({},m),{},{float:"right"}):"center"===b&&(m=Object(it.a)(Object(it.a)({},m),{},{marginLeft:"auto",marginRight:"auto",display:"block"})),j&&(m=Object(it.a)(Object(it.a)({},m),{},{display:"hidden"})),Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(se.a,{in:j,children:Object(a.jsx)("div",{style:{display:"flex",position:"absolute",left:"50%",top:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)"},children:Object(a.jsx)(dt.a,{})})}),Object(a.jsxs)("div",{style:m,children:[Object(a.jsx)("img",{style:m,src:O,onClick:function(){return s(!0)},onError:function(){return u(!1)},onLoad:function(){u(!1)}}),Object(a.jsx)("div",{style:{display:"flex"},children:Object(a.jsx)("figcaption",{style:{marginLeft:"auto",marginRight:"auto",fontSize:16,color:"grey"},children:f})})]}),o&&Object(a.jsx)(ot.a,{mainSrc:O,onCloseRequest:function(){s(!1)}})]})},ht=n(408),bt=n(807);function pt(e,t,n){e.findEntityRanges((function(e){var t=e.getEntity();return null!==t&&"audio"===n.getEntity(t).getType()}),t)}var Ot=function(e){var t=e.contentState.getEntity(e.entityKey).getData().src;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(ht.a,{src:t}),Object(a.jsxs)(nt.a,{children:[Object(a.jsx)("b",{children:"Audio Src:"})," ",Object(a.jsx)(bt.a,{children:decodeURIComponent(t)})]})]})},ft=n(808);function mt(e,t,n){e.findEntityRanges((function(e){var t=e.getEntity();return null!==t&&"POST-SETTINGS"===n.getEntity(t).getType()}),t)}var gt=Object(et.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",width:300,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(tt.a),xt=function(e){var t=e.contentState.getEntity(e.entityKey),n=e.settings,c=r.a.useState(),i=Object(oe.a)(c,2),o=i[0],s=i[1],l=t?t.get("data"):void 0,d=r.a.useState(!1),j=Object(oe.a)(d,2),u=j[0],h=j[1];return r.a.useEffect((function(){if(n){var e,t=Object(Je.a)(n);try{for(t.s();!(e=t.n()).done;){var a,c=e.value,r=Object(Je.a)(c.detailSettings);try{for(r.s();!(a=r.n()).done;){var i=a.value;i.id===(null===l||void 0===l?void 0:l.id)&&s(i)}}catch(o){r.e(o)}finally{r.f()}}}catch(o){t.e(o)}finally{t.f()}}}),[n]),Object(a.jsx)(ft.a,{onClickAway:function(){return h(!1)},children:Object(a.jsx)(gt,{open:u,title:Object(a.jsxs)("div",{children:[Object(a.jsx)(nt.a,{variant:"h6",children:null===o||void 0===o?void 0:o.name}),Object(a.jsx)(nt.a,{children:null===o||void 0===o?void 0:o.description})]}),children:Object(a.jsx)("span",{onClick:function(){return h(!0)},onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},style:{cursor:"pointer",color:"blue"},children:e.children})})})},vt={"#f44336":{color:"#f44336"},"#e91e63":{color:"#e91e63"},"#9c27b0":{color:"#9c27b0"},"#673ab7":{color:"#673ab7"},"#3f51b5":{color:"#3f51b5"},"#2196f3":{color:"#2196f3"},"#03a9f4":{color:"#03a9f4"},"#00bcd4":{color:"#00bcd4"},"#009688":{color:"#009688"},"#4caf50":{color:"#4caf50"},"#8bc34a":{color:"#8bc34a"},"#cddc39":{color:"#cddc39"},"#ffeb3b":{color:"#ffeb3b"},"#ffc107":{color:"#ffc107"},"#ff9800":{color:"#ff9800"},"#ff5722":{color:"#ff5722"},"#795548":{color:"#795548"},"#607d8b":{color:"#607d8b"}};function yt(e,t,n){e.findEntityRanges((function(e){var t=e.getEntity();return null!==t&&"video"===n.getEntity(t).getType()}),t)}var kt=function(e){var t=e.contentState.getEntity(e.entityKey).getData(),n=t.src,c=t.captions,i=t.description;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("video",{controls:!0,src:n,style:{width:"100%"},crossOrigin:"use-credentials",children:c.map((function(e,t){return Object(a.jsx)("track",{src:e.src,label:e.lang},t)}))}),Object(a.jsx)("div",{style:{display:"flex"},children:Object(a.jsx)("figcaption",{style:{marginLeft:"auto",marginRight:"auto",fontSize:16,color:"grey"},children:i})})]})},wt=n(809),Nt=Object(z.a)((function(e){return{root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function St(e,t,n){e.findEntityRanges((function(e){var t=e.getEntity();return null!==t&&"internallink"===n.getEntity(t).getType()}),t)}var Ct=function(e){var t=Nt(),n=e.contentState.getEntity(e.entityKey).getData(),c=n.title,r=n.id,i=n.author,o=n.image_url;return Object(a.jsxs)($.a,{className:t.root,variant:"outlined",style:{cursor:"grab"},onClick:function(){window.location.href="#/post/"+r},children:[Object(a.jsx)(wt.a,{className:t.cover,image:o}),Object(a.jsx)("div",{className:t.details,children:Object(a.jsxs)(Z.a,{className:t.content,children:[Object(a.jsx)(nt.a,{component:"h5",variant:"h5",children:c}),Object(a.jsx)(nt.a,{variant:"subtitle1",color:"textSecondary",children:i.username})]})})]})},Et=Ke()(),Pt=Re()(),Mt=Ue()(),Lt=De()({position:"right"}),_t=Ae()(),Rt=ze()(),It=Object(Me.composeDecorators)(_t.decorator,Rt.decorator,Mt.decorator,Et.decorator),Dt=(We()({decorator:It}),Mt.AlignmentTool),Tt=Object(Ce.a)((function(e){var t,n;return Object(B.a)({body:(t={backgroundRepeat:"no-repeat",backgroundSize:"cover",margin:10},Object(Y.a)(t,e.breakpoints.up("sm"),{padding:"0px"}),Object(Y.a)(t,"height",200),Object(Y.a)(t,"padding",0),Object(Y.a)(t,"backgroundColor","pink"),t),container:Object(Y.a)({overflow:"hidden",overflowX:"hidden",height:"100%"},e.breakpoints.down("sm"),{overflow:"scroll"}),content:(n={overflowX:"hidden"},Object(Y.a)(n,e.breakpoints.down("sm"),{overflow:"hidden",maxHeight:"100%",padding:"5px"}),Object(Y.a)(n,"overflowY","scroll"),Object(Y.a)(n,"maxHeight","calc(100vh - 69px)"),Object(Y.a)(n,"padding","5px"),n),cover:{height:"100vh",width:"100%"},titleContainer:{height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",display:"block"},tableOfContent:{marginLeft:40}})}));function Wt(e){var t=Tt();return Object(a.jsxs)("div",{className:t.titleContainer,style:{backgroundImage:"url(".concat(e.imageSrc,")")},children:[Object(a.jsx)(Se,{title:e.title,author:e.author,cover_color:e.cover_color,posted_time:e.posted_time,category:e.category}),Object(a.jsx)("div",{className:t.tableOfContent,id:"toc",children:e.tocElement.render(e.cover_color)})]})}var Yt=function(e){var t=new Pe.CompositeDecorator([{strategy:St,component:Ct},{strategy:yt,component:kt},{strategy:at,component:rt},{strategy:jt,component:ut},{strategy:pt,component:Ot},{strategy:mt,component:xt,props:e.post.settings}]),n=Tt(),i=Object(c.useState)(window.innerHeight),o=Object(oe.a)(i,2),s=(o[0],o[1]);return r.a.useEffect((function(){window.addEventListener("resize",(function(e){s(window.innerHeight)}))}),[]),Object(a.jsxs)(Ee.a,{container:!0,className:n.container,children:[Object(a.jsx)(Ee.a,{item:!0,md:6,className:n.cover,children:Object(a.jsx)(Wt,{category:e.post.post_category,tocElement:Ze.constructElementTree(JSON.parse(e.post.content)),title:e.post.title,author:e.post.author.username,imageSrc:e.post.image_url,cover_color:e.post.cover_color,posted_time:e.post.posted_time})}),Object(a.jsx)(Ee.a,{item:!0,md:6,className:n.content,children:Object(a.jsx)("div",{style:{zIndex:10},children:Object(a.jsx)(Le.a,{blockStyleFn:function(e){return"unstyled"===e.getType()?"text":""},customStyleMap:vt,onChange:function(e){},readOnly:!0,editorState:Pe.EditorState.createWithContent(Object(Pe.convertFromRaw)(JSON.parse(e.post.content)),t),plugins:[Pt,Lt,Rt,_t,Et],children:Object(a.jsx)(Dt,{})})})})]})},zt=(n(714),Object(z.a)((function(e){var t;return Object(B.a)({container:(t={},Object(Y.a)(t,e.breakpoints.up("sm"),{height:"calc(100vh - 64px)"}),Object(Y.a)(t,e.breakpoints.down("sm"),{height:"100%"}),t),loadingCard:{marginTop:20,width:"100%"},innerContainer:{width:"100%",height:"100%"}})})));function Bt(){var e=zt();return Object(a.jsx)("div",{className:e.loadingCard,children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(W.a,{span:12,children:Array.from({length:5},(function(e,t){return t+1})).map((function(e){return Object(a.jsx)(ve.a,{})}))}),Object(a.jsx)(W.a,{span:12,children:Object(a.jsx)(ve.a,{})})]})})}function At(){var e=Object(c.useState)(),t=Object(oe.a)(e,2),n=t[0],i=t[1],o=Object(l.g)().id,s=zt();return r.a.useEffect((function(){var e=g("post/".concat(o,"/"));m.a.get(e).then((function(e){var t=e.data;t.settings=JSON.parse(t.settings),i(t),document.title=e.data.title})).catch((function(e){return alert("Error: ".concat(e))}))}),[o]),Object(a.jsxs)("div",{className:s.container,children:[Object(a.jsxs)(ye.a,{children:[Object(a.jsx)("link",{property:"apple-touch-icon",href:null===n||void 0===n?void 0:n.image_url}),Object(a.jsx)("meta",{property:"og:title",content:null===n||void 0===n?void 0:n.title}),Object(a.jsx)("meta",{property:"og:image",content:null===n||void 0===n?void 0:n.image_url})]}),Object(a.jsx)(se.a,{in:void 0!==n,mountOnEnter:!0,children:Object(a.jsx)("div",{className:s.innerContainer,children:n&&Object(a.jsx)(Yt,{post:n})})}),Object(a.jsx)(se.a,{in:void 0===n,unmountOnExit:!0,mountOnEnter:!0,children:Object(a.jsx)(Bt,{})})]})}var Ft=n(264),Ut=n(268),Ht=n(116),Kt=n(114),Jt=n.n(Kt),Vt=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,qt=function(e,t){var n=0===e.name.indexOf("title")?"h1":"div";n=e.href?"a":n;var a="string"===typeof e.children&&e.children.match(Vt)?r.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(a=r.a.createElement(G.a,Object(it.a)({},e.children))),r.a.createElement(n,Object(it.a)({key:t.toString()},e),a)},Qt=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dataSource,n=(e.isMobile,Object(Ut.a)(e,["dataSource","isMobile"])),c=t.wrapper,r=t.titleWrapper,i=t.page,o=t.OverPack,s=t.childWrapper;return Object(a.jsx)("div",Object(it.a)(Object(it.a)(Object(it.a)({},n),c),{},{children:Object(a.jsxs)("div",Object(it.a)(Object(it.a)({},i),{},{children:[Object(a.jsx)("div",Object(it.a)(Object(it.a)({},r),{},{children:r.children.map(qt)})),Object(a.jsx)(Jt.a,Object(it.a)(Object(it.a)({},o),{},{children:Object(a.jsx)(Ht.a,{type:"bottom",leaveReverse:!0,component:T.a,componentProps:s,children:s.children.map((function(e,t){var n=e.children,c=Object(Ut.a)(e,["children"]);return Object(a.jsx)(W.a,Object(it.a)(Object(it.a)({},c),{},{children:Object(a.jsx)("div",Object(it.a)(Object(it.a)({},n),{},{children:n.children.map(qt)}))}),t.toString())}))},"block")}))]}))}))}}]),n}(r.a.PureComponent),Xt=n(46);var Gt,$t=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).getDelay=function(e,t){return e%t*100+100*Math.floor(e/t)+100*t},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props),n=t.dataSource,c=t.isMobile;delete t.dataSource,delete t.isMobile;var r=0,i=n.block.children.map((function(t,n){var i=t.children,o=c?50*n:e.getDelay(n,24/t.md),s={opacity:0,type:"from",ease:"easeOutQuad",delay:o},l=Object(it.a)(Object(it.a)({},s),{},{x:"+=10",delay:o+100});return r=(r+=t.md)>24?0:r,Object(a.jsxs)(Xt.a,Object(it.a)(Object(it.a)({component:W.a,animation:s},t),{},{componentProps:{md:t.md,xs:t.xs},className:r?t.className:"".concat(t.className||""," clear-both").trim(),children:[Object(a.jsx)(Xt.a,Object(it.a)(Object(it.a)({animation:{x:"-=10",opacity:0,type:"from",ease:"easeOutQuad"}},i.icon),{},{children:i.icon.children}),"img"),Object(a.jsxs)("div",Object(it.a)(Object(it.a)({},i.textWrapper),{},{children:[Object(a.jsx)(Xt.a,Object(it.a)(Object(it.a)({animation:l,component:"h2"},i.title),{},{children:i.title.children}),"h2"),Object(a.jsx)(Xt.a,Object(it.a)(Object(it.a)({animation:Object(it.a)(Object(it.a)({},l),{},{delay:o+200}),component:"div"},i.content),{},{children:i.content.children}),"p")]}))]}),t.name)}));return Object(a.jsx)("div",Object(it.a)(Object(it.a)(Object(it.a)({},t),n.wrapper),{},{children:Object(a.jsxs)("div",Object(it.a)(Object(it.a)({},n.page),{},{children:[Object(a.jsx)("div",Object(it.a)(Object(it.a)({},n.titleWrapper),{},{children:n.titleWrapper.children.map(qt)})),Object(a.jsx)(Jt.a,Object(it.a)(Object(it.a)({},n.OverPack),{},{children:Object(a.jsx)(Ht.a,{type:"bottom",children:Object(a.jsx)(T.a,Object(it.a)(Object(it.a)({},n.block),{},{children:i}),"row")},"u")}))]}))}))}}]),n}(r.a.PureComponent),Zt=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,Object(a.jsx)("div",Object(it.a)(Object(it.a)(Object(it.a)({},e),t.wrapper),{},{children:Object(a.jsx)(Jt.a,Object(it.a)(Object(it.a)({},t.OverPack),{},{children:Object(a.jsx)(Xt.a,Object(it.a)(Object(it.a)({animation:{y:"+=30",opacity:0,type:"from"}},t.copyright),{},{children:t.copyright.children}),"footer")}))}))}}]),n}(r.a.PureComponent),en=n(818),tn=n(819),nn=n(820),an=n(821),cn=n(822),rn=n(409),on={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title",children:"Sirilee Web Page"},content:{className:"banner0-content",children:"My Personal Website"},button:{className:"banner0-button",children:"Learn More"}},sn={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"Skills"}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:Object(a.jsx)(en.a,{})},{name:"title",className:"content0-block-title",children:"Video Filming"},{name:"content",children:"Multiple videos"}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:Object(a.jsx)(tn.a,{})},{name:"title",className:"content0-block-title",children:"Multiple projects"},{name:"content",children:"Developed multiple projects in the past"}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:Object(a.jsx)(nn.a,{})},{name:"title",className:"content0-block-title",children:"Different platforms"},{name:"content",children:"Experienced in different platforms' development"}]}}]}},ln={wrapper:{className:"home-page-wrapper content3-wrapper"},page:{className:"home-page content3"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:"I love finding solutions for every possible tasks",className:"title-h1"},{name:"content",className:"title-content",children:"Projects list"}]},block:{className:"content3-block-wrapper",children:[{name:"block0",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:Object(a.jsx)(an.a,{})},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"Storage Management System"},content:{className:"content3-content",children:"A Python implemented storage management system which has a mobile app, web app, and managable admin site"}}},{name:"block1",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:Object(a.jsx)(cn.a,{})},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"NewsFeed"},content:{className:"content3-content",children:"An app which find news from internet and parse HTML into Markdown 24x7. Currently, it collected more than 160,000 news in last two years."}}},{name:"block2",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:Object(a.jsx)(rn.a,{})},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"Multi-user editing platform"},content:{className:"content3-content",children:"A multi-user Collaboration platform which provides a common place for settings used in the document editing. Can be change in real-time across all end users."}}},{name:"block3",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:Object(a.jsx)(tn.a,{})},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"Draft JS Flutter Renderer"},content:{className:"content3-content",children:"An open sourced Draft JS renderer for Flutter."}}},{name:"block4",className:"content3-block",md:8,xs:24,children:{icon:{className:"content3-icon",children:Object(a.jsx)(tn.a,{})},textWrapper:{className:"content3-text"},title:{className:"content3-title",children:"Flutter JSON Textform"},content:{className:"content3-content",children:"An auto form generated framework for Flutter which can auto generate text form"}}}]}},dn={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:Object(a.jsx)("span",{})}},jn=(n(768),n(823));function un(e){var t=Object.assign({},e),n=t.dataSource,c=Object(l.e)();return delete t.dataSource,delete t.isMobile,Object(a.jsxs)("div",Object(it.a)(Object(it.a)(Object(it.a)({},t),n.wrapper),{},{children:[Object(a.jsxs)(Ht.a,Object(it.a)(Object(it.a)({type:["bottom","top"],delay:200},n.textWrapper),{},{children:[Object(a.jsx)("div",Object(it.a)(Object(it.a)({},n.title),{},{children:"string"===typeof n.title.children&&n.title.children.match(Vt)?Object(a.jsx)("img",{src:n.title.children,width:"100%",alt:"img"}):n.title.children}),"title"),Object(a.jsx)("div",Object(it.a)(Object(it.a)({},n.content),{},{children:n.content.children}),"content"),Object(a.jsx)(G.a,Object(it.a)(Object(it.a)({ghost:!0},n.button),{},{onClick:function(){c.push("/blog")},children:n.button.children}),"button")]}),"QueueAnim"),Object(a.jsx)(Xt.a,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",children:Object(a.jsx)(jn.a,{})},"icon")]}))}Object(Ft.enquireScreen)((function(e){Gt=e}));var hn=("undefined"!==typeof window?window:{}).location,bn=void 0===hn?{}:hn,pn=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isMobile:Gt,show:!bn.port},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(Ft.enquireScreen)((function(t){e.setState({isMobile:!!t})})),bn.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[Object(a.jsx)(un,{id:"Banner0_0",dataSource:on,isMobile:this.state.isMobile},"Banner0_0"),Object(a.jsx)(Qt,{id:"Content0_0",dataSource:sn,isMobile:this.state.isMobile},"Content0_0"),Object(a.jsx)($t,{id:"Content3_0",dataSource:ln,isMobile:this.state.isMobile},"Content3_0"),Object(a.jsx)(Zt,{id:"Footer0_0",dataSource:dn,isMobile:this.state.isMobile},"Footer0_0")];return Object(a.jsx)("div",{className:"templates-wrapper",ref:function(t){e.dom=t},children:this.state.show&&t})}}]),n}(r.a.Component),On=[{title:"Home",path:"/",navPath:"/",component:Object(a.jsx)(pn,{}),showInMenu:!0},{title:"Blog",path:"/blog/:id?",navPath:"/blog",component:Object(a.jsx)(xe,{}),showInMenu:!0},{title:"Diary",path:"/diary/:time?",navPath:"/diary",component:Object(a.jsx)(re,{}),showInMenu:!0},{title:"Blog",path:"/blog/post/:id?",navPath:"/post",component:Object(a.jsx)(At,{}),showInMenu:!1}],fn=ie.a.Header;function mn(){var e=Object(l.f)(),t=Object(l.e)(),n=r.a.useState("/"),c=Object(oe.a)(n,2),i=c[0],o=c[1];return r.a.useEffect((function(){var t,n=On.find((function(t){return e.pathname.includes(t.navPath)&&"/"!==t.navPath}));n?o(null!==(t=n.path)&&void 0!==t?t:""):"/"===e.pathname&&o("/")}),[e]),Object(a.jsx)(fn,{style:{position:"sticky",top:0,zIndex:1200},children:Object(a.jsx)(he.a,{mode:"horizontal",selectedKeys:[i],theme:"dark",children:On.filter((function(e){return e.showInMenu})).map((function(e,n){return Object(a.jsx)(he.a.Item,{onClick:function(){t.push(e.navPath)},children:e.title},e.path)}))})})}var gn=Object(S.a)({palette:{type:"light",primary:C.a,secondary:E.a}}),xn=Object(S.a)({palette:{type:"dark",primary:P.a}}),vn=function(){return Object(a.jsxs)(s.a,{children:[Object(a.jsx)(mn,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)(M.a,{theme:gn,children:Object(a.jsx)(K,{children:Object(a.jsxs)(N,{children:[Object(a.jsx)(I.a,{}),On.map((function(e,t){return Object(a.jsx)(l.a,{path:e.path,exact:!0,children:e.component},"route-".concat(t))}))]})})}),Object(a.jsx)(M.a,{theme:xn,children:Object(a.jsx)(R,{})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(vn,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[769,1,2]]]);
//# sourceMappingURL=main.b750281e.chunk.js.map