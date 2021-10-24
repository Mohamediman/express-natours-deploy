(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var s=a(36),r=a.n(s),c=a(2),n=a(10),o=a(11),i=a(12),l=a.n(i),d=a(8),j=a(9),u=a.n(j),b=a(17),m=a(16),p=a.n(m),h="GET_TOURS",O="GET_TOUR",x="TOUR_ERRORS",v="TOURS_ERRORS",g="LOAD_TOUR",_="USER_LOADED",f="UPDATE_CURRENT_USER",N="UPDATE_USER_PASSWORD",w="BOOKTOUR",y="USER_LOGOUT",k="CLEAR_USER",S="AUTH_ERROR",A="SET_ALERT",T="REMOVE_ALERT",C="BOOKING_ERROR",R=a(102),E=function(e,t){return function(a){var s=Object(R.a)();console.log("Set Alert called here.."),a({type:A,payload:{msg:e,alertType:t,id:s}}),setTimeout((function(){return a({type:T,payload:s})}),5e3)}},P=function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={headers:{"Content-Type":"application/json"}},e.next=4,p.a.get("/api/v1/users/me",a);case 4:s=e.sent,t({type:_,payload:s.data.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error from loading the user",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},L=a(1),U=Object(d.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){l.a.remove("jwt"),console.log("Remove the jwt from the broweer..."),e({type:y})}}})((function(e){var t=e.auth,a=t.isAuthenticated,s=t.user,r=e.logout,o=Object(L.jsxs)("nav",{className:"nav nav--user",children:[Object(L.jsx)("a",{href:"/",className:"nav__el nav__el--logout",onClick:function(e){return r()},children:"Log Out"}),Object(L.jsxs)(n.b,{to:"/me",className:"nav__el",children:[s&&Object(L.jsx)("img",{src:"/img/users/".concat(s.photo),alt:"user",className:"nav__user-img"}),s&&s.name&&Object(L.jsx)("span",{children:s.name.split(" ")[0]})]})]}),i=Object(L.jsxs)("nav",{className:"nav nav--user",children:[Object(L.jsx)(n.b,{to:"/login",className:"nav__el",children:"Log in"}),Object(L.jsx)(n.b,{to:"/signup",className:"nav__el nav__el--cta",children:"Sign up"})]});return Object(L.jsx)(c.Fragment,{children:a?o:i})})),B=a(26),q=a.p+"static/media/logo-white.6c89a3f0.png",M=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{loadUser:P})((function(e){e.isAuthenticated;var t=e.loadUser;return Object(c.useEffect)((function(){""!==l.a.get("jwt")&&(t(),console.log("Called the loadUser"))}),[]),Object(L.jsxs)("header",{className:"header",children:[Object(L.jsx)("a",{href:"/",className:"nav__el",children:"All tours"}),Object(L.jsx)("div",{className:"header__logo",children:Object(L.jsx)("a",{href:"/",children:Object(L.jsx)("img",{src:q,alt:"Natours logo"})})}),Object(L.jsx)(U,{})]})})),D=a(39),F=a.n(D),I=a(29),Y=a(22),J=Object(d.b)(null)((function(e){var t=e.tour;return Object(L.jsxs)("div",{className:"card",children:[Object(L.jsxs)("div",{className:"card__header",children:[Object(L.jsxs)("div",{className:"card__picture",children:[Object(L.jsx)("div",{className:"card__picture-overlay",children:"\xa0"}),Object(L.jsx)("img",{src:"/img/tours/".concat(t.imageCover),alt:t.name,className:"card__picture-img"})]}),Object(L.jsx)("h3",{className:"heading-tertirary",children:Object(L.jsx)("span",{children:t.name})})]}),Object(L.jsxs)("div",{className:"card__details",children:[Object(L.jsxs)("h4",{className:"card__sub-heading",children:[t.difficulty," ",t.duration,"-day tour"]}),Object(L.jsx)("p",{className:"card__text",children:t.summary}),Object(L.jsxs)("div",{className:"card__data",children:[Object(L.jsx)(I.b,{className:"card__icon"}),Object(L.jsx)("span",{children:t.startLocation.description})]}),Object(L.jsxs)("div",{className:"card__data",children:[Object(L.jsx)(Y.a,{className:"card__icon"}),Object(L.jsx)("span",{children:Object(L.jsx)(F.a,{format:"MMM YYYY",children:t.startDates[0]})})]}),Object(L.jsxs)("div",{className:"card__data",children:[Object(L.jsx)(B.a,{className:"card__icon"}),Object(L.jsxs)("span",{children:[t.locations.length," stops"]})]}),Object(L.jsxs)("div",{className:"card__data",children:[Object(L.jsx)(B.b,{className:"card__icon"}),Object(L.jsxs)("span",{children:[t.maxGroupSize," people"]})]})]}),Object(L.jsxs)("div",{className:"card__footer",children:[Object(L.jsxs)("p",{children:[Object(L.jsxs)("span",{className:"card__footer-value",children:["$",t.price]}),Object(L.jsx)("span",{className:"card__footer-text",children:"per person"})]}),Object(L.jsxs)("p",{className:"card__ratings",children:[Object(L.jsx)("span",{className:"card__footer-value",children:t.ratingsAverage}),Object(L.jsxs)("span",{className:"card__footer-text",children:["rating (",t.ratingsQuantity,")"]})]}),Object(L.jsx)(n.b,{to:"/tour/".concat(t.slug),className:"btn btn--green btn--small",children:"Details"})]})]})})),G=Object(d.b)((function(e){return{tours:e.tours.tours}}))((function(e){var t=e.tours;return Object(L.jsx)("main",{className:"main",children:Object(L.jsx)("div",{className:"card-container",children:t&&t.length>0&&t.map((function(e){return Object(L.jsx)(J,{tour:e},e._id)}))})})})),z=function(e){var t=e.tour;return Object(L.jsxs)("section",{className:"section-header",children:[Object(L.jsxs)("div",{className:"header__hero",children:[Object(L.jsx)("div",{className:"header__hero-overlay",children:"\xa0 "}),Object(L.jsx)("img",{src:"/img/tours/".concat(t.imageCover),alt:t.name,className:"header__hero-img"})]}),Object(L.jsxs)("div",{className:"heading-box",children:[Object(L.jsx)("h1",{className:"heading-primary",children:Object(L.jsxs)("span",{children:[t&&t.name.split(" ").splice(0,2).join(" "),Object(L.jsx)("br",{}),t&&t.name.split(" ").splice(2).join("")]})}),Object(L.jsxs)("div",{className:"heading-box__group",children:[Object(L.jsxs)("div",{className:"heading-box__detail",children:[Object(L.jsx)(I.a,{className:"heading-box__icon"}),Object(L.jsxs)("span",{className:"heading-box__text",children:[t&&t.duration," days"]})]}),Object(L.jsxs)("div",{className:"heading-box__detail",children:[Object(L.jsx)(I.b,{className:"heading-box__icon"}),Object(L.jsxs)("span",{className:"heading-box__text",children:[" ",t&&t.startLocation.description]})]})]})]})]})},W=function(e){var t=e.tour;return Object(L.jsxs)("div",{className:"description-box",children:[Object(L.jsxs)("h2",{className:"heading-secondary ma-bt-lg",children:["About ",t.name," "]}),Object(L.jsx)("p",{className:"description__text",children:t.description&&t.description.split(".").splice(0,2)}),Object(L.jsx)("p",{className:"description__text",children:t.description&&t.description.split(".").splice(2)})]})},Q=function(e){var t=e.guide;return Object(L.jsxs)("div",{className:"overview-box__detail",children:[Object(L.jsx)("img",{src:"/img/users/".concat(t.photo),alt:t.role,className:"overview-box__img"}),Object(L.jsx)("span",{className:"overview-box__label",children:t.role}),Object(L.jsx)("span",{className:"overview-box__text",children:t.name})]})},H=function(e){var t=e.tour;return Object(L.jsx)("div",{className:"overview-box",children:Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{className:"overview-box__group",children:[Object(L.jsx)("h2",{className:"heading-secondary ma-bt-lg",children:"Quick facts"}),Object(L.jsxs)("div",{className:"overview-box__detail",children:[Object(L.jsx)(Y.a,{className:"overview-box__icon"}),Object(L.jsx)("span",{className:"overview-box__label",children:"Next date"}),Object(L.jsx)("span",{className:"overview-box__text",children:Object(L.jsx)(F.a,{format:"MMM YYYY",children:t.startDates[0]})})]}),Object(L.jsxs)("div",{className:"overview-box__detail",children:[Object(L.jsx)(Y.c,{className:"overview-box__icon"}),Object(L.jsx)("span",{className:"overview-box__label",children:"Difficulty"}),Object(L.jsx)("span",{className:"overview-box__text",children:t.difficulty})]}),Object(L.jsxs)("div",{className:"overview-box__detail",children:[Object(L.jsx)(B.b,{className:"overview-box__icon"}),Object(L.jsx)("span",{className:"overview-box__label",children:"Participants"}),Object(L.jsxs)("span",{className:"overview-box__text",children:[t.maxGroupSize," people"]})]}),Object(L.jsxs)("div",{className:"overview-box__detail",children:[Object(L.jsx)(Y.b,{className:"overview-box__icon"}),Object(L.jsx)("span",{className:"overview-box__label",children:"Rating"}),Object(L.jsxs)("span",{className:"overview-box__text",children:[t.ratingsAverage," / 5"]})]})]}),Object(L.jsxs)("div",{className:"overview-box__group",children:[Object(L.jsx)("h2",{className:"heading-secondary ma-bt-lg",children:"Your tour guides"}),t.guides.map((function(e){return Object(L.jsx)(Q,{guide:e},e._id)}))]})]})})},V=function(e){var t=e.review;return Object(L.jsxs)("div",{className:"reviews__card",children:[Object(L.jsxs)("div",{className:"reviews__avatar",children:[Object(L.jsx)("img",{src:"/img/users/".concat(t.user.photo),alt:t.user.name,className:"reviews__avatar-img"}),Object(L.jsx)("h6",{className:"reviews__user",children:t.user.name})]}),Object(L.jsx)("p",{className:"reviews__text",children:t.review}),Object(L.jsxs)("div",{className:"reviews__rating",children:[Object(L.jsx)(Y.b,{className:"reviews__star ".concat(t.rating>=1&&"reviews__star--active"," ")}),Object(L.jsx)(Y.b,{className:"reviews__star ".concat(t.rating>=2&&"reviews__star--active"," ")}),Object(L.jsx)(Y.b,{className:"reviews__star ".concat(t.rating>=3&&"reviews__star--active"," ")}),Object(L.jsx)(Y.b,{className:"reviews__star ".concat(t.rating>=4&&"reviews__star--active"," ")}),Object(L.jsx)(Y.b,{className:"reviews__star ".concat(t.rating>=5&&"reviews__star--active"," ")})]})]})},X=function(e){var t=e.image;return Object(L.jsx)("div",{className:"picture-box",children:Object(L.jsx)("img",{className:"picture-box__img picture-box__img--1",src:"/img/tours/".concat(t),alt:t})})},K=a(5),Z=a(7),$=a(46),ee=function(e){var t=e.tour;t&&(Number(t.locations[0].coordinates[0]),Number(t.locations[0].coordinates[1]));var a=Object(c.useState)({latitude:34.011646,longitude:-116.107963,zoom:5}),s=Object(Z.a)(a,2),r=s[0],n=s[1];return t&&t.locations?Object(L.jsx)($.b,Object(K.a)(Object(K.a)({mapStyle:"mapbox://styles/mohamedai/ckskl74tv0ell17rk4x53odnj",mapboxApiAccessToken:"pk.eyJ1IjoibW9oYW1lZGFpIiwiYSI6ImNrc2tqNHFqYTJvN2wybm9hdnJreTdvaTMifQ.WLNcgVIG5MDN9gxqQ88a8A"},r),{},{width:"100%",height:"100%",scrollZoom:!1,onViewportChange:function(e){return n(e)},children:t.locations.map((function(e){var t=Number(e.coordinates[0]),a=Number(e.coordinates[1]);return Object(L.jsx)($.a,{latitude:a,longitude:t,offsetLeft:-20,offsetTop:-10,children:Object(L.jsx)("div",{className:"marker"},t*a)})}))})):Object(L.jsx)(c.Fragment,{children:Object(L.jsx)("h1",{children:"No Tour found"})})},te=(a(98),a(62)),ae=function(e){e?p.a.defaults.headers.common.authorization="Bearer ".concat(e):delete p.a.defaults.common.authorization},se=Object(te.a)("pk_test_51JRSF2AJHQSuL36xgVLN3iL6uDsgccyG5gdbXPzBwPb6PXXRGG5LPet9720qWUKB7zJ9Hkar7B4fqXs55txpLiBd00x57dIp8g"),re=Object(d.b)((function(e){return{tours:e.tours,user:e.auth.user}}),{bookTour:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.token&&ae(localStorage.token),t.prev=1,t.next=4,p.a.get("/api/v1/bookings/checkout-session/".concat(e));case 4:return s=t.sent,t.next=7,se;case 7:return t.next=9,t.sent.redirectToCheckout({sessionId:s.data.session.id});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0.response);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},getTour:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/api/v1/tour/".concat(e));case 3:s=t.sent,a({type:O,payload:s.data.tour}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0.response});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.tours,s=a.tour,r=a.loading,n=e.user,o=e.bookTour,i=e.getTour;return Object(c.useEffect)((function(){i(t.params.slug)}),[]),Object(L.jsxs)(c.Fragment,{children:[s&&!r&&Object(L.jsx)(z,{tour:s}),Object(L.jsxs)("section",{className:"section-description",children:[s&&!r&&Object(L.jsx)(H,{tour:s}),s&&Object(L.jsx)(W,{tour:s})]}),Object(L.jsx)("section",{className:"section-pictures",children:s&&!r&&s.images.length>0&&s.images.map((function(e){var t=Object(R.a)();return Object(L.jsx)(X,{image:e},t)}))}),s&&Object(L.jsxs)("section",{className:"section-map",children:[Object(L.jsx)("div",{id:"map"}),Object(L.jsx)(ee,{tour:s})]}),Object(L.jsx)("section",{className:"section-reviews",children:Object(L.jsx)("div",{className:"reviews",children:s&&!r&&s.reviews.length>0&&s.reviews.map((function(e){return Object(L.jsx)(V,{review:e},e._id)}))})}),Object(L.jsx)("section",{className:"section-cta",children:s&&!r&&Object(L.jsxs)("div",{className:"cta",children:[Object(L.jsx)("div",{className:"cta__img cta__img--logo",children:Object(L.jsx)("img",{src:q,alt:"Natours logo"})}),Object(L.jsx)("img",{src:"/img/tours/tour-5-2.jpg",alt:"natours",className:"cta__img cta__img--1"}),Object(L.jsx)("img",{src:"/img/tours/tour-5-1.jpg",alt:"natours images",className:"cta__img cta__img--2"}),Object(L.jsxs)("div",{className:"cta__content",children:[Object(L.jsx)("h2",{className:"heading-secondary",children:"What are you waiting for?"}),Object(L.jsxs)("p",{className:"cta__text",children:[s&&s.duration," days. 1 adventure. Infinite memories. Make it yours today!"]}),n?Object(L.jsx)("button",{className:"btn btn--green span-all-rows",onClick:function(e){return o(s.id)},children:"Book tour now!"}):Object(L.jsx)("a",{href:"/login",className:"btn btn--green span-all-rows",children:"Login to Book tour"})]})]})})]})})),ce=a(24),ne=Object(d.b)((function(e){return{alerts:e.alerts}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(L.jsxs)("div",{className:"alert alert--".concat(e.alertType),children:[" ",e.msg]},e.id)}))})),oe=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(b.a)(u.a.mark((function a(s){var r,c,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,p.a.post("/api/v1/users/login",c,r);case 5:n=a.sent,s(E("Success Login","success")),l.a.set("jwt",n.data.token,{expires:7}),s({type:_,payload:n.data}),a.next=17;break;case 11:a.prev=11,a.t0=a.catch(2),l.a.remove("jwt"),console.log(a.t0.response),s({type:k}),s({type:S});case 17:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,s=Object(c.useState)({email:"",password:""}),r=Object(Z.a)(s,2),n=r[0],i=r[1],l=n.email,d=n.password,j=function(e){i(Object(K.a)(Object(K.a)({},n),{},Object(ce.a)({},e.target.name,e.target.value)))};return a?Object(L.jsx)(o.a,{to:"/"}):Object(L.jsxs)("div",{className:"login-form",children:[Object(L.jsx)("h2",{className:"heading-secondary ma-bt-lg",children:"Login into your account"}),Object(L.jsxs)("form",{className:"form form--login",onSubmit:function(e){return function(e){e.preventDefault(),t(l,d)}(e)},children:[Object(L.jsxs)("div",{className:"form__group",children:[Object(L.jsx)("label",{htmlFor:"email",className:"form__label",children:"Enter email address"}),Object(L.jsx)("input",{type:"email",id:"email",name:"email",className:"form__input",onChange:function(e){return j(e)},placeholder:"youremail@email.com",required:!0})]}),Object(L.jsxs)("div",{className:"form__group ma-bt-md",children:[Object(L.jsx)("label",{htmlFor:"password",className:"form__label",children:"Password"}),Object(L.jsx)("input",{type:"password",id:"password",className:"form__input",name:"password",onChange:function(e){return j(e)},placeholder:"........",required:!0,minLength:"8"})]}),Object(L.jsx)("div",{className:"form__group",children:Object(L.jsx)("button",{className:"btn btn--green",children:"Login"})})]})]})})),ie=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var s,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={headers:{"Content-Type":"application/json"}},r=JSON.stringify(e),t.prev=2,t.next=5,p.a.post("/api/v1/users/signup",r,s);case 5:c=t.sent,a(E("Success Register","success")),l.a.set("jwt",c.data.token,{expires:7}),a({type:_,payload:c.data}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(2),a(E(t.t0.response.data.message,"error")),a({type:k}),a({type:S});case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()},setAlert:E})((function(e){var t=e.isAuthenticated,a=e.register,s=e.setAlert,r=Object(c.useState)({name:"",email:"",password:"",confirmPassword:""}),n=Object(Z.a)(r,2),i=n[0],l=n[1],d=i.name,j=i.email,m=i.password,p=i.confirmPassword,h=function(e){l(Object(K.a)(Object(K.a)({},i),{},Object(ce.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(b.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),m!==p?s("Passwords do not match","error"):(r={name:d,email:j,password:m,confirmPassword:p},s("Success Registration","success"),a(r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(L.jsx)(o.a,{to:"/"}):Object(L.jsxs)("div",{className:"login-form",children:[Object(L.jsx)("h2",{className:"heading-secondary ma-bt-lg",children:"Singup"}),Object(L.jsxs)("form",{className:"form form--login",onSubmit:function(e){return O(e)},children:[Object(L.jsxs)("div",{className:"form__group",children:[Object(L.jsx)("label",{htmlFor:"name",className:"form__label",children:"Name"}),Object(L.jsx)("input",{type:"name",id:"name",className:"form__input",name:"name",onChange:function(e){return h(e)},placeholder:"your name",required:!0})]}),Object(L.jsxs)("div",{className:"form__group",children:[Object(L.jsx)("label",{htmlFor:"email",className:"form__label",children:"Enter email address"}),Object(L.jsx)("input",{type:"email",id:"email",className:"form__input",name:"email",onChange:function(e){return h(e)},placeholder:"youremail@email.com",required:!0})]}),Object(L.jsxs)("div",{className:"form__group ma-bt-md",children:[Object(L.jsx)("label",{htmlFor:"password",className:"form__label",children:"Password"}),Object(L.jsx)("input",{type:"password",id:"password",className:"form__input",name:"password",onChange:function(e){return h(e)},placeholder:"........",required:!0,minLength:"8"})]}),Object(L.jsxs)("div",{className:"form__group ma-bt-md",children:[Object(L.jsx)("label",{htmlFor:"confirmPassword",className:"form__label",children:"Confirm Password"}),Object(L.jsx)("input",{type:"password",id:"confirmPassword",className:"form__input",name:"confirmPassword",onChange:function(e){return h(e)},placeholder:"........",required:!0,minLength:"8"})]}),Object(L.jsx)("div",{className:"form__group",children:Object(L.jsx)("button",{className:"btn btn--green",children:"Signup"})})]})]})})),le=a(25),de=function(){return Object(L.jsxs)("nav",{className:"user-view__menu",children:[Object(L.jsxs)("ul",{className:"side-nav",children:[Object(L.jsx)("li",{className:"side-nav--active",children:Object(L.jsxs)(n.b,{to:"#",children:[" ",Object(L.jsx)(le.c,{}),"Settings"]})}),Object(L.jsx)("li",{children:Object(L.jsxs)(n.b,{to:"/bookings/my-tours",children:[Object(L.jsx)(le.b,{}),"My Bookings"]})}),Object(L.jsx)("li",{children:Object(L.jsxs)(n.b,{to:"#",children:[" ",Object(L.jsx)(le.e,{}),"My Reviews"]})}),Object(L.jsx)("li",{children:Object(L.jsxs)(n.b,{to:"#",children:[Object(L.jsx)(le.a,{}),"Billing"]})})]}),Object(L.jsxs)("div",{className:"admin-nav",children:[Object(L.jsx)("h5",{className:"admin-nav__heading",children:"Admin"}),Object(L.jsxs)("ul",{className:"side-nav",children:[Object(L.jsx)("li",{children:Object(L.jsxs)(n.b,{to:"#",children:[" ",Object(L.jsx)(le.d,{}),"Manage tours"]})}),Object(L.jsx)("li",{children:Object(L.jsxs)(n.b,{to:"#",children:[" ",Object(L.jsx)(le.f,{}),"Manage users"]})}),Object(L.jsx)("li",{children:Object(L.jsxs)(n.b,{to:"#",children:[Object(L.jsx)(le.e,{}),"Manage reviews"]})}),Object(L.jsx)("li",{children:Object(L.jsxs)(n.b,{to:"#",children:[Object(L.jsx)(le.b,{}),"Manage Bookings"]})})]})]})]})},je=a(63),ue=a.n(je),be=Object(d.b)((function(e){return{user:e.auth.user}}),{updateCurrentUser:function(e,t,a){return function(){var s=Object(b.a)(u.a.mark((function s(r){var c,n;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return(c=new FormData).append("photo",a),c.append("name",e),c.append("email",t),s.prev=4,s.next=7,p.a.patch("/api/v1/users/updateMe",c);case 7:n=s.sent,r(E("User Updated Successfully","success")),r({type:f,payload:n.data.data.user}),s.next=16;break;case 12:s.prev=12,s.t0=s.catch(4),r(E(s.t0.response.data.message,"error")),l.a.remove("jwt");case 16:case"end":return s.stop()}}),s,null,[[4,12]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.user,a=e.updateCurrentUser,s=Object(c.useState)({name:"",email:""}),r=Object(Z.a)(s,2),n=r[0],o=r[1],i=Object(c.useState)(""),l=Object(Z.a)(i,2),d=l[0],j=l[1],u=n.name,b=n.email,m=function(e){return o(Object(K.a)(Object(K.a)({},n),{},Object(ce.a)({},e.target.name,e.target.value)))};return Object(L.jsxs)("div",{className:"user-view__form-container",children:[Object(L.jsx)("h2",{className:"heading-secondary ma-bt-md",children:"Your account settings"}),Object(L.jsxs)("form",{className:"form form-user-data",onSubmit:function(e){return function(e){e.preventDefault(),a(u,b,d)}(e)},children:[Object(L.jsxs)("div",{className:"form__group",children:[Object(L.jsx)("label",{className:"form__label",htmlFor:"name",children:"Name"}),Object(L.jsx)("input",{className:"form__input",id:"name",name:"name",type:"text",placeholder:t.name,onChange:function(e){return m(e)},required:"required"})]}),Object(L.jsxs)("div",{className:"form__group ma-bt-md",children:[Object(L.jsx)("label",{className:"form__label",htmlFor:"email",children:"Email address"}),Object(L.jsx)("input",{className:"form__input",id:"email",name:"email",type:"email",placeholder:t.email,onChange:function(e){return m(e)},required:"required"})]}),Object(L.jsxs)("div",{className:"form__group form__photo-upload",children:[Object(L.jsx)("img",{className:"form__user-photo",src:"/img/users/".concat(t.photo),alt:"User photo"}),Object(L.jsx)(ue.a,{multiple:!0,value:d,onChange:function(e){j(e[0].file)},children:function(e){e.photo;var t=e.onImageUpload;return Object(L.jsx)("div",{className:"upload__image-wrapper",children:Object(L.jsx)("label",{className:"form__label",onClick:t,children:"Upload Image"})})}})]}),Object(L.jsx)("div",{className:"form__group right",children:Object(L.jsx)("button",{className:"btn btn--small btn--green",children:"Save settings"})})]})]})})),me=Object(d.b)(null,{setAlert:E,changePassword:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var s,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={headers:{"Content-Type":"application/json"}},r=JSON.stringify(e),t.prev=2,t.next=5,p.a.patch("/api/v1/users/updateMyPassword",r,s);case 5:c=t.sent,a(E("Password update Success","success")),a({type:N,payload:c.data.data.user}),a({type:y}),l.a.remove("jwt"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),a(E(t.t0.response.data.message,"error"));case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,a=e.changePassword,s=Object(c.useState)({oldPassword:"",password:"",confirmPassword:""}),r=Object(Z.a)(s,2),n=r[0],o=r[1],i=n.oldPassword,l=n.password,d=n.confirmPassword,j=function(e){return o(Object(K.a)(Object(K.a)({},n),{},Object(ce.a)({},e.target.name,e.target.value)))};return Object(L.jsxs)("div",{className:"user-view__form-container",children:[Object(L.jsx)("h2",{className:"heading-secondary ma-bt-md",children:"Password change"}),Object(L.jsxs)("form",{className:"form form-user-settings",onSubmit:function(e){return function(e){if(e.preventDefault(),""===i)t("The current password is required","error");else if(l!==d)t("The new passwords do not match","error");else{var s=Object(K.a)({},n);a(s)}}(e)},children:[Object(L.jsxs)("div",{className:"form__group",children:[Object(L.jsx)("label",{className:"form__label",htmlFor:"oldPassword",children:"Current password"}),Object(L.jsx)("input",{className:"form__input",name:"oldPassword",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",onChange:function(e){return j(e)},required:"required",minLength:"8"})]}),Object(L.jsxs)("div",{className:"form__group",children:[Object(L.jsx)("label",{className:"form__label",htmlFor:"password",children:"New password"}),Object(L.jsx)("input",{className:"form__input",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",onChange:function(e){return j(e)},required:"required",minLength:"8"})]}),Object(L.jsxs)("div",{className:"form__group ma-bt-lg",children:[Object(L.jsx)("label",{className:"form__label",htmlFor:"confirmPassword",children:"Confirm password"}),Object(L.jsx)("input",{className:"form__input",name:"confirmPassword",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",onChange:function(e){return j(e)},required:"required",minLength:"8"})]}),Object(L.jsx)("div",{className:"form__group right",children:Object(L.jsx)("button",{className:"btn btn--small btn--green",children:"Save password"})})]})]})})),pe=function(){return Object(L.jsx)("main",{className:"main",children:Object(L.jsxs)("div",{className:"user-view",children:[Object(L.jsx)(de,{}),Object(L.jsxs)("div",{className:"user-view__content",children:[Object(L.jsx)(be,{}),Object(L.jsx)("div",{className:"line",children:"\xa0"}),Object(L.jsx)(me,{})]})]})})},he=Object(d.b)(null,{createBooking:function(e,t,a){return function(){var s=Object(b.a)(u.a.mark((function s(r){var c;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,{headers:{"Content-Type":"application/json"}},s.next=4,p.a.get("/api/v1/bookings/my-tours/".concat(e,"/").concat(t,"/").concat(a));case 4:c=s.sent,console.log("CreateBookings:",c.data),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.log("CreateBookings Error:",s.t0.response.data.message);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.createBooking,a=e.match;return Object(c.useEffect)((function(){var e=a.params.tourId,s=a.params.userId,r=a.params.price;console.log(e,s,r),t(e,s,r)})),console.log("window pathname:",window.location.pathname),Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"Booking Success"})})})),Oe=Object(d.b)((function(e){return{tours:e.bookings.toursBooked}}),{getAllBooking:function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,p.a.get("/api/v1/bookings/my-tours",a);case 4:s=e.sent,console.log("my bookings from res.data:",s.data),console.log("my bookings from res.data.tours:",s.data.tours),t({type:C,payload:s.data.tours}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("my bookings Error:",e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getAllBooking,a=e.tours;return Object(c.useEffect)((function(){t()}),[]),Object(L.jsx)("main",{className:"main",children:Object(L.jsx)("div",{className:"card-container",children:a&&a.length>0&&a.map((function(e){return Object(L.jsx)(J,{tour:e},e._id)}))})})})),xe=a.p+"static/media/logo-green.de221e6e.png",ve=function(){return Object(L.jsxs)("div",{className:"footer",children:[Object(L.jsx)("div",{className:"footer__logo",children:Object(L.jsx)(n.b,{to:"/",children:Object(L.jsx)("img",{src:xe,alt:"logo"})})}),Object(L.jsxs)("ul",{className:"footer__nav",children:[Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"#",children:"About us"})}),Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"#",children:"Download apps"})}),Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"#",children:"Become a guide"})}),Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"#",children:"Careers"})}),Object(L.jsx)("li",{children:Object(L.jsx)("a",{href:"#",children:"Contact"})})]}),Object(L.jsx)("p",{className:"footer__copyright",children:"\xa9 by Mohamed Iman Portfolio. All rights reserved."})]})},ge=a(66),_e=["component","auth"],fe=Object(d.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth.isAuthenticated,s=Object(ge.a)(e,_e);return Object(L.jsx)(o.b,Object(K.a)(Object(K.a)({},s),{},{render:function(e){return a?Object(L.jsx)(t,Object(K.a)({},e)):Object(L.jsx)(o.a,{to:"/login"})}}))})),Ne=a(31),we=a(64),ye=a(65),ke=a(27),Se=[],Ae={user:null,isAuthenticated:!1},Te={tours:[],tour:null,toursBooked:null,loading:!0,errors:null},Ce={toursBooked:null},Re=Object(Ne.combineReducers)({tours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(K.a)(Object(K.a)({},e),{},{tours:t.payload,loading:!1,errors:null});case O:return Object(K.a)(Object(K.a)({},e),{},{tour:t.payload,errors:null,loading:!1});case g:return Object(K.a)(Object(K.a)({},e),{},{tour:JSON.parse(t.payload),errors:null,loading:!1});case w:return Object(K.a)(Object(K.a)({},e),{},{toursBooked:t.payload,errors:null,loading:!1});case v:return Object(K.a)(Object(K.a)({},e),{},{tours:[],tour:null,errors:t.payload,loading:!1});case x:return Object(K.a)(Object(K.a)({},e),{},{tour:null,errors:t.payload,loading:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(K.a)(Object(K.a)({},e),{},{user:t.payload,isAuthenticated:!0});case f:case N:return Object(K.a)(Object(K.a)({},e),{},{user:t.payload,isAuthenticated:!0});case S:case k:case y:return l.a.remove("jwt"),Object(K.a)(Object(K.a)({},e),{},{user:null,isAuthenticated:!1});default:return e}},bookings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(K.a)(Object(K.a)({},e),{},{toursBooked:t.payload});default:return e}},alerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case A:return[].concat(Object(ke.a)(e),[s]);case T:return e.filter((function(e){return e.id!==s}));default:return e}}}),Ee=[ye.a],Pe=Object(Ne.createStore)(Re,{},Object(we.composeWithDevTools)(Ne.applyMiddleware.apply(void 0,Ee))),Le=(a(100),function(){return l.a.get("jwt")&&ae(l.a.get("jwt")),console.log("Cookies check from the App:",l.a.get("jwt")),l.a.get(!0)&&Pe.dispatch(P()),Object(c.useEffect)((function(){Pe.dispatch(function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/v1/tours");case 3:a=e.sent,t({type:h,payload:a.data.data.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),t({type:v,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),Pe.dispatch((function(e){localStorage.tour&&e({type:g,payload:localStorage.tour})}))}),[]),Object(L.jsx)(d.a,{store:Pe,children:Object(L.jsxs)(n.a,{children:[Object(L.jsx)(M,{}),Object(L.jsx)(ne,{}),Object(L.jsxs)(o.d,{children:[Object(L.jsx)(fe,{exact:!0,path:"/me",component:pe}),Object(L.jsx)(fe,{exact:!0,path:"/bookings/my-tours",component:Oe}),Object(L.jsx)(o.b,{exact:!0,path:"my-tours/:tourId/:userId/:price",component:he}),Object(L.jsx)(o.b,{exact:!0,path:"/my-tours",component:he}),Object(L.jsx)(o.b,{exact:!0,path:"/",component:G}),Object(L.jsx)(o.b,{exact:!0,path:"/tour/:slug",component:re}),Object(L.jsx)(o.b,{exact:!0,path:"/login",component:oe}),Object(L.jsx)(o.b,{exact:!0,path:"/signup",component:ie})]}),Object(L.jsx)(ve,{})]})})});r.a.render(Object(L.jsx)(Le,{}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.c06d7be2.chunk.js.map