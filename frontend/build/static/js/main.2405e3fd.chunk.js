(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,a,t){e.exports=t(96)},50:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),s=(t(49),t(50),t(10)),i=t(2),o=t(23),m=t.n(o),u=t(1),d=t.n(u),p=t(9),v=t(12),h=t(3),f=t(4),E=t(5),g=t(7),b=t(6),N=t(39),w=t.n(N),y=t(16),O=t.n(y),j=function(){var e=localStorage.getItem("token");return{headers:{Authorization:"Bearer ".concat(e)}}},k=function(e){return O.a.get("/api/movies/".concat(e,"/"))},C=function(e){return O.a.post("/api/movies/",e,j())},S=function(e,a){return O.a.put("/api/movies/".concat(e,"/"),a,j())},D=function(e){return O.a.delete("/api/movies/".concat(e,"/"),j())},x=function(e){return O.a.post("/api/auth/register/",e)},_=function(e){return O.a.post("/api/auth/login/",e)},A=function(e){var a=localStorage.getItem("token"),t={headers:{Authorization:"Bearer ".concat(a)}};return O.a.post("/api/comments/",e,t)},M=function(e,a){return console.log("Adding movie ".concat(e," to my Watchlist")),O.a.post("/api/movies/".concat(e,"/likes/"),a,j())},I=function(e){return console.log("Removing movie ".concat(e," from my Watchlist")),O.a.delete("/api/movies/".concat(e,"/likes/"),j())};function R(){return O.a.get("/api/auth/profile/",j())}var L=function(e){localStorage.setItem("token",e)},F=function(){var e=localStorage.getItem("token");if(!e)return!1;var a=e.split(".");return!(a.length<3)&&JSON.parse(atob(a[1]))},U=function(){var e=F();return!!e&&Math.floor(Date.now()/1e3)<e.exp},W={background:"#009cc4",text:"#FFFFFF"},q=function(e){o.notify.show(e,"custom",3e3,W)},T=t(43),P=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={movie:null,formdata:{text:"",rating:""},liked_movies:"",currentUserId:"",liked_by:"",heartColor:"grey",liked:!1},e.handleChange=function(a){var t=Object(h.a)(Object(h.a)({},e.state.formData),{},Object(v.a)({},a.target.name,a.target.value));e.setState({formData:t})},e.handleSubmit=function(){var a=Object(p.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),e.state.formData.movie=e.state.movie.id,a.next=4,A(e.state.formData);case 4:console.log(e.state.formData),q("Thanks for your comment and rating!"),n=e.state.movie.id,e.props.history.push("/movies/".concat(n));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleDelete=Object(p.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props.match.params.id,a.next=3,D(t);case 3:e.props.history.push("/");case 4:case"end":return a.stop()}}),a)}))),e.handleWatchlist=Object(p.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.props.match.params.id,e.state.liked){a.next=15;break}return a.prev=3,a.next=6,M(t);case 6:e.setState({heartColor:"crimson",liked:!0}),q("Added to Watchlist!"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),console.log(a.t0);case 13:a.next=25;break;case 15:return a.prev=15,a.next=18,I(t);case 18:e.setState({heartColor:"grey",liked:!1}),q("Removed from Watchlist!"),a.next=25;break;case 22:a.prev=22,a.t1=a.catch(15),console.log(a.t1);case 25:case"end":return a.stop()}}),a,null,[[3,10],[15,22]])}))),e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var a,t,n,r,l,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,k(a);case 3:return t=e.sent,console.log(t.data),this.setState({movie:t.data}),e.prev=6,e.next=9,R();case 9:n=e.sent,r=n.data.id,this.setState({currentUserId:r}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:l=this.state.movie.liked_by.map((function(e){return e.id})),c=l.includes(this.state.currentUserId),s=c?"crimson":"grey",this.setState({heartColor:s,liked:c});case 21:case"end":return e.stop()}}),e,this,[[6,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.movie,t=e.text,n=e.rating,l=this.state.heartColor;return a?r.a.createElement("div",{className:"show-page"},r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"poster-view"},r.a.createElement("img",{src:a.image,key:a.image,alt:a.title})),r.a.createElement("div",{className:"main-right"},r.a.createElement("div",{className:"right-box"},r.a.createElement("div",{className:"movie-title"},r.a.createElement("h1",null,a.title,"\xa0"),r.a.createElement("h2",null,"(",a.release,")")),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h3",null,a.age_rating,"\xa0"),r.a.createElement("div",{className:"genres"},r.a.createElement("h4",{key:a.id}," ",a.genre.map((function(e){return e.name})).join(", "))),r.a.createElement("div",{className:"duration"},r.a.createElement("h4",null,a.duration))),r.a.createElement("div",{className:"overview"},r.a.createElement("h1",null,"Overview"),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,a.description))),r.a.createElement("div",{className:"cast"},r.a.createElement("div",{className:"director"},r.a.createElement("h5",null,"Director"),r.a.createElement("h4",null,a.director)),r.a.createElement("div",{className:"starring"},r.a.createElement("h5",null,"Starring"),r.a.createElement("h4",null,a.starring))),r.a.createElement("div",{className:"trailer-parent"},r.a.createElement("div",{className:"trailer"},r.a.createElement("button",{className:"button"},r.a.createElement("a",{href:a.trailer},"Play Trailer"))),r.a.createElement("div",{className:"like"},U()&&r.a.createElement(T.a,{onClick:this.handleWatchlist,color:l})),U()&&r.a.createElement("div",{className:"edit-buttons"},r.a.createElement(s.b,{to:"/movies/".concat(a.id,"/edit"),id:"edit",className:"button"},"Edit"),r.a.createElement("button",{onClick:this.handleDelete,id:"delete",className:"button"},"Delete")))))),r.a.createElement("div",{className:"next-page"},U()&&r.a.createElement("div",{className:"comments-left"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"review-column is-two-thirds is-offset-one-quarter box"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Add A Review"),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea",placeholder:"comments",name:"text",value:t,onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Rating"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Choose 1-5",name:"rating",value:n,onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("button",{type:"submit",className:"button is-fullwidth"},"Submit")))),!U()&&r.a.createElement("div",{className:"login-to-review"},r.a.createElement("h1",null,"Login to rate and review movies"),r.a.createElement(s.b,{to:"/login",className:"button"},"Login")),r.a.createElement("div",{className:"comments-right"},r.a.createElement("div",{className:"comments-box"},r.a.createElement("div",{className:"comments-title"},r.a.createElement("h1",null,"Reviews")),r.a.createElement("hr",null),r.a.createElement("div",{className:"user-reviews-parent"},r.a.createElement("div",{className:"user-reviews"},"key=",a.comment," ",a.comments.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"comment-text"},r.a.createElement("h3",null,"User: ",e.user.username),r.a.createElement("p",null,"Comment: ",e.text)),r.a.createElement("div",{className:"comment-rating"},r.a.createElement("p",null,"Rating: ",e.rating)),r.a.createElement("div",{className:"comment-rating"},r.a.createElement("p",null,"Created at: ",w()(e.created_at).format("Do MMM YY"))),r.a.createElement("hr",null))})))))))):null}}]),t}(r.a.Component),Y=function(e){var a=e.handleChange,t=e.handleSubmit,n=e.handleMultiSelect,l=e.formData,c=l.title,s=l.image,i=l.description,o=l.starring,m=l.release,u=l.director,d=l.duration,p=l.age_rating,v=l.trailer;return r.a.createElement("div",{className:"add-movie"},r.a.createElement("form",{onSubmit:t,className:"column is-half is-offset-one-quarter box"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Add / Edit A Movie"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Title (Required)",name:"title",value:c,onChange:a}))),r.a.createElement("div",{className:"select is-multiple"},r.a.createElement("label",{className:"label"},"Select 1 or more genres"),r.a.createElement("select",{multiple:!0,className:"multiple",size:"14",onChange:n},r.a.createElement("option",{name:"1",value:1,className:"option"},"Comedy"),r.a.createElement("option",{name:"2",value:2,className:"option"},"Action"),r.a.createElement("option",{name:"3",value:3,className:"option"},"Thriller"),r.a.createElement("option",{name:"4",value:4,className:"option"},"Horror"),r.a.createElement("option",{name:"5",value:5,className:"option"},"Drama"),r.a.createElement("option",{name:"6",value:6,className:"option"},"Documentary"),r.a.createElement("option",{name:"7",value:7,className:"option"},"Crime"),r.a.createElement("option",{name:"8",value:8,className:"option"},"Animation"),r.a.createElement("option",{name:"9",value:9,className:"option"},"Family"),r.a.createElement("option",{name:"10",value:10,className:"option"},"Fantasy"),r.a.createElement("option",{name:"11",value:11,className:"option"},"Romance"),r.a.createElement("option",{name:"12",value:12,className:"option"},"Science Fiction"),r.a.createElement("option",{name:"13",value:13,className:"option"},"War"),r.a.createElement("option",{name:"14",value:14,className:"option"},"Western"))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Image URL (required)",name:"image",value:s,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"input",type:"text",placeholder:"Description (required)",name:"description",value:i,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Starring (seperated by commas - required)",name:"starring",value:o,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Release Year (required)",name:"release",value:m,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Director(required)",name:"director",value:u,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Duration (eg: 1h 45m)",name:"duration",value:d,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Age Rating (eg. 12A or 18)",name:"age_rating",value:p,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Trailer URL(required)",name:"trailer",value:v,onChange:a}))),r.a.createElement("div",{className:"field"},r.a.createElement("button",{type:"submit",className:"button is-fullwidth"},"Submit"))))},z=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{title:"",genre:[],image:"",description:"",starring:"",release:"",director:"",duration:"",age_rating:"",trailer:"",liked_by:[]}},e.handleMultiSelect=function(a){var t=Array.from(a.target.selectedOptions).map((function(e){return Number(e.value)}));console.log(t);var n=Object(h.a)(Object(h.a)({},e.state.formData),{},{genre:t});e.setState({formData:n}),console.log(n)},e.handleChange=function(a){var t=Object(h.a)(Object(h.a)({},e.state.formData),{},Object(v.a)({},a.target.name,a.target.value));console.log(t),e.setState({formData:t})},e.handleSubmit=function(){var a=Object(p.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,C(e.state.formData);case 3:n=a.sent,console.log(n),e.props.history.push("/movies/".concat(n.data.id));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"add-movie-section"},r.a.createElement("div",{className:"container"},r.a.createElement(Y,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleMultiSelect:this.handleMultiSelect,formData:this.state.formData})))}}]),t}(r.a.Component),B=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{title:"",image:"",genre:[],description:"",starring:"",release:"",director:"",duration:"",age_rating:"",trailer:"",liked_by:[]}},e.handleMultiSelect=function(a){var t=Array.from(a.target.selectedOptions).map((function(e){return Number(e.value)}));console.log(t);var n=Object(h.a)(Object(h.a)({},e.state.formData),{},{genre:t});e.setState({formData:n}),console.log(n)},e.handleChange=function(a){console.log(a.target);var t=Object(h.a)(Object(h.a)({},e.state.formData),{},Object(v.a)({},a.target.name,a.target.value));e.setState({formData:t})},e.handleSubmit=function(){var a=Object(p.a)(d.a.mark((function a(t){var n,r,l,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n=e.state.formData.user,e.state.formData.user=n.id,r=e.state.formData,e.state.formData.liked_by=r.value,l=e.props.match.params.id,a.next=8,S(l,e.state.formData);case 8:c=a.sent,console.log(c),e.props.history.push("/movies/".concat(l));case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var a,t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,k(a);case 3:t=e.sent,console.log(t.data),this.setState({formData:t.data}),console.log(t.data.genre),n=t.data.genre.map((function(e){return e.id})),console.log(n),this.state.formData.genre=n;case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("section",{className:"add-movie-section"},r.a.createElement("div",{className:"container"},r.a.createElement(Y,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleMultiSelect:this.handleMultiSelect,formData:this.state.formData})))}}]),t}(r.a.Component),H=function(e){var a=e.title,t=e.image,n=e.id;return r.a.createElement("div",{id:n,className:"main"},r.a.createElement(s.b,{to:"/movies/".concat(n)},r.a.createElement("div",{className:"row-posters"},r.a.createElement("div",{className:"row-poster"},r.a.createElement("img",{src:t,alt:a})))))},J=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={movies:[]},e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/movies/");case 2:a=e.sent,this.setState({movies:a.data}),console.log("movies array >>>>",a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies,a=e.filter((function(e){return e.genre.includes(1)})),t=e.filter((function(e){return e.genre.includes(3)})),n=e.filter((function(e){return e.genre.includes(8)}));return this.state.movies?r.a.createElement("div",{className:"home-main"},r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{className:"featured",src:"https://free4kwallpapers.com/uploads/originals/2020/05/01/interstellar-wallpaper.jpg",alt:"featured-movie"}),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=zSWdZVtXT7E&t=10s"},r.a.createElement("h2",null,"Play Trailer"))),r.a.createElement("div",{className:"home-titles"},r.a.createElement("h1",null,"MOST POPULAR")),r.a.createElement("div",{className:"movie-row"},this.state.movies.map((function(e){return r.a.createElement(H,Object.assign({key:e.id},e))}))),r.a.createElement("div",{className:"home-titles"},r.a.createElement("h1",null,"COMEDIES")),r.a.createElement("div",{className:"movie-row"},a.map((function(e){return r.a.createElement(H,Object.assign({key:e.id},e))}))),r.a.createElement("div",{className:"home-titles"},r.a.createElement("h1",null,"THRILLERS")),r.a.createElement("div",{className:"movie-row"},t.map((function(e){return r.a.createElement(H,Object.assign({key:e.id},e))}))),r.a.createElement("div",{className:"home-titles"},r.a.createElement("h1",null,"ANIMATION / FAMILY")),r.a.createElement("div",{className:"movie-row"},n.map((function(e){return r.a.createElement(H,Object.assign({key:e.id},e))}))))):null}}]),t}(r.a.Component),G=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"handleLogOut",value:function(){q("You have signed out!"),localStorage.removeItem("token")}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-end"},r.a.createElement(s.b,{to:"/",className:"navbar-item"},"Home"),U()&&r.a.createElement(s.b,{to:"/movies/new",className:"navbar-item"},"Add A Movie"),!U()&&r.a.createElement(s.b,{to:"/register",className:"navbar-item"},"Sign Up"),!U()&&r.a.createElement(s.b,{to:"/login",className:"navbar-item sign-in"},"Sign In"),U()&&r.a.createElement(s.b,{to:"/profile",className:"navbar-item"},"Profile"),U()&&r.a.createElement(s.b,{to:"/",onClick:this.handleLogOut,className:"navbar-item"},"Sign Out"))}}]),t}(r.a.Component),Q=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{className:"navbar-item",href:"/"},r.a.createElement("img",{id:"logo",className:"logo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"formula1",width:"160",height:"50"}))),r.a.createElement(G,null)))}}]),t}(r.a.Component),V=t(41),X=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mobile-navbar"},r.a.createElement("a",{className:"mobile-logo",href:"/"},r.a.createElement("img",{id:"logo",className:"logo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"formula1",width:"160",height:"50"})),r.a.createElement(V.slide,null,r.a.createElement("div",{className:"mobile-nav"},r.a.createElement(G,null))))}}]),t}(r.a.Component),Z=t(42),K=Object(i.f)((function(){return Object(Z.useMediaQuery)({query:"(max-device-width: 1224px)"})?r.a.createElement(X,null):r.a.createElement(Q,null)})),$=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{username:"",email:"",firstName:"",lastName:"",profileImage:"",password:"",passwordConfirmation:""},registerErrors:{}},e.handleChange=function(a){console.log(a.target);var t=Object(h.a)(Object(h.a)({},e.state.formData),{},Object(v.a)({},a.target.name,a.target.value)),n=Object(h.a)(Object(h.a)({},e.state.registerErrors),{},Object(v.a)({},a.target.name,""));e.setState({formData:t,registerErrors:n})},e.handleSubmit=function(){var a=Object(p.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,x(e.state.formData);case 4:n=a.sent,console.log(n),e.props.history.push("login"),q("Welcome, now please log in!"),a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),e.setState({registerErrors:a.t0.response.data}),a.abrupt("return");case 14:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(E.a)(t,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.email,n=e.profileImage,l=e.firstName,c=e.lastName,s=e.password,i=e.passwordConfirmation,o=e.registerErrors;return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"column is-one-third is-offset-one-third box"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"reg-label"},"Sign Up"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(o.username?"is-danger":""),placeholder:"Username",name:"username",value:a,onChange:this.handleChange,error:o.username})),o.username&&r.a.createElement("p",{className:"help is-danger"},o.username)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(o.email?"is-danger":""),placeholder:"Email",name:"email",value:t,onChange:this.handleChange,error:o.email})),o.email&&r.a.createElement("p",{className:"help is-danger"},o.email)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(o.first_name?"is-danger":""),placeholder:"First Name",name:"first_name",value:l,onChange:this.handleChange,error:o.first_name})),o.first_name&&r.a.createElement("p",{className:"help is-danger"},o.first_name)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(o.last_name?"is-danger":""),placeholder:"Last Name",name:"last_name",value:c,onChange:this.handleChange,error:o.last_name})),o.last_name&&r.a.createElement("p",{className:"help is-danger"},o.last_name)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(o.profile_image?"is-danger":""),placeholder:"Profile Image URL",name:"profile_image",value:n,onChange:this.handleChange,error:o.profile_image})),o.profile_image&&r.a.createElement("p",{className:"help is-danger"},o.profile_image)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"password",className:"input ".concat(o.password?"is-danger":""),placeholder:"Password",name:"password",value:s,onChange:this.handleChange,error:o.password})),o.password&&r.a.createElement("p",{className:"help is-danger"},o.password)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"password",className:"input ".concat(o.password_confirmation?"is-danger":""),placeholder:"Password Confirmation",name:"password_confirmation",value:i,onChange:this.handleChange,error:o.password_confirmation})),o.password_confirmation&&r.a.createElement("p",{className:"help is-danger"},o.password_confirmation)),r.a.createElement("div",{className:"field"},r.a.createElement("button",{type:"submit",className:"button is-fullwidth"},"Sign Up!"))))))}}]),t}(r.a.Component),ee=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{email:"",password:""}},e.handleChange=function(a){console.log(a.target);var t=Object(h.a)(Object(h.a)({},e.state.formData),{},Object(v.a)({},a.target.name,a.target.value));console.log(t),e.setState({formData:t})},e.handleSubmit=function(){var a=Object(p.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,_(e.state.formData);case 4:n=a.sent,q("".concat(n.data.message)),console.log(n),L(n.data.token),e.props.history.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),q("Invalid email or password");case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}(),e}return Object(E.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns  sign-in-form"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"column is-one-third is-offset-one-third box"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"reg-label"},"Sign In"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",placeholder:"Email",name:"email",value:a,onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"password",className:"input",placeholder:"Password",name:"password",value:t,onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("button",{type:"submit",className:"button is-fullwidth"},"Login"))))))}}]),t}(r.a.Component),ae=function(e){Object(g.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={liked_movies:[],created_movies:[]},e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:a=e.sent,this.setState({liked_movies:a.data.liked_movies,created_movies:a.data.created_movies});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.liked_movies,a=this.state.created_movies;return console.log(a),r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"watchlist"},r.a.createElement("h1",null,"Watchlist"),r.a.createElement("div",{className:"movie-row"},e.map((function(e){return r.a.createElement(H,Object.assign({key:e.id},e))})))),r.a.createElement("div",{className:"profile-comments"},r.a.createElement("h1",null,"Created Movies"),r.a.createElement("div",{className:"movie-row"},a.map((function(e){return r.a.createElement(H,Object.assign({key:e.id},e))})))))}}]),t}(r.a.Component),te=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",{className:"has-text-white"},"Made with",r.a.createElement("span",{role:"img","aria-label":"heart emoji"}," \ud83d\udc9b "),"at GA LDN 2020")))},ne=function(){return r.a.createElement(s.a,null,r.a.createElement(m.a,null),r.a.createElement(K,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/movies/:id/edit",component:B}),r.a.createElement(i.a,{path:"/movies/new",component:z}),r.a.createElement(i.a,{path:"/movies/:id",component:P}),r.a.createElement(i.a,{exact:!0,path:"/",component:J}),r.a.createElement(i.a,{path:"/register",component:$}),r.a.createElement(i.a,{path:"/login",component:ee}),r.a.createElement(i.a,{path:"/profile",component:ae})),r.a.createElement(te,null))};c.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2405e3fd.chunk.js.map